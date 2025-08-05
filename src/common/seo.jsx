import Head from "next/head";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

const SEO = ({
  pageTitle,
  description,
  keywords,
  noindex = false
}) => {
  const router = useRouter();
  const { t } = useTranslation('common');

  // Use pathname instead of asPath to avoid hydration mismatch
  const currentPath = router.pathname === '/' ? '' : router.pathname;
  const currentUrl = `https://omgcleaning.nl${currentPath}`;
  const defaultDescription = description || 'Your trusted partner for professional cleaning services across Amsterdam and The Netherlands. We provide reliable, eco-friendly cleaning solutions for homes and businesses.';
  const metaDescription = defaultDescription;
  const fullTitle = pageTitle ? `${pageTitle} - OMG Cleaning Company` : 'OMG Cleaning Company';

  return (
    <>
      <Head>
        <title>{fullTitle}</title>
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="description" content={metaDescription} />
        {keywords && <meta name="keywords" content={keywords} />}
        <meta name="robots" content={noindex ? "noindex, follow" : "index, follow"} />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />

        {/* Open Graph */}
        <meta property="og:title" content={fullTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content={router.locale === 'nl' ? 'nl_NL' : 'en_US'} />

        {/* Hreflang tags for SEO */}
        <link
          rel="alternate"
          hrefLang="en"
          href={`https://omgcleaning.nl/en${currentPath}`}
        />
        <link
          rel="alternate"
          hrefLang="nl"
          href={`https://omgcleaning.nl/nl${currentPath}`}
        />
        <link
          rel="alternate"
          hrefLang="x-default"
          href={`https://omgcleaning.nl${currentPath}`}
        />

        {/* Canonical URL */}
        <link rel="canonical" href={currentUrl} />

        <link rel="icon" href="/favicon.png" />
      </Head>
    </>
  );
};

export default SEO;
