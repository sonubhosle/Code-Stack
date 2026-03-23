"use client";
import React, { useState, useEffect } from 'react';
import { Menu, Send, BriefcaseBusiness, Terminal } from 'lucide-react';
import { BRAND_INFO, NAV_LINKS } from '../../Constants/HeaderConstant';
import { MobileSidebar } from './MobilleSidebar';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';


const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('Home');

  const pathname = usePathname();
  const isBookingPage = pathname.startsWith("/book/");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Simple active link detection based on section position
      const sections = NAV_LINKS.map(link => {
        if (link.href.startsWith('#')) {
          return link.href.substring(1);
        }
        return null;
      }).filter(Boolean);

      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        const activeLink = NAV_LINKS.find(link => link.href === `#${currentSection}`);
        if (activeLink) setActiveTab(activeLink.name);
      } else if (window.scrollY < 100) {
        setActiveTab('Home');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${isScrolled ? 'bg-white py-4 shadow-sm ' : 'bg-transparent py-4'}`} >
        <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">

          {/* Logo Area */}
          <a href="/" className="flex items-center gap-3 group cursor-pointer select-none">
            <div className="relative">
              <motion.div
                whileHover={{ rotate: 360, scale: 1.1 }}
                className="bg-linear-to-tr from-emerald-600 to-emerald-400 p-2.5 rounded-2xl text-white shadow-lg transition-all duration-500 group-hover:shadow-emerald-500/40"
              >
                {BRAND_INFO.logo}
              </motion.div>
              <div className="absolute inset-0 bg-emerald-500 blur-xl opacity-0 group-hover:opacity-30 transition-opacity" />
            </div>

            <div className="flex flex-col">
              <div className="flex items-center">
                <h1 className={`font-black text-2xl tracking-tighter ${isBookingPage && !isScrolled ? 'text-white' : 'text-gray-900'}`}>
                  CODE<span className="text-emerald-500">STACK</span>
                </h1>
                <motion.span
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="w-1.5 h-1.5 rounded-full bg-emerald-500 ml-1.5"
                />
              </div>

              <div className="flex items-center gap-2">
                <div className="h-px w-4 bg-emerald-300" />
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-emerald-500/70">
                  {BRAND_INFO.slogan}
                </span>
              </div>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            <nav className="flex items-center bg-white/50 backdrop-blur-sm p-1.5 rounded-full border border-gray-100 shadow-sm relative">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setActiveTab(link.name)}
                  className={`relative px-5 py-2 rounded-full text-sm font-semibold transition-colors duration-300 z-10 ${activeTab === link.name ? 'text-white' : 'text-gray-600 hover:text-emerald-600'}`}
                >
                  {activeTab === link.name && (
                    <motion.div
                      layoutId="active-tab"
                      className="absolute inset-0 bg-emerald-500 rounded-full shadow-md shadow-emerald-500/30"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </a>
              ))}
            </nav>

            {/* Hire Me Button */}
            <motion.a
              href='#contact'
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-6 py-2.5 rounded-xl flex items-center gap-2 overflow-hidden shadow-lg shadow-emerald-500/25"
            >
              <div className="absolute inset-0 bg-linear-to-r from-emerald-600 to-teal-500 transition-transform duration-300 group-hover:scale-110" />
              <div className="relative flex items-center gap-2 text-white font-bold">
                <BriefcaseBusiness size={18} className="group-hover:rotate-12 transition-transform duration-300" />
                <span>Hire Me</span>
              </div>
            </motion.a>
          </div>

          {/* Mobile Actions */}
          <div className="lg:hidden flex items-center gap-3">
            <motion.button
              whileTap={{ scale: 0.9 }}
              className="flex items-center justify-center w-10 h-10 rounded-full bg-linear-to-r from-emerald-600 to-emerald-700 text-white shadow-lg shadow-emerald-200"
              aria-label="Contact Us"
            >
              <Send size={18} />
            </motion.button>

            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="flex items-center justify-center w-10 h-10 rounded-full bg-white border border-gray-100 text-gray-700 shadow-sm hover:shadow-md transition-all duration-200"
              aria-label="Open Menu"
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <MobileSidebar
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
            activeTab={activeTab}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;