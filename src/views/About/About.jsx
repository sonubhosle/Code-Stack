import React from 'react';
import { User, MapPin, Briefcase, Code, Sparkles, ExternalLink, Github, Twitter, Linkedin, Coffee, Terminal, Info, Instagram } from 'lucide-react';
import Heading from '../../Components/Heading/Heading';
import { ScrollReveal } from '../../Components/ScrollReveal/ScrollReveal';

const About = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[5%] left-[5%] w-72 h-72 bg-emerald-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute bottom-[10%] right-[5%] w-72 h-72 bg-purple-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-[40%] left-[40%] w-72 h-72 bg-pink-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal direction="down">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6">
              <Heading heading={'About Me'} subtitle={'Who I '} subtitle2={'Am'} icon={<Info size={14} />} desc={'A Web developer who creates clean, modern, and user-friendly web applications.'} />
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 auto-rows-[minmax(180px,auto)]">
            <ScrollReveal direction="right" className="col-span-1 md:col-span-2 lg:col-span-2 row-span-auto lg:row-span-2">
              <div className="h-full bg-gray-50 rounded-4xl p-8 border border-gray-100 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-emerald-500 shadow-sm group-hover:scale-110 transition-transform duration-300 border border-gray-100">
                      <Terminal size={24} />
                    </div>
                    <div className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-white border border-emerald-100 text-emerald-500 text-base font-medium cursor-default">
                      <span className="flex h-3 w-3 relative">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                      </span>
                      <span className='mt-0.5'>{'Available'}</span>
                    </div>
                  </div>

                  <h4 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 leading-tight">
                    Web Developer & <br />
                    <span className="text-emerald-500">Frontend Specialist</span>
                  </h4>
                  <p className="text-gray-600 leading-relaxed mb-6 text-sm md:text-base font-medium">
                    I'm a dedicated developer with a knack for creating elegant solutions. My journey began with curiosity and evolved into a career obsessed with pixel-perfection and performance. I bridge the gap between design and engineering.
                  </p>
                </div>

                <div className="mt-auto">
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3">Tech Stack</p>
                  <div className="flex flex-wrap gap-2">
                    {['React', 'Node.js', 'Next.js', 'TypeScript', 'Tailwind', 'JavaScript', 'MongoDB', 'Express Js'].map((tech, idx) => (
                      <ScrollReveal key={tech} delay={0.1 * idx} direction="up" distance={10}>
                        <span className="px-3 py-1.5 bg-white rounded-lg text-xs font-semibold text-gray-600 border border-gray-200 group-hover:border-emerald-200 group-hover:text-emerald-500 transition-colors shadow-sm cursor-default">
                          {tech}
                        </span>
                      </ScrollReveal>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={0.2} className="col-span-1 md:col-span-1 row-span-1 lg:row-span-2 relative overflow-hidden rounded-4xl group shadow-lg min-h-[300px] md:min-h-[400px]">
              <img
                src="https://i.postimg.cc/GhPv14hY/1690367467396-2.jpg"
                alt="Profile"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-90 transition-opacity"></div>
              <div className="absolute bottom-0 left-0 p-6 text-white translate-y-2 group-hover:translate-y-0 transition-transform duration-300 w-full">
                <div className="w-10 h-1 bg-emerald-500 mb-4 rounded-full"></div>
                <p className="font-bold text-xl ">Sonaji Bhosle</p>
                <p className="text-gray-300 text-xs font-medium tracking-wide">Basmath, Maharashtra</p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.3} className="col-span-1">
              <div className="h-full bg-white p-6 md:p-8 rounded-4xl border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 bg-emerald-50 rounded-xl text-emerald-500 group-hover:bg-emerald-500 group-hover:text-white transition-colors duration-300 shadow-sm">
                    <Briefcase size={22} />
                  </div>
                  <span className="text-[10px] font-bold text-gray-400 bg-gray-50 px-2 py-1 rounded-lg border border-gray-100 uppercase tracking-wider">Pro</span>
                </div>
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 tracking-tight">2+</div>
                <div className="text-gray-400 font-semibold text-xs uppercase tracking-wider">Years of Experience</div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.4} className="col-span-1">
              <div className="h-full bg-linear-to-br from-emerald-600 to-emerald-900 p-6 md:p-8 rounded-4xl shadow-emerald-200 text-white hover:shadow-2xl hover:shadow-emerald-500/20 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group">
                <div className="absolute -right-4 -bottom-4 opacity-10 transform rotate-12 group-hover:scale-125 transition-transform duration-500">
                  <Code size={100} />
                </div>
                <div className="flex justify-between items-start mb-4 relative z-10">
                  <div className="p-3 bg-white/20 rounded-2xl text-white backdrop-blur-sm shadow-sm">
                    <Sparkles size={22} />
                  </div>
                </div>
                <div className="text-3xl md:text-4xl font-bold mb-2 relative z-10 tracking-tight">10+</div>
                <div className="text-emerald-100 font-semibold text-xs uppercase tracking-wider relative z-10">Projects Completed</div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.5} className="col-span-1 md:col-span-2 lg:col-span-2">
              <div className="h-full bg-gray-950 text-white p-8 rounded-4xl shadow-lg group overflow-hidden relative">
                <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-emerald-500/20 transition-colors"></div>
                <div className="flex flex-col sm:flex-row items-center gap-5 relative z-10">
                  <div className="p-4 bg-white/5 rounded-2xl text-emerald-400 ring-1 ring-white/10 group-hover:ring-emerald-500/50 transition-all shadow-xl">
                    <MapPin size={24} />
                  </div>
                  <div className="text-center sm:text-left">
                    <h5 className="text-lg font-bold mb-1 tracking-tight">Basmath, Maharashtra</h5>
                    <p className="text-gray-400 text-xs font-medium uppercase tracking-widest">Available for WFH / WFO</p>
                  </div>
                </div>
                <div className="flex gap-3 relative z-10 mt-6 justify-center sm:justify-start">
                  {[
                    { icon: <Instagram size={20} />, href: "https://instagram.com" },
                    { icon: <Github size={20} />, href: "https://github.com" },
                    { icon: <Twitter size={20} />, href: "https://twitter.com" },
                    { icon: <Linkedin size={20} />, href: "https://linkedin.com" }
                  ].map((social, i) => (
                    <a
                      key={i}
                      href={social.href}
                      className="w-11 h-11 bg-white/5 rounded-full flex items-center justify-center hover:bg-emerald-500 hover:text-white hover:scale-110 transition-all duration-300 ring-1 ring-white/10 hover:ring-emerald-500/50"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.6} className="col-span-1 md:col-span-2 lg:col-span-2">
              <div className="h-full rounded-4xl p-0.5 bg-linear-to-br from-emerald-100/50 to-purple-100/50 hover:from-emerald-200 hover:to-purple-200 transition-all duration-500 group shadow-sm hover:shadow-xl">
                <div className="bg-white h-full w-full rounded-[1.8rem] p-6 md:p-8 flex flex-col justify-between group-hover:bg-white/95 transition-all overflow-hidden relative">
                  <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-emerald-200/50 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  <div className="text-center sm:text-left">
                    <h5 className="text-xl font-black text-gray-900 mb-2 tracking-tight">Let's Work Together</h5>
                    <p className="text-gray-500 text-xs font-medium leading-relaxed max-w-[240px] mx-auto sm:mx-0">Have a vision for a project? Let's turn it into a reality.</p>
                  </div>
                  <a href='#contact' className="inline-flex items-center justify-center gap-2 mt-6 px-6 py-3 bg-gray-900 text-white rounded-xl font-bold text-sm hover:bg-emerald-600 hover:shadow-lg hover:shadow-emerald-500/30 transition-all active:scale-95 group/btn">
                    Get In Touch <ExternalLink size={16} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;