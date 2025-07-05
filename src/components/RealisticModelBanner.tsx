import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const RealisticModelBanner = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const businessImages = [
    {
      url: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
      alt: 'Professional business team collaboration'
    },
    {
      url: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
      alt: 'Strategic planning and communication'
    },
    {
      url: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
      alt: 'Digital marketing and technology'
    },
    {
      url: 'https://images.pexels.com/photos/3184294/pexels-photo-3184294.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
      alt: 'Creative content strategy session'
    },
    {
      url: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
      alt: 'Professional copywriting and design'
    }
  ];

  // Auto-switch images every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % businessImages.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [businessImages.length]);

  return (
    <div className="relative h-[70vh] overflow-hidden">
      {/* Background Image Switcher */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <img
              src={businessImages[currentImageIndex].url}
              alt={businessImages[currentImageIndex].alt}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30"></div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Image Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {businessImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentImageIndex 
                ? 'bg-white scale-125' 
                : 'bg-white/50 hover:bg-white/75'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default RealisticModelBanner;