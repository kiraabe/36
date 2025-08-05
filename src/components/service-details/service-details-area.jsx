import React from 'react';
import AnswerQuestion from '@/src/common/answer-question';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
const dashbord = "https://cdn.builder.io/api/v1/image/assets%2F15a9843d46ba40d3acd34b8ee9003f5f%2F9aca7bcc08f9442d800514f1ba3f96f1?format=webp&width=800";
const service_img = "https://cdn.builder.io/api/v1/image/assets%2F684854aee2e544198255ca998eb85257%2F5ba03ee880864718872da8ab81e070fb?format=webp&width=800";

const bg_img = "linear-gradient(135deg, #ff4757 0%, #ff3838 50%, #c44569 100%)";

const ServiceDetailsArea = () => {
    const { t } = useTranslation(['services', 'common']);

    return (
        <>
            <div className="sv-details-area pt-100 pb-100">
            <div className="container">
               <div className="row">
                  <div className="col-xl-4 col-lg-4">
                     <div className="sv-details-widget">
                        <div className="sv-details-category mb-30">
                           <div className="sv-details-category-title">
                              <h4 className="sv-details-title-sm" suppressHydrationWarning>{t('serviceDetails.categoryTitle')}</h4>
                           </div>
                           <div className="sv-details-category-list">
                              <ul>
                                <li className="active">
                                    <Link href="/service-details"><span suppressHydrationWarning>{t('houseCleaning')}</span><i className="fal fa-angle-right"></i></Link>
                                </li>
                                <li className="">
                                    <Link href="/carpet-cleaning"><span suppressHydrationWarning>{t('carpetCleaning')}</span><i className="fal fa-angle-right"></i></Link>
                                </li>
                                <li className="">
                                    <Link href="/window-cleaning"><span suppressHydrationWarning>{t('windowCleaning')}</span><i className="fal fa-angle-right"></i></Link>
                                </li>
                                <li className="">
                                    <Link href="/deep-cleaning"><span suppressHydrationWarning>{t('deepCleaning')}</span><i className="fal fa-angle-right"></i></Link>
                                </li>
                                <li className="">
                                    <Link href="/office-cleaning"><span suppressHydrationWarning>{t('officeCleaning')}</span><i className="fal fa-angle-right"></i></Link>
                                </li>
                              </ul>
                           </div>
                        </div>

                        <div className="tp-service__dashboard mb-30" style={{background: bg_img}}>
                           <div className="tp-service__top-content">
                              <h3 className="tp-service__title-white" suppressHydrationWarning>{t('content.professionalCleaningServicesSolutions')}</h3>
                              <p suppressHydrationWarning>{t('content.trustedCleaningExpertsHomeOffice')}</p>
                              <Link className="tp-btn-orange tp-btn-hover alt-color-white" href="/contact">
                                 <span suppressHydrationWarning>{t('serviceDetails.getQuote')}</span>
                                 <b></b>
                              </Link>
                           </div>
                           <div className="tp-service__dashdboard-sm-img">
                              <Image src={dashbord} className="wow tpfadeRight" data-wow-duration=".9s" data-wow-delay=".3s"
                               alt="theme-pure" width={300} height={200} />
                           </div>
                        </div>

                        <div className="sv-details-social-box mb-30">
                           <h4 className="sv-details-title-sm" suppressHydrationWarning>{t('content.shareIt')}</h4>
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
                           <Image className="w-100" src={service_img} alt="House Cleaning Service" width={800} height={600} />
                        </div>
                        <div className="sv-details-title-box mb-55">
                           <h4 className="sv-details-title" suppressHydrationWarning>{t('serviceDetails.houseCleaningTitle')}</h4>
                           <p suppressHydrationWarning>{t('serviceDetails.houseCleaningDescription')}</p>
                        </div>
                        <div className="sv-details-text mb-35">
                           <h4 className="sv-details-text-title pb-10" suppressHydrationWarning>{t('content.goingBeyondUsual')}</h4>
                           <ul>
                              <li>
                                 <i className="fal fa-check"></i>
                                 <p suppressHydrationWarning>{t('serviceDetails.overviewList.0')}</p>
                              </li>
                              <li>
                                 <i className="fal fa-check"></i>
                                 <p suppressHydrationWarning>{t('serviceDetails.overviewList.1')}</p>
                              </li>
                              <li>
                                 <i className="fal fa-check"></i>
                                 <p suppressHydrationWarning>{t('serviceDetails.overviewList.2')}</p>
                              </li>
                           </ul>
                        </div>
                        <div className="sv-details-text-2">
                           <h4 className="sv-details-text-title" suppressHydrationWarning>{t('serviceDetails.whyChooseTitle')}</h4>
                           <p suppressHydrationWarning>{t('serviceDetails.whyChooseDescription')}</p>
                        </div>
                        <div className="tp-faq-area pt-50">
                           <div className="container p-0">
                              <div className="row g-0">
                                 <div className="col-xl-12">
                                    <h4 className="sv-details-title" suppressHydrationWarning>{t('content.anyQuestionsFind')}</h4>
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

export default ServiceDetailsArea;
