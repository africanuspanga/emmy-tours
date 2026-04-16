import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import AccommodationClient from "./client";

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
  "en": "Accommodation | Emmy Safaris & Tours",
  "it": "Alloggio | Emmy Safaris & Tours",
  "fr": "Hébergement | Emmy Safaris & Tours",
  "de": "Unterkunft | Emmy Safaris & Tours"
};
  const descriptions: Record<string, string> = {
  "en": "Stay in carefully selected lodges and tented camps across Tanzania. From luxury Serengeti camps to peaceful Karatu lodges.",
  "it": "Soggiorna in lodge e campi tendati selezionati in tutta la Tanzania. Dai campi di lusso nel Serengeti ai lodge tranquilli di Karatu.",
  "fr": "Séjournez dans des lodges et camps de tentes soigneusement sélectionnés en Tanzanie. Des camps de luxe du Serengeti aux lodges paisibles de Karatu.",
  "de": "Übernachten Sie in sorgfältig ausgewählten Lodges und Zeltdörfern in ganz Tansania. Von luxuriösen Serengeti-Camps bis zu friedlichen Karatu-Lodges."
};
  return {
    title: titles[locale] || titles.en,
    description: descriptions[locale] || descriptions.en,
    alternates: {
      canonical: `https://emmysafaris.com/${locale}/accommodation`,
      languages: {
        "en-US": `https://emmysafaris.com/en/accommodation`,
        "it-IT": `https://emmysafaris.com/it/accommodation`,
        "fr-FR": `https://emmysafaris.com/fr/accommodation`,
        "de-DE": `https://emmysafaris.com/de/accommodation`,
      },
    },
  };
}

export default async function Page() {
  return <AccommodationClient />;
}
