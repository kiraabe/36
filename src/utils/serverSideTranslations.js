import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export const getI18nProps = async (locale, namespaces = ['common']) => {
  return {
    ...(await serverSideTranslations(locale, namespaces)),
  };
};

export const getI18nPaths = () => {
  return {
    paths: [
      { params: {}, locale: 'en' },
      { params: {}, locale: 'nl' },
    ],
    fallback: false,
  };
};
