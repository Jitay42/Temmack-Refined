import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Phone, MapPin, Clock, Send, Upload, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
  const { t } = useTranslation();
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
    file: null as File | null
  });

  const [expandedServices, setExpandedServices] = useState<string[]>([]);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    if (name === 'country' && value !== 'Other') {
      setFormData({
        ...formData,
        [name]: value,
        otherCountry: ''
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData({
      ...formData,
      file
    });
  };

  const toggleServiceExpansion = (service: string) => {
    setExpandedServices(prev => 
      prev.includes(service) 
        ? prev.filter(s => s !== service)
        : [...prev, service]
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
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-1"
            >
              <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
                <h2 className="text-2xl font-bold text-secondary mb-8">
                  Get in Touch
                </h2>
                
                <div className="space-y-6 mb-12">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-secondary mb-1">Call Us</h3>
                      <p className="text-gray-600">+2349133167253</p>
                      <p className="text-sm text-gray-500">Available 9 AM - 6 PM WAT</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-secondary mb-1">Visit Us</h3>
                      <p className="text-gray-600">
                        3 Association Avenue, Eruwen,<br />
                        Ikorodu, Lagos, Nigeria
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-secondary mb-1">Response Time</h3>
                      <p className="text-gray-600">We'll respond within 24 hours</p>
                      <p className="text-sm text-gray-500">Usually much faster</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-primary/5 to-accent/5 p-6 rounded-2xl">
                  <h3 className="font-semibold text-secondary mb-4">What Happens Next?</h3>
                  <div className="space-y-3">
                    {[
                      'We review your message within 24 hours',
                      'Schedule a brief discovery call',
                      'Discuss your needs and potential solutions',
                      'Receive a clear proposal with next steps'
                    ].map((step, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-xs font-bold mt-0.5">
                          {index + 1}
                        </div>
                        <p className="text-gray-700 text-sm">{step}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-2"
            >
              <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-secondary mb-2">
                    Start Your Clarity Journey
                  </h2>
                  <p className="text-gray-600">
                    Tell us about your project and let's create something amazing together.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* your entire original input fields and form layout go here unchanged */}
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
