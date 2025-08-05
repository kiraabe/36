import testimonial_data from '@/src/data/testimonial-data';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { Navigation, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useTranslation } from 'next-i18next';
import ClientOnly from '@/src/components/ui/ClientOnly';

const bg_img = "/assets/img/testimonial/testi-bg-5-1.jpg";

// setting 
const setting = {
   loop: true,
   slidesPerView: 4,
   spaceBetween: 30,
   breakpoints: {
      '1200': {
         slidesPerView: 4,
      },
      '992': {
         slidesPerView: 3,
      },
      '768': {
         slidesPerView: 3,
      },
      '576': {
         slidesPerView: 1,
      },
      '0': {
         slidesPerView: 1,
      },
   },
   scrollbar: {
      el: ".tp-scrollbar",
      clickable: true,
   },
   navigation: {
      nextEl: '.test-prev',
      prevEl: '.test-next',
   },
}

const TestimonialArea = () => {
   const { t } = useTranslation(['home']);
   const [isDragged, setIsDragged] = useState(false);

   const handleSlideChange = () => {
      setIsDragged(true);
   };

   const handleTransitionEnd = () => {
      setIsDragged(false);
   };

   return (
      <>
         <div className="tp-testimonial-area pt-130 pb-130 mb-100 fix"
            style={{ background: `linear-gradient(135deg, #DC2626 0%, #B91C1C 100%)` }}
         >
            <div className="container">
               <div className="row align-items-end tp-testimonial-five-section-space">
                  <div className="col-md-8">
                     <div className="tp-testimonial-five-section-box">
                        <span className="tp-section-subtitle-5">{t('testimonialsSection.subtitle')}</span>
                        <h3 className="tp-section-title-5">
                           {t('testimonialsSection.title')}
                        </h3>
                     </div>
                  </div>
                  <div className="col-md-4">
                     <div className="tp-testimonial-five-arrow d-flex align-items-center justify-content-start justify-content-md-end">
                        <div className="test-next">
                           <button><i className="far fa-arrow-left"></i></button>
                        </div>
                        <div className="test-prev">
                           <button><i className="far fa-arrow-right"></i></button>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="container-fluid p-0">
               <div className="row g-0">
                  <div className="col-12">
                     <div className="tp-testimonial-five-slider-section">
                        <ClientOnly fallback={
                           <div style={{ minHeight: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                              <p style={{ color: 'white' }}>Loading testimonials...</p>
                           </div>
                        }>
                           <Swiper
                              {...setting}
                              onSliderMove={handleSlideChange}
                              onTransitionEnd={handleTransitionEnd}
                              modules={[Navigation, Scrollbar]}
                              className={`swiper-container testimonial-five-slider-active ${isDragged ? "dragged" : ""}`}>
                              {[0, 1, 2, 3, 4, 5].map((index) => {
                                 const staticItem = testimonial_data[12 + index] || testimonial_data[12];
                                 return (
                                    <SwiperSlide key={index} className="tp-testimonial-five-item">
                                       <div className="tp-testimonial-five-wrapper d-flex justify-content-between align-items-center">
                                          <div className="tp-testimonial-five-top-info d-flex align-items-center">
                                             <div className="tp-testimonial-five-avata">
                                                <Image src={staticItem.author_img} alt="theme-pure" />
                                             </div>
                                             <div className="tp-testimonial-five-author-info">
                                                <h4>{t(`testimonialsSection.testimonials.${index}.name`)}</h4>
                                                <span>{t(`testimonialsSection.testimonials.${index}.title`)}</span>
                                             </div>
                                          </div>
                                          <div className="tp-testimonial-five-brand d-none d-sm-block">
                                             <Image src={staticItem.brand_icon} alt="theme-pure" />
                                          </div>
                                       </div>
                                       <div className="tp-testimonial-five-content">
                                          <p>{t(`testimonialsSection.testimonials.${index}.description`)}</p>
                                       </div>
                                    </SwiperSlide>
                                 );
                              })}
                           </Swiper>
                           <div className="tp-scrollbar"></div>
                        </ClientOnly>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default TestimonialArea;
