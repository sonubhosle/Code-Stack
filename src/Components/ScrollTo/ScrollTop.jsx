"use client";
import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

const ScrollTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Scroll smoothly to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 z-40 p-4 rounded-full bg-gray-900 text-white shadow-xl shadow-indigo-500/20 transition-all duration-500 transform hover:bg-emerald-500 hover:-translate-y-1 active:scale-90 group ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
      aria-label="Scroll to top"
    >
      <ArrowUp size={20} className="group-hover:animate-bounce" />
      {/* Ripple effect background */}
      <div className="absolute inset-0 rounded-full border border-white/10 group-hover:scale-110 transition-transform duration-300"></div>
    </button>
  );
};

export default ScrollTop