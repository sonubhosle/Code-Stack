import React, { useEffect } from 'react';
import { X, Send, ArrowRight } from 'lucide-react';
import { NAV_LINKS, BRAND_INFO } from '../../Constants/HeaderConstant';
import { motion, AnimatePresence } from 'framer-motion';

export const MobileSidebar = ({ isOpen, onClose, activeTab }) => {
  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onClose}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-60"
            />

            {/* Sidebar Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-[85%] max-w-[320px] bg-white shadow-2xl z-70 flex flex-col"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-100 bg-gray-50/50">
                <div className="flex items-center gap-3">
                  <div className="bg-linear-to-tr from-emerald-600 to-emerald-400 p-2.5 rounded-xl text-white shadow-lg">
                    {BRAND_INFO.logo}
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold text-lg text-gray-900 leading-none">{BRAND_INFO.name}</span>
                    <span className="text-[10px] text-emerald-500 font-bold uppercase tracking-wider mt-1">Portfolio</span>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="p-2.5 rounded-full bg-white border border-gray-100 text-gray-400 hover:text-red-500 hover:border-red-100 hover:bg-red-50 transition-all duration-300 shadow-sm"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Nav Links */}
              <div className="flex-1 overflow-y-auto py-6 px-4 space-y-2">
                {NAV_LINKS.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={onClose}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className={`group flex items-center justify-between p-4 rounded-2xl transition-all duration-300 border ${
                      activeTab === link.name 
                        ? 'bg-emerald-50 border-emerald-100 text-emerald-600 shadow-sm' 
                        : 'text-gray-600 hover:bg-gray-50 border-transparent hover:border-gray-100'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <span className={`p-2 rounded-lg transition-all duration-300 ${
                        activeTab === link.name 
                          ? 'bg-white text-emerald-600 shadow-sm' 
                          : 'bg-white text-gray-400 group-hover:text-emerald-500 group-hover:shadow-sm'
                      }`}>
                        {link.icon}
                      </span>
                      <span className="font-semibold text-base">{link.name}</span>
                    </div>
                    <ArrowRight size={16} className={`transition-all duration-300 ${
                      activeTab === link.name ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0'
                    }`} />
                  </motion.a>
                ))}
              </div>

              {/* Footer / CTA */}
              <div className="p-6 border-t border-gray-100 bg-gray-50">
                <motion.a 
                  href="#contact"
                  onClick={onClose}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-center gap-2 bg-linear-to-r from-emerald-600 to-teal-500 text-white py-4 rounded-2xl font-bold shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30 transition-all duration-300"
                >
                  <Send size={20} />
                  <span>Hire Me Now</span>
                </motion.a>
                <div className="mt-6 text-center">
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                    &copy; 2024 {BRAND_INFO.name}
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};