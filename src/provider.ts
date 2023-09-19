import { createContext, createElement, useMemo, useState } from 'react';
import type { ReactNode } from 'react';
import type { RemixI18n } from './i18n';

export const context = createContext<{ i18n: RemixI18n } | null>(null);

interface I18nProviderProps {
  children: ReactNode;
  i18n: RemixI18n;
}

export function I18nProvider({ i18n, children }: I18nProviderProps) {
  const [, setTick] = useState(0);

  const value = useMemo(() => {
    i18n.setOnChange(() => {
      setTick((s) => s + 1);
    });
    return { i18n };
  }, [i18n]);

  // eslint-disable-next-line react/no-children-prop
  return createElement(context.Provider, {
    value: { ...value },
    children
  });
}
