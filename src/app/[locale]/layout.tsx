import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { TRPCReactProvider } from "~/trpc/react";
import Footer from "./_components/Footer/footer";
import type { Metadata } from "next/types";
import Providers from "./providers";
import Header from "./_components/Header/header";

import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";


// export async function generateStaticParams() {
//   return [{ locale: "en" }, { locale: "ge" }]
// }

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{ children: React.ReactNode, params: { locale: string } }>) {
  const messages = await getMessages();
  return (
        <NextIntlClientProvider messages={messages}>
          <Header />
          {children}
          <Footer />
        </NextIntlClientProvider>
  );
}
