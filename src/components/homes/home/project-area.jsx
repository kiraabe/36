import project_data from '@/src/data/project-data';
import { useTranslatableProjectData } from '@/src/hooks/useTranslatableProjectData';
import RightArrow from '@/src/svg/right-arrow';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { useTranslation } from 'next-i18next';
import { Navigation, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

const setting = {
   loop: true,
   slidesPerView: 3,
   centeredSlides: true,
   spaceBetween: 10,
   breakpoints: {
      '1200': {
         slidesPerView: 3,
         spaceBetween: 10,
      },
      '992': {
         slidesPerView: 2,
         spaceBetween: 8,
         centeredSlides: false,
      },
      '768': {
         slidesPerView: 1,
         spaceBetween: 5,
         centeredSlides: true,
      },
      '576': {
         slidesPerView: 1,
         spaceBetween: 5,
         centeredSlides: true,
      },
      '0': {
         slidesPerView: 1,
         spaceBetween: 5,
         centeredSlides: true,
      },
   },

   scrollbar: {
      el: ".tp-scrollbar",
      clickable: true,
   },
}

const ProjectArea = () => {
   const { t } = useTranslation(['common', 'portfolio']);
   const projectData = useTranslatableProjectData();
   const [isDragged, setIsDragged] = useState(false);

   const handleSlideChange = () => {
      setIsDragged(true);
   };

   const handleTransitionEnd = () => {
      setIsDragged(false);
   };
   return (
      <>
         <div className="tp-project__area grey-bg pt-50 pb-110 fix">
            <div className="container">
               <div className="row">
                  <div className="col-xl-6">
                     <div className="tp-project__section-box wow tpfadeLeft" data-wow-duration=".9s" data-wow-delay=".3s">
                        <h3 className="tp-section-title">{t('page.description', { ns: 'portfolio' })}</h3>
                     </div>
                  </div>
               </div>
            </div>
            <div className="container-fluid gx-0">
               <div className="row gx-0">
                  <div className="col-xl-12">
                     <div className="tp-project__slider-section">
                        <Swiper
                           {...setting}
                           onSliderMove={handleSlideChange}
                           onTransitionEnd={handleTransitionEnd}
                           modules={[Navigation, Scrollbar]}
                           className={`swiper-container tp-project__slider-active ${isDragged ? "dragged" : ""
                              }`}>
                           {projectData.map((item, i) =>
                              <SwiperSlide
                                 key={i}
                                 className="swiper-slide wow tpfadeUp"
                                 data-wow-duration=".9s"
                                 data-wow-delay={item.delay}
                              >
                                 <div className="tp-project__slider-wrapper">
                                    <div className="tp-project__thumb position-relative">
                                       <Image
                                          src={item.img_1}
                                          alt={`Professional cleaning service - ${item.title}`}
                                          width={400}
                                          height={280}
                                          style={{objectFit: 'cover'}}
                                          priority={i < 3}
                                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                       />
                                       {/* Text overlay on image */}
                                       <div className="tp-project__text-overlay position-absolute">
                                          <h4 className="tp-project__overlay-title">
                                             <Link href="/project-details">{item.title}</Link>
                                          </h4>
                                          <p className="tp-project__overlay-description">{item.description}</p>
                                          <div className="tp-project__overlay-link">
                                             <Link href="/project-details">
                                                <RightArrow />
                                             </Link>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </SwiperSlide>
                           )}
                        </Swiper>
                        <div className="tp-scrollbar"></div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default ProjectArea;
