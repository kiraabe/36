import SEO from '@/src/common/seo';
import ServiceDetails from '@/src/components/service-details';
import WrapperFour from '@/src/layout/wrapper';

const CommercialCleaningPage = () => {
   return (
      <>
         <WrapperFour>
            <SEO pageTitle={"Commercial Cleaning Services"} />
            <ServiceDetails />
         </WrapperFour>
      </>
   );
};

export default CommercialCleaningPage;
