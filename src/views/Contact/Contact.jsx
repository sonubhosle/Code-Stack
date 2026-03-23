"use client";
import React, { useRef, useState } from 'react';
import { Send, UserRound, Mail, Phone, MessageSquare, MapPin, Loader2, Github, Twitter, Linkedin, Globe } from 'lucide-react';
import { CONTACT_INFO } from '../../Constants/HeaderConstant';
import { toast } from 'react-toastify';
import emailjs from "@emailjs/browser";
import { ScrollReveal } from '../../Components/ScrollReveal/ScrollReveal';

const Contact = () => {
  const formRef = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const SERVICE_ID = process.env.NEXT_PUBLIC_CONTACT_SERVICE_ID;
  const TEMPLATE_ID = process.env.NEXT_PUBLIC_CONTACT_TEMPLATE_ID;
  const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAIL_JS_PUBLIC_ID;

  const [focusedField, setFocusedField] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    const data = Object.fromEntries(new FormData(formRef.current).entries());
    const { name, email, number, message } = data;

    if (!name || !email || !number || !message) {
      toast.error("All fields are required!");
      return;
    }

    setIsSubmitting(true);
    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY);
      toast.success("Message sent successfully!");
      formRef.current.reset();
    } catch (error) {
      toast.error("Failed to send message. Try again later.");
      console.log("EmailJS Error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-200 h-200 bg-emerald-200/30 rounded-full blur-[120px] mix-blend-multiply animate-pulse"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-150 h-150 bg-purple-200/30 rounded-full blur-[100px] mix-blend-multiply"></div>
        <div className="absolute top-[40%] left-[30%] w-100 h-100 bg-pink-100/40 rounded-full blur-[80px] mix-blend-multiply opacity-70"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-start">

          <div className="lg:col-span-5 flex flex-col gap-10">
            <ScrollReveal direction="right">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-white border border-emerald-100 text-emerald-500 text-base font-medium mb-8 cursor-default">
                  <span className="flex h-3 w-3 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                  </span>
                  <span className='mt-0.5'>{'Available For Work'}</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 tracking-tight leading-[1.2]">
                  Let's Start a <br />
                  <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-500 to-teal-500">Conversation.</span>
                </h2>
                <p className="text-lg text-gray-500 leading-relaxed">
                  Interested in working together? We should queue up a time to chat. I’ll buy the coffee.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-4">
              {[
                { icon: <Mail size={20} />, label: "Email Me", value: CONTACT_INFO.email, href: `mailto:${CONTACT_INFO.email}`, color: "emerald" },
                { icon: <Phone size={24} />, label: "Call Me", value: CONTACT_INFO.phone, href: `tel:${CONTACT_INFO.phone}`, color: "purple" },
                { icon: <MapPin size={24} />, label: "Location", value: "Basmath, Maharashtra", color: "pink" }
              ].map((item, idx) => (
                <ScrollReveal key={idx} delay={0.1 * idx} direction="right">
                  <a href={item.href || "#"} className={`group px-5 py-3 h-full bg-white rounded-xl border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center gap-5`}>
                    <div className={`w-10 h-10 bg-${item.color}-50 rounded-xl flex items-center justify-center text-${item.color}-600 group-hover:bg-${item.color}-600 group-hover:text-white transition-colors `}>
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">{item.label}</p>
                      <h4 className="text-gray-900 text-base group-hover:text-emerald-500 transition-colors break-all sm:break-normal">
                        {item.value}
                      </h4>
                    </div>
                  </a>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal speed="fast" direction="up" delay={0.4}>
              <div className="flex gap-4 pt-2">
                {[
                  { icon: <Github size={20} />, href: "#" },
                  { icon: <Linkedin size={20} />, href: "#" },
                  { icon: <Twitter size={20} />, href: "#" },
                  { icon: <Globe size={20} />, href: "#" }
                ].map((social, i) => (
                  <a key={i} href={social.href} className="w-12 h-12 rounded-xl bg-white border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-emerald-500 hover:text-white hover:border-transparent hover:-translate-y-1 transition-all duration-300 shadow-sm">
                    {social.icon}
                  </a>
                ))}
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal direction="left" className="lg:col-span-7">
            <div className="bg-white/80 backdrop-blur-xl rounded-[2.5rem] p-8 md:p-10 shadow-2xl shadow-emerald-100 border border-white/50 relative overflow-hidden">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Send a Message</h3>
                <p className="text-gray-500">I usually respond within 24 hours. No spam, promised.</p>
              </div>

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className={`text-sm font-semibold ml-1 transition-colors duration-300 ${focusedField === 'name' ? 'text-emerald-500 ' : 'text-gray-700'}`}>Full Name</label>
                  <div className="relative group mt-2">
                    <div className={`absolute left-4 top-1/2 -translate-y-1/2 transition-all duration-300 ${focusedField === 'name' ? 'text-emerald-500 scale-110' : 'text-gray-400'}`}><UserRound size={20} /></div>
                    <input type="text" id="name" name='name' onFocus={() => setFocusedField('name')} onBlur={() => setFocusedField(null)} placeholder="John Doe" required className="w-full pl-12 pr-4 py-4 bg-gray-50/50 border border-gray-200 rounded-2xl text-gray-900 placeholder:text-gray-400 outline-none focus:bg-white focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 focus:shadow-xl transition-all duration-300 font-medium" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="email" className={`text-sm font-semibold ml-1 transition-colors duration-300 ${focusedField === 'email' ? 'text-emerald-500' : 'text-gray-700'}`}>Email Address</label>
                    <div className="relative mt-2 group">
                      <div className={`absolute left-4 top-1/2 -translate-y-1/2 transition-all duration-300 ${focusedField === 'email' ? 'text-emerald-500 scale-110' : 'text-gray-400'}`}><Mail size={20} /></div>
                      <input type="email" id="email" name='email' onFocus={() => setFocusedField('email')} onBlur={() => setFocusedField(null)} placeholder="john@example.com" required className="w-full pl-12 pr-4 py-4 bg-gray-50/50 border border-gray-200 rounded-2xl text-gray-900 placeholder:text-gray-400 outline-none focus:bg-white focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 focus:shadow-xl transition-all duration-300 font-medium" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className={`text-sm font-semibold mb-1 ml-1 transition-colors duration-300 ${focusedField === 'phone' ? 'text-emerald-500' : 'text-gray-700'}`}>Phone</label>
                    <div className="relative mt-2 group">
                      <div className={`absolute left-4 top-1/2 -translate-y-1/2 transition-all duration-300 ${focusedField === 'phone' ? 'text-emerald-500 scale-110' : 'text-gray-400'}`}><Phone size={20} /></div>
                      <input type="tel" id="number" name='number' onFocus={() => setFocusedField('phone')} onBlur={() => setFocusedField(null)} placeholder="+1 (555) 000-0000" className="w-full pl-12 pr-4 py-4 bg-gray-50/50 border border-gray-200 rounded-2xl text-gray-900 placeholder:text-gray-400 outline-none focus:bg-white focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 focus:shadow-xl transition-all duration-300 font-medium" />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className={`text-sm font-semibold ml-1 transition-colors duration-300 ${focusedField === 'message' ? 'text-emerald-500' : 'text-gray-700'}`}>Your Message</label>
                  <div className="relative mt-2 group">
                    <div className={`absolute left-4 top-5 transition-all duration-300 ${focusedField === 'message' ? 'text-emerald-500 scale-110' : 'text-gray-400'}`}><MessageSquare size={20} /></div>
                    <textarea id="message" name='message' rows={5} onFocus={() => setFocusedField('message')} onBlur={() => setFocusedField(null)} placeholder="Tell me about your project details..." required className="w-full pl-12 pr-4 py-4 bg-gray-50/50 border border-gray-200 rounded-2xl text-gray-900 placeholder:text-gray-400 outline-none focus:bg-white focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 focus:shadow-xl transition-all duration-300 font-medium resize-none"></textarea>
                  </div>
                </div>

                <button type="submit" disabled={isSubmitting} className="w-full py-4.5 bg-linear-to-r from-emerald-500 to-emerald-900 text-white font-bold text-lg rounded-2xl shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50 hover:-translate-y-1 active:translate-y-0 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed group relative overflow-hidden">
                  <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
                  {isSubmitting ? (
                    <>
                      <Loader2 size={22} className="animate-spin" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;