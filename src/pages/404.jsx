import Link from "next/link";
import React from "react";
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import SEO from "../common/seo";
import Footer from "../layout/footers/footer";
import HeaderFour from "../layout/headers/header-4";

// error shape import here 
import error_shape_1 from "../../public/assets/img/login/error-shape.png";
import error_shape_2 from "../../public/assets/img/login/text-404.png";
import Image from "next/image";


const index = () => {
  const { t } = useTranslation('common');
  return (
    <>
    <SEO pageTitle={t('errorPage.title')} />
      <HeaderFour style_error={true} />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <div className="tp-error-area tp-error-ptb p-relative">
              <div className="tp-error-left-shape">
                <Image src={error_shape_1} alt="theme-pure" />
              </div>
              <div className="container">
                <div className="row">
                  <div className="col-xl-12">
                    <div className="tp-error-content-box text-center mb-40">
                      <Image src={error_shape_2} alt="theme-pure"
                      />
                    </div>
                    <div className="tp-error-text-box text-center">
                      <h4 className="error-title-sm">{t('errorPage.title')}</h4>
                      <p>{t('errorPage.description')}</p>
                      <Link
                        className="tp-btn-inner tp-btn-hover alt-color-black"
                        href="/"
                      >
                        <span>{t('buttons.backToHome')}</span>
                        <b></b>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
};

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
});

export default index;
