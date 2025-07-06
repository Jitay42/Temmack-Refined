import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Instagram, Phone, MapPin, Mail } from 'lucide-react';

const Footer = () => {
  const { t } = useTranslation();

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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          
          {/* Company Information - Left */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="/logo/Tmk logo.png" 
                alt="Temmack Solutions Logo" 
                className="h-12 w-auto brightness-0 invert"
              />
              <div>
                <span className="text-2xl font-bold">Temmack™</span>
                <p className="text-sm text-gray-300 -mt-1">Solutions</p>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Simplicity That Leaves a Mark
            </p>

            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary" />
                <a 
                  href="mailto:info@temmack.com.ng" 
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  info@temmack.com.ng
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary" />
                <a 
                  href="tel:+2349133167253" 
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  +234 913 316 7253
                </a>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary mt-1" />
                <p className="text-gray-300">
                  3 Association Avenue, Eruwen,<br />
                  Ikorodu, Lagos, Nigeria
                </p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1">
            <h4 className="text-lg font-semibold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors hover:translate-x-1 transform duration-200 inline-block">Home</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors hover:translate-x-1 transform duration-200 inline-block">Services</Link></li>
              <li><Link to="/faq" className="text-gray-300 hover:text-white transition-colors hover:translate-x-1 transform duration-200 inline-block">FAQ</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors hover:translate-x-1 transform duration-200 inline-block">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-1">
            <h4 className="text-lg font-semibold mb-6 text-white">Our Services</h4>
            <ul className="space-y-3 text-gray-300">
              <li>Digital & UX Copywriting</li>
              <li>Email Marketing</li>
              <li>Content Strategy & SEO</li>
              <li>Brand Strategy</li>
              <li>AI Prompt Systems</li>
              <li>Social Media Strategy</li>
            </ul>
          </div>

          {/* Connect & Legal */}
          <div className="lg:col-span-1">
            <h4 className="text-lg font-semibold mb-6 text-white">Connect With Us</h4>
            
            <div className="flex space-x-4 mb-8">
              <a 
                href="https://wa.me/2349133167253" 
                target="_blank"
                rel="noopener noreferrer"
                title="Message Temmack on WhatsApp"
                className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white hover:bg-green-700 transition-all duration-300 hover:scale-110"
              >
                <WhatsAppIcon className="w-6 h-6" />
              </a>
              <a 
                href="https://instagram.com/temmack_solutions" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white hover:from-purple-600 hover:to-pink-600 transition-all duration-300 hover:scale-110"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a 
                href="https://tiktok.com/@theaicopyguy" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white hover:bg-gray-800 transition-all duration-300 hover:scale-110"
              >
                <TikTokIcon className="w-6 h-6" />
              </a>
            </div>

            <div>
              <h5 className="text-sm font-semibold mb-3 text-white">Legal</h5>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link to="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8 mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              {t('footer.copyright')}
            </p>
            <p className="text-gray-400 text-sm mt-4 md:mt-0">
              Designed with clarity in mind
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;