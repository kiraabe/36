import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { useTranslation } from 'next-i18next';

// images import
import about_img_1 from "../../public/assets/img/about/about-bg-shape.png"

// Professional cleaning service illustrations - transparent background
const cleaning_professional_1 = "https://cdn.builder.io/api/v1/image/assets%2F970ed6b5418f4c32a5ccbe9dcaddc28e%2F1b6c80b29ca0462784c140dd72390f52?format=webp&width=800";

const cleaning_professional_3 = "https://cdn.builder.io/api/v1/image/assets%2F970ed6b5418f4c32a5ccbe9dcaddc28e%2F54c109868fea4415b712ae7876d33e27?format=webp&width=800";

// about data
const about_data =[
    {
        id: 1,
        cls: "bg-shape",
        img: about_img_1
    },
    {
        id: 2,
        cls: "main-img z-index",
        img: cleaning_professional_1
    },

    {
        id: 4,
        cls: "sub-img-2 d-none d-sm-block",
        img: cleaning_professional_3
    },
]

// about content
const about_content = {
    title: "OVER 5K+ HAPPY CUSTOMERS",
    sub_title: "We Provide Professional Cleaning Solutions", 
    des: <>Trusted cleaning professionals dedicated to keeping <br />
    your space spotless and healthy!</>,

    about_list: [
        <>Eco-friendly cleaning products.</>,
        <>Licensed and insured professionals.</>,
        <>100% satisfaction guarantee.</>,
    ],
    btn_text: "Learn More",

}
const {title, sub_title, des, about_list, btn_text}  = about_content


const AboutArea = () => {
    const { t } = useTranslation(['common', 'home']);
    return (
        <>
            <div className="tp-about__area tp-about__pt-pb pt-100 pb-160">
               <div className="container">
                  <div className="row align-items-center">
                     <div className="col-xl-6 col-lg-6 wow tpfadeLeft" data-wow-duration=".9s" data-wow-delay=".2s">
                        <div className="tp-about__img-wrapper text-center text-lg-end p-relative">
                            {about_data.map((item, i)  =>
                                <div key={i} className={`tp-about__${item.cls}`}>
                                    <Image
                                        src={item.img}
                                        alt={
                                            item.id === 2 ? "Professional cleaner with mop and cleaning supplies providing quality service" :
                                            item.id === 3 ? "Cleaning professional using vacuum cleaner in modern home" :
                                            item.id === 4 ? "Happy cleaning professional with eco-friendly cleaning products" :
                                            "Professional cleaning service background"
                                        }
                                        width={item.id === 1 ? 400 : 300}
                                        height={item.id === 1 ? 400 : 300}
                                        style={{width: "auto", height: "auto"}}
                                        priority={item.id === 2}
                                    />
                                </div>
                            )}
                        </div>
                     </div>
                     <div className="col-xl-6 col-lg-6 wow tpfadeRight" data-wow-duration=".9s" data-wow-delay=".6s">
                        <div className="tp-about__right">
                           <div className="tp-about__section-box">
                              <h4 className="tp-section-subtitle">{t('about.happyClients', { ns: 'home' })}</h4>
                              <h3 className="tp-section-title mb-15">{t('about.provideProfessionalCleaning', { ns: 'home' })}</h3>
                              <p>{t('about.trustedCleaningProfessionals', { ns: 'home' })}</p>
                           </div>
                           <div className="tp-about__list">
                              <ul>
                                <li><i className="fal fa-check"></i>{t('features.ecoFriendlyOnly', { ns: 'home' })}</li>
                                <li><i className="fal fa-check"></i>{t('features.licensedInsured', { ns: 'home' })}</li>
                                <li><i className="fal fa-check"></i>{t('features.satisfactionGuaranteed', { ns: 'home' })}</li>
                              </ul>
                           </div>
                           <div className="tp-about__btn">
                              <Link className="tp-btn tp-btn-hover alt-color-black" href="/about">
                                 <span>{t('buttons.learnMore')}</span>
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

export default AboutArea;
