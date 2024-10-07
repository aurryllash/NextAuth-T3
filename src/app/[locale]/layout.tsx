import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { TRPCReactProvider } from "~/trpc/react";
import Footer from "./_components/Footer/footer";
import Providers from "./providers";
import Header from "./_components/Header/header";

import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import { routing } from "~/i18n/routing";

// export async function getStaticParams() {
//   return routing.locales.map((locale) => ({locale}));
// }

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{ children: React.ReactNode, params: { locale: string } }>) {

  const messages = await getMessages();

  return (
    <html lang={params.locale} className={`${GeistSans.variable}`}>
      <body>
        <Providers>
          <TRPCReactProvider>
            <NextIntlClientProvider messages={messages}>
              <Header />
              {children}
              <Footer />
            </NextIntlClientProvider>
          </TRPCReactProvider>
        </Providers>
      </body>
    </html>
  );
}
