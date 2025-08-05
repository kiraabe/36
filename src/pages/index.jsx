import React from "react";
import { useTranslation } from 'next-i18next';
import { getI18nProps } from "../utils/serverSideTranslations";
import SEO from "../common/seo";
import HomeOne from "../components/homes/home";
import Wrapper from "../layout/wrapper";

const Home = () => {
  const { t } = useTranslation('common');
  return (
    <Wrapper>
      <SEO pageTitle="Professional Cleaning Services" />
      <HomeOne />
    </Wrapper>
  );
};

export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await getI18nProps(locale, ['common', 'home', 'portfolio'])),
    },
  };
};

export default Home;
