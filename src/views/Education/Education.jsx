"use client";
import React from 'react';
import { GraduationCap, Award, Calendar, MapPin, CheckCircle2, Star, BookOpen, Trophy } from 'lucide-react';
import Heading from '../../Components/Heading/Heading';
import { ScrollReveal } from '../../Components/ScrollReveal/ScrollReveal';
import { motion } from 'framer-motion';

const EducationCard = ({ title, institution, period, type, icon: Icon, color }) => {
   const colorClasses = {
      emerald: "bg-emerald-50 text-emerald-600 border-emerald-100 group-hover:bg-emerald-500 group-hover:text-white",
      purple: "bg-purple-50 text-purple-600 border-purple-100 group-hover:bg-purple-600 group-hover:text-white",
      blue: "bg-blue-50 text-blue-600 border-blue-100 group-hover:bg-blue-600 group-hover:text-white",
      amber: "bg-amber-50 text-amber-600 border-amber-100 group-hover:bg-amber-600 group-hover:text-white",
   };

   const glowClasses = {
      emerald: "group-hover:shadow-emerald-500/20",
      purple: "group-hover:shadow-purple-500/20",
      blue: "group-hover:shadow-blue-500/20",
      amber: "group-hover:shadow-amber-500/20",
   };

   return (
      <div className={`group relative bg-white rounded-3xl p-6 md:p-8 border border-gray-100 shadow-sm hover:shadow-2xl ${glowClasses[color]} transition-all duration-500 hover:-translate-y-2 h-full flex flex-col overflow-hidden`}>
         
         <div className="flex justify-between items-start mb-6">
            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 border ${colorClasses[color]} shadow-sm`}>
               {Icon}
            </div>
            <div className="flex flex-col items-end gap-2">
               <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-gray-50 border border-gray-100 text-gray-600 text-[10px] font-bold uppercase tracking-wider rounded-lg">
                  <Calendar size={12} className="text-gray-400" /> {period}
               </span>
               {type && (
                  <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-bold uppercase ${colorClasses[color]} transition-colors duration-500`}>
                     {type}
                  </span>
               )}
            </div>
         </div>

         <div className="flex-1">
            <h4 className="text-xl md:text-2xl font-black text-gray-900 mb-2 group-hover:text-gray-800 transition-colors tracking-tight">
               {title}
            </h4>
            <div className="flex items-center gap-2 text-gray-500 text-sm font-semibold mb-6">
               <MapPin size={14} className="text-gray-400" />
               <span>{institution}</span>
            </div>

            
         </div>

         {/* Decorative Background Element */}
         <div className="absolute bottom-4 right-4 opacity-[0.03] group-hover:opacity-[0.1] transition-opacity duration-500 pointer-events-none">
            {Icon}
         </div>
      </div>
   );
};

const Education = () => {
   const academicData = [
      {
         title: "Master of Computer Applications",
         institution: "SRTMUN University, Nanded",
         period: "2020 - 2022",
         type: "Post Graduation",
         color: "emerald",
         icon: <GraduationCap size={28} />
      },
      {
         title: "Bachelor of Computer Applications",
         institution: "MIT College, Basmat",
         period: "2017 - 2020",
         type: "Under Graduation",
         color: "purple",
         icon: <BookOpen size={28} />
      }
   ];

   const certData = [
      {
         title: "Full Stack Web Developer",
         institution: "Naresh IT, Hyderabad",
         period: "2023",
         type: "Professional Certification",
         color: "amber",
         icon: <Award size={28} />
      },
      {
         title: "React JS Development",
         institution: "Naresh IT, Hyderabad",
         period: "2023",
         type: "Technical Specialization",
         color: "blue",
         icon: <Trophy size={28} />
      }
   ];

   return (
      <section id="education" className="py-24 md:py-32 bg-[#fcfcfd] relative overflow-hidden">
         {/* Refined Background Elements */}
         <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-emerald-50/50 rounded-full blur-[120px]"></div>
            <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-purple-50/50 rounded-full blur-[120px]"></div>
         </div>

         <div className="container mx-auto px-4 md:px-8 relative z-10">
            <ScrollReveal direction="down">
               <Heading 
                  heading={'Education'} 
                  subtitle={'Academic &'} 
                  subtitle2={'Professional'} 
                  desc={'My educational journey and technical certifications from leading institutions.'} 
                  icon={<GraduationCap size={14} />} 
               />
            </ScrollReveal>

            <div className="mt-16 grid lg:grid-cols-2 gap-12 lg:gap-16">
               {/* Column 1: Academic */}
               <div>
                  <ScrollReveal direction="right" delay={0.2}>
                     <div className="flex items-center gap-4 mb-10 group">
                        <div className="w-12 h-12 bg-emerald-600 text-white rounded-2xl flex items-center justify-center shadow-xl shadow-emerald-200 group-hover:scale-110 transition-transform duration-300">
                           <GraduationCap size={24} />
                        </div>
                        <div>
                           <h3 className="text-2xl font-black text-gray-900 tracking-tight">Academic Degrees</h3>
                           <div className="h-1 w-12 bg-emerald-500 rounded-full mt-1" />
                        </div>
                     </div>
                  </ScrollReveal>

                  <div className="space-y-8">
                     {academicData.map((edu, index) => (
                        <ScrollReveal key={index} direction="right" delay={0.3 + index * 0.1}>
                           <EducationCard {...edu} />
                        </ScrollReveal>
                     ))}
                  </div>
               </div>

               {/* Column 2: Certifications */}
               <div>
                  <ScrollReveal direction="left" delay={0.2}>
                     <div className="flex items-center gap-4 mb-10 group">
                        <div className="w-12 h-12 bg-purple-600 text-white rounded-2xl flex items-center justify-center shadow-xl shadow-purple-200 group-hover:scale-110 transition-transform duration-300">
                           <Award size={24} />
                        </div>
                        <div>
                           <h3 className="text-2xl font-black text-gray-900 tracking-tight">Pro Certifications</h3>
                           <div className="h-1 w-12 bg-purple-600 rounded-full mt-1" />
                        </div>
                     </div>
                  </ScrollReveal>

                  <div className="space-y-8">
                     {certData.map((cert, index) => (
                        <ScrollReveal key={index} direction="left" delay={0.3 + index * 0.1}>
                           <EducationCard {...cert} />
                        </ScrollReveal>
                     ))}
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default Education;