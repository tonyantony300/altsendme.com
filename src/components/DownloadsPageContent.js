"use client";

import Image from "next/image";
import { Copy, Check } from "@phosphor-icons/react";
import { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import {
  desktopPlatformGroups,
  getAlternateDownloadsForOs,
  getDownloadHref,
  getPrimaryDownloadUrl,
  mobilePlatformGroups,
  primaryDownloadsByOs,
} from "@/constants/downloadsPage";

function AppleIcon({ className = "" }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M17.8218 11.168C17.7973 8.51457 20.0298 7.22456 20.1318 7.16382C18.868 5.35072 16.9089 5.10351 16.2196 5.08326C14.5744 4.91284 12.9773 6.05183 12.1387 6.05183C11.284 6.05183 9.99315 5.10014 8.60105 5.12798C6.81073 5.15498 5.13515 6.17416 4.21721 7.75862C2.32059 10.9874 3.73462 15.7332 5.55109 18.3428C6.45975 19.621 7.52197 21.0485 8.91153 20.9987C10.2716 20.9431 10.7795 20.1458 12.4205 20.1458C14.0454 20.1458 14.523 20.9979 15.9404 20.9658C17.4 20.9431 18.3179 19.6826 19.1953 18.3926C20.2449 16.9271 20.6667 15.4843 20.6836 15.4101C20.6499 15.3983 17.8488 14.347 17.8218 11.168ZM15.1448 3.36634C15.8754 2.46697 16.3766 1.24276 16.2373 0C15.1785 0.0464032 13.8547 0.720516 13.0929 1.60049C12.4179 2.37669 11.8164 3.64729 11.9716 4.84197C13.1612 4.92971 14.3812 4.25138 15.1439 3.36634H15.1448Z"
        fill="currentColor"
      />
    </svg>
  );
}

function DownloadIcon({ className = "" }) {
  return (
    <svg
      viewBox="0 0 23 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M11.8523 5.36364V14.2955L15.2557 10.8807L16.2898 11.9034L11.1136 17.0682L5.94886 11.9034L6.96023 10.8807L10.375 14.2955V5.36364H11.8523ZM11.1136 22.1136C9.9053 22.1136 8.75379 21.9299 7.65909 21.5625C6.56818 21.1951 5.56629 20.6761 4.65341 20.0057C3.74432 19.339 2.95455 18.5492 2.28409 17.6364C1.61742 16.7273 1.10038 15.7273 0.732955 14.6364C0.36553 13.5417 0.181818 12.3902 0.181818 11.1818C0.181818 9.97348 0.36553 8.82386 0.732955 7.73295C1.10038 6.63826 1.61742 5.63636 2.28409 4.72727C2.95455 3.81439 3.74432 3.02462 4.65341 2.35795C5.56629 1.6875 6.56818 1.16856 7.65909 0.801136C8.75379 0.433712 9.9053 0.25 11.1136 0.25C12.322 0.25 13.4716 0.433712 14.5625 0.801136C15.6572 1.16856 16.6591 1.6875 17.5682 2.35795C18.4811 3.02462 19.2708 3.81439 19.9375 4.72727C20.608 5.63636 21.1269 6.63826 21.4943 7.73295C21.8617 8.82386 22.0455 9.97348 22.0455 11.1818C22.0455 12.3902 21.8617 13.5417 21.4943 14.6364C21.1269 15.7273 20.608 16.7273 19.9375 17.6364C19.2708 18.5492 18.4811 19.339 17.5682 20.0057C16.6591 20.6761 15.6572 21.1951 14.5625 21.5625C13.4716 21.9299 12.322 22.1136 11.1136 22.1136ZM11.1136 20.6932C12.1667 20.6932 13.1667 20.5322 14.1136 20.2102C15.0644 19.892 15.9356 19.4413 16.7273 18.858C17.5227 18.2784 18.2121 17.5928 18.7955 16.8011C19.3788 16.0057 19.8295 15.1326 20.1477 14.1818C20.4659 13.2311 20.625 12.2311 20.625 11.1818C20.625 10.1288 20.4659 9.12689 20.1477 8.17614C19.8295 7.22538 19.3788 6.35417 18.7955 5.5625C18.2121 4.77083 17.5227 4.08333 16.7273 3.5C15.9356 2.91667 15.0644 2.46591 14.1136 2.14773C13.1667 1.82955 12.1667 1.67045 11.1136 1.67045C10.0606 1.67045 9.05871 1.82955 8.10795 2.14773C7.1572 2.46591 6.28409 2.91667 5.48864 3.5C4.69697 4.08333 4.00947 4.77083 3.42614 5.5625C2.84659 6.35417 2.39583 7.22538 2.07386 8.17614C1.75568 9.12689 1.59659 10.1288 1.59659 11.1818C1.59659 12.2311 1.75568 13.2311 2.07386 14.1818C2.39583 15.1326 2.84659 16.0057 3.42614 16.8011C4.00947 17.5928 4.69697 18.2784 5.48864 18.858C6.28409 19.4413 7.1572 19.892 8.10795 20.2102C9.05871 20.5322 10.0606 20.6932 11.1136 20.6932Z"
        fill="currentColor"
      />
    </svg>
  );
}

function PlatformDownloadRow({ platformKey, links, t }) {
  return (
    <div className="grid grid-cols-2 gap-4 border-t border-[#D3D2CD] py-6 md:min-h-[120px] md:py-8">
      <div className="font-funnel-sans text-base font-medium text-[#121212] md:text-lg">
        {t(`platforms.${platformKey}`)}
      </div>
      <div className="flex flex-col gap-3">
        {links.map((link) => (
          <a
            key={link.key}
            href={getDownloadHref(link)}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-start gap-3 font-funnel-sans text-sm text-[#4D4D4D] transition-colors hover:text-[#73411F] md:text-base"
          >
            <DownloadIcon className="mt-0.5 h-5 w-5 shrink-0 text-[#121212] transition-colors group-hover:text-[#73411F]" />
            <span>{t(`links.${link.key}`)}</span>
          </a>
        ))}
      </div>
    </div>
  );
}

function CopyCommandButton({ copyText, copyLabel, copiedLabel }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(copyText);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard access may be unavailable in some browsers.
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      aria-label={copied ? copiedLabel : copyLabel}
      className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[#D3D2CD] text-[#121212] transition-colors hover:bg-[#E7E6DF] hover:text-[#73411F]"
    >
      {copied ? (
        <Check size={18} weight="bold" aria-hidden="true" />
      ) : (
        <Copy size={18} aria-hidden="true" />
      )}
    </button>
  );
}

function CliCommandLine({ command, copyText, copyLabel, copiedLabel }) {
  return (
    <div className="flex items-start justify-between gap-4">
      <code className="block min-w-0 flex-1 break-all font-mono text-xs text-[#121212] md:text-sm">
        {command}
      </code>
      <CopyCommandButton
        copyText={copyText}
        copyLabel={copyLabel}
        copiedLabel={copiedLabel}
      />
    </div>
  );
}

function CliDownloadRow({ label, intro, commands, copyLabel, copiedLabel }) {
  return (
    <div className="grid grid-cols-2 gap-4 border-t border-[#D3D2CD] py-6 md:min-h-[120px] md:py-8">
      <div className="font-funnel-sans text-base font-medium text-[#121212] md:text-lg">
        {label}
      </div>
      <div>
        <p className="mb-3 font-funnel-sans text-sm text-[#4D4D4D] md:text-base">{intro}</p>
        <div className="flex flex-col gap-3">
          {commands.map((item) => (
            <CliCommandLine
              key={item.copyText}
              command={item.command}
              copyText={item.copyText}
              copyLabel={copyLabel}
              copiedLabel={copiedLabel}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function CliNotesRow({ copyNote, runNote }) {
  return (
    <div className="grid grid-cols-2 gap-4 border-t border-[#D3D2CD] py-6 md:py-8">
      <div aria-hidden="true" />
      <div className="flex flex-col gap-2 font-funnel-sans text-sm text-[#4D4D4D] md:text-base">
        <p>{copyNote}</p>
        <p>{runNote}</p>
      </div>
    </div>
  );
}

export default function DownloadsPageContent() {
  const t = useTranslations("downloadsPage");
  const [detectedOS, setDetectedOS] = useState("mac");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const userAgent = window.navigator.userAgent.toLowerCase();
    if (userAgent.includes("win")) {
      setDetectedOS("windows");
    } else if (userAgent.includes("mac")) {
      setDetectedOS("mac");
    } else if (userAgent.includes("linux")) {
      setDetectedOS("linux");
    }
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    if (isDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [isDropdownOpen]);

  const primary = primaryDownloadsByOs[detectedOS] || primaryDownloadsByOs.mac;
  const alternateDownloads = getAlternateDownloadsForOs(detectedOS);
  const primaryUrl = getPrimaryDownloadUrl(detectedOS);

  const scrollToPlatforms = () => {
    document.getElementById("other-platforms")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="w-full font-funnel-sans">
      <section className="w-full px-5 py-12 md:px-10 md:py-16 lg:px-[60px] lg:py-20">
        <div className="mx-auto w-full max-w-[1200px]">
          <div className="border border-[#D3D2CD] bg-[#F5F4F0]">
            <div className="grid md:grid-cols-3 md:items-stretch">
              <div className="p-8 md:col-span-2 md:border-r md:border-[#D3D2CD] md:p-12 lg:p-16">
                <h1 className="mb-8 text-center font-funnel-sans text-[40px] font-bold leading-[1.1] tracking-tight text-[#121212] sm:text-left md:text-[56px] lg:text-[64px]">
                  <span className="block">{t("titleLine1")}</span>
                  <span className="block">{t("titleLine2")}</span>
                </h1>

                <div className="mb-6 flex w-full flex-col gap-4 sm:flex-row sm:gap-6">
                  <div className="relative w-full sm:max-w-sm" ref={dropdownRef}>
                    <div className="flex w-full overflow-hidden rounded-xl bg-[#121212]">
                      <a
                        href={primaryUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex h-14 flex-1 items-center justify-center gap-3 px-6 text-base font-medium text-white transition-colors hover:bg-[#2a2a2a]"
                      >
                        {detectedOS === "mac" ? (
                          <AppleIcon className="h-6 w-6 shrink-0" />
                        ) : (
                          <Image
                            src={primary.icon}
                            alt=""
                            width={24}
                            height={24}
                            className="h-6 w-6 shrink-0 brightness-0 invert"
                          />
                        )}
                        <span>{t(primary.translationKey)}</span>
                      </a>

                      {alternateDownloads.length > 0 && (
                        <button
                          type="button"
                          aria-expanded={isDropdownOpen}
                          aria-label={t("moreFormats")}
                          onClick={() => setIsDropdownOpen((open) => !open)}
                          className="inline-flex h-14 w-12 shrink-0 items-center justify-center border-l border-white/20 text-white transition-colors hover:bg-[#2a2a2a]"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className={`transition-transform ${isDropdownOpen ? "rotate-180" : ""}`}
                          >
                            <path d="m6 9 6 6 6-6" />
                          </svg>
                        </button>
                      )}
                    </div>

                    {isDropdownOpen && alternateDownloads.length > 0 && (
                      <div className="absolute left-0 right-0 top-full z-20 mt-2 overflow-hidden rounded-xl border border-[#D3D2CD] bg-[#121212] shadow-lg">
                        {alternateDownloads.map((link) => (
                          <a
                            key={link.key}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block border-b border-white/10 px-5 py-3 text-left text-sm font-medium text-white transition-colors last:border-b-0 hover:bg-white/10 md:text-base"
                          >
                            {t(`links.${link.key}`)}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>

                  <button
                    type="button"
                    onClick={scrollToPlatforms}
                    className="inline-flex h-14 w-full items-center justify-center gap-3 rounded-xl border border-[#D3D2CD] bg-transparent px-6 text-base font-normal text-[#121212] transition-colors hover:bg-[#E7E6DF] sm:w-auto"
                  >
                    <DownloadIcon className="h-6 w-6 shrink-0" />
                    <span>{t("otherPlatforms")}</span>
                  </button>
                </div>

              </div>

              <div className="relative hidden min-h-0 overflow-hidden md:block">
                <Image
                  src="/downloadbg.webp"
                  alt={t("previewAlt")}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="other-platforms"
        className="scroll-mt-24 px-5 pb-16 md:px-10 md:pb-24 lg:px-[60px] lg:pb-28"
      >
        <div className="mx-auto w-full max-w-[1200px]">
          <div className="grid gap-12 md:grid-cols-[6.7fr_3.2fr] md:gap-16">
            <div id="download-desktop">
              <h2 className="mb-6 font-funnel-sans text-2xl font-semibold text-[#121212] md:text-[28px]">
                {t("desktop")}
              </h2>
              <div className="border-t border-[#D3D2CD]">
                {desktopPlatformGroups.map((group) => (
                  <PlatformDownloadRow
                    key={group.key}
                    platformKey={group.key}
                    links={group.links}
                    t={t}
                  />
                ))}
                <CliDownloadRow
                  label={t("scoopLabel")}
                  intro={t("scoopIntro")}
                  commands={[
                    {
                      command: "scoop bucket add extras",
                      copyText: "scoop bucket add extras",
                    },
                    {
                      command: "scoop install extras/altsendme",
                      copyText: "scoop install extras/altsendme",
                    },
                  ]}
                  copyLabel={t("cli.copyCommand")}
                  copiedLabel={t("cli.copied")}
                />
              </div>
            </div>

            <div id="download-android">
              <h2 className="mb-6 font-funnel-sans text-2xl font-semibold text-[#121212] md:text-[28px]">
                {t("mobile")}
              </h2>
              <div className="border-t border-[#D3D2CD]">
                {mobilePlatformGroups.map((group) => (
                  <PlatformDownloadRow
                    key={group.key}
                    platformKey={group.key}
                    links={group.links}
                    t={t}
                  />
                ))}
              </div>
            </div>

            <div id="download-cli" className="md:col-span-2">
              <h2 className="mb-6 font-funnel-sans text-2xl font-semibold text-[#121212] md:text-[28px]">
                {t("cli.title")}
              </h2>
              <div className="border-t border-[#D3D2CD]">
                <CliDownloadRow
                  label={t("cli.platforms.bash")}
                  intro={t("cli.bashIntro")}
                  commands={[
                    {
                      command: "$ curl -fsSL https://iroh.computer/sendme.sh | sh",
                      copyText: "curl -fsSL https://iroh.computer/sendme.sh | sh",
                    },
                  ]}
                  copyLabel={t("cli.copyCommand")}
                  copiedLabel={t("cli.copied")}
                />
                <CliDownloadRow
                  label={t("cli.platforms.powershell")}
                  intro={t("cli.powershellIntro")}
                  commands={[
                    {
                      command: "$ iwr https://www.iroh.computer/sendme.ps1 -useb | iex",
                      copyText: "iwr https://www.iroh.computer/sendme.ps1 -useb | iex",
                    },
                  ]}
                  copyLabel={t("cli.copyCommand")}
                  copiedLabel={t("cli.copied")}
                />
                <CliNotesRow copyNote={t("cli.copyNote")} runNote={t("cli.runNote")} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
