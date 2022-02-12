import { Link } from 'remix';
import { useI18n } from 'remix-i18n';

export default function Index() {
  const { t } = useI18n();

  return (
    <div
      style={{
        fontFamily: 'system-ui, sans-serif',
        lineHeight: '1.4',
        maxWidth: '600px',
        margin: '0 auto'
      }}>
      <h1>{t('hello')}</h1>

      <br />
      <ul>
        <li>
          <Link to={'/zh/blog'}>中文</Link>
        </li>
        <li>
          <Link to={'/tl/blog'}>tagalog</Link>
        </li>
        <li>
          <Link to={'/en/blog'}>english</Link>
        </li>
        <li>
          <Link to={'/da/blog'}>danish</Link>
        </li>
      </ul>
    </div>
  );
}
