import { useTranslation } from 'next-i18next';
import HouseCleaningIcon from '../../svg/service/house-cleaning-icon';
import OfficeCleaningIcon from '../../svg/service/office-cleaning-icon';
import DeepCleaningIcon from '../../svg/service/deep-cleaning-icon';
import CarpetCleaningIcon from '../../svg/service/carpet-cleaning-icon';
import WindowCleaningIcon from '../../svg/service/window-cleaning-icon';

export const useTranslatableServiceData = () => {
  const { t } = useTranslation(['common', 'services']);

  return [
    {
      id: 18,
      icon: <HouseCleaningIcon />,
      img: <HouseCleaningIcon />,
      title: t('serviceDetails.residentialCleaning', { ns: 'services' }),
      description: t('serviceDetails.residentialCleaningDesc', { ns: 'services' }),
      delay: ".9s",
    },
    {
      id: 19,
      icon: <OfficeCleaningIcon />,
      img: <OfficeCleaningIcon />,
      title: t('serviceDetails.commercialCleaning', { ns: 'services' }),
      description: t('serviceDetails.commercialCleaningDesc', { ns: 'services' }),
      delay: ".9s",
    },
    {
      id: 20,
      icon: <DeepCleaningIcon />,
      img: <DeepCleaningIcon />,
      title: t('serviceDetails.deepCleaningService', { ns: 'services' }),
      description: t('serviceDetails.deepCleaningDesc', { ns: 'services' }),
      delay: ".9s",
    },
    {
      id: 21,
      icon: <CarpetCleaningIcon/>,
      img: <CarpetCleaningIcon />,
      title: t('serviceDetails.carpetUpholstery', { ns: 'services' }),
      description: t('serviceDetails.carpetUpholsteryDesc', { ns: 'services' }),
      delay: ".9s",
    },
    {
      id: 22,
      icon: <WindowCleaningIcon/>,
      img: <WindowCleaningIcon />,
      title: t('serviceDetails.windowCleaningService', { ns: 'services' }),
      description: t('serviceDetails.windowCleaningDesc', { ns: 'services' }),
      delay: ".9s",
    }
  ];
};
