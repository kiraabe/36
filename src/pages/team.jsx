import React from "react";
import { getI18nProps } from "../utils/serverSideTranslations";
import SEO from "../common/seo";
import Team from "../components/team";
import Wrapper from "../layout/wrapper";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Our Professional Cleaning Team"} />
      <Team />
    </Wrapper>
  );
};

export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await getI18nProps(locale, ['common', 'about'])),
    },
  };
};

export default index;
