import { useRouter } from 'next/router';

export const useLanguageSwitch = () => {
  const router = useRouter();

  const switchLanguage = async (targetLocale) => {
    if (targetLocale === router.locale) return;

    try {
      // Store language preference
      localStorage.setItem('preferred-language', targetLocale);
      
      // Navigate to same page with new locale
      const { pathname, asPath, query } = router;
      await router.push({ pathname, query }, asPath, { locale: targetLocale });
    } catch (error) {
      console.error('Error switching language:', error);
    }
  };

  const getCurrentLanguage = () => router.locale || 'en';
  
  const getAvailableLanguages = () => ['en', 'nl'];

  return {
    switchLanguage,
    getCurrentLanguage,
    getAvailableLanguages,
    currentLocale: router.locale || 'en'
  };
};

// For testing purposes, you can call this function from browser console
if (typeof window !== 'undefined') {
  window.switchToEnglish = () => {
    const event = new CustomEvent('language-switch', { detail: { locale: 'en' } });
    window.dispatchEvent(event);
  };
  
  window.switchToDutch = () => {
    const event = new CustomEvent('language-switch', { detail: { locale: 'nl' } });
    window.dispatchEvent(event);
  };
}
