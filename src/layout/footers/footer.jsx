import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { useTranslation } from 'next-i18next';
import { useLanguageContext } from '@/src/context/LanguageContext';
import SocialLinks from '@/src/common/social-links';
import ContactIcon from '@/src/svg/contact-icon';
import EmailIcon from '@/src/svg/email';
import LocationIcon from '@/src/svg/location-icon';
import PhoneIcon from '@/src/svg/phone-icon';
import RightArrow from '@/src/svg/right-arrow';
import NewsletterSubscription from '@/src/components/ui/NewsletterSubscription';
import ClientOnly from '@/src/components/ui/ClientOnly';

const footer_logo = "https://cdn.builder.io/api/v1/image/assets%2F502af3714cbb44bab6c5decbdffe176f%2F0d39a8d1597a47378b9a72b787aabfac?format=webp&width=800";


// footer_content will be handled by translations
const footer_content  = {
    phone: "+31 6 57 39 52 37",
    contact_mail: "Info@omgcleaningcompany.nl",
    location: "Warmoesstraat 149, Amsterdam, The Netherlands",

    copy_right: "Copyright © 2024 OMG Cleaning Company. All Rights Reserved.",

    footer_lisks : [
        {
            id: 1,
            cls_1: "col-xl-3 col-lg-3 col-md-6",
            cls_2: "footer-col-2",
            title_key: "footer.quickLinks",
            delay: ".7s",
            links: [
                {name_key: "navigation.about", link: "/about"},
                {name_key: "footer.ourServices", link: "/service"},
                {name_key: "navigation.portfolio", link: "/project"},
                {name_key: "navigation.contact", link: "/contact"},
                {name_key: "buttons.getQuote", link: "/contact"},
            ]
        },
        {
            id: 2,
            cls_1: "col-xl-3 col-lg-3 col-md-6",
            cls_2: "footer-col-3",
            title_key: "footer.ourServices",
            delay: ".9s",
            links: [
                {name_key: "navigation.houseCleaning", link: "/service-details"},
                {name_key: "navigation.carpetCleaning", link: "/carpet-cleaning"},
                {name_key: "navigation.windowCleaning", link: "/window-cleaning"},
                {name_key: "navigation.deepCleaning", link: "/deep-cleaning"},
                {name_key: "navigation.officeCleaning", link: "/office-cleaning"},
            ]
        },

    ],



    social_links: [
        {name: "Facebook", link: "https://facebook.com", icon: "fab fa-facebook-f"},
        {name: "Instagram", link: "https://instagram.com", icon: "fab fa-instagram"},
        {name: "LinkedIn", link: "https://linkedin.com", icon: "fab fa-linkedin-in"},
        {name: "WhatsApp", link: "https://wa.me/31657395237", icon: "fab fa-whatsapp"},
    ]

}
const {phone, contact_mail, location, copy_right , footer_lisks, social_links}  = footer_content


const Footer = () => {
    const { t } = useTranslation('common');
    const { currentLanguage, changeLanguage, isChangingLanguage } = useLanguageContext();

    // Removed GSAP scroll animation to stop footer movement
    

    return (
        <>
        <footer className="modern-footer">
            <div className="modern-footer__background">
               <div className="modern-footer__sparkles">
                  <div className="sparkle sparkle-1">✦</div>
                  <div className="sparkle sparkle-2">✧</div>
                  <div className="sparkle sparkle-3">✦</div>
                  <div className="sparkle sparkle-4">✧</div>
                  <div className="sparkle sparkle-5">✦</div>
               </div>

               <div className="container">
                  <div className="modern-footer__content">
                     <div className="row">
                        <div className="col-xl-3 col-lg-3 col-md-6 pb-30 wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".5s">
                           <div className="modern-footer__widget">
                              <h4 className="modern-footer__widget-title">{t('contact.contactInfo')}</h4>
                              <div className="modern-footer__contact-info">
                                 <div className="contact-item">
                                    <span className="contact-icon"><LocationIcon /></span>
                                    <span className="contact-text">
                                       <strong>{t('contact.address')}</strong><br/>
                                       {location}
                                    </span>
                                 </div>
                                 <div className="contact-item">
                                    <span className="contact-icon"><PhoneIcon /></span>
                                    <span className="contact-text">
                                       <strong>{t('phone')}</strong><br/>
                                       <Link href={`tel:${phone}`}>{phone}</Link>
                                    </span>
                                 </div>
                                 <div className="contact-item">
                                    <span className="contact-icon">✉</span>
                                    <span className="contact-text">
                                       <strong>{t('footerBusinessEmail')}</strong><br/>
                                       <Link href={`mailto:${contact_mail}`}>{contact_mail}</Link>
                                    </span>
                                 </div>

                              </div>
                           </div>
                        </div>

                        {footer_lisks.map((item, i)  =>
                         <div key={i} className={`${item.cls_1} pb-30 wow tpfadeUp`} data-wow-duration=".9s" data-wow-delay={item.delay}>
                           <div className={`modern-footer__widget ${item.cls_2}`}>
                              <h4 className="modern-footer__widget-title">{t(item.title_key)}</h4>
                              <div className="modern-footer__content">
                                 <ul>
                                     {item.links.map((link, i)  =>
                                       <li key={i}>
                                         <span className="link-arrow">↴</span>
                                         <Link href={link.link}>{link.name_key ? t(link.name_key) : link.name}</Link>
                                       </li>
                                     )}
                                 </ul>
                              </div>
                           </div>
                        </div>
                        )}

                        <div className="col-xl-3 col-lg-3 col-md-6 pb-30 wow tpfadeUp" data-wow-duration=".9s" data-wow-delay="1s">
                           <div className="modern-footer__widget newsletter-widget">
                              <h4 className="modern-footer__widget-title">{t('footer.stayConnected')}</h4>
                              <p className="newsletter-text">{t('footer.subscribeText')}</p>
                              <NewsletterSubscription />

                              <div className="social-media-section">
                                 <h5 className="social-media-title">{t('contact.followUs')}</h5>
                                 <div className="social-media-links">
                                    {social_links.map((social, i) => (
                                       <Link key={i} href={social.link} className="social-link" target="_blank" rel="noopener noreferrer">
                                          <i className={social.icon}></i>
                                       </Link>
                                    ))}
                                 </div>
                              </div>

                              <div className="working-hours">
                                 <h5 className="working-hours-title">{t('contact.workingHours')}</h5>
                                 <p className="working-hours-text">
                                    <span className="hours-indicator">🟢</span> {t('contact.weekdays')}<br/>
                                    <span className="hours-indicator">🔴</span> {t('contact.sunday')}
                                 </p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>

               <div className="modern-footer__wave">
                  <svg viewBox="0 0 1440 120" className="wave-svg">
                     <path d="M0,0 C480,120 960,120 1440,0 L1440,120 L0,120 Z" fill="#000000"></path>
                  </svg>
               </div>

               <div className="modern-footer__copyright">
                  <div className="container">
                     <div className="copyright-content">
                        <ClientOnly fallback={<span>Copyright © 2024 OMG Cleaning Company. All Rights Reserved.</span>}>
                           <span>{t('footer.copyright').replace('{year}', new Date().getFullYear())}</span>
                        </ClientOnly>
                        <ClientOnly fallback={
                           <div className="language-selector">
                              <span className="language-label">{t('footerLanguage')}:</span>
                              <button className="language-btn active">English</button>
                              <span className="language-divider">|</span>
                              <button className="language-btn">Nederlands</button>
                           </div>
                        }>
                           <div className="language-selector">
                              <span className="language-label">{t('footerLanguage')}:</span>
                              <button
                                 className={`language-btn ${currentLanguage === 'en' ? 'active' : ''}`}
                                 onClick={() => changeLanguage('en')}
                                 disabled={isChangingLanguage}
                                 data-lang="en">
                                 {t('languages.english')}
                              </button>
                              <span className="language-divider">|</span>
                              <button
                                 className={`language-btn ${currentLanguage === 'nl' ? 'active' : ''}`}
                                 onClick={() => changeLanguage('nl')}
                                 disabled={isChangingLanguage}
                                 data-lang="nl">
                                 {t('languages.dutch')}
                              </button>
                           </div>
                        </ClientOnly>
                     </div>
                  </div>
               </div>
            </div>
         </footer>

         <style jsx>{`
            .modern-footer {
               background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
               position: relative;
               overflow: hidden;
               width: 100vw;
               margin-left: 50%;
               transform: translateX(-50%);
            }

            .modern-footer__background {
               position: relative;
               z-index: 2;
            }

            .modern-footer__sparkles {
               position: absolute;
               top: 0;
               left: 0;
               width: 100%;
               height: 100%;
               pointer-events: none;
               z-index: 1;
            }

            .sparkle {
               position: absolute;
               color: rgba(255, 255, 255, 0.1);
               font-size: 24px;
               animation: sparkle 3s infinite ease-in-out;
            }

            .sparkle-1 { top: 20%; left: 10%; animation-delay: 0s; }
            .sparkle-2 { top: 40%; left: 80%; animation-delay: 1s; }
            .sparkle-3 { top: 70%; left: 20%; animation-delay: 2s; }
            .sparkle-4 { top: 30%; left: 60%; animation-delay: 0.5s; }
            .sparkle-5 { top: 80%; left: 70%; animation-delay: 1.5s; }

            @keyframes sparkle {
               0%, 100% { opacity: 0.1; transform: scale(1); }
               50% { opacity: 0.3; transform: scale(1.2); }
            }

            .modern-footer__content {
               padding: 80px 0 40px;
               position: relative;
               z-index: 3;
            }

            .modern-footer__widget-title {
               color: #ffffff;
               font-size: 22px;
               font-weight: 600;
               margin-bottom: 25px;
               position: relative;
               padding-bottom: 10px;
            }

            .modern-footer__widget-title::after {
               content: '';
               position: absolute;
               bottom: 0;
               left: 0;
               width: 40px;
               height: 3px;
               background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
               border-radius: 2px;
            }

            .contact-item {
               display: flex;
               align-items: flex-start;
               margin-bottom: 20px;
               color: #cccccc;
            }

            .contact-icon {
               font-size: 18px;
               margin-right: 15px;
               margin-top: 2px;
               min-width: 25px;
               color: #000000;
            }

            .contact-text {
               line-height: 1.6;
            }

            .contact-text strong {
               color: #ffffff;
               display: block;
               margin-bottom: 3px;
            }

            .contact-text a {
               color: #4ecdc4;
               text-decoration: none;
               transition: color 0.3s ease;
            }

            .contact-text a:hover {
               color: #ff6b6b;
            }

            .modern-footer__content ul {
               list-style: none;
               padding: 0;
               margin: 0;
            }

            .modern-footer__content ul li {
               display: flex;
               align-items: center;
               margin-bottom: 12px;
               color: #cccccc;
               transition: all 0.3s ease;
            }

            .modern-footer__content ul li:hover {
               color: #ffffff;
               transform: translateX(5px);
            }

            .link-arrow {
               color: #4ecdc4;
               margin-right: 10px;
               font-weight: bold;
               transition: transform 0.3s ease;
            }

            .modern-footer__content ul li:hover .link-arrow {
               transform: translateX(3px);
            }

            .modern-footer__content ul li a {
               color: inherit;
               text-decoration: none;
               transition: color 0.3s ease;
            }

            .modern-footer__content ul li a:hover {
               color: #4ecdc4;
            }

            .newsletter-text {
               color: #cccccc;
               margin-bottom: 20px;
               line-height: 1.6;
            }

            .social-media-section {
               margin: 25px 0;
            }

            .social-media-title {
               color: #ffffff;
               font-size: 16px;
               font-weight: 600;
               margin-bottom: 15px;
            }

            .social-media-links {
               display: flex;
               gap: 20px;
               flex-wrap: wrap;
               margin-top: 10px;
            }

            .social-link {
               display: flex;
               align-items: center;
               justify-content: center;
               width: 70px;
               height: 70px;
               background: rgba(255, 255, 255, 0.1);
               border: 2px solid rgba(255, 255, 255, 0.3);
               border-radius: 50%;
               color: #ffffff;
               text-decoration: none;
               transition: all 0.4s ease;
               backdrop-filter: blur(20px);
               font-size: 28px;
               box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
               position: relative;
               overflow: hidden;
            }

            .social-link::before {
               content: '';
               position: absolute;
               top: 0;
               left: 0;
               right: 0;
               bottom: 0;
               background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
               opacity: 0;
               transition: opacity 0.4s ease;
               z-index: -1;
            }

            .social-link:hover {
               transform: translateY(-8px) scale(1.2);
               color: #ffffff;
               border-color: #4ecdc4;
               box-shadow: 0 12px 30px rgba(78, 205, 196, 0.5);
            }

            .social-link:hover::before {
               opacity: 1;
            }

            .social-link i {
               font-size: 32px;
               font-weight: 700;
               z-index: 1;
               position: relative;
               color: #ffffff;
            }

            .working-hours-title {
               color: #ffffff;
               font-size: 16px;
               font-weight: 600;
               margin-bottom: 10px;
            }

            .working-hours-text {
               color: #cccccc;
               line-height: 1.6;
               margin: 0;
            }

            .hours-indicator {
               font-size: 12px;
               margin-right: 8px;
            }

            .modern-footer__wave {
               position: absolute;
               bottom: 60px;
               left: 0;
               width: 100%;
               height: 0;
               overflow: hidden;
            }

            .wave-svg {
               width: 100%;
               height: 100%;
               fill: rgba(255, 255, 255, 0.05);
            }

            .modern-footer__copyright {
               background: rgba(0, 0, 0, 0.5);
               padding: 20px 0;
               border-top: 1px solid rgba(255, 255, 255, 0.1);
               position: relative;
               z-index: 3;
            }

            .copyright-content {
               display: flex;
               justify-content: space-between;
               align-items: center;
               color: #cccccc;
               font-size: 14px;
               flex-wrap: wrap;
               gap: 20px;
            }

            .copyright-content span {
               flex: 1;
               text-align: left;
            }

            .language-selector {
               display: flex;
               align-items: center;
               gap: 10px;
               flex-shrink: 0;
            }

            .language-label {
               color: #cccccc;
               font-size: 14px;
               font-weight: 500;
            }

            .language-btn {
               background: rgba(255, 255, 255, 0.1);
               border: 1px solid rgba(255, 255, 255, 0.2);
               border-radius: 20px;
               color: #cccccc;
               padding: 6px 12px;
               font-size: 13px;
               cursor: pointer;
               transition: all 0.3s ease;
               display: flex;
               align-items: center;
               gap: 5px;
               backdrop-filter: blur(10px);
            }

            .language-btn:hover {
               background: rgba(255, 255, 255, 0.2);
               border-color: rgba(255, 255, 255, 0.4);
               color: #ffffff;
               transform: translateY(-2px);
            }

            .language-btn.active {
               background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
               border-color: #4ecdc4;
               color: #ffffff;
               font-weight: 600;
            }

            .language-divider {
               color: rgba(255, 255, 255, 0.3);
               font-weight: 300;
            }

            @media (max-width: 768px) {
               .modern-footer__content {
                  padding: 60px 0 30px;
               }

               .contact-item {
                  margin-bottom: 15px;
               }

               .social-media-links {
                  justify-content: center;
                  gap: 25px;
                  margin-top: 15px;
               }

               .social-link {
                  width: 75px;
                  height: 75px;
                  font-size: 30px;
               }

               .social-link i {
                  font-size: 36px;
               }

               .modern-footer__widget-title {
                  font-size: 20px;
                  text-align: center;
               }

               .modern-footer__widget-title::after {
                  left: 50%;
                  transform: translateX(-50%);
               }

               .copyright-content {
                  flex-direction: column;
                  text-align: center;
                  gap: 15px;
               }

               .copyright-content span {
                  text-align: center;
                  flex: none;
               }

               .language-selector {
                  justify-content: center;
               }

               .language-btn {
                  padding: 8px 14px;
                  font-size: 14px;
               }
            }
         `}</style>
        </>
    );
};

export default Footer;
