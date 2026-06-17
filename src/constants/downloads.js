const RELEASE_BASE = "https://github.com/tonyantony300/alt-sendme/releases/download";

export const DESKTOP_VERSION = "0.3.5";
export const ANDROID_VERSION = "v0.3.6-beta";

export function releaseUrl(tag, filename) {
  return `${RELEASE_BASE}/${tag}/${filename}`;
}

export const primaryDownloadsByOs = {
  mac: {
    id: "mac",
    icon: "/applelogo.svg",
    file: `AltSendme_${DESKTOP_VERSION}_universal.dmg`,
    tag: `v${DESKTOP_VERSION}`,
    translationKey: "getAppForMac",
    heroTranslationKey: "hero.downloadForMac",
    size: "26 MB",
  },
  windows: {
    id: "windows",
    icon: "/windows.svg",
    file: `AltSendme_${DESKTOP_VERSION}_x64-setup.exe`,
    tag: `v${DESKTOP_VERSION}`,
    translationKey: "getAppForWindows",
    heroTranslationKey: "hero.downloadForWindows",
    size: "8 MB",
  },
  linux: {
    id: "linux-appimage",
    icon: "/linuxlogo.svg",
    file: `AltSendme_${DESKTOP_VERSION}_amd64.AppImage`,
    tag: `v${DESKTOP_VERSION}`,
    translationKey: "getAppForLinux",
    heroTranslationKey: "hero.downloadForLinux",
    size: "87 MB",
  },
};

export const desktopPlatformGroups = [
  {
    key: "mac",
    links: [
      {
        key: "universalDmg",
        file: `AltSendme_${DESKTOP_VERSION}_universal.dmg`,
        tag: `v${DESKTOP_VERSION}`,
      },
      {
        key: "universalTarGz",
        file: "AltSendme_universal.app.tar.gz",
        tag: `v${DESKTOP_VERSION}`,
      },
    ],
  },
  {
    key: "windows",
    links: [
      {
        key: "standardExe",
        file: `AltSendme_${DESKTOP_VERSION}_x64-setup.exe`,
        tag: `v${DESKTOP_VERSION}`,
      },
      {
        key: "msi",
        file: `AltSendme_${DESKTOP_VERSION}_x64_en-US.msi`,
        tag: `v${DESKTOP_VERSION}`,
      },
    ],
  },
  {
    key: "linux",
    links: [
      {
        key: "appImage",
        file: `AltSendme_${DESKTOP_VERSION}_amd64.AppImage`,
        tag: `v${DESKTOP_VERSION}`,
      },
      {
        key: "debian",
        file: `AltSendme_${DESKTOP_VERSION}_amd64.deb`,
        tag: `v${DESKTOP_VERSION}`,
      },
      {
        key: "rpm",
        file: `AltSendme-${DESKTOP_VERSION}-1.x86_64.rpm`,
        tag: `v${DESKTOP_VERSION}`,
      },
    ],
  },
];

export const mobilePlatformGroups = [
  {
    key: "android",
    links: [
      {
        key: "universalApk",
        file: `AltSendme-${ANDROID_VERSION}-universal.apk`,
        tag: ANDROID_VERSION,
      },
    ],
  },
];

const HERO_DOWNLOAD_ORDER = ["windows", "mac", "linux"];

export function getDownloadHref(link) {
  return releaseUrl(link.tag, link.file);
}

export function getPrimaryDownloadUrl(osKey) {
  const primary = primaryDownloadsByOs[osKey] || primaryDownloadsByOs.mac;
  return releaseUrl(primary.tag, primary.file);
}

export function getAlternateDownloadsForOs(osKey) {
  const group = desktopPlatformGroups.find((g) => g.key === osKey);
  if (!group) return [];
  const primary = primaryDownloadsByOs[osKey];
  return group.links
    .filter((link) => link.file !== primary?.file)
    .map((link) => ({
      ...link,
      href: getDownloadHref(link),
    }));
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
