import { useI18n } from 'remix-i18n';
import { useEffect } from 'react';
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLocation
} from '@remix-run/react';
import type { MetaFunction } from '@remix-run/cloudflare';
// eslint-disable-next-line import/no-unresolved
import tailwindStyles from '~/styles/global.css';
import { getLocale } from './i18n';
import { Layout } from './components/layout';

export const meta: MetaFunction = () => [{ title: 'New Remix App' }];

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: tailwindStyles }
];

export default function App() {
  const i18n = useI18n();
  const location = useLocation();
  useEffect(() => {
    const locale = getLocale(location.pathname);
    if (locale !== i18n.locale()) {
      i18n.locale(locale);
    }
  }, [location]);

  return (
    <html lang={i18n.locale()} className='dark'>
      <head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width,initial-scale=1' />
        <Meta />
        <Links />
      </head>
      <body>
        <Layout>
          <Outlet />
        </Layout>
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === 'development' && <LiveReload />}
      </body>
    </html>
  );
}
