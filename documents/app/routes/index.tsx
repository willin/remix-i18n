import { pick } from 'accept-language-parser';
import { LoaderFunction, redirect } from 'remix';
import { i18n } from '../i18n';

export const loader: LoaderFunction = ({ request }) => {
  const locale =
    pick(i18n.supportedLanguages, request.headers.get('Accept-Language')) ||
    i18n.fallbackLng;
  return redirect(`/${locale}`);
};
