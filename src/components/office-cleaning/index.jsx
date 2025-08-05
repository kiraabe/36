import Breadcrumb from "@/src/common/breadcrumbs/breadcrumb";
import TestimonialArea from "@/src/common/testimonial-area";
import Footer from "@/src/layout/footers/footer";
import Header from "@/src/layout/headers/header";
import HeroBanner from "@/src/common/hero-banner";
import React from "react";
import { useTranslation } from 'next-i18next';
import OfficeCleaningDetailsArea from "./office-cleaning-details-area";

const OfficeCleaning = () => {
  const { t } = useTranslation(['common', 'services']);

  return (
    <>
      <Header />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <Breadcrumb title_top={t('breadcrumb.officeCleaningTop', { ns: 'services' })} title_bottom={t('breadcrumb.officeCleaningBottom', { ns: 'services' })} />
            <HeroBanner title={t('breadcrumb.officeCleaningTop', { ns: 'services' })} subtitle={t('breadcrumb.officeCleaningBottom', { ns: 'services' })} bg_img="https://cdn.builder.io/api/v1/image/assets%2F4702167bebca4f23b16d6c88e23adfe0%2F4480892053914d7d87caae34d9261150?format=webp&width=800" />
            <OfficeCleaningDetailsArea />
            <TestimonialArea />
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default OfficeCleaning;
