import useSticky from '@/src/hooks/use-sticky';
import Offcanvus from '@/src/common/offcanvus';
import Link from 'next/link';
import Image from 'next/image';
import React, { useState } from 'react';
import NavMenu from './nav-menu';


const custom_logo = "https://cdn.builder.io/api/v1/image/assets%2F2eec0e2ff94f4d308c45d6069a553596%2F564d310010154b7aa52a90b0b5354628?format=webp&width=800";


const HeaderSix = ({ style_2 = false }) => {
   const { sticky } = useSticky()
   const [sidebarOpen, setSidebarOpen] = useState(false)

   return (
      <>
         <header>
            <div id="header-sticky" className={`header-bottom__area header-sticky-bg-2 header-bottom__transparent header-bottom__bdr z-index-5 ${style_2 ? 'inner-header-2' : ''} ${sticky ? "header-sticky" : ''}`}>
               <div className="container">
                  <div className="row g-0 align-items-center">
                     <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-4 col-6">
                        <div className="header-bottom__logo">
                           <Link href="/">
                           <Image src={custom_logo} alt="theme-pure" width={150} height={40} />
                        </Link>
                        </div>
                     </div>
                     <div className="col-xxl-7 col-xl-7 col-lg-7 d-none d-lg-block">
                        <div className="header-bottom__main-menu header-bottom__main-menu-4 header-bottom__main-menu-inner">
                           <nav id="mobile-menu">
                              <NavMenu />
                           </nav>
                        </div>
                     </div>
                     <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-8 col-6">
                        <div className="header-bottom__right d-flex align-items-center justify-content-end">
                           <div className="header-bottom__btn d-flex align-items-center">
                              <Link className={`${style_2 ? 'tp-btn-inner alt-color-orange' : 'tp-btn-white alt-color-black'} tp-btn-hover d-none d-md-inline-block`} href="/contact">
                                 <span className="white-text">Get a Quote</span>
                                 <b></b>
                              </Link>
                              <a className="header-bottom__bar tp-menu-bar d-lg-none" onClick={() => setSidebarOpen(true)}>
                                 <i className="fal fa-bars"></i>
                              </a>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </header>
         <Offcanvus sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      </>
   );
};

export default HeaderSix;
