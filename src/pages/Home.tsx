 import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowRight, Users, Target, Lightbulb, CheckCircle, Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';
import RealisticModelBanner from '../components/RealisticModelBanner';
import ServiceCards from '../components/ServiceCards';
import ProfessionalTeamSection from '../components/ProfessionalTeamSection';

const Home = () => {
  const { t } = useTranslation();

  const testimonials = [
    {
      name: 'Sarah Chen',
      company: 'TechFlow Solutions',
      role: 'CEO',
      comment: 'Temmack transformed our entire communication strategy. Our conversion rates increased by 340% within 3 months. Their clarity-first approach is revolutionary.',
      rating: 5
    },
    {
      name: 'Marcus Johnson',
      company: 'InnovateLab',
      role: 'Marketing Director',
      comment: 'Working with Temmack was a game-changer. They helped us find our voice and communicate our complex AI solutions in a way that actually resonates with our audience.',
      rating: 5
    },
    {
      name: 'Priya Patel',
      company: 'CloudVault',
      role: 'Founder',
      comment: 'The team at Temmack doesn\'t just write copy - they craft strategic communication that drives real business results. Our email open rates doubled overnight.',
      rating: 5
    }
  ];

  const services = [
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
      {/* Realistic Model Banner */}
      <RealisticModelBanner />

      {/* Hero Content Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-white to-accent/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
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
            You're not invisible — you're just unclear. We help brands speak boldly, 
            sell better, and grow with direction.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link 
              to="/contact"
              className="inline-flex items-center bg-primary text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-primary/90 transition-all duration-500 ease-in-out shadow-2xl active:bg-accent transform hover:scale-105 group"
            >
              Let's Create Clarity Together
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Service Cards */}
      <ServiceCards />

      {/* About Section */}
      <section className="py-12 bg-white">
  <div className="max-w-4xl mx-auto px-4">
    <h2 className="text-4xl font-bold text-center mb-8">The Story Behind Temmack</h2>

    <div className="space-y-8 text-lg leading-relaxed text-gray-800">

      <div>
        <img src="https://source.unsplash.com/800x400/?thinking,frustration" alt="Frustration" className="w-full rounded-lg mb-4" />
        <p>It started with a feeling—a constant itch that something about how brands communicate was off.</p>
        <blockquote className="border-l-4 border-red-500 pl-4 italic">
          “Why is this so complicated? Why does it feel like they’re talking, but not really saying anything?”
        </blockquote>
        <p>That frustration didn’t go away. In fact, it got louder.</p>
        <p>In a world flooded with content and tools, most businesses were still struggling to say what they do, why it matters, and how they help. The problem wasn’t a lack of talent or ambition. It was a lack of clarity. And that’s where the idea for Temmack was born.</p>
      </div>

      <div>
        <img src="https://source.unsplash.com/800x400/?teamwork,planning" alt="Team planning" className="w-full rounded-lg mb-4" />
        <h3 className="text-2xl font-semibold mb-2">In 2024: The Beginning</h3>
        <p>In 2024, we founded Temmack with a simple mission:</p>
        <blockquote className="border-l-4 border-red-500 pl-4 italic">
          Help businesses say what they mean, mean what they say, and connect authentically with the people they serve.
        </blockquote>
        <p>No more empty slogans. No more complicated jargon. Just clear, honest, effective communication that actually works.</p>
      </div>

      <div>
        <img src="https://source.unsplash.com/800x400/?clarity,focus" alt="Clarity and focus" className="w-full rounded-lg mb-4" />
        <h3 className="text-2xl font-semibold mb-2">From Confusion to Clarity</h3>
        <p>Temmack didn’t start as a big agency or a trend-chasing marketing outfit. It started with a question:</p>
        <blockquote className="border-l-4 border-red-500 pl-4 italic">
          “What if we built a team focused on helping brands say less, but mean more?”
        </blockquote>
        <p>The kind of team that wouldn’t just write copy, but craft messaging that sticks. The kind of partner that doesn’t just “do digital,” but helps clients think sharper and grow smarter. The kind of service that prioritizes clarity, simplicity, and strategy—because that’s what drives trust and results.</p>
      </div>

      <div>
        <img src="https://source.unsplash.com/800x400/?vision,light" alt="Vision" className="w-full rounded-lg mb-4" />
        <h3 className="text-2xl font-semibold mb-2">Our Vision</h3>
        <p>Our vision is bold yet simple:</p>
        <blockquote className="border-l-4 border-red-500 pl-4 italic">
          To make clarity a competitive advantage.
        </blockquote>
        <p>We believe that in a world full of noise, the brands that speak clearly will be the ones that win. Clarity isn’t a nice-to-have. It’s what separates the brands people remember from the ones they ignore.</p>
      </div>

      <div>
        <img src="https://source.unsplash.com/800x400/?idea,lightbulb" alt="Idea" className="w-full rounded-lg mb-4" />
        <h3 className="text-2xl font-semibold mb-2">Why the Name Temmack?</h3>
        <p>Temmack stands for a mindset. It’s the belief that simplicity leaves a mark—not filler, not noise, not clever-sounding jargon. It’s also a nod to the kind of people we love working with: those who are serious about getting better at how they communicate, connect, and convert.</p>
      </div>

      <div>
        <img src="https://source.unsplash.com/800x400/?target,audience" alt="Target Audience" className="w-full rounded-lg mb-4" />
        <h3 className="text-2xl font-semibold mb-2">Who We’re For</h3>
        <p>We’re not for everyone. And we’re okay with that.</p>
        <ul className="list-disc list-inside">
          <li>SaaS brands that need sharper messaging and onboarding flows</li>
          <li>Startups building their foundation from scratch</li>
          <li>Fintech companies trying to simplify the complex</li>
          <li>NGOs and social impact orgs trying to tell their story clearly</li>
          <li>Educators and EdTech platforms trying to connect, not just inform</li>
          <li>Small businesses ready to show up like big brands</li>
        </ul>
        <p>If you’ve ever felt that your message isn’t landing—or worse, that it’s getting lost in the noise—then we built Temmack for you.</p>
      </div>

      <div>
        <img src="https://source.unsplash.com/800x400/?values,ethics" alt="Values" className="w-full rounded-lg mb-4" />
        <h3 className="text-2xl font-semibold mb-2">What We Believe</h3>
        <ul className="list-disc list-inside">
          <li>📌 People don’t buy what they don’t understand.</li>
          <li>📌 Good strategy makes everything else easier.</li>
          <li>📌 The best copy doesn’t sound smart—it makes you sound understood.</li>
          <li>📌 And most importantly: communication should be clear, honest, and deeply human.</li>
        </ul>
      </div>

      <div>
        <img src="https://source.unsplash.com/800x400/?growth,team" alt="Team and Growth" className="w-full rounded-lg mb-4" />
        <h3 className="text-2xl font-semibold mb-2">Where We’re Headed</h3>
        <p>Temmack isn’t just a service. It’s a shift. We're building a team of writers, strategists, marketers, and technologists who care deeply about helping brands speak with meaning and grow with clarity—across borders, industries, and platforms.</p>
        <p>Whether we’re writing UX copy for a fintech startup in Kenya, building an email funnel for a SaaS in Canada, or creating AI prompts for a creative agency in Berlin—our goal stays the same:</p>
        <blockquote className="border-l-4 border-red-500 pl-4 italic">
          Make it clear. Make it smart. Make it matter.
        </blockquote>
      </div>

      <div>
        <img src="https://source.unsplash.com/800x400/?collaboration,teamwork" alt="Work Values" className="w-full rounded-lg mb-4" />
        <h3 className="text-2xl font-semibold mb-2">Temmack Work Values</h3>
        <ul className="list-disc list-inside">
          <li>✅ Clarity First – We strip away the noise and focus on what truly matters.</li>
          <li>✅ Empathy Always – We listen, understand, and communicate like humans.</li>
          <li>✅ Strategic Thinking – Every word, design, or plan has a purpose behind it.</li>
          <li>✅ Collaboration Over Ego – We work as partners with our clients, not as know-it-alls.</li>
          <li>✅ Honesty & Integrity – No tricks, no filler, no empty promises. Just real, valuable work.</li>
          <li>✅ Continuous Learning – We’re always sharpening our skills and expanding our thinking to better serve.</li>
        </ul>
        <p>We believe these values aren’t just nice words—they’re the difference between good work and work that makes a mark.</p>
      </div>
      
    </div>
  </div>
</section>

          {/* Values Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: Target,
                title: 'Strategy First',
                description: 'Every word serves a purpose. We start with strategy, not tactics, ensuring your message aligns with your business goals.'
              },
              {
                icon: Users,
                title: 'Human Connection',
                description: 'We write for humans, not algorithms. Our copy creates genuine connections that turn strangers into customers.'
              },
              {
                icon: Lightbulb,
                title: 'Clarity Over Cleverness',
                description: 'We choose understanding over impression. Clear communication always wins over clever wordplay.'
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow text-center"
              >
                <value.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-secondary mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Team Section */}
      <ProfessionalTeamSection />

      {/* Philosophy Section */}
      <section id="philosophy" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-secondary mb-6">
                Why Clarity Changes Everything
              </h2>
              
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                In a world drowning in information, clarity isn't just nice to have—it's your competitive advantage. 
                When your message is clear, your audience doesn't have to work to understand you. They can focus 
                on what matters: deciding to work with you.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  'Strategy before writing — Every word serves a purpose',
                  'Psychology-backed messaging — We understand what motivates action',
                  'Conversion-first UX — Beautiful design that actually works'
                ].map((principle, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <span className="text-lg text-secondary">{principle}</span>
                  </div>
                ))}
              </div>

              <Link
                to="/contact"
                className="inline-flex items-center text-primary font-semibold hover:text-primary/80 transition-colors text-lg bg-transparent border-2 border-primary px-6 py-3 rounded-full hover:bg-primary hover:text-white active:bg-accent active:border-accent duration-500 group"
              >
                Experience the Difference
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-primary/10 rounded-3xl p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full -translate-y-16 translate-x-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-accent/20 rounded-full translate-y-12 -translate-x-12"></div>
                
                <div className="relative z-10">
                  <blockquote className="text-2xl font-medium text-secondary mb-6 leading-relaxed">
                    "The best marketing doesn't feel like marketing. It feels like a helpful conversation 
                    with someone who truly understands your challenges."
                  </blockquote>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                      <img 
                        src="/logo/Tmk logo.png" 
                        alt="Temmack Logo" 
                        className="w-8 h-8 object-contain brightness-0 invert"
                      />
                    </div>
                    <div>
                      <p className="font-semibold text-secondary">The Temmack Philosophy</p>
                      <p className="text-gray-600 text-sm">Clarity in action</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20" style={{ backgroundColor: '#3b6eac' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              What Our Clients Say
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Real results from real businesses who chose clarity over confusion.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 relative overflow-hidden group hover:bg-white/20 transition-all duration-300"
              >
                <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-30 transition-opacity">
                  <Quote className="w-12 h-12 text-white" />
                </div>
                
                <div className="flex items-center mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                <blockquote className="text-white mb-6 leading-relaxed italic">
                  "{testimonial.comment}"
                </blockquote>

                <div className="border-t border-white/20 pt-4">
                  <h4 className="font-bold text-white">{testimonial.name}</h4>
                  <p className="text-white/80 font-medium text-sm">{testimonial.role}</p>
                  <p className="text-white/60 text-sm">{testimonial.company}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              How We Transform Your Communication
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Six strategic services designed to clarify your message, connect with your audience, 
              and convert prospects into loyal customers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -15,
                  rotateY: 5,
                  transition: { duration: 0.3 }
                }}
                onClick={() => window.location.href = '/contact'}
                className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 group cursor-pointer border border-white/20"
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-500"></div>
                </div>

                {/* Floating Animation Elements */}
                <motion.div
                  animate={{ 
                    y: [0, -10, 0],
                    rotate: [0, 2, 0]
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.5
                  }}
                  className="absolute top-4 right-4 w-8 h-8 bg-white/30 rounded-full backdrop-blur-sm"
                />

                <motion.div
                  animate={{ 
                    y: [0, 8, 0],
                    x: [0, 3, 0]
                  }}
                  transition={{ 
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.3
                  }}
                  className="absolute bottom-4 left-4 w-6 h-6 bg-white/40 rounded-lg backdrop-blur-sm"
                />

                {/* Content */}
                <div className="relative z-10 p-8 h-96 flex flex-col justify-between">
                  <div>
                    <motion.h3 
                      className="text-2xl font-bold text-white mb-4 drop-shadow-lg"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      {service.title}
                    </motion.h3>
                  </div>

                  <motion.div 
                    className="mt-6"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <button className="w-full bg-primary text-white border-2 border-primary px-6 py-3 rounded-full font-semibold hover:bg-accent hover:border-accent active:bg-accent active:border-accent transition-all duration-500 backdrop-blur-sm shadow-lg">
                      Get Started
                    </button>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link
              to="/contact"
              className="inline-flex items-center bg-transparent text-white border-2 border-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-black transition-all duration-500 ease-in-out transform hover:scale-105 shadow-lg group"
            >
              Start Your Clarity Journey
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-secondary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Ready to Transform Your Communication?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Stop guessing what your audience wants to hear. Let's create messaging that connects, 
              converts, and grows your business with clarity and purpose.
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center bg-transparent text-white border-2 border-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-secondary transition-all duration-500 ease-in-out transform hover:scale-105 shadow-lg group active:bg-accent active:border-accent active:text-white"
            >
              Let's Get Clear Together
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;  
