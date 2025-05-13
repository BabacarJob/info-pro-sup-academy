
import React from 'react';

const PartnersSection: React.FC = () => {
  const partners = [
    "Université Cheikh Anta Diop",
    "Ministère de l'Éducation",
    "Sonatel Academy",
    "Orange Digital Center",
    "Microsoft Africa"
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-poppins font-bold text-ipro-navy text-center mb-8">
          Ils nous font confiance
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {partners.map((partner, index) => (
            <div key={index} className="text-center">
              <div className="bg-white p-4 rounded-lg shadow-sm min-w-[180px]">
                <p className="font-medium text-ipro-navy">{partner}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
