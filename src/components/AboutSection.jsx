import React from 'react';
import SectionWrapper from './SectionWrapper';
import StatsCounter from './StatsCounter';

const AboutSection = () => (
    <SectionWrapper id="tentang" className="bg-cream-50 bg-pattern">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
                <div className="relative">
                    <img src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1974&auto=format&fit=crop" alt="Interior Restoran" className="relative rounded-lg shadow-2xl w-full h-auto object-cover z-10" />
                    <div className="absolute -bottom-4 -right-4 w-full h-full border-4 border-amber-200 rounded-lg"></div>
                </div>
                <div className="lg:-ml-8 bg-cream-50 z-20 relative p-8">
                    <h2 className="text-base font-bold uppercase text-amber-600 tracking-widest mb-3 font-sans">Kisah Kami</h2>
                    <h3 className="text-4xl md:text-5xl font-serif font-bold text-gray-800 mb-6">Mewariskan Kelezatan, Menciptakan Kenangan</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">Berawal dari mimpi sederhana untuk berbagi kelezatan masakan rumahan, CitaRasa lahir. Kami percaya bahwa makanan yang baik berasal dari hati. Oleh karena itu, kami hanya menggunakan bahan-bahan segar berkualitas tinggi.</p>
                    <p className="text-gray-600 mb-8 leading-relaxed">Setiap hidangan adalah cerminan dari tradisi kuliner Indonesia yang kaya, disajikan dengan sentuhan modern untuk menciptakan pengalaman bersantap yang unik.</p>
                    <div className="grid grid-cols-3 gap-4 border-t border-gray-200 pt-8">
                        <StatsCounter value={10} label="Tahun Melayani" />
                        <StatsCounter value={50} label="Pilihan Menu" />
                        <StatsCounter value={10000} label="Pelanggan Puas" />
                    </div>
                </div>
            </div>
        </div>
    </SectionWrapper>
);

export default AboutSection;