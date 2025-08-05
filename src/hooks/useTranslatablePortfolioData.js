import { useTranslation } from 'next-i18next';

// Restaurant/Food Service brand images
const dunkin_donuts_img = "https://cdn.builder.io/api/v1/image/assets%2F9ccdef6e0d894e8082b7df2da6de3b2a%2F255dfd2aac9a462abb86c349279d3fc0?format=webp&width=800";
const hannekes_boom_img = "https://cdn.builder.io/api/v1/image/assets%2F6874bbbabae142e3877f5ca5336e8fe1%2Fcc0510630b7c4f839ab5d245af89612f?format=webp&width=800";
const burger_fabriek_img = "https://cdn.builder.io/api/v1/image/assets%2F6874bbbabae142e3877f5ca5336e8fe1%2Fac093331a8304306aaff739338296101?format=webp&width=800";

export const useTranslatablePortfolioData = () => {
  return [
    {
        id: 1,
        thumb_img: dunkin_donuts_img,
        brand_logo: dunkin_donuts_img,
        job_title: "Food & Beverage",
        title: "Dunkin Donuts",
        des: "Professional coffee shop and donut chain branding and marketing solutions.",
        delay: ".5s",
        category: "Food & Beverage",
        filter_id: ["all", "Food & Beverage"],
    },
    {
        id: 2,
        thumb_img: hannekes_boom_img,
        brand_logo: hannekes_boom_img,
        job_title: "Restaurant & Bar",
        title: "Hannekes Boom",
        des: "Unique waterfront restaurant and bar with creative branding and atmosphere.",
        delay: ".7s",
        category: "Restaurant & Bar",
        filter_id: ["all", "Restaurant & Bar"],
    },
    {
        id: 3,
        thumb_img: burger_fabriek_img,
        brand_logo: burger_fabriek_img,
        job_title: "Fast Food",
        title: "Burger Fabriek",
        des: "Modern burger restaurant chain with industrial design and premium quality.",
        delay: ".9s",
        category: "Fast Food",
        filter_id: ["all", "Fast Food"],
    },
  ];
};
