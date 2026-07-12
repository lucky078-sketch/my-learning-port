// Edit anything in this file to update the portfolio content.
export const profile = {
  name: "Your Name",
  age: 18,
  city: "Your City",
  intro:
    "Hello! I'm currently learning computer science and web development. This website showcases my learning journey and my first projects.",
  bio:
    "I'm a beginner passionate about how software works. I spend my days building small projects, reading tutorials, and asking a lot of questions.",
  goals:
    "My goal is to become a confident full-stack developer, contribute to open source, and build products that help people.",
};

export const strengths = [
  { title: "Problem Solving", description: "Breaking down big problems into small, solvable steps." },
  { title: "Creativity", description: "Turning ideas into interactive experiences on the web." },
  { title: "Teamwork", description: "Learning faster by sharing and collaborating with others." },
  { title: "Continuous Learning", description: "Curious every day — the tech world never stops moving." },
];

export const learningTopics = [
  {
    title: "What is a Computer?",
    description:
      "A computer is a machine that follows instructions to store data, do calculations, and show results on a screen.",
    icon: "Cpu",
  },
  {
    title: "What is HTML?",
    description:
      "HTML is the language that describes the structure of a web page — headings, paragraphs, images and links.",
    icon: "Code2",
  },
  {
    title: "What is CSS?",
    description:
      "CSS styles the page: colors, fonts, spacing and layout. It's what makes websites look good.",
    icon: "Palette",
  },
  {
    title: "What is JavaScript?",
    description:
      "JavaScript makes pages interactive — buttons, forms, animations and calculations all use JavaScript.",
    icon: "Braces",
  },
  {
    title: "How does a Website work?",
    description:
      "Your browser asks a server for a page, downloads HTML, CSS and JS, then shows the result to you.",
    icon: "Globe",
  },
  {
    title: "What is Git and GitHub?",
    description:
      "Git tracks changes in your code. GitHub is a website to store, share and collaborate on Git projects.",
    icon: "GitBranch",
  },
] as const;

export const skills = [
  { label: "HTML", value: 80 },
  { label: "CSS", value: 70 },
  { label: "JavaScript", value: 55 },
  { label: "Problem Solving", value: 65 },
  { label: "Communication", value: 75 },
];

export const contact = {
  email: "your.email@example.com",
  phone: "+1 (555) 123-4567",
  location: "Your City, Country",
  socials: {
    github: "https://github.com/yourhandle",
    linkedin: "https://linkedin.com/in/yourhandle",
    twitter: "https://twitter.com/yourhandle",
  },
};