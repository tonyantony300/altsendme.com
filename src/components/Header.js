"use client";

import Image from "next/image";
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import LanguageSwitcher from '@/components/LanguageSwitcher';

export default function Header() {
  const t = useTranslations();

  return (
    <header className="w-full py-3 px-5 md:px-10 lg:px-[60px] border-b border-[#aeadad] sticky top-0 z-[100] bg-background">
      <div className="flex justify-between items-center max-w-[1200px] mx-auto">
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center gap-3 hover:opacity-70 transition-opacity">
            <Image
              src="/Altsendmelogo.png"
              alt="Altsendme logo"
              width={32}
              height={32}
              priority
            />
            <span className="font-funnel-sans text-2xl text-[#452815] font-extrabold tracking-tighter lg:text-[28px]">{t('common.logo')}</span>
          </Link>
          <div className="hidden md:block">
            <LanguageSwitcher />
          </div>
        </div>
        <nav className="flex items-center gap-6">
          <a
            href="https://www.buymeacoffee.com/tny_antny"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0"
          >
            <img
              src="https://img.buymeacoffee.com/button-api/?text=Support Us&emoji=❤️&slug=tny_antny&button_colour=73411F&font_colour=fff&font_family=Lato&outline_colour=000000&coffee_colour=ffffff"
              alt="Buy us a coffee"
              className="h-8 w-auto"
            />
          </a>
          <a href="https://github.com/tonyantony300/alt-sendme" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 font-funnel-sans text-sm font-normal text-background bg-dark px-4 py-1.5 rounded-md ">
            <svg
              width={14}
              height={14}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="flex-shrink-0 text-white"
              aria-hidden="true"
            >
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
            </svg>
            <span>8.2k</span>
          </a>
        </nav>
      </div>
    </header>
  );
}

