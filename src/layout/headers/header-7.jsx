import Offcanvus from '@/src/common/offcanvus';
import Link from 'next/link';
import React,{useState} from 'react';
import Image from 'next/image';
import NavMenu from './nav-menu';
// logo 
const logo_white = "https://cdn.builder.io/api/v1/image/assets%2F2eec0e2ff94f4d308c45d6069a553596%2F564d310010154b7aa52a90b0b5354628?format=webp&width=800";


const HeaderSeven = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false)

    return (
        <>
            <header>
                <div className="header-signin-area header-bottom__transparent header-signin-ptb z-index-5">
                    <div className="container-fluid">
                        <div className="row align-items-center">
                        <div className="col-6">
                            <div className="header-signin-logo">
                                <Link href="/"><Image src={logo_white} alt="" width={150} height={40} /></Link> 
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="header-signin-bar text-end tp-menu-bar">
                                <button onClick={() => setSidebarOpen(true)}>
                                    <i>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    </i>
                                </button>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="header-bottom__area header-bottom__transparent header-bottom__bdr z-index-5 d-none">
                    <div className="container">
                        <div className="row g-0 align-items-center">
                        <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-4 col-6">
                            <div className="header-bottom__logo">
                            <Link href="/"><Image src={logo_white} alt="" /></Link>  
                            </div>
                        </div>
                        <div className="col-xxl-7 col-xl-7 col-lg-7 d-none d-lg-block">
                            <div className="header-bottom__main-menu header-bottom__main-menu-4 header-bottom__main-menu-inner">
                                <nav id="mobile-menu-2">
                                    <NavMenu /> 
                                </nav>
                            </div>
                        </div>
                        <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-8 col-6">
                            <div className="header-bottom__right d-flex align-items-center justify-content-end">
                                <div className="header-bottom__action header-bottom__action-4">
                                    <Link className="d-none d-lg-inline-block header-bottom__action-2 border-none" href="/register">
                                    <span>Log In</span>
                                    </Link>
                                </div>
                                <div className="header-bottom__btn d-flex align-items-center">
                                    <Link className="tp-btn-yellow d-none d-md-inline-block inner-color" href="#">Get in Touch</Link>
                                    <a className="header-bottom__bar tp-menu-bar d-lg-none"><i className="fal fa-bars"></i></a>
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

export default HeaderSeven;
