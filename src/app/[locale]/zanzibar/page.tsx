import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import ZanzibarClient from "./client";

export function generateStaticParams() {
  return [
    { locale: "en" },
    { locale: "it" },
    { locale: "fr" },
    { locale: "de" },
  ];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  setRequestLocale(locale);
  const titles: Record<string, string> = {
  "en": "Zanzibar Holidays | Emmy Safaris & Tours",
  "it": "Vacanze a Zanzibar | Emmy Safaris & Tours",
  "fr": "Séjours à Zanzibar | Emmy Safaris & Tours",
  "de": "Sansibar-Urlaub | Emmy Safaris & Tours"
};
  const descriptions: Record<string, string> = {
  "en": "Discover Zanzibar with Emmy Safaris — spice tours, Stone Town, Mnemba Atoll, Safari Blue, and pristine white-sand beaches.",
  "it": "Scopri Zanzibar con Emmy Safaris — tour delle spezie, Stone Town, Mnemba Atoll, Safari Blue e spiagge bianche immacolate.",
  "fr": "Découvrez Zanzibar avec Emmy Safaris — tours des épices, Stone Town, Mnemba Atoll, Safari Blue et plages de sable blanc immaculées.",
  "de": "Entdecken Sie Sansibar mit Emmy Safaris — Gewürztouren, Stone Town, Mnemba Atoll, Safari Blue und unberührte weiße Sandstrände."
};
  return {
    title: titles[locale] || titles.en,
    description: descriptions[locale] || descriptions.en,
    alternates: {
      canonical: `https://emmysafaris.com/${locale}/zanzibar`,
      languages: {
        "en-US": `https://emmysafaris.com/en/zanzibar`,
        "it-IT": `https://emmysafaris.com/it/zanzibar`,
        "fr-FR": `https://emmysafaris.com/fr/zanzibar`,
        "de-DE": `https://emmysafaris.com/de/zanzibar`,
      },
    },
  };
}

export default async function Page() {
  return <ZanzibarClient />;
}
