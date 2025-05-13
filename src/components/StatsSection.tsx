
import React from 'react';

const stats = [
  {
    value: "500+",
    label: "Établissements"
  },
  {
    value: "10,000+",
    label: "Étudiants"
  },
  {
    value: "1,200+",
    label: "Ressources"
  },
  {
    value: "95%",
    label: "Satisfaction"
  }
];

const StatsSection: React.FC = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-4xl font-poppins font-bold text-ipro-teal mb-2">{stat.value}</p>
              <p className="text-ipro-navy">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
