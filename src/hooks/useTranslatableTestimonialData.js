import { useTranslation } from 'next-i18next';
import testimonial_img_1 from "../../public/assets/img/testimonial/testi-logo-up-3.png"
import testimonial_img_2 from "../../public/assets/img/testimonial/testi-logo-up-4.png"
import testimonial_img_3 from "../../public/assets/img/testimonial/testi-logo-up-5.png"
import testimonial_img_4 from "../../public/assets/img/testimonial/testi-logo-up-6.png"
import testimonial_img_5 from "../../public/assets/img/testimonial/testi-logo-up-1.png"
import testimonial_img_6 from "../../public/assets/img/testimonial/testi-logo-up-5.png"

export const useTranslatableTestimonialData = () => {
  const { t } = useTranslation('home');

  return [
    {
        id: 1, 
        img: testimonial_img_1,
        name: t('testimonials.client1.name'),
        title: t('testimonials.client1.title'), 
        count: 94, 
        description: t('testimonials.client1.description'),
        sub_des: t('testimonials.increaseText')
    },
    {
        id: 2, 
        img: testimonial_img_2,
        name: t('testimonials.client2.name'),
        title: t('testimonials.client2.title'), 
        count: 59, 
        description: t('testimonials.client2.description'),
        sub_des: t('testimonials.increaseText')
    },
    {
        id: 3, 
        img: testimonial_img_3,
        name: t('testimonials.client3.name'),
        title: t('testimonials.client3.title'), 
        count: 82, 
        description: t('testimonials.client3.description'),
        sub_des: t('testimonials.increaseText')
    },
    {
        id: 4, 
        img: testimonial_img_4,
        name: t('testimonials.client4.name'),
        title: t('testimonials.client4.title'), 
        count: 99, 
        description: t('testimonials.client4.description'),
        sub_des: t('testimonials.increaseText')
    },
    {
        id: 5, 
        img: testimonial_img_5,
        name: t('testimonials.client5.name'),
        title: t('testimonials.client5.title'), 
        count: 81, 
        description: t('testimonials.client5.description'),
        sub_des: t('testimonials.increaseText')
    },
    {
        id: 6, 
        img: testimonial_img_6,
        name: t('testimonials.client6.name'),
        title: t('testimonials.client6.title'), 
        count: 83, 
        description: t('testimonials.client6.description'),
        sub_des: t('testimonials.increaseText')
    },
  ];
};
