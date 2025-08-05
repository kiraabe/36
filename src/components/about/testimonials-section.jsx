import Link from 'next/link';
import React from 'react';
import { useTranslation } from 'next-i18next';

const TestimonialsSection = () => {
    const { t } = useTranslation(['about']);
    return (
        <>
            <div className="testimonials-section-area pt-50 pb-100">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-8 col-lg-8">
                            <div className="testimonials-content mb-50">
                                <p className="testimonials-intro mb-30" suppressHydrationWarning>
                                    {t('testimonials.intro')}
                                </p>
                                <div className="testimonial-item mb-35">
                                    <blockquote className="testimonial-quote mb-20" suppressHydrationWarning>
                                        "{t('testimonials.testimonial1.quote')}"
                                    </blockquote>
                                    <cite className="testimonial-author" suppressHydrationWarning>{t('testimonials.testimonial1.author')}</cite>
                                </div>
                                <div className="testimonial-item mb-35">
                                    <blockquote className="testimonial-quote mb-20" suppressHydrationWarning>
                                        "{t('testimonials.testimonial2.quote')}"
                                    </blockquote>
                                    <cite className="testimonial-author" suppressHydrationWarning>{t('testimonials.testimonial2.author')}</cite>
                                </div>
                                <div className="testimonials-cta mt-40">
                                    <h4 className="testimonials-cta-title mb-25" suppressHydrationWarning>{t('testimonials.ctaTitle')}</h4>
                                    <Link className="tp-btn-red tp-btn-hover" href="/contact">
                                        <span suppressHydrationWarning>{t('testimonials.ctaButton')}</span>
                                        <b></b>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4">
                            <div className="testimonials-title-box mb-50">
                                <h3 className="testimonials-title" suppressHydrationWarning>{t('testimonials.title')}</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TestimonialsSection;
