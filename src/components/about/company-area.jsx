import VideoPopup from '@/src/modals/video-popup';
import React,{useState, useContext} from 'react';
import { useTranslation } from 'next-i18next';
import { AppContext } from '@/src/context/ContextProvider';

const CompanyArea = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const { t } = useTranslation(['about']);
  const {handleMouseEnter, handleMouseLeave} = useContext(AppContext);

    return (
        <>
            <div className="ab-company-area pt-105 pb-100">
               <div className="container">
                  <div className="row ab-company-section-space">
                     <div className="col-xl-6">
                        <div className="ab-company-section-box">
                           <h4 className="inner-section-subtitle">{t('companyArea.subtitle')}</h4>
                           <h3 className="tp-section-title">{t('companyArea.title')}</h3>
                        </div>
                     </div>
                     <div className="col-xl-6 wow tpfadeRight" data-wow-duration=".9s" data-wow-delay=".5s">
                        <div className="ab-company-right">
                           <div className="ab-company-section-text">
                              <p className="pb-10">{t('companyArea.description1')}</p>
                              <p className="pb-10">{t('companyArea.description2')}</p>
                              <p><span>{t('companyArea.description3')}</span></p>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="row align-items-center">
                     <div className="col-xl-4">
                        <div className="ab-company-video">
                           <a className="popup-video tp-cursor-point-area"
                           onClick={() => setIsVideoOpen(true)}
                           onMouseEnter={() => handleMouseEnter(true)}
                           onMouseLeave={() => handleMouseLeave(false)}
                           ><i className="fas fa-play"></i></a>
                           <span>{t('companyArea.videoText')}</span>
                        </div>
                     </div>
                     <div className="col-xl-8">
                        <div className="row">

                           <div className="col-md-4 col-sm-4 mb-40">
                              <div className="ab-company-fun-fact-wrap d-flex justify-content-start">
                                 <div className="ab-company-fun-fact">
                                    <span>{t('companyArea.stats.trustedBy')}</span>
                                    <h4>2,500<em>+</em></h4>
                                    <p>{t('companyArea.stats.happyClients')}</p>
                                 </div>
                              </div>
                           </div>

                           <div className="col-md-4 col-sm-4 mb-40">
                              <div className="ab-company-fun-fact-wrap d-flex justify-content-md-center justify-content-left">
                                 <div className="ab-company-fun-fact">
                                    <span>{t('companyArea.stats.experience')}</span>
                                    <h4>15<em>+</em></h4>
                                    <p>{t('companyArea.stats.yearsOfService')}</p>
                                 </div>
                              </div>
                           </div>
                           <div className="col-md-4 col-sm-4 mb-40">
                              <div className="ab-company-fun-fact-wrap ab-company-border-none d-flex justify-content-md-center justify-content-left">
                                 <div className="ab-company-fun-fact">
                                    <span>{t('companyArea.stats.coverage')}</span>
                                    <h4>50<em>+</em></h4>
                                    <p>{t('companyArea.stats.citiesServed')}</p>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

             {/* video modal start */}
      <VideoPopup
        isVideoOpen={isVideoOpen}
        setIsVideoOpen={setIsVideoOpen}
        videoId={"EW4ZYb3mCZk"}
      />
      {/* video modal end */}
        </>
    );
};

export default CompanyArea;
