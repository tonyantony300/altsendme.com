const RELEASE_BASE = "https://github.com/tonyantony300/alt-sendme/releases/download";

export const DONATE_LINKS = {
  buyMeACoffee: "https://buymeacoffee.com/tny_antny",
  githubSponsors: "https://github.com/sponsors/tonyantony300",
};

export const DESKTOP_VERSION = "0.4.1";
export const ANDROID_VERSION = "v0.4.1";
const DESKTOP_TAG = `v${DESKTOP_VERSION}`;

export function releaseUrl(tag, filename) {
  return `${RELEASE_BASE}/${tag}/${filename}`;
}

export function detectPlatform() {
  if (typeof navigator === "undefined") {
    return { os: "mac", arch: "x64" };
  }

  const ua = navigator.userAgent.toLowerCase();
  let os = "mac";
  if (ua.includes("win")) os = "windows";
  else if (ua.includes("mac")) os = "mac";
  else if (ua.includes("linux")) os = "linux";

  const arm64 =
    ua.includes("aarch64") ||
    ua.includes("arm64") ||
    (os === "windows" && /\barm\b/.test(ua));

  return { os, arch: arm64 ? "arm64" : "x64" };
}

export const primaryDownloadsByOs = {
  mac: {
    id: "mac",
    icon: "/applelogo.svg",
    file: `AltSendme_${DESKTOP_VERSION}_universal.dmg`,
    tag: DESKTOP_TAG,
    translationKey: "getAppForMac",
    heroTranslationKey: "hero.downloadForMac",
    size: "32 MB",
  },
  windows: {
    id: "windows",
    icon: "/windows.svg",
    file: `AltSendme_${DESKTOP_VERSION}_x64-setup.exe`,
    tag: DESKTOP_TAG,
    translationKey: "getAppForWindows",
    heroTranslationKey: "hero.downloadForWindows",
    size: "10 MB",
  },
  "windows-arm64": {
    id: "windows-arm64",
    icon: "/windows.svg",
    file: `AltSendme_${DESKTOP_VERSION}_arm64-setup.exe`,
    tag: DESKTOP_TAG,
    translationKey: "getAppForWindows",
    heroTranslationKey: "hero.downloadForWindows",
    size: "9 MB",
  },
  linux: {
    id: "linux-appimage",
    icon: "/linuxlogo.svg",
    file: `AltSendme_${DESKTOP_VERSION}_amd64.AppImage`,
    tag: DESKTOP_TAG,
    translationKey: "getAppForLinux",
    heroTranslationKey: "hero.downloadForLinux",
    size: "92 MB",
  },
  "linux-arm64": {
    id: "linux-appimage-arm64",
    icon: "/linuxlogo.svg",
    file: `AltSendme_${DESKTOP_VERSION}_aarch64.AppImage`,
    tag: DESKTOP_TAG,
    translationKey: "getAppForLinux",
    heroTranslationKey: "hero.downloadForLinux",
    size: "90 MB",
  },
  android: {
    id: "android",
    icon: "/androidlogo.svg",
    file: `AltSendme-${ANDROID_VERSION}-arm64.apk`,
    tag: ANDROID_VERSION,
    translationKey: "getAppForAndroid",
    heroTranslationKey: "hero.downloadForAndroid",
    size: "50 MB",
  },
};

export const desktopPlatformGroups = [
  {
    key: "mac",
    links: [
      {
        key: "universalDmg",
        file: `AltSendme_${DESKTOP_VERSION}_universal.dmg`,
        tag: DESKTOP_TAG,
        size: "32 MB",
      },
      {
        key: "x64Dmg",
        file: `AltSendme_${DESKTOP_VERSION}_x64.dmg`,
        tag: DESKTOP_TAG,
        size: "17 MB",
      },
      {
        key: "aarch64Dmg",
        file: `AltSendme_${DESKTOP_VERSION}_aarch64.dmg`,
        tag: DESKTOP_TAG,
        size: "16 MB",
      },
    ],
  },
  {
    key: "windows",
    links: [
      {
        key: "standardExe",
        file: `AltSendme_${DESKTOP_VERSION}_x64-setup.exe`,
        tag: DESKTOP_TAG,
        size: "10 MB",
      },
      {
        key: "msi",
        file: `AltSendme_${DESKTOP_VERSION}_x64_en-US.msi`,
        tag: DESKTOP_TAG,
        size: "15 MB",
      },
      {
        key: "arm64Exe",
        file: `AltSendme_${DESKTOP_VERSION}_arm64-setup.exe`,
        tag: DESKTOP_TAG,
        size: "9 MB",
      },
    ],
  },
  {
    key: "linux",
    links: [
      {
        key: "appImage",
        file: `AltSendme_${DESKTOP_VERSION}_amd64.AppImage`,
        tag: DESKTOP_TAG,
        size: "92 MB",
      },
      {
        key: "debian",
        file: `AltSendme_${DESKTOP_VERSION}_amd64.deb`,
        tag: DESKTOP_TAG,
        size: "19 MB",
      },
      {
        key: "rpm",
        file: `AltSendme-${DESKTOP_VERSION}-1.x86_64.rpm`,
        tag: DESKTOP_TAG,
        size: "19 MB",
      },
      {
        key: "aarch64AppImage",
        file: `AltSendme_${DESKTOP_VERSION}_aarch64.AppImage`,
        tag: DESKTOP_TAG,
        size: "90 MB",
      },
      {
        key: "arm64Debian",
        file: `AltSendme_${DESKTOP_VERSION}_arm64.deb`,
        tag: DESKTOP_TAG,
        size: "19 MB",
      },
      {
        key: "aarch64Rpm",
        file: `AltSendme-${DESKTOP_VERSION}-1.aarch64.rpm`,
        tag: DESKTOP_TAG,
        size: "19 MB",
      },
    ],
  },
];

export const mobilePlatformGroups = [
  {
    key: "android",
    links: [
      {
        key: "arm64Apk",
        file: `AltSendme-${ANDROID_VERSION}-arm64.apk`,
        tag: ANDROID_VERSION,
        size: "50 MB",
      },
      {
        key: "armv7Apk",
        file: `AltSendme-${ANDROID_VERSION}-armv7.apk`,
        tag: ANDROID_VERSION,
        size: "35 MB",
      },
      {
        key: "universalApk",
        file: `AltSendme-${ANDROID_VERSION}-universal.apk`,
        tag: ANDROID_VERSION,
        size: "177 MB",
      },
    ],
  },
];

const HERO_DOWNLOAD_ORDER = ["windows", "mac", "linux", "android"];

export function getDownloadHref(link) {
  return releaseUrl(link.tag, link.file);
}

export function getPrimaryDownload(os, arch = "x64") {
  if (os === "windows" && arch === "arm64") {
    return primaryDownloadsByOs["windows-arm64"];
  }
  if (os === "linux" && arch === "arm64") {
    return primaryDownloadsByOs["linux-arm64"];
  }
  return primaryDownloadsByOs[os] || primaryDownloadsByOs.mac;
}

export function getPrimaryDownloadUrl(os, arch = "x64") {
  const primary = getPrimaryDownload(os, arch);
  return releaseUrl(primary.tag, primary.file);
}

export function getAlternateDownloadsForOs(osKey, arch = "x64") {
  const group = desktopPlatformGroups.find((g) => g.key === osKey);
  if (!group) return [];
  const primary = getPrimaryDownload(osKey, arch);
  return group.links
    .filter((link) => link.file !== primary?.file)
    .map((link) => ({
      ...link,
      href: getDownloadHref(link),
    }));
}

export function getPrimaryDownloadOption(t, os, arch = "x64") {
  const download = getPrimaryDownload(os, arch);
  return {
    id: download.id,
    size: download.size,
    icon: download.icon,
    url: releaseUrl(download.tag, download.file),
    label: t(download.heroTranslationKey),
  };
}

export function getDownloadOptions(t) {
  return HERO_DOWNLOAD_ORDER.map((osKey) => {
    const download = primaryDownloadsByOs[osKey];
    return {
      id: download.id,
      size: download.size,
      icon: download.icon,
      url: releaseUrl(download.tag, download.file),
      label: t(download.heroTranslationKey),
    };
  });
}
