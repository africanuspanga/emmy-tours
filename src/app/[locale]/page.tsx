import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import HomeClient from "./home-client";

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
  "en": "Emmy Safaris & Tours | Tanzania Safari Experts",
  "it": "Emmy Safaris & Tours | Esperti di Safari in Tanzania",
  "fr": "Emmy Safaris & Tours | Experts en Safari en Tanzanie",
  "de": "Emmy Safaris & Tours | Safari-Experten in Tansania"
};
  const descriptions: Record<string, string> = {
  "en": "Tanzania's finest safari operator. Expert guides, tailor-made itineraries, Kilimanjaro climbs & Zanzibar escapes. 10+ years, 2,500+ happy travellers. Based in Arusha.",
  "it": "Il miglior operatore di safari in Tanzania. Guide esperte, itinerari su misura, scalate del Kilimanjaro e fughe a Zanzibar. Più di 10 anni di esperienza.",
  "fr": "Le meilleur opérateur de safari en Tanzanie. Guides experts, itinéraires sur mesure, ascensions du Kilimandjaro et escapades à Zanzibar. Plus de 10 ans d'expérience.",
  "de": "Der beste Safari-Anbieter in Tansania. Expertenführer, maßgeschneiderte Reiserouten, Kilimandscharo-Besteigungen und Sansibar-Ausflüge. Mehr als 10 Jahre Erfahrung."
};
  return {
    title: titles[locale] || titles.en,
    description: descriptions[locale] || descriptions.en,
    alternates: {
      canonical: `https://emmysafaris.com/${locale}`,
      languages: {
        "en-US": `https://emmysafaris.com/en`,
        "it-IT": `https://emmysafaris.com/it`,
        "fr-FR": `https://emmysafaris.com/fr`,
        "de-DE": `https://emmysafaris.com/de`,
      },
    },
  };
}

export default async function Page() {
  return <HomeClient />;
}
