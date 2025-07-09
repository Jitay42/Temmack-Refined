'use client';

import React, { useState } from 'react';
import { Phone, MapPin, Clock, Send, Upload, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    projectType: '',
    company: '',
    companyAddress: '',
    phone: '',
    email: '',
    country: '',
    otherCountry: '',
    howHeard: '',
    serviceSelection: [] as string[],
    message: '',
    file: null as File | null,
  });

  const [expandedServices, setExpandedServices] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);

  const countries = [
    'Nigeria', 'United States', 'United Kingdom', 'Canada', 'Australia',
    'South Africa', 'Kenya', 'Ghana', 'France', 'Germany', 'Spain',
    'Brazil', 'Mexico', 'India', 'China', 'Japan', 'Other'
  ];

  const howHeardOptions = [
    'Google Search', 'Social Media', 'Referral', 'LinkedIn', 'Facebook',
    'Instagram', 'Blog/Article', 'Conference/Event', 'Other'
  ];

  const serviceOptions = {
    'Digital & UX Copywriting': [
      'Website Copy', 'UX Microcopy', 'SaaS Product Copy', 'Landing Pages', 'Brand Messaging'
    ],
    'Email Marketing': [
      'Funnel Strategy', 'Email Copy', 'Automation Setup', 'Cold Outreach'
    ],
    'SEO & Content': [
      'Blog SEO', 'Keyword Research', 'Content Strategy', 'SEO Audits'
    ],
    'Brand Strategy': [
      'Messaging Clarity', 'Voice Development', 'Strategic Audits'
    ],
    'AI Prompt Systems': [
      'Prompt Workflows', 'Chatbot Scripts', 'GPT Tool Design'
    ],
    'Social Media': [
      'Ad Copy', 'Campaign Captions', 'Optimization'
    ]
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await fetch('https://formspree.io/f/mvgrnozr', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      setSubmitted(true);
    } catch (err) {
      console.error('Error submitting:', err);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    if (name === 'country' && value !== 'Other') {
      setFormData({ ...formData, [name]: value, otherCountry: '' });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData({ ...formData, file });
  };

  const toggleServiceExpansion = (service: string) => {
    setExpandedServices(prev =>
      prev.includes(service) ? prev.filter(s => s !== service) : [...prev, service]
    );
  };

  const handleServiceSelection = (service: string, subService?: string) => {
    const serviceKey = subService ? `${service}: ${subService}` : service;
    setFormData(prev => ({
      ...prev,
      serviceSelection: prev.serviceSelection.includes(serviceKey)
        ? prev.serviceSelection.filter(s => s !== serviceKey)
        : [...prev.serviceSelection, serviceKey]
    }));
  };

  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-white to-accent/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-6">
              <img 
                src="/logo/Tmk logo.png" 
                alt="Temmack Logo" 
                className="w-12 h-12 object-contain brightness-0 invert"
              />
            </div>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-6xl font-black text-secondary mb-6"
          >
            Transform Your Business Communication
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto"
          >
            Ready to turn confusion into clarity? Let's craft messaging that converts prospects into loyal customers.
          </motion.p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            
            {/* LEFT CONTACT INFO */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-1"
            >
              <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
                {/* ... your original left info code remains here ... */}
                <h2 className="text-2xl font-bold text-secondary mb-8">
                  Get in Touch
                </h2>
                {/* ... your icons and text ... */}
                {/* (I’m leaving this part out for brevity—it stays exactly as you have it) */}
              </div>
            </motion.div>

            {/* RIGHT FORM OR CONFIRMATION */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-2"
            >
              <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
                {submitted ? (
                  <div className="flex flex-col items-center justify-center text-center bg-green-50 border border-green-300 rounded-3xl p-12 shadow-lg">
                    <svg
                      className="w-20 h-20 text-green-500 mb-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <h2 className="text-4xl md:text-5xl font-bold text-green-700 mb-4">
                      Your message is with us!
                    </h2>
                    <p className="text-lg md:text-xl text-green-600 max-w-2xl">
                      We'll respond with clarity and direction soon. Thanks for trusting Temmack to help you communicate with purpose.
                    </p>
                  </div>
                ) : (
                  <>
                    <div className="mb-8">
                      <h2 className="text-2xl font-bold text-secondary mb-2">
                        Start Your Clarity Journey
                      </h2>
                      <p className="text-gray-600">
                        Tell us about your project and let's create something amazing together.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* ALL YOUR FIELDS GO HERE */}
                      {/* exactly as you already have them */}
                      {/* Don't remove your input fields */}
                      {/* Keep them intact */}
                    </form>
                  </>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
