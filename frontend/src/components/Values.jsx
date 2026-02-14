import React from 'react';
import { TrendingUp, Award, Shield, Sparkles } from 'lucide-react';
import { valuesData } from '../data/mock';

const iconMap = {
  TrendingUp: TrendingUp,
  Award: Award,
  Shield: Shield,
  Sparkles: Sparkles
};

const Values = () => {
  return (
    <section className="py-24 bg-[#2E5238] relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#95A87E]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#8C4137]/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Nos Valeurs
          </h2>
          <p className="text-lg text-[#F0EAD6]">
            Les piliers qui guident notre accompagnement au quotidien
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {valuesData.map((value, index) => {
            const IconComponent = iconMap[value.icon];
            return (
              <div
                key={value.id}
                className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300 group animate-in fade-in slide-in-from-bottom-4"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="bg-[#8C4137] w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <IconComponent className="text-white" size={28} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {value.title}
                </h3>
                <p className="text-[#F0EAD6] leading-relaxed">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Values;
