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
      "jobTitle": "Engenheiro de Dados Jr.",
      "description": "Engenheiro de Dados em início de carreira com experiência em pipelines ETL, AWS Cloud e IA Generativa",
      "url": "https://vmendess.github.io",
      "sameAs": [
        "https://www.linkedin.com/in/vinicius-machado-11b7a1256",
        "https://github.com/vmendess"
      ],
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Fortaleza",
        "addressRegion": "CE",
        "addressCountry": "Brasil"
      },
      "alumniOf": "UNI7 - Centro Universitário 7 de Setembro",
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
        "ETL Pipelines",
        "Prompt Engineering"
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
