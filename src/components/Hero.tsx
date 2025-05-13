
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-ipro-navy to-ipro-teal text-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 animate-fade-in">
            <h1 className="font-poppins text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              L'éducation adaptative pour tous au Sénégal
            </h1>
            <p className="text-lg mb-8 opacity-90">
              Info Pro Sup vous offre un apprentissage personnalisé grâce à l'IA et une communauté d'entraide locale pour réussir dans vos études et votre carrière.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-ipro-red hover:bg-red-600 text-white px-6">
                <Link to="/orientation">Je m'oriente</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white hover:text-ipro-navy px-6">
                <Link to="/bibliotheque">Explorer les ressources</Link>
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center animate-slide-up">
            <div className="relative">
              <div className="bg-white rounded-lg shadow-2xl overflow-hidden transform rotate-3 absolute -right-4 top-4">
                <div className="bg-gray-100 p-2">
                  <div className="w-64 h-36 bg-ipro-navy rounded-md flex items-center justify-center">
                    <p className="text-white text-center px-4">Module d'apprentissage IA</p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-2xl overflow-hidden transform -rotate-3 absolute -left-4 top-8">
                <div className="bg-gray-100 p-2">
                  <div className="w-64 h-36 bg-ipro-teal rounded-md flex items-center justify-center">
                    <p className="text-white text-center px-4">Communauté d'entraide</p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-2xl overflow-hidden z-10 relative">
                <div className="bg-gray-100 p-2">
                  <div className="w-72 h-48 bg-gradient-to-r from-ipro-navy to-ipro-teal rounded-md flex items-center justify-center p-4">
                    <div className="text-white text-center">
                      <h3 className="font-poppins font-bold mb-2">Votre parcours personnalisé</h3>
                      <p className="text-sm opacity-90">Apprentissage adapté à votre niveau et vos objectifs</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
