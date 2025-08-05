import Breadcrumb from "@/src/common/breadcrumbs/breadcrumb";
import HeroBanner from "@/src/common/hero-banner";
import Footer from "@/src/layout/footers/footer";
import Header from "@/src/layout/headers/header";
import React from "react";
import { useTranslation } from "next-i18next";
import CardArea from "../../common/card-area";
import SalesArea from "../../common/sales-area";
import TestimonialArea from "../../common/testimonial-area";
import CtaArea from "../contact/cta-area";
import FaqArea from "../homes/home-2/faq-area";
import ServiceArea from "./service-area";

const Service = () => {
  const { t } = useTranslation('common');

  return (
    <>
      <Header />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <Breadcrumb title_top={t('breadcrumb.our')} title_bottom={t('navigation.services')} />
            <HeroBanner title={t('breadcrumb.our')} subtitle={t('navigation.services')} bg_img="https://cdn.builder.io/api/v1/image/assets%2Ff0efdd0d522c41a290d2e73aa074b098%2F059fc5d3c0f84de284f3d12b521b5ee0?format=webp&width=800" />
            <ServiceArea /> 
            <CardArea style_service={true} />
            <SalesArea style_service={true} />
            <TestimonialArea />
            <FaqArea style_service={true} />
            <CtaArea />
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Service;
