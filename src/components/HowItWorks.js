"use client";

import { useTranslations } from 'next-intl';

export default function HowItWorks() {
  const t = useTranslations('howItWorks');

  const steps = [
    {
      title: t('step1.title'),
      description: t('step1.description'),
    },
    {
      title: t('step2.title'),
      description: t('step2.description'),
    },
    {
      title: t('step3.title'),
      description: t('step3.description'),
    },
  ];

  return (
    <section id="how-it-works-section" className="relative w-full scroll-mt-24 py-12 px-5 md:px-10 lg:px-[60px] text-zinc-100 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none isolate" aria-hidden="true">
        <div className="absolute inset-0 bg-dark" />
        <div className="absolute inset-0 dark-grain" />
        <div className="absolute inset-0 dark-grain" />
        <div className="absolute inset-0 dark-grain" />
      </div>

      <div className="relative z-10 w-full max-w-[1200px] mx-auto">
        <div className="px-5 pt-10">
          <h3 className="font-funnel-sans text-[32px] leading-[1.2] text-center text-accent font-bold mb-8 whitespace-pre-line md:text-[40px] md:mb-10 lg:mb-12">{t('sectionLabel')}</h3>
        </div>

        <div className="md:flex sm:gap-5">
          {steps.map((step, index) => (
            <div key={step.title} className="md:w-1/3 p-5 pb-10">
              <h3 className="font-funnel-sans text-2xl font-bold text-accent">
              {index + 1}. {step.title}
              </h3>
              <p className="mt-1 text-sm/6 text-zinc-400 font-funnel-sans">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
