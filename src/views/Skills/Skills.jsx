"use client";
import React, { useState } from 'react';
import { Cpu, Sparkles, Zap, Code2, Database, Smartphone, Layout, Server, Globe, Layers, CheckCircle2 } from 'lucide-react';
import Heading from '../../Components/Heading/Heading';
import { ScrollReveal } from '../../Components/ScrollReveal/ScrollReveal';

const SKILLS_DATA = [
  {
    id: "1",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    name: 'Next.js',
    percent: 40,
    category: "Frontend",
    color: 'from-gray-600 to-gray-800'
  },
  {
    id: "2",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    name: 'React.js',
    percent: 80,
    category: "Frontend",
    color: 'from-blue-600 to-blue-800'
  },
  {
    id: "3",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    name: 'Tailwind CSS',
    percent: 90,
    category: "Frontend",
    color: 'from-cyan-600 to-cyan-800'
  },
  {
    id: "4",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
    name: 'Bootstrap',
    percent: 60,
    category: "Frontend",
    color: 'from-purple-600 to-purple-800'
  },
  {
    id: "20",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    name: 'HTML5',
    percent: 90,
    category: "Frontend",
    color: 'from-orange-600 to-orange-800'
  },
  {
    id: "21",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    name: 'CSS3',
    percent: 90,
    category: "Frontend",
    color: 'from-blue-600 to-blue-800'
  },
  {
    id: "9",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    name: 'Node.js',
    percent: 60,
    category: "Backend",
    color: 'from-green-600 to-emerald-500'
  },
  {
    id: "10",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    name: 'Express.js',
    percent: 60,
    category: "Backend",
    color: 'from-gray-600 to-gray-800'
  },
  {
    id: "22",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    name: 'MongoDB',
    percent: 50,
    category: "Backend",
    color: 'from-green-600 to-green-800'
  },
  {
    id: "23",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain-wordmark.svg",
    name: 'MongoDB Atlas',
    percent: 60,
    category: "Backend",
    color: 'from-green-600 to-green-800'
  },
  {
    id: "11",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    name: 'MySQL',
    percent: 40,
    category: "Backend",
    color: 'from-blue-600 to-blue-800'
  },
  {
    id: "19",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg",
    name: 'Socket.io',
    percent: 50,
    category: "Backend",
    color: 'from-gray-600 to-gray-800'
  },
  {
    id: "12",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg",
    name: 'WordPress',
    percent: 70,
    category: "CMS",
    color: 'from-blue-600 to-gray-800'
  },
  {
    id: "56",
    logo: "https://cdn.worldvectorlogo.com/logos/shopify.svg",
    name: 'Shopify',
    percent: 60,
    category: "CMS",
    color: 'from-green-600 to-green-800'
  },
];

const CATEGORIES = [
  { id: 'All', icon: <Layers size={18} /> },
  { id: 'Frontend', icon: <Layout size={18} /> },
  { id: 'Backend', icon: <Server size={18} /> },
  { id: 'CMS', icon: <Smartphone size={18} /> },
];

const Skills = () => {
  const [activeTab, setActiveTab] = useState('All');
  const [isAnimating, setIsAnimating] = useState(false);

  const handleTabChange = (tab) => {
    if (activeTab === tab) return;
    setIsAnimating(true);
    setActiveTab(tab);
    setTimeout(() => setIsAnimating(false), 300);
  };

  const filteredSkills = activeTab === 'All'
    ? SKILLS_DATA
    : SKILLS_DATA.filter(skill => skill.category === activeTab);

  return (
    <section id="skills" className="py-20 md:py-28 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-50/80 rounded-full blur-3xl mix-blend-multiply opacity-50 animate-blob pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-50/80 rounded-full blur-3xl mix-blend-multiply opacity-50 animate-blob animation-delay-2000 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <ScrollReveal direction="down">
          <Heading heading={'Tech Stack'} subtitle={'My Technical'} subtitle2={'Expertise'} icon={<Cpu size={14} />} desc={'A deep dive into the tools, frameworks, and languages I use to build scalable and beautiful digital products.'} />
        </ScrollReveal>

        <ScrollReveal delay={0.2} direction="up">
          <div className="flex justify-center mb-12">
            <div className="inline-flex flex-wrap justify-center bg-gray-100/80 backdrop-blur-sm p-1.5 rounded-2xl border border-gray-200/50">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => handleTabChange(cat.id)}
                  className={`flex items-center gap-2.5 px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 ${activeTab === cat.id
                    ? 'bg-white text-emerald-500 shadow-lg scale-105 ring-1 ring-black/5'
                    : 'text-gray-500 hover:text-gray-900 hover:bg-gray-200/50'
                    }`}
                >
                  {cat.icon}
                  {cat.id}
                </button>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <div className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 md:gap-6 transition-all duration-500 ease-out ${isAnimating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
          {filteredSkills.map((skill, index) => (
            <ScrollReveal key={skill.id} delay={0.1 * (index % 5)} direction="up" distance={20}>
              <div className="group relative bg-white rounded-xl p-6 border border-gray-100 hover:shadow-2xl hover:shadow-emerald-100/50 hover:border-emerald-100/50 transition-all duration-500 hover:-translate-y-2 flex flex-col items-center text-center overflow-hidden h-full">
                <div className={`absolute inset-0 bg-linear-to-br ${skill.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                <div className="relative mb-5">
                  <div className="w-16 h-16 flex items-center justify-center bg-gray-50 rounded-2xl group-hover:scale-110 transition-transform duration-500 shadow-sm group-hover:shadow-md relative z-10">
                    <img src={skill.logo} alt={skill.name} className="w-10 h-10 object-contain filter drop-shadow-sm" />
                  </div>
                  <div className={`absolute inset-0 bg-linear-to-br ${skill.color} blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500 scale-150`} />
                </div>
                <h3 className="font-bold text-gray-900 text-base mb-1 group-hover:text-emerald-500 transition-colors relative z-10">
                  {skill.name}
                </h3>
                <div className="mt-auto w-full pt-4 border-t border-gray-50 group-hover:border-gray-100 transition-colors relative z-10">
                  <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full bg-linear-to-r ${skill.color}`}
                      style={{ width: `${skill.percent}%` }}></div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.5} direction="up" distance={10}>
          <div className="mt-20 text-center">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gray-900 text-white text-sm font-bold shadow-xl shadow-gray-900/20 hover:scale-105 hover:shadow-2xl transition-all cursor-default">
              <Sparkles size={16} className="text-yellow-400 fill-yellow-400 animate-pulse" />
              <span>Constantly Evolving Tech Stack</span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Skills;