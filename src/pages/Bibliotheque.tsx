
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, BookOpen, Video, FileText, Download } from 'lucide-react';

const resources = [
  {
    id: 1,
    title: "Les bases des mathématiques pour le BAC S",
    type: "pdf",
    level: "Terminale",
    downloadable: true
  },
  {
    id: 2,
    title: "Introduction à la programmation Python",
    type: "video",
    level: "Licence 1",
    downloadable: true
  },
  {
    id: 3,
    title: "La littérature sénégalaise contemporaine",
    type: "document",
    level: "Lycée",
    downloadable: true
  },
  {
    id: 4,
    title: "Exercices corrigés de physique",
    type: "pdf",
    level: "Terminale",
    downloadable: true
  },
  {
    id: 5,
    title: "Économie du Sénégal : perspectives et défis",
    type: "video",
    level: "Master",
    downloadable: false
  },
  {
    id: 6,
    title: "Initiation à l'anglais des affaires",
    type: "document",
    level: "BTS",
    downloadable: true
  }
];

const ResourceIcon = ({ type }: { type: string }) => {
  switch (type) {
    case 'pdf':
      return <FileText className="h-6 w-6 text-ipro-red" />;
    case 'video':
      return <Video className="h-6 w-6 text-ipro-teal" />;
    default:
      return <BookOpen className="h-6 w-6 text-ipro-navy" />;
  }
};

const BibliothequePage = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-poppins font-bold text-ipro-navy mb-6">Bibliothèque de ressources</h1>
      
      <div className="bg-white shadow-md rounded-lg p-6 mb-8">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <Input 
              placeholder="Rechercher par mot-clé..." 
              className="pl-10"
            />
          </div>
          <div className="flex gap-2">
            <select className="px-4 py-2 border rounded-md">
              <option value="">Tous les types</option>
              <option value="pdf">PDF</option>
              <option value="video">Vidéo</option>
              <option value="document">Document</option>
            </select>
            <select className="px-4 py-2 border rounded-md">
              <option value="">Tous les niveaux</option>
              <option value="college">Collège</option>
              <option value="lycee">Lycée</option>
              <option value="licence">Licence</option>
              <option value="master">Master</option>
            </select>
            <Button className="bg-ipro-teal hover:bg-teal-600">
              Rechercher
            </Button>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {resources.map((resource) => (
          <div key={resource.id} className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-start">
              <ResourceIcon type={resource.type} />
              <div className="ml-4 flex-grow">
                <h3 className="font-semibold text-ipro-navy mb-2">{resource.title}</h3>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <span className="bg-gray-100 rounded-full px-3 py-1 mr-2">{resource.type.toUpperCase()}</span>
                  <span>Niveau: {resource.level}</span>
                </div>
                <div className="flex justify-between items-center">
                  <Button variant="outline" size="sm" className="text-ipro-navy border-ipro-navy hover:bg-ipro-navy hover:text-white">
                    Consulter
                  </Button>
                  {resource.downloadable && (
                    <Button variant="ghost" size="sm" className="text-ipro-teal hover:text-ipro-navy">
                      <Download className="h-4 w-4 mr-2" />
                      Télécharger
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="flex justify-center mt-8">
        <Button variant="outline" className="text-ipro-teal border-ipro-teal hover:bg-ipro-teal hover:text-white">
          Voir plus de ressources
        </Button>
      </div>
    </div>
  );
};

export default BibliothequePage;
