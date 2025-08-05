import React from 'react';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';


// Professional cleaning service images
const sales_img_1 = "https://cdn.builder.io/api/v1/image/assets%2Fced2e37579f048edbf1bdf784fead6da%2Fc53d4149b4ae430795b250377b388d5e?format=webp&width=800";
const sales_img_2 = "https://cdn.builder.io/api/v1/image/assets%2Fced2e37579f048edbf1bdf784fead6da%2Fa7c2a065f78d47ac8d3b25bebb054d0a?format=webp&width=800";
const sales_img_3 = "https://cdn.builder.io/api/v1/image/assets%2Fced2e37579f048edbf1bdf784fead6da%2Fc02b64851b544066b25285f79eaf26bc?format=webp&width=800";

const sales_content = {

    sales_img: [
        {
            id: 1,
            cls: "main-thumb",
            img: sales_img_1,
        },
        {
            id: 2,
            cls: "sub-img-1",
            img: sales_img_2,
        },
        {
            id: 3,
            cls: "sub-img-2 d-none d-sm-block",
            img: sales_img_3,
        },
    ],


}
const {sales_img}  = sales_content

const SalesArea = ({style_service}) => {
    const { t } = useTranslation(['common', 'about']);

    const sales_feature = [
        {
            id: 1,
            color: "yellow-1",
            list: t('features.ecoFriendlyOnly')
        },
        {
            id: 2,
            color: "purple-2",
            list: t('features.satisfactionGuaranteed')
        },
        {
            id: 3,
            color: "green-3",
            list: t('features.licensedInsured')
        },
    ];

    return (
        <>
            <div className="tp-sales-area tp-sales-space">
               <div className="container">
                  <div className="row align-items-center">
                     <div className="col-xl-6 col-lg-6 order-1 order-md-1 wow tpfadeLeft" data-wow-duration=".9s" data-wow-delay=".5s">
                        <div className="tp-sales-section-box pb-20">
                           <h3 className="tp-section-title-3 pb-15 ">{t('company.heroTitle')}</h3>
                           <p className="tp-title-anim">{t('page.excellenceConvenience', { ns: 'about' })}</p>
                        </div>
                        <div className="tp-sales-feature">
                           <ul>
                            {sales_feature.map((item, i)  => 
                                <li key={i} className={item.color}><span><i className="far fa-check"></i> <em>{item.list}</em></span></li>
                                )}
                            </ul>
                        </div>
                     </div>
                     <div className="col-xl-6 col-lg-6 order-0 order-md-2 wow tpfadeRight" data-wow-duration=".9s" data-wow-delay=".7s">
                        <div className="tp-sales-img-wrapper p-relative text-end">
                            {sales_img.map((item, i ) => 
                                <div key={i} className={`tp-sales-${item.cls}`}>
                                    <Image src={item.img} alt="Professional OMG cleaning team at work" width={400} height={300} />
                                </div>
                             )} 

                        </div>
                     </div>
                  </div>
               </div>
            </div>
        </>
    );
};

export default SalesArea;
