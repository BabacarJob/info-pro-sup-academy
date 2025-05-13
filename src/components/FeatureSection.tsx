
import React from 'react';
import { Book, Globe, Award, Users } from 'lucide-react';

const features = [
  {
    icon: <Book className="h-10 w-10 text-ipro-teal" />,
    title: "Apprentissage adaptatif IA",
    description: "Notre moteur IA analyse votre profil et vous propose un parcours pédagogique personnalisé adapté à vos besoins et objectifs."
  },
  {
    icon: <Users className="h-10 w-10 text-ipro-teal" />,
    title: "Communauté d'entraide",
    description: "Rejoignez un espace de tutorat entre pairs où les élèves avancés aident ceux qui ont des difficultés dans un esprit de solidarité."
  },
  {
    icon: <Globe className="h-10 w-10 text-ipro-teal" />,
    title: "Accessibilité mobile",
    description: "Accédez à vos cours même hors ligne avec notre application mobile légère et la possibilité de télécharger des modules pour étudier partout."
  },
  {
    icon: <Award className="h-10 w-10 text-ipro-teal" />,
    title: "Micro-certifications",
    description: "Gagnez des badges numériques reconnus par nos partenaires pour chaque module complété et valorisez vos compétences auprès des recruteurs."
  }
];

const FeatureSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-poppins font-bold text-ipro-navy text-center mb-12">
          Nos fonctionnalités clés
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-t-4 border-ipro-teal"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="font-poppins font-semibold text-xl mb-3 text-ipro-navy">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
