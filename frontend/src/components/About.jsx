import React from 'react';
import { aboutData } from '../data/mock';

const About = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <h2 className="text-4xl md:text-5xl font-bold text-[#2E5238] mb-6">
              {aboutData.title}
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              {aboutData.subtitle}
            </p>
            <p className="text-base text-gray-600 mb-8 leading-relaxed">
              {aboutData.description}
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {aboutData.stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-[#F0EAD6] to-[#F0EAD6]/50 p-6 rounded-xl animate-in fade-in slide-in-from-left-4"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="text-3xl md:text-4xl font-bold text-[#8C4137] mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-700 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2">
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={aboutData.image}
                alt="À propos de TD Homes"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2E5238]/40 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
