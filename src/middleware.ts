/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { match } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'
 
const headers = { 'accept-language': 'en-US,en;q=0.5' }
const languages = new Negotiator({ headers }).languages()
import { defaultLocale } from '~/constants/locales'
import { i18n } from 'i18n-config'

import { NextResponse } from "next/server";
 
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function middleware(request: any) {
  // Check if there is any supported locale in the pathname
  const { pathname } = request.nextUrl
  const pathnameHasLocale = i18n.locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )
   
  if (pathnameHasLocale) return
 
  // Redirect if there is no locale
  const locale = match(languages, i18n.locales, defaultLocale) // -> 'en-US'
  if (
    pathname.startsWith('/api') ||
    pathname.startsWith('/_next') ||
    /\.(.*)$/.test(pathname) // skips static files (e.g., .js, .css, images)
  ) {
    return NextResponse.next();
  }

    request.nextUrl.pathname = `/${locale}${pathname}`
  // e.g. incoming request is /products
  // The new URL is now /en-US/products
  return NextResponse.redirect(request.nextUrl)
}
 
export const config = {
  matcher: [
    // Skip all internal paths (_next)
    '/((?!_next).*)',
    // Optional: only run on root (/) URL
    // '/'
  ],
}