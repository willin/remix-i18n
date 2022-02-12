import { useMatches } from '@remix-run/react';
import { useContext, useEffect } from 'react';
import { context, type I18nContext } from './context';

export function useI18n() {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const i18n = useContext(context) as I18nContext;
  if (!i18n) {
    throw new Error('Unable to get instance of i18n');
  }
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return i18n;
}
