import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const services = [
  {
    title: 'Digital & UX Copywriting',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg',
    caption: 'Words that convert, UX that guides.'
  },
  {
    title: 'Email Marketing',
    image: 'https://images.pexels.com/photos/4050291/pexels-photo-4050291.jpeg',
    caption: 'Emails that get opened (and sell).'
  },
  {
    title: 'Content Strategy',
    image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg',
    caption: 'Content plans built to rank and convert.'
  },
  {
    title: 'Brand Strategy',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg',
    caption: 'Define your voice. Own your story.'
  },
  {
    title: 'AI Prompt Systems',
    image: 'https://images.pexels.com/photos/8386449/pexels-photo-8386449.jpeg',
    caption: 'Automate smart, stay on-brand.'
  },
  {
    title: 'Social Media',
    image: 'https://images.pexels.com/photos/5082579/pexels-photo-5082579.jpeg',
    caption: 'Content that connects and grows followers.'
  }
];

const ServiceImageGrid = () => {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-secondary mb-8">
          What We Do
        </h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          Explore our strategic services. Click any to get in touch about exactly what you need.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="overflow-hidden rounded-2xl shadow-lg border border-gray-200 bg-white"
            >
              <Link to={`/contact?service=${encodeURIComponent(service.title)}`}>
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold text-secondary">{service.title}</h3>
                  <p className="text-sm text-gray-600 mt-2">{service.caption}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceImageGrid;
