import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "underTheHoodPage" });
  const ogLocaleMap = {
    en: "en_US",
    ru: "ru_RU",
    th: "th_TH",
    de: "de_DE",
    fr: "fr_FR",
    ja: "ja_JP",
    zh: "zh_CN",
    ko: "ko_KR",
    it: "it_IT",
  };

  return {
    metadataBase: new URL("https://altsendme.com"),
    title: t("metaTitle"),
    description: t("metaDescription"),
    openGraph: {
      type: "website",
      locale: ogLocaleMap[locale] || "en_US",
      url: `https://altsendme.com/${locale}/under-the-hood`,
      siteName: "AltSendme",
      title: t("metaTitle"),
      description: t("metaDescription"),
      images: [
        {
          url: "/hero.png",
          width: 1200,
          height: 630,
          alt: t("heroAlt"),
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t("metaTitle"),
      description: t("metaDescription"),
      images: ["/hero.png"],
      creator: "@tonyantony300",
    },
    alternates: {
      canonical: `https://altsendme.com/${locale}/under-the-hood`,
    },
  };
}

export default function UnderTheHoodLayout({ children }) {
  return children;
}
