// Edit anything in this file to update the portfolio content.
export const profile = {
  name: "Kurtis",
  age: 18,
  city: "Douala",
  intro:
    "Bonjour ! J'apprends actuellement l'informatique et le développement web. Ce site présente mon parcours d'apprentissage et mes premiers projets.",
  bio:
    "Je suis un débutant passionné par le fonctionnement des logiciels. Je passe mes journées à créer de petits projets, à lire des tutoriels et à poser beaucoup de questions.",
  goals:
    "Mon objectif est de devenir un développeur full-stack compétent, de contribuer à l'open source et de créer des produits utiles pour les gens.",
};

export const strengths = [
  { title: "Résolution de problèmes", description: "Décomposer de gros problèmes en petites étapes faciles à résoudre." },
  { title: "Créativité", description: "Transformer des idées en expériences web interactives." },
  { title: "Travail d'équipe", description: "Apprendre plus vite en partageant et en collaborant avec les autres." },
  { title: "Apprentissage continu", description: "Curieux chaque jour — le monde de la technologie ne s'arrête jamais." },
];

export const learningTopics = [
  {
    title: "Qu'est-ce qu'un ordinateur ?",
    description:
      "Un ordinateur est une machine qui suit des instructions pour stocker des données, faire des calculs et afficher des résultats à l'écran.",
    icon: "Cpu",
  },
  {
    title: "Qu'est-ce que le HTML ?",
    description:
      "Le HTML est le langage qui décrit la structure d'une page web — titres, paragraphes, images et liens.",
    icon: "Code2",
  },
  {
    title: "Qu'est-ce que le CSS ?",
    description:
      "Le CSS donne du style à la page : couleurs, polices, espace et mise en page. C'est ce qui rend les sites beaux.",
    icon: "Palette",
  },
  {
    title: "Qu'est-ce que JavaScript ?",
    description:
      "JavaScript rend les pages interactives — les boutons, les formulaires, les animations et les calculs utilisent JavaScript.",
    icon: "Braces",
  },
  {
    title: "Comment fonctionne un site web ?",
    description:
      "Votre navigateur demande une page à un serveur, télécharge le HTML, le CSS et le JavaScript, puis affiche le résultat à l'écran.",
    icon: "Globe",
  },
  {
    title: "Qu'est-ce que Git et GitHub ?",
    description:
      "Git suit les changements dans votre code. GitHub est un site pour stocker, partager et collaborer sur des projets Git.",
    icon: "GitBranch",
  },
] as const;

export const skills = [
  { label: "HTML", value: 80 },
  { label: "CSS", value: 70 },
  { label: "JavaScript", value: 55 },
  { label: "Résolution de problèmes", value: 65 },
  { label: "Communication", value: 75 },
];

export const contact = {
  email: "Abama-keurtis@gmail.com",
  phone: "+237 620 00 35 88",
  location: "Douala, Cameroun",
  socials: {
    github: "https://github.com/yourhandle",
    linkedin: "https://linkedin.com/in/yourhandle",
    twitter: "https://twitter.com/yourhandle",
  },
};