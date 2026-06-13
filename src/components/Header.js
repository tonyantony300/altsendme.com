"use client";

import Image from "next/image";
import { useTranslations } from 'next-intl';
import { DownloadSimple } from "@phosphor-icons/react";
import GithubIcon from "@/components/GithubIcon";
import { Link } from '@/i18n/routing';
import LanguageSwitcher from '@/components/LanguageSwitcher';

export default function Header() {
  const t = useTranslations();
  const tAvailableAs = useTranslations('availableAs');

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
        <nav className="flex items-center gap-3 md:gap-6">
        
          <a
            href="https://www.buymeacoffee.com/tny_antny"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 hidden md:block"
          >
            <img
              src="https://img.buymeacoffee.com/button-api/?text=Support Us&emoji=❤️&slug=tny_antny&button_colour=73411F&font_colour=fff&font_family=Lato&outline_colour=000000&coffee_colour=ffffff"
              alt="Buy us a coffee"
              className="h-8 w-auto"
            />
          </a>
          <a href="https://github.com/tonyantony300/alt-sendme" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 font-funnel-sans text-sm font-normal text-white bg-dark px-4 py-1.5 rounded-md ">
            <GithubIcon size={14} className="shrink-0" />
            <span>8.2k</span>
          </a>
          <Link
            href="/downloads"
            className="flex shrink-0 items-center gap-2 rounded-md bg-[#73411F] px-3 py-1.5 font-funnel-sans text-sm font-normal text-white transition-opacity hover:opacity-90 md:px-4"
          >
            <DownloadSimple size={14} weight="bold" aria-hidden="true" />
            <span>{tAvailableAs('download')}</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}

