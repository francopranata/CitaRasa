import React, { useState, useEffect } from "react";

const HeroSection = () => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="beranda"
      className="relative h-screen flex items-center justify-center text-center text-white overflow-hidden"
    >
      <div
        className="absolute inset-0 ken-burns"
        style={{
          backgroundImage:
            "url('/images/HeroSection.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
        }}
      ></div>
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="relative z-10 px-4">
        {/* <h1 className={`text-5xl md:text-7xl lg:text-8xl font-serif font-bold tracking-tight leading-tight mb-4 text-shadow-lg hero-title ${visible ? 'is-visible' : ''}`}>
                        {"Seni Rasa, Momen Berharga".split(" ").map((word, i) => <span key={i} className="hero-title-word"><span style={{transitionDelay: `${i * 0.1 + 0.5}s`}}>{word}</span></span>)}
                    </h1> */}
        <h1
          className={`text-5xl md:text-7xl lg:text-8xl font-serif font-bold tracking-tight leading-tight mb-4 text-shadow-lg hero-title ${
            visible ? "is-visible" : ""
          }`}
        >
          {"Seni Rasa, Momen Berharga".split(" ").map((word, i, arr) => (
            <React.Fragment key={i}>
              <span className="hero-title-word inline-block">
                <span style={{ transitionDelay: `${i * 0.1 + 0.5}s` }}>
                  {word}
                </span>
              </span>
              {i < arr.length - 1 && " "}
            </React.Fragment>
          ))}
        </h1>

        <p
          className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-gray-200 transition-opacity duration-1000 delay-1000"
          style={{ opacity: visible ? 1 : 0 }}
        >
          Temukan kembali kekayaan kuliner Nusantara dalam suasana yang hangat
          dan tak terlupakan.
        </p>
        <a
          href="#menu"
          className="px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-bold rounded-full transition-all duration-1000 delay-1000 hover:shadow-xl hover:from-amber-600 hover:to-amber-600 transform hover:scale-105 inline-block shadow-lg"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
          }}
        >
          Jelajahi Menu
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
