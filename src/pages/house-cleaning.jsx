import { useTranslation } from 'next-i18next';
import { getI18nProps } from '@/src/utils/serverSideTranslations';
import SEO from '@/src/common/seo';
import ServiceDetails from '@/src/components/service-details';
import WrapperFour from '@/src/layout/wrapper';

const HouseCleaningPage = () => {
   const { t } = useTranslation('common');
   return (
      <>
         <WrapperFour>
            <SEO pageTitle={t('pages.houseCleaningTitle')} />
            <ServiceDetails />
         </WrapperFour>
      </>
   );
};

export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await getI18nProps(locale, ['common', 'services'])),
    },
  };
};

export default HouseCleaningPage;
