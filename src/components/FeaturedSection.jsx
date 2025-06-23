import React from 'react';
import SectionWrapper from './SectionWrapper';
import { Leaf, UtensilsCrossed, Award } from 'lucide-react';

const FeaturedSection = () => (
    <SectionWrapper id="keunggulan" className="bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-base font-bold uppercase text-amber-600 tracking-widest mb-3 font-sans">Mengapa Memilih Kami</h2>
                <h3 className="text-4xl md:text-5xl font-serif font-bold text-gray-800">Keunggulan CitaRasa</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-10">
                {[{ icon: Leaf, title: "Bahan Terbaik", text: "Kami bekerja sama dengan petani lokal untuk mendapatkan hasil bumi organik paling segar." }, { icon: UtensilsCrossed, title: "Resep Otentik", text: "Menghormati resep tradisional dengan sentuhan modern yang inovatif." }, { icon: Award, title: "Pelayanan Juara", text: "Tim kami berdedikasi untuk memberikan pengalaman bersantap yang tak terlupakan." }].map((item, index) => (
                    <div key={index} className="text-center p-8 bg-cream-50/50 rounded-lg transform hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl group border-2 border-transparent hover:border-amber-200">
                        <div className="inline-block p-5 bg-amber-100 rounded-full mb-6 transition-transform duration-300 group-hover:scale-110">
                            <item.icon className="text-amber-600" size={32}/>
                        </div>
                        <h4 className="text-2xl font-serif font-bold text-gray-800 mb-3">{item.title}</h4>
                        <p className="text-gray-600 leading-relaxed">{item.text}</p>
                    </div>
                ))}
            </div>
        </div>
    </SectionWrapper>
);

export default FeaturedSection;