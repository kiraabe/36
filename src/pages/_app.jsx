import "@/src/styles/index.scss";
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { appWithTranslation } from 'next-i18next';
import LoadingSpinner from '@/src/components/ui/LoadingSpinner';
import { LanguageProvider } from '@/src/context/LanguageContext';
import ContextProvider from '@/src/context/ContextProvider';
import AnimateMouse from '@/src/components/ui/AnimateMouse';

function App({ Component, pageProps }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Load bootstrap only on client side
    if (typeof window !== "undefined") {
      require("bootstrap/dist/js/bootstrap");
    }
  }, []);

  useEffect(() => {
    const handleStart = () => {
      setLoading(true);
    };

    const handleComplete = () => {
      // Add small delay to ensure smooth transition
      setTimeout(() => setLoading(false), 200);
    };

    const handleError = () => {
      setLoading(false);
    };

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleError);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleError);
    };
  }, [router]);

  return (
    <LanguageProvider>
      <ContextProvider>
        <div suppressHydrationWarning>
          <AnimateMouse />
          <LoadingSpinner isVisible={loading} />
          <Component {...pageProps} />
        </div>
      </ContextProvider>
    </LanguageProvider>
  );
}

export default appWithTranslation(App);
