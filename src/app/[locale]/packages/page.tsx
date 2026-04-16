import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import PackagesClient from "./client";

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
  "en": "Safari Packages | Emmy Safaris & Tours",
  "it": "Pacchetti Safari | Emmy Safaris & Tours",
  "fr": "Circuits Safari | Emmy Safaris & Tours",
  "de": "Safari-Pakete | Emmy Safaris & Tours"
};
  const descriptions: Record<string, string> = {
  "en": "Explore our handpicked Tanzania safari packages — from 2-day Ngorongoro getaways to 10-day Great Migration adventures. All fully customisable.",
  "it": "Esplora i nostri pacchetti safari in Tanzania — da 2 giorni al Ngorongoro a 10 giorni di Grande Migrazione. Tutti personalizzabili.",
  "fr": "Explorez nos circuits safari en Tanzanie — de 2 jours au Ngorongoro à 10 jours de Grande Migration. Tous entièrement personnalisables.",
  "de": "Entdecken Sie unsere handverlesenen Safari-Pakete in Tansania — von 2 Tagen im Ngorongoro bis zu 10 Tagen Großer Migration. Alle individuell anpassbar."
};
  return {
    title: titles[locale] || titles.en,
    description: descriptions[locale] || descriptions.en,
    alternates: {
      canonical: `https://emmysafaris.com/${locale}/packages`,
      languages: {
        "en-US": `https://emmysafaris.com/en/packages`,
        "it-IT": `https://emmysafaris.com/it/packages`,
        "fr-FR": `https://emmysafaris.com/fr/packages`,
        "de-DE": `https://emmysafaris.com/de/packages`,
      },
    },
  };
}

export default async function Page() {
  return <PackagesClient />;
}
