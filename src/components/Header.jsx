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

    const navLinks = ["Beranda", "Tentang", "Keunggulan", "Menu", "Testimoni", "Kontak"];
    
    return (
        <>
            <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 shadow-lg backdrop-blur-sm' : 'bg-white/90 backdrop-blur-sm'}`}>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-20">
                        <a href="#beranda" className="text-3xl font-serif font-bold text-gray-800">
                            CitaRasa<span className="text-amber-600">.</span>
                        </a>
                        
                        {/* Desktop Navigation */}
                        <nav className="hidden md:flex items-center space-x-10">
                            {navLinks.map(link => (
                                <a 
                                    key={link} 
                                    href={`#${link.toLowerCase().replace(/ /g, '-')}`} 
                                    className="text-gray-600 hover:text-amber-600 transition-colors duration-300 font-medium tracking-wide"
                                >
                                    {link}
                                </a>
                            ))}
                        </nav>
                        
                        <div className="hidden md:block">
                            <a 
                                href="#kontak" 
                                className="px-6 py-2.5 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-semibold rounded-full hover:shadow-lg hover:from-amber-600 hover:to-amber-700 transition-all duration-300 shadow-md transform hover:-translate-y-px"
                            >
                                Reservasi
                            </a>
                        </div>
                        
                        <button 
                            onClick={() => setIsOpen(!isOpen)} 
                            className="md:hidden text-gray-700 hover:text-amber-600 focus:outline-none transition-colors duration-200"
                        >
                            <Menu size={28} />
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Menu*/}
            {isOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden" onClick={() => setIsOpen(false)} />
            )}

            <div className={`fixed top-0 right-0 h-full w-80 bg-white z-50 transform transition-transform duration-300 ease-in-out md:hidden shadow-2xl ${
                isOpen ? 'translate-x-0' : 'translate-x-full'
            }`}>
                <div className="flex justify-between items-center p-6 border-b border-gray-100">
                    <a 
                        href="#beranda" 
                        onClick={() => setIsOpen(false)} 
                        className="text-2xl font-serif font-bold text-gray-800"
                    >
                        CitaRasa<span className="text-amber-600">.</span>
                    </a>
                    <button 
                        onClick={() => setIsOpen(false)} 
                        className="text-gray-700 hover:text-amber-600 transition-colors duration-200"
                    >
                        <X size={28} />
                    </button>
                </div>
                
                <nav className="flex flex-col p-6 space-y-6">
                    {navLinks.map(link => (
                        <a 
                            key={link} 
                            href={`#${link.toLowerCase().replace(/ /g, '-')}`} 
                            onClick={() => setIsOpen(false)} 
                            className="text-lg text-gray-700 font-medium hover:text-amber-600 transition-colors duration-300 py-2 border-b border-gray-100 last:border-b-0"
                        >
                            {link}
                        </a>
                    ))}
                    <a 
                        href="#kontak" 
                        onClick={() => setIsOpen(false)} 
                        className="mt-6 px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-semibold rounded-full hover:from-amber-600 hover:to-amber-700 transition-all duration-300 text-center shadow-lg"
                    >
                        Reservasi
                    </a>
                </nav>
            </div>
        </>
    );
};

export default Header;