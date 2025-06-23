import React from 'react';
import SectionWrapper from './SectionWrapper';
import { MapPin, Phone, Mail } from 'lucide-react';

const ContactSection = () => (
    <SectionWrapper id="kontak" className="bg-cream-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h2 className="text-base font-bold uppercase text-amber-600 tracking-widest mb-3 font-sans">Hubungi Kami</h2>
                <h3 className="text-4xl md:text-5xl font-serif font-bold text-gray-800">Reservasi atau Bertanya</h3>
            </div>
            <div className="grid lg:grid-cols-5 gap-10">
                <div className="lg:col-span-2 space-y-8">
                    {[{ icon: MapPin, title: "Alamat Kami", text: "Jl. Kuliner No. 123, Jakarta Pusat" }, { icon: Phone, title: "Telepon", text: "(021) 1234 5678" }, { icon: Mail, title: "Email", text: "reservasi@citarasa.com" }].map((item, index) => (
                        <div key={index} className="flex items-start">
                            <div className="flex-shrink-0 w-14 h-14 bg-white text-amber-600 rounded-full flex items-center justify-center shadow-sm">
                                <item.icon size={28} />
                            </div>
                            <div className="ml-5">
                                <h4 className="text-lg font-semibold text-gray-800">{item.title}</h4>
                                <p className="text-gray-600">{item.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="lg:col-span-3 bg-white p-8 rounded-lg shadow-xl">
                    <form>
                        <div className="grid sm:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nama</label>
                                <input type="text" id="name" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition" placeholder="Nama Anda" />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                <input type="email" id="email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition" placeholder="Email Anda" />
                            </div>
                        </div>
                        <div className="mt-6">
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Pesan</label>
                            <textarea id="message" rows="5" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition" placeholder="Tuliskan pesan atau permintaan reservasi Anda..."></textarea>
                        </div>
                        <div className="mt-6 text-right">
                            <button type="submit" className="px-8 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-bold rounded-full hover:shadow-lg hover:from-amber-600 hover:to-amber-600 transition-all duration-300 shadow-md transform hover:-translate-y-px">Kirim Pesan</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </SectionWrapper>
);

export default ContactSection;