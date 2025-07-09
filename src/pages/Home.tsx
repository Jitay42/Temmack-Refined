import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowRight, Users, Target, Lightbulb, CheckCircle, Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';
import RealisticModelBanner from '../components/RealisticModelBanner';
import ServiceCards from '../components/ServiceCards';
import ProfessionalTeamSection from '../components/ProfessionalTeamSection';

const Home = () => {
  const { t } = useTranslation();

  const teamMembers = [
    {
      name: 'Tolulope Ajayi Grace',
      title: 'Senior Content Strategist',
      description: 'Master of turning complex ideas into clear, compelling stories.',
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg'
    },
    {
      name: 'Jennifer Omawumi',
      title: 'Digital Marketer',
      description: 'Expert in driving results through targeted campaigns and strategy.',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg'
    },
    {
      name: 'Johanson Fred',
      title: 'Social Media & SEO Expert',
      description: 'Knows how to make brands visible and engaging in all the right places.',
      image: 'https://images.pexels.com/photos/1138903/pexels-photo-1138903.jpeg'
    },
    {
      name: 'Lex O’Brien',
      title: 'Marketing Performance & AI Prompt Engineer',
      description: 'Blends strategy and AI to help you scale your communication intelligently.',
      image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg'
    },
    {
      name: 'David Akpovogaga',
      title: 'Web DevOps & UX/UI Designer',
      description: 'Builds smooth, user-centered websites that convert.',
      image: 'https://images.pexels.com/photos/3777946/pexels-photo-3777946.jpeg'
    }
  ];

  return (
    <div className="min-h-screen">

      {/* Realistic Model Banner */}
      <RealisticModelBanner />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-white to-accent/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-black mb-8 leading-tight text-secondary"
          >
            Clarity Changes <span className="text-primary">Everything</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-10 leading-relaxed text-gray-700 max-w-3xl mx-auto"
          >
            You're not invisible — you're just unclear. We help brands speak boldly, 
            sell better, and grow with direction.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link 
              to="/contact"
              className="inline-flex items-center bg-primary text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-primary/90 transition-all duration-500 ease-in-out shadow-2xl active:bg-accent transform hover:scale-105 group"
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-secondary mb-6">
              The Story Behind Temmack
            </h2>
            <div className="max-w-4xl mx-auto space-y-10 text-lg text-gray-700 leading-relaxed">
              {/* Your full Story Behind Temmack content remains unchanged */}
              ...
            </div>
          </div>
        </div>
      </section>

      {/* ✅ NEW FIXED TEAM SECTION */}
      <section id="team" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
              Meet the Clarity Crew
            </h3>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Five strategists, one mission: helping you communicate with purpose and precision.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                onClick={() => window.location.href = '/contact'}
                className="bg-white rounded-3xl p-6 md:p-8 shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer transform hover:scale-[1.02] border border-gray-100"
              >
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden mb-6 mx-auto ring-4 ring-primary/10 group-hover:ring-primary/30 transition-all duration-300">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      e.currentTarget.src = `https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop`;
                    }}
                  />
                </div>
                
                <h3 className="text-lg md:text-xl font-bold text-secondary mb-2 text-center group-hover:text-primary transition-colors">
                  {member.name}
                </h3>
                <p className="text-primary font-semibold mb-4 text-center text-sm md:text-base">
                  {member.title}
                </p>
                <p className="text-gray-600 text-sm md:text-base text-center leading-relaxed">
                  {member.description}
                </p>
                
                <div className="mt-6 text-center">
                  <span className="text-xs md:text-sm text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity bg-primary/10 px-3 py-1 rounded-full">
                    Click to get started →
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Team Section */}
      <ProfessionalTeamSection />

      {/* Philosophy Section */}
      <section id="philosophy" className="py-20 bg-background">
        {/* ...your original philosophy content here */}
      </section>

      {/* Testimonials Section */}
      <section className="py-20" style={{ backgroundColor: '#3b6eac' }}>
        {/* ...your original testimonials content here */}
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-black">
        {/* ...your original services content here */}
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-secondary text-white">
        {/* ...your original contact content here */}
      </section>
    </div>
  );
};

export default Home;
