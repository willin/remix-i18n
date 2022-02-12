import { RemixI18n } from 'remix-i18n';

export const i18n = new RemixI18n({
  supportedLanguages: ['en', 'zh'],
  fallbackLng: 'zh'
});

const locales = {
  zh: {
    nav: {
      source: '开源仓库'
    }
  },
  en: {
    nav: {
      source: 'Source Project'
    }
  }
};

export function getLocale(pathname: string): string {
  const [, locale = ''] = pathname.split('/');
  if (i18n.supportedLanguages.includes(locale)) {
    return locale;
  }
  return i18n.fallbackLng;
}

Object.entries(locales).forEach(([key, value]) => {
  i18n.set(key, value);
});
