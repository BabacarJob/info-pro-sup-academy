
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const CtaSection: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-ipro-navy to-ipro-teal text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-poppins font-bold mb-6">
          Prêt à démarrer votre parcours éducatif?
        </h2>
        <p className="max-w-2xl mx-auto mb-8 text-lg opacity-90">
          Rejoignez des milliers d'étudiants qui améliorent leurs compétences et préparent leur avenir avec Info Pro Sup.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild size="lg" className="bg-ipro-red hover:bg-red-600 text-white px-8">
            <Link to="/orientation">Commencer maintenant</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white hover:text-ipro-navy px-8">
            <Link to="/contact">Nous contacter</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
