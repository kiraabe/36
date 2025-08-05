module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'nl'],
    localeDetection: true,
  },
  localePath: './public/locales',
  reloadOnPrerender: process.env.NODE_ENV === 'development',
  fallbackLng: false,
  debug: false,
  keySeparator: '.',
  interpolation: {
    escapeValue: false,
  },
  react: {
    useSuspense: false,
  },
}
