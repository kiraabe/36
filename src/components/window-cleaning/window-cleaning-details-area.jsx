import React from 'react';
import AnswerQuestion from '@/src/common/answer-question';
import Link from 'next/link';
import Image from 'next/image';
const dashbord = "https://cdn.builder.io/api/v1/image/assets%2F15a9843d46ba40d3acd34b8ee9003f5f%2F9aca7bcc08f9442d800514f1ba3f96f1?format=webp&width=800";
const service_img = "https://cdn.builder.io/api/v1/image/assets%2F684854aee2e544198255ca998eb85257%2F4f30d335b3a74635b6e11b23aac43e38?format=webp&width=800";

const service_details_content = {
    category_title:"Our Services",
    categorys: [
        {id:1, category: "House Cleaning", cls: ""},
        {id:2, category: "Carpet Cleaning", cls: ""},
        {id:3, category: "Window Cleaning", cls: "active"},
        {id:4, category: "Deep Cleaning", cls: ""},
        {id:5, category: "Office Cleaning", cls: ""},
    ],
    bg_img: "linear-gradient(135deg, #ff4757 0%, #ff3838 50%, #c44569 100%)",

    overview_title: "Professional Window Cleaning Service",
    overview_des: <>Our professional window cleaning service provides crystal-clear results for both residential and commercial properties.
    We use specialized equipment and techniques to ensure streak-free, spotless windows that enhance your property's appearance
    and allow maximum natural light to brighten your space.</>,
    overview_list: [
        <>Office Cleaning: <br /> <span>Complete office environment cleaning including workstations, conference rooms, and reception areas.</span></>,
        <>Washing Dishes: <br /> <span>Professional kitchen maintenance with thorough dishwashing and sanitization services.</span></>,
        <>Dusting, Vacuuming and Mopping: <span>Comprehensive surface cleaning with meticulous attention to every corner and detail.</span></>,
    ],

    challange_titel: "Why Choose Our Window Cleaning Service",
    challange_des: <>Clean windows are essential for maintaining your property's professional appearance and maximizing natural light.
    Our experienced team uses professional-grade equipment and eco-friendly cleaning solutions to deliver pristine results,
    ensuring your windows stay cleaner longer while protecting the environment.</>,


}
const {
    category_title, 
    categorys, 
    bg_img,  
    overview_title, 
    overview_des, 
    overview_list, 
    challange_titel, 
    challange_des 
}  = service_details_content

const WindowCleaningDetailsArea = () => {

    return (
        <>
            <div className="sv-details-area pt-100 pb-100">
            <div className="container">
               <div className="row">
                  <div className="col-xl-4 col-lg-4">
                     <div className="sv-details-widget">
                        <div className="sv-details-category mb-30">
                           <div className="sv-details-category-title">
                              <h4 className="sv-details-title-sm">{category_title}</h4>
                           </div>
                           <div className="sv-details-category-list">
                              <ul>
                                <li className="">
                                    <Link href="/service-details"><span>House Cleaning</span><i className="fal fa-angle-right"></i></Link>
                                </li>
                                <li className="">
                                    <Link href="/carpet-cleaning"><span>Carpet Cleaning</span><i className="fal fa-angle-right"></i></Link>
                                </li>
                                <li className="active">
                                    <Link href="/window-cleaning"><span>Window Cleaning</span><i className="fal fa-angle-right"></i></Link>
                                </li>
                                <li className="">
                                    <Link href="/deep-cleaning"><span>Deep Cleaning</span><i className="fal fa-angle-right"></i></Link>
                                </li>
                                <li className="">
                                    <Link href="/office-cleaning"><span>Office Cleaning</span><i className="fal fa-angle-right"></i></Link>
                                </li>
                              </ul>
                           </div>
                        </div>

                        <div className="tp-service__dashboard mb-30" style={{background: bg_img}}>
                           <div className="tp-service__top-content">
                              <h3 className="tp-service__title-white">Crystal Clear <br /> Window Cleaning</h3>
                              <p>Streak-free results for <br /> residential & commercial</p>
                              <Link className="tp-btn-orange tp-btn-hover alt-color-white" href="/contact">
                                 <span>Get Quote</span>
                                 <b></b>
                              </Link>
                           </div>
                           <div className="tp-service__dashdboard-sm-img">
                              <Image src={dashbord} className="wow tpfadeRight" data-wow-duration=".9s" data-wow-delay=".3s"
                               alt="theme-pure" width={300} height={200} />
                           </div>
                        </div>

                        <div className="sv-details-social-box mb-30">
                           <h4 className="sv-details-title-sm">Share it.</h4>
                           <div className="sv-details-social-link">
                              <Link href="https://facebook.com"><i className="fab fa-facebook-f"></i></Link>
                              <Link href="https://twitter.com"><i className="fab fa-twitter"></i></Link>
                              <Link href="https://instagram.com"><i className="fab fa-instagram"></i></Link>
                              <Link href="https://youtube.com"><i className="fab fa-youtube"></i></Link>
                           </div>
                        </div>

                     </div>
                  </div>
                  
                  <div className="col-xl-8 col-lg-8">
                     <div className="sv-details-wrapper">
                        <div className="sv-details-thumb mb-45">
                           <Image className="w-100" src={service_img} alt="Window Cleaning Service" width={800} height={600} />
                        </div>
                        <div className="sv-details-title-box mb-55">
                           <h4 className="sv-details-title">{overview_title}</h4>
                           <p>{overview_des}</p>
                        </div>
                        <div className="sv-details-text mb-35">
                           <h4 className="sv-details-text-title pb-10">Our Specialized Services</h4>
                           <ul>
                            {overview_list.map((item, i)  =>  <li key={i}> <i className="fal fa-check"></i> <p> {item} </p> </li> )} 
                            <li><i className="fal fa-check"></i><p>Toilet Cleaning: <span>Thorough bathroom cleaning and sanitization for optimal hygiene and cleanliness.</span></p></li>
                           </ul>
                        </div>
                        <div className="sv-details-text-2">
                           <h4 className="sv-details-text-title">{challange_titel}</h4>
                           <p>{challange_des}</p>
                        </div>
                        <div className="tp-faq-area pt-50">
                           <div className="container p-0">
                              <div className="row g-0">
                                 <div className="col-xl-12">
                                    <h4 className="sv-details-title">Any Questions find here.</h4>
                                    <AnswerQuestion style={true} /> 
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
        </>
    );
};

export default WindowCleaningDetailsArea;
