import Breadcrumb from "@/src/common/breadcrumbs/breadcrumb";
import TestimonialArea from "@/src/common/testimonial-area";
import Footer from "@/src/layout/footers/footer";
import Header from "@/src/layout/headers/header";
import HeroBanner from "@/src/common/hero-banner";
import React from "react";
import { useTranslation } from 'next-i18next';
import DeepCleaningDetailsArea from "./deep-cleaning-details-area";

const DeepCleaning = () => {
  const { t } = useTranslation(['common', 'services']);

  return (
    <>
      <Header />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <Breadcrumb title_top={t('breadcrumb.deepCleaningTop', { ns: 'services' })} title_bottom={t('breadcrumb.deepCleaningBottom', { ns: 'services' })} />
            <HeroBanner title={t('breadcrumb.deepCleaningTop', { ns: 'services' })} subtitle={t('breadcrumb.deepCleaningBottom', { ns: 'services' })} bg_img="https://cdn.builder.io/api/v1/image/assets%2F4702167bebca4f23b16d6c88e23adfe0%2Fd48a4eadae6d43a6b3d900be78328e26?format=webp&width=800" />
            <DeepCleaningDetailsArea />
            <TestimonialArea />
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default DeepCleaning;
