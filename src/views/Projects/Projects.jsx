"use client";
import React, { useState } from 'react';
import { ExternalLink, Github, Folder, Star, ArrowUpRight, Layers, ShoppingCart, GraduationCap, Clapperboard, Palette, Monitor } from 'lucide-react';
import Heading from '../../Components/Heading/Heading';
import { ScrollReveal } from '../../Components/ScrollReveal/ScrollReveal';

const PROJECTS = [
  {
    id: 1,
    title: "LuxeKart Ecommerce",
    category: "Ecommerce",
    image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=800&auto=format&fit=crop",
    description: "A premium headless Shopify storefront built for high-performance fashion brands. Features real-time inventory, AI styling recommendations, and a seamless checkout flow.",
    tags: ["Next.js", "Shopify", "Stripe"],
    links: { demo: "#", code: "#" },
    featured: true
  },
  {
    id: 2,
    title: "EduPrime LMS",
    category: "Education",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=800&auto=format&fit=crop",
    description: "A comprehensive learning management system offering live classrooms, interactive quizzes, and progress tracking for universities and online course creators.",
    tags: ["React", "WebRTC", "MongoDB"],
    links: { demo: "#", code: "#" },
    featured: false
  },
  {
    id: 3,
    title: "StreamVibe",
    category: "Entertainment",
    image: "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?q=80&w=800&auto=format&fit=crop",
    description: "A movie and TV show streaming platform aggregation tool. Allows users to track watchlists, view trailers, and get personalized AI recommendations based on viewing history.",
    tags: ["Vue.js", "TMDB", "Firebase"],
    links: { demo: "#", code: "#" },
    featured: true
  },
  {
    id: 4,
    title: "FinTech Mobile UI",
    category: "UI Design",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800&auto=format&fit=crop",
    description: "A complete design system and high-fidelity prototype for a modern banking application, focusing on accessibility, dark mode support, and fluid micro-interactions.",
    tags: ["Figma", "Prototyping"],
    links: { demo: "#", code: "#" },
    featured: false
  }
];

const CATEGORIES = [
  { id: 'All', label: 'All Work', icon: <Layers size={16} /> },
  { id: 'Ecommerce', label: 'Ecommerce', icon: <ShoppingCart size={16} /> },
  { id: 'Education', label: 'Education', icon: <GraduationCap size={16} /> },
  { id: 'Entertainment', label: 'Entertainment', icon: <Clapperboard size={16} /> },
  { id: 'UI Design', label: 'UI Design', icon: <Palette size={16} /> },
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [isAnimating, setIsAnimating] = useState(false);

  const handleCategoryChange = (categoryId) => {
    if (activeCategory === categoryId) return;
    setIsAnimating(true);
    setActiveCategory(categoryId);
    setTimeout(() => setIsAnimating(false), 300);
  };

  const filteredProjects = activeCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-20 md:py-28 bg-gray-50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] right-[10%] w-[500px] h-[500px] bg-emerald-100/50 rounded-full blur-[80px] mix-blend-multiply"></div>
        <div className="absolute bottom-[10%] left-[10%] w-[500px] h-[500px] bg-purple-100/50 rounded-full blur-[80px] mix-blend-multiply"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <ScrollReveal direction="down">
          <Heading heading={'Projects'} subtitle={'Featured'} subtitle2={'Works'} icon={<Folder size={14} />} desc={'Explore a curated selection of projects across digital commerce, education technology, and immersive media.'} />
        </ScrollReveal>

        <ScrollReveal delay={0.2} direction="up">
          <div className="flex justify-center mb-12">
            <div className="inline-flex flex-wrap justify-center bg-gray-100/80 backdrop-blur-sm p-1.5 rounded-2xl border border-gray-200/50">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => handleCategoryChange(cat.id)}
                  className={`flex items-center gap-2.5 px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 ${activeCategory === cat.id
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

        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-500 ease-in-out ${isAnimating ? 'opacity-0 translate-y-8 scale-95' : 'opacity-100 translate-y-0 scale-100'}`}>
          {filteredProjects.map((project, index) => (
            <ScrollReveal key={project.id} delay={0.1 * (index % 4)} direction="up" distance={30}>
              <div className="group bg-white rounded-[20px] overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-emerald-100/50 transition-all duration-500 hover:-translate-y-2 flex flex-col h-full">
                <div className="relative h-48 overflow-hidden">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gray-900/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <a href={project.links.demo} className="p-3 bg-white text-gray-900 rounded-full hover:scale-110 hover:bg-emerald-50 hover:text-emerald-500 transition-all duration-200 shadow-xl" title="View Demo">
                      <ExternalLink size={16} />
                    </a>
                    <a href={project.links.code} className="p-3 bg-gray-900 text-white border border-white/20 rounded-full hover:scale-110 hover:bg-black transition-all duration-200 shadow-xl" title="View Code">
                      <Github size={16} />
                    </a>
                  </div>
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 bg-white/95 backdrop-blur-md text-[10px] font-bold text-gray-800 rounded-lg shadow-lg border border-white/50 flex items-center gap-1.5">
                      {project.category === 'Ecommerce' && <ShoppingCart size={10} className="text-emerald-500" />}
                      {project.category === 'Education' && <GraduationCap size={10} className="text-emerald-500" />}
                      {project.category === 'Entertainment' && <Clapperboard size={10} className="text-emerald-500" />}
                      {project.category === 'UI Design' && <Palette size={10} className="text-emerald-500" />}
                      {project.category}
                    </span>
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-emerald-500 transition-colors line-clamp-1">
                      {project.title}
                    </h3>
                    {project.featured && (
                      <div className="text-amber-400 drop-shadow-sm" title="Featured Project">
                        <Star size={14} fill="currentColor" className="w-4 h-4" />
                      </div>
                    )}
                  </div>

                  <p className="text-gray-500 text-xs leading-relaxed mb-4 flex-1 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-100 mt-auto">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.slice(0, 2).map(tag => (
                        <span key={tag} className="text-[10px] font-semibold text-emerald-500 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-100/50">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <a href={project.links.demo} className="flex items-center gap-1 text-[10px] font-bold text-gray-400 hover:text-emerald-500 transition-colors group/link">
                      DETAILS <ArrowUpRight size={12} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;