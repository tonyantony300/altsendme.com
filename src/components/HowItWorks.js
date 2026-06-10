"use client";

import { useTranslations } from 'next-intl';

function TerminalDots() {
  return (
    <div className="absolute top-0 left-0 p-2 flex gap-1">
      <div className="border border-zinc-600 w-3 h-3 rounded-full" />
      <div className="border border-zinc-600 w-3 h-3 rounded-full" />
      <div className="border border-zinc-600 w-3 h-3 rounded-full" />
    </div>
  );
}

function TerminalMockup({ command, lines }) {
  return (
    <div className="relative rounded border border-zinc-700 bg-zinc-900/60 p-2 py-8 h-40 mb-5">
      <TerminalDots />
      <p className="font-mono font-bold text-sm text-zinc-100">{command}</p>
      {lines.map((line) => (
        <p key={line} className="font-mono text-zinc-500 text-sm">
          {line}
        </p>
      ))}
    </div>
  );
}

function ChatMockup({ message }) {
  return (
    <div className="relative p-2 flex h-40 mb-5 text-zinc-300">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        aria-hidden="true"
        className="w-6 h-6 mr-2 flex-shrink-0 text-zinc-400"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 0 1 1.037-.443 48.282 48.282 0 0 0 5.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
        />
      </svg>
      <div className="rounded-tr-lg rounded-br-lg rounded-bl-lg border border-zinc-700 bg-zinc-900/60 p-2 pb-10 mb-2 h-20 text-sm text-zinc-300">
        {message}
      </div>
    </div>
  );
}

export default function HowItWorks() {
  const t = useTranslations('howItWorks');

  const steps = [
    {
      mockup: (
        <TerminalMockup
          command={t('step1.command')}
          lines={[t('step1.output1'), t('step1.output2')]}
        />
      ),
      title: t('step1.title'),
      description: t('step1.description'),
    },
    {
      mockup: <ChatMockup message={t('step2.message')} />,
      title: t('step2.title'),
      description: t('step2.description'),
    },
    {
      mockup: (
        <TerminalMockup
          command={t('step3.command')}
          lines={[t('step3.output')]}
        />
      ),
      title: t('step3.title'),
      description: t('step3.description'),
    },
  ];

  return (
    <section className="relative w-full py-12 px-5 md:px-10 lg:px-[60px] text-zinc-100 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none isolate" aria-hidden="true">
        <div className="absolute inset-0 bg-[#110E0C]" />
        <div className="absolute inset-0 dark-grain" />
        <div className="absolute inset-0 dark-grain" />
        <div className="absolute inset-0 dark-grain" />
      </div>

      <div className="relative z-10 w-full max-w-[1200px] mx-auto">
        <div className="px-5 pt-10">
          <h3 className="font-koulen text-accent text-xl">{t('sectionLabel')}</h3>
        </div>

        <div className="md:flex sm:gap-5">
          {steps.map((step, index) => (
            <div key={step.title} className="md:w-1/3 p-5 pb-10">
              {step.mockup}
              <h3 className="font-funnel-sans text-3xl font-bold text-accent">
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
