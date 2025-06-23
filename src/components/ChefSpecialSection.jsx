import React from 'react';
import SectionWrapper from './SectionWrapper';

const ChefSpecialSection = () => (
    <SectionWrapper id="rekomendasi-chef" className="bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-cream-50 rounded-lg shadow-xl overflow-hidden grid lg:grid-cols-2 items-center">
                <div className="p-8 md:p-12 order-2 lg:order-1">
                    <h2 className="text-base font-bold uppercase text-amber-600 tracking-widest mb-3 font-sans">Rekomendasi Chef</h2>
                    <h3 className="text-4xl md:text-5xl font-serif font-bold text-gray-800 mb-4">Nasi Goreng Warisan</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">"Ini bukan sekadar nasi goreng. Ini adalah resep yang diwariskan dari nenek saya, disempurnakan dengan bahan premium dan sentuhan cinta. Setiap suapan akan membawa Anda pada kenangan masa kecil yang hangat. Wajib dicoba!"</p>
                    <p className="font-serif italic text-xl text-gray-700">- Chef Budi</p>
                </div>
                <div className="h-80 lg:h-full w-full order-1 lg:order-2 overflow-hidden">
                    <img src="/public/images/NasiGorengWarisan.png" alt="Nasi Goreng Warisan" className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"/>
                </div>
            </div>
        </div>
    </SectionWrapper>
);

export default ChefSpecialSection;