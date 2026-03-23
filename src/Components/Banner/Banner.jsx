"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Terminal, Download, ChevronsRight, Github, Linkedin, Twitter, Sparkles } from 'lucide-react';
import { ScrollReveal } from '../ScrollReveal/ScrollReveal';

const CODE_SNIPPETS = [
  {
    title: "Modern Frontend",
    file: "Hero.jsx",
    lang: "React",
    color: "from-blue-400 to-cyan-400",
    code: (
      <div className="space-y-1">
        <div className="flex gap-2"><span className="text-purple-400">const</span> <span className="text-blue-300">Portfolio</span> <span className="text-white">=</span> <span className="text-yellow-200">()</span> <span className="text-purple-400">=&gt;</span> <span className="text-yellow-200">{'{'}</span></div>
        <div className="pl-4 flex gap-2"><span className="text-purple-400">return</span> <span className="text-yellow-200">(</span></div>
        <div className="pl-8 flex gap-2"><span className="text-gray-400">&lt;</span><span className="text-red-400">Section</span> <span className="text-orange-300">className</span><span className="text-white">=</span><span className="text-green-300">"premium"</span><span className="text-gray-400">&gt;</span></div>
        <div className="pl-12 flex gap-2"><span className="text-gray-400">&lt;</span><span className="text-red-400">Creativity</span> <span className="text-gray-400">/&gt;</span></div>
        <div className="pl-8 flex gap-2"><span className="text-gray-400">&lt;/</span><span className="text-red-400">Section</span><span className="text-gray-400">&gt;</span></div>
        <div className="pl-4 flex gap-2"><span className="text-yellow-200">)</span>;</div>
        <div><span className="text-yellow-200">{'}'}</span>;</div>
      </div>
    )
  },
  {
    title: "Backend Core",
    file: "api.ts",
    lang: "Node.js",
    color: "from-green-400 to-emerald-400",
    code: (
      <div className="space-y-1">
        <div className="flex gap-2"><span className="text-purple-400">async</span> <span className="text-purple-400">function</span> <span className="text-blue-300">deploy</span><span className="text-yellow-200">()</span> <span className="text-yellow-200">{'{'}</span></div>
        <div className="pl-4 flex gap-2"><span className="text-purple-400">const</span> <span className="text-blue-300">success</span> <span className="text-white">=</span> <span className="text-purple-400">await</span> <span className="text-blue-300">cloud</span>.<span className="text-yellow-400">push</span><span className="text-yellow-200">()</span>;</div>
        <div className="pl-4 flex gap-2"><span className="text-gray-500">// Optimized for scale</span></div>
        <div className="pl-4 flex gap-2"><span className="text-purple-400">if</span> <span className="text-yellow-200">(</span><span className="text-blue-300">success</span><span className="text-yellow-200">)</span> <span className="text-purple-400">return</span> <span className="text-green-300">"🚀 Online"</span>;</div>
        <div><span className="text-yellow-200">{'}'}</span></div>
      </div>
    )
  }
];

const FloatingIcon = ({ icon: Icon, color, delay, x, y }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0 }}
    animate={{
      opacity: 0.4,
      scale: 1,
      y: [y, y - 20, y],
      x: [x, x + 10, x]
    }}
    transition={{
      opacity: { duration: 1, delay },
      scale: { duration: 1, delay },
      y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay },
      x: { duration: 5, repeat: Infinity, ease: "easeInOut", delay }
    }}
    className={`absolute ${color} pointer-events-none hidden lg:block`}
    style={{ left: x, top: y }}
  >
    <Icon size={32} strokeWidth={1.5} />
  </motion.div>
);

const Banner = () => {
  const [activeSnippetIndex, setActiveSnippetIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSnippetIndex((prev) => (prev + 1) % CODE_SNIPPETS.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const activeSnippet = CODE_SNIPPETS[activeSnippetIndex];

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden bg-white pt-20">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_500px_at_50%_200px,#10b98110,transparent)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      {/* Floating Elements */}
      <FloatingIcon icon={Code2} color="text-emerald-500" delay={0.5} x="10%" y="20%" />
      <FloatingIcon icon={Terminal} color="text-purple-500" delay={0.8} x="85%" y="15%" />
      <FloatingIcon icon={Sparkles} color="text-amber-500" delay={1.1} x="15%" y="70%" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-12 items-center">

          {/* Left Side: Content */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left pt-12 lg:pt-10">
            <ScrollReveal direction="down" delay={0.2}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-emerald-50 border border-emerald-100/50 text-emerald-500 text-sm font-bold shadow-sm backdrop-blur-sm mx-auto lg:mx-0">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span>Crafting Digital Excellence</span>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.4}>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-[1.05] tracking-tight">
                Design. Code.<br />
                <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-500 via-emerald-600 to-teal-500 underline decoration-emerald-200/50 decoration-4 underline-offset-8">
                  Innovate.
                </span>
              </h1>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.6}>
              <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium">
                I’m a Full-Stack Developer specializing in building high-end, performant web applications. Transforming complex problems into elegant, scalable digital solutions.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.8}>
              <div className="flex flex-wrap justify-center lg:justify-start gap-5 pt-4">
                <a
                  href="#projects"
                  className="group relative px-8 py-4 rounded-2xl bg-gray-900 text-white font-bold overflow-hidden transition-all hover:shadow-2xl hover:shadow-emerald-500/20 active:scale-95"
                >
                  <div className="absolute inset-0 bg-linear-to-r from-emerald-500 to-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="relative flex items-center gap-2">
                    View Projects <ChevronsRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </a>
                <a
                  href="#contact"
                  className="group px-8 py-4 rounded-2xl bg-white text-gray-900 border-2 border-gray-100 font-bold hover:border-emerald-500 transition-all hover:bg-emerald-50 active:scale-95 flex items-center gap-2"
                >
                  <Download size={20} className="group-hover:translate-y-1 transition-transform" />
                  Download CV
                </a>
              </div>
            </ScrollReveal>

          </div>

          {/* Right Side: Visual Element */}
          <div className="lg:col-span-5 relative">
            <ScrollReveal direction="left" delay={0.6} className="relative w-full aspect-square max-w-[500px] mx-auto">
              {/* Glass Card Container */}
              <div className="relative z-10 p-6 md:p-8 rounded-[3rem] bg-white/40 backdrop-blur-xl border border-white/60 shadow-2xl overflow-hidden group">
                {/* Internal Glow */}
                <div className="absolute -top-20 -right-20 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl group-hover:bg-emerald-500/20 transition-colors" />

                {/* Mock Window Header */}
                <div className="flex items-center justify-between mb-6 px-2">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400/80 shadow-[0_0_10px_rgba(248,113,113,0.4)]" />
                    <div className="w-3 h-3 rounded-full bg-amber-400/80" />
                    <div className="w-3 h-3 rounded-full bg-emerald-400/80" />
                  </div>
                  <div className="px-3 py-1 rounded-full bg-gray-900/5 border border-black/5 text-[10px] font-mono text-gray-500 flex items-center gap-2">
                    <Terminal size={10} />
                    {activeSnippet?.file || 'index.js'}
                  </div>
                </div>

                {/* Code Display Area */}
                <div className="relative bg-gray-950/90 rounded-2xl p-6 font-mono text-sm leading-relaxed shadow-inner overflow-hidden min-h-[220px]">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeSnippetIndex}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.5 }}
                      className="text-gray-300"
                    >
                      {activeSnippet?.code}
                    </motion.div>
                  </AnimatePresence>

                  {/* Syntax Highlight Glow */}
                  <div className="absolute bottom-0 right-0 w-32 h-32 bg-emerald-500/20 blur-[60px] pointer-events-none" />
                </div>

                {/* Tech Stack Icons Strip */}
                <div className="mt-8 flex items-center justify-between">
                  <div className="flex gap-4 items-center">
                    <span className={`text-sm font-bold bg-linear-to-r ${activeSnippet?.color || 'from-gray-400 to-gray-600'} bg-clip-text text-transparent`}>
                      {activeSnippet?.lang || 'Dev'} Master
                    </span>
                  </div>
                  <div className="flex -space-x-2">
                    {['react', 'nodejs', 'nextjs', 'typescript'].map((tech, i) => (
                      <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-white shadow-sm flex items-center justify-center p-1.5 grayscale hover:grayscale-0 transition-all cursor-crosshair">
                        <img src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech}/${tech}-original.svg`} alt={tech} className="w-full h-full object-contain" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Decorative Rings */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] border border-emerald-100 rounded-full opacity-50 animate-[spin_20s_linear_infinite]" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-gray-100 rounded-full opacity-30 animate-[spin_30s_linear_infinite_reverse]" />
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Banner;