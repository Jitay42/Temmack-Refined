import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

interface Service {
    title: string;
    category: string;
    shortDesc: string;
    fullDesc: string;
}

const services: Service[] = [
    {
        title: 'Digital & UX Copywriting',
        category: 'Copy & Messaging',
        shortDesc:
            'Website Copy, Product Copy, Microcopy, and Brand Messaging.',
        fullDesc:
            "We don't just write — we engineer words that sell. From crisp website copy to strategic UX microcopy and persuasive landing pages, our writing aligns with your audience’s psychology, helping you convert readers into buyers without sounding robotic or generic.",
    },
    {
        title: 'Email Marketing',
        category: 'Automation',
        shortDesc: 'Flows, Campaigns, Drip Sequences, and Retention Emails.',
        fullDesc:
            'Emails that don’t go to spam or straight to trash. We build behavioral email flows and launch sequences that feel personal, timely, and drive actual ROI. Ideal for nurturing leads, recovering carts, and building long-term brand trust.',
    },
    {
        title: 'Content Strategy',
        category: 'Growth & Positioning',
        shortDesc:
            'SEO articles, Funnel content, Brand pillars, Messaging plans.',
        fullDesc:
            'We help you stop publishing fluff. Our content strategies are built for clarity, structure, and ranking — not just likes. We align every word with your brand voice, customer journey, and long-term goals.',
    },
    {
        title: 'Brand Strategy',
        category: 'Identity & Voice',
        shortDesc: 'Messaging blueprint, Brand story, Core voice & tone.',
        fullDesc:
            'We dig into your essence — what you do, why it matters, and how to say it. Then we shape your tone of voice, storytelling style, and brand foundation so you sound like *you*, not everyone else.',
    },
    {
        title: 'AI Prompt Systems',
        category: 'Automation & Scale',
        shortDesc:
            'Custom AI systems for content, copy, support, and marketing.',
        fullDesc:
            'We build practical prompt systems that help your team create faster, sell smarter, and automate intelligently — while staying on-brand. Ideal for solopreneurs, startups, or growing teams tired of repetitive writing and clunky tools.',
    },
    {
        title: 'Social Media',
        category: 'Visibility & Engagement',
        shortDesc:
            'Content calendars, Copy, Design structure, and Engagement flows.',
        fullDesc:
            'We help you stop posting randomly. Our systems guide your content flow, brand tone, and posting rhythm to build loyal followers and generate real conversations — not just vanity metrics.',
    },
];

const ServicesSection = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const navigate = useNavigate();

    const toggleCard = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const handleCTA = () => {
        navigate('/contact');
    };

    return (
        <section id="services" className="py-20 bg-gray-50">
            {' '}
            <div className="max-w-6xl mx-auto px-6">
                {' '}
                <div className="text-center mb-12">
                    {' '}
                    <motion.h2
                        className="text-4xl font-bold text-gray-900"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        {' '}
                        What We Do{' '}
                    </motion.h2>{' '}
                    <p className="mt-4 text-gray-600 text-lg max-w-xl mx-auto">
                        {' '}
                        Strategic services that simplify how you communicate,
                        scale, and grow.{' '}
                    </p>{' '}
                </div>
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            layout
                            onClick={() => toggleCard(index)}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className={`cursor-pointer bg-white border hover:border-red-500 rounded-2xl shadow-lg p-6 transition-all ${
                                activeIndex === index
                                    ? 'ring-2 ring-red-500'
                                    : ''
                            }`}
                        >
                            <h3 className="text-xl font-bold text-gray-800 mb-1">
                                {service.title}
                            </h3>
                            <span className="text-sm text-red-500 font-medium">
                                {service.category}
                            </span>
                            <p className="text-gray-600 mt-2">
                                {service.shortDesc}
                            </p>

                            <AnimatePresence>
                                {activeIndex === index && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        exit={{ opacity: 0, height: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="mt-4"
                                    >
                                        <p className="text-sm text-gray-700 leading-relaxed mb-4">
                                            {service.fullDesc}
                                        </p>
                                        <button
                                            onClick={handleCTA}
                                            className="bg-red-500 text-white px-5 py-2 rounded-full font-semibold shadow hover:bg-red-600"
                                        >
                                            Let’s Work Together →
                                        </button>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
