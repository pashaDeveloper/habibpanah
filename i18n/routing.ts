import {defineRouting} from 'next-intl/routing';

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ['en', 'fa', 'tr', 'ar', 'zh'],

  // Used when no locale matches
  defaultLocale: 'fa',
  
  localePrefix: 'as-needed',
  
  // Disable automatic locale detection to ensure default locale is always used
  localeDetection: false
});