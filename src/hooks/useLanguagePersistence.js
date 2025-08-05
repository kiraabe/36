import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const useLanguagePersistence = () => {
  const router = useRouter();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Wait for router to be ready
    if (router.isReady) {
      setIsReady(true);
    }
  }, [router.isReady]);

  useEffect(() => {
    // Save current language to localStorage when it changes
    if (router.locale && isReady) {
      localStorage.setItem('preferred-language', router.locale);
    }
  }, [router.locale, isReady]);

  useEffect(() => {
    // Only proceed if router is ready and we're on client side
    if (!isReady || typeof window === 'undefined' || !router.isReady) return;

    // Add a longer delay to ensure hydration is completely finished
    const timeoutId = setTimeout(() => {
      // Check for saved language preference on mount
      const savedLanguage = localStorage.getItem('preferred-language');

      if (savedLanguage && savedLanguage !== router.locale && !router.isFallback) {
        // Only redirect if we're on a page that supports the saved language
        const supportedLocales = ['en', 'nl'];
        if (supportedLocales.includes(savedLanguage)) {
          // Check if hydration is complete by looking for a hydrated element
          const isHydrated = document.querySelector('[data-reactroot]') ||
                           document.querySelector('#__next').children.length > 0;

          if (isHydrated) {
            const { pathname, asPath, query } = router;
            // Use replace instead of push to avoid adding to history stack
            router.replace({ pathname, query }, asPath, { locale: savedLanguage });
          }
        }
      }
    }, 500); // Increased delay to ensure hydration is complete

    return () => clearTimeout(timeoutId);
  }, [isReady, router.locale, router.isReady]);

  return {
    currentLanguage: router.locale,
    changeLanguage: async (locale) => {
      if (typeof window !== 'undefined') {
        localStorage.setItem('preferred-language', locale);
      }
      const { pathname, asPath, query } = router;
      await router.push({ pathname, query }, asPath, { locale });
    }
  };
};

export default useLanguagePersistence;
