"use client";
import React, { useState, useEffect } from 'react';
import { ArrowLeft, Check, Calendar, Mail, Phone, Layers, Loader2, ArrowRight, UserRound, MessageSquare } from 'lucide-react';
import { SERVICES_DATA } from '../../Constants/HeaderConstant';
import { useParams, useRouter } from 'next/navigation';

const Booking = () => {
    const { id } = useParams();
    const router = useRouter();
    const [selectedService, setSelectedService] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [focusedField, setFocusedField] = useState(null);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        serviceType: ''
    });

    useEffect(() => {
        window.scrollTo(0, 0);
        const service = SERVICES_DATA.find(s => s.id === id);
        if (service) {
            setSelectedService(service);
            setFormData(prev => ({ ...prev, serviceType: service.value }));
        }
    }, []);


    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };



    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setTimeout(() => {
            setIsSubmitting(false);
            alert(`Booking request for ${formData.serviceType} sent successfully! We will contact you shortly.`);
            router.push('/');
        }, 2000);
    };

    if (!selectedService) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="text-center">
                    <Loader2 size={40} className="animate-spin text-emerald-500 mx-auto mb-4" />
                    <p className="text-gray-500">Loading Service Details...</p>
                </div>
            </div>
        );
    }

    const currentServiceLabel = SERVICES_DATA.find(s => s.value === formData.serviceType)?.title || "Select Service Type";

    return (
        <div className="min-h-screen bg-white animate-fadeIn ">
            {/* BOOKING HERO HEADER */}
            <div className="relative bg-emerald-900 pt-16 pb-48 lg:pt-30 lg:pb-64 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,var(--tw-gradient-stops))] from-emerald-500 via-emerald-900 to-black"></div>
                <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>

                <div className="container mx-auto px-4 md:px-8 pt-20 relative z-10">
                    <a href='/'

                        className="group absolute right-0 flex items-center gap-2 text-emerald-300/80 hover:text-white font-medium mb-8 transition-colors"
                    >
                        <div className="p-2 rounded-full bg-white/5 border border-white/10 group-hover:bg-white/20 transition-all">
                            <ArrowLeft size={18} />
                        </div>

                    </a>

                    <div className="text-center max-w-3xl mx-auto mb-16 animate-fadeIn">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/30 border border-emerald-500/40 text-emerald-500 text-xs font-semibold uppercase tracking-widest mb-4">
                            {selectedService.icon}
                            <span className='mt-0.5'>Booking Request</span>
                        </div>
                        <h2 className="text-6xl  font-bold text-white mb-4 tracking-tight">
                            {selectedService.title}
                        </h2>
                        <p className="text-xl text-center text-emerald-100/70 ">
                            You've made a great choice. Please fill out the details below to finalize your request for the <span className="text-white font-semibold">{selectedService.subtitle}</span> package.
                        </p>
                    </div>

                </div>
            </div>

            {/* FLOATING CONTENT CONTAINER */}
            <div className="container mx-auto px-4 md:px-8 relative z-20 -mt-32 lg:-mt-40 pb-24">
                <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">

                    {/* LEFT: SUMMARY CARD */}
                    <div className="lg:col-span-4 order-2 lg:order-1">
                        <div className="bg-gray-900 text-white rounded-xl shadow-xl shadow-gray-600/60  z-10 ring-4 ring-gray-600/40  p-8   sticky top-10">
                            <h3 className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-6">Order Summary</h3>

                            <div className="flex items-start gap-4 mb-8">
                                <div className="w-16 h-16 rounded-2xl  flex items-center justify-center bg-emerald-500/20 text-emerald-500 shrink-0">
                                    {selectedService.icon}
                                </div>
                                <div>
                                    <h4 className="font-bold text-white text-lg">{selectedService.title}</h4>
                                    <div className="flex items-center gap-1 mt-1">
                                        <p className="text-emerald-500 font-bold text-2xl">
                                            {selectedService.priceOneTime}
                                        </p>
                                        {selectedService.priceOneTime !== 'Custom' && (
                                            <span className="text-xs text-gray-400 font-medium">
                                                Starting
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-4 mb-8">
                                <p className="text-sm font-bold text-gray-400">Package Includes</p>
                                {selectedService.features.map((f, i) => (
                                    <div key={i} className="flex items-start gap-3 text-sm text-emerald-500 ">
                                        <Check size={20} className="text-white mt-0.5 shrink-0 bg-emerald-500 p-1 rounded-full" />
                                        <span>{f.name}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="p-4 bg-white/20 rounded-xl border border-white/30">
                                <div className="flex gap-3">
                                    <Calendar size={20} className="text-white shrink-0" />
                                    <p className="text-xs text-white leading-relaxed">
                                        After submission, we will contact you within 24 hours to schedule a kickoff meeting.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT: FORM */}
                    <div className="lg:col-span-8 order-1 lg:order-2">
                        <div className="bg-white rounded-xl  shadow-2xl  ring-5 ring-emerald-500/20 p-8 md:p-12 relative overflow-hidden">
                            {/* Decorative blob */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-50 rounded-xl blur-3xl translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-8 relative z-10">Client Information</h2>

                            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="name" className={`text-sm  font-semibold  ml-1 transition-colors duration-300 ${focusedField === 'name' ? 'text-emerald-500 ' : 'text-gray-700'}`} >
                                            Full Name
                                        </label>
                                        <div className="relative group mt-2">
                                            <div className={`absolute left-4 top-1/2 -translate-y-1/2 transition-all duration-300 ${focusedField === 'name' ? 'text-emerald-500 scale-110' : 'text-gray-400'}`}>
                                                <UserRound size={20} />
                                            </div>
                                            <input type="text" id="name" name='name' onFocus={() => setFocusedField('name')} onBlur={() => setFocusedField(null)} placeholder="John Doe" required className="w-full pl-12 pr-4 py-4 bg-gray-50/50 border border-gray-200 rounded-2xl text-gray-900 placeholder:text-gray-400 outline-none focus:bg-white focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 focus:shadow-xl transition-all duration-300 font-medium" />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="email" className={`text-sm font-semibold ml-1 transition-colors duration-300 ${focusedField === 'email' ? 'text-emerald-500' : 'text-gray-700'}`} >
                                            Email Address
                                        </label>
                                        <div className="relative mt-2 group">
                                            <div className={`absolute left-4 top-1/2 -translate-y-1/2 transition-all duration-300 ${focusedField === 'email' ? 'text-emerald-500 scale-110' : 'text-gray-400'}`}>
                                                <Mail size={20} />
                                            </div>
                                            <input type="email" id="email" name='email' onFocus={() => setFocusedField('email')} onBlur={() => setFocusedField(null)} placeholder="john@example.com" required className="w-full pl-12 pr-4 py-4 bg-gray-50/50 border border-gray-200 rounded-2xl text-gray-900 placeholder:text-gray-400 outline-none focus:bg-white focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 focus:shadow-xl transition-all duration-300 font-medium" />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="phone" className={`text-sm font-semibold mb-1 ml-1 transition-colors duration-300 ${focusedField === 'phone' ? 'text-emerald-500' : 'text-gray-700'}`} >
                                            Phone
                                        </label>
                                        <div className="relative mt-2 group">
                                            <div className={`absolute left-4 top-1/2 -translate-y-1/2 transition-all duration-300 ${focusedField === 'phone' ? 'text-emerald-500 scale-110' : 'text-gray-400'}`}>
                                                <Phone size={20} />
                                            </div>
                                            <input type="tel" id="number" name='number' onFocus={() => setFocusedField('phone')} onBlur={() => setFocusedField(null)} placeholder="+1 (555) 000-0000" className="w-full pl-12 pr-4 py-4 bg-gray-50/50 border border-gray-200 rounded-2xl text-gray-900 placeholder:text-gray-400 outline-none focus:bg-white focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 focus:shadow-xl transition-all duration-300 font-medium" />
                                        </div>
                                    </div>



                                    {/* Custom Service Dropdown */}
                                    <div className="space-y-2" >
                                        <label className="text-sm font-bold text-gray-700 ml-1">Service Type</label>
                                        <div className="relative">
                                            <div className={`w-full pl-11 pr-10 py-4 border rounded-xl outline-none transition-all font-medium text-gray-900 cursor-pointer flex items-center  bg-white border-emerald-500 ring-4 ring-emerald-500/10 `} >
                                                {currentServiceLabel}
                                            </div>
                                            {/* Icons */}
                                            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
                                                <Layers size={18} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="space-y-2 col-span-2">
                                        <label htmlFor="message" className={`text-sm font-semibold  ml-1 transition-colors duration-300 ${focusedField === 'message' ? 'text-emerald-500' : 'text-gray-700'}`}>
                                            Your Message
                                        </label>
                                        <div className="relative mt-2 group">
                                            <div className={`absolute left-4 top-5 transition-all duration-300 ${focusedField === 'message' ? 'text-emerald-500 scale-110' : 'text-gray-400'}`}>
                                                <MessageSquare size={20} />
                                            </div>
                                            <textarea id="message" name='message' rows={5} onFocus={() => setFocusedField('message')} onBlur={() => setFocusedField(null)} placeholder="Tell me about your project details..." required className="w-full pl-12 pr-4 py-4 bg-gray-50/50 border border-gray-200 rounded-2xl text-gray-900 placeholder:text-gray-400 outline-none focus:bg-white focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 focus:shadow-xl transition-all duration-300 font-medium resize-none"></textarea>
                                        </div>
                                    </div>
                                </div>


                                <div className="pt-4">
                                    <button type="submit" disabled={isSubmitting} className="w-full py-5 rounded-xl bg-linear-to-r from-emerald-500 to-emerald-900 text-white font-bold text-lg shadow-xl shadow-emerald-500/20 hover:shadow-emerald-500/40 hover:-translate-y-1 active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2"  >
                                        {isSubmitting ? (
                                            <>
                                                <Loader2 size={22} className="animate-spin" />
                                                <span>Processing...</span>
                                            </>
                                        ) : (
                                            <>
                                                <span>Confirm & Send Request</span>
                                                <ArrowRight size={20} />
                                            </>
                                        )}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Booking