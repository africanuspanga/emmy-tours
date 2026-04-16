import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import ContactClient from "./client";

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
  "en": "Contact Us | Emmy Safaris & Tours",
  "it": "Contattaci | Emmy Safaris & Tours",
  "fr": "Contactez-Nous | Emmy Safaris & Tours",
  "de": "Kontakt | Emmy Safaris & Tours"
};
  const descriptions: Record<string, string> = {
  "en": "Get in touch with Emmy Safaris & Tours in Arusha, Tanzania. Plan your safari, Kilimanjaro climb or Zanzibar beach holiday today.",
  "it": "Contatta Emmy Safaris & Tours ad Arusha, Tanzania. Pianifica oggi il tuo safari, la scalata del Kilimanjaro o la vacanza in spiaggia a Zanzibar.",
  "fr": "Contactez Emmy Safaris & Tours à Arusha, Tanzanie. Planifiez dès aujourd'hui votre safari, ascension du Kilimandjaro ou séjour plage à Zanzibar.",
  "de": "Nehmen Sie Kontakt mit Emmy Safaris & Tours in Arusha, Tansania, auf. Planen Sie noch heute Ihre Safari, Kilimandscharo-Besteigung oder Ihren Sansibar-Strandurlaub."
};
  return {
    title: titles[locale] || titles.en,
    description: descriptions[locale] || descriptions.en,
    alternates: {
      canonical: `https://emmysafaris.com/${locale}/contact`,
      languages: {
        "en-US": `https://emmysafaris.com/en/contact`,
        "it-IT": `https://emmysafaris.com/it/contact`,
        "fr-FR": `https://emmysafaris.com/fr/contact`,
        "de-DE": `https://emmysafaris.com/de/contact`,
      },
    },
  };
}

export default async function Page() {
  return <ContactClient />;
}
