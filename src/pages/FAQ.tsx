import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const faqs = [
  {
    question: 'What services does Temmack offer?',
    answer:
      'Temmack provides a range of services including digital marketing, content strategy, SEO, email marketing, and UX copywriting. Each service is tailored to help businesses grow their online presence effectively.',
  },
  {
    question: 'How do I get started with Temmack?',
    answer:
      'Getting started is easy! Just visit our Contact page and fill out the form with your project details. We’ll get back to you promptly with the next steps.',
  },
  {
    question: 'Is Temmack suitable for international clients?',
    answer:
      'Absolutely. Temmack is designed to serve clients across Africa, North America, Asia, and Europe. Our team understands diverse markets and can adapt strategies to fit various cultural and business environments.',
  },
  {
    question: 'Can I request a custom service package?',
    answer:
      'Yes, we offer flexible service packages based on your unique business needs. You can either select from our standard services or request a tailored plan through our contact form.',
  },
];

const FAQ = () => {
  return (
    <>
      <Helmet>
        <title>FAQ – Temmack</title>
        <meta name="description" content="Frequently asked questions about Temmack’s services, onboarding process, and client support." />
      </Helmet>

      <section className="pt-28 pb-16 px-4 md:px-20 bg-background text-foreground">
        <div className="text-center mb-14">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We’ve compiled answers to common questions about working with Temmack. If you need further help, don’t hesitate to reach out.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-10">
          {faqs.map((faq, index) => (
            <div key={index}>
              <h2 className="text-xl font-semibold mb-2">{faq.question}</h2>
              <p className="text-muted-foreground">{faq.answer}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center space-y-6">
          <h3 className="text-2xl font-semibold">Still have questions?</h3>
          <p className="text-muted-foreground">We’re happy to help. Reach out to us directly.</p>

          <div className="flex justify-center gap-4 flex-wrap">
            <Link
              to="/contact"
              className="bg-primary text-white px-8 py-4 rounded-full font-semibold hover:bg-primary/90 transition-colors"
            >
              Contact Us
            </Link>
            <a
              href="mailto:info@temmack.com.ng"
              className="flex items-center justify-center gap-2 bg-white text-primary border-2 border-primary px-8 py-4 rounded-full font-semibold hover:bg-primary/5 transition-colors"
            >
              <Mail className="w-5 h-5" />
              Email Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQ;
