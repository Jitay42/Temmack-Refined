import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Instagram, Phone, MapPin, Clock, Send, Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    projectType: '',
    company: '',
    phone: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [submitMessage, setSubmitMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (isSubmitting) return;
    
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('https://formspree.io/f/mvgrnozr', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          projectType: formData.projectType,
          company: formData.company,
          phone: formData.phone,
          email: formData.email,
          message: formData.message
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setSubmitMessage("Thank you for your submission! We'll be in touch soon.");
        
        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          projectType: '',
          company: '',
          phone: '',
          email: '',
          message: ''
        });

        // Track successful submission
        if (window.gtag) {
          window.gtag('event', 'form_submit', {
            event_category: 'engagement',
            event_label: 'footer_contact_form'
          });
        }
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      setSubmitStatus('error');
      setSubmitMessage('Sorry, there was an error submitting your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // WhatsApp Icon Component
  const WhatsAppIcon = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.386"/>
    </svg>
  );

  // TikTok Icon Component
  const TikTokIcon = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
    </svg>
  );

  return (
    <footer className="bg-secondary text-white">
      {/* Get in Touch Section */}
      <section className="py-20 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-1"
            >
              <div className="bg-white/5 rounded-3xl p-8 backdrop-blur-sm border border-white/10">
                <h2 className="text-2xl font-bold text-white mb-8">
                  Get in Touch
                </h2>
                
                <div className="space-y-6 mb-12">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">Call Us</h3>
                      <p className="text-gray-300">+2349133167253</p>
                      <p className="text-sm text-gray-400">Available 9 AM - 6 PM WAT</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">Visit Us</h3>
                      <p className="text-gray-300">
                        3 Association Avenue, Eruwen,<br />
                        Ikorodu, Lagos, Nigeria
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">Response Time</h3>
                      <p className="text-gray-300">We'll respond within 24 hours</p>
                      <p className="text-sm text-gray-400">Usually much faster</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-primary/10 to-accent/10 p-6 rounded-2xl border border-white/10">
                  <h3 className="font-semibold text-white mb-4">What Happens Next?</h3>
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
                        <p className="text-gray-300 text-sm">{step}</p>
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
              <div className="bg-white/5 rounded-3xl p-8 backdrop-blur-sm border border-white/10">
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-white mb-2">
                    Start Your Clarity Journey
                  </h2>
                  <p className="text-gray-300">
                    Tell us about your project and let's create something amazing together.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-semibold text-white mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        required
                        value={formData.firstName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-white/20 rounded-xl focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors bg-white/10 text-white placeholder-gray-400"
                      />
                    </div>

                    <div>
                      <label htmlFor="lastName" className="block text-sm font-semibold text-white mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        required
                        value={formData.lastName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-white/20 rounded-xl focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors bg-white/10 text-white placeholder-gray-400"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="projectType" className="block text-sm font-semibold text-white mb-2">
                        What's Your Biggest Revenue Blocker? *
                      </label>
                      <select
                        id="projectType"
                        name="projectType"
                        required
                        value={formData.projectType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-white/20 rounded-xl focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors bg-white/10 text-white"
                      >
                        <option value="" className="bg-secondary text-white">Select your main challenge</option>
                        <option value="unclear-messaging" className="bg-secondary text-white">My message isn't clear enough</option>
                        <option value="low-conversions" className="bg-secondary text-white">My website isn't converting visitors</option>
                        <option value="content-strategy" className="bg-secondary text-white">I need a content strategy that works</option>
                        <option value="brand-voice" className="bg-secondary text-white">I need help defining my brand voice</option>
                        <option value="email-marketing" className="bg-secondary text-white">My email marketing needs improvement</option>
                        <option value="ai-integration" className="bg-secondary text-white">I want to integrate AI into my content</option>
                        <option value="complete-overhaul" className="bg-secondary text-white">I need a complete communication overhaul</option>
                        <option value="other" className="bg-secondary text-white">Something else entirely</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-sm font-semibold text-white mb-2">
                        Company Name *
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        required
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-white/20 rounded-xl focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors bg-white/10 text-white placeholder-gray-400"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-white mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+234 xxx xxx xxxx"
                        className="w-full px-4 py-3 border border-white/20 rounded-xl focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors bg-white/10 text-white placeholder-gray-400"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-white mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-white/20 rounded-xl focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors bg-white/10 text-white placeholder-gray-400"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-white mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      maxLength={10000}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project, goals, and how we can help..."
                      className="w-full px-4 py-3 border border-white/20 rounded-xl focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors resize-vertical bg-white/10 text-white placeholder-gray-400"
                    />
                    <p className="text-sm text-gray-400 mt-1">
                      {formData.message.length}/10,000 characters
                    </p>
                  </div>

                  {/* Submit Status Messages */}
                  {submitStatus !== 'idle' && (
                    <div
                      className={`p-4 rounded-xl ${
                        submitStatus === 'success' 
                          ? 'bg-green-500/20 text-green-300 border border-green-500/30' 
                          : 'bg-red-500/20 text-red-300 border border-red-500/30'
                      }`}
                      role="alert"
                      aria-live="polite"
                    >
                      {submitMessage}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-primary to-accent text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-primary/90 hover:to-accent/90 transition-all duration-500 transform hover:scale-[1.02] shadow-lg flex items-center justify-center space-x-3 group disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>Submitting...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        <span>Start Your Transformation</span>
                      </>
                    )}
                  </button>

                  <p className="text-sm text-gray-400 text-center">
                    We'll respond within 24 hours with next steps.
                  </p>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Column - Company Information */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="/logo/Tmk logo.png" 
                alt="Temmack Solutions Logo" 
                className="h-10 w-auto brightness-0 invert"
              />
              <div>
                <span className="text-xl font-bold">Temmack™ Solutions</span>
                <p className="text-sm text-gray-300">Simplicity That Leaves a Mark</p>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Founded in 2024 to simplify strategic marketing. We help brands remove confusion 
              from their message and marketing through clarity-first communication.
            </p>

            <div className="mb-6">
              <h4 className="font-semibold mb-2 text-white">Email</h4>
              <a 
                href="mailto:info@temmack.com.ng" 
                className="text-gray-300 hover:text-white transition-colors"
              >
                info@temmack.com.ng
              </a>
            </div>
          </div>

          {/* Center Column - Navigation Links */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Navigation</h4>
            <ul className="space-y-2 text-gray-300">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/blog" className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link to="/citable-pen" className="hover:text-white transition-colors">Citable-Pen</Link></li>
              <li><Link to="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>

            <h4 className="font-semibold mb-4 text-white mt-8">Legal</h4>
            <ul className="space-y-2 text-gray-300">
              <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link></li>
            </ul>
          </div>

          {/* Right Column - Social Media & Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Connect With Us</h4>
            
            <div className="flex space-x-4 mb-8">
              <a 
                href="https://wa.me/2349133167253" 
                target="_blank"
                rel="noopener noreferrer"
                title="Message Temmack on WhatsApp"
                className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white hover:bg-green-700 transition-colors"
              >
                <WhatsAppIcon className="w-5 h-5" />
              </a>
              <a 
                href="https://instagram.com/temmack_solutions" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white hover:from-purple-600 hover:to-pink-600 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://tiktok.com/@theaicopyguy" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white hover:bg-gray-800 transition-colors"
              >
                <TikTokIcon className="w-5 h-5" />
              </a>
            </div>

            <div className="space-y-4">
              <div>
                <h5 className="font-semibold text-white mb-2">Phone</h5>
                <a 
                  href="tel:+2349133167253" 
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  +2349133167253
                </a>
              </div>
              
              <div>
                <h5 className="font-semibold text-white mb-2">Address</h5>
                <p className="text-gray-300">
                  3 Association Avenue, Eruwen,<br />
                  Ikorodu, Lagos, Nigeria
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center text-gray-400 mt-12">
          <p>{t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;