import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Learning } from "@/components/portfolio/Learning";
import { Project } from "@/components/portfolio/Project";
import { Skills } from "@/components/portfolio/Skills";
import { LearningCertificate } from "@/components/portfolio/LearningCertificate";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Learning />
        <Project />
        <Skills />
        <LearningCertificate />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
