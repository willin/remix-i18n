import { LoaderFunction, redirect } from '@remix-run/cloudflare';
import { pick } from 'accept-language-parser';
import { i18n } from '../i18n';

export const loader: LoaderFunction = async ({ request }) => {
  const locale =
    pick(i18n.supportedLanguages, request.headers.get('Accept-Language')) ||
    i18n.fallbackLng;

  return redirect(`/${locale}`);
};
