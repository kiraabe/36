import React from "react";
import { getI18nProps } from "../utils/serverSideTranslations";
import SEO from "../common/seo";
import WindowCleaning from "../components/window-cleaning";
import Wrapper from "../layout/wrapper";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Professional Window Cleaning Services - OMG Cleaning Company"} />
      <WindowCleaning />
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
