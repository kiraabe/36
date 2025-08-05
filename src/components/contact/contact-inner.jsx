import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useTranslation } from 'next-i18next';


import icon_1 from "../../../public/assets/img/contact/contact-icon-sm-1.png";
import icon_2 from "../../../public/assets/img/contact/contact-icon-sm-2.png";
import icon_3 from "../../../public/assets/img/contact/contact-icon-sm-3.png";


const inner_content = {
  title: "Get Free Quote!",
  description: <>We will contact you within 24h to schedule your cleaning consultation</>,

  contact_data: [
    {
      id: 1,
      icon: icon_1,
      title: "Info@omgcleaningcompany.nl",
      link: "mailto:Info@omgcleaningcompany.nl",
    },
    {
      id: 2,
      icon: icon_2,
      title: "+31 6 57 39 52 37",
      link: "tel:+31657395237",
    },
    {
      id: 3,
      icon: icon_3,
      title: "Warmoesstraat 149, Amsterdam",
      link: "https://www.google.com/maps/place/Warmoesstraat+149,+Amsterdam",
    },
  ],
};
const { title, description, contact_data } = inner_content;

const ContactInner = () => {
  const { t } = useTranslation(['common', 'contact']);

  return (
    <>
      <div className="contact-inner-area pb-130">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="contact-inner-title-sm-wrap text-center mb-50">
                <h4 className="contact-inner-title-sm">{t('buttons.getFreeQuote')}!</h4>
                <p>{t('page.consultation24h', { ns: 'contact' })}</p>
              </div>
            </div>
          </div>
          <div className="contact-inner-wrapper">
            <div className="row gx-0">
              {contact_data.map((item, i) => (
                <div key={i} className="col-xl-4 col-lg-4">
                  <div className="contact-inner-item d-flex align-items-center justify-content-center">
                    <div className="contact-inner-img contact-img-1">
                      <Image src={item.icon} alt="theme-pure" />
                    </div>
                    <div className="contact-inner-link">
                      <Link href={`${item.link}`}>{item.title}</Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div> 
    </>
  );
};

export default ContactInner;
