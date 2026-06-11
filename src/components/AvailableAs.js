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

function ArrowUpRightIcon({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path d="M7 17 17 7" />
      <path d="M7 7h10v10" />
    </svg>
  );
}

export default function AvailableAs() {
  const t = useTranslations('availableAs');

  return (
    <section className="w-full py-12 px-5 md:px-10 lg:px-[60px]">
      <div className="w-full max-w-[1200px] mx-auto">
        <h2 className="font-funnel-sans text-[32px] leading-[1.2] text-center text-foreground font-semibold mb-8 md:text-[40px] md:mb-10 lg:mb-12">
          {t('title')}
        </h2>

        <div className="border border-foreground/15">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {PLATFORMS.map((platform, index) => (
              <a
                key={platform.key}
                href={platform.href}
                className={`group flex flex-col bg-[#FBF8F2] p-6 md:p-8 transition-colors hover:bg-[#F6F2EA] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/30 focus-visible:ring-offset-2 ${
                  index < PLATFORMS.length - 1
                    ? 'border-b border-foreground/15'
                    : ''
                } ${
                  index % 2 === 0 && index < PLATFORMS.length - 1
                    ? 'md:border-r'
                    : ''
                } ${
                  index < 2 ? 'md:border-b lg:border-b-0' : 'md:border-b-0'
                } ${
                  index < PLATFORMS.length - 1 ? 'lg:border-r lg:border-b-0' : ''
                }`}
              >
                <div className="mb-4 flex justify-end md:mb-5">
                  <ArrowUpRightIcon className="w-5 h-5 text-foreground/35 transition-all duration-200 group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
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
                <p className="font-funnel-sans text-sm text-foreground/55 font-normal leading-relaxed md:text-base">
                  {t(`${platform.key}.description`)}
                </p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
