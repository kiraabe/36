import Image from 'next/image';
import React from 'react';
import { useTranslation } from 'next-i18next';

// brand img data using external URLs
const brand_img = [
    {
        img: "https://cdn.builder.io/api/v1/image/assets%2F656edaa28b0e402caee403cb5278a1b7%2Fcdc3dd0f498f44ae8215c7a5ba82b3ef?format=webp&width=800",
        alt: "Hannekes BOOM",
        delay: ".2s"
    },
    {
        img: "https://cdn.builder.io/api/v1/image/assets%2F656edaa28b0e402caee403cb5278a1b7%2F6d02ed0678454bd18c465451c422d7af?format=webp&width=800",
        alt: "Burger Fabriek",
        delay: ".4s"
    },
    {
        img: "https://cdn.builder.io/api/v1/image/assets%2F656edaa28b0e402caee403cb5278a1b7%2F5c42339bea164d1dbd17bbf40665bab6?format=webp&width=800",
        alt: "Dunkin Donuts",
        delay: ".6s"
    },
];

const Brand = () => {
    const { t } = useTranslation(['about']);
    return (
      <>
        <div className="ab-brand-area">
          <div className="container">
            <div className="ab-brand-border-bottom pb-90">
              <div className="row">
                <div className="col-12">
                  <div className="ab-brand-section-box text-center mb-50">
                    <h4 className="ab-brand-title" suppressHydrationWarning>{t('brand.title')}</h4>
                    <p suppressHydrationWarning>{t('brand.description')}</p>
                  </div>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-xl-10">
                  <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 justify-content-center">
                    {brand_img.map((item, i) => (
                      <div
                        key={i}
                        className="col wow tpfadeUp"
                        data-wow-duration=".9s"
                        data-wow-delay={item.delay}
                      >
                        <div className="ab-brand-item mb-25">
                          <Image src={item.img} alt={item.alt} width={150} height={100} style={{ objectFit: 'contain' }} />
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

export default Brand;
