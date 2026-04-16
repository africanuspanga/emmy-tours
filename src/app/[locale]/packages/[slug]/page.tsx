import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import PackageDetailClient from "./client";
import { safariPackages } from "@/data/safariPackages";

export function generateStaticParams() {
  const slugs = safariPackages.map((item) => item.slug);
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
  const item = safariPackages.find((p) => p.slug === slug);
  const titles: Record<string, string> = {
  "en": "{title} | Emmy Safaris & Tours",
  "it": "{title} | Emmy Safaris & Tours",
  "fr": "{title} | Emmy Safaris & Tours",
  "de": "{title} | Emmy Safaris & Tours"
};
  const descriptions: Record<string, string> = {
  "en": "Book the {title} with Emmy Safaris. Expert guides, premium lodges, and unforgettable wildlife encounters in Tanzania.",
  "it": "Prenota {title} con Emmy Safaris. Guide esperte, lodge di lusso e incontri indimenticabili con la fauna selvatica in Tanzania.",
  "fr": "Réservez {title} avec Emmy Safaris. Guides experts, lodges premium et rencontres inoubliables avec la faune en Tanzanie.",
  "de": "Buchen Sie {title} mit Emmy Safaris. Expertenführer, Premium-Lodges und unvergessliche Wildtierbegegnungen in Tansania."
};
  const pageTitle = titles[locale].replace(/{title}/g, item?.title || "");
  const pageDesc = descriptions[locale].replace(/{title}/g, item?.title || "");
  return {
    title: pageTitle,
    description: pageDesc,
    alternates: {
      canonical: `https://emmysafaris.com/${locale}/packages/${slug}`,
      languages: {
        "en-US": `https://emmysafaris.com/en/packages/${slug}`,
        "it-IT": `https://emmysafaris.com/it/packages/${slug}`,
        "fr-FR": `https://emmysafaris.com/fr/packages/${slug}`,
        "de-DE": `https://emmysafaris.com/de/packages/${slug}`,
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
  return <PackageDetailClient slug={slug} />;
}
