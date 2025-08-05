import Image from 'next/image';
import Link from 'next/link';
import React, {useState , useEffect} from 'react';
import { EffectFade, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useTranslation } from 'next-i18next';

// author img import here 
import author_img_1 from "../../../public/assets/img/blog/blog-avata-3.png";
import author_img_2 from "../../../public/assets/img/blog/blog-avata-2.png";
import author_img_3 from "../../../public/assets/img/blog/blog-avata-1.png";

const setting = { 
    slidesPerView: 1,
    effect:'fade',
    breakpoints: {
        '1200': {
            slidesPerView: 1,
        },
        '992': {
            slidesPerView: 1,
        },
        '768': {
            slidesPerView: 1,
        },
        '576': {
            slidesPerView: 1,
        },
        '0': {
            slidesPerView: 1,
        },
    },
    navigation: {
        nextEl: '.grid-next',
        prevEl: '.grid-prev',
    },
}

const PortfolioBlogGrid = () => {
    const { t } = useTranslation(['portfolio', 'common']);
    const [isLoop, setIsLoop] = useState(false);

    useEffect(() => {
       setIsLoop(true);
    }, []);

    const blog_grid_content = [
        {
            id: 1,
            bg_img: "https://cdn.builder.io/api/v1/image/assets%2F9ccdef6e0d894e8082b7df2da6de3b2a%2F255dfd2aac9a462abb86c349279d3fc0?format=webp&width=800",
            category: "Food & Beverage",
            date: "December 15, 2023",
            title: "Dunkin Donuts Deep Cleaning Service",
            description: "Professional deep cleaning and sanitization of coffee shop kitchen, dining area, and equipment following strict food safety standards.",
            author_img: author_img_1,
            author_name: "Maria Santos",
            author_info: "Food Service Specialist",
        },
        {
            id: 2,
            bg_img: "https://cdn.builder.io/api/v1/image/assets%2F6874bbbabae142e3877f5ca5336e8fe1%2Fcc0510630b7c4f839ab5d245af89612f?format=webp&width=800",
            category: "Restaurant & Bar",
            date: "November 28, 2023",
            title: "Hannekes Boom Complete Cleaning",
            description: "Comprehensive restaurant and bar cleaning service including kitchen deep clean, dining area maintenance, and bar equipment sanitization.",
            author_img: author_img_2,
            author_name: "Johan van der Berg",
            author_info: "Restaurant Cleaning Manager",
        },
        {
            id: 3,
            bg_img: "https://cdn.builder.io/api/v1/image/assets%2F6874bbbabae142e3877f5ca5336e8fe1%2Fac093331a8304306aaff739338296101?format=webp&width=800",
            category: "Fast Food",
            date: "November 10, 2023",
            title: "Burger Fabriek Kitchen Sanitization",
            description: "High-standard fast food kitchen cleaning with specialized grease removal, equipment sanitization, and food prep area maintenance.",
            author_img: author_img_3,
            author_name: "Emma de Vries",
            author_info: "Fast Food Cleaning Lead",
        },
    ];
    
    return (
        <>
            <div className="blog-grid-area pt-100 pb-100">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-8">
                            <div className="tp-section-wrapper-2 text-center mb-50">
                                <Link href="/project">
                                    <span className="tp-section-subtitle-2" style={{cursor: 'pointer'}}>{t('gallery.subtitle', 'CLEANING SERVICE GALLERY')}</span>
                                </Link>
                                <h3 className="tp-section-title">{t('gallery.title', 'Food & Beverage Cleaning Excellence')}</h3>
                                <p>{t('gallery.description', 'Discover how we maintain the highest hygiene standards for restaurants, cafes, and food establishments across Amsterdam.')}</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="blog-grid-arrow p-relative">
                                <div className="grid-next d-none d-sm-block">
                                    <button>
                                        <i className="far fa-angle-left"></i>
                                        <svg width="36" height="100" viewBox="0 0 36 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M4.99999 14C0 7.5 0.5 3.5 0 0L-0.000484467 99.5C-0.000415802 96.7234 1.00003 88 23 71.5C44.9999 55 32.5 37.1667 24 30.5C19.8333 27.1667 9.48375 19.8289 4.99999 14Z" fill="white"/>
                                        </svg>
                                    </button>
                                </div>
                                <div className="grid-prev d-none d-sm-block">
                                    <button>
                                        <i className="far fa-angle-right"></i>
                                        <svg width="36" height="100" viewBox="0 0 36 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M30.3164 14C35.3164 7.5 34.8164 3.5 35.3164 0L35.3169 99.5C35.3168 96.7234 34.3164 88 12.3164 71.5C-9.68354 55 2.81642 37.1667 11.3164 30.5C15.4831 27.1667 25.8327 19.8289 30.3164 14Z" fill="white"/>
                                        </svg>
                                    </button>
                                </div>
                                <Swiper 
                                    {...setting} 
                                    loop={isLoop}
                                    modules={[Navigation, EffectFade]} 
                                    className="swiper-container blog-grid-slider-active"> 
                                    {blog_grid_content.map((item, i) => 
                                        <SwiperSlide key={i} className="swiper-slide"> 
                                            <div className="blog-grid-slider blog-grid-slider-bg d-flex align-items-center blog-grid-slider-height"
                                                style={{
                                                    backgroundImage: `url(${item.bg_img})`,
                                                    backgroundSize: 'cover',
                                                    backgroundPosition: 'center center',
                                                    backgroundRepeat: 'no-repeat'
                                                }}>
                                                <div className="blog-grid-slider-wrapper">
                                                    <div className="blog-grid-slider-meta">
                                                        <span className="child-one">{item.category}</span>
                                                        <span className="child-two">{item.date}</span>
                                                    </div>
                                                    <div className="blog-grid-slider-title-box">
                                                        <h4 className="blog-grid-slider-title">
                                                            <Link href="/project">{item.title}</Link>
                                                        </h4>
                                                        <p>{item.description}</p>
                                                    </div>
                                                    <div className="tp-blog-author-info-box blog-grid-avata-box d-flex align-items-center">
                                                        <div className="tp-blog-avata">
                                                            <Image src={item.author_img} alt="team member" />
                                                        </div>
                                                        <div className="tp-blog-author-info">
                                                            <h5>{item.author_name}</h5>
                                                            <span>{item.author_info}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide> 
                                    )}  
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PortfolioBlogGrid;
