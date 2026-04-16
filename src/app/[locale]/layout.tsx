import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import "../globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import ClientProviders from "@/components/layout/ClientProviders";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Emmy Safaris & Tours | Tanzania Safari Experts",
  description:
    "Tanzania's finest safari operator. Expert guides, tailor-made itineraries, Kilimanjaro climbs & Zanzibar escapes. 10+ years, 2,500+ happy travellers. Based in Arusha.",
  keywords:
    "Tanzania safari, Kilimanjaro climb, Serengeti, Ngorongoro, Zanzibar, Arusha, Emmy Safaris",
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const messages = await getMessages({ locale });

  return (
    <html
      lang={locale}
      className={`${cormorant.variable} ${inter.variable}`}
    >
      <head>
        <link rel="icon" href="/emmy tours favicon.png" type="image/png" />
        <link rel="shortcut icon" href="/emmy tours favicon.png" type="image/png" />
      </head>
      <body className="bg-[#2e2419] text-[#f5f0e8] font-body overflow-x-hidden">
        <NextIntlClientProvider messages={messages}>
          <ClientProviders>
            <Navbar />
            <main>{children}</main>
            <Footer />
            <WhatsAppButton />
          </ClientProviders>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
