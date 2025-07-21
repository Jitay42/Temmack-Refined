// src/pages/About.tsx

import React from 'react';
import { Helmet } from 'react-helmet-async';

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us | Temmack</title>
        <meta name="description" content="Discover the heart behind Temmack's digital marketing and consulting brilliance." />
        <meta name="robots" content="index, follow" />

        {/* Open Graph */}
        <meta property="og:title" content="About Temmack" />
        <meta property="og:description" content="Discover the team behind Temmack’s innovative digital strategies." />
        <meta property="og:image" content="https://temmack.com.ng/og-image.png" />
        <meta property="og:url" content="https://temmack.com.ng/about" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:title" content="About Temmack" />
        <meta name="twitter:description" content="Discover the team behind Temmack’s innovative digital strategies." />
        <meta name="twitter:image" content="https://temmack.com.ng/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <main className="p-6">
        <h1 className="text-3xl font-bold mb-4">About Temmack</h1>
        <p className="text-base leading-relaxed">
          Temmack is a digital marketing and strategy consulting firm helping businesses build clarity and drive results across Africa and beyond.
        </p>
      </main>
    </>
  );
};

export default About;
