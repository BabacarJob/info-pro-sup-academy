
import React from 'react';
import { Button } from '@/components/ui/button';

const partenairesEducatifs = [
  {
    id: 1,
    name: "Université Cheikh Anta Diop",
    type: "Université",
    description: "Plus grande université du Sénégal, participant activement aux programmes de mentorat et fournissant des ressources éducatives."
  },
  {
    id: 2,
    name: "Ministère de l'Éducation Nationale",
    type: "Institution publique",
    description: "Soutien officiel et validation des parcours pédagogiques proposés sur la plateforme Info Pro Sup."
  },
  {
    id: 3,
    name: "Orange Digital Center",
    type: "Centre de formation",
    description: "Partenaire technique offrant des formations en compétences numériques et facilitant l'accès à Internet pour les utilisateurs."
  }
];

const partenairesEntreprises = [
  {
    id: 1,
    name: "Sonatel",
    description: "Offre des stages et premiers emplois aux étudiants performants et participe au financement de bourses d'études."
  },
  {
    id: 2,
    name: "Ecobank",
    description: "Programme de mentorat financier et sponsoring d'événements éducatifs liés à l'entrepreneuriat."
  },
  {
    id: 3,
    name: "Microsoft Africa",
    description: "Fourniture de technologies éducatives et formation aux outils Microsoft pour les étudiants et enseignants."
  }
];

const PartenairesPage = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-poppins font-bold text-ipro-navy mb-6">Nos partenaires</h1>
      
      <p className="text-lg text-gray-600 mb-8">
        Info Pro Sup collabore avec un réseau d'institutions éducatives, d'entreprises et d'organisations pour offrir des opportunités de qualité aux étudiants sénégalais.
      </p>
      
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-ipro-navy mb-6">Partenaires éducatifs</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {partenairesEducatifs.map((partenaire) => (
            <div key={partenaire.id} className="bg-white shadow-md rounded-lg p-6">
              <div className="h-24 bg-gray-200 rounded-md mb-4 flex items-center justify-center">
                <p className="text-gray-500 font-medium">Logo {partenaire.name}</p>
              </div>
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-ipro-navy">{partenaire.name}</h3>
                <p className="text-sm text-ipro-teal">{partenaire.type}</p>
              </div>
              <p className="text-gray-600 mb-4">{partenaire.description}</p>
              <Button variant="outline" className="w-full text-ipro-navy border-ipro-navy hover:bg-ipro-navy hover:text-white">
                En savoir plus
              </Button>
            </div>
          ))}
        </div>
      </div>
      
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-ipro-navy mb-6">Partenaires entreprises</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {partenairesEntreprises.map((partenaire) => (
            <div key={partenaire.id} className="bg-white shadow-md rounded-lg p-6">
              <div className="h-24 bg-gray-200 rounded-md mb-4 flex items-center justify-center">
                <p className="text-gray-500 font-medium">Logo {partenaire.name}</p>
              </div>
              <h3 className="text-lg font-semibold text-ipro-navy mb-3">{partenaire.name}</h3>
              <p className="text-gray-600 mb-4">{partenaire.description}</p>
              <Button variant="outline" className="w-full text-ipro-navy border-ipro-navy hover:bg-ipro-navy hover:text-white">
                Opportunités
              </Button>
            </div>
          ))}
        </div>
      </div>
      
      <div className="bg-gradient-to-r from-ipro-navy to-ipro-teal text-white rounded-lg p-8">
        <h2 className="text-2xl font-semibold mb-4">Devenir partenaire</h2>
        <p className="mb-6">
          Vous souhaitez contribuer à l'éducation au Sénégal? Rejoignez notre réseau de partenaires et participez à la formation de la prochaine génération de talents.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button className="bg-white text-ipro-navy hover:bg-gray-100">
            Partenariat éducatif
          </Button>
          <Button className="bg-ipro-red hover:bg-red-600 text-white">
            Partenariat entreprise
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PartenairesPage;
