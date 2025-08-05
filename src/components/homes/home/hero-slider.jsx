import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import HeroForm from '@/src/forms/hero-form';
import LineShape from '@/src/svg/line-shape';
import { gsap } from 'gsap';
import useCharAnimation from '@/src/hooks/useCharAnimation';

// images import
import  hero_frame from "../../../../public/assets/img/hero/hero-frame.png";
import  shape_1 from "../../../../public/assets/img/hero/hero-line-shape.png";
import  shape_2 from "../../../../public/assets/img/hero/hero-line-shape-2.png";
const shape_img_1 = "https://cdn.builder.io/api/v1/image/assets%2F2eec0e2ff94f4d308c45d6069a553596%2F564d310010154b7aa52a90b0b5354628?format=webp&width=800";
const shape_img_2 = "https://cdn.builder.io/api/v1/image/assets%2F2eec0e2ff94f4d308c45d6069a553596%2F564d310010154b7aa52a90b0b5354628?format=webp&width=800";
// Dashboard-style grid layout - total height equals 580px (hero_thumb_2 height)
// Main image: 800x320 (55% of 580px height = 320px) - Professional cleaning supplies
const hero_thumb_1 = "https://cdn.builder.io/api/v1/image/assets%2F970ed6b5418f4c32a5ccbe9dcaddc28e%2Fc84fc2c73753408dbb8a8d7b81eee113?format=webp&width=800";

// Bottom row images: 400x130 each (22.5% of 580px height = 130px each)
const thumb_1 = "https://cdn.builder.io/api/v1/image/assets%2F970ed6b5418f4c32a5ccbe9dcaddc28e%2Fe161a66c9485492290b85075db48d818?format=webp&width=800";
const thumb_2 = "https://cdn.builder.io/api/v1/image/assets%2F970ed6b5418f4c32a5ccbe9dcaddc28e%2Fc7854b860046444b9dfc71b1becae093?format=webp&width=800";

// Right column image: 380x580 (full height reference - matches combined height) - OMG outdoor cleaning
const hero_thumb_2 = "https://cdn.builder.io/api/v1/image/assets%2F970ed6b5418f4c32a5ccbe9dcaddc28e%2F63aaee2598c1478285918c0d5b12cc6c?format=webp&width=800";   

// hero content data
const hero_content = {
    hero_shape: [
        {
            id: 1,
            cls: "tp-hero-shape-1",
            img: shape_1,
        },
        {
            id: 2,
            cls: "tp-hero-shape-2",
            img: shape_2,
        },
    ],
    // hero_title and sub_title will be set dynamically with translations
    hero_shape_img: [
        {
            id: 1,
            cls: "1",
            img: shape_img_1,
        },
        {
            id: 2,
            cls: "2",
            img: shape_img_2,
        },
    ],

    
    hero_thumbs: [
        {
            id: 1,
            col: "4",
            cls: "tp-hero__sm-img",
            img: thumb_1,
        },
        {
            id: 2,
            col: "8",
            cls: "",
            img: thumb_2,
        },
    ],
    
}
const { 
    hero_shape,
    hero_title,
    sub_title,
    hero_shape_img, 
    hero_thumbs, 
} = hero_content;



const HeroSlider = () => {
    const { t } = useTranslation(['common', 'home']);

    let hero_bg = useRef(null);

    useEffect(() => {
        gsap.from(hero_bg.current, {
            opacity: 0,
            scale: 1.2,
            duration: 1.5
        });
        gsap.to(hero_bg.current, {
            opacity: 1,
            scale: 1,
            duration: 1.5
        })
    }, []);


    useCharAnimation('.tp-hero__hero-title span.child');

    return (
        <>
            <div className="tp-hero__area tp-hero__pl-pr">
                <div className="tp-hero__bg p-relative" style={{
                    background: `url('https://cdn.builder.io/api/v1/image/assets%2Fe6f55413c0f54c19b45ee3f1323bc7d3%2F321c23c89e254c12b82e4e793d329969?format=webp&width=800')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    minHeight: '100vh',
                    opacity: 1
                }}>
                    <div className="tp-hero-bg tp-hero-bg-single" ref={hero_bg} >
                        <Image
                        // style={{width: "auto", height: "auto"}}
                        src={hero_frame} alt="theme-pure" />
                    </div>
                    <div className="tp-hero-shape">
                        {hero_shape.map((item, i) =>
                            <Image 
                            // style={{width: "auto", height: "auto"}} 
                            key={i} className={item.cls} src={item.img} alt="theme-pure" />
                        )}
                    </div>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xl-10">
                                <div className="tp-hero__content-box text-center z-index-3">
                                    <div className="tp-hero__title-box p-relative">
                                        <h2 className="tp-hero__hero-title tp-title-anim">
                                            <span className='tp_title'><span className='child'>{t('hero.title', { ns: 'home' })}</span></span> <br />
                                            <span><span className='child'>{t('hero.subtitle', { ns: 'home' })}</span></span>
                                        </h2>
                                        <div className="tp-hero__title-shape d-none d-sm-block">
                                            <LineShape />
                                        </div>
                                    </div>
                                    <div className="tp-hero__input p-relative wow tpfadeUp" 
                                        data-wow-duration=".9s" 
                                        data-wow-delay=".5s">
                                        <HeroForm />
                                    </div>
                                    <p className="wow tpfadeUp" style={{color: "white"}} data-wow-duration=".9s" data-wow-delay=".7s">{t('hero.description', { ns: 'home' })}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="tp-hero__bottom z-index-5">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xl-10">
                                <div className="tp-hero__thumb-wrapper-main p-relative">
                                    {hero_shape_img.map((item, i) =>
                                        <div key={i} className={`tp-hero__shape-img-${item.cls} d-none d-xl-block`}>
                                            <Image src={item.img} alt="theme-pure" width={220} height={220} />
                                        </div>
                                    )}
                                    <div>
                                        <div className="tp-hero__thumb-wrapper d-none d-md-block p-relative">
                                            <div className="row">
                                                <div className="col-8">
                                                    <div className="tp-hero__thumb-box">
                                                        <div className="row">
                                                            <div className="col-md-12">
                                                                <div className="tp-hero__thumb mb-20">
                                                                    <Image alt="theme-pure" loading="lazy" width={530} height={251} decoding="async" data-nimg="1" className="w-100" style={{color: "transparent", height: "320px", objectFit: "cover"}} src={hero_thumb_1} />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-md-4">
                                                                <div className="tp-hero__thumb tp-hero__sm-img">
                                                                    <Image alt="theme-pure" loading="lazy" width={150} height={160} decoding="async" data-nimg="1" className="w-100" style={{color: "transparent", height: "320px", objectFit: "cover"}} src={thumb_1} />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-8">
                                                                <div className="tp-hero__thumb ">
                                                                    <Image alt="theme-pure" loading="lazy" width={360} height={160} decoding="async" data-nimg="1" className="w-100" style={{color: "transparent", height: "320px", objectFit: "cover"}} src={thumb_2} />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-4">
                                                    <div className="tp-hero__thumb-box">
                                                        <div className="tp-hero__thumb">
                                                            <Image alt="theme-pure" loading="lazy" width={244} height={411} decoding="async" data-nimg="1" className="w-100" style={{color: "transparent", width: "auto", height: "auto"}} src={hero_thumb_2} />
                                                        </div>
                                                    </div>
                                                </div>
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

export default HeroSlider;
