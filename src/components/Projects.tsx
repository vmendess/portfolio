import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Database, Brain, Cloud } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Pipeline ETL Inteligente com IA',
      description: 'Sistema avançado de ETL que utiliza IA generativa para classificação automática de dados e detecção de anomalias em tempo real.',
      longDescription: 'Desenvolvido usando AWS Glue e LangChain, este pipeline processa terabytes de dados diariamente, aplicando modelos de ML para limpeza automática e classificação inteligente de datasets.',
      image: '/api/placeholder/600/400',
      category: 'Data Engineering',
      icon: Database,
      technologies: ['AWS Glue', 'Apache Spark', 'LangChain', 'Python', 'S3', 'Athena'],
      highlights: [
        '99.8% de precisão na classificação',
        'Redução de 60% no tempo de processamento',
        'Processamento de 2TB+ de dados diários'
      ],
      metrics: {
        performance: '300% mais rápido',
        accuracy: '99.8%',
        dataProcessed: '2TB/dia'
      },
      status: 'Em Produção',
      year: '2024'
    },
    {
      title: 'Sistema RAG para Análise de Documentos',
      description: 'Plataforma de IA que permite consultas em linguagem natural sobre bases de documentos corporativos usando técnicas RAG avançadas.',
      longDescription: 'Integra embeddings vetoriais com LLMs para criar um sistema de busca semântica que responde perguntas complexas sobre documentos técnicos e relatórios.',
      image: '/api/placeholder/600/400',
      category: 'AI/ML',
      icon: Brain,
      technologies: ['LangChain', 'OpenAI', 'Pinecone', 'FastAPI', 'Docker', 'Streamlit'],
      highlights: [
        'Suporte a 10+ formatos de documento',
        'Respostas em < 2 segundos',
        'Interface conversacional intuitiva'
      ],
      metrics: {
        responseTime: '< 2s',
        accuracy: '95%',
        documentsIndexed: '10K+'
      },
      status: 'MVP Completo',
      year: '2024'
    },
    {
      title: 'Data Lake Serverless na AWS',
      description: 'Arquitetura completa de data lake serverless com ingestão automatizada, catalogação de dados e APIs para consumo analítico.',
      longDescription: 'Solução escalável usando serviços AWS nativos para criar um data lake que suporta análises em tempo real e batch processing com governança de dados integrada.',
      image: '/api/placeholder/600/400',
      category: 'Cloud Architecture',
      icon: Cloud,
      technologies: ['AWS Lambda', 'S3', 'Glue Catalog', 'Athena', 'QuickSight', 'CloudFormation'],
      highlights: [
        'Arquitetura 100% serverless',
        'Custo 40% menor que alternativas',
        'Escalabilidade automática'
      ],
      metrics: {
        costReduction: '40%',
        uptime: '99.9%',
        autoScaling: 'Sim'
      },
      status: 'Em Produção',
      year: '2023'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Em Produção': return 'bg-green-100 text-green-800 border-green-200';
      case 'MVP Completo': return 'bg-blue-100 text-blue-800 border-blue-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Meus <span className="text-gradient">Projetos</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Soluções inovadoras que combinam engenharia de dados com IA generativa
          </p>
        </div>

        <div className="space-y-12">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <Card key={index} className="project-card overflow-hidden scroll-reveal">
                <div className="grid lg:grid-cols-2 gap-0">
                  {/* Image */}
                  <div className="relative bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center min-h-[300px]">
                    <div className="text-center">
                      {/* Placeholder para imagem do projeto */}
                      <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                        <Icon className="h-12 w-12 text-primary" />
                      </div>
                      <div className="text-sm text-muted-foreground">Demonstração do Projeto</div>
                    </div>
                    <div className="absolute top-4 right-4">
                      <Badge className={getStatusColor(project.status)}>
                        {project.status}
                      </Badge>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 flex flex-col">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <Badge variant="outline" className="mb-3 border-primary/30 text-primary">
                          {project.category}
                        </Badge>
                        <h3 className="text-2xl font-bold text-foreground mb-2">
                          {project.title}
                        </h3>
                        <div className="text-sm text-muted-foreground mb-4">{project.year}</div>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                      {project.longDescription}
                    </p>

                    {/* Highlights */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-foreground mb-3">Principais Resultados:</h4>
                      <ul className="space-y-2">
                        {project.highlights.map((highlight, i) => (
                          <li key={i} className="text-sm text-muted-foreground flex items-start">
                            <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Metrics */}
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      {Object.entries(project.metrics).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <div className="text-lg font-bold text-gradient">{value}</div>
                          <div className="text-xs text-muted-foreground capitalize">
                            {key.replace(/([A-Z])/g, ' $1').toLowerCase()}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Technologies */}
                    <div className="mb-6">
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <Badge key={tech} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-3 mt-auto pt-4">
                      <Button 
                        variant="default" 
                        size="sm"
                        className="bg-gradient-primary hover:opacity-90 text-primary-foreground"
                        asChild
                      >
                        <a href="#" target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Ver Demo
                        </a>
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="hover:bg-primary/10 hover:text-primary hover:border-primary/50"
                        asChild
                      >
                        <a href="#" target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-2" />
                          Código
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 scroll-reveal">
          <p className="text-lg text-muted-foreground mb-6">
            Interessado em colaborar ou saber mais sobre algum projeto?
          </p>
          <Button 
            size="lg"
            className="bg-gradient-primary hover:opacity-90 text-primary-foreground px-8"
            asChild
          >
            <a href="#contact">
              Vamos Conversar
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;