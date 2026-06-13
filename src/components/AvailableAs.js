"use client";

import { useTranslations } from 'next-intl';

const PLATFORMS = [
  {
    key: 'desktop',
    image: '/desktop-ss.png',
    imageAlt: 'Desktop applications',
    width: 1010,
    height: 645,
    href: '#download-desktop',
  },
  {
    key: 'android',
    image: '/mobile-ss.png',
    imageAlt: 'Android application',
    width: 601,
    height: 448,
    href: '#download-android',
  },
  {
    key: 'cli',
    image: '/cli-ss.png',
    imageAlt: 'Command line interface',
    width: 1214,
    height: 739,
    href: '#download-cli',
  },
  {
    key: 'web',
    image: '/browser-ss.png',
    imageAlt: 'Web application',
    width: 1010,
    height: 687,
    href: '#download-web',
  },
];

const cardBorderClasses = (index, total) =>
  [
    index < total - 1 ? 'border-b border-foreground/15' : '',
    index % 2 === 0 && index < total - 1 ? 'md:border-r' : '',
    index < 2 ? 'md:border-b lg:border-b-0' : 'md:border-b-0',
    index < total - 1 ? 'lg:border-r lg:border-b-0' : '',
  ].join(' ');

const cardBaseClasses =
  'group flex h-full flex-col bg-[#FBF8F2] p-6 md:p-8 transition-colors hover:bg-[#F6F2EA]';

export default function AvailableAs() {
  const t = useTranslations('availableAs');

  return (
    <section className="w-full py-12 px-5 md:px-10 lg:px-[60px]">
      <div className="w-full max-w-[1200px] mx-auto">
        <div className="px-5 pt-10">
          <h2 className="font-funnel-sans text-[32px] leading-[1.2] text-center text-foreground font-bold mb-8 whitespace-pre-line md:text-[40px] md:mb-10 lg:mb-12">
            {t('title')}
          </h2>
        </div>

        <div className="border border-foreground/15">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {PLATFORMS.map((platform, index) => {
              const isWeb = platform.key === 'web';
              const cardClasses = `${cardBaseClasses} ${cardBorderClasses(index, PLATFORMS.length)}`;
              const cardContent = (
                <>
                  <div className="mb-5 aspect-[3/2] w-full overflow-hidden">
                    <img
                      src={platform.image}
                      alt={platform.imageAlt}
                      width={platform.width}
                      height={platform.height}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-contain object-center"
                    />
                  </div>
                  <h3 className="font-funnel-sans text-lg text-foreground font-semibold mb-2 md:text-xl">
                    {t(`${platform.key}.title`)}
                  </h3>
                  <p className="font-funnel-sans text-sm text-foreground/55 font-normal leading-relaxed mb-6 flex-grow md:text-base md:mb-8">
                    {t(`${platform.key}.description`)}
                  </p>
                  {isWeb ? (
                    <span className="font-funnel-sans text-sm font-medium text-foreground/55 md:text-base">
                      {t('comingSoon')}
                    </span>
                  ) : (
                    <span className="font-funnel-sans text-sm font-semibold text-[#73411F] underline underline-offset-[3px] md:text-base">
                      {t('download')}
                    </span>
                  )}
                </>
              );

              if (isWeb) {
                return (
                  <div key={platform.key} className={cardClasses}>
                    {cardContent}
                  </div>
                );
              }

              return (
                <a
                  key={platform.key}
                  href={platform.href}
                  className={`${cardClasses} focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/30 focus-visible:ring-offset-2`}
                >
                  {cardContent}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
