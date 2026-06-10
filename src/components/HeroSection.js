"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { useTranslations } from 'next-intl';
import { getDownloadOptions } from '@/constants/downloadOptions';

export default function HeroSection() {
  const t = useTranslations();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [detectedOS, setDetectedOS] = useState("mac");

  useEffect(() => {
    const userAgent = window.navigator.userAgent.toLowerCase();
    if (userAgent.indexOf("win") !== -1) {
      setDetectedOS("windows");
    } else if (userAgent.indexOf("mac") !== -1) {
      setDetectedOS("mac");
    } else if (userAgent.indexOf("linux") !== -1) {
      setDetectedOS("linux");
    }
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isDropdownOpen && !event.target.closest('.download-container')) {
        setIsDropdownOpen(false);
      }
    };

    if (isDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }
  }, [isDropdownOpen]);

  const downloadOptions = getDownloadOptions(t);

  const primaryDownload = downloadOptions.find((opt) => 
    (detectedOS === "mac" && opt.id === "mac") ||
    (detectedOS === "windows" && opt.id === "windows") ||
    (detectedOS === "linux" && opt.id === "linux-appimage")
  ) || downloadOptions[0];

  const heroFeatures = [
    {
      title: "Free, for files & folders of any size",
      description:
        "AltSendme works by connecting sender and receiver directly, so there's no need to upload to a server, which means no cost!",
    },
    {
      title: "Fast",
      description: "AltSendme can saturate a 4Gbps connection.",
    },
    {
      title: "Resumable fetching",
      description: "Interrupted downloads pick up where they left off.",
    },
    {
      title: "Integrity checks",
      description:
        "Data is automatically verified for correctness on both send and receive.",
    },
  ];

  return (
    <section className="relative w-full min-h-[559px] md:min-h-[60vh] lg:min-h-[70vh] xl:min-h-[80vh] flex flex-col items-center justify-center overflow-hidden py-10 px-5 md:px-10 lg:px-[60px]">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute inset-0 bg-[url('/WebinarHeroBg.png')] bg-[length:auto_100%] lg:bg-cover bg-center bg-no-repeat"
        />
        <div className="absolute inset-0 hero-grain mix-blend-overlay opacity-[0.22]" />
      </div>

      <div className="relative z-10 w-full max-w-[1200px] mx-auto flex flex-col">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12">
        <div className="flex flex-col items-center">
          <a
            href="https://github.com/tonyantony300/alt-sendme"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 font-geist text-sm text-background bg-dark px-4 py-1 rounded-full mb-6 hover:opacity-80 transition-opacity"
          >
            <svg
              width={18}
              height={18}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="flex-shrink-0"
              aria-hidden="true"
            >
              <path
                fill="#ffffff"
                d="M12 2c5.523 0 10 4.477 10 10 0 4.13-2.504 7.676-6.077 9.201l-2.518-6.55C14.354 14.148 15 13.15 15 12c0-1.657-1.343-3-3-3s-3 1.343-3 3c0 1.15.647 2.148 1.596 2.652l-2.518 6.55C4.504 19.675 2 16.13 2 12 2 6.477 6.477 2 12 2z"
              />
            </svg>
            {t('common.freeAndOpenSource')}
          </a>

          <h1 className="font-geist text-[41px] leading-[1.2] text-center text-foreground font-semibold mb-6 max-w-[600px] md:text-[48px] md:mb-6 md:max-w-[800px] lg:mb-8 lg:max-w-[1000px]">
            {t('hero.title')}
          </h1>

          <p className="font-geist text-base text-center text-foreground mb-6 max-w-[600px] md:text-lg md:mb-8">
            {t('hero.description')}
          </p>

          <div className="flex flex-col items-center gap-3 mb-6 md:mb-8">
            <p className="font-geist text-sm text-center text-foreground italic max-w-[600px] md:text-base">
              {t('hero.airdropQuote')}
            </p>
          </div>

          <div className="w-full max-w-[460px] lg:max-w-[660px] flex flex-col items-center">
            <div className="relative w-full rounded-[20px] lg:w-auto download-container mb-8">
              <div className="flex group hover:shadow-[0px_0px_0px_0px_rgba(0,0,0,1)] shadow-[0px_0px_0px_0px_rgba(0,0,0,1)] rounded-xl transition-all border-2 border-foreground bg-transparent w-full lg:w-auto ">
                <a
                  href={primaryDownload.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium transition-all h-16  px-4 text-base md:px-6 md:text-lg lg:text-xl flex-1 rounded-r-none border-0 shadow-none group-hover:shadow-none transform-none group-hover:transform-none bg-transparent hover:bg-transparent text-foreground"
                >
                  <Image
                    src={primaryDownload.icon}
                    alt=""
                    width={20}
                    height={20}
                    className="flex-shrink-0"
                  />
                  <span className="font-federo font-medium">{primaryDownload.label}</span>
                </a>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsDropdownOpen(!isDropdownOpen);
                  }}
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium transition-all h-16 px-3 rounded-l-none border-0 flex-shrink-0 shadow-none group-hover:shadow-none transform-none group-hover:transform-none bg-transparent hover:bg-transparent text-foreground border-l-2 border-foreground"
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    className={`transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`}
                  >
                    <path d="m7 15 5 5 5-5"></path>
                    <path d="m7 9 5-5 5 5"></path>
                  </svg>
                </button>
              </div>

              {isDropdownOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-full lg:w-[400px] bg-background rounded-[20px] overflow-hidden shadow-[0px_4px_0px_0px_rgba(0,0,0,1)] border-2 border-foreground z-40">
                  <div className="m-1 overflow-hidden">
                    {downloadOptions.map((option) => (
                      <a
                        key={option.id}
                        href={option.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full flex items-center justify-between px-4 py-3 text-left hover:text-foreground hover:bg-foreground hover:bg-opacity-5 rounded-2xl transition-all whitespace-nowrap"
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          <Image
                            src={option.icon}
                            alt=""
                            width={20}
                            height={20}
                            className="flex-shrink-0"
                          />
                          <span className="font-federo font-medium text-base truncate">{option.label}</span>
                        </div>
                        <span className="font-federo text-sm flex-shrink-0 ml-2">{option.size}</span>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="relative z-20 w-full md:max-w-[500px] lg:max-w-[600px] rounded-[20px] border border-foreground/20 bg-white/30 backdrop-blur-md p-1.5 shadow-[2px_2px_12px_2px_rgba(0,0,0,0.1),inset_0_1px_0_rgba(255,255,255,0.6)]">

          <div className="rounded-xl overflow-hidden">
            <Image
              src="/altsendme-demo.gif"
              alt="AltSendMe app demo"
              width={1200}
              height={800}
              className="w-full h-auto object-contain"
              priority
              unoptimized
            />
          </div>
        </div>
        </div>

        <div className="w-full mt-12 lg:mt-16 border border-foreground/15 bg-background/40 backdrop-blur-sm">
          <div className="p-6 md:p-8 border-b border-foreground/15">
            <h2 className="font-federo text-sm md:text-base font-bold uppercase tracking-wide text-foreground mb-2">
              {heroFeatures[0].title}
            </h2>
            <p className="font-geist text-sm md:text-base text-foreground/55 leading-relaxed">
              {heroFeatures[0].description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3">
            {heroFeatures.slice(1).map((feature, index) => (
              <div
                key={feature.title}
                className={`p-6 md:p-8 ${
                  index < heroFeatures.length - 2
                    ? "border-b border-foreground/15 md:border-b-0 md:border-r"
                    : ""
                }`}
              >
                <h3 className="font-geist text-sm md:text-base font-bold uppercase tracking-wide text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="font-geist text-sm md:text-base text-foreground/55 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
