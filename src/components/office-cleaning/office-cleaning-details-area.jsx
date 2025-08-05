import React from 'react';
import AnswerQuestion from '@/src/common/answer-question';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
const dashbord = "https://cdn.builder.io/api/v1/image/assets%2F15a9643d46ba40d3acd34b8ee9003f5f%2F9aca7bcc08f9442d800514f1ba3f96f1?format=webp&width=800";
const service_img = "https://cdn.builder.io/api/v1/image/assets%2F684854aee2e544198255ca998eb85257%2Fc0f631569dd24f5e96febb30217f30f1?format=webp&width=800";

const bg_img = "linear-gradient(135deg, #ff4757 0%, #ff3838 50%, #c44569 100%)";

const OfficeCleaningDetailsArea = () => {
    const { t } = useTranslation(['common', 'services']);

    return (
        <>
            <div className="sv-details-area pt-100 pb-100">
            <div className="container">
               <div className="row">
                  <div className="col-xl-4 col-lg-4">
                     <div className="sv-details-widget">
                        <div className="sv-details-category mb-30">
                           <div className="sv-details-category-title">
                              <h4 className="sv-details-title-sm">{t('serviceDetails.categoryTitle', { ns: 'services' })}</h4>
                           </div>
                           <div className="sv-details-category-list">
                              <ul>
                                <li className="">
                                    <Link href="/service-details"><span>{t('houseCleaning', { ns: 'services' })}</span><i className="fal fa-angle-right"></i></Link>
                                </li>
                                <li className="">
                                    <Link href="/carpet-cleaning"><span>{t('carpetCleaning', { ns: 'services' })}</span><i className="fal fa-angle-right"></i></Link>
                                </li>
                                <li className="">
                                    <Link href="/window-cleaning"><span>{t('windowCleaning', { ns: 'services' })}</span><i className="fal fa-angle-right"></i></Link>
                                </li>
                                <li className="">
                                    <Link href="/deep-cleaning"><span>{t('deepCleaning', { ns: 'services' })}</span><i className="fal fa-angle-right"></i></Link>
                                </li>
                                <li className="active">
                                    <Link href="/office-cleaning"><span>{t('officeCleaning', { ns: 'services' })}</span><i className="fal fa-angle-right"></i></Link>
                                </li>
                              </ul>
                           </div>
                        </div>

                        <div className="tp-service__dashboard mb-30" style={{background: bg_img}}>
                           <div className="tp-service__top-content">
                              <h3 className="tp-service__title-white">{t('officeCleaningDetails.professionalOfficeCleaningTitle', { ns: 'services' })}</h3>
                              <p>{t('officeCleaningDetails.productiveDescription', { ns: 'services' })}</p>
                              <Link className="tp-btn-orange tp-btn-hover alt-color-white" href="/contact">
                                 <span>{t('serviceDetails.getQuote', { ns: 'services' })}</span>
                                 <b></b>
                              </Link>
                           </div>
                           <div className="tp-service__dashdboard-sm-img">
                              <Image src={dashbord} className="wow tpfadeRight" data-wow-duration=".9s" data-wow-delay=".3s"
                               alt="theme-pure" width={300} height={200} />
                           </div>
                        </div>

                        <div className="sv-details-social-box mb-30">
                           <h4 className="sv-details-title-sm">{t('serviceDetails.shareIt', { ns: 'services' })}</h4>
                           <div className="sv-details-social-link">
                              <Link href="https://facebook.com"><i className="fab fa-facebook-f"></i></Link>
                              <Link href="https://twitter.com"><i className="fab fa-twitter"></i></Link>
                              <Link href="https://instagram.com"><i className="fab fa-instagram"></i></Link>
                              <Link href="https://youtube.com"><i className="fab fa-youtube"></i></Link>
                           </div>
                        </div>

                     </div>
                  </div>
                  
                  <div className="col-xl-8 col-lg-8">
                     <div className="sv-details-wrapper">
                        <div className="sv-details-thumb mb-45">
                           <Image className="w-100" src={service_img} alt="Office Cleaning Service" width={800} height={600} />
                        </div>
                        <div className="sv-details-title-box mb-55">
                           <h4 className="sv-details-title">{t('serviceDetails.officeCleaningTitle', { ns: 'services' })}</h4>
                           <p>{t('officeCleaningDetails.overviewDescription', { ns: 'services' })}</p>
                        </div>
                        <div className="sv-details-text mb-35">
                           <h4 className="sv-details-text-title pb-10">{t('officeCleaningDetails.specializedServicesTitle', { ns: 'services' })}</h4>
                           <ul>
                            <li><i className="fal fa-check"></i><p>{t('officeCleaningDetails.officeCleaningItem', { ns: 'services' })}</p></li>
                            <li><i className="fal fa-check"></i><p>{t('officeCleaningDetails.washingDishesItem', { ns: 'services' })}</p></li>
                            <li><i className="fal fa-check"></i><p>{t('officeCleaningDetails.dustingVacuumingItem', { ns: 'services' })}</p></li>
                            <li><i className="fal fa-check"></i><p>{t('officeCleaningDetails.toiletCleaningItem', { ns: 'services' })}</p></li>
                           </ul>
                        </div>
                        <div className="sv-details-text-2">
                           <h4 className="sv-details-text-title">{t('officeCleaningDetails.whyChooseTitle', { ns: 'services' })}</h4>
                           <p>{t('officeCleaningDetails.whyChooseDescription', { ns: 'services' })}</p>
                        </div>
                        <div className="tp-faq-area pt-50">
                           <div className="container p-0">
                              <div className="row g-0">
                                 <div className="col-xl-12">
                                    <h4 className="sv-details-title">{t('content.anyQuestionsFind', { ns: 'services' })}</h4>
                                    <AnswerQuestion style={true} /> 
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
        </>
    );
};

export default OfficeCleaningDetailsArea;
