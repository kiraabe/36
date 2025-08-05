import { useTranslation } from 'next-i18next';

const office_cleaning_img = "https://images.pexels.com/photos/6195120/pexels-photo-6195120.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=600&w=900&format=webp";
const window_cleaning_img = "https://images.pexels.com/photos/12741259/pexels-photo-12741259.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=600&w=900&format=webp";
const restroom_sanitizing_img = "https://images.pexels.com/photos/4239036/pexels-photo-4239036.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=600&w=900&format=webp";
const carpet_cleaning_img = "https://images.pexels.com/photos/8774440/pexels-photo-8774440.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=600&w=900&format=webp";
const medical_cleaning_img = "https://images.pexels.com/photos/25461705/pexels-photo-25461705.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=600&w=900&format=webp";

const project_brand_1 = "https://images.pexels.com/photos/6196228/pexels-photo-6196228.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&fit=crop&format=webp";
const project_brand_2 = "https://images.pexels.com/photos/6195125/pexels-photo-6195125.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&fit=crop&format=webp";
const project_brand_3 = "https://images.pexels.com/photos/4239036/pexels-photo-4239036.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&fit=crop&format=webp";

export const useTranslatableProjectData = () => {
  const { t } = useTranslation('portfolio');

  return [
    {
        id: 1,
        img_1: office_cleaning_img,
        img_2: project_brand_1,
        title: t('projectSlider.project1.title'),
        description: t('projectSlider.project1.description'),
        client_name: t('projectSlider.project1.clientName'),
        budget: "15-25",
        budget_simble: "k",
        delay: ".9s"
    },
    {
        id: 2,
        img_1: window_cleaning_img,
        img_2: project_brand_2,
        title: t('projectSlider.project2.title'),
        description: t('projectSlider.project2.description'),
        client_name: t('projectSlider.project2.clientName'),
        budget: "8-15",
        budget_simble: "k",
        delay: ".9s"
    },
    {
        id: 3,
        img_1: restroom_sanitizing_img,
        img_2: project_brand_3,
        title: t('projectSlider.project3.title'),
        description: t('projectSlider.project3.description'),
        client_name: t('projectSlider.project3.clientName'),
        budget: "5-12",
        budget_simble: "k",
        delay: ".9s"
    },
    {
        id: 4,
        img_1: carpet_cleaning_img,
        img_2: project_brand_1,
        title: t('projectSlider.project4.title'),
        description: t('projectSlider.project4.description'),
        client_name: t('projectSlider.project4.clientName'),
        budget: "10-18",
        budget_simble: "k",
        delay: ".9s"
    },
    {
        id: 5,
        img_1: medical_cleaning_img,
        img_2: project_brand_2,
        title: t('projectSlider.project5.title'),
        description: t('projectSlider.project5.description'),
        client_name: t('projectSlider.project5.clientName'),
        budget: "20-35",
        budget_simble: "k",
        delay: ".9s"
    },
  ];
};
