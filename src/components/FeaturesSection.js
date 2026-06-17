"use client";

import { useTranslations } from 'next-intl';
import {
  PaperPlaneTilt,
  FileArchive,
  Infinity,
  Lightning,
  LockKey,
  PlayPause,
  EyeSlash,
} from '@phosphor-icons/react';
import GithubIcon from '@/components/GithubIcon';

const FEATURE_KEYS = [
  'directSend',
  'transferAnything',
  'noSizeLimits',
  'blazingFast',
  'endToEndEncrypted',
  'resumable',
  'zeroPersonalData',
  'freeOpenSource',
];

const FEATURE_ICONS = {
  directSend: PaperPlaneTilt,
  transferAnything: FileArchive,
  noSizeLimits: Infinity,
  blazingFast: Lightning,
  endToEndEncrypted: LockKey,
  resumable: PlayPause,
  zeroPersonalData: EyeSlash,
  freeOpenSource: GithubIcon,
};

const cellBorderClasses = (index, total) => {
  const mdCols = 2;
  const lgCols = 4;

  return [
    index < total - 1 ? 'border-b border-zinc-700/60' : '',
    index % mdCols === 0 && index < total - 1 ? 'md:border-r md:border-zinc-700/60' : '',
    index < total - mdCols ? 'md:border-b md:border-zinc-700/60' : 'md:border-b-0',
    index < lgCols ? 'lg:border-b lg:border-zinc-700/60' : 'lg:border-b-0',
    index % lgCols !== lgCols - 1 ? 'lg:border-r lg:border-zinc-700/60' : '',
  ].join(' ');
};

const ACCENT_CARD_INDICES = new Set([0, 2, 5, 7]);

const getCardClasses = (index, total) => {
  const borders = cellBorderClasses(index, total);
  const isAccent = ACCENT_CARD_INDICES.has(index);

  if (isAccent) {
    return `flex h-full flex-col bg-accent p-6 transition-[filter] hover:brightness-[0.97] md:p-8 ${borders}`;
  }

  return `home-card ${borders}`;
};

export default function FeaturesSection() {
  const t = useTranslations('features');

  return (
    <section
      id="features-section"
      className="relative w-full scroll-mt-24 py-12 px-5 font-funnel-sans md:px-10 lg:px-[60px] text-zinc-100 overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none isolate" aria-hidden="true">
        <div className="absolute inset-0 bg-dark" />
        <div className="absolute inset-0 dark-grain" />
        <div className="absolute inset-0 dark-grain" />
        <div className="absolute inset-0 dark-grain" />
      </div>

      <div className="relative z-10 w-full max-w-[1200px] mx-auto">
        <h2 className="font-funnel-sans text-[32px] leading-[1.2] text-center text-accent font-bold mb-8 whitespace-pre-line md:text-[40px] md:mb-10 lg:mb-12">
          {t('title')}
        </h2>

        <div className="border border-zinc-700/60">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {FEATURE_KEYS.map((key, index) => {
              const Icon = FEATURE_ICONS[key];
              const isAccent = ACCENT_CARD_INDICES.has(index);

              return (
                <div
                  key={key}
                  className={getCardClasses(index, FEATURE_KEYS.length)}
                >
                  <Icon
                    size={28}
                    weight="regular"
                    className="mb-5 text-foreground"
                    aria-hidden="true"
                  />
                  <h3 className="font-funnel-sans text-lg font-semibold leading-snug text-foreground mb-2 md:text-xl">
                    {t(`items.${key}.title`)}
                  </h3>
                  <p className={`font-funnel-sans text-sm font-normal leading-relaxed md:text-base ${isAccent ? 'text-foreground/70' : 'text-foreground/55'}`}>
                    {t(`items.${key}.description`)}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
