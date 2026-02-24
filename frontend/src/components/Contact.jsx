import React, { useState } from 'react';
import { Mail, Phone, Send } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { contactInfo } from '../data/mock';

const Contact = () => {
  import { toast } from "sonner";
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const res = await fetch("https://formspree.io/f/xojnyqbw", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (!res.ok) throw new Error("Formspree error");

    toast.success("Message envoyé !", {
      description: "Nous vous répondrons dans les plus brefs délais.",
    });

    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      message: "",
    });
  } catch (err) {
    toast.error("Erreur", {
      description: "Le message n’a pas pu être envoyé. Réessayez plus tard.",
    });
  }
};

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-white to-[#F0EAD6]/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#2E5238] mb-6">
            Contactez-nous
          </h2>
          <p className="text-lg text-gray-700">
            Prêt à optimiser la performance de vos hébergements ? Demandez votre devis personnalisé
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-[#2E5238] mb-6">
                Parlons de votre projet
              </h3>
              <p className="text-gray-700 leading-relaxed mb-8">
                Notre équipe d'experts est à votre disposition pour analyser vos besoins et vous proposer une solution sur-mesure adaptée à vos objectifs.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-[#8C4137] p-3 rounded-lg flex-shrink-0">
                  <Mail className="text-white" size={24} />
                </div>
                <div>
                  <div className="font-semibold text-[#2E5238] mb-1">Email</div>
                  <a href={`mailto:${contactInfo.email}`} className="text-gray-700 hover:text-[#8C4137] transition-colors">
                    {contactInfo.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[#8C4137] p-3 rounded-lg flex-shrink-0">
                  <Phone className="text-white" size={24} />
                </div>
                <div>
                  <div className="font-semibold text-[#2E5238] mb-1">Téléphone</div>
                  <a href={`tel:${contactInfo.phone}`} className="text-gray-700 hover:text-[#8C4137] transition-colors">
                    {contactInfo.phone}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  type="text"
                  name="name"
                  placeholder="Nom complet *"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="border-gray-300 focus:border-[#2E5238] focus:ring-[#2E5238]"
                />
              </div>

              <div>
                <Input
                  type="email"
                  name="email"
                  placeholder="Email *"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="border-gray-300 focus:border-[#2E5238] focus:ring-[#2E5238]"
                />
              </div>

              <div>
                <Input
                  type="tel"
                  name="phone"
                  placeholder="Téléphone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="border-gray-300 focus:border-[#2E5238] focus:ring-[#2E5238]"
                />
              </div>

              <div>
                <Input
                  type="text"
                  name="company"
                  placeholder="Entreprise / Type de bien"
                  value={formData.company}
                  onChange={handleChange}
                  className="border-gray-300 focus:border-[#2E5238] focus:ring-[#2E5238]"
                />
              </div>

              <div>
                <Textarea
                  name="message"
                  placeholder="Décrivez-nous votre projet *"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="border-gray-300 focus:border-[#2E5238] focus:ring-[#2E5238] resize-none"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-[#8C4137] hover:bg-[#8C4137]/90 text-white py-6 text-lg group"
              >
                Envoyer ma demande
                <Send className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
