import React from "react";
import SEO from "../common/seo";
import Career from "../components/career";
import Wrapper from "../layout/wrapper";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Join Our Cleaning Team - Careers"} />
      <Career />
    </Wrapper>
  );
};

export default index;
