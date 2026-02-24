import React, { useEffect } from "react";

export default function Legal() {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-semibold mb-10">
        Informations légales
      </h1>

      <section id="mentions-legales" className="mb-16 scroll-mt-24">
  <h2 className="text-2xl font-semibold mb-4">Mentions légales</h2>

  <div className="text-gray-700 leading-relaxed space-y-2">
    <p><strong>TD Homes</strong> — Micro-entreprise</p>
    <p><strong>SIREN :</strong> 999161292</p>
    <p><strong>Siège :</strong> 27 rue du parc, 01550 Collonges, France</p>
    <p><strong>Email :</strong> contact@td-homes.com</p>
    <p><strong>Hébergement :</strong> GitHub Pages</p>
  </div>
</section>

      <section id="politique-confidentialite" className="mb-16 scroll-mt-24">
        <h2 className="text-2xl font-semibold mb-4">
          Politique de confidentialité
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Les informations collectées via le formulaire de contact sont
          utilisées uniquement pour répondre à votre demande. Aucune donnée
          n’est revendue à des tiers. Vous pouvez demander la suppression de
          vos données à tout moment en nous contactant.
        </p>
      </section>

      <section id="cgv" className="mb-16 scroll-mt-24">
        <h2 className="text-2xl font-semibold mb-4">
          Conditions Générales de Vente
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Les prestations TD Homes font l’objet d’un devis personnalisé. Toute prestation démarre après validation du devis et, le cas échéant, signature d’un contrat précisant les conditions de la mission.
        </p>
      </section>
    </div>
  );
}
