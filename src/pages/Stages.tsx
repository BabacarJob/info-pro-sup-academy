
import React from 'react';
import { Button } from '@/components/ui/button';
import { MapPin, Calendar, Briefcase } from 'lucide-react';

const offres = [
  {
    id: 1,
    title: "Stage en développement web",
    company: "Tech Innovation Sénégal",
    location: "Dakar",
    type: "Stage",
    duration: "6 mois",
    remuneration: "150 000 FCFA/mois",
    description: "Stage au sein de notre équipe de développement pour travailler sur des projets web innovants utilisant React et Node.js."
  },
  {
    id: 2,
    title: "Assistant marketing digital",
    company: "Agence Digitale Créative",
    location: "Dakar",
    type: "Stage",
    duration: "3 mois",
    remuneration: "100 000 FCFA/mois",
    description: "Contribuer aux campagnes marketing sur les réseaux sociaux et créer du contenu engageant pour nos clients."
  },
  {
    id: 3,
    title: "Analyste financier junior",
    company: "Banque Atlantique",
    location: "Dakar",
    type: "Premier emploi",
    duration: "CDI",
    remuneration: "À négocier",
    description: "Analyser les données financières, préparer des rapports et soutenir l'équipe dans l'évaluation des risques."
  },
  {
    id: 4,
    title: "Stage en gestion de projet agricole",
    company: "AgroSen Développement",
    location: "Thiès",
    type: "Stage",
    duration: "4 mois",
    remuneration: "75 000 FCFA/mois",
    description: "Participer à des projets d'agriculture durable et à l'amélioration de la chaîne de valeur agricole au Sénégal."
  }
];

const StagesPage = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-poppins font-bold text-ipro-navy mb-6">Stages et premiers emplois</h1>
      
      <div className="bg-white shadow-md rounded-lg p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">Trouvez votre opportunité professionnelle</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
          <input 
            type="text" 
            placeholder="Mot-clé ou compétence" 
            className="px-4 py-2 border rounded-md"
          />
          <select className="px-4 py-2 border rounded-md">
            <option value="">Toutes les villes</option>
            <option value="dakar">Dakar</option>
            <option value="thies">Thiès</option>
            <option value="saintlouis">Saint-Louis</option>
            <option value="other">Autre</option>
          </select>
          <select className="px-4 py-2 border rounded-md">
            <option value="">Type d'opportunité</option>
            <option value="stage">Stage</option>
            <option value="emploi">Premier emploi</option>
          </select>
          <Button className="bg-ipro-teal hover:bg-teal-600">
            Rechercher
          </Button>
        </div>
      </div>
      
      <div className="space-y-6">
        {offres.map((offre) => (
          <div key={offre.id} className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="p-6">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-semibold text-ipro-navy mb-1">{offre.title}</h3>
                  <p className="text-lg text-ipro-teal mb-4">{offre.company}</p>
                </div>
                <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                  offre.type === 'Stage' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'
                }`}>
                  {offre.type}
                </span>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-ipro-red mr-2" />
                  <span>{offre.location}</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 text-ipro-teal mr-2" />
                  <span>{offre.duration}</span>
                </div>
                <div className="flex items-center">
                  <Briefcase className="h-5 w-5 text-ipro-navy mr-2" />
                  <span>{offre.remuneration}</span>
                </div>
              </div>
              
              <p className="text-gray-600 mb-6">{offre.description}</p>
              
              <div className="flex flex-col sm:flex-row sm:justify-between gap-3">
                <Button variant="outline" className="text-ipro-navy border-ipro-navy hover:bg-ipro-navy hover:text-white">
                  Voir détails
                </Button>
                <Button className="bg-ipro-teal hover:bg-teal-600">
                  Postuler maintenant
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gray-50 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-ipro-navy mb-4">Créez votre CV</h3>
          <p className="mb-4 text-gray-600">
            Notre outil de création de CV vous aide à mettre en valeur vos compétences et expériences pour attirer l'attention des recruteurs.
          </p>
          <Button variant="outline" className="text-ipro-navy border-ipro-navy hover:bg-ipro-navy hover:text-white">
            Créer mon CV
          </Button>
        </div>
        
        <div className="bg-gray-50 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-ipro-navy mb-4">Coaching professionnel</h3>
          <p className="mb-4 text-gray-600">
            Préparez-vous aux entretiens d'embauche avec nos sessions de coaching personnalisées et nos simulations d'entretien.
          </p>
          <Button variant="outline" className="text-ipro-navy border-ipro-navy hover:bg-ipro-navy hover:text-white">
            Réserver une session
          </Button>
        </div>
      </div>
    </div>
  );
};

export default StagesPage;
