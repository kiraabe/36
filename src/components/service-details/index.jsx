import Breadcrumb from "@/src/common/breadcrumbs/breadcrumb";
import TestimonialArea from "@/src/common/testimonial-area";
import Footer from "@/src/layout/footers/footer";
import Header from "@/src/layout/headers/header";
import HeroBanner from "@/src/common/hero-banner";
import React from "react";
import ServiceDetailsArea from "./service-details-area";
import { useTranslation } from 'next-i18next';

const ServiceDetails = () => {
  const { t } = useTranslation(['services']);

  return (
    <>
      <Header />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <Breadcrumb
              title_top={t('breadcrumb.houseCleaningTop')}
              title_bottom={t('breadcrumb.houseCleaningBottom')}
            />
            <HeroBanner
              title={t('breadcrumb.houseCleaningTop')}
              subtitle={t('breadcrumb.houseCleaningBottom')}
              bg_img="https://cdn.builder.io/api/v1/image/assets%2F4702167bebca4f23b16d6c88e23adfe0%2F75c15b2f0fbe4f669dc3eae37e1c37f3?format=webp&width=800"
            />
            <ServiceDetailsArea />
            <TestimonialArea />
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default ServiceDetails;
