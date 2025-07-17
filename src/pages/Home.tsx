import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';
import RealisticModelBanner from '../components/RealisticModelBanner';
import ServiceCards from '../components/ServiceCards';
import ProfessionalTeamSection from '../components/ProfessionalTeamSection';
import ServiceImageGrid from '../components/ServiceImageGrid';  // ✅ NEW IMPORT

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
      <section id="about" className="py-20 bg-background">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-secondary mb-10">The Story Behind Temmack</h2>
          <div className="space-y-8 text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
            <p>
              We founded Temmack to help brands say what they mean—clearly and honestly. Too often, good ideas get buried under jargon and clutter. We wanted to change that.
            </p>
            <img
              src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Team brainstorming"
              className="rounded-lg shadow-lg mx-auto"
            />
            <p>
              Our mission is simple: make clarity a competitive advantage. Because when people understand you, they trust you. And when they trust you, they buy from you.
            </p>
            <p>
              We work with startups, SaaS companies, fintech brands, NGOs, and small businesses that want to connect with their audience in a real, human way.
            </p>
            <img
              src="https://images.pexels.com/photos/3184451/pexels-photo-3184451.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Collaboration"
              className="rounded-lg shadow-lg mx-auto"
            />
            <p>
              Our values? Clarity first. Empathy over ego. Strategic thinking. Honest work. Because effective communication isn't about sounding clever—it's about making sense.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <ProfessionalTeamSection />

      {/* Philosophy Section */}
      <section id="philosophy" className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-secondary mb-6">Why Clarity Matters</h2>
            <p className="text-lg text-gray-700 mb-8">
              In a noisy world, clarity isn't optional. It's your competitive edge. When your message is clear, your audience understands you without effort—and that leads to trust and action.
            </p>
            <div className="space-y-4 mb-8">
              {[
                'Strategy before words—every line has a purpose.',
                'Psychology-backed messaging that motivates.',
                'Conversion-focused UX that works beautifully.'
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-primary mt-1" />
                  <span className="text-lg text-secondary">{item}</span>
                </div>
              ))}
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center text-primary border-2 border-primary px-6 py-3 rounded-full font-semibold hover:bg-primary hover:text-white transition-colors duration-500 group"
            >
              Experience the Difference
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-primary/10 rounded-3xl p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-accent/20 rounded-full translate-y-12 -translate-x-12"></div>
              <div className="relative z-10">
                <blockquote className="text-2xl font-medium text-secondary mb-6 leading-relaxed">
                  "The best marketing feels like a helpful conversation with someone who understands your challenges."
                </blockquote>
                <div className="flex items-center space-x-3">
                  <img
                    src="/logo/Tmk logo.png"
                    alt="Temmack Logo"
                    className="w-12 h-12 object-contain brightness-0 invert rounded-full"
                  />
                  <div>
                    <p className="font-semibold text-secondary">The Temmack Philosophy</p>
                    <p className="text-gray-600 text-sm">Clarity in action</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20" style={{ backgroundColor: '#3b6eac' }}>
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">What Our Clients Say</h2>
          <p className="text-xl text-white/90 mb-12">
            Real results from real businesses who chose clarity over confusion.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 hover:bg-white/20 transition-all"
              >
                <div className="absolute top-4 right-4 opacity-20">
                  <Quote className="w-12 h-12 text-white" />
                </div>
                <div className="flex items-center mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-white mb-6 italic">"{t.comment}"</blockquote>
                <div className="border-t border-white/20 pt-4">
                  <h4 className="font-bold text-white">{t.name}</h4>
                  <p className="text-white/80 text-sm">{t.role}</p>
                  <p className="text-white/60 text-sm">{t.company}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ✅ NEW ServiceImageGrid Section WITH ID */}
      <section id="services">
        <ServiceImageGrid />
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-secondary text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-6">Ready to Start?</h2>
          <p className="text-xl mb-8">Let's talk about how we can help you communicate with clarity.</p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-white text-secondary px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-500 shadow-lg group"
          >
            Contact Us
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
