import React from 'react';
import { Helmet } from 'react-helmet';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import './all.sass';
import useSiteMetadata from './SiteMetadata';
import { withPrefix } from 'gatsby';

const TemplateWrapper = ({ children }) => {
  const { title, description } = useSiteMetadata();
  return (
    <div>
      <Helmet>
        <html lang='en' />
        <title>{title}</title>
        <meta name='description' content={description} />

        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href={`${withPrefix('/')}img/favicon-16x16.png`}
        />
        <link
          rel='icon'
          type='image/png'
          href={`${withPrefix('/')}img/favicon-32x32.png`}
          sizes='32x32'
        />
        <link
          rel='icon'
          type='image/png'
          href={`${withPrefix('/')}img/favicon-16x16.png`}
          sizes='16x16'
        />

        <link
          rel='mask-icon'
          href={`${withPrefix('/')}img/favicon-32x32.png`}
        />
        <meta name='theme-color' content='#b71020' />

        <meta property='og:type' content='business.business' />
        <meta property='og:title' content={title} />
        <meta property='og:url' content='/' />
        <meta
          property='og:image'
          content={`${withPrefix('/')}img/og-image.jpg`}
        />
        <script>
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-5NZGSL2L');
          `}
        </script>
      </Helmet>
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-5NZGSL2L"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        ></iframe>
      </noscript>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default TemplateWrapper;
