import React from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { Button } from './ui/button';
import { heroData } from '../data/mock';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${heroData.image})`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#2E5238]/95 via-[#2E5238]/85 to-[#2E5238]/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 py-32">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight animate-in fade-in slide-in-from-bottom-4 duration-700">
            {heroData.title}
          </h1>
          <p className="text-xl md:text-2xl text-[#F0EAD6] mb-10 leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
            {heroData.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
            <Button
              onClick={() => scrollToSection('contact')}
              size="lg"
              className="bg-[#8C4137] hover:bg-[#8C4137]/90 text-white text-lg px-8 py-6 group"
            >
              {heroData.cta}
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Button>
            <Button
              onClick={() => scrollToSection('services')}
              size="lg"
              variant="outline"
              className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 text-lg px-8 py-6"
            >
              {heroData.ctaSecondary}
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={() => scrollToSection('services')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce"
      >
        <ChevronDown size={32} className="text-white/80 hover:text-white transition-colors" />
      </button>
    </section>
  );
};

export default Hero;
