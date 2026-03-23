import React from 'react';
import { Mail, Phone, MapPin, Zap } from 'lucide-react';
import { BRAND_INFO, NAV_LINKS, CONTACT_INFO, SOCIAL_LINKS } from '../../Constants/HeaderConstant';
import { ScrollReveal } from '../ScrollReveal/ScrollReveal';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-50/50 rounded-full blur-[100px]"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-50/50 rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">

          <ScrollReveal direction="right" className="lg:col-span-4 space-y-6">
            <a href="#" className="flex items-center gap-3 select-none group cursor-pointer">
              <div className="bg-linear-to-r from-emerald-500 to-emerald-500 p-2 rounded-xl text-white transition-all duration-500 scale-100">
                {BRAND_INFO.logo}
              </div>
              <div className="flex flex-col justify-center">
                <h1 className="font-bold text-gray-900 leading-none tracking-tight text-2xl mb-1">
                  {BRAND_INFO.name}
                </h1>
                <div className="overflow-hidden max-h-6 opacity-100">
                  <span className="text-xs font-medium tracking-[0.2em] uppercase text-emerald-500 block mt-1">
                    {BRAND_INFO.slogan}
                  </span>
                </div>
              </div>
            </a>
            <p className="text-gray-500 leading-relaxed pr-4">
              Crafting exceptional digital experiences with precision, passion, and modern technology. We help brands grow through design and code.
            </p>
            <div>
              <h5 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">Follow Us</h5>
              <div className="flex gap-3">
                {SOCIAL_LINKS.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-emerald-500 hover:text-white hover:border-transparent hover:-translate-y-1 transition-all duration-300 shadow-sm"
                    aria-label={social.platform}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.2} className="lg:col-span-2 lg:col-start-6">
            <h4 className="font-bold text-gray-900 text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-500 hover:text-emerald-500 hover:pl-2 transition-all duration-300 flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-200 group-hover:bg-emerald-500 transition-colors"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </ScrollReveal>

          <ScrollReveal direction="left" delay={0.3} className="lg:col-span-3">
            <h4 className="font-bold text-gray-900 text-lg mb-6">Get in Touch</h4>
            <ul className="space-y-5 mb-8">
              <li>
                <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-center gap-3 ">
                  <div className="text-gray-600"><Mail size={18} /></div>
                  <span className="text-gray-600 ">{CONTACT_INFO.email}</span>
                </a>
              </li>
              <li>
                <a href={`tel:${CONTACT_INFO.phone}`} className="flex items-center ">
                  <div className="text-gray-600"><Phone size={18} /></div>
                  <span className="text-gray-600 ">{CONTACT_INFO.phone}</span>
                </a>
              </li>
              <li>
                <a href={'#'} className="flex items-center gap-3">
                  <div className="text-gray-600"><MapPin size={18} /></div>
                  <span className="text-gray-600 ">Basmath, Maharashtra</span>
                </a>
              </li>
            </ul>
          </ScrollReveal>
        </div>

        <ScrollReveal direction="up" delay={0.4}>
          <div className="py-8 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm text-center md:text-left">
              © {new Date().getFullYear()} {BRAND_INFO.name}. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-400 bg-gray-50 px-4 py-2 rounded-full">
              <span>Developed By</span>
              <Zap size={14} className="fill-red-500 text-red-500 animate-pulse" />
              <span className='text-emerald-500'>Sonu Bhosle</span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  );
};

export default Footer;