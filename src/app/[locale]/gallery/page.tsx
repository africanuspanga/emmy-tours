import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import GalleryClient from "./client";

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
  "en": "Gallery | Emmy Safaris & Tours",
  "it": "Galleria | Emmy Safaris & Tours",
  "fr": "Galerie | Emmy Safaris & Tours",
  "de": "Galerie | Emmy Safaris & Tours"
};
  const descriptions: Record<string, string> = {
  "en": "Browse our gallery of Tanzania safari photos, Kilimanjaro climbs, Zanzibar beaches, and cultural moments captured by Emmy Safaris.",
  "it": "Sfoglia la nostra galleria di foto di safari in Tanzania, scalate del Kilimanjaro, spiagge di Zanzibar e momenti culturali catturati da Emmy Safaris.",
  "fr": "Parcourez notre galerie de photos de safari en Tanzanie, d'ascensions du Kilimandjaro, de plages de Zanzibar et de moments culturels capturés par Emmy Safaris.",
  "de": "Durchsuchen Sie unsere Galerie mit Fotos von Safaris in Tansania, Kilimandscharo-Besteigungen, Sansibar-Stränden und kulturellen Momenten, die von Emmy Safaris festgehalten wurden."
};
  return {
    title: titles[locale] || titles.en,
    description: descriptions[locale] || descriptions.en,
    alternates: {
      canonical: `https://emmysafaris.com/${locale}/gallery`,
      languages: {
        "en-US": `https://emmysafaris.com/en/gallery`,
        "it-IT": `https://emmysafaris.com/it/gallery`,
        "fr-FR": `https://emmysafaris.com/fr/gallery`,
        "de-DE": `https://emmysafaris.com/de/gallery`,
      },
    },
  };
}

export default async function Page() {
  return <GalleryClient />;
}
