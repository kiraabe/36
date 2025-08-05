import React from "react";
import { getI18nProps } from "../utils/serverSideTranslations";
import SEO from "../common/seo";
import DeepCleaning from "../components/deep-cleaning";
import Wrapper from "../layout/wrapper";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Professional Deep Cleaning Services - OMG Cleaning Company"} />
      <DeepCleaning />
    </Wrapper>
  );
};

export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await getI18nProps(locale, ['common', 'services', 'home'])),
    },
  };
};

export default index;
