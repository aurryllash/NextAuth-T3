import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { TRPCReactProvider } from "~/trpc/react";
import Footer from "./_components/Footer/footer";
import type { Metadata } from "next/types";
import Providers from "./providers";

export const metadata: Metadata = {
  title: "T3 Auth",
  description: "Generated by create-t3-app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body>
        <Providers>
          <TRPCReactProvider>
            {children}
            <Footer />
          </TRPCReactProvider>
        </Providers>
      </body>
    </html>
  );
}
