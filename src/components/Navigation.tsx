import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import { useTranslation } from 'react-i18next';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { t } = useTranslation();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group" onClick={closeMenu}>
            <div className="relative">
              <img
                src="/logo/Tmk logo.png"
                alt="Temmack Solutions Logo"
                className="h-12 w-auto group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black text-secondary">Temmack™</span>
              <span className="text-xs text-gray-600 -mt-1 font-semibold">Solutions</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            <Link
              to="/"
              className="px-6 py-3 text-secondary font-semibold hover:text-primary transition-colors"
              onClick={closeMenu}
            >
              {t('nav.home')}
            </Link>

            <Link
              smooth
              to="/#about"
              className="px-6 py-3 rounded-full bg-transparent border border-transparent text-secondary font-semibold hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
              onClick={closeMenu}
            >
              {t('nav.whoWeAre')}
            </Link>

            <Link
              smooth
              to="/#services"
              className="px-6 py-3 rounded-full bg-transparent border border-transparent text-secondary font-semibold hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
              onClick={closeMenu}
            >
              {t('nav.whatWeDo')}
            </Link>

            <Link
              smooth
              to="/#philosophy"
              className="px-6 py-3 rounded-full bg-transparent border border-transparent text-secondary font-semibold hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
              onClick={closeMenu}
            >
              {t('nav.whyUs')}
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-secondary hover:text-primary transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200 py-4">
            <div className="space-y-2">
              <Link
                to="/"
                onClick={closeMenu}
                className="block w-full text-left py-3 px-4 text-secondary font-semibold hover:bg-primary/10 hover:text-primary transition-colors rounded-lg"
              >
                {t('nav.home')}
              </Link>

              <Link
                smooth
                to="/#about"
                onClick={closeMenu}
                className="block w-full text-left py-3 px-4 text-secondary font-semibold hover:bg-primary/10 hover:text-primary transition-colors rounded-lg"
              >
                {t('nav.whoWeAre')}
              </Link>

              <Link
                smooth
                to="/#services"
                onClick={closeMenu}
                className="block w-full text-left py-3 px-4 text-secondary font-semibold hover:bg-primary/10 hover:text-primary transition-colors rounded-lg"
              >
                {t('nav.whatWeDo')}
              </Link>

              <Link
                smooth
                to="/#philosophy"
                onClick={closeMenu}
                className="block w-full text-left py-3 px-4 text-secondary font-semibold hover:bg-primary/10 hover:text-primary transition-colors rounded-lg"
              >
                {t('nav.whyUs')}
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
