
import React from 'react';
import { Button } from '@/components/ui/button';

const OrientationPage = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-poppins font-bold text-ipro-navy mb-6">Orientation</h1>
      
      <div className="bg-white shadow-md rounded-lg p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">Test d'orientation intelligent</h2>
        <p className="mb-6 text-gray-600">
          Notre test d'orientation basé sur l'IA vous aide à découvrir les filières et métiers qui correspondent à vos intérêts, votre personnalité et vos compétences. Répondez à quelques questions pour obtenir des recommandations personnalisées.
        </p>
        <Button className="bg-ipro-teal hover:bg-teal-600">Commencer le test</Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Fiches métiers</h2>
          <p className="text-gray-600 mb-4">
            Explorez des centaines de fiches métiers détaillées avec les études requises, les débouchés et les salaires moyens au Sénégal.
          </p>
          <ul className="list-disc list-inside text-gray-600 mb-4">
            <li>Ingénierie informatique</li>
            <li>Médecine et professions de santé</li>
            <li>Agriculture et environnement</li>
            <li>Commerce et gestion</li>
            <li>Et bien d'autres...</li>
          </ul>
          <Button variant="outline" className="text-ipro-navy border-ipro-navy hover:bg-ipro-navy hover:text-white">
            Explorer les métiers
          </Button>
        </div>
        
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Cartes des parcours</h2>
          <p className="text-gray-600 mb-4">
            Visualisez le chemin à suivre pour atteindre vos objectifs professionnels. Nos cartes interactives vous montrent les étapes de formation nécessaires.
          </p>
          <div className="bg-gray-100 rounded-lg p-4 mb-4">
            <p className="font-medium">Exemple : Devenir ingénieur</p>
            <p className="text-sm text-gray-600">Baccalauréat S → Classes préparatoires ou Licence → École d'ingénieur → Ingénieur diplômé</p>
          </div>
          <Button variant="outline" className="text-ipro-navy border-ipro-navy hover:bg-ipro-navy hover:text-white">
            Voir les parcours
          </Button>
        </div>
      </div>
    </div>
  );
};

export default OrientationPage;
