import { CopyRight, SocialLinksTwo } from '@/src/common/social-links';
import EmailIcon from '@/src/svg/email';
import EmailThree from '@/src/svg/email-3';
import LocationTwo from '@/src/svg/location-2';
import PhoneThree from '@/src/svg/phone-3';
import RightArrow from '@/src/svg/right-arrow';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

import footer_shape from "../../../public/assets/img/footer/footer-bottom-shape-4-1.png";
const footer_logo = "https://cdn.builder.io/api/v1/image/assets%2F502af3714cbb44bab6c5decbdffe176f%2F0d39a8d1597a47378b9a72b787aabfac?format=webp&width=800";


const footer_content = {
   sub_title: "SUBSCRIBE TO OUR NEWSLETTER",
   policy_text: <>By subscribing, you accepted the our <a href="#">Policy</a></>,
   phone: "+31 6 57 39 52 37",
   email: "Info@omgcleaningcompany.nl",
   location: <>Warmoesstraat 149, <br />Amsterdam, The Netherlands</>,

   footer_lisks: [
      { name: "Damo page", link: "#" },
      { name: "FAQ", link: "/faq" },
      { name: "About", link: "/about" },
      { name: "Pricing Plan", link: "/price" },
      { name: "Integrations", link: "/integrations" },
      { name: "Blog", link: "/blog" },
      { name: "Contact", link: "/contact" },
      { name: "Tools & Integrations", link: "/integrations" },
      { name: "Security", link: "#" },
      { name: "Customers", link: "#" },
      { name: "Career", link: "#" },

   ],
}
const {sub_title, policy_text, phone, email, location, footer_lisks } = footer_content



const FooterFour = () => {
   return (
      <>
         <footer>
            <div className="tp-footer__pl-pr blue-bg z-index fix">
               <div className="tp-footer__area tp-footer__border-bottom-4 fix">
                  <div className="tp-footer-bottom-shape">
                     <Image src={footer_shape} alt="theme-pure" />
                  </div>
                  <div className="container">
                     <div className="row">
                        <div className="col-xl-4 col-lg-4 col-md-6 pb-45 wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".3s">
                           <div className="tp-footer__widget footer-widget-4 footer-col-4-1">
                              <div className="tp-footer__logo mb-25">
                                 <Link href="/">
                                    <Image src={footer_logo} alt="theme-pure" width={150} height={40} />
                                 </Link>
                              </div>
                              <h3 className="footer-subtitle-3">{sub_title}</h3>
                              <div className="tp-footer__input mb-15 p-relative">
                                 <form onSubmit={(e) => e.preventDefault()}>
                                    <input type="text" placeholder="Business email adress" required />
                                    <span>
                                       <EmailIcon />
                                    </span>
                                    <button>
                                       <RightArrow />
                                    </button>
                                 </form>
                              </div>
                              <p>{policy_text}</p>
                              <div className="tp-team-social">
                                 <SocialLinksTwo />
                              </div>
                           </div>
                        </div>
                        <div className="col-xl-5 col-lg-5 col-md-6 pb-45 wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".5s">
                           <div className="tp-footer__widget footer-widget-4 footer-col-4-2">
                              <h4 className="tp-footer__widget-title">Platform</h4>
                              <div className="tp-footer__content">
                                 <ul>
                                    {footer_lisks.map((item, i) =>
                                       <li key={i}><Link href={item.link}>{item.name}</Link></li>
                                    )}
                                 </ul>
                              </div>
                           </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6 pb-45 wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".7s">
                           <div className="tp-footer__widget footer-widget-4 footer-col-4-3">
                              <h4 className="tp-footer__widget-title">Contact Info</h4>
                              <div className="tp-contact-info-box">
                                 <ul>
                                    <li>
                                       <PhoneThree />
                                       <Link href={`tel:${phone}`}>{phone}</Link>
                                    </li>
                                    <li>
                                       <EmailThree />
                                       <Link href={`mailto:${email}`}>{email}</Link>
                                    </li>
                                    <li>
                                       <LocationTwo />  <Link href="https://www.google.com/maps/place/Warmoesstraat+149,+Amsterdam" target="_blank">{location}</Link>
                                    </li>
                                 </ul>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="tp-copyright__area pt-20 pb-20 wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".9s">
                  <div className="container">
                     <div className="row justify-content-center">
                        <div className="col-xl-4 col-lg-6 col-md-6">
                           <div className="tp-copyright__text tp-copyright__text-4 text-center">
                              <span><CopyRight /></span>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

         </footer>
      </>
   );
};

export default FooterFour;
