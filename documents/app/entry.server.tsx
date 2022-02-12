import { renderToString } from 'react-dom/server';
import { RemixServer } from 'remix';
import type { EntryContext } from 'remix';
import { I18nProvider } from 'remix-i18n';
import { getLocale } from '~/get-locale';

export default function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext
) {
  let locale = getLocale(new URL(request.url).pathname);
  const markup = renderToString(
    <I18nProvider fallback='zh' locale={locale}>
      <RemixServer context={remixContext} url={request.url} />
    </I18nProvider>
  );

  responseHeaders.set('Content-Type', 'text/html');

  return new Response(`<!DOCTYPE html>${markup}`, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}
