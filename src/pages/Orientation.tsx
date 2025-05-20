
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { 
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from '@/components/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { RadioGroup } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

// Définition du schéma de validation pour le formulaire
const formSchema = z.object({
  interests: z.string({
    required_error: "Veuillez sélectionner vos centres d'intérêt",
  }),
  strengths: z.string({
    required_error: "Veuillez sélectionner vos points forts",
  }),
  workStyle: z.string({
    required_error: "Veuillez sélectionner votre style de travail préféré",
  }),
  values: z.string({
    required_error: "Veuillez sélectionner vos valeurs professionnelles",
  }),
  environment: z.string({
    required_error: "Veuillez sélectionner votre environnement de travail idéal",
  }),
});

type FormValues = z.infer<typeof formSchema>;

const OrientationPage = () => {
  const [step, setStep] = useState(1);
  const [showResults, setShowResults] = useState(false);
  const [results, setResults] = useState<any>(null);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      interests: '',
      strengths: '',
      workStyle: '',
      values: '',
      environment: '',
    },
  });

  // Fonction pour déterminer les résultats en fonction des réponses
  const calculateResults = (data: FormValues) => {
    // Logique simple d'orientation basée sur les réponses
    const scores = {
      sciences: 0,
      commerce: 0,
      arts: 0,
      social: 0,
      technique: 0,
    };

    // Analyse des centres d'intérêt
    if (data.interests === 'sciences') scores.sciences += 3;
    if (data.interests === 'affaires') scores.commerce += 3;
    if (data.interests === 'creativite') scores.arts += 3;
    if (data.interests === 'aide') scores.social += 3;
    if (data.interests === 'technologie') scores.technique += 3;

    // Analyse des points forts
    if (data.strengths === 'analyse') scores.sciences += 2;
    if (data.strengths === 'communication') scores.commerce += 2;
    if (data.strengths === 'innovation') scores.arts += 2;
    if (data.strengths === 'empathie') scores.social += 2;
    if (data.strengths === 'resolution') scores.technique += 2;

    // Analyse du style de travail
    if (data.workStyle === 'methodique') scores.sciences += 1;
    if (data.workStyle === 'equipe') scores.commerce += 1;
    if (data.workStyle === 'flexible') scores.arts += 1;
    if (data.workStyle === 'collaboratif') scores.social += 1;
    if (data.workStyle === 'autonome') scores.technique += 1;

    // Analyse des valeurs
    if (data.values === 'innovation') {
      scores.sciences += 1;
      scores.technique += 1;
    }
    if (data.values === 'impact') scores.social += 2;
    if (data.values === 'creativite') scores.arts += 2;
    if (data.values === 'reussite') scores.commerce += 2;

    // Analyse de l'environnement
    if (data.environment === 'laboratoire') scores.sciences += 2;
    if (data.environment === 'bureau') scores.commerce += 2;
    if (data.environment === 'studio') scores.arts += 2;
    if (data.environment === 'terrain') scores.social += 2;
    if (data.environment === 'atelier') scores.technique += 2;

    // Trouver le domaine avec le score le plus élevé
    let maxScore = 0;
    let topField = '';
    Object.entries(scores).forEach(([field, score]) => {
      if (score > maxScore) {
        maxScore = score;
        topField = field;
      }
    });

    // Générer les résultats
    const fieldToCareer = {
      sciences: {
        title: 'Sciences et Recherche',
        description: 'Vous avez un esprit analytique et une forte curiosité intellectuelle.',
        careers: ['Médecine', 'Ingénierie', 'Recherche scientifique', 'Mathématiques', 'Pharmacie'],
        establishments: ['Université Cheikh Anta Diop (UCAD)', 'École Polytechnique de Thiès', 'Université Gaston Berger'],
      },
      commerce: {
        title: 'Commerce et Gestion',
        description: 'Vous avez d\'excellentes compétences en communication et un sens aigu des affaires.',
        careers: ['Marketing', 'Comptabilité', 'Gestion d\'entreprise', 'Commerce international', 'Finance'],
        establishments: ['ISM (Institut Supérieur de Management)', 'CESAG', 'BEM Dakar'],
      },
      arts: {
        title: 'Arts et Création',
        description: 'Vous êtes créatif et possédez une sensibilité artistique prononcée.',
        careers: ['Design', 'Communication visuelle', 'Arts plastiques', 'Architecture', 'Cinéma'],
        establishments: ['École Nationale des Arts', 'Institut Supérieur des Arts et Cultures', 'SUPDECO'],
      },
      social: {
        title: 'Sciences Sociales et Santé',
        description: 'Vous êtes empathique et souhaitez aider les autres.',
        careers: ['Travail social', 'Enseignement', 'Psychologie', 'Humanitaire', 'Santé communautaire'],
        establishments: ['ENTSS', 'Université Cheikh Anta Diop (Faculté de Médecine)', 'FASTEF'],
      },
      technique: {
        title: 'Technologies et Ingénierie',
        description: 'Vous êtes pragmatique et aimez résoudre des problèmes concrets.',
        careers: ['Développement informatique', 'Réseaux et télécoms', 'Électronique', 'BTP', 'Mécanique'],
        establishments: ['ESP Dakar', 'ESMT', 'École Supérieure Polytechnique'],
      },
    };

    return fieldToCareer[topField as keyof typeof fieldToCareer];
  };

  const onSubmit = (data: FormValues) => {
    const calculatedResults = calculateResults(data);
    setResults(calculatedResults);
    setShowResults(true);
    toast({
      title: "Test complété !",
      description: "Vos résultats sont maintenant disponibles.",
    });
  };

  const nextStep = () => {
    form.trigger().then((isValid) => {
      if (isValid) {
        setStep(step + 1);
      } else {
        toast({
          title: "Veuillez compléter toutes les questions",
          description: "Certaines réponses sont manquantes",
          variant: "destructive",
        });
      }
    });
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const restartTest = () => {
    form.reset();
    setStep(1);
    setShowResults(false);
    setResults(null);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-poppins font-bold text-ipro-navy mb-6">Orientation</h1>
      
      {!showResults ? (
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Test d'orientation intelligent</CardTitle>
            <CardDescription>
              Notre test d'orientation basé sur l'IA vous aide à découvrir les filières et métiers qui correspondent à vos intérêts, 
              votre personnalité et vos compétences. Répondez à quelques questions pour obtenir des recommandations personnalisées.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="mb-6 flex justify-between">
              {[1, 2, 3, 4, 5].map((stepNumber) => (
                <div 
                  key={stepNumber} 
                  className={`w-1/6 h-2 rounded ${step >= stepNumber ? 'bg-ipro-teal' : 'bg-gray-200'}`}
                />
              ))}
            </div>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)}>
                {step === 1 && (
                  <div>
                    <h2 className="text-xl font-medium mb-4">Quels sont vos centres d'intérêt principaux ?</h2>
                    <FormField
                      control={form.control}
                      name="interests"
                      render={({ field }) => (
                        <FormItem className="space-y-3">
                          <FormControl>
                            <RadioGroup
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                              className="flex flex-col space-y-3"
                            >
                              <div className="flex items-center space-x-2">
                                <input
                                  type="radio"
                                  id="sciences"
                                  value="sciences"
                                  {...field}
                                  className="h-4 w-4 border-gray-300 text-ipro-navy focus:ring-ipro-teal"
                                />
                                <Label htmlFor="sciences" className="text-base">Les sciences, la recherche et l'observation</Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <input
                                  type="radio"
                                  id="affaires"
                                  value="affaires"
                                  {...field}
                                  className="h-4 w-4 border-gray-300 text-ipro-navy focus:ring-ipro-teal"
                                />
                                <Label htmlFor="affaires" className="text-base">Les affaires, la négociation et la persuasion</Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <input
                                  type="radio"
                                  id="creativite"
                                  value="creativite"
                                  {...field}
                                  className="h-4 w-4 border-gray-300 text-ipro-navy focus:ring-ipro-teal"
                                />
                                <Label htmlFor="creativite" className="text-base">La créativité, l'art et l'expression</Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <input
                                  type="radio"
                                  id="aide"
                                  value="aide"
                                  {...field}
                                  className="h-4 w-4 border-gray-300 text-ipro-navy focus:ring-ipro-teal"
                                />
                                <Label htmlFor="aide" className="text-base">Aider les autres et le travail social</Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <input
                                  type="radio"
                                  id="technologie"
                                  value="technologie"
                                  {...field}
                                  className="h-4 w-4 border-gray-300 text-ipro-navy focus:ring-ipro-teal"
                                />
                                <Label htmlFor="technologie" className="text-base">La technologie et les systèmes techniques</Label>
                              </div>
                            </RadioGroup>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                )}
                
                {step === 2 && (
                  <div>
                    <h2 className="text-xl font-medium mb-4">Quels sont vos points forts ?</h2>
                    <FormField
                      control={form.control}
                      name="strengths"
                      render={({ field }) => (
                        <FormItem className="space-y-3">
                          <FormControl>
                            <RadioGroup
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                              className="flex flex-col space-y-3"
                            >
                              <div className="flex items-center space-x-2">
                                <input
                                  type="radio"
                                  id="analyse"
                                  value="analyse"
                                  {...field}
                                  className="h-4 w-4 border-gray-300 text-ipro-navy focus:ring-ipro-teal"
                                />
                                <Label htmlFor="analyse" className="text-base">Analyse et résolution de problèmes complexes</Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <input
                                  type="radio"
                                  id="communication"
                                  value="communication"
                                  {...field}
                                  className="h-4 w-4 border-gray-300 text-ipro-navy focus:ring-ipro-teal"
                                />
                                <Label htmlFor="communication" className="text-base">Communication et relation client</Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <input
                                  type="radio"
                                  id="innovation"
                                  value="innovation"
                                  {...field}
                                  className="h-4 w-4 border-gray-300 text-ipro-navy focus:ring-ipro-teal"
                                />
                                <Label htmlFor="innovation" className="text-base">Innovation et créativité</Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <input
                                  type="radio"
                                  id="empathie"
                                  value="empathie"
                                  {...field}
                                  className="h-4 w-4 border-gray-300 text-ipro-navy focus:ring-ipro-teal"
                                />
                                <Label htmlFor="empathie" className="text-base">Empathie et capacité d'écoute</Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <input
                                  type="radio"
                                  id="resolution"
                                  value="resolution"
                                  {...field}
                                  className="h-4 w-4 border-gray-300 text-ipro-navy focus:ring-ipro-teal"
                                />
                                <Label htmlFor="resolution" className="text-base">Résolution de problèmes techniques</Label>
                              </div>
                            </RadioGroup>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                )}
                
                {step === 3 && (
                  <div>
                    <h2 className="text-xl font-medium mb-4">Quel style de travail préférez-vous ?</h2>
                    <FormField
                      control={form.control}
                      name="workStyle"
                      render={({ field }) => (
                        <FormItem className="space-y-3">
                          <FormControl>
                            <RadioGroup
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                              className="flex flex-col space-y-3"
                            >
                              <div className="flex items-center space-x-2">
                                <input
                                  type="radio"
                                  id="methodique"
                                  value="methodique"
                                  {...field}
                                  className="h-4 w-4 border-gray-300 text-ipro-navy focus:ring-ipro-teal"
                                />
                                <Label htmlFor="methodique" className="text-base">Méthodique et structuré</Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <input
                                  type="radio"
                                  id="equipe"
                                  value="equipe"
                                  {...field}
                                  className="h-4 w-4 border-gray-300 text-ipro-navy focus:ring-ipro-teal"
                                />
                                <Label htmlFor="equipe" className="text-base">En équipe et orienté résultats</Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <input
                                  type="radio"
                                  id="flexible"
                                  value="flexible"
                                  {...field}
                                  className="h-4 w-4 border-gray-300 text-ipro-navy focus:ring-ipro-teal"
                                />
                                <Label htmlFor="flexible" className="text-base">Flexible et adaptable</Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <input
                                  type="radio"
                                  id="collaboratif"
                                  value="collaboratif"
                                  {...field}
                                  className="h-4 w-4 border-gray-300 text-ipro-navy focus:ring-ipro-teal"
                                />
                                <Label htmlFor="collaboratif" className="text-base">Collaboratif et orienté relations humaines</Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <input
                                  type="radio"
                                  id="autonome"
                                  value="autonome"
                                  {...field}
                                  className="h-4 w-4 border-gray-300 text-ipro-navy focus:ring-ipro-teal"
                                />
                                <Label htmlFor="autonome" className="text-base">Autonome et orienté projets</Label>
                              </div>
                            </RadioGroup>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                )}
                
                {step === 4 && (
                  <div>
                    <h2 className="text-xl font-medium mb-4">Quelles valeurs professionnelles sont importantes pour vous ?</h2>
                    <FormField
                      control={form.control}
                      name="values"
                      render={({ field }) => (
                        <FormItem className="space-y-3">
                          <FormControl>
                            <RadioGroup
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                              className="flex flex-col space-y-3"
                            >
                              <div className="flex items-center space-x-2">
                                <input
                                  type="radio"
                                  id="innovation"
                                  value="innovation"
                                  {...field}
                                  className="h-4 w-4 border-gray-300 text-ipro-navy focus:ring-ipro-teal"
                                />
                                <Label htmlFor="innovation" className="text-base">Innovation et découverte</Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <input
                                  type="radio"
                                  id="reussite"
                                  value="reussite"
                                  {...field}
                                  className="h-4 w-4 border-gray-300 text-ipro-navy focus:ring-ipro-teal"
                                />
                                <Label htmlFor="reussite" className="text-base">Réussite financière et reconnaissance</Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <input
                                  type="radio"
                                  id="creativite"
                                  value="creativite"
                                  {...field}
                                  className="h-4 w-4 border-gray-300 text-ipro-navy focus:ring-ipro-teal"
                                />
                                <Label htmlFor="creativite" className="text-base">Créativité et liberté d'expression</Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <input
                                  type="radio"
                                  id="impact"
                                  value="impact"
                                  {...field}
                                  className="h-4 w-4 border-gray-300 text-ipro-navy focus:ring-ipro-teal"
                                />
                                <Label htmlFor="impact" className="text-base">Impact social et aide aux autres</Label>
                              </div>
                            </RadioGroup>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                )}
                
                {step === 5 && (
                  <div>
                    <h2 className="text-xl font-medium mb-4">Dans quel environnement préférez-vous travailler ?</h2>
                    <FormField
                      control={form.control}
                      name="environment"
                      render={({ field }) => (
                        <FormItem className="space-y-3">
                          <FormControl>
                            <RadioGroup
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                              className="flex flex-col space-y-3"
                            >
                              <div className="flex items-center space-x-2">
                                <input
                                  type="radio"
                                  id="laboratoire"
                                  value="laboratoire"
                                  {...field}
                                  className="h-4 w-4 border-gray-300 text-ipro-navy focus:ring-ipro-teal"
                                />
                                <Label htmlFor="laboratoire" className="text-base">Laboratoire ou environnement de recherche</Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <input
                                  type="radio"
                                  id="bureau"
                                  value="bureau"
                                  {...field}
                                  className="h-4 w-4 border-gray-300 text-ipro-navy focus:ring-ipro-teal"
                                />
                                <Label htmlFor="bureau" className="text-base">Bureau d'entreprise et salles de réunion</Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <input
                                  type="radio"
                                  id="studio"
                                  value="studio"
                                  {...field}
                                  className="h-4 w-4 border-gray-300 text-ipro-navy focus:ring-ipro-teal"
                                />
                                <Label htmlFor="studio" className="text-base">Studio créatif ou espace artistique</Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <input
                                  type="radio"
                                  id="terrain"
                                  value="terrain"
                                  {...field}
                                  className="h-4 w-4 border-gray-300 text-ipro-navy focus:ring-ipro-teal"
                                />
                                <Label htmlFor="terrain" className="text-base">Sur le terrain, en contact avec les gens</Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <input
                                  type="radio"
                                  id="atelier"
                                  value="atelier"
                                  {...field}
                                  className="h-4 w-4 border-gray-300 text-ipro-navy focus:ring-ipro-teal"
                                />
                                <Label htmlFor="atelier" className="text-base">Atelier ou environnement technique</Label>
                              </div>
                            </RadioGroup>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                )}
                
                <div className="flex justify-between mt-8">
                  {step > 1 && (
                    <Button 
                      type="button" 
                      variant="outline" 
                      onClick={prevStep}
                    >
                      Précédent
                    </Button>
                  )}
                  
                  {step < 5 ? (
                    <Button 
                      type="button" 
                      className="bg-ipro-teal hover:bg-teal-600"
                      onClick={nextStep}
                    >
                      Suivant
                    </Button>
                  ) : (
                    <Button 
                      type="submit" 
                      className="bg-ipro-teal hover:bg-teal-600"
                    >
                      Voir mes résultats
                    </Button>
                  )}
                </div>
              </form>
            </Form>
          </CardContent>
        </Card>
      ) : (
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Vos résultats d'orientation</CardTitle>
            <CardDescription>
              Basé sur vos réponses, voici les domaines et métiers qui pourraient vous correspondre
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="bg-ipro-teal/10 p-4 rounded-lg mb-6">
              <h2 className="text-2xl font-semibold text-ipro-navy mb-2">{results.title}</h2>
              <p className="text-gray-600 mb-4">{results.description}</p>
              
              <div className="mb-6">
                <h3 className="text-lg font-medium text-ipro-navy mb-2">Métiers recommandés :</h3>
                <ul className="list-disc list-inside">
                  {results.careers.map((career: string, index: number) => (
                    <li key={index} className="text-gray-600">{career}</li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-ipro-navy mb-2">Établissements à considérer :</h3>
                <ul className="list-disc list-inside">
                  {results.establishments.map((establishment: string, index: number) => (
                    <li key={index} className="text-gray-600">{establishment}</li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="mb-6">
              <h3 className="text-lg font-medium text-ipro-navy mb-2">Que faire maintenant ?</h3>
              <ol className="list-decimal list-inside space-y-2 text-gray-600">
                <li>Explorez les fiches métiers détaillées dans notre bibliothèque</li>
                <li>Consultez notre section Formations pour découvrir les établissements recommandés</li>
                <li>Prenez rendez-vous avec un conseiller d'orientation pour approfondir votre projet</li>
              </ol>
            </div>
          </CardContent>
          <CardFooter>
            <Button 
              onClick={restartTest} 
              variant="outline" 
              className="w-full"
            >
              Refaire le test
            </Button>
          </CardFooter>
        </Card>
      )}
      
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
