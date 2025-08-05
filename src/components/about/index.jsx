import AboutArea from "@/src/common/about-area";
import Footer from "@/src/layout/footers/footer";
import Header from "@/src/layout/headers/header";
import React from "react";
import { useTranslation } from "next-i18next";
import Breadcrumb from "../../common/breadcrumbs/breadcrumb";
import HeroBanner from "../../common/hero-banner";
import CtaArea from "../contact/cta-area";
import TeamArea from "../homes/home-4/team-area";
import AboutServices from "./about-services";
import Brand from "./brand";
import CompanyArea from "./company-area";
import JourneyArea from "./journey-area";
import TestimonialsSection from "./testimonials-section";
import ScrollToTop from "@/src/hooks/scroll-to-top";

const About = () => {
  const { t } = useTranslation(['common', 'about']);
  return (
    <>
      <Header />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main className="fix">
            <Breadcrumb title_top={t('navigation.about')} title_bottom="" />
            <HeroBanner title={t('navigation.about')} subtitle="" bg_img="https://cdn.builder.io/api/v1/image/assets%2F502af3714cbb44bab6c5decbdffe176f%2F1bc56307182046cc9d6ad93e0a9c537f?format=webp&width=800" />
            <Brand />
            <AboutServices />
            <TestimonialsSection />
            <CompanyArea />
            <AboutArea />
            <TeamArea bg_style={true} />
            <JourneyArea />
            <CtaArea />
          </main>
          <Footer style_contact={true} style_team={true} />
          <ScrollToTop />
        </div>
      </div>
    </>
  );
};

export default About;
