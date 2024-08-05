// src/Components/MetaTags/MetaTags.jsx
import React from 'react';
import { Helmet } from 'react-helmet';
import metaData from './metaData'; // Ensure the path is correct

const MetaTags = ({ page = 'home' }) => {
  // Destructure metadata for the given page or default to an empty object
  const { website = {}, openGraph = {}, twitter = {} } = metaData[page] || {};

  return (
    <Helmet>
      {/* Website meta tags */}
      <title>{website.title || 'Default Title'}</title>
      <meta name="description" content={website.description || 'Default Description'} />
      <meta name="keywords" content={website.keywords || 'default, keywords'} />
      {/* <link rel="icon" type="image/x-icon" href={website.favicon || '/favicon.svg'} /> */}

      {/* Open Graph meta tags */}
      <meta property="og:title" content={openGraph.ogTitle || website.title || 'Default Title'} />
      <meta property="og:description" content={openGraph.ogDescription || website.description || 'Default Description'} />
      <meta property="og:image" content={openGraph.ogImage || '/default-image.png'} />
      <meta property="og:url" content={openGraph.ogUrl || window.location.href} />

      {/* Twitter Card meta tags */}
      <meta name="twitter:title" content={twitter.twitterTitle || website.title || 'Default Title'} />
      <meta name="twitter:description" content={twitter.twitterDescription || website.description || 'Default Description'} />
      <meta name="twitter:image" content={twitter.twitterImage || '/default-image.png'} />
    </Helmet>
  );
}

export default MetaTags;
