import React, { useState } from 'react';
import SectionWrapper from './SectionWrapper';
import { testimonialsData } from '../data/mockData';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const TestimonialSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const nextTestimonial = () => setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
    const prevTestimonial = () => setCurrentIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
    
    return (
        <SectionWrapper id="testimoni" className="bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-base font-bold uppercase text-amber-600 tracking-widest mb-3 font-sans">Apa Kata Mereka</h2>
                <h3 className="text-4xl md:text-5xl font-serif font-bold text-gray-800 mb-12">Testimoni Pelanggan</h3>
                <div className="relative max-w-3xl mx-auto">
                    <div className="overflow-hidden relative h-64">
                        {testimonialsData.map((testimonial, index) => (
                            <div key={index} className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}>
                                <div className="flex flex-col items-center justify-center h-full">
                                    <div className="flex mb-4">{[...Array(5)].map((_, i) => <Star key={i} className="text-yellow-400 fill-current" size={20}/>)}</div>
                                    <p className="text-lg md:text-xl italic text-gray-600 mb-6">"{testimonial.quote}"</p>
                                    <div>
                                        <p className="font-bold text-gray-800 text-lg">{testimonial.name}</p>
                                        <p className="text-sm text-gray-500">{testimonial.role}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <button onClick={prevTestimonial} className="absolute top-1/2 -left-4 md:-left-12 transform -translate-y-1/2 bg-white/70 hover:bg-white rounded-full p-2 shadow-md transition"><ChevronLeft className="text-amber-600"/></button>
                    <button onClick={nextTestimonial} className="absolute top-1/2 -right-4 md:-right-12 transform -translate-y-1/2 bg-white/70 hover:bg-white rounded-full p-2 shadow-md transition"><ChevronRight className="text-amber-600"/></button>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default TestimonialSection;