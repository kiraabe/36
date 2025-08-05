import { useTranslation } from 'next-i18next';

// thumb img URLs from uploaded images
const thumb_img_1 = "https://cdn.builder.io/api/v1/image/assets%2Fd7701853856d420aadf279a375a55b37%2Fe0fddf1ca6e0480f89fb2c1d28e381eb?format=webp&width=800";
const thumb_img_2 = "https://cdn.builder.io/api/v1/image/assets%2Fd7701853856d420aadf279a375a55b37%2Ff0504ebc4add48c49ef2443b11d13ea4?format=webp&width=800";
const thumb_img_3 = "https://cdn.builder.io/api/v1/image/assets%2Fd7701853856d420aadf279a375a55b37%2F4adbbe42fb4d46b8b53b2a9433acdb4f?format=webp&width=800";
const thumb_img_4 = "https://cdn.builder.io/api/v1/image/assets%2Fd7701853856d420aadf279a375a55b37%2F6e3fb2276f3649cb91f9bfb7889d04bb?format=webp&width=800";
const thumb_img_5 = "https://cdn.builder.io/api/v1/image/assets%2Fd7701853856d420aadf279a375a55b37%2F632457f0d2a34ea8b7c10c167adc37e4?format=webp&width=800";
const thumb_img_6 = "https://cdn.builder.io/api/v1/image/assets%2Fd7701853856d420aadf279a375a55b37%2F6d60060380d9475bbb24ed6de2efcbf6?format=webp&width=800";
const thumb_img_7 = "https://cdn.builder.io/api/v1/image/assets%2Fd7701853856d420aadf279a375a55b37%2Fd7395483b46d48639039cae0f96b6a74?format=webp&width=800";
const thumb_img_8 = "https://cdn.builder.io/api/v1/image/assets%2Fd7701853856d420aadf279a375a55b37%2F9a6261e143544bdab8e86af24dac24ca?format=webp&width=800";
const thumb_img_9 = "https://cdn.builder.io/api/v1/image/assets%2Fd7701853856d420aadf279a375a55b37%2Fe1bf502f191c4bf5ae0d8e7fe6ebbc1d?format=webp&width=800";
// brand logo URL - OMG logo
const omg_logo = "https://cdn.builder.io/api/v1/image/assets%2F15a9843d46ba40d3acd34b8ee9003f5f%2F62fb575782e3438cb19ee4ffb46aa818?format=webp&width=800";

export const useTranslatablePortfolioData = () => {
  const { t } = useTranslation('portfolio');

  return [
    {
        id: 1,
        thumb_img: thumb_img_1,
        brand_logo: omg_logo,
        job_title: t('projectData.project1.jobTitle'),
        title: t('projectData.project1.title'),
        des: t('projectData.project1.description'),
        delay: ".5s",
        category: t('categories.residential'),
        filter_id: ["all", "Commercial", "Residential", "Specialized", "Deep Cleaning", "Eco-Friendly" ],
    },
    {
        id: 2,
        thumb_img: thumb_img_2,
        brand_logo: omg_logo,
        job_title: t('projectData.project2.jobTitle'),
        title: t('projectData.project2.title'),
        des: t('projectData.project2.description'),
        delay: ".5s",
        category: t('categories.residential'),
        filter_id: ["all", "Commercial", "Residential", "Specialized", "Deep Cleaning", "Eco-Friendly" ],
    },
    {
        id: 3,
        thumb_img: thumb_img_3,
        brand_logo: omg_logo,
        job_title: t('projectData.project3.jobTitle'),
        title: t('projectData.project3.title'),
        des: t('projectData.project3.description'),
        delay: ".5s",
        category: t('categories.residential'),
        filter_id: ["all", "Commercial", "Residential", "Specialized", "Deep Cleaning", "Eco-Friendly" ],
    },
    {
        id: 4,
        thumb_img: thumb_img_4,
        brand_logo: omg_logo,
        job_title: t('projectData.project4.jobTitle'),
        title: t('projectData.project4.title'),
        des: t('projectData.project4.description'),
        delay: ".5s",
        category: t('categories.specialized'),
        filter_id: ["all", "Commercial", "Residential", "Specialized", "Deep Cleaning", "Eco-Friendly" ],
    },
    {
        id: 5,
        thumb_img: thumb_img_5,
        brand_logo: omg_logo,
        job_title: t('projectData.project5.jobTitle'),
        title: t('projectData.project5.title'),
        des: t('projectData.project5.description'),
        delay: ".5s",
        category: t('categories.specialized'),
        filter_id: ["all", "Commercial", "Residential", "Specialized", "Deep Cleaning", "Eco-Friendly" ],
    },
    {
        id: 6,
        thumb_img: thumb_img_6,
        brand_logo: omg_logo,
        job_title: t('projectData.project6.jobTitle'),
        title: t('projectData.project6.title'),
        des: t('projectData.project6.description'),
        delay: ".5s",
        category: t('categories.specialized'),
        filter_id: ["all", "Commercial", "Residential", "Specialized", "Deep Cleaning", "Eco-Friendly" ],
    },
    {
        id: 7,
        thumb_img: thumb_img_7,
        brand_logo: omg_logo,
        job_title: t('projectData.project7.jobTitle'),
        title: t('projectData.project7.title'),
        des: t('projectData.project7.description'),
        delay: ".5s",
        category: t('categories.specialized'),
        filter_id: ["all", "Commercial", "Residential", "Specialized", "Deep Cleaning", "Eco-Friendly" ],
    },
    {
        id: 8,
        thumb_img: thumb_img_8,
        brand_logo: omg_logo,
        job_title: t('projectData.project8.jobTitle'),
        title: t('projectData.project8.title'),
        des: t('projectData.project8.description'),
        delay: ".5s",
        category: t('categories.deepCleaning'),
        filter_id: ["all", "Commercial", "Residential", "Specialized", "Deep Cleaning", "Eco-Friendly" ],
    },
    {
        id: 9,
        thumb_img: thumb_img_9,
        brand_logo: omg_logo,
        job_title: t('projectData.project9.jobTitle'),
        title: t('projectData.project9.title'),
        des: t('projectData.project9.description'),
        delay: ".5s",
        category: t('categories.commercial'),
        filter_id: ["all", "Commercial", "Residential", "Specialized", "Deep Cleaning", "Eco-Friendly" ],
    }, 
  ];
};
