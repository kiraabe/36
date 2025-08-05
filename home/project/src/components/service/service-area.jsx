import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useTranslation } from 'next-i18next';
import { useTranslatableServiceData } from './service-data-translatable';

import service_icon_1 from "../../../public/assets/img/service/sv-icon-3-1.png"
import service_icon_2 from "../../../public/assets/img/service/service-shape-3-1.png"


const service_content = {
    bg_img: "/assets/img/service/service-3-bg.png",
}
const {bg_img}  = service_content


const ServiceArea = () => {
    const { t } = useTranslation(['common', 'services']);
    const serviceData = useTranslatableServiceData();
    return (
        <>
            <div className="tp-service-area pb-120 z-index">
               <div className="container">
                  <div className="row">
                     <div className="col-xl-12">
                        <div className="tp-service-section-wrapper mb-60 d-flex justify-content-between align-items-end">
                           <h3 className="tp-section-title tp-title-anim">{t('title', { ns: 'services' })}</h3>
                              <Link className="tp-btn-inner tp-btn-hover alt-color-black wow tpfadeRight"
                                 data-wow-duration=".9s"
                                 data-wow-delay=".3s"
                                 href="/service">
                                 <span>{t('viewAllServices', { ns: 'services' })}</span>
                                 <b></b>
                              </Link>
                        </div>
                     </div>
                  </div>
                  <div className="row">

                     <div className="col-xl-8 wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".3s">
                        <div className="tp-service-3-item mb-30 p-relative z-index" style={{backgroundImage: `url(${bg_img})`}}>
                           <div className="tp-service-3-icon">
                              <Image src={service_icon_1} alt="theme-pure" />
                           </div>
                           <div className="tp-service-3-content">
                              <span>{t('expertHouseCleaning', { ns: 'services' })}</span>
                              <h4 className="tp-service-3-title-sm">
                                 <Link href="/service-details">{t('expertHouseCleaningDesc', { ns: 'services' })}</Link></h4>
                           </div>
                           <div className="tp-service-3-btn">
                              <Link className="tp-btn-white-solid" href="/service-details">{t('buttons.learnMore')}</Link>
                           </div>
                           <div className="tp-service-3-shape">
                              <Image src={service_icon_2} alt="theme-pure" />
                           </div>
                        </div>
                     </div>

                     {serviceData.map((item, i)  =>
                        <div key={i} className="col-xl-4 col-lg-6 col-md-6 wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".5s">
                        <div className="tp-service-sm-item mb-30 d-flex flex-column justify-content-between">
                           <div className="tp-service-sm-icon">
                               {item.icon}
                           </div>
                           <div className="tp-service-sm-content">
                              <span>{item.title}</span>
                              <h3 className="tp-service-sm-title"><Link href="/service-details">{item.description}</Link></h3>
                              <div className="tp-service-sm-link">
                                 <Link href="/service-details">{t('buttons.learnMore')} <i className="far fa-arrow-right"></i></Link>
                              </div>
                           </div>
                        </div>
                     </div>
                        )
                     } 
                  </div>
               </div>
            </div>
        </>
    );
};

export default ServiceArea;
