import React from 'react';
import SectionWrapper from './SectionWrapper';
import StatsCounter from './StatsCounter';

const AboutSection = () => (
    <SectionWrapper id="tentang" className="bg-cream-50 bg-pattern">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
                <div className="relative">
                    <img src="images/restaurant.avif" alt="Interior Restoran" className="relative rounded-lg shadow-2xl w-full h-auto object-cover z-10" />
                    <div className="absolute -bottom-4 -right-4 w-full h-full border-4 border-amber-200 rounded-lg"></div>
                </div>
                <div className="lg:-ml-8 bg-cream-50 z-20 relative p-8">
                    <h2 className="text-base font-bold uppercase text-amber-600 tracking-widest mb-3 font-sans">Kisah Kami</h2>
                    <h3 className="text-4xl md:text-5xl font-serif font-bold text-gray-800 mb-6">Mewariskan Kelezatan, Menciptakan Kenangan</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">Berawal dari mimpi sederhana untuk berbagi kelezatan masakan rumahan, CitaRasa lahir. Kami percaya bahwa makanan yang baik berasal dari hati. Oleh karena itu, kami hanya menggunakan bahan-bahan segar berkualitas tinggi.</p>
                    <p className="text-gray-600 mb-8 leading-relaxed">Setiap hidangan adalah cerminan dari tradisi kuliner Indonesia yang kaya, disajikan dengan sentuhan modern untuk menciptakan pengalaman bersantap yang unik.</p>
                    <div className="grid grid-cols-1 xs:grid-cols-3 sm:grid-cols-3 gap-6 xs:gap-4 sm:gap-4 border-t border-gray-200 pt-6 sm:pt-8">
                        <div className="text-center xs:text-left">
                            <StatsCounter value={7} label="Tahun Melayani" />
                        </div>
                        <div className="text-center xs:text-left">
                            <StatsCounter value={27} label="Pilihan Menu" />
                        </div>
                        <div className="text-center xs:text-left">
                            <StatsCounter value={8260} label="Pelanggan Puas" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </SectionWrapper>
);

export default AboutSection;