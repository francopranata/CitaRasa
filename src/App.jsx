// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import React, {useState, useEffect} from "react";
import "./App.jsx";
import Header from "./components/Header";
import CustomCursor from "./components/CustomCursor";
import StyleInjector from "./components/StyleInjector";
import Preloader from "./components/Preloader";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection.jsx";
import FeaturedSection from "./components/FeaturedSection.jsx";
import ChefSpecialSection from "./components/ChefSpecialSection.jsx";
import MenuSection from "./components/MenuSection.jsx";
import TestimonialSection from "./components/TestimonialSection.jsx";
import CallToActionSection from "./components/CallToActionSection.jsx";
import ContactSection from "./components/ContactSection.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
        const preloader = document.getElementById('preloader');
        if (preloader) {
            preloader.classList.add('loaded');
        }
        setTimeout(() => setLoading(false), 500);
    }, 1500); // Durasi preloader
    return () => clearTimeout(timer);
}, []);

  return (
    <>
      <div className="bg-cream-50 font-sans text-gray-800 antialiased">
        <StyleInjector />
        {loading && <Preloader />}
        {
          !loading && (
            <>
              <CustomCursor />
              <Header />
              <main>
                <HeroSection />
                <AboutSection />
                <FeaturedSection />
                <ChefSpecialSection />
                <MenuSection />
                <TestimonialSection />
                <CallToActionSection />
                <ContactSection />
              </main>
              <Footer />
            </>
            
          )
        }
      </div>
    </>
  );
}

export default App;
