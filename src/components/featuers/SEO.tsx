import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  keywords: string[];
  author?: string;
  ogImage?: string;
  ogImageAlt?: string;
  twitterCreator?: string;
  canonicalUrl?: string;
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords,
  author = "Baraa Alshaer",
  ogImage = "https://cdn.dribbble.com/userupload/14186516/file/original-302bcec5d5a7d2bae6c18ee8cabc5f37.png?resize=400x400",
  ogImageAlt = "Baraa Alshaer - Full Stack Developer",
  twitterCreator = "@balshaer1",
  canonicalUrl = "https://alshaer.vercel.app",
}) => {
  return (
    <Helmet>
      <html lang="en" translate="no" />
      <title>{title}</title>
      <link rel="icon" type="image/svg+xml" href="./app/images/Logo.png" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow" />
      <meta name="referrer" content="origin" />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:alt" content={ogImageAlt} />
      <meta property="og:site_name" content="Baraa Alshaer" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={twitterCreator} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Preconnect to Google Fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        href="https://fonts.googleapis.com/css2?family=Cairo:wght@200;300;400;500;600;700;800;900;1000&display=swap"
        rel="stylesheet"
      />
    </Helmet>
  );
};

export default SEO;