import React from 'react';
import { LayoutTemplate } from 'lucide-react';
import { BRAND_INFO } from '../../Constants/HeaderConstant';

 const Loader = () => {
  return (
    <div className="fixed inset-0 z-9999 bg-white flex items-center justify-center overflow-hidden">
      {/* Ambient Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
         <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-indigo-50/80 rounded-full blur-[120px] animate-pulse"></div>
         <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-purple-50/80 rounded-full blur-[120px] animate-pulse delay-1000"></div>
      </div>

      {/* Content Wrapper */}
      <div className="relative z-10 flex flex-col items-center">
        
        {/* Logo Animation */}
        <div className="relative mb-8">
           {/* Glowing Backdrop */}
           <div className="absolute inset-0 bg-indigo-500 blur-xl opacity-20 animate-pulse rounded-full"></div>
           
           <div className="relative w-24 h-24 bg-white border border-indigo-50 rounded-3xl flex items-center justify-center shadow-2xl shadow-indigo-200/50 animate-[bounce_3s_infinite]">
              <div className="text-indigo-600 transform transition-transform hover:scale-110 duration-500">
                 <LayoutTemplate size={48} />
              </div>
           </div>
           
           {/* Shadow */}
           <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-16 h-2 bg-indigo-900/10 rounded-[100%] blur-sm animate-[pulse_3s_infinite]"></div>
        </div>

        {/* Brand Name */}
        <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight mb-2">
           {BRAND_INFO.name}
        </h1>
        
        <p className="text-indigo-500 text-xs font-bold uppercase tracking-[0.3em] animate-pulse mb-10">
           Loading Experience
        </p>

        {/* Custom Progress Bar */}
        <div className="relative w-64 h-1.5 bg-gray-100 rounded-full overflow-hidden">
           <div className="absolute inset-0 bg-linear-to-r from-indigo-600 via-purple-600 to-indigo-600 animate-slide w-full h-full origin-left"></div>
        </div>

      </div>
    </div>
  );
};

export default Loader