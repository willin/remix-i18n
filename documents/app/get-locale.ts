export function getLocale(pathname: string): string {
  const [, locale = ''] = pathname.split('/');
  switch (locale) {
    case 'en': {
      return 'en';
    }
    case 'tl': {
      return 'tl';
    }
    case 'da': {
      return 'da';
    }
    default: {
      return 'zh';
    }
  }
}
