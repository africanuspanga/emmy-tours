import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import KilimanjaroDetailClient from "./client";
import { kilimanjaroRoutes } from "@/data/kilimanjaroRoutes";

export function generateStaticParams() {
  const slugs = kilimanjaroRoutes.map((item) => item.slug);
  const params = [];
  for (const locale of ["en", "it", "fr", "de"]) {
    for (const slug of slugs) {
      params.push({ locale, slug });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const item = kilimanjaroRoutes.find((p) => p.slug === slug);
  const titles: Record<string, string> = {
  "en": "{title} | Emmy Safaris & Tours",
  "it": "{title} | Emmy Safaris & Tours",
  "fr": "{title} | Emmy Safaris & Tours",
  "de": "{title} | Emmy Safaris & Tours"
};
  const descriptions: Record<string, string> = {
  "en": "Plan your {title} climb with Emmy Safaris. Expert KINAPA-certified guides, premium equipment, and a safe route to the Roof of Africa.",
  "it": "Pianifica la tua scalata {title} con Emmy Safaris. Guide esperte certificate KINAPA, attrezzatura premium e una rotta sicura verso il Tetto d'Africa.",
  "fr": "Planifiez votre ascension {title} avec Emmy Safaris. Guides experts certifiés KINAPA, équipement premium et itinéraire sûr vers le Toit de l'Afrique.",
  "de": "Planen Sie Ihre {title}-Besteigung mit Emmy Safaris. Expertenführer mit KINAPA-Zertifizierung, Premium-Ausrüstung und sicherer Route auf das Dach Afrikas."
};
  const pageTitle = titles[locale].replace(/{title}/g, item?.name || "");
  const pageDesc = descriptions[locale].replace(/{title}/g, item?.name || "");
  return {
    title: pageTitle,
    description: pageDesc,
    alternates: {
      canonical: `https://emmysafaris.com/${locale}/kilimanjaro/${slug}`,
      languages: {
        "en-US": `https://emmysafaris.com/en/kilimanjaro/${slug}`,
        "it-IT": `https://emmysafaris.com/it/kilimanjaro/${slug}`,
        "fr-FR": `https://emmysafaris.com/fr/kilimanjaro/${slug}`,
        "de-DE": `https://emmysafaris.com/de/kilimanjaro/${slug}`,
      },
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  return <KilimanjaroDetailClient slug={slug} />;
}
