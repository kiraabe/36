import { useTranslation } from 'next-i18next';
import ServiceIconOne from "../svg/service/service-icon-1"
import ServiceIconTwo from "../svg/service/service-icon-2"
import ServiceIconThree from "../svg/service/service-icon-3"
import ServiceIconFoure from "../svg/service/service-icon-4"
import ServiceIconFive from "../svg/service/service-icon-5"
import ServiceIconsix from "../svg/service/service-icon-6"
import ServiceIconSeven from "../svg/service/service-icon-7"

// Cleaning service icons
import HouseCleaningIcon from "../svg/service/house-cleaning-icon"
import OfficeCleaningIcon from "../svg/service/office-cleaning-icon"
import DeepCleaningIcon from "../svg/service/deep-cleaning-icon"
import CarpetCleaningIcon from "../svg/service/carpet-cleaning-icon"
import WindowCleaningIcon from "../svg/service/window-cleaning-icon"

// images import  
import img_1 from "../../public/assets/img/service/sv-icon-1.png";
import img_2 from "../../public/assets/img/service/sv-icon-2.png";
import img_3 from "../../public/assets/img/service/sv-icon-3.png";
import img_4 from "../../public/assets/img/service/sv-icon-4.png";
import img_5 from "../../public/assets/img/service/sv-icon-5.png";

export const useTranslatableServiceData = () => {
  const { t } = useTranslation('common');

  return [
    {
      id: 1,
      icon: ServiceIconOne,
      img: img_1,
      title: t('houseCleaning'),
      description: t('completeCleaning'),
      delay: ".3s",
    },
    {
      id: 2,
      icon: ServiceIconTwo,
      img: img_2,
      title: t('officeCleaning'),
      description: t('commercialCleaning'),
      delay: ".5s",
    },
    {
      id: 3,
      icon: ServiceIconThree,
      img: img_3,
      title: t('deepCleaning'),
      description: t('intensiveCleaning'),
      delay: ".7s",
    },
    {
      id: 4,
      icon: ServiceIconFoure,
      img: img_4,
      title: t('carpetCleaning'),
      description: t('expertCarpet'),
      delay: ".9s",
    },
    {
      id: 5,
      icon: ServiceIconFive,
      img: img_5,
      title: t('windowCleaning'),
      description: t('streakFreeWindows'),
      delay: "1s",
    },
  ];
};

export const useTranslatableCleaningServiceData = () => {
  const { t } = useTranslation('common');

  return [
    {
      id: 18,
      icon: <HouseCleaningIcon />,
      img: <HouseCleaningIcon />,
      title: t('residentialCleaning'),
      description: t('residentialCleaningDesc'),
      delay: ".9s",
    },
    {
      id: 19,
      icon: <OfficeCleaningIcon />,
      img: <OfficeCleaningIcon />,
      title: t('commercialCleaning'),
      description: t('commercialCleaningDesc'),
      delay: ".9s",
    },
    {
      id: 20,
      icon: <DeepCleaningIcon />,
      img: <DeepCleaningIcon />,
      title: t('deepCleaningService'),
      description: t('deepCleaningDesc'),
      delay: ".9s",
    },
    {
      id: 21,
      icon: <CarpetCleaningIcon/>,
      img: <CarpetCleaningIcon />,
      title: t('carpetUpholstery'),
      description: t('carpetUpholsteryDesc'),
      delay: ".9s",
    },
    {
      id: 22,
      icon: <WindowCleaningIcon/>,
      img: <WindowCleaningIcon />,
      title: t('windowCleaningService'),
      description: t('windowCleaningDesc'),
      delay: ".9s",
    }
  ];
};
