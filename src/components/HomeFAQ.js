"use client";

import { useState } from 'react';
import { useTranslations } from 'next-intl';

const FAQ_KEYS = ['faq1', 'faq2', 'faq3', 'faq4', 'faq5', 'faq6'];
const INITIAL_VISIBLE_COUNT = 5;

function PlusIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M8 3V13M3 8H13"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ChevronDownIcon({ expanded }) {
  return (
    <svg
      width="14"
      height="8"
      viewBox="0 0 14 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={`transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`}
    >
      <path
        d="M1 1L7 7L13 1"
        stroke="#121212"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function HomeFAQ() {
  const t = useTranslations('faq');
  const [openItems, setOpenItems] = useState(new Set());
  const [showAll, setShowAll] = useState(false);

  const toggleItem = (id) => {
    setOpenItems((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const renderAnswer = (key) => {
    if (key === 'faq1') {
      return t.rich(`items.${key}.answer`, {
        link: (chunks) => (
          <a
            href="https://www.iroh.computer/docs/faq"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:opacity-80 transition-opacity"
          >
            {chunks}
          </a>
        ),
      });
    }
    return t(`items.${key}.answer`);
  };

  const hasHiddenItems = FAQ_KEYS.length > INITIAL_VISIBLE_COUNT;

  return (
    <section className="w-full py-12 px-5 md:px-10 lg:px-[60px] font-funnel-sans">
      <div className="w-full max-w-[1200px] mx-auto">
        <div className="bg-[#F5F4F0] grid grid-cols-1 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] border border-[#D3D2CD]">
          <div className="border-b border-[#D3D2CD] lg:border-b-0 lg:border-r p-8 md:p-12 lg:p-16">
            <h2 className="font-funnel-sans text-[32px] leading-[1.2] text-foreground font-bold whitespace-pre-line md:text-[40px]">
              {t('title')}
            </h2>
          </div>

          <div className="bg-[#F5F4F0]">
            <div className="hidden lg:block h-[70px] border-b border-[#D3D2CD]" />

            {FAQ_KEYS.map((key, index) => {
              const questionId = `home-faq-question-${index}`;
              const answerId = `home-faq-answer-${index}`;
              const isOpen = openItems.has(questionId);
              const isHidden = !showAll && index >= INITIAL_VISIBLE_COUNT;

              return (
                <div
                  key={key}
                  className={`border-b border-[#D3D2CD] ${isHidden ? 'hidden' : ''}`}
                >
                  <h3 className="m-0">
                    <button
                      id={questionId}
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={answerId}
                      onClick={() => toggleItem(questionId)}
                      className="w-full flex items-center justify-between text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#121212] focus-visible:ring-offset-white p-6 md:p-6 hover:bg-[#E7E6DF] transition-colors"
                    >
                      <span className="text-base md:text-[18px] font-normal text-[#121212] leading-[22px] md:leading-[26px] tracking-[-0.5px] pr-4">
                        {t(`items.${key}.question`)}
                      </span>
                      <span
                        className={`ml-4 flex-shrink-0 flex h-5 w-5 items-center justify-center text-[#121212] transition-transform duration-200 ${
                          isOpen ? 'rotate-45' : ''
                        }`}
                      >
                        <PlusIcon />
                      </span>
                    </button>
                  </h3>
                  <div
                    id={answerId}
                    role="region"
                    aria-labelledby={questionId}
                    hidden={!isOpen}
                    className="text-sm md:text-base leading-6 text-[#4D4D4D] px-6 pb-6 font-light"
                  >
                    {renderAnswer(key)}
                  </div>
                </div>
              );
            })}

            {hasHiddenItems && (
              <button
                type="button"
                onClick={() => setShowAll((prev) => !prev)}
                className="w-full flex items-center justify-center gap-2 py-5 text-sm md:text-base font-normal text-[#121212] hover:bg-[#E7E6DF] transition-colors"
              >
                <span>{showAll ? 'View fewer questions' : 'View more questions'}</span>
                <ChevronDownIcon expanded={showAll} />
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
