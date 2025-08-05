import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { useTranslation } from 'next-i18next';

// img and icon import here
import bg_right_img from "../../../../public/assets/img/rank/rank-bg-shape.png" ;
import top_img_1 from "../../../../public/assets/img/rank/rank-cup.png";
// circle 
import cirimg_1 from "../../../../public/assets/img/rank/sky-circle.png";
import cirimg_2 from "../../../../public/assets/img/rank/yellow-circle.png";
import cirimg_3 from "../../../../public/assets/img/rank/black-circle.png";
import cirimg_4 from "../../../../public/assets/img/rank/black-sm-circle.png";
import cirimg_5 from "../../../../public/assets/img/rank/black-sm-circle.png";
import cirimg_6 from "../../../../public/assets/img/rank/black-sm-circle.png";
import cirimg_7 from "../../../../public/assets/img/rank/black-sm-circle.png";


// rank_data will be created inside component to use translations

// circle_shape
const circle_shape  = [
    {
        id: 1, 
        cls:"1 tpfadeUp",
        img: cirimg_1,
        delay: ".3s",
    },
    {
        id: 2, 
        cls:"2 tpfadeLeft",
        img: cirimg_2,
        delay: ".5s",
    },
    {
        id: 3, 
        cls:"3 tpfadeRight",
        img: cirimg_3,
        delay: ".4s",
    },
    {
        id: 4, 
        cls:"4 tpfadeIn",
        img: cirimg_4,
        delay: ".7s",
    },
    {
        id: 5, 
        cls:"5 tpfadeUp",
        img: cirimg_5,
        delay: ".9s",
    },
    {
        id: 6, 
        cls:"6 tpfadeUp",
        img: cirimg_6,
        delay: ".2s",
    },
    {
        id: 7, 
        cls:"7 tpfadeIn",
        img: cirimg_7,
        delay: ".1s",
    },
]

// rank_content will be handled by translations in the component
// All content now handled by translations
const RankArea = () => {
    const { t } = useTranslation(['common', 'home']);

    // rank_data - Professional Cleaning Service Features
    const rank_data = [
        {
            id: 1,
            clg_1: "active z-index",
            clg_2: "tp-rank__cup",
            top_img: top_img_1,
            count: 1,
            icon_class: "fas fa-leaf",
            service_title: t('features.ecoFriendly', { ns: 'home' }),
            service_desc: t('features.ecoFriendlyOnly', { ns: 'home' }),
        },
        {
            id: 2,
            clg_1: "",
            count: 2,
            icon_class: "fas fa-users",
            service_title: t('features.professionalTeam', { ns: 'home' }),
            service_desc: t('features.licensedInsured', { ns: 'home' }),
        },
        {
            id: 3,
            clg_1: "z-index",
            count: 3,
            icon_class: "fas fa-medal",
            service_title: t('features.satisfaction', { ns: 'home' }),
            service_desc: t('features.satisfactionGuaranteed', { ns: 'home' }),
        },
        {
            id: 4,
            clg_1: "",
            count: 4,
            icon_class: "fas fa-clock",
            service_title: t('features.flexibleScheduling', { ns: 'home' }),
            service_desc: t('features.emergencyService', { ns: 'home' }),
        },
    ];

    return (
        <>
            <div className="tp-rank__area pb-200">
               <div className="container">
                  <div className="row">
                     <div className="col-xl-5 col-lg-5 order-1 order-lg-1">
                        <div className="tp-rank__section-box pb-25 wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".3s">
                           <h4 className="tp-section-subtitle">{t('rank.whyChooseUs', { ns: 'home' })}</h4>
                           <h3 className="tp-section-title" dangerouslySetInnerHTML={{__html: t('rank.getSpotlessResults', { ns: 'home' })}}></h3>
                        </div>
                        <div className="tp-rank__btn wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".5s">
                           <Link className="tp-btn tp-btn-hover alt-color-black" href="/about">
                              <span>{t('buttons.learnMore')}</span>
                              <b></b>
                           </Link>
                        </div>
                     </div>
                     <div className="col-xl-7 col-lg-7 order-0 order-lg-2">
                        <div className="tp-rank__wrapper p-relative">

                            {circle_shape.map((item, i )  => 
                                <div key={i} 
                                className={`tp-rank__circle-shape-${item.cls} d-none d-sm-block wow`} 
                                data-wow-duration=".9s" 
                                data-wow-delay={item.delay}>
                                    <Image src={item.img} alt="circle" />
                                </div>
                                
                             )}

                           <div className="tp-rank__bg-shape">
                              <Image className="wow tpfadeRight"
                              data-wow-duration=".9s"
                              data-wow-delay="1.2s"
                              src={bg_right_img} alt="Professional cleaning services background" />
                           </div>


                           <div className="tp-rank__rank-card wow tpfadeRight" data-wow-duration=".9s" data-wow-delay=".7s">

                            {rank_data.map((item, i)  => 
                                <div key={i} className={`tp-rank__item p-relative ${item.clg_1}`}>
                                {item.top_img && 
                                <div className="tp-rank__cup">
                                <span><Image src={item.top_img} alt="" /></span>
                                </div>}

                                <div className="tp-rank__number d-flex align-items-center justify-content-center">
                                <i>#</i>
                                <span>{item.count}</span>
                                </div>
                                <div className="tp-rank__company">
                                <span><i className={item.icon_class}></i></span>
                                </div>
                                <div className="tp-rank__company-info">
                                <span className="domain-text">{item.service_title}</span>
                                <span>{item.service_desc}</span>
                                </div>
                            </div>
                                )
                            }
                           </div>

                        </div>
                     </div>
                  </div>
               </div>
            </div>
        </>
    );
};

export default RankArea;
