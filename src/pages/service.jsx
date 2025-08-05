import React from "react";
import { useTranslation } from 'next-i18next';
import { getI18nProps } from "../utils/serverSideTranslations";
import SEO from "../common/seo";
import Service from "../components/service";
import Wrapper from "../layout/wrapper";

const index = () => {
  const { t } = useTranslation('common');
  return (
    <Wrapper>
      <SEO pageTitle={t('pages.servicesTitle')} />
      <Service />
    </Wrapper>
  );
};

export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await getI18nProps(locale, ['common', 'services', 'about', 'home'])),
    },
  };
};

export default index;
