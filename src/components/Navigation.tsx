import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { useTranslation } from 'react-i18next';
import { Menu, X } from 'lucide-react';
import logo from '/logo.png';

const Navigation = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Handle scroll background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll lock when menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Temmack Logo" className="h-10 w-auto" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-4">
          <HashLink
            smooth
            to="/#who-we-are"
            className="px-6 py-3 text-secondary font-semibold hover:text-primary transition-colors"
          >
            {t('nav.whoWeAre')}
          </HashLink>

          <Link
            to="/#what-we-do"
            className="px-6 py-3 text-secondary font-semibold hover:text-primary transition-colors"
          >
            {t('nav.whatWeDo')}
          </Link>

          <HashLink
            smooth
            to="/#why-us"
            className="px-6 py-3 text-secondary font-semibold hover:text-primary transition-colors"
          >
            {t('nav.whyUs')}
          </HashLink>

          <Link
            to="/contact"
            className="px-6 py-3 text-secondary font-semibold hover:text-primary transition-colors"
          >
            {t('nav.contact')}
          </Link>

          <Link
            to="/faq"
            className="px-6 py-3 text-secondary font-semibold hover:text-primary transition-colors"
          >
            {t('nav.faq')}
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-secondary focus:outline-none"
            aria-label="Toggle navigation"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white px-4 py-6 shadow-md">
          <div className="flex flex-col space-y-4">
            <HashLink
              smooth
              to="/#who-we-are"
              onClick={closeMenu}
              className="text-secondary font-semibold hover:text-primary transition-colors"
            >
              {t('nav.whoWeAre')}
            </HashLink>

            <HashLink
              smooth
              to="/#what-we-do"
              onClick={closeMenu}
              className="text-secondary font-semibold hover:text-primary transition-colors"
            >
              {t('nav.whatWeDo')}
            </HashLink>

            <HashLink
              smooth
              to="/#why-us"
              onClick={closeMenu}
              className="text-secondary font-semibold hover:text-primary transition-colors"
            >
              {t('nav.whyUs')}
            </HashLink>

            <Link
              to="/contact"
              onClick={closeMenu}
              className="text-secondary font-semibold hover:text-primary transition-colors"
            >
              {t('nav.contact')}
            </Link>

            <Link
              to="/faq"
              onClick={closeMenu}
              className="text-secondary font-semibold hover:text-primary transition-colors"
            >
              {t('nav.faq')}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navigation;
