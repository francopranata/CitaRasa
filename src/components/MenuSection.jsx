import React, { useState } from 'react';
import SectionWrapper from './SectionWrapper';
import { menuData } from '../data/mockData';

const MenuSection = () => {
    const [filter, setFilter] = useState('Semua');
    const categories = ['Semua', ...new Set(menuData.map(item => item.category))];
    const filteredMenu = filter === 'Semua' ? menuData : menuData.filter(item => item.category === filter);

    return (
        <SectionWrapper id="menu" className="bg-cream-50 bg-pattern">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-base font-bold uppercase text-amber-600 tracking-widest mb-3 font-sans">Pilihan Terbaik</h2>
                <h3 className="text-4xl md:text-5xl font-serif font-bold text-gray-800 mb-8">Jelajahi Menu Kami</h3>
                <div className="flex justify-center flex-wrap gap-2 md:gap-4 mb-12">
                    {categories.map(category => (<button key={category} onClick={() => setFilter(category)} className={`px-4 py-2 text-sm md:text-base font-medium rounded-full transition-all duration-300 ${filter === category ? 'bg-amber-600 text-white shadow-md' : 'bg-white text-gray-600 hover:bg-gray-100'}`}>{category}</button>))}
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {filteredMenu.map((item, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 group border border-gray-100 hover:shadow-amber-200/50">
                            <div className="relative h-56 overflow-hidden">
                                <img src={item.image} alt={item.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                                {item.isChefPick && <div className="absolute top-3 right-3 bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">REKOMENDASI</div>}
                            </div>
                            <div className="p-6 text-left">
                                <h4 className="text-xl font-serif font-bold text-gray-800 mb-2 truncate">{item.name}</h4>
                                <p className="text-gray-500 text-sm mb-4 h-16">{item.description}</p>
                                <div className="text-2xl font-sans font-bold text-amber-700">{item.price}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
};

export default MenuSection;