
import React from 'react';
import { Button } from '@/components/ui/button';
import { Calendar, MapPin, Clock, Info } from 'lucide-react';

const concours = [
  {
    id: 1,
    name: "Concours d'entrée à l'École Polytechnique de Thiès",
    date: "15 mai 2026",
    location: "Centres d'examen à Dakar, Thiès et Saint-Louis",
    deadline: "31 mars 2026",
    details: "Concours national pour les bacheliers scientifiques souhaitant intégrer une formation d'ingénieur."
  },
  {
    id: 2,
    name: "Concours d'admission à l'École Nationale d'Administration",
    date: "10 juin 2026",
    location: "Dakar",
    deadline: "15 avril 2026",
    details: "Concours administratif ouvert aux titulaires d'une licence ou équivalent."
  },
  {
    id: 3,
    name: "Concours Général Sénégalais",
    date: "Du 5 au 9 avril 2026",
    location: "Établissements scolaires sélectionnés dans tout le pays",
    deadline: "1er février 2026", 
    details: "Compétition académique d'excellence pour les élèves du secondaire."
  }
];

const evenements = [
  {
    id: 1,
    name: "Salon de l'Étudiant et des Nouvelles Perspectives",
    date: "18-19 janvier 2026",
    location: "Centre International de Conférences Abdou Diouf, Diamniadio",
    type: "Salon"
  },
  {
    id: 2,
    name: "Webinaire: Réussir le concours de médecine",
    date: "12 décembre 2025",
    location: "En ligne",
    type: "Webinaire"
  }
];

const ConcoursPage = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-poppins font-bold text-ipro-navy mb-6">Concours et événements</h1>
      
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-ipro-navy mb-6">Concours à venir</h2>
        
        <div className="space-y-6">
          {concours.map((concours) => (
            <div key={concours.id} className="bg-white shadow-md rounded-lg overflow-hidden">
              <div className="bg-ipro-navy p-4">
                <h3 className="text-white text-xl font-medium">{concours.name}</h3>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div className="flex items-start">
                    <Calendar className="h-5 w-5 text-ipro-teal mr-2 mt-0.5" />
                    <div>
                      <p className="font-medium">Date du concours</p>
                      <p className="text-gray-600">{concours.date}</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-ipro-teal mr-2 mt-0.5" />
                    <div>
                      <p className="font-medium">Lieu</p>
                      <p className="text-gray-600">{concours.location}</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start mb-4">
                  <Clock className="h-5 w-5 text-ipro-red mr-2 mt-0.5" />
                  <div>
                    <p className="font-medium">Date limite d'inscription</p>
                    <p className="text-gray-600">{concours.deadline}</p>
                  </div>
                </div>
                
                <div className="flex items-start mb-6">
                  <Info className="h-5 w-5 text-ipro-teal mr-2 mt-0.5" />
                  <div>
                    <p className="font-medium">Détails</p>
                    <p className="text-gray-600">{concours.details}</p>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button className="bg-ipro-teal hover:bg-teal-600">
                    S'inscrire
                  </Button>
                  <Button variant="outline" className="text-ipro-navy border-ipro-navy hover:bg-ipro-navy hover:text-white">
                    Télécharger les annales
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div>
        <h2 className="text-2xl font-semibold text-ipro-navy mb-6">Événements éducatifs</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {evenements.map((event) => (
            <div key={event.id} className="bg-white shadow-md rounded-lg p-6">
              <div className="inline-block bg-ipro-teal text-white text-sm px-3 py-1 rounded-full mb-3">
                {event.type}
              </div>
              <h3 className="text-lg font-semibold text-ipro-navy mb-3">{event.name}</h3>
              <div className="space-y-2 mb-4">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 text-ipro-navy mr-2" />
                  <p className="text-gray-600">{event.date}</p>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 text-ipro-navy mr-2" />
                  <p className="text-gray-600">{event.location}</p>
                </div>
              </div>
              <Button variant="outline" className="text-ipro-navy border-ipro-navy hover:bg-ipro-navy hover:text-white w-full">
                Plus d'informations
              </Button>
            </div>
          ))}
        </div>
        
        <div className="mt-8 text-center">
          <Button className="bg-ipro-teal hover:bg-teal-600">
            Voir tous les événements
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ConcoursPage;
