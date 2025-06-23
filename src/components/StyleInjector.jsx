import React from 'react';

const StyleInjector = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,500&family=Inter:wght@400;500;600&display=swap');
    body { font-family: 'Inter', sans-serif; color: #3f3f46; cursor: none; }
    h1, h2, h3, .font-serif { font-family: 'Playfair Display', serif; }
    .ken-burns { animation: ken-burns-animation 20s ease-out infinite; }
    @keyframes ken-burns-animation { 0% { transform: scale(1.05); } 50% { transform: scale(1.15); } 100% { transform: scale(1.05); } }
    .fade-in-section { opacity: 0; transform: translateY(40px); transition: opacity 0.8s ease-out, transform 0.8s ease-out; }
    .fade-in-section.is-visible { opacity: 1; transform: translateY(0); }
    .bg-pattern { background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E"); }
    #cursor-dot { width: 8px; height: 8px; background-color: #ca8a04; border-radius: 50%; position: fixed; top: 0; left: 0; pointer-events: none; transform: translate(-50%, -50%); z-index: 9999; transition: transform 0.15s ease-out, width 0.3s ease, height 0.3s ease, background-color 0.3s ease; }
    #cursor-dot.hovered { width: 40px; height: 40px; background-color: rgba(202, 138, 4, 0.2); }
    @media (max-width: 768px) { body { cursor: auto; } #cursor-dot { display: none; } }
    .hero-title-word { display: inline-block; overflow: hidden; }
    .hero-title-word > span { display: inline-block; transform: translateY(110%); transition: transform 0.8s cubic-bezier(0.25, 1, 0.5, 1); }
    .hero-title.is-visible .hero-title-word > span { transform: translateY(0); }
    #preloader { position: fixed; inset: 0; background-color: #fdfaf6; z-index: 10000; display: flex; align-items: center; justify-content: center; transition: opacity 0.5s ease-out, visibility 0.5s ease-out; }
    #preloader.loaded { opacity: 0; visibility: hidden; }
    #preloader .logo { font-family: 'Playfair Display', serif; font-size: 2.5rem; font-weight: bold; color: #3f3f46; opacity: 0; animation: preload-fade 1s ease-out forwards; }
    @keyframes preload-fade { to { opacity: 1; } }
  `}</style>
);

export default StyleInjector;
