import Image from 'next/image';
import {gsap} from 'gsap';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import Offcanvus from '@/src/common/offcanvus';


import React, {useState, useRef, useEffect, useLayoutEffect} from 'react';
import NavMenu from './nav-menu';
import useSticky from '@/src/hooks/use-sticky';




// Using brand logo from provided URL
const logoUrl = "https://cdn.builder.io/api/v1/image/assets%2Ff434f37cc67e4128b78dfbdb895d532c%2F849b8fca5c7a4b5d96368796c8d2c9cc?format=webp&width=800";



const Header = () => {
      const { t } = useTranslation(['common', 'home']);
      const {sticky}  =  useSticky()
      const router = useRouter()

      const [sidebarOpen, setSidebarOpen] = useState(false)

      // Hide special offer on contact, about, project (gallery), service, and all cleaning service pages
      const hideSpecialOffer = router.pathname === '/contact' ||
                              router.pathname === '/about' ||
                              router.pathname === '/project' ||
                              router.pathname === '/service' ||
                              router.pathname === '/service-details' ||
                              router.pathname === '/house-cleaning' ||
                              router.pathname === '/carpet-cleaning' ||
                              router.pathname === '/window-cleaning' ||
                              router.pathname === '/deep-cleaning' ||
                              router.pathname === '/office-cleaning'

      // gsa use
      let g_timline = new gsap.timeline();
      let header_top_animation = useRef(null)

      useEffect(() => {
         gsap.from(header_top_animation,  {
            opacity: 0,
		      y: '20px',
            delay: 1.05
         });
         gsap.to(header_top_animation, {
            opacity:1,
            y: '0px',
            delay: 1.05
        })
      },[])
 

    return (
        <>
         <header className="header-bottom__transparent z-index-99999 tp-header-height">
               {!hideSpecialOffer && (
                  <div className="header-top__area header-top__space z-index-3 d-none d-md-block tp-header-top-animation" ref={el => header_top_animation = el} >
                     <div className="container">
                        <div className="row align-items-start">
                           <div className="col-6">
                              <div className="header-top__link">
                                 <span>{t('hero.specialOffer', { ns: 'home' })} <i>{t('hero.firstCleaning', { ns: 'home' })}</i></span>
                                 <Link href="/contact" className="header-offer-btn">
                                    <svg width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M1.40918 9L5.591 5L1.40918 1" stroke="white" strokeWidth="1.5"
                                          strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                 </Link>
                              </div>
                           </div>
                           <div className="col-6">
                              <div className="header-top__support text-end">
                                 <span>{t('hero.bookNow', { ns: 'home' })}: <Link href="tel:+31657395237">+31 6 57 39 52 37</Link></span>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               )}

               <div id="header-sticky" className={`header-bottom__area header-mob-space header-bottom__area-2 header-bottom__transparent z-index-99999 ${sticky && "header-sticky"}`}>
                  <div className="container">
                     <div className="row align-items-center">
                        <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-4 col-6">
                           <div className="header-bottom__logo">
                              <Link href="/"><Image  src={logoUrl} alt="OMG Cleaning Services" width={180} height={90} className="brand-logo" priority /></Link>
                           </div>
                        </div>
                        <div className="col-xxl-6 col-xl-5 col-lg-5 d-none d-lg-block">
                           <div className="header-bottom__main-menu">
                              <nav id="mobile-menu">
                              <NavMenu /> 
                              </nav>
                           </div>
                        </div>
                        <div className="col-xxl-4 col-xl-5 col-lg-5 col-md-8 col-6">
                           <div className="header-bottom__right d-flex align-items-center justify-content-end">
                              <div className="header-bottom__btn d-flex align-items-center gap-3">
                                 <Link className="tp-btn-white alt-color-black tp-btn-hover d-none d-md-inline-block" href="/contact">
                                    <span className="white-text">{t('buttons.getQuote')}</span>
                                    <b></b>
                                 </Link>
                                 <a className="header-bottom__bar tp-menu-bar d-lg-none" onClick={() => setSidebarOpen(true)}><i className="fal fa-bars"></i></a>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
         </header>
         <Offcanvus sidebarOpen={sidebarOpen}  setSidebarOpen={setSidebarOpen} />
        </>
    );
};

export default Header;
