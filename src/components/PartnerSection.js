"use client";

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';

export default function PartnerSection() {
  const t = useTranslations('partners');

  return (
    <section
      id="partners-section"
      className="relative w-full scroll-mt-24 py-16 px-5 md:px-10 md:py-20 lg:px-[60px] lg:py-24 text-zinc-100 overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none isolate" aria-hidden="true">
        <div className="absolute inset-0 bg-dark" />
        <div className="absolute inset-0 dark-grain" />
        <div className="absolute inset-0 dark-grain" />
        <div className="absolute inset-0 dark-grain" />
      </div>

      <div className="relative z-10 w-full max-w-[960px] mx-auto">
        <h2 className="font-funnel-sans text-[32px] leading-[1.2] text-center text-accent font-bold mb-8 whitespace-pre-line md:text-[40px] md:mb-10 lg:mb-12">
          {t('title')}
        </h2>

        <div className="border border-zinc-700/60">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <a
              href="https://www.lambdatest.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center border-b border-zinc-700/60 bg-[#FBF8F2] px-6 py-14 transition-colors hover:bg-[#F6F2EA] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-dark md:border-b-0 md:border-r md:px-8 md:py-16"
            >
              <Image
                src="/testMUlogo.svg"
                alt={t('testmuAlt')}
                width={200}
                height={63}
                className="h-auto w-full max-w-[200px] object-contain transition-transform group-hover:scale-[1.02] md:max-w-[240px]"
              />
            </a>

            <div className="flex flex-col justify-center bg-accent px-6 py-12 text-foreground md:px-8 md:py-14">
              <h3 className="font-funnel-sans text-lg font-semibold leading-snug md:text-xl">
                {t('ctaTitle')}
              </h3>
              <p className="mt-2 font-funnel-sans text-sm leading-relaxed text-foreground/70 md:mt-3">
                {t('ctaDescription')}
              </p>
              <Link
                href="/contact"
                className="mt-5 inline-flex w-fit self-end items-center justify-center rounded-md bg-dark px-4 py-2 font-funnel-sans text-sm font-medium text-white transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-accent md:mt-6"
              >
                {t('ctaButton')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
