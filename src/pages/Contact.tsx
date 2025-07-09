import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Phone, MapPin, Clock, Send, Upload, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
  const { t } = useTranslation();

  // 1️⃣ Original form data state
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

  // 2️⃣ New status state
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  // 3️⃣ Countries, options (unchanged)
  const countries = [];
  const howHeardOptions = [];
  const serviceOptions = {};

  // 4️⃣ Formspree submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const formDataToSend = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        if (Array.isArray(value)) {
          value.forEach(v => formDataToSend.append(`${key}[]`, v));
        } else if (value !== null) {
          formDataToSend.append(key, value as any);
        }
      });

      await fetch('https://formspree.io/f/mvgrnozr', {
        method: 'POST',
        body: formDataToSend,
        headers: { Accept: 'application/json' }
      });

      setStatus('sent');
      setFormData({
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
        serviceSelection: [],
        message: '',
        file: null
      });
    } catch (err) {
      console.error(err);
      setStatus('error');
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

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">

            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
                <h3 className="text-xl font-bold text-secondary mb-6">Get In Touch</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-secondary mb-1">Phone</h4>
                      <p className="text-gray-600">+1 (555) 123-4567</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-secondary mb-1">Location</h4>
                      <p className="text-gray-600">New York, NY</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-secondary mb-1">Response Time</h4>
                      <p className="text-gray-600">Within 24 hours</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl p-8 border border-primary/10">
                <h3 className="text-lg font-bold text-secondary mb-4">Why Choose Us?</h3>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Expert communication strategies</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span>Proven results across industries</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>24-hour response guarantee</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Main Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-2"
            >
              <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">

                {status === 'sent' ? (
                  <div className="bg-green-50 border border-green-200 rounded-3xl p-16 text-center shadow-lg">
                    <svg className="w-16 h-16 text-green-500 mx-auto mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <h2 className="text-4xl font-bold text-green-700 mb-4">Your message is with us</h2>
                    <p className="text-green-600 max-w-xl mx-auto">
                      Thanks for reaching out. We'll review your details and get back to you within 24 hours. Expect clarity soon!
                    </p>
                  </div>
                ) : (
                  <>
                    <div className="mb-8">
                      <h2 className="text-2xl font-bold text-secondary mb-2">Start Your Clarity Journey</h2>
                      <p className="text-gray-600">
                        Tell us about your project and let's create something amazing together.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* ALL your existing inputs here */}
                      ...
                      <button
                        type="submit"
                        disabled={status === 'sending'}
                        className="w-full bg-gradient-to-r from-primary to-accent text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-primary/90 hover:to-accent/90 transition-all duration-500 transform hover:scale-[1.02] shadow-lg flex items-center justify-center space-x-3 group"
                      >
                        <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        <span>{status === 'sending' ? 'Sending...' : 'Start Your Transformation'}</span>
                      </button>
                      <p className="text-sm text-gray-500 text-center">
                        We'll respond within 24 hours with next steps.
                      </p>
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