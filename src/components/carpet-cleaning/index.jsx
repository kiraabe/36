import Breadcrumb from "@/src/common/breadcrumbs/breadcrumb";
import TestimonialArea from "@/src/common/testimonial-area";
import Footer from "@/src/layout/footers/footer";
import Header from "@/src/layout/headers/header";
import HeroBanner from "@/src/common/hero-banner";
import React from "react";
import CarpetCleaningDetailsArea from "./carpet-cleaning-details-area";
import { useTranslation } from 'next-i18next';

const CarpetCleaning = () => {
  const { t } = useTranslation(['services']);

  return (
    <>
      <Header />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <Breadcrumb
              title_top={t('breadcrumb.carpetCleaningTop')}
              title_bottom={t('breadcrumb.carpetCleaningBottom')}
            />
            <HeroBanner
              title={t('breadcrumb.carpetCleaningTop')}
              subtitle={t('breadcrumb.carpetCleaningBottom')}
              bg_img="https://cdn.builder.io/api/v1/image/assets%2F4702167bebca4f23b16d6c88e23adfe0%2F66fd8b9a98744177814676d2f66f595f?format=webp&width=800"
            />
            <CarpetCleaningDetailsArea />
            <TestimonialArea />
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default CarpetCleaning;
