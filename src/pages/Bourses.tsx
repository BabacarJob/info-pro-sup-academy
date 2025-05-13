
import React from 'react';
import { Button } from '@/components/ui/button';
import { Calendar } from 'lucide-react';

const bourses = [
  {
    id: 1,
    name: "Bourse d'excellence du Ministère de l'Éducation",
    amount: "150 000 FCFA/mois",
    deadline: "30 septembre 2025",
    criteria: "Étudiants sénégalais avec mention Très Bien au BAC",
    entity: "Gouvernement du Sénégal"
  },
  {
    id: 2,
    name: "Programme de bourses France-Sénégal",
    amount: "Variable selon le niveau d'étude",
    deadline: "15 janvier 2026",
    criteria: "Étudiants en Master ou Doctorat souhaitant étudier en France",
    entity: "Ambassade de France au Sénégal"
  },
  {
    id: 3,
    name: "Bourse Sonatel pour les études d'ingénieur",
    amount: "200 000 FCFA/mois",
    deadline: "31 mars 2026",
    criteria: "Étudiants en filières STEM avec excellence académique",
    entity: "Fondation Sonatel"
  },
  {
    id: 4,
    name: "Bourse d'études supérieures Mastercard Foundation",
    amount: "Couverture complète des frais",
    deadline: "15 décembre 2025",
    criteria: "Jeunes à potentiel issus de milieux défavorisés",
    entity: "Mastercard Foundation"
  }
];

const BoursesPage = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-poppins font-bold text-ipro-navy mb-6">Bourses et aides financières</h1>
      
      <div className="bg-white shadow-md rounded-lg p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">Recherchez votre financement idéal</h2>
        <p className="mb-6 text-gray-600">
          Accédez à notre base de données complète de bourses nationales et internationales. Utilisez les filtres pour trouver les opportunités qui correspondent à votre profil.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <select className="px-4 py-2 border rounded-md">
            <option value="">Niveau d'études</option>
            <option value="licence">Licence</option>
            <option value="master">Master</option>
            <option value="doctorat">Doctorat</option>
          </select>
          <select className="px-4 py-2 border rounded-md">
            <option value="">Destination</option>
            <option value="senegal">Sénégal</option>
            <option value="france">France</option>
            <option value="canada">Canada</option>
            <option value="usa">États-Unis</option>
            <option value="other">Autre</option>
          </select>
          <select className="px-4 py-2 border rounded-md">
            <option value="">Domaine d'études</option>
            <option value="sciences">Sciences</option>
            <option value="tech">Technologies</option>
            <option value="engineering">Ingénierie</option>
            <option value="business">Commerce</option>
            <option value="arts">Arts et Lettres</option>
          </select>
        </div>
        <Button className="bg-ipro-teal hover:bg-teal-600 w-full">
          Rechercher des bourses
        </Button>
      </div>
      
      <div className="space-y-6">
        {bourses.map((bourse) => (
          <div key={bourse.id} className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-semibold text-ipro-navy mb-3">{bourse.name}</h3>
              <p className="text-ipro-teal font-medium mb-4">{bourse.amount}</p>
              <div className="flex flex-col space-y-2">
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 text-ipro-red mr-2" />
                  <p><span className="font-medium">Date limite:</span> {bourse.deadline}</p>
                </div>
                <p><span className="font-medium">Critères:</span> {bourse.criteria}</p>
                <p><span className="font-medium">Organisme:</span> {bourse.entity}</p>
              </div>
              <div className="mt-6 flex flex-col sm:flex-row sm:justify-between gap-3">
                <Button variant="outline" className="text-ipro-navy border-ipro-navy hover:bg-ipro-navy hover:text-white">
                  Détails complets
                </Button>
                <Button className="bg-ipro-teal hover:bg-teal-600">
                  Préparer ma candidature
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="bg-gray-50 rounded-lg p-6 mt-8">
        <h3 className="text-xl font-semibold mb-4">Besoin d'aide pour votre dossier?</h3>
        <p className="mb-4">
          Nos conseillers peuvent vous aider à préparer un dossier de candidature convaincant pour maximiser vos chances d'obtenir une bourse.
        </p>
        <Button variant="outline" className="text-ipro-navy border-ipro-navy hover:bg-ipro-navy hover:text-white">
          Prendre rendez-vous avec un conseiller
        </Button>
      </div>
    </div>
  );
};

export default BoursesPage;
