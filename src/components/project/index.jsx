import Breadcrumb from "@/src/common/breadcrumbs/breadcrumb";
import HeroBanner from "@/src/common/hero-banner";
import Footer from "@/src/layout/footers/footer";
import Header from "@/src/layout/headers/header";
import React from "react";
import { useTranslation } from "next-i18next";
import Portfolio from "./portfolio";
import PortfolioBlogGrid from "./portfolio-blog-grid";

const Project = () => {
  const { t } = useTranslation(['common', 'portfolio']);
  return (
    <>
      <Header />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <Breadcrumb title_top="Portfolio" title_bottom="" />
            <Portfolio />
            <PortfolioBlogGrid />
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Project;
