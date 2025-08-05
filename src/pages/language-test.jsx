import React from 'react';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { getI18nProps } from '../utils/serverSideTranslations';
import Header from '../layout/headers/header';
import Footer from '../layout/footers/footer';

const LanguageTest = () => {
  const { t } = useTranslation(['common', 'home', 'services', 'about', 'contact', 'portfolio']);
  const router = useRouter();

  const switchLanguage = async (locale) => {
    const { pathname, asPath, query } = router;
    await router.push({ pathname, query }, asPath, { locale });
  };

  return (
    <>
      <Header />
      <div className="container py-5">
        <div className="row">
          <div className="col-12">
            <h1>Language Translation Test</h1>
            <p>Current locale: <strong>{router.locale}</strong></p>
            
            <div className="my-4">
              <button 
                className="btn btn-primary me-2" 
                onClick={() => switchLanguage('en')}
                disabled={router.locale === 'en'}
              >
                Switch to English
              </button>
              <button 
                className="btn btn-secondary" 
                onClick={() => switchLanguage('nl')}
                disabled={router.locale === 'nl'}
              >
                Switch to Dutch
              </button>
            </div>

            <div className="row">
              <div className="col-md-6">
                <h3>Navigation Translations</h3>
                <ul>
                  <li>{t('navigation.home')}</li>
                  <li>{t('navigation.about')}</li>
                  <li>{t('navigation.services')}</li>
                  <li>{t('navigation.portfolio')}</li>
                  <li>{t('navigation.contact')}</li>
                </ul>

                <h3>Common Buttons</h3>
                <ul>
                  <li>{t('buttons.getQuote')}</li>
                  <li>{t('buttons.bookNow')}</li>
                  <li>{t('buttons.learnMore')}</li>
                  <li>{t('buttons.contactUs')}</li>
                </ul>
              </div>
              
              <div className="col-md-6">
                <h3>Home Page Content</h3>
                <ul>
                  <li>{t('hero.title', { ns: 'home' })}</li>
                  <li>{t('hero.subtitle', { ns: 'home' })}</li>
                  <li>{t('hero.specialOffer', { ns: 'home' })}</li>
                  <li>{t('hero.description', { ns: 'home' })}</li>
                </ul>

                <h3>Company Info</h3>
                <ul>
                  <li>{t('company.name')}</li>
                  <li>{t('contact.address')}</li>
                  <li>{t('contact.workingHours')}</li>
                </ul>
              </div>
            </div>

            <div className="row mt-4">
              <div className="col-md-6">
                <h3>Services</h3>
                <ul>
                  <li>{t('navigation.houseCleaning')}</li>
                  <li>{t('navigation.carpetCleaning')}</li>
                  <li>{t('navigation.windowCleaning')}</li>
                  <li>{t('navigation.deepCleaning')}</li>
                  <li>{t('navigation.officeCleaning')}</li>
                </ul>
              </div>
              
              <div className="col-md-6">
                <h3>Features</h3>
                <ul>
                  <li>{t('features.ecoFriendly', { ns: 'home' })}</li>
                  <li>{t('features.professionalTeam', { ns: 'home' })}</li>
                  <li>{t('features.satisfaction', { ns: 'home' })}</li>
                  <li>{t('features.flexibleScheduling', { ns: 'home' })}</li>
                </ul>
              </div>
            </div>

            <div className="mt-4">
              <h3>Test Instructions</h3>
              <p>1. Click the language switching buttons above</p>
              <p>2. Verify that all text changes to the selected language</p>
              <p>3. Navigate to different pages and verify translations persist</p>
              <p>4. Refresh the page and verify the language is remembered</p>
              
              <h4>Console Commands for Testing:</h4>
              <code>
                <p>window.switchToEnglish() - Switch to English</p>
                <p>window.switchToDutch() - Switch to Dutch</p>
              </code>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await getI18nProps(locale, ['common', 'home', 'services', 'about', 'contact', 'portfolio'])),
    },
  };
};

export default LanguageTest;
