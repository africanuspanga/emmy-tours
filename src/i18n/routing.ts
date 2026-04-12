import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['en', 'it', 'fr', 'de'],
  defaultLocale: 'en',
});
