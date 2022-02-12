import 'flowbite';
import { hydrate } from 'react-dom';
import { RemixBrowser } from 'remix';
import { I18nProvider } from 'remix-i18n';
import { i18n, getLocale } from './i18n';

const locale = getLocale(window.location.pathname);
i18n.locale(locale);

hydrate(
  <I18nProvider i18n={i18n}>
    <RemixBrowser />
  </I18nProvider>,
  document
);
