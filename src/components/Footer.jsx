import React from 'react';

const Footer = () => (
    <footer className="bg-gray-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 text-center md:text-left">
                <div className="md:col-span-2 lg:col-span-1">
                    <h3 className="text-3xl font-serif font-bold mb-4">CitaRasa<span className="text-amber-500">.</span></h3>
                    <p className="text-gray-400">Seni kuliner Nusantara dalam setiap hidangan, disajikan untuk momen berharga Anda.</p>
                </div>
                <div>
                    <h4 className="font-semibold text-lg mb-4 uppercase tracking-wider">Tautan</h4>
                    <ul className="space-y-2">
                        <li><a href="#tentang" className="text-gray-400 hover:text-amber-500 transition">Tentang Kami</a></li>
                        <li><a href="#menu" className="text-gray-400 hover:text-amber-500 transition">Menu</a></li>
                        <li><a href="#kontak" className="text-gray-400 hover:text-amber-500 transition">Reservasi</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-semibold text-lg mb-4 uppercase tracking-wider">Sosial</h4>
                    <ul className="space-y-2">
                        <li><a href="#" className="text-gray-400 hover:text-amber-500 transition">Instagram</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-amber-500 transition">Facebook</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-amber-500 transition">Twitter</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-semibold text-lg mb-4 uppercase tracking-wider">Jam Buka</h4>
                    <ul className="space-y-2 text-gray-400">
                        <li>Senin - Jumat: 10:00 - 22:00</li>
                        <li>Sabtu - Minggu: 09:00 - 23:00</li>
                    </ul>
                </div>
            </div>
            <div className="mt-12 pt-8 border-t border-gray-700 text-center text-gray-500 text-sm">
                <p>&copy; {new Date().getFullYear()} CitaRasa.</p>
            </div>
        </div>
    </footer>
);

export default Footer;