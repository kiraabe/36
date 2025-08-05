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
      title: t('residentialCleaning', { ns: 'services' }),
      description: t('residentialCleaningDesc', { ns: 'services' }),
      delay: ".9s",
    },
    {
      id: 19,
      icon: <OfficeCleaningIcon />,
      img: <OfficeCleaningIcon />,
      title: t('commercialCleaning', { ns: 'services' }),
      description: t('commercialCleaningDesc', { ns: 'services' }),
      delay: ".9s",
    },
    {
      id: 20,
      icon: <DeepCleaningIcon />,
      img: <DeepCleaningIcon />,
      title: t('deepCleaningService', { ns: 'services' }),
      description: t('deepCleaningDesc', { ns: 'services' }),
      delay: ".9s",
    },
    {
      id: 21,
      icon: <CarpetCleaningIcon/>,
      img: <CarpetCleaningIcon />,
      title: t('carpetUpholstery', { ns: 'services' }),
      description: t('carpetUpholsteryDesc', { ns: 'services' }),
      delay: ".9s",
    },
    {
      id: 22,
      icon: <WindowCleaningIcon/>,
      img: <WindowCleaningIcon />,
      title: t('windowCleaningService', { ns: 'services' }),
      description: t('windowCleaningDesc', { ns: 'services' }),
      delay: ".9s",
    }
  ];
};
