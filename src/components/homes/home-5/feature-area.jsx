import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useTranslation } from 'next-i18next';
import useTranslatableFeatureData from '@/src/hooks/useTranslatableFeatureData';





const FeatureArea = ({style_integraton}) => {
    const { t } = useTranslation('common');
    const feature_data = useTranslatableFeatureData();
    return (
        <>
            <div className={`tp-feature-area ${style_integraton ? "pt-100 pb-30" : "grey-bg-3 pt-120 pb-110"}`}>
                  <div className="container">
                     <div className="row">
                        <div className="col-12">
                           <div className="tp-feature-five-section-box text-center mb-40">
                            {style_integraton ? 
                                <>
                                <h3 className="tp-section-title-5 text-black">
                                    <span>
                                        {t('features.whatYouWillGet')}
                                    </span>
                                </h3>
                                    <p>{t('features.takeBusiness')}</p>
                                </>
                                :
                                <>
                                <h3 className="tp-section-title-5 text-black">{t('features.aboutCustomerStories')}</h3>
                                <p>{t('features.takeBusiness')}</p>                                
                                </>
                            }
                           </div>
                        </div>
                     </div>
                     <div className="row gx-0 tp-feature-five-wrapper-main">
                        {feature_data.map((item, i) => 
                            <div key={i} className="col-xl-3 col-lg-6 col-md-6">
                                <div className="tp-feature-five-wrapper">
                                    <div className={`tp-feature-five-item tp-feature-five-item-${item.color} text-center z-index`}>
                                        <div className="tp-feature-five-icon p-relative">
                                            {item.img}
                                            <div className={`tp-feature-five-shape-color tp-feature-five-shape-color-${item.color}`}></div>
                                        </div>
                                        <div className="tp-feature-five-content">
                                            <h4 className="tp-feature-five-title-sm">{item.title}</h4>
                                            <p>{item.description}</p>
                                        </div>
                                        <div className="tp-feature-five-btn">
                                            <Link className="tp-btn-purple" href="/service-details">{t('cta.learnMore')}</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            )
                        }
                     </div>
                     <div className="row">
                        <div className="col-12">
                           <div className="tp-feature-five-link text-center">
                              <span>{t('features.checkOutAll')} <Link href="/service-details">{t('features.allFeatures')}</Link></span>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
        </>
    );
};

export default FeatureArea;
