import Breadcrumb from "@/src/common/breadcrumbs/breadcrumb";
import TestimonialArea from "@/src/common/testimonial-area";
import Footer from "@/src/layout/footers/footer";
import Header from "@/src/layout/headers/header";
import HeroBanner from "@/src/common/hero-banner";
import React from "react";
import WindowCleaningDetailsArea from "./window-cleaning-details-area";
import { useTranslation } from 'next-i18next';

const WindowCleaning = () => {
  const { t } = useTranslation(['services']);

  return (
    <>
      <Header />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <Breadcrumb
              title_top={t('breadcrumb.windowCleaningTop')}
              title_bottom={t('breadcrumb.windowCleaningBottom')}
            />
            <HeroBanner
              title={t('breadcrumb.windowCleaningTop')}
              subtitle={t('breadcrumb.windowCleaningBottom')}
              bg_img="https://cdn.builder.io/api/v1/image/assets%2F4702167bebca4f23b16d6c88e23adfe0%2F9d9c1f26078f4de0b6ee2499cd784806?format=webp&width=800"
            />
            <WindowCleaningDetailsArea />
            <TestimonialArea />
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default WindowCleaning;
