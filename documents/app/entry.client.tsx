import { hydrate } from 'react-dom';
import { RemixBrowser } from 'remix';
import { I18nProvider } from 'remix-i18n';
import { getLocale } from '~/get-locale';

let locale = getLocale(window.location.pathname);

hydrate(
  <I18nProvider fallback='zh' locale={locale}>
    <RemixBrowser />
  </I18nProvider>,
  document
);
