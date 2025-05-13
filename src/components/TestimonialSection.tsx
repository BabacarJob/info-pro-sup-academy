
import React from 'react';

const testimonials = [
  {
    quote: "Grâce à Info Pro Sup, j'ai pu me préparer efficacement pour le concours d'entrée à l'École Polytechnique de Thiès. Le parcours personnalisé a comblé mes lacunes en mathématiques.",
    name: "Aminata Diop",
    role: "Étudiante en 1ère année de génie civil",
    avatar: "https://i.pravatar.cc/100?img=5"
  },
  {
    quote: "En tant que professeur, j'ai pu partager mes cours avec tous mes élèves. La plateforme m'a permis de suivre leur progression et d'adapter mon enseignement.",
    name: "M. Moussa Sarr",
    role: "Enseignant de physique-chimie",
    avatar: "https://i.pravatar.cc/100?img=12"
  },
  {
    quote: "La fonctionnalité hors-ligne m'a sauvé! Dans ma région, la connexion est instable, mais j'ai pu télécharger mes cours et continuer à étudier sans interruption.",
    name: "Ibrahima Seck",
    role: "Étudiant en licence d'économie",
    avatar: "https://i.pravatar.cc/100?img=11"
  }
];

const TestimonialSection: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-poppins font-bold text-ipro-navy text-center mb-12">
          Ce que disent nos utilisateurs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-md relative"
            >
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                <div className="w-12 h-12 rounded-full overflow-hidden border-4 border-white">
                  <img 
                    src={testimonial.avatar} 
                    alt={`Avatar de ${testimonial.name}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="text-ipro-teal text-4xl font-serif absolute top-3 left-3 opacity-20">❝</div>
              <div className="pt-6">
                <p className="italic text-gray-600 mb-4">
                  {testimonial.quote}
                </p>
                <div className="border-t border-gray-200 pt-4">
                  <p className="font-semibold text-ipro-navy">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
