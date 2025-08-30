import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, Download, ExternalLink } from 'lucide-react';
import profilePhoto from '@/assets/profile-photo.png';

const Hero = () => {
  const [text, setText] = useState('');
  const fullText = 'Engenheiro de Dados Jr. | IA Generativa';

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000" />
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Profile Photo */}
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-2 border-border shadow-card">
              <img 
                src={profilePhoto} 
                alt="Vinícius Machado - Engenheiro de Dados" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Main Content */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            <span className="block text-foreground">Vinícius</span>
            <span className="block hero-title tech-glow">Machado</span>
          </h1>

          <div className="h-16 mb-8">
            <p className="text-xl md:text-2xl text-muted-foreground font-medium">
              {text}
              <span className="animate-pulse">|</span>
            </p>
          </div>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
            Engenheiro de Dados em início de carreira com experiência em pipelines ETL, 
            AWS Cloud e IA Generativa. Focado em automação e soluções de dados confiáveis.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:opacity-90 transition-opacity text-primary-foreground px-8 py-3 rounded-xl font-semibold"
              asChild
            >
              <a href="#projects">
                Ver Projetos
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary/50 hover:bg-primary/10 text-primary px-8 py-3 rounded-xl font-semibold"
              asChild
            >
              <a href="#contact">
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </a>
            </Button>
          </div>

          {/* Stats - Ajustado para júnior */}
          <div className="grid grid-cols-3 gap-8 max-w-lg mx-auto mb-16">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-gradient mb-1">1+</div>
              <div className="text-sm text-muted-foreground">Anos de Experiência</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-gradient mb-1">8</div>
              <div className="text-sm text-muted-foreground">Certificações</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-gradient mb-1">5+</div>
              <div className="text-sm text-muted-foreground">Projetos</div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
            <ChevronDown className="h-6 w-6" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;