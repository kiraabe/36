import Link from 'next/link';
import React from 'react';
import { useTranslation } from 'next-i18next';

const CtaArea = () => {
    const { t } = useTranslation(['about']);
    const bg_img = "/assets/img/cta/cta-bg.jpg";
    return (
        <>
            <div className="tp-cta-area p-relative mb-120">
               <div className="tp-cta-grey-bg grey-bg-2"></div>
               <div className="container">
                  <div className="row">
                     <div className="col-12">
                        <div className="tp-cta-bg" style={{backgroundImage: `url(${bg_img})`}}>
                           <div className="tp-cta-content tp-inner-font text-center">
                              <h3 className="tp-section-title text-white">{t('cta.title')}</h3>
                              <p>{t('cta.description')}</p>
                                 <Link className="tp-btn-inner white-bg text-black" href="/service-details">{t('cta.buttonText')}</Link>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
        </>
    );
};

export default CtaArea;
