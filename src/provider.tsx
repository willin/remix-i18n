import { createElement, ReactNode, useMemo, useState } from 'react';
import Frenchkiss from 'frenchkiss';
import { context, createState, I18nContext } from './context';

interface I18nProviderProps {
  children: ReactNode;
  locale: string;
  dict?: Frenchkiss.StoreData;
  fallback?: string;
  i18n: typeof Frenchkiss;
}

export function I18nProvider({
  fallback,
  locale,
  dict,
  children
}: I18nProviderProps) {
  const [, setTick] = useState(0);
  const state: I18nContext = useMemo(
    () =>
      createState({
        instance: Frenchkiss,
        locale,
        fallback,
        dict,
        onChange(lang) {
          setTick((s) => s + 1);
        }
      }),
    [dict]
  );

  // eslint-disable-next-line react/no-children-prop
  return createElement(context.Provider, {
    value: { ...state },
    children
  });
}
