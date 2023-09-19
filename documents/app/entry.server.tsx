import isbot from 'isbot';
import { renderToReadableStream } from 'react-dom/server';
import { RemixServer } from '@remix-run/react';
import { I18nProvider } from 'remix-i18n';
import { i18n, getLocale } from './i18n';

export default async function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext,
  loadContext: AppLoadContext
) {
  const locale = getLocale(new URL(request.url).pathname);
  i18n.locale(locale);

  const body = await renderToReadableStream(
    <I18nProvider i18n={i18n}>
      <RemixServer context={remixContext} url={request.url} />
    </I18nProvider>,
    {
      signal: request.signal,
      onError(error: unknown) {
        // Log streaming rendering errors from inside the shell
        console.error(error);
        responseStatusCode = 500;
      }
    }
  );

  if (isbot(request.headers.get('user-agent'))) {
    await body.allReady;
  }

  responseHeaders.set('Content-Type', 'text/html');
  return new Response(body, {
    headers: responseHeaders,
    status: responseStatusCode
  });
}
