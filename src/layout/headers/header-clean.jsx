import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import NavMenu from "./nav-menu";
import Offcanvus from "@/src/common/offcanvus";

const logoUrl = "https://cdn.builder.io/api/v1/image/assets%2F502af3714cbb44bab6c5decbdffe176f%2F0d39a8d1597a47378b9a72b787aabfac?format=webp&width=800";

const HeaderClean = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <header className="clean-header">
        <div className="clean-header__container">
          <div className="container-fluid px-4">
            <div className="row align-items-center">
              {/* Logo */}
              <div className="col-lg-3 col-md-4 col-6">
                <div className="clean-header__logo">
                  <Link href="/">
                    <Image 
                      src={logoUrl} 
                      alt="OMG Cleaning Company" 
                      width={160} 
                      height={60} 
                      className="brand-logo" 
                      priority 
                    />
                  </Link>
                </div>
              </div>

              {/* Navigation Menu */}
              <div className="col-lg-6 d-none d-lg-block">
                <div className="clean-header__nav">
                  <nav>
                    <NavMenu />
                  </nav>
                </div>
              </div>

              {/* CTA Button */}
              <div className="col-lg-3 col-md-8 col-6">
                <div className="clean-header__cta d-flex align-items-center justify-content-end">
                  <Link className="clean-header__quote-btn" href="/contact">
                    GET A QUOTE
                  </Link>
                  <button 
                    className="clean-header__mobile-menu d-lg-none" 
                    onClick={() => setSidebarOpen(true)}
                  >
                    <span></span>
                    <span></span>
                    <span></span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar */}
      <Offcanvus 
        sidebarOpen={sidebarOpen} 
        setSidebarOpen={setSidebarOpen} 
      />
    </>
  );
};

export default HeaderClean;
