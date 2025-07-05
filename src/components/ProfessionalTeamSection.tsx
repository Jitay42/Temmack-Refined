import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Loader2 } from 'lucide-react';

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

interface TeamMember {
  name: string;
  title: string;
  description: string;
  image: string;
  imageWebP?: string;
  imageSrcSet?: string;
}

interface FormData {
  name: string;
  email: string;
  message: string;
  newsletter: boolean;
}

const ProfessionalTeamSection: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
    newsletter: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [submitMessage, setSubmitMessage] = useState('');
  const observerRef = useRef<IntersectionObserver | null>(null);

  const teamMembers: TeamMember[] = [
    {
      name: 'Johanson Fred',
      title: 'SEO & Social Media Strategist',
      description: 'Bridges the gap between visibility and value through strategic content optimization and search-driven storytelling.',
      image: '/team/Fred Johanson.jpg',
      imageWebP: '/team/Fred Johanson.webp',
      imageSrcSet: '/team/Fred Johanson.jpg 300w, /team/Fred Johanson@2x.jpg 600w'
    },
    {
      name: 'Jennifer Omawumi',
      title: 'Digital Marketer',
      description: 'Architects growth strategies through data-driven campaigns and conversion-focused messaging that delivers measurable results.',
      image: '/team/Jenifer Omashola.png',
      imageWebP: '/team/Jenifer Omashola.webp',
      imageSrcSet: '/team/Jenifer Omashola.png 300w, /team/Jenifer Omashola@2x.png 600w'
    },
    {
      name: 'Lex O\'Brien',
      title: 'Chief HOD, AI Prompt Engineer',
      description: 'Engineers AI-powered marketing systems that scale human creativity while maintaining authentic brand voice.',
      image: '/team/Lex O\'Brien.png',
      imageWebP: '/team/Lex O\'Brien.webp',
      imageSrcSet: '/team/Lex O\'Brien.png 300w, /team/Lex O\'Brien@2x.png 600w'
    },
    {
      name: 'David Akpovogaga',
      title: 'UX/UI Designer & DevOps',
      description: 'Crafts digital experiences that seamlessly blend aesthetic excellence with psychological conversion principles.',
      image: '/team/Akpovogaga David.png',
      imageWebP: '/team/Akpovogaga David.webp',
      imageSrcSet: '/team/Akpovogaga David.png 300w, /team/Akpovogaga David@2x.png 600w'
    },
    {
      name: 'Tolulope Ajayi Grace',
      title: 'Senior Content Strategist',
      description: 'Transforms complex business challenges into clear, compelling narratives that resonate with audiences and drive action.',
      image: '/team/Tolulope Ajayi Grace.png',
      imageWebP: '/team/Tolulope Ajayi Grace.webp',
      imageSrcSet: '/team/Tolulope Ajayi Grace.png 300w, /team/Tolulope Ajayi Grace@2x.png 600w'
    }
  ];

  // Analytics tracking for team member visibility
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const memberName = entry.target.getAttribute('data-member-name');
            if (memberName && window.gtag) {
              window.gtag('event', 'team_member_view', {
                event_category: 'engagement',
                event_label: memberName,
                custom_parameter_1: memberName
              });
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  // Attach observer to team member cards
  const attachObserver = (element: HTMLElement | null, memberName: string) => {
    if (element && observerRef.current) {
      element.setAttribute('data-member-name', memberName);
      observerRef.current.observe(element);
    }
  };

  // Form handling
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (isSubmitting) return; // Prevent double submissions
    
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('https://formspree.io/f/mvgrnozr', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          newsletter: formData.newsletter
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        if (formData.newsletter) {
          setSubmitMessage("You've successfully subscribed to our newsletter!");
        } else {
          setSubmitMessage("Thank you for your submission! We'll be in touch soon.");
        }
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          message: '',
          newsletter: false
        });

        // Track successful submission
        if (window.gtag) {
          window.gtag('event', 'form_submit', {
            event_category: 'engagement',
            event_label: 'team_contact_form'
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

  return (
    <section 
      className="py-20 lg:py-24" 
      style={{ backgroundColor: '#000000' }}
      role="region"
      aria-labelledby="team-heading"
    >
      <div className="max-w-[1200px] mx-auto px-6 lg:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            id="team-heading"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-bold text-white mb-6"
          >
            Meet the Clarity Crew
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Five strategists, one mission: helping you communicate with purpose and precision.
          </motion.p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              ref={(el) => attachObserver(el, member.name)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group transform hover:scale-105"
              aria-label={`${member.name} - ${member.title}`}
            >
              {/* Image Container */}
              <div className="relative w-72 h-72 mx-auto mb-6 overflow-hidden rounded-2xl">
                <picture>
                  {member.imageWebP && (
                    <source srcSet={member.imageWebP} type="image/webp" />
                  )}
                  <img
                    src={member.image}
                    srcSet={member.imageSrcSet}
                    alt={`${member.name} - ${member.title}`}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    style={{ minWidth: '300px', minHeight: '300px' }}
                  />
                </picture>
              </div>

              {/* Content */}
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {member.name}
                </h3>
                <p className="text-blue-600 font-semibold mb-4 text-sm">
                  {member.title}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {member.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl p-8 lg:p-12 max-w-4xl mx-auto"
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Work with Our Team?
            </h3>
            <p className="text-lg text-gray-600">
              Let's discuss how we can help transform your communication strategy.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6" aria-busy={isSubmitting}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors disabled:opacity-50"
                  aria-describedby="name-error"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors disabled:opacity-50"
                  aria-describedby="email-error"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                value={formData.message}
                onChange={handleInputChange}
                disabled={isSubmitting}
                placeholder="Tell us about your project and how we can help..."
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-vertical disabled:opacity-50"
                aria-describedby="message-error"
              />
            </div>

            <div className="flex items-center space-x-3">
              <input
                type="checkbox"
                id="newsletter"
                name="newsletter"
                checked={formData.newsletter}
                onChange={handleInputChange}
                disabled={isSubmitting}
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 disabled:opacity-50"
              />
              <label htmlFor="newsletter" className="text-sm text-gray-600">
                Subscribe to our newsletter for weekly insights
              </label>
            </div>

            {/* Submit Status Messages */}
            {submitStatus !== 'idle' && (
              <div
                className={`p-4 rounded-xl ${
                  submitStatus === 'success' 
                    ? 'bg-green-50 text-green-800 border border-green-200' 
                    : 'bg-red-50 text-red-800 border border-red-200'
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
              className="w-full bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-[1.02] shadow-lg flex items-center justify-center space-x-3"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>Submitting...</span>
                </>
              ) : (
                <>
                  <span>Send Message</span>
                  <ArrowRight className="w-5 h-5" />
                </>
              )}
            </button>
          </form>
        </motion.div>

        {/* CTA Links */}
        <div className="text-center mt-12 space-y-4">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/services"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition-colors space-x-2"
            >
              <span>What We Do</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            
            <Link
              to="/contact"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-white text-blue-600 border-2 border-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-colors space-x-2"
            >
              <span>Contact Form</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalTeamSection;