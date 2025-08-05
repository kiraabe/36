# Multilingual Implementation Guide

## Overview
This website now supports seamless switching between English and Dutch using next-i18next. The implementation includes automatic language detection, persistent language preferences, and SEO optimization with hreflang tags.

## Features Implemented

### ✅ Core i18n Features
- **Instant Language Switching**: No page reload required
- **Persistent Language Preference**: Stored in localStorage
- **SEO Optimized**: Hreflang tags and localized URLs
- **Automatic Detection**: Browser language detection on first visit
- **Responsive Design**: Language switcher works on all devices

### ✅ Components Updated
- **Header Navigation**: All menu items translated
- **Footer**: Complete translation including contact info, links, and social media
- **Newsletter Subscription**: All form text and messages translated
- **SEO Component**: Meta tags, Open Graph, and hreflang tags

## File Structure

```
public/
  locales/
    en/
      common.json          # English translations
    nl/
      common.json          # Dutch translations

src/
  components/
    ui/
      LanguageSwitcher.jsx # Language switcher component
      NewsletterSubscription.jsx # Updated with translations
  hooks/
    useLanguagePersistence.js # Language persistence hook
  utils/
    serverSideTranslations.js # SSR translation helper
  layout/
    headers/
      header.jsx         # Updated with translations
      nav-menu.jsx       # Navigation with translations
      menu-data.js       # Menu data with translation keys
    footers/
      footer.jsx         # Footer with complete translations
  common/
    seo.jsx              # SEO component with hreflang tags

next-i18next.config.js     # i18n configuration
next.config.js             # Updated with i18n config
```

## Translation Keys Structure

### Navigation
```json
{
  "nav": {
    "home": "Home",
    "about": "About",
    "services": "Services",
    "project": "Portfolio",
    "contact": "Contact",
    "getQuote": "Get a Quote"
  }
}
```

### Footer
```json
{
  "footer": {
    "contactUs": "Contact Us",
    "quickLinks": "Quick Links",
    "ourServices": "Our Services",
    "stayConnected": "Stay Connected",
    "subscribeText": "Subscribe to get cleaning tips and special offers",
    "followUs": "Follow Us",
    "workingHours": "Working Hours",
    "language": "Language"
  }
}
```

### Services
```json
{
  "services": {
    "houseCleaning": "House Cleaning",
    "carpetCleaning": "Carpet Cleaning",
    "windowCleaning": "Window Cleaning",
    "deepCleaning": "Deep Cleaning",
    "officeCleaning": "Office Cleaning"
  }
}
```

## Usage Examples

### In Components
```jsx
import { useTranslation } from 'next-i18next';

const MyComponent = () => {
  const { t } = useTranslation('common');
  
  return (
    <h1>{t('nav.home')}</h1>
  );
};
```

### In Pages (getStaticProps)
```jsx
import { getI18nProps } from '../utils/serverSideTranslations';

export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await getI18nProps(locale, ['common'])),
    },
  };
};
```

### With Parameters
```jsx
// Translation with variables
t('footer.copyright', { year: new Date().getFullYear() })

// In JSON:
"copyright": "Copyright © {year} OMG Cleaning Company. All Rights Reserved."
```

## Language Switcher

The LanguageSwitcher component provides:
- **Visual Flag Indicators**: 🇬🇧 English, 🇳🇱 Nederlands  
- **Dropdown Interface**: Clean, modern dropdown design
- **Active State**: Shows current language with checkmark
- **Hover Effects**: Smooth animations and visual feedback
- **Mobile Responsive**: Optimized for touch devices

### Implementation
```jsx
import LanguageSwitcher from '@/src/components/ui/LanguageSwitcher';

<LanguageSwitcher className="me-3 d-none d-md-inline-block" />
```

## SEO Implementation

### Hreflang Tags
Automatically generated for each page:
```html
<link rel="alternate" hreflang="en" href="https://omgcleaning.nl/en/about" />
<link rel="alternate" hreflang="nl" href="https://omgcleaning.nl/nl/about" />
<link rel="alternate" hreflang="x-default" href="https://omgcleaning.nl/about" />
```

### Localized URLs
- English: `/en/about`
- Dutch: `/nl/about`
- Default: `/about` (falls back to English)

### Open Graph
Localized Open Graph tags for social media sharing:
```html
<meta property="og:locale" content="nl_NL" />
<meta property="og:title" content="Over Ons - OMG Cleaning Company" />
```

## Configuration

### next-i18next.config.js
```javascript
module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'nl'],
    localePath: './public/locales',
    localeDetection: true,
  },
  reloadOnPrerender: process.env.NODE_ENV === 'development',
}
```

### next.config.js
```javascript
const { i18n } = require('./next-i18next.config.js')

const nextConfig = {
  i18n,
  // ... other config
}
```

## Language Persistence

### localStorage Implementation
- Language preference stored in browser
- Automatic restoration on page reload
- Respects user choice across sessions

### Hook Usage
```jsx
import useLanguagePersistence from '@/src/hooks/useLanguagePersistence';

const { currentLanguage, changeLanguage } = useLanguagePersistence();
```

## Adding New Translations

### 1. Add to JSON Files
Add new keys to both `public/locales/en/common.json` and `public/locales/nl/common.json`

### 2. Use in Components
```jsx
const { t } = useTranslation('common');
return <span>{t('newKey')}</span>;
```

### 3. For Pages with getStaticProps
Ensure pages include the translation namespace:
```jsx
export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await getI18nProps(locale, ['common'])),
    },
  };
};
```

## Testing

### Language Switching
1. Click language switcher in header
2. Verify immediate content change
3. Refresh page - language should persist
4. Check URL includes locale prefix

### SEO Verification
1. View page source
2. Verify hreflang tags present
3. Check canonical URLs
4. Validate Open Graph tags

## Browser Support

- **Modern Browsers**: Full support with all features
- **Older Browsers**: Graceful fallback to default language
- **Mobile Devices**: Optimized touch interface

## Performance

- **Bundle Size**: Minimal impact with code splitting
- **Load Time**: Translations loaded on demand
- **Caching**: Static translations cached efficiently
- **SSR**: Server-side rendering with pre-loaded translations

## Troubleshooting

### Common Issues

1. **Missing Translations**
   - Check JSON files for missing keys
   - Verify namespace is loaded in getStaticProps

2. **Language Not Persisting**
   - Check localStorage in browser dev tools
   - Verify useLanguagePersistence hook usage

3. **SEO Tags Not Showing**
   - Ensure SEO component imported and used
   - Check router.locale is available

### Debug Tips

```jsx
// Check current locale
import { useRouter } from 'next/router';
const router = useRouter();
console.log('Current locale:', router.locale);

// Check translation loading
const { t, ready } = useTranslation('common');
console.log('Translations ready:', ready);
```

## Future Enhancements

- **Additional Languages**: Easy to add more locales
- **Dynamic Content**: API-driven translations
- **Admin Interface**: CMS for translation management
- **A/B Testing**: Language-specific content testing
- **Analytics**: Track language usage patterns

## Conclusion

The multilingual implementation provides a professional, user-friendly experience with:
- ✅ Seamless language switching
- ✅ Persistent user preferences  
- ✅ SEO optimization
- ✅ Mobile responsive design
- ✅ Complete translation coverage

Users can now easily switch between English and Dutch with their preference remembered across visits!
