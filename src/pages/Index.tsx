import { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Certifications from '@/components/Certifications';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const Index = () => {
  useScrollReveal();

  useEffect(() => {
    // Add structured data for SEO
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Vinícius Machado",
      "jobTitle": "Engenheiro de Dados",
      "description": "Especialista em pipelines ETL, AWS Cloud e IA Generativa",
      "url": "https://viniciusmachado.github.io",
      "sameAs": [
        "https://linkedin.com/in/viniciusmachado",
        "https://github.com/viniciusmachado"
      ],
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "São Paulo",
        "addressRegion": "SP",
        "addressCountry": "Brasil"
      },
      "alumniOf": "Compass UOL",
      "worksFor": {
        "@type": "Organization",
        "name": "Outlier AI"
      },
      "knowsAbout": [
        "Data Engineering",
        "AWS",
        "Python",
        "Apache Spark",
        "LangChain",
        "Machine Learning",
        "ETL Pipelines"
      ]
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Certifications />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
