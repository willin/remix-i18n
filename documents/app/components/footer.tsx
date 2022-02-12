import { useI18n } from 'remix-i18n';

export function Footer() {
  const { t } = useI18n();
  return (
    <footer className='p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800'>
      <span className='text-sm text-gray-500 sm:text-center dark:text-gray-400'>
        © 2022{' '}
        <a
          href='https://willin.wang'
          className='hover:underline'
          target='_blank'>
          Willin Wang
        </a>
        . All Rights Reserved.
      </span>
      <ul className='flex flex-wrap items-center mt-3 sm:mt-0'>
        <li>
          <a
            href='https://github.com/willin/remix-i18n'
            className='text-sm text-gray-500 hover:underline dark:text-gray-400'
            target='_blank'>
            {t('nav.source')}
          </a>
        </li>
      </ul>
    </footer>
  );
}
