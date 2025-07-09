import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Phone, MapPin, Clock, Send, Upload, ChevronDown, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const FORM_ENDPOINT = 'https://formspree.io/f/mvgrnozr';

const Contact = () => {
  const { t } = useTranslation();

  const [submitted, setSubmitted] = useState(false);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setSubmitted(true);
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
      } else {
        console.error('Error:', res.statusText);
      }
    } catch (error) {
      console.error('Error:', error);
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
    setExpa
