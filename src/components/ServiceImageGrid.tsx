import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const services = [
  {
    title: 'UX Copywriting',
    caption: 'Words that guide and convert',
    image: 'https://images.pexels.com/photos/3184300/pexels-photo-3184300.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    title: 'Email Marketing',
    caption: 'Reach inboxes with impact',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    title: 'Content Strategy',
    caption: 'Clarity from top to bottom',
    image: 'https://images.pexels.com/photos/3184191/pexels-photo-3184191.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    title: 'Brand Strategy',
    caption: 'Shape your voice',
    image: 'https://images.pexels.com/photos/3183186/pexels-photo-3183186.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    title: 'AI Prompt Systems',
    caption: 'Work faster, stay human',
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    title: 'Social Media',
    caption: 'Grow with intention',
    image: 'https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg?auto=compress&cs=tinysrgb&w=800'
  }
];

const ServiceImageGrid = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-20">
      <div className="text-center mb-12">
        <motion.h2
          className="text-4xl font-bold text-secondary"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          What We Do
        </motion.h2>
        <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
          Practical services that simplify your message and scale your business.
        </p>
      </div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="relative rounded-3xl overflow-hidden shadow-lg group cursor-pointer"
          >
            <img
              src={service.image}
              alt={service.title}
              className="object-cover w-full h-64 group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center px-4">
              <h3 className="text-white text-2xl font-bold mb-2">{service.title}</h3>
              <p className="text-white text-sm mb-4">{service.caption}</p>
              <Link
                to="/contact"
                className="bg-white text-secondary px-4 py-2 rounded-full font-semibold shadow hover:bg-gray-100 transition-colors"
              >
                Let’s Work Together →
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ServiceImageGrid;
