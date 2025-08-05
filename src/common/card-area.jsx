import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';

// Professional cleaning service image
const main_cleaning_img = "https://cdn.builder.io/api/v1/image/assets%2Fced2e37579f048edbf1bdf784fead6da%2Fc53d4149b4ae430795b250377b388d5e?format=webp&width=800";


// Card content will be handled by translations



const CardArea = ({style_service}) => {
    const { t } = useTranslation(['common', 'about']);
    return (
        <>
        <div className="tp-card-area tp-card-space pt-175 pb-185">
               <div className="container">
                  <div className="row">
                     <div className="col-xl-6 col-lg-6 wow tpfadeLeft" data-wow-duration=".9s" data-wow-delay=".5s">
                        <div className="tp-card-thumb-wrapper">
                            <Image
                                src={main_cleaning_img}
                                alt="Professional OMG cleaning service team"
                                width={600}
                                height={400}
                                className="w-100 rounded"
                                style={{objectFit: "cover"}}
                            />
                        </div>
                     </div>
                     <div className="col-xl-6 col-lg-6 wow tpfadeRight" data-wow-duration=".9s" data-wow-delay=".7s">
                        <div className="tp-card-title-box">
                           <h3 className="tp-section-title-3 pb-15" dangerouslySetInnerHTML={{__html: t('page.manageServices', { ns: 'about' })}}></h3>
                           <p className="" dangerouslySetInnerHTML={{__html: t('page.excellenceConvenience', { ns: 'about' })}}></p>
                              <Link className={`${style_service ? "tp-btn-inner" : "tp-btn-blue-lg"} tp-btn-hover alt-color-black`}
                                 href="/contact">
                                 <span>{t('page.bookCleaningService', { ns: 'about' })}</span> 
                                 <b></b>
                              </Link>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            
        </>
    );
};

export default CardArea;
