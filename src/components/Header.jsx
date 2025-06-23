import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    
    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = ["Beranda", "Tentang", "Keunggulan", "Menu", "Testimoni"];
    
    return (
        <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 shadow-lg backdrop-blur-sm' : 'bg-transparent'}`}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                <a href="#beranda" className="text-3xl font-serif font-bold text-gray-800">CitaRasa<span className="text-amber-600">.</span></a>
                <nav className="hidden md:flex items-center space-x-10">
                    {navLinks.map(link => (<a key={link} href={`#${link.toLowerCase().replace(/ /g, '-')}`} className="text-gray-600 hover:text-amber-600 transition-colors duration-300 font-medium tracking-wide">{link}</a>))}
                </nav>
                <div className="hidden md:block">
                    <a href="#kontak" className="px-6 py-2.5 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-semibold rounded-full hover:shadow-lg hover:from-amber-600 hover:to-amber-600 transition-all duration-300 shadow-md transform hover:-translate-y-px">Reservasi</a>
                </div>
                <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-gray-700 hover:text-amber-600 focus:outline-none"><Menu size={28} /></button>
                </div>
            </div>
            <div className={`fixed inset-0 bg-white z-50 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out md:hidden`}>
                <div className="flex justify-between items-center p-4 border-b">
                <a href="#beranda" onClick={() => setIsOpen(false)} className="text-2xl font-serif font-bold text-gray-800">CitaRasa<span className="text-amber-600">.</span></a>
                <button onClick={() => setIsOpen(false)} className="text-gray-700 hover:text-amber-600"><X size={32} /></button>
                </div>
                <nav className="flex flex-col items-center justify-center h-full -mt-20 space-y-8">
                {navLinks.map(link => (<a key={link} href={`#${link.toLowerCase().replace(/ /g, '-')}`} onClick={() => setIsOpen(false)} className="text-2xl text-gray-700 font-semibold hover:text-amber-600 transition-colors duration-300">{link}</a>))}
                <a href="#kontak" onClick={() => setIsOpen(false)} className="mt-8 px-8 py-4 bg-amber-600 text-white font-bold rounded-full hover:bg-amber-700 transition-all duration-300 text-xl">Reservasi</a>
                </nav>
            </div>
        </header>
    );
};

export default Header;