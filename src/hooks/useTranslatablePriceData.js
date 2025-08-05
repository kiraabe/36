import { useTranslation } from 'next-i18next';
import PriceList from "../svg/price-list";

import pric_img_1 from "../../public/assets/img/price/price-icon-1.png";
import pric_img_2 from "../../public/assets/img/price/price-icon-2.png";
import pric_img_3 from "../../public/assets/img/price/price-icon-3.png";

export const useTranslatablePriceData = () => {
  const { t } = useTranslation('home');

  return [
    // Monthly prices 1-3
    {
        id: 1,
        img: pric_img_1,
        title: t('pricing.plans.essential.title'),
        desctiption: t('pricing.plans.essential.description'),
        cls: "",
        pric: "89.00",
        price_feature: [
            {
                list: t('pricing.features.standardRoomCleaning'),
                icon: <PriceList />,
                cls: ""
            },
            {
                list: t('pricing.features.kitchenBathroomSanitization'),
                icon: <PriceList />,
                cls: ""
            },
            {
                list: t('pricing.features.interiorWindows'),
                icon: <PriceList />,
                cls: "inactive"
            },
            {
                list: t('pricing.features.deepCarpetCleaning'),
                icon: <PriceList />,
                cls: "inactive"
            },
            {
                list: t('pricing.features.exteriorWindowCleaning'),
                icon: <PriceList />,
                cls: "inactive"
            },
        ]
    },
    {
        id: 2,
        img: pric_img_2,
        title: t('pricing.plans.complete.title'),
        desctiption: t('pricing.plans.complete.description'),
        cls: "active",
        pric: "149.00",
        price_feature: [
            {
                list: t('pricing.features.standardRoomCleaning'),
                icon: <PriceList />,
                cls: ""
            },
            {
                list: t('pricing.features.kitchenBathroomSanitization'),
                icon: <PriceList />,
                cls: ""
            },
            {
                list: t('pricing.features.interiorWindows'),
                icon: <PriceList />,
                cls: ""
            },
            {
                list: t('pricing.features.deepCarpetCleaning'),
                icon: <PriceList />,
                cls: ""
            },
            {
                list: t('pricing.features.exteriorWindowCleaning'),
                icon: <PriceList />,
                cls: "inactive"
            },
        ]
    },
    {
        id: 3,
        img: pric_img_3,
        title: t('pricing.plans.deluxe.title'),
        desctiption: t('pricing.plans.deluxe.description'),
        cls: "",
        pric: "219.00",
        price_feature: [
            {
                list: t('pricing.features.standardRoomCleaning'),
                icon: <PriceList />,
                cls: ""
            },
            {
                list: t('pricing.features.kitchenBathroomSanitization'),
                icon: <PriceList />,
                cls: ""
            },
            {
                list: t('pricing.features.interiorWindows'),
                icon: <PriceList />,
                cls: ""
            },
            {
                list: t('pricing.features.deepCarpetCleaning'),
                icon: <PriceList />,
                cls: ""
            },
            {
                list: t('pricing.features.exteriorWindowCleaning'),
                icon: <PriceList />,
                cls: ""
            },
        ]
    },
    // Yearly prices 4-6 (same structure with different pricing)
    {
        id: 4,
        img: pric_img_1,
        title: t('pricing.plans.essential.title'),
        desctiption: t('pricing.plans.essential.description'),
        cls: "",
        pric: "799.00",
        price_feature: [
            {
                list: t('pricing.features.standardRoomCleaning'),
                icon: <PriceList />,
                cls: ""
            },
            {
                list: t('pricing.features.kitchenBathroomSanitization'),
                icon: <PriceList />,
                cls: ""
            },
            {
                list: t('pricing.features.interiorWindows'),
                icon: <PriceList />,
                cls: "inactive"
            },
            {
                list: t('pricing.features.deepCarpetCleaning'),
                icon: <PriceList />,
                cls: "inactive"
            },
            {
                list: t('pricing.features.exteriorWindowCleaning'),
                icon: <PriceList />,
                cls: "inactive"
            },
        ]
    },
    {
        id: 5,
        img: pric_img_2,
        title: t('pricing.plans.complete.title'),
        desctiption: t('pricing.plans.complete.description'),
        cls: "active",
        pric: "1299.00",
        price_feature: [
            {
                list: t('pricing.features.standardRoomCleaning'),
                icon: <PriceList />,
                cls: ""
            },
            {
                list: t('pricing.features.kitchenBathroomSanitization'),
                icon: <PriceList />,
                cls: ""
            },
            {
                list: t('pricing.features.interiorWindows'),
                icon: <PriceList />,
                cls: ""
            },
            {
                list: t('pricing.features.deepCarpetCleaning'),
                icon: <PriceList />,
                cls: ""
            },
            {
                list: t('pricing.features.exteriorWindowCleaning'),
                icon: <PriceList />,
                cls: "inactive"
            },
        ]
    },
    {
        id: 6,
        img: pric_img_3,
        title: t('pricing.plans.deluxe.title'),
        desctiption: t('pricing.plans.deluxe.description'),
        cls: "",
        pric: "1899.00",
        price_feature: [
            {
                list: t('pricing.features.standardRoomCleaning'),
                icon: <PriceList />,
                cls: ""
            },
            {
                list: t('pricing.features.kitchenBathroomSanitization'),
                icon: <PriceList />,
                cls: ""
            },
            {
                list: t('pricing.features.interiorWindows'),
                icon: <PriceList />,
                cls: ""
            },
            {
                list: t('pricing.features.deepCarpetCleaning'),
                icon: <PriceList />,
                cls: ""
            },
            {
                list: t('pricing.features.exteriorWindowCleaning'),
                icon: <PriceList />,
                cls: ""
            },
        ]
    },
  ];
};
