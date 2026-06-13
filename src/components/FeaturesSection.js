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
  GithubLogo,
} from '@phosphor-icons/react';

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
  freeOpenSource: GithubLogo,
};

export default function FeaturesSection() {
  const t = useTranslations('features');

  return (
    <section
      id="features-section"
      className="w-full scroll-mt-24 py-12 px-5 md:px-10 lg:px-[60px] font-funnel-sans"
    >
      <div className="w-full max-w-[1200px] mx-auto">
        <h2 className="font-funnel-sans text-[32px] leading-[1.2] text-center text-foreground font-bold mb-8 whitespace-pre-line md:text-[40px] md:mb-10 lg:mb-12">
          {t('title')}
        </h2>

        <div className="border border-[#D3D2CD]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {FEATURE_KEYS.map((key, index) => {
              const Icon = FEATURE_ICONS[key];
              const total = FEATURE_KEYS.length;
              const mdCols = 2;
              const lgCols = 4;

              return (
                <div
                  key={key}
                  className={`bg-[#F5F4F0] p-6 md:p-8 ${
                    index < total - 1 ? 'border-b border-[#D3D2CD]' : ''
                  } ${
                    index % mdCols === 0 && index < total - 1
                      ? 'md:border-r md:border-[#D3D2CD]'
                      : ''
                  } ${
                    index < total - mdCols
                      ? 'md:border-b md:border-[#D3D2CD]'
                      : 'md:border-b-0'
                  } ${
                    index < lgCols
                      ? 'lg:border-b lg:border-[#D3D2CD]'
                      : 'lg:border-b-0'
                  } ${
                    index % lgCols !== lgCols - 1
                      ? 'lg:border-r lg:border-[#D3D2CD]'
                      : ''
                  }`}
                >
                  <Icon
                    size={28}
                    weight="regular"
                    className="text-[#121212] mb-5"
                    aria-hidden="true"
                  />
                  <h3 className="text-lg md:text-xl font-semibold text-[#121212] tracking-[-0.5px] leading-[1.25] mb-3">
                    {t(`items.${key}.title`)}
                  </h3>
                  <p className="text-sm md:text-[15px] leading-6 text-[#4D4D4D] font-light">
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
