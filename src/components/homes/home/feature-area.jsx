import RightArrow from '@/src/svg/right-arrow';
import Link from 'next/link';
import Image from 'next/image';
import React, { useRef } from 'react';
import { useTranslation } from 'next-i18next';
import useTitleAnimation from "@/src/hooks/useTitleAnimation";  

// icon import 
import icon_1 from "../../../../public/assets/img/feature/fea-icon-1.png";
import icon_2 from "../../../../public/assets/img/feature/fea-icon-2.png";
import icon_3 from "../../../../public/assets/img/feature/fea-icon-3.png";
import feature_bottom_shape from "../../../../public/assets/img/feature/fea-bg-shape-1.png";

// feature data will be generated with translations

// feature content will be handled by translations

const FeatureArea = () => {
   const { t } = useTranslation(['common', 'home']);
   let titleRef = useRef(null)
   useTitleAnimation(titleRef)

   // Generate feature data with translations
   const feature_data = [
      {
         id: 1,
         img: icon_1,
         title: t('features.unifiedView', { ns: 'home' }),
         delay: ".4s",
      },
      {
         id: 2,
         img: icon_2,
         title: t('features.industryProcedures', { ns: 'home' }),
         delay: ".6s",
      },
      {
         id: 3,
         img: icon_3,
         title: t('features.collaboration', { ns: 'home' }),
         delay: ".8s",
      },
   ]

   return (
      <>
         <div className="tp-feature__area tp-feature__pt-pb pt-165 pb-170 p-relative">
            <div className="tp-feature__bottom-shape">
               <Image style={{width: "auto", height: "auto"}} src={feature_bottom_shape} alt="them-pure" />
            </div>
            <div className="container">

               <div className="row justify-content-center">
                  <div className="col-xl-6 wow tpfadeUpp" data-wow-duration=".9s" data-wow-delay=".2s">
                     <div ref={titleRef} className="tp-feature__section-box tp__title_anime text-center mb-55 tp-title-anim">
                        <h2 className="tp-section-title">{t('services.ourServices', { ns: 'home' })}</h2>
                        <p>{t('services.trustedCustomers', { ns: 'home' })}</p>
                     </div>
                  </div>
               </div>

               <div className="row">
                  {feature_data.map((item, i) =>
                     <div key={i} className="col-xl-4 col-lg-4 col-md-6 mb-30 wow tpfadeUp" data-wow-duration=".9s" data-wow-delay={item.delay} >
                        <div id="divtest" className="tp-feature__item">
                           <div className="tp-feature__icon">
                              <Image src={item.img} alt={item.title} />
                           </div>
                           <h3 className="tp-feature__title-sm" dangerouslySetInnerHTML={{__html: item.title}}></h3>
                           <div className="tp-feature__link tp-common-btn">
                              <Link href="/service-details">
                                 <RightArrow />
                              </Link>
                           </div>
                        </div>
                     </div>
                  )}
               </div>

            </div>
         </div>

      </>
   );
};

export default FeatureArea;
