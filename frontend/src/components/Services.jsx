import React from 'react';
import { Building2, Hotel, Home, Check } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { servicesData } from '../data/mock';

const iconMap = {
  Building2: Building2,
  Hotel: Hotel,
  Home: Home
};

const Services = () => {
  return (
    <section id="services" className="py-24 bg-gradient-to-b from-white to-[#F0EAD6]/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#2E5238] mb-6">
            Nos Services
          </h2>
          <p className="text-lg text-gray-700">
            Des solutions sur-mesure pour chaque type d'hébergement touristique
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {servicesData.map((service, index) => {
            const IconComponent = iconMap[service.icon];
            return (
              <Card
                key={service.id}
                className="group hover:shadow-2xl transition-all duration-300 border-0 overflow-hidden animate-in fade-in slide-in-from-bottom-4"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Service Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2E5238]/80 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-3">
                      <div className="bg-[#8C4137] p-3 rounded-lg">
                        <IconComponent className="text-white" size={24} />
                      </div>
                      <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                    </div>
                  </div>
                </div>

                <CardHeader>
                  <CardDescription className="text-base text-gray-700">
                    {service.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check className="text-[#95A87E] flex-shrink-0 mt-0.5" size={20} />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
