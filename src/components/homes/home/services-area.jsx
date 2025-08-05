import Image from 'next/image';
import Link from 'next/link';
import React, { useRef } from 'react';
import { useTranslation } from 'next-i18next';
import useTitleAnimation from "@/src/hooks/useTitleAnimation";
import { useTranslatableServiceData } from '@/src/hooks/useTranslatableServiceData';
import RightArrow from '@/src/svg/right-arrow';

const img = "https://cdn.builder.io/api/v1/image/assets%2F15a9843d46ba40d3acd34b8ee9003f5f%2F9aca7bcc08f9442d800514f1ba3f96f1?format=webp&width=800"; 

const service_content = {
    bg_img: "linear-gradient(135deg, #ff4757 0%, #ff3838 50%, #c44569 100%)",
}
const {bg_img}  = service_content

const ServicesArea = () => {
    const { t } = useTranslation(['common', 'home']);
    const serviceData = useTranslatableServiceData();
    let titleRef = useRef(null)

   useTitleAnimation(titleRef)
    return (
        <>
            <div className="tp-service__area p-relative fix">
               <div className="tp-service__grey-shape grey-bg"></div>
               <div className="container">
                  <div className="row justify-content-center">
                     <div className="col-lg-8">
                        <div ref={titleRef} className="tp-service__section-box tp__title_anime mb-50 text-center tp-title-anim">
                           <h2 className="tp-section-title">{t('services.ourServices', { ns: 'home' })}</h2>
                           <p>{t('services.trustedCustomers', { ns: 'home' })}</p>
                        </div>
                     </div>
                  </div>
                  <div className="row">

                    {serviceData.map((item, i)  => 
                        <div key={i} className="col-xl-4 col-lg-4 col-md-6 wow tpfadeUp" data-wow-duration=".9s" data-wow-delay={item.delay}>
                            <div className="tp-service__item mb-30">
                                <div className="tp-service__icon">
                                    {typeof item.img === 'string' ? (
                                        <Image src={item.img} alt="theme-pure" width={80} height={80} />
                                    ) : typeof item.icon === 'function' ? (
                                        <span className="svg-icon"><item.icon /></span>
                                    ) : (
                                        <span className="svg-icon">{item.img}</span>
                                    )}
                                </div>
                                <div className="tp-service__content">
                                    <h3 className="tp-service__title-sm tp-yellow-color"><Link href="/service-details">{item.title}</Link></h3>
                                    <p>{item.description}</p>
                                </div>
                                <div className="tp-service__link">
                                    <Link href="/service-details">
                                        <RightArrow />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )}

                     <div className="col-xl-4 col-lg-4 col-md-6 wow tpfadeUp" data-wow-duration=".9s" data-wow-delay="1s">
                        <div className="tp-service__dashboard" 
                        style={{background: bg_img}} >
                           <div className="tp-service__top-content">
                              <h3 className="tp-service__title-white">{t('services.deepCleaningSpecialists', { ns: 'home' })}</h3>
                              <p>{t('services.professionalDeepCleaning', { ns: 'home' })}</p>
                              <Link className="tp-btn-orange tp-btn-hover alt-color-white" href="/contact">
                                 <span>{t('buttons.bookService')}</span>
                                 <b></b>
                              </Link>
                           </div>
                           <div className="tp-service__dashdboard-sm-img">
                              <Image className="wow tpfadeRight" data-wow-duration=".9s" data-wow-delay=".7s"
                              src={img} alt="theme-pure" width={300} height={200} />
                           </div>
                        </div>
                     </div>

                  </div>
               </div>
            </div>
        </>
    );
};

export default ServicesArea;
