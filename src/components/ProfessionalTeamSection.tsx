import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

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

const ProfessionalTeamSection: React.FC = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  const teamMembers: TeamMember[] = [
    {
      name: 'Johanson Fred',
      title: 'SEO & Social Media Strategist',
      description:
        'Bridges the gap between visibility and value through strategic content optimization and search-driven storytelling.',
      image: '/team/Fred Johanson.jpg',
      imageWebP: '/team/Fred Johanson.webp',
      imageSrcSet: '/team/Fred Johanson.jpg 300w, /team/Fred Johanson@2x.jpg 600w',
    },
    {
      name: 'Jennifer Omawumi',
      title: 'Digital Marketer',
      description:
        'Architects growth strategies through data-driven campaigns and conversion-focused messaging that delivers measurable results.',
      image: '/team/Jenifer Omashola.png',
      imageWebP: '/team/Jenifer Omashola.webp',
      imageSrcSet: '/team/Jenifer Omashola.png 300w, /team/Jenifer Omashola@2x.png 600w',
    },
    {
      name: "Lex O'Brien",
      title: 'Chief HOD, AI Prompt Engineer',
      description:
        'Engineers AI-powered marketing systems that scale human creativity while maintaining authentic brand voice.',
      image: "/team/Lex O'Brien.png",
      imageWebP: "/team/Lex O'Brien.webp",
      imageSrcSet: "/team/Lex O'Brien.png 300w, /team/Lex O'Brien@2x.png 600w",
    },
    {
      name: 'David Akpovogaga',
      title: 'UX/UI Designer & DevOps',
      description:
        'Crafts digital experiences that seamlessly blend aesthetic excellence with psychological conversion principles.',
      image: '/team/Akpovogaga David.png',
      imageWebP: '/team/Akpovogaga David.webp',
      imageSrcSet: '/team/Akpovogaga David.png 300w, /team/Akpovogaga David@2x.png 600w',
    },
    {
      name: 'Tolulope Ajayi Grace',
      title: 'Senior Content Strategist',
      description:
        'Transforms complex business challenges into clear, compelling narratives that resonate with audiences and drive action.',
      image: '/team/Tolulope Ajayi Grace.png',
      imageWebP: '/team/Tolulope Ajayi Grace.webp',
      imageSrcSet:
        '/team/Tolulope Ajayi Grace.png 300w, /team/Tolulope Ajayi Grace@2x.png 600w',
    },
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
                custom_parameter_1: memberName,
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-8">
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
              <div className="relative w-full aspect-square max-w-[18rem] mx-auto mb-6 overflow-hidden rounded-2xl">
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
      </div>
    </section>
  );
};

export default ProfessionalTeamSection;
