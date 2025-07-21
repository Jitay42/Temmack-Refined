import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';
import RealisticModelBanner from '../components/RealisticModelBanner';
import ServiceCards from '../components/ServiceCards';
import ProfessionalTeamSection from '../components/ProfessionalTeamSection';
import ServiceImageGrid from '../components/ServiceImageGrid';

const Home = () => {
  const testimonials = [
    {
      name: 'Sarah Chen',
      company: 'TechFlow Solutions',
      role: 'CEO',
      comment: 'Temmack transformed our entire communication strategy. Our conversion rates increased by 340% within 3 months.',
      rating: 5
    },
    {
      name: 'Marcus Johnson',
      company: 'InnovateLab',
      role: 'Marketing Director',
      comment: 'Working with Temmack was a game-changer. They helped us find our voice and communicate our complex AI solutions clearly.',
      rating: 5
    },
    {
      name: 'Priya Patel',
      company: 'CloudVault',
      role: 'Founder',
      comment: 'The team at Temmack crafts strategic communication that drives real results. Our email open rates doubled overnight.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Temmack – Result-Driven Digital Marketing & Strategy Agency</title>
        <meta name="description" content="Unlock clarity and growth with Temmack Solutions. We help brands scale using strategy, copywriting, SEO, performance marketing, and automation. Simplicity that leaves a mark." />
        <meta name="keywords" content="digital marketing, copywriting, SEO services, automation, Temmack Solutions, marketing agency Nigeria, growth marketing, AI prompt engineering" />
        <meta property="og:title" content="Temmack – Result-Driven Digital Marketing & Strategy Agency" />
        <meta property="og:description" content="Unlock clarity and growth with Temmack Solutions. We help brands scale using strategy, copywriting, SEO, performance marketing, and automation." />
        <meta property="og:url" content="https://www.temmack.com.ng" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.temmack.com.ng/assets/og-banner.jpg" />
      </Helmet>

      {/* Banner */}
      <RealisticModelBanner />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-white to-accent/5">
        <div className="max-w-4xl mx-auto text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-black mb-6 text-secondary"
          >
            Clarity Changes <span className="text-primary">Everything</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8 text-gray-700 max-w-2xl mx-auto"
          >
            You're not invisible — you're just unclear. We help brands speak boldly, sell better, and grow with direction.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link
              to="/contact"
              className="inline-flex items-center bg-primary text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-primary/90 transition-all shadow-xl group"
            >
              Let's Create Clarity Together
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Service Cards */}
      <ServiceCards />

      {/* About Section */}
      {/* ... All the rest of your content remains the same */}
      {/* ... Team, Philosophy, Testimonials, Services, Contact Section */}
      <ProfessionalTeamSection />
      <section id="services" className="py-20 bg-background">
        <ServiceImageGrid />
      </section>
    </div>
  );
};

export default Home;
