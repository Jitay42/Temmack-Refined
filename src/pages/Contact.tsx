import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Phone, MapPin, Clock, Send, Upload, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
  const { t } = useTranslation();

  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    if (name === 'country' && value !== 'Other') {
      setFormData({ ...formData, [name]: value, otherCountry: '' });
    } else {
