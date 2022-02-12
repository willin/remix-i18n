import { RemixI18n } from 'remix-i18n';

export const i18n = new RemixI18n({
  supportedLanguages: ['en', 'tl', 'da', 'zh'],
  fallbackLng: 'zh'
});

export function getLocale(pathname: string): string {
  const [, locale = ''] = pathname.split('/');
  if (i18n.options.supportedLanguages.includes(locale)) {
    return locale;
  }
  return i18n.options.fallbackLng;
}

const locales = {
  zh: {
    hello: '你好，世界'
  },
  en: {
    hello: 'Hello world!'
  },
  tl: {
    hello: 'Kumusta mundo!'
  },
  da: {
    hello: 'Hej Verden!'
  }
};

Object.entries(locales).forEach(([key, value]) => {
  i18n.set(key, value);
});
