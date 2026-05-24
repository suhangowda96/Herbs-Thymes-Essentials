import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

import logo from '../images/logo.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const location = useLocation();

  // Scroll Effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll);

    return () =>
      window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close Mobile Menu on Route Change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Products', path: '/products' },
    { name: 'Contact', path: '/contact' },
  ];

  /*
    ===============================
    NAVBAR LOGIC
    ===============================

    HOME PAGE:
    - Transparent at top
    - Glass effect after scroll

    OTHER PAGES:
    - Fully transparent always at top
    - Glass effect after scroll

    This allows hero/background image
    to flow behind navbar on all pages.
  */

  const navbarClasses = isScrolled
    ? 'bg-[#0F1720]/70 backdrop-blur-2xl border-b border-[#D4AF37]/10 shadow-2xl py-3'
    : 'bg-transparent py-4';

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navbarClasses}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* ================= LOGO ================= */}
            <Link
              to="/"
              className="flex items-center group"
            >
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
                className="relative"
              >
                <img
                  src={logo}
                  alt="Herbs & Thymes Essentials"
                  className="h-14 md:h-16 lg:h-20 w-auto object-contain drop-shadow-2xl"
                />
              </motion.div>
            </Link>

            {/* ================= DESKTOP NAV ================= */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => {
                const isActive =
                  location.pathname === link.path;

                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`relative text-sm uppercase tracking-[0.2em] transition-all duration-300 ${
                      isActive
                        ? 'text-[#D4AF37]'
                        : 'text-white/90 hover:text-[#D4AF37]'
                    }`}
                  >
                    {link.name}

                    {isActive && (
                      <motion.div
                        layoutId="activeNav"
                        className="absolute -bottom-2 left-0 right-0 h-[2px] bg-[#D4AF37] rounded-full"
                      />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* ================= MOBILE BUTTON ================= */}
            <button
              onClick={() =>
                setIsMobileMenuOpen(!isMobileMenuOpen)
              }
              className="md:hidden w-11 h-11 rounded-full bg-white/10 backdrop-blur-xl border border-white/10 flex items-center justify-center text-white hover:bg-[#D4AF37] hover:text-black transition-all duration-300"
            >
              {isMobileMenuOpen ? (
                <X size={22} />
              ) : (
                <Menu size={22} />
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* ================= MOBILE MENU ================= */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[999] md:hidden"
          >
            {/* Overlay */}
            <div
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() =>
                setIsMobileMenuOpen(false)
              }
            />

            {/* Sidebar */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{
                type: 'spring',
                damping: 25,
              }}
              className="absolute top-0 right-0 h-full w-72 bg-[#FDF8F3] shadow-2xl border-l border-[#E8D5C4]"
            >
              {/* Top */}
              <div className="flex items-center justify-between px-6 py-6 border-b border-[#E8D5C4]">
                <button
                  onClick={() =>
                    setIsMobileMenuOpen(false)
                  }
                  className="w-10 h-10 rounded-full bg-[#EFE3D5] flex items-center justify-center text-[#3E3E3E] hover:bg-[#D4AF37] hover:text-white transition-all duration-300"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Nav Links */}
              <div className="flex flex-col px-6 py-8">
                {navLinks.map((link, index) => {
                  const isActive =
                    location.pathname === link.path;

                  return (
                    <motion.div
                      key={link.path}
                      initial={{
                        opacity: 0,
                        x: 30,
                      }}
                      animate={{
                        opacity: 1,
                        x: 0,
                      }}
                      transition={{
                        delay: index * 0.1,
                      }}
                    >
                      <Link
                        to={link.path}
                        className={`flex items-center justify-between py-5 border-b border-[#E8D5C4] text-lg tracking-wide transition-all duration-300 ${
                          isActive
                            ? 'text-[#B8860B] font-semibold'
                            : 'text-[#5C5248] hover:text-[#B8860B]'
                        }`}
                      >
                        {link.name}

                        {isActive && (
                          <div className="w-2 h-2 rounded-full bg-[#D4AF37]" />
                        )}
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;