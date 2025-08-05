import price_data_home_one from "@/src/data/price-data-1";
import { useTranslatablePriceData } from "@/src/hooks/useTranslatablePriceData";
import PriceDotLine from "@/src/svg/price-dot-line";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useTranslation } from "next-i18next";


const price_content = {
    title: "Affordable Cleaning Packages & Service Plans",
    sub_title: "Choose a cleaning plan that fits your budget and needs",
    save_btn: <> SAVE <br /> 35%</>
}
const {title, sub_title, save_btn}  = price_content


const PriceArea = () => {
  const { t } = useTranslation(['common', 'home']);
  const priceData = useTranslatablePriceData();
  return (
    <>
      <div className="tp-price__area tp-price__pl-pr p-relative pt-110 pb-80">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7 wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".3s" >
              <div className="tp-price__section-box text-center mb-35">
                <h2 className="tp-section-title">{t('pricing.title', { ns: 'home' })}</h2>
                <p>{t('pricing.subtitle', { ns: 'home' })}</p>
              </div>
            </div>
          </div>

          <div
            className="row wow tpfadeUp"
            data-wow-duration=".9s"
            data-wow-delay=".5s"
          >
            <div className="col-12">
              <div className="tp-price__btn-box p-relative mb-50 d-flex justify-content-center">
                <div className="tp-price-offer-badge-wrap d-none d-sm-block">
                  <div className="price-shape-line">
                    <PriceDotLine />
                  </div>
                  <div className="price-offer-badge">
                    <span dangerouslySetInnerHTML={{__html: t('pricing.saveBadge', { ns: 'home' })}}></span>
                  </div>
                </div>
                <nav>
                  <div
                    className="nav nav-tab tp-price__btn-bg"
                    id="nav-tab"
                    role="tablist"
                  >
                    <button
                      className="nav-link active monthly" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home"
                      type="button" role="tab" aria-controls="nav-home" aria-selected="true" tabIndex={-1}>
                      {t('pricing.monthly', { ns: 'home' })}
                    </button>

                    <button
                      className="nav-link yearly" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile"
                      type="button" role="tab" aria-controls="nav-profile" aria-selected="false" tabIndex={-1}>
                      {t('pricing.yearly', { ns: 'home' })}
                    </button>
                    <span className="test"></span>
                  </div>
                </nav>
              </div>
            </div>
          </div>


          <div className="price-tab-content">
            <div className="tab-content" id="nav-tabContent">
              
              <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" tabIndex="0" >
                <div className="row"> 
                  {priceData.slice(0,3).map((item, i) => (
                  <div key={i} className="col-xl-4 col-lg-4 col-md-6 mb-30">
                    <div className={`tp-price__item ${item.cls} p-relative`}>
                      <div className="tp-price__icon">
                        <Image src={item.img} alt="theme-pure" />
                      </div>
                      <div className="tp-price__title-box">
                        <h4 className="tp-price__title-sm">{item.title}</h4>
                        <p>{item.desctiption}</p>
                      </div>
                      <div className="tp-price__feature">
                        <ul>
                          {item.price_feature?.map((list, i) => (
                            <li key={i} className={list.cls}>
                              <span>{list.icon}</span>
                              {list.list}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="tp-price__btn tp-btn-price">
                        <span>{item.pric}</span>
                        <Link href="/price">
                          {t('buttons.bookNow')} <i className="fal fa-arrow-right"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
                </div>
              </div>

              <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" tabIndex="0">
                <div className="row">
                  {priceData.slice(3, 6).map((item, i) => (
                  <div key={i} className="col-xl-4 col-lg-4 col-md-6 mb-30">
                    <div className={`tp-price__item ${item.cls} p-relative`}>
                      <div className="tp-price__icon">
                        <Image src={item.img} alt="theme-pure" />
                      </div>
                      <div className="tp-price__title-box">
                        <h4 className="tp-price__title-sm">{item.title}</h4>
                        <p>{item.desctiption}</p>
                      </div>
                      <div className="tp-price__feature">
                        <ul>
                          {item.price_feature?.map((list, i) => (
                            <li key={i} className={list.cls}>
                              <span>{list.icon}</span>
                              {list.list}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="tp-price__btn tp-btn-price">
                        <span>{item.pric}</span>
                        <Link href="/price">
                          {t('buttons.bookNow')} <i className="fal fa-arrow-right"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PriceArea;
