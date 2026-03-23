"use client";
import React, { useState } from 'react';
import { Check, CreditCard, Star, ChevronsRight, Shield, Smartphone, Zap, Layers } from 'lucide-react';
import { SERVICES_DATA } from '../../Constants/HeaderConstant';
import { useRouter } from 'next/navigation';
import Heading from '../../Components/Heading/Heading';
import { ScrollReveal } from '../../Components/ScrollReveal/ScrollReveal';

const Services = () => {
    const [billingCycle, setBillingCycle] = useState('onetime');
    const router = useRouter();

    return (
        <section id="services" className="bg-white min-h-screen relative overflow-hidden">
            <div className="relative pt-24 pb-32 lg:pt-32 lg:pb-20 overflow-hidden">
                <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
                    <ScrollReveal direction="down">
                        <Heading heading={'Web Development Plans'} subtitle={'Choose Your'} subtitle2={'Website Package'} desc={'From simple static sites to complex custom applications, we have the perfect plan for your business needs.'} icon={<CreditCard size={14} />} />
                    </ScrollReveal>

                    <ScrollReveal delay={0.2} direction="up">
                        <div className="relative bg-gray-100/80 backdrop-blur-sm border border-gray-200 p-1.5 rounded-xl inline-flex">
                            <div className={`absolute top-1.5 bottom-1.5 bg-white border border-gray-200 rounded-xl shadow-md transition-all duration-300`}
                                style={{ left: billingCycle === "onetime" ? "6px" : "calc(50% + 6px)", width: "calc(50% - 12px)" }} />
                            <button onClick={() => setBillingCycle("onetime")} className={`relative px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 z-10 w-32 text-center
                                    ${billingCycle === "onetime" ? "text-emerald-500" : "text-gray-600 hover:text-emerald-500"}
                                `}>
                                One-Time
                            </button>
                            <button onClick={() => setBillingCycle("monthly")} className={`relative px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 z-10 w-32 text-center
                                    ${billingCycle === "monthly" ? "text-emerald-500" : "text-gray-600 hover:text-emerald-500"}
                                `}>
                                Retainer
                            </button>
                        </div>
                    </ScrollReveal>
                </div>
            </div>

            <div className="container mx-auto px-4 md:px-8 relative z-20 pb-24">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-10 items-start">
                    {SERVICES_DATA.map((service, index) => (
                        <ScrollReveal key={service.id} delay={0.1 * index} direction="up" distance={40}>
                            <div className={`relative group rounded-xl p-8 transition-all duration-300 hover:-translate-y-2 flex flex-col h-full ${service.recommended
                                ? 'bg-gray-900 text-white shadow-xl shadow-emerald-500/60 scale-105 z-10 ring-4 ring-emerald-500/20'
                                : 'bg-white text-gray-900 shadow-xl shadow-gray-200/30 ring-4 ring-gray-200/20 hover:shadow-2xl hover:shadow-emerald-900/10'
                                }`}>
                                {service.recommended && (
                                    <div className="absolute -top-4 inset-x-0 flex justify-center">
                                        <span className="bg-linear-to-r from-emerald-500 to-emerald-500 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest shadow-lg flex items-center gap-1">
                                            <Star size={10} fill="currentColor" /> Best Value
                                        </span>
                                    </div>
                                )}

                                <div className="flex gap-4">
                                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 ${service.recommended ? 'bg-emerald-500/20 text-emerald-400' : 'bg-emerald-50 text-emerald-500'}`}>
                                        {service.icon}
                                    </div>
                                    <div className="mb-2">
                                        <h3 className="text-xl font-bold">{service.title}</h3>
                                        <p className={`text-xs font-bold uppercase tracking-wide mt-1 ${service.recommended ? 'text-emerald-400' : 'text-emerald-500'}`}>
                                            {service.subtitle}
                                        </p>
                                    </div>
                                </div>

                                <div className="mt-2 mb-2 flex items-baseline gap-1">
                                    <span className={`text-4xl font-extrabold ${service.recommended ? 'text-white' : 'text-gray-900'}`}>
                                        {billingCycle === 'onetime' ? service.priceOneTime : service.priceMonthly}
                                    </span>
                                    {service.priceOneTime !== 'Custom' && (
                                        <span className={`text-sm font-medium ${service.recommended ? 'text-gray-400' : 'text-gray-500'}`}>
                                            {billingCycle === 'onetime' ? '/project' : '/month'}
                                        </span>
                                    )}
                                </div>

                                <p className={`text-sm leading-relaxed mb-6 ${service.recommended ? 'text-gray-400' : 'text-gray-500'}`}>
                                    {service.description}
                                </p>

                                <div className={`h-px w-full mb-6 ${service.recommended ? 'bg-gray-800' : 'bg-gray-100'}`}></div>

                                <div className="space-y-4 mb-8 flex-1">
                                    {service.features.map((feature, i) => (
                                        <div key={i} className="flex items-start gap-3">
                                            <div className={`mt-0.5 min-w-[18px] h-[18px] rounded-full flex items-center justify-center ${feature.highlight
                                                ? (service.recommended ? 'bg-emerald-500 text-white' : 'bg-emerald-500 text-white')
                                                : (service.recommended ? 'bg-gray-800 text-gray-400' : 'bg-gray-100 text-gray-400')
                                                }`}>
                                                <Check size={10} strokeWidth={3} />
                                            </div>
                                            <span className={`text-sm ${service.recommended ? 'text-gray-300' : 'text-gray-600'}`}>
                                                {feature.name}
                                            </span>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-auto">
                                    <button onClick={() => router.push(`/book/${service.id}`)} className={`group w-full py-4 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition ease-in-out duration-300 transform active:scale-95 ${service.recommended
                                        ? 'bg-linear-to-r from-emerald-500 to-emerald-500 text-white hover:from-emerald-500 hover:to-emerald-500 shadow-md shadow-emerald-500/30 '
                                        : 'bg-linear-to-r from-gray-600 to-gray-900 text-white hover:from-emerald-500 hover:to-emerald-500'
                                        }`}>
                                        <span>Book {service.title}</span>
                                        <ChevronsRight size={20} className='group-hover:translate-x-1 transition ease-in-out duration-300' />
                                    </button>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>

                <div className="mt-24 border-t border-gray-100 pt-12">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { icon: <Shield size={24} />, title: 'Secure Code', desc: 'Industry best practices' },
                            { icon: <Smartphone size={24} />, title: 'Responsive', desc: 'Mobile-first approach' },
                            { icon: <Zap size={24} />, title: 'Fast Speed', desc: 'Optimized performance' },
                            { icon: <Layers size={24} />, title: 'Scalable', desc: 'Built for growth' },
                        ].map((item, i) => (
                            <ScrollReveal key={i} delay={0.1 * i} direction="up" distance={20}>
                                <div className="flex flex-col items-center text-center gap-3 group h-full">
                                    <div className="p-3 bg-gray-50 rounded-2xl text-gray-400 group-hover:text-emerald-500 group-hover:bg-emerald-50 transition-colors duration-300">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 text-sm">{item.title}</h4>
                                        <p className="text-xs text-gray-500 mt-1">{item.desc}</p>
                                    </div>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;