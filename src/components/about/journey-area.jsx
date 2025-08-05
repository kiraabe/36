import React, {useState, useEffect} from 'react';
import { Navigation, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useTranslation } from 'next-i18next';

// slider setting
const setting = {
    loop: true, 
    slidesPerView: 5,
    spaceBetween: 30,
    breakpoints: {
        '1200': {
            slidesPerView: 5,
        },
        '992': {
            slidesPerView: 3,
        },
        '768': {
            slidesPerView: 2,
        },
        '576': {
            slidesPerView: 2,
        },
        '0': {
            slidesPerView: 1,
        },
    }, 
      scrollbar: {
        el: ".tp-scrollbar",
        clickable: true,
    },
  }
const JourneyArea = () => {
  const { t } = useTranslation(['about']);
  const [isDragged, setIsDragged] = useState(false);

  // journey_data with translation keys
  const journey_data = [
    {
        id: "01",
        key: "2009"
    },
    {
        id: "02",
        key: "2012"
    },
    {
        id: "03",
        key: "2015"
    },
    {
        id: '04',
        key: "2018"
    },
    {
        id: "05",
        key: "2021"
    },
    {
        id: "06",
        key: "2022a"
    },
    {
      id: "07",
      key: "2022b"
    },
    {
        id: '08',
        key: "2023a"
    },
    {
        id: "09",
        key: "2023b"
    },
    {
        id: "10",
        key: "present"
    },
  ];

  const handleSlideChange = () => {
     setIsDragged(true);
  };

  const handleTransitionEnd = () => {
     setIsDragged(false);
  };

    return (
      <>
        <div className="journey-area p-relative fix">
          <div className="journey-grey-bg grey-bg"></div>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="journey-section-box">
                  <h5 className="inner-section-subtitle pb-10" suppressHydrationWarning>{t('journey.subtitle')}</h5>
                  <h3 className="ab-brand-title pb-0 mb-0" suppressHydrationWarning>
                    {t('journey.title')}
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div className="container-fluid g-0">
            <div className="row g-0">
              <div className="col-xl-12">
                <div className="journey-slider-wrapper">
                  <Swiper
                    {...setting}
                    onSliderMove={handleSlideChange}
                    onTransitionEnd={handleTransitionEnd}
                    modules={[Navigation, Scrollbar]}
                    className={`swiper-container journey-slider-active ${isDragged ? "dragged" : ""}`}
                  >
                    {journey_data.map((item, i) => (
                      <SwiperSlide
                        key={i}
                        className="journey-slider-item p-relative"
                      > 
                        <div className="journey-stroke-text">
                          <h2>{item.id}</h2>
                        </div>
                        <div className="journey-slider-meta">
                          <span suppressHydrationWarning>{t(`journey.milestones.${item.key}.date`)}</span>
                        </div>
                        <div className="journey-slider-content">
                          <h4 className="journey-slider-title" suppressHydrationWarning>{t(`journey.milestones.${item.key}.title`)}</h4>
                          <p suppressHydrationWarning>{t(`journey.milestones.${item.key}.description`)}</p>
                        </div>
                      </SwiperSlide>
                    ))}
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

export default JourneyArea;
