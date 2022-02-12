import * as Frenchkiss from 'frenchkiss';
import { createContext } from 'react';

export type I18nContext = {
  set: typeof Frenchkiss.set;
  t: typeof Frenchkiss.t;
  locale: typeof Frenchkiss.locale;
  fallback: typeof Frenchkiss.fallback;
};

export type I18nOptions = {
  /**
   * active language
   */
  locale?: string;
  /**
   * locale resources
   */
  dict?: Frenchkiss.StoreData;
  fallback?: string;
  instance: typeof Frenchkiss;

  onChange?: (local: string) => void;
};

export const context = createContext<I18nContext | null>(null);

export const createState = (options: I18nOptions): I18nContext => {
  const i18n = options.instance;

  if (options.locale && options.dict) {
    i18n.set(options.locale, options.dict);
  }
  if (options.fallback) {
    i18n.fallback(options.fallback);
  }

  if (options.locale !== i18n.locale()) {
    i18n.locale(options.locale);
  }

  return {
    set: i18n.set,
    t: i18n.t,
    fallback: i18n.fallback,
    locale: (lang?: string): string => {
      if (lang === undefined) {
        return i18n.locale();
      }

      const current = i18n.locale();
      if (current !== lang) {
        const l = i18n.locale(lang);
        options.onChange?.(lang);
        return l;
      }

      return current;
    }
  };
};
