import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Newsletter from './components/Newsletter';
import Home from './pages/Home';
import Services from './pages/Services';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import NotFound from './pages/NotFound';

function App() {
  return (
    <HelmetProvider>
      <Helmet>
        {/* GLOBAL META TAGS */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Temmack Solutions" />
        <meta name="copyright" content="Temmack Solutions" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.temmack.com.ng" />

        {/* GLOBAL GOOGLE ANALYTICS SCRIPT */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-HKSDWQBJQT"></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-HKSDWQBJQT');
          `}
        </script>
      </Helmet>

      <Router>
        <div className="min-h-screen bg-background">
          <Navigation />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Newsletter />
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
