import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Users,
  Target,
  Lightbulb,
  CheckCircle,
  Star,
  Quote
} from 'lucide-react';

import RealisticModelBanner from '../components/RealisticModelBanner';
import ServiceCards from '../components/ServiceCards';
import ProfessionalTeamSection from '../components/ProfessionalTeamSection';

// Types
type Testimonial = {
  name: string;
  company: string;
  role: string;
  comment: string;
  rating: number;
};

type Service = {
  title: string;
  image: string;
};

const Home: React.FC = () => {
  const navigate = useNavigate();

  const testimonials: Testimonial[] = [
    {
      name: 'Sarah Chen',
      company: 'TechFlow Solutions',
      role: 'CEO',
      comment:
        'Temmack transformed our entire communication strategy. Our conversion rates increased by 340% within 3 months. Their clarity-first approach is revolutionary.',
      rating: 5
    },
    {
      name: 'Marcus Johnson',
      company: 'InnovateLab',
      role: 'Marketing Director',
      comment:
        'Working with Temmack was a game-changer. They helped us find our voice and communicate our complex AI solutions in a way that actually resonates with our audience.',
      rating: 5
    },
    {
      name: 'Priya Patel',
      company: 'CloudVault',
      role: 'Founder',
      comment:
        "The team at Temmack doesn't just write copy - they craft strategic communication that drives real business results. Our email open rates doubled overnight.",
      rating: 5
    }
  ];

  const services: Service[] = [
    {
      title: 'Digital & UX Copywriting',
      image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    },
    {
      title: 'Email Marketing & Automation',
      image: 'https://images.pexels.com/photos/4439901/pexels-photo-4439901.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    },
    {
      title: 'Content Strategy & SEO',
      image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    },
    {
      title: 'Brand Strategy & Messaging',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    },
    {
      title: 'AI Prompt Systems',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    },
    {
      title: 'Social Media Strategy',
      image: 'https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Realistic Banner */}
      <RealisticModelBanner />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-white to-accent/5">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-black mb-8 leading-tight text-secondary"
          >
            Clarity Changes <span className="text-primary">Everything</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-10 leading-relaxed text-gray-700 max-w-3xl mx-auto"
          >
            You're not invisible — you're just unclear. We help brands speak boldly, sell better, and grow with direction.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <button
              onClick={() => navigate('/contact')}
              className="inline-flex items-center bg-primary text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-primary/90 transition-all duration-500 ease-in-out shadow-2xl active:bg-accent transform hover:scale-105 group"
            >
              Let's Create Clarity Together
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Service Cards */}
      <ServiceCards />

      {/* About Story Section */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-8">The Story Behind Temmack</h2>
          <div className="space-y-8 text-lg leading-relaxed text-gray-800">

            {/* Each story block with image and text */}
            {[
              {
                img: 'thinking,frustration',
                content: (
                  <>
                    <p>It started with a feeling—a constant itch that something about how brands communicate was off.</p>
                    <blockquote className="border-l-4 border-red-500 pl-4 italic">
                      “Why is this so complicated? Why does it feel like they’re talking, but not really saying anything?”
                    </blockquote>
                    <p>That frustration didn’t go away. In fact, it got louder.</p>
                    <p>In a world flooded with content and tools, most businesses were still struggling to say what they do, why it matters, and how they help. The problem wasn’t a lack of talent or ambition. It was a lack of clarity. And that’s where the idea for Temmack was born.</p>
                  </>
                )
              },
              {
                img: 'teamwork,planning',
                title: 'In 2024: The Beginning',
                content: (
                  <>
                    <p>In 2024, we founded Temmack with a simple mission:</p>
                    <blockquote className="border-l-4 border-red-500 pl-4 italic">
                      Help businesses say what they mean, mean what they say, and connect authentically with the people they serve.
                    </blockquote>
                    <p>No more empty slogans. No more complicated jargon. Just clear, honest, effective communication that actually works.</p>
                  </>
                )
              },
              {
                img: 'clarity,focus',
                title: 'From Confusion to Clarity',
                content: (
                  <>
                    <p>Temmack didn’t start as a big agency or a trend-chasing marketing outfit. It started with a question:</p>
                    <blockquote className="border-l-4 border-red-500 pl-4 italic">
                      “What if we built a team focused on helping brands say less, but mean more?”
                    </blockquote>
                    <p>The kind of team that wouldn’t just write copy, but craft messaging that sticks. The kind of partner that doesn’t just “do digital,” but helps clients think sharper and grow smarter. The kind of service that prioritizes clarity, simplicity, and strategy—because that’s what drives trust and results.</p>
                  </>
                )
              },
              {
                img: 'vision,light',
                title: 'Our Vision',
                content: (
                  <>
                    <p>Our vision is bold yet simple:</p>
                    <blockquote className="border-l-4 border-red-500 pl-4 italic">
                      To make clarity a competitive advantage.
                    </blockquote>
                    <p>We believe that in a world full of noise, the brands that speak clearly will be the ones that win. Clarity isn’t a nice-to-have. It’s what separates the brands people remember from the ones they ignore.</p>
                  </>
                )
              },
              {
                img: 'idea,lightbulb',
                title: 'Why the Name Temmack?',
                content: (
                  <p>Temmack stands for a mindset. It’s the belief that simplicity leaves a mark—not filler, not noise, not clever-sounding jargon. It’s also a nod to the kind of people we love working with: those who are serious about getting better at how they communicate, connect, and convert.</p>
                )
              }
            ].map((block, i) => (
              <div key={i}>
                <img
                  src={`https://source.unsplash.com/800x400/?${block.img}`}
                  alt={block.title || 'Temmack story'}
                  className="w-full rounded-lg mb-4"
                />
                {block.title && <h3 className="text-2xl font-semibold mb-2">{block.title}</h3>}
                {block.content}
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* Team Section */}
      <ProfessionalTeamSection />

      {/* More Sections as Needed */}
    </div>
  );
};

export default Home;
