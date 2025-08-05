import { useTranslation } from 'next-i18next';
import EcoFriendlyIcon from "../svg/features/eco-friendly-icon";
import ProfessionalTeamIcon from "../svg/features/professional-team-icon";
import SatisfactionGuaranteeIcon from "../svg/features/satisfaction-guarantee-icon";
import FlexibleSchedulingIcon from "../svg/features/flexible-scheduling-icon";

export const useTranslatableFeatureData = () => {
    const { t } = useTranslation('common');

    return [
        {
            id: 1,
            color: "1",
            img: <EcoFriendlyIcon />,
            title: <span>{t('features.ecoFriendly')}</span>,
            description: <span>{t('features.ecoFriendlyProductsDesc')}</span>,
        },
        {
            id: 2,
            color: "2",
            img: <ProfessionalTeamIcon />,
            title: <span>{t('features.professionalTeam')}</span>,
            description: <span>{t('features.professionalTeamDesc')}</span>,
        },
        {
            id: 3,
            color: "3",
            img: <SatisfactionGuaranteeIcon />,
            title: <span>{t('features.satisfaction')}</span>,
            description: <span>{t('features.satisfactionGuaranteeDesc')}</span>,
        },
        {
            id: 4,
            color: "4",
            img: <FlexibleSchedulingIcon />,
            title: <span>{t('features.flexibleScheduling')}</span>,
            description: <span>{t('features.flexibleSchedulingDesc')}</span>,
        },
    ];
};

export default useTranslatableFeatureData;
