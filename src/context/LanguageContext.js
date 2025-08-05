import React, { createContext, useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const router = useRouter();
  const { i18n } = useTranslation();
  // Always initialize with 'en' to prevent hydration mismatch
  const [currentLanguage, setCurrentLanguage] = useState('en');
  const [isChangingLanguage, setIsChangingLanguage] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    // Mark as hydrated and sync with router locale only after router is ready
    setIsHydrated(true);
    if (router.isReady && router.locale && router.locale !== currentLanguage) {
      setCurrentLanguage(router.locale);
    }
  }, [router.locale, router.isReady]);

  // Remove the i18n synchronization as it might be causing issues
  // useEffect(() => {
  //   if (isHydrated && i18n.language !== router.locale) {
  //     i18n.changeLanguage(router.locale);
  //   }
  // }, [router.locale, i18n, isHydrated]);

  useEffect(() => {
    // Listen for programmatic language switch events
    const handleLanguageSwitch = (event) => {
      const { locale } = event.detail;
      changeLanguage(locale);
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('language-switch', handleLanguageSwitch);
      return () => {
        window.removeEventListener('language-switch', handleLanguageSwitch);
      };
    }
  }, []);

  const changeLanguage = async (locale) => {
    if (locale === currentLanguage || isChangingLanguage) return;

    setIsChangingLanguage(true);

    try {
      // Update router locale - let Next.js handle the i18n change
      const { pathname, asPath, query } = router;
      await router.push({ pathname, query }, asPath, { locale });

      setCurrentLanguage(locale);
    } catch (error) {
      console.error('Error changing language:', error);
    } finally {
      setIsChangingLanguage(false);
    }
  };

  const contextValue = {
    currentLanguage,
    changeLanguage,
    isChangingLanguage,
    supportedLanguages: ['en', 'nl'],
    getLanguageLabel: (locale) => {
      const labels = {
        en: '🇬🇧 English',
        nl: '🇳🇱 Nederlands'
      };
      return labels[locale] || locale;
    }
  };

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguageContext = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguageContext must be used within a LanguageProvider');
  }
  return context;
};

export default LanguageContext;
