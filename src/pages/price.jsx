import React from "react";
import { getI18nProps } from "../utils/serverSideTranslations";
import SEO from "../common/seo";
import Price from "../components/price";
import Wrapper from "../layout/wrapper";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Cleaning Service Pricing Plans"} />
      <Price />
    </Wrapper>
  );
};

export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await getI18nProps(locale, ['common', 'about', 'home'])),
    },
  };
};

export default index;
