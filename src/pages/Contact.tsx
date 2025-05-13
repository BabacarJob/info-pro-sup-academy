
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const ContactPage = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-poppins font-bold text-ipro-navy mb-6">Contact et assistance</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <div className="bg-white shadow-md rounded-lg p-6 mb-8">
            <h2 className="text-xl font-semibold text-ipro-navy mb-6">Contactez-nous</h2>
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="space-y-2">
                  <Label htmlFor="nom">Nom</Label>
                  <Input id="nom" placeholder="Votre nom" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="prenom">Prénom</Label>
                  <Input id="prenom" placeholder="Votre prénom" />
                </div>
              </div>
              <div className="space-y-2 mb-4">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="votre.email@exemple.com" />
              </div>
              <div className="space-y-2 mb-4">
                <Label htmlFor="sujet">Sujet</Label>
                <select id="sujet" className="w-full px-4 py-2 border rounded-md">
                  <option value="">Sélectionnez un sujet</option>
                  <option value="question">Question générale</option>
                  <option value="technique">Problème technique</option>
                  <option value="partenariat">Proposition de partenariat</option>
                  <option value="autre">Autre</option>
                </select>
              </div>
              <div className="space-y-2 mb-6">
                <Label htmlFor="message">Message</Label>
                <Textarea 
                  id="message" 
                  placeholder="Détaillez votre demande ici..." 
                  rows={5}
                />
              </div>
              <Button className="w-full bg-ipro-teal hover:bg-teal-600">
                Envoyer le message
              </Button>
            </form>
          </div>
          
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold text-ipro-navy mb-4">FAQ</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-ipro-navy">Comment créer un compte sur Info Pro Sup?</h3>
                <p className="text-gray-600">Cliquez sur "S'inscrire" en haut à droite de la page d'accueil et suivez les étapes indiquées.</p>
              </div>
              <div>
                <h3 className="font-medium text-ipro-navy">Les ressources sont-elles accessibles gratuitement?</h3>
                <p className="text-gray-600">La majorité des ressources sont gratuites. Certains contenus premium peuvent nécessiter un abonnement.</p>
              </div>
              <div>
                <h3 className="font-medium text-ipro-navy">Comment devenir mentor sur la plateforme?</h3>
                <p className="text-gray-600">Pour devenir mentor, vous devez avoir un profil validé et postuler via la section "Devenir mentor" dans votre espace personnel.</p>
              </div>
            </div>
            <div className="mt-4 text-center">
              <Button variant="link" className="text-ipro-teal hover:text-ipro-navy">
                Voir toutes les questions fréquentes
              </Button>
            </div>
          </div>
        </div>
        
        <div>
          <div className="bg-white shadow-md rounded-lg p-6 mb-8">
            <h2 className="text-xl font-semibold text-ipro-navy mb-6">Nos coordonnées</h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-ipro-teal mr-4 mt-1" />
                <div>
                  <h3 className="font-medium text-ipro-navy">Adresse</h3>
                  <p className="text-gray-600">123 Avenue Cheikh Anta Diop</p>
                  <p className="text-gray-600">Dakar, Sénégal</p>
                </div>
              </div>
              <div className="flex items-start">
                <Mail className="h-6 w-6 text-ipro-teal mr-4 mt-1" />
                <div>
                  <h3 className="font-medium text-ipro-navy">Email</h3>
                  <p className="text-gray-600">contact@infoprosup.sn</p>
                  <p className="text-gray-600">support@infoprosup.sn</p>
                </div>
              </div>
              <div className="flex items-start">
                <Phone className="h-6 w-6 text-ipro-teal mr-4 mt-1" />
                <div>
                  <h3 className="font-medium text-ipro-navy">Téléphone</h3>
                  <p className="text-gray-600">+221 78 123 45 67</p>
                  <p className="text-gray-600">+221 33 123 45 67</p>
                </div>
              </div>
              <div className="flex items-start">
                <Clock className="h-6 w-6 text-ipro-teal mr-4 mt-1" />
                <div>
                  <h3 className="font-medium text-ipro-navy">Heures d'ouverture</h3>
                  <p className="text-gray-600">Lundi à Vendredi: 9h - 18h</p>
                  <p className="text-gray-600">Samedi: 9h - 13h</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold text-ipro-navy mb-4">Nous suivre</h2>
            <p className="text-gray-600 mb-4">
              Restez informés sur nos dernières actualités et offres en nous suivant sur les réseaux sociaux.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition-colors" aria-label="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="h-6 w-6" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                </svg>
              </a>
              <a href="#" className="bg-sky-500 text-white p-2 rounded-full hover:bg-sky-600 transition-colors" aria-label="Twitter">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="h-6 w-6" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/>
                </svg>
              </a>
              <a href="#" className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-2 rounded-full hover:from-purple-600 hover:to-pink-600 transition-colors" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="h-6 w-6" viewBox="0 0 24 24">
                  <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"/>
                </svg>
              </a>
              <a href="#" className="bg-blue-700 text-white p-2 rounded-full hover:bg-blue-800 transition-colors" aria-label="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="h-6 w-6" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
