import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';

import MobileMenus from '../layout/headers/mobile-menus';

 
// images import 
// Using brand logo from provided URL
const logoUrl = "https://cdn.builder.io/api/v1/image/assets%2F502af3714cbb44bab6c5decbdffe176f%2F0d39a8d1597a47378b9a72b787aabfac?format=webp&width=1200&quality=95";
import canvus_img_1 from "../../public/assets/img/project/project-inner-4.jpg"
import canvus_img_2 from "../../public/assets/img/project/project-inner-5.jpg";
import canvus_img_3 from "../../public/assets/img/project/project-inner-6.jpg";
import canvus_img_4 from "../../public/assets/img/project/project-inner-7.jpg";

const Offcanvus = ({sidebarOpen, setSidebarOpen}) => {
    const { t } = useTranslation('common');


    return (
        <>
            <div className="tpoffcanvas-area">
                <div className={`tpoffcanvas ${sidebarOpen && "opened"}`}>
                    <div className="tpoffcanvas__close-btn">
                    <button className="close-btn" onClick={() => setSidebarOpen(false)}><i className="fal fa-times"></i></button>
                    </div>
                    <div className="tpoffcanvas__logo text-center">
                    <Link href="/" onClick={() => setSidebarOpen(false)}>
                        <Image src={logoUrl} alt="OMG Cleaning Services" width={200} height={100} className="brand-logo-mobile" priority />
                    </Link>
                    </div>
                    <div className="mobile-menu mean-container">
                        <MobileMenus />
                    </div>

                    <div className="tpoffcanvas__instagram text-center">
                    <div className="tpoffcanvas__instagram-title">
                        <h4>Instagram</h4>
                    </div>  
                    <button type="button" className="instagram-item"><Image src={canvus_img_1}  alt="theme-pure" /></button>
                    <button type="button" className="instagram-item"><Image src={canvus_img_2}  alt="theme-pure" /></button>
                    <button type="button" className="instagram-item"><Image src={canvus_img_3}  alt="theme-pure" /></button>
                    <button type="button" className="instagram-item"><Image src={canvus_img_4}  alt="theme-pure" /></button>
                    </div>
                    <div className="tpoffcanvas__info text-center">
                    <h4 className="offcanva-title">Address</h4>
                    <Link href="https://www.google.com/maps/place/Warmoesstraat+149,+Amsterdam" target="_blank">
                        Warmoesstraat 149, <br />
                        Amsterdam, The Netherlands
                    </Link>
                    </div>

                    <div className="tpoffcanvas__social">
                    <div className="social-icon text-center">
                        <Link href="https://twitter.com" target="_blank"><i className="fab fa-twitter"></i></Link>
                        <Link href="https://instagram.com" target="_blank"><i className="fab fa-instagram"></i></Link>
                        <Link href="https://facebook.com" target="_blank"><i className="fab fa-facebook-square"></i></Link>
                        <Link href="https://dribbble.com" target="_blank"><i className="fab fa-dribbble"></i></Link>
                    </div>
                    </div>
                </div>
            </div>
            <div className={`body-overlay ${sidebarOpen &&  "apply"}`} onClick={() => setSidebarOpen(false)}></div>


        </>
    );
};

export default Offcanvus;
