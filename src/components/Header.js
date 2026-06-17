"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { useTranslations } from 'next-intl';
import { DownloadSimple } from "@phosphor-icons/react";
import GithubIcon from "@/components/GithubIcon";
import { Link } from '@/i18n/routing';
import LanguageSwitcher from '@/components/LanguageSwitcher';

const BMC_SCRIPT_SRC = "https://cdnjs.buymeacoffee.com/1.0.0/button.prod.min.js";

export default function Header() {
  const t = useTranslations();
  const tAvailableAs = useTranslations('availableAs');
  const bmcButtonRef = useRef(null);

  useEffect(() => {
    const container = bmcButtonRef.current;
    if (!container) return;

    const renderButton = () => {
      if (typeof window.bmcBtnWidget !== "function") return;

      container.innerHTML = window.bmcBtnWidget(
        "Buy me a coffee",
        "tny_antny",
        "#f1ece6",
        "",
        "Inter",
        "#452815",
        "#000000",
        "#452815",
      );
    };

    if (typeof window.bmcBtnWidget === "function") {
      renderButton();
      return;
    }

    const existingScript = document.querySelector(`script[src="${BMC_SCRIPT_SRC}"]`);
    const script = existingScript ?? document.createElement("script");
    script.src = BMC_SCRIPT_SRC;
    script.async = true;

    const handleLoad = () => renderButton();
    script.addEventListener("load", handleLoad);

    if (!existingScript) {
      document.body.appendChild(script);
    } else if (typeof window.bmcBtnWidget === "function") {
      renderButton();
    }

    return () => {
      script.removeEventListener("load", handleLoad);
      container.innerHTML = "";
    };
  }, []);

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
        
          <div
            ref={bmcButtonRef}
            className="shrink-0 hidden md:block [&_.bmc-btn]:!h-9 [&_.bmc-btn]:!min-w-0 [&_.bmc-btn]:!rounded-md [&_.bmc-btn]:!px-3 [&_.bmc-btn]:!text-sm [&_.bmc-btn-text]:!text-sm [&_.bmc-btn_svg]:!h-4"
          />
          <a href="https://github.com/tonyantony300/alt-sendme" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 font-funnel-sans text-sm font-semibold text-[#452815] px-1.5 py-1.5 rounded-md ">
            <GithubIcon size={14} className="shrink-0" />
            <span>8.2K</span>
          </a>
          <Link
            href="/downloads"
            className="flex shrink-0 items-center gap-2 rounded-md bg-dark px-3 py-1.5 font-funnel-sans text-sm font-normal text-white transition-opacity hover:opacity-90 md:px-4"
          >
            <span>{tAvailableAs('download')}</span>
            <DownloadSimple size={14} weight="bold" aria-hidden="true" />
          </Link>
        </nav>
      </div>
    </header>
  );
}

