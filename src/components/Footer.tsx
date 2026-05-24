import { Link } from 'react-router-dom';
import {
  Instagram,
  Facebook,
  Mail,
  Phone,
} from 'lucide-react';

import logo from '../images/logo.png';

const Footer = () => {
  return (
    <footer className="bg-[#1a1a1a] text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* TOP SECTION */}
        <div className="pt-16 pb-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-16">

          {/* LOGO + ABOUT */}
          <div className="space-y-5">
            <Link to="/" className="inline-block">
              <img
                src={logo}
                alt="Herbs & Thymes Essentials"
                className="h-20 w-auto object-contain"
              />
            </Link>

            <p className="text-white/70 text-sm leading-relaxed max-w-sm">
              Premium organic Ayurvedic skincare crafted with nature’s finest
              herbs, botanical oils, and luxurious ingredients for naturally
              radiant skin.
            </p>

            {/* SOCIAL ICONS */}
            <div className="flex gap-4 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:bg-gold hover:text-black transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>

              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:bg-gold hover:text-black transition-all duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a>

              <a
                href="mailto:info@herbsnthymes.com"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:bg-gold hover:text-black transition-all duration-300"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="font-serif text-2xl text-white mb-6">
              Quick Links
            </h4>

            <ul className="space-y-4">
              {[
                { name: 'Home', path: '/' },
                { name: 'About Us', path: '/about' },
                { name: 'Products', path: '/products' },
                { name: 'Contact', path: '/contact' },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-white/70 hover:text-gold transition-all duration-300 text-sm tracking-wide"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="font-serif text-2xl text-white mb-6">
              Contact Us
            </h4>

            <ul className="space-y-5">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-gold flex-shrink-0" />

                <a
                  href="tel:+919925007996"
                  className="text-white/70 hover:text-gold transition-colors text-sm"
                >
                  +91 99250 07996
                </a>
              </li>

              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-gold flex-shrink-0" />

                <a
                  href="mailto:info@herbsnthymes.com"
                  className="text-white/70 hover:text-gold transition-colors text-sm"
                >
                  info@herbsnthymes.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="border-t border-white/10 py-6">
          <div className="flex justify-center items-center text-center">
            <p className="text-white/50 text-sm">
              © 2026 Herbs&Thymes Essentials. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;