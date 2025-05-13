
import React from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';

const formations = [
  {
    id: 1,
    name: "Licence en Informatique",
    institution: "Université Cheikh Anta Diop",
    location: "Dakar",
    duration: "3 ans",
    degree: "Licence (BAC+3)"
  },
  {
    id: 2,
    name: "BTS en Commerce International",
    institution: "Institut Supérieur de Management",
    location: "Dakar",
    duration: "2 ans",
    degree: "BTS (BAC+2)"
  },
  {
    id: 3,
    name: "Master en Finance",
    institution: "IAM Business School",
    location: "Dakar",
    duration: "2 ans",
    degree: "Master (BAC+5)"
  },
  {
    id: 4,
    name: "Formation en Développement Web",
    institution: "Orange Digital Center",
    location: "Dakar",
    duration: "6 mois",
    degree: "Certification Professionnelle"
  }
];

const FormationsPage = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-poppins font-bold text-ipro-navy mb-6">Formations et établissements</h1>
      
      <div className="bg-white shadow-md rounded-lg p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">Rechercher une formation</h2>
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <Input 
              placeholder="Rechercher une formation ou un établissement" 
              className="pl-10"
            />
          </div>
          <div className="flex gap-2">
            <select className="px-4 py-2 border rounded-md flex-grow">
              <option value="">Tous les niveaux</option>
              <option value="bac+2">BAC+2</option>
              <option value="bac+3">BAC+3</option>
              <option value="bac+5">BAC+5</option>
              <option value="certification">Certification</option>
            </select>
            <select className="px-4 py-2 border rounded-md flex-grow">
              <option value="">Toutes les régions</option>
              <option value="dakar">Dakar</option>
              <option value="thies">Thiès</option>
              <option value="saintlouis">Saint-Louis</option>
              <option value="ziguinchor">Ziguinchor</option>
            </select>
            <Button className="bg-ipro-teal hover:bg-teal-600">
              Filtrer
            </Button>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {formations.map((formation) => (
          <div key={formation.id} className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
            <div className="bg-ipro-navy p-4">
              <h3 className="text-white font-medium text-lg">{formation.name}</h3>
            </div>
            <div className="p-4">
              <p className="text-gray-600 mb-2">
                <span className="font-medium">Institution:</span> {formation.institution}
              </p>
              <p className="text-gray-600 mb-2">
                <span className="font-medium">Localisation:</span> {formation.location}
              </p>
              <p className="text-gray-600 mb-2">
                <span className="font-medium">Durée:</span> {formation.duration}
              </p>
              <p className="text-gray-600 mb-4">
                <span className="font-medium">Diplôme:</span> {formation.degree}
              </p>
              <Button variant="outline" className="w-full text-ipro-navy border-ipro-navy hover:bg-ipro-navy hover:text-white">
                Voir les détails
              </Button>
            </div>
          </div>
        ))}
      </div>
      
      <div className="flex justify-center mt-8">
        <Button variant="outline" className="text-ipro-teal border-ipro-teal hover:bg-ipro-teal hover:text-white">
          Voir plus de formations
        </Button>
      </div>
    </div>
  );
};

export default FormationsPage;
