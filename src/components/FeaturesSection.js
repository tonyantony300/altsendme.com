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

export default function FeaturesSection() {
  const t = useTranslations('features');

  return (
    <section id="features-section" className="home-section scroll-mt-24">
      <div className="home-section__container">
        <h2 className="home-section__heading">
          {t('title')}
        </h2>

        <div className="home-section__panel">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {FEATURE_KEYS.map((key, index) => {
              const Icon = FEATURE_ICONS[key];
              const total = FEATURE_KEYS.length;
              const mdCols = 2;
              const lgCols = 4;

              return (
                <div
                  key={key}
                  className={`home-section__cell ${
                    index < total - 1 ? 'border-b border-section-border' : ''
                  } ${
                    index % mdCols === 0 && index < total - 1
                      ? 'md:border-r md:border-section-border'
                      : ''
                  } ${
                    index < total - mdCols
                      ? 'md:border-b md:border-section-border'
                      : 'md:border-b-0'
                  } ${
                    index < lgCols
                      ? 'lg:border-b lg:border-section-border'
                      : 'lg:border-b-0'
                  } ${
                    index % lgCols !== lgCols - 1
                      ? 'lg:border-r lg:border-section-border'
                      : ''
                  }`}
                >
                  <Icon
                    size={28}
                    weight="regular"
                    className="home-section__cell-icon"
                    aria-hidden="true"
                  />
                  <h3 className="home-section__cell-title">
                    {t(`items.${key}.title`)}
                  </h3>
                  <p className="home-section__cell-body">
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
