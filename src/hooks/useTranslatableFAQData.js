import { useTranslation } from 'next-i18next';

export const useTranslatableFAQData = () => {
    const { t } = useTranslation(['services', 'common']);

    return [
        {
            id: 1,
            question: t('faq.whyChooseOMG', { ns: 'services' }),
            answer: t('faq.whyChooseOMGAnswer', { ns: 'services' }),
            accordion_id: "headingOne",
            collapsed: "collapsed",
            data_bs_target: "#collapseOne",
            aria_controls: "collapseOne",
            actice: "",
        },
        {
            id: 2,
            question: t('faq.whatServicesProvide', { ns: 'services' }),
            answer: t('faq.whatServicesProvideAnswer', { ns: 'services' }),
            accordion_id: "headingTwo",
            collapsed: "",
            data_bs_target: "#collapseTwo",
            aria_expanded: true,
            aria_controls: "collapseTwo",
            show: true,
            actice: "",
        },
        {
            id: 3,
            question: t('faq.howBookServices', { ns: 'services' }),
            answer: t('faq.howBookServicesAnswer', { ns: 'services' }),
            accordion_id: "headingThree",
            collapsed: "collapsed",
            data_bs_target: "#collapseThree",
            aria_controls: "collapseThree",
            actice: "",
        },
        {
            id: 4,
            question: t('faq.discountsRegular', { ns: 'services' }),
            answer: t('faq.discountsRegularAnswer', { ns: 'services' }),
            accordion_id: "headingFour",
            collapsed: "collapsed",
            data_bs_target: "#collapseFour",
            aria_controls: "collapseFour",
            actice: "",
        },
        {
            id: 5,
            question: t('faq.areProdctsSafe', { ns: 'services' }),
            answer: t('faq.areProductsSafeAnswer', { ns: 'services' }),
            accordion_id: "headingFive",
            collapsed: "collapsed",
            data_bs_target: "#collapseFive",
            aria_controls: "collapseFive",
            actice: "",
        },
    ];
};

export default useTranslatableFAQData;
