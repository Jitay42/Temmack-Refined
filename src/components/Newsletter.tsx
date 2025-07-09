'use client';

import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Mail, CheckCircle } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const { t } = useTranslation();

  const FORM_ENDPOINT = 'https://formspree.io/f/mvgrnozr'; // Your actual Formspree endpoint

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setSubmitted(true);
        setEmail('');
      } else {
        console.error('Form submission error:', res.statusText);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  // Hide confirmation after 3 seconds
  useEffect(() => {
    if (submitted) {
      const timer = setTimeout(() => setSubmitted(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [submitted]);

  return (
    <div className="bg-primary py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Mail className="w-12 h-12 text-white mx-auto mb-6" />
        <h3 className="text-2xl font-bold text-white mb-4">
          Stay Clear, Stay Ahead
        </h3>
        <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
          Get weekly insights on clarity, strategy, and communication that converts.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={t('newsletter.placeholder')}
            className="flex-1 px-6 py-4 rounded-full border-0 focus:ring-2 focus:ring-white/50 text-secondary"
            required
          />
          <button
            type="submit"
            className="px-8 py-4 bg-white text-primary rounded-full font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap"
          >
            {t('newsletter.subscribe')}
          </button>
        </form>

        {/* ✅ Confirmation Message */}
        {submitted && (
          <div className="mt-4 flex items-center justify-center gap-2 text-green-500 bg-green-50 border border-green-300 rounded-full px-4 py-2 text-sm font-medium">
            <CheckCircle className="w-4 h-4" />
            <span>Welcome! We’ll send you only the good stuff—clear strategies, real results.</span>
          </div>
        )}

        <p className="text-sm text-white/70 mt-4">
          {t('newsletter.microcopy')}
        </p>
      </div>
    </div>
  );
};

export default Newsletter;
