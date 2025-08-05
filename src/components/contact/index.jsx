import Footer from "@/src/layout/footers/footer";
import Header from "@/src/layout/headers/header";
import React from "react";
import { useTranslation } from "next-i18next";
import Breadcrumb from "../../common/breadcrumbs/breadcrumb";
import ContactFormArea from "./contact-form-area";
import ContactInner from "./contact-inner";
import CtaArea from "./cta-area";

import OfficeLocation from "./office-location";

const Contact = () => {
  const { t } = useTranslation(['common', 'contact']);
  return (
    <>
      <Header />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <Breadcrumb title_top={t('breadcrumb.getIn')} title_bottom={t('navigation.contact')} />
            <OfficeLocation />
            <ContactFormArea />
            <ContactInner />
            <CtaArea />
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Contact;
