import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Phone, MapPin, Mail } from 'lucide-react';

// Keep or remove icons as needed

const Footer = () => {
  return (
    <footer className="bg-secondary text-white">
      <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-4 gap-12">

        {/* Company Info */}
        <div>
          <img src="/logo/Tmk logo.png" alt="Temmack Logo" className="h-12 mb-4" />
          <p className="text-gray-300 mb-4">Simplicity That Leaves a Mark</p>

          <div className="space-y-3 text-gray-300 text-sm">
            <div className="flex items-center space-x-2">
              <Mail className="w-5 h-5 text-primary" />
              <a href="mailto:info@temmack.com.ng" className="hover:text-white">
                info@temmack.com.ng
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="w-5 h-5 text-primary" />
              <a href="tel:+2349133167253" className="hover:text-white">
                +234 913 316 7253
              </a>
            </div>
            <div className="flex items-start space-x-2">
              <MapPin className="w-5 h-5 text-primary mt-1" />
              <p>3 Association Avenue, Eruwen,
                <br />Ikorodu, Lagos, Nigeria
              </p>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-3 text-gray-300 text-sm">
            <li><Link to="/" className="hover:text-white">Home</Link></li>
            <li><Link to="/services" className="hover:text-white">Services</Link></li>
            <li><Link to="/faq" className="hover:text-white">FAQ</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-semibold mb-4">Services</h4>
          <ul className="space-y-3 text-gray-300 text-sm">
            <li>UX & Web Copywriting</li>
            <li>Email Marketing</li>
            <li>Content Strategy & SEO</li>
            <li>Brand Strategy</li>
            <li>AI Prompt Systems</li>
            <li>Social Media Strategy</li>
          </ul>
        </div>

        {/* Social & Legal */}
        <div>
          <h4 className="font-semibold mb-4">Connect With Us</h4>
          <div className="flex space-x-4 mb-6">
            {/* Add or adjust social icons as needed */}
          </div>
          <h5 className="font-semibold mb-2">Legal</h5>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li><Link to="/privacy" className="hover:text-white">Privacy Policy</Link></li>
            <li><Link to="/terms" className="hover:text-white">Terms & Conditions</Link></li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 pt-6 mt-12 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} Temmack Solutions — Designed with clarity in mind.
      </div>
    </footer>
  );
};

export default Footer;
