import { Card } from '@/components/ui/card';
import { Database, Brain, Cloud, Code } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Database,
      title: 'Pipelines ETL',
      description: 'Construção de pipelines robustos para processamento de dados em escala'
    },
    {
      icon: Cloud,
      title: 'AWS Cloud',
      description: 'Expertise em Glue, Spark, Athena e outras ferramentas de Big Data'
    },
    {
      icon: Brain,
      title: 'IA Generativa',
      description: 'Desenvolvimento de soluções com LangChain e modelos de linguagem'
    },
    {
      icon: Code,
      title: 'Python & SQL',
      description: 'Manipulação avançada de dados e otimização de consultas complexas'
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Sobre <span className="text-gradient">Mim</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Engenheiro de Dados apaixonado por transformar dados complexos em insights valiosos. 
            Especializado em arquiteturas modernas de dados e IA Generativa.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="scroll-reveal">
            <Card className="p-8 bg-gradient-card border-border/50 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-6 text-gradient">Minha Jornada</h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Comecei minha carreira na <strong className="text-foreground">Compass UOL</strong> como estagiário, 
                  onde desenvolvi uma base sólida em engenharia de dados e arquitetura de sistemas distribuídos.
                </p>
                <p>
                  Atualmente, atuo como <strong className="text-foreground">Prompt Engineer</strong> na 
                  <strong className="text-foreground"> Outlier AI</strong>, onde trabalho no desenvolvimento 
                  e otimização de sistemas de IA generativa, combinando minha experiência em dados com 
                  as mais recentes tecnologias de machine learning.
                </p>
                <p>
                  Tenho paixão por criar soluções escaláveis que conectem dados brutos a insights 
                  estratégicos, sempre priorizando performance, confiabilidade e boas práticas de engenharia.
                </p>
              </div>
            </Card>
          </div>

          {/* Right Column - Highlights */}
          <div className="space-y-6 scroll-reveal">
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <Card key={index} className="skill-card p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2 text-foreground">{highlight.title}</h4>
                      <p className="text-muted-foreground">{highlight.description}</p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 scroll-reveal">
          {[
            { number: '100+', label: 'Datasets Processados' },
            { number: '500GB+', label: 'Dados Analisados' },
            { number: '15+', label: 'Pipelines Criados' },
            { number: '99.9%', label: 'Uptime Médio' }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-gradient mb-2">{stat.number}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;