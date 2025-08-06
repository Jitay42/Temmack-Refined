// src/pages/404.tsx

import React from 'react';
import { Helmet } from 'react-helmet-async';

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>404 | Page Not Found | Temmack</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <main className="h-screen flex flex-col items-center justify-center text-center p-4">
        <h1 className="text-5xl font-bold text-red-600 mb-4">404</h1>
        <p className="text-xl mb-6">Oops, this page doesn’t exist.</p>
        <a href="/" className="text-blue-500 underline">Go back home</a>
      </main>
    </>
  );
};

export default NotFound;
