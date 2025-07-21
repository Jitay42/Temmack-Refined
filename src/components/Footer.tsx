import React from 'react';
import { Facebook, Instagram, Tiktok } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#1b1a19] text-[#f8f1f0] py-12 px-4 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo and Brief */}
        <div>
          <h2 className="text-2xl font-bold text-[#cb1010]">Temmack</h2>
          <p className="mt-2 text-sm">
            Simplicity that leaves a mark. We help brands gain clarity, drive results, and create meaningful digital experiences.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/">Home</a></li>
            <li><a href="/services">What We Do</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/faq">FAQs</a></li>
          </ul>
        </div>

        {/* Connect With Us */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Connect With Us</h3>
          <div className="flex space-x-4 mt-2">
            <a
              href="https://www.facebook.com/share/1FLg8nQce9/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5 hover:text-[#cb1010]" />
            </a>
            <a
              href="https://www.instagram.com/temmack_solutions?igsh=a3IyMmJjaTA1eHI0"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5 hover:text-[#cb1010]" />
            </a>
            <a
              href="https://tiktok.com/@theaicopyguy"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
            >
              <Tiktok className="w-5 h-5 hover:text-[#cb1010]" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-[#cb1010]/30 mt-10 pt-6 text-center text-sm">
        &copy; {new Date().getFullYear()} Temmack. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
