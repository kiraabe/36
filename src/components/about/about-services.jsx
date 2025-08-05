import Link from 'next/link';
import React from 'react';
import { useTranslation } from 'next-i18next';

const AboutServices = () => {
    const { t } = useTranslation(['about']);
    return (
        <>
            <div className="about-services-area pt-100 pb-50">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-4 col-lg-4">
                            <div className="about-services-title-box mb-50">
                                <h3 className="about-services-title">{t('aboutServices.title')}</h3>
                            </div>
                        </div>
                        <div className="col-xl-8 col-lg-8">
                            <div className="about-services-content mb-50">
                                <h4 className="about-services-question mb-25">
                                    {t('aboutServices.question')}
                                </h4>
                                <div className="about-services-text mb-30">
                                    <p className="mb-20">
                                        {t('aboutServices.description1')}
                                    </p>
                                    <p className="mb-25">
                                        <strong>{t('aboutServices.description2')}</strong>
                                    </p>
                                </div>
                                <div className="about-services-btn">
                                    <Link className="tp-btn-red tp-btn-hover" href="/contact">
                                        <span>{t('aboutServices.buttonText')}</span>
                                        <b></b>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutServices;
