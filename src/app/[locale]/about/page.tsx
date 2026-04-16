import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import AboutClient from "./client";

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
  "en": "About Us | Emmy Safaris & Tours",
  "it": "Chi Siamo | Emmy Safaris & Tours",
  "fr": "À Propos | Emmy Safaris & Tours",
  "de": "Über Uns | Emmy Safaris & Tours"
};
  const descriptions: Record<string, string> = {
  "en": "Meet Emmy Safaris — a family-run tour operator in Arusha, Tanzania. 10+ years of crafting unforgettable safaris, Kilimanjaro climbs and Zanzibar holidays.",
  "it": "Conosci Emmy Safaris — un tour operator a conduzione familiare ad Arusha, Tanzania. Più di 10 anni di safari indimenticabili.",
  "fr": "Découvrez Emmy Safaris — un tour operator familial à Arusha, Tanzanie. Plus de 10 ans d'expérience dans les safaris inoubliables.",
  "de": "Lernen Sie Emmy Safaris kennen — ein familiengeführter Reiseveranstalter in Arusha, Tansania. Mehr als 10 Jahre unvergessliche Safaris."
};
  return {
    title: titles[locale] || titles.en,
    description: descriptions[locale] || descriptions.en,
    alternates: {
      canonical: `https://emmysafaris.com/${locale}/about`,
      languages: {
        "en-US": `https://emmysafaris.com/en/about`,
        "it-IT": `https://emmysafaris.com/it/about`,
        "fr-FR": `https://emmysafaris.com/fr/about`,
        "de-DE": `https://emmysafaris.com/de/about`,
      },
    },
  };
}

export default async function Page() {
  return <AboutClient />;
}
