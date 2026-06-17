import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "downloadsPage" });
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
      url: `https://altsendme.com/${locale}/downloads`,
      siteName: "AltSendme",
      title: t("metaTitle"),
      description: t("metaDescription"),
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: "AltSendme Downloads",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t("metaTitle"),
      description: t("metaDescription"),
      images: ["/og-image.png"],
      creator: "@tonyantony300",
    },
    alternates: {
      canonical: `https://altsendme.com/${locale}/downloads`,
    },
  };
}

export default function DownloadsLayout({ children }) {
  return children;
}
