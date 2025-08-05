import React from 'react';
import { useTranslation } from 'next-i18next';
import shape_1 from "../../../public/assets/img/breadcrumb/breadcrumb-shape-1.png";
import shape_2 from "../../../public/assets/img/breadcrumb/breadcrumb-shape-2.png";
import Image from 'next/image';

const BreadcrumbThree = () => {
    const { t } = useTranslation(['common', 'portfolio']);
    return (
        <>
            <div className="breadcrumb__area breadcrumb-height-3 p-relative blue-bg-2 fix">
               <div className="breadcrumb__shape-1">
                  <Image src={shape_1} alt="theme-pure" />
               </div>
               <div className="breadcrumb__shape-2">
                  <Image src={shape_2} alt="theme-pure" />
               </div>
               <div className="container">
                  <div className="breadcrumb__content-wrap">
                     <div className="row justify-content-center">
                        <div className="col-xl-12">
                           <div className="breadcrumb__content text-center z-index-3 mb-60">
                              <h3 className="breadcrumb__title">{t('breadcrumbs.joinTeam', { ns: 'portfolio' })}</h3>
                              <div className="breadcrumb__text">
                                 <p>{t('breadcrumbs.careerDescription', { ns: 'portfolio' })}</p>
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

export default BreadcrumbThree;
