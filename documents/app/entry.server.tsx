import { renderToString } from 'react-dom/server';
import { RemixServer } from 'remix';
import type { EntryContext } from 'remix';
import { I18nProvider } from 'remix-i18n';
import { i18n, getLocale } from '~/i18n';

export default function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext
) {
<<<<<<< HEAD:documents/app/entry.server.tsx
  const locale = getLocale(new URL(request.url).pathname);
  i18n.locale(locale);

  const markup = renderToString(
    <I18nProvider i18n={i18n}>
=======
  let locale = getLocale(new URL(request.url).pathname);
  const markup = renderToString(
    <I18nProvider fallback='zh' locale={locale}>
>>>>>>> fc247859ce627ebd230205053f44b200bd6e46eb:app/entry.server.tsx
      <RemixServer context={remixContext} url={request.url} />
    </I18nProvider>
  );

  responseHeaders.set('Content-Type', 'text/html');

  return new Response(`<!DOCTYPE html>${markup}`, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}
