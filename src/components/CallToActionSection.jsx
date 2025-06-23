import React, { useEffect, useRef } from 'react';
import SectionWrapper from './SectionWrapper';

const CallToActionSection = () => {
    const sectionRef = useRef(null);
    useEffect(() => {
        const handleScroll = () => {
            const element = sectionRef.current;
            if (element) {
                const { top } = element.getBoundingClientRect();
                const speed = 0.3;
                element.style.backgroundPositionY = `${top * speed}px`;
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <SectionWrapper id="reservasi-cta" className="p-0">
            <div ref={sectionRef} className="relative text-white bg-fixed bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=2070&auto=format&fit=crop')"}}>
                <div className="absolute inset-0 bg-black/50"></div>
                <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-28 text-center">
                    <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Siap untuk Pengalaman Kuliner Terbaik?</h2>
                    <p className="text-gray-200 max-w-2xl mx-auto mb-8 text-lg">Pesan meja Anda sekarang dan biarkan kami memanjakan lidah Anda dengan cita rasa otentik Nusantara.</p>
                    <a href="#kontak" className="px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-bold rounded-full hover:shadow-xl hover:from-amber-600 hover:to-amber-600 transition-all duration-300 transform hover:scale-105 inline-block shadow-lg">Buat Reservasi Sekarang</a>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default CallToActionSection;