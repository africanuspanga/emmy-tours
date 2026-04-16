import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import KilimanjaroClient from "./client";

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
  "en": "Kilimanjaro Climbing Routes | Emmy Safaris & Tours",
  "it": "Rotte per il Kilimanjaro | Emmy Safaris & Tours",
  "fr": "Routes d'Ascension du Kilimandjaro | Emmy Safaris & Tours",
  "de": "Kilimandscharo-Besteigungsrouten | Emmy Safaris & Tours"
};
  const descriptions: Record<string, string> = {
  "en": "Climb Africa's highest peak with Emmy Safaris. Choose from Lemosho, Machame, Marangu, Rongai & Umbwe routes. KINAPA-certified guides.",
  "it": "Scala la vetta più alta dell'Africa con Emmy Safaris. Scegli tra le rotte Lemosho, Machame, Marangu, Rongai e Umbwe. Guide certificate KINAPA.",
  "fr": "Gravissez le plus haut sommet d'Afrique avec Emmy Safaris. Choisissez parmi les routes Lemosho, Machame, Marangu, Rongai et Umbwe. Guides certifiés KINAPA.",
  "de": "Besteigen Sie den höchsten Gipfel Afrikas mit Emmy Safaris. Wählen Sie aus den Routen Lemosho, Machame, Marangu, Rongai und Umbwe. KINAPA-zertifizierte Führer."
};
  return {
    title: titles[locale] || titles.en,
    description: descriptions[locale] || descriptions.en,
    alternates: {
      canonical: `https://emmysafaris.com/${locale}/kilimanjaro`,
      languages: {
        "en-US": `https://emmysafaris.com/en/kilimanjaro`,
        "it-IT": `https://emmysafaris.com/it/kilimanjaro`,
        "fr-FR": `https://emmysafaris.com/fr/kilimanjaro`,
        "de-DE": `https://emmysafaris.com/de/kilimanjaro`,
      },
    },
  };
}

export default async function Page() {
  return <KilimanjaroClient />;
}
