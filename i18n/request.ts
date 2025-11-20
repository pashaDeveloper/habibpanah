import {routing} from './routing';
import {getRequestConfig} from 'next-intl/server';

export default getRequestConfig(async () => ({
  locale: routing.defaultLocale,
  messages: (await import(`../app/locales/${routing.defaultLocale}/common.json`)).default
}));