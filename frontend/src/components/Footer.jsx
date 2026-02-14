import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { contactInfo } from '../data/mock';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#2E5238] text-white">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">TD Homes</h3>
            <p className="text-[#F0EAD6] leading-relaxed mb-6">
              L'expertise digitale au service de votre patrimoine immobilier
            </p>
            <div className="space-y-3">
              <a
                href={`mailto:${contactInfo.email}`}
                className="flex items-center gap-2 text-[#F0EAD6] hover:text-white transition-colors"
              >
                <Mail size={18} />
                <span className="text-sm">{contactInfo.email}</span>
              </a>
              <a
                href={`tel:${contactInfo.phone}`}
                className="flex items-center gap-2 text-[#F0EAD6] hover:text-white transition-colors"
              >
                <Phone size={18} />
                <span className="text-sm">{contactInfo.phone}</span>
              </a>
              <div className="flex items-center gap-2 text-[#F0EAD6]">
                <MapPin size={18} />
                <span className="text-sm">{contactInfo.address}</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Nos Services</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-[#F0EAD6] hover:text-white transition-colors text-sm"
                >
                  Gestion Hôtels
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-[#F0EAD6] hover:text-white transition-colors text-sm"
                >
                  Gestion Conciergeries
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-[#F0EAD6] hover:text-white transition-colors text-sm"
                >
                  Gestion Particuliers
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-[#F0EAD6] hover:text-white transition-colors text-sm"
                >
                  Revenue Management
                </button>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Entreprise</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-[#F0EAD6] hover:text-white transition-colors text-sm"
                >
                  À propos
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('testimonials')}
                  className="text-[#F0EAD6] hover:text-white transition-colors text-sm"
                >
                  Témoignages
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('faq')}
                  className="text-[#F0EAD6] hover:text-white transition-colors text-sm"
                >
                  FAQ
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-[#F0EAD6] hover:text-white transition-colors text-sm"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Informations Légales</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-[#F0EAD6] hover:text-white transition-colors text-sm">
                  Mentions légales
                </a>
              </li>
              <li>
                <a href="#" className="text-[#F0EAD6] hover:text-white transition-colors text-sm">
                  Politique de confidentialité
                </a>
              </li>
              <li>
                <a href="#" className="text-[#F0EAD6] hover:text-white transition-colors text-sm">
                  CGV
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-12 pt-8 text-center">
          <p className="text-[#F0EAD6] text-sm">
            © {currentYear} TD Homes. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
