import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Building } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: 'Outlier AI',
      position: 'Prompt Engineer',
      location: 'Remote',
      period: '2024 - Presente',
      type: 'Freelance',
      description: [
        'Desenvolvimento e otimização de prompts para modelos de linguagem avançados',
        'Colaboração com equipes de ML para melhorar a qualidade das respostas de IA',
        'Criação de frameworks de avaliação para sistemas de IA generativa',
        'Análise de performance e fine-tuning de modelos LLM'
      ],
      technologies: ['LangChain', 'OpenAI GPT', 'Python', 'Hugging Face', 'Prompt Engineering', 'MLOps']
    },
    {
      company: 'Compass UOL',
      position: 'Estagiário - Engenharia de Dados',
      location: 'São Paulo, SP',
      period: '2023 - 2024',
      type: 'Estágio',
      description: [
        'Desenvolvimento de pipelines ETL usando AWS Glue e Apache Spark',
        'Modelagem e otimização de data warehouses em Amazon Redshift',
        'Implementação de soluções de monitoramento e alertas para pipelines',
        'Colaboração em projetos de migração de dados para arquitetura serverless'
      ],
      technologies: ['AWS Glue', 'Apache Spark', 'Python', 'SQL', 'AWS Athena', 'Amazon S3', 'Redshift']
    }
  ];

  return (
    <section id="experience" className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Experiência <span className="text-gradient">Profissional</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Minha trajetória profissional construindo soluções de dados e IA generativa
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-accent transform md:-translate-x-0.5"></div>

            {experiences.map((exp, index) => (
              <div key={index} className={`relative mb-12 scroll-reveal ${
                index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2'
              }`}>
                {/* Timeline Dot */}
                <div className={`absolute top-6 w-4 h-4 bg-primary rounded-full border-4 border-background ${
                  index % 2 === 0 
                    ? 'left-2 md:left-auto md:right-[-0.5rem]' 
                    : 'left-2 md:left-[-0.5rem]'
                }`}></div>

                <Card className={`project-card p-8 ml-8 md:ml-0 ${
                  index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                }`}>
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between mb-4">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <Building className="h-4 w-4 text-primary flex-shrink-0" />
                        <h3 className="text-xl font-bold text-foreground">{exp.company}</h3>
                        <Badge variant="secondary" className="ml-2">{exp.type}</Badge>
                      </div>
                      <h4 className="text-lg font-semibold text-primary mb-2">{exp.position}</h4>
                    </div>
                  </div>

                  {/* Meta Info */}
                  <div className="flex flex-wrap gap-4 mb-6 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {exp.period}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {exp.location}
                    </div>
                  </div>

                  {/* Description */}
                  <ul className="space-y-2 mb-6">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-muted-foreground flex items-start">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="border-primary/30 text-primary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;