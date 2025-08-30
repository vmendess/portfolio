import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Award, Calendar } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: 'AWS Certified Data Engineer - Associate',
      issuer: 'Amazon Web Services',
      date: '2024',
      credentialId: 'AWS-DEA-12345',
      description: 'Certificação em engenharia de dados na AWS, cobrindo Glue, EMR, Redshift, e boas práticas de Big Data.',
      skills: ['AWS Glue', 'EMR', 'Redshift', 'Kinesis', 'Lambda'],
      color: 'from-orange-500 to-yellow-500',
      verified: true
    },
    {
      title: 'LangChain for LLM Application Development',
      issuer: 'DeepLearning.AI',
      date: '2024',
      credentialId: 'DL-LC-67890',
      description: 'Curso prático sobre desenvolvimento de aplicações com LLMs usando LangChain framework.',
      skills: ['LangChain', 'OpenAI', 'Vector Stores', 'Chains', 'Agents'],
      color: 'from-purple-500 to-pink-500',
      verified: true
    },
    {
      title: 'AWS Certified Cloud Practitioner',
      issuer: 'Amazon Web Services',
      date: '2023',
      credentialId: 'AWS-CCP-11111',
      description: 'Fundamentos de computação em nuvem e serviços AWS essenciais.',
      skills: ['AWS Fundamentals', 'Cloud Computing', 'Security', 'Pricing'],
      color: 'from-blue-500 to-cyan-500',
      verified: true
    },
    {
      title: 'Amazon QuickSight Business Intelligence',
      issuer: 'AWS Training',
      date: '2023',
      credentialId: 'AWS-QS-22222',
      description: 'Desenvolvimento de dashboards e análises de dados com Amazon QuickSight.',
      skills: ['QuickSight', 'Data Visualization', 'Business Intelligence', 'Dashboards'],
      color: 'from-green-500 to-emerald-500',
      verified: true
    },
    {
      title: 'Apache Spark Developer Certification',
      issuer: 'Databricks',
      date: '2023',
      credentialId: 'DB-SPARK-33333',
      description: 'Desenvolvimento avançado com Apache Spark para processamento de Big Data.',
      skills: ['Apache Spark', 'PySpark', 'Spark SQL', 'MLlib', 'Streaming'],
      color: 'from-red-500 to-orange-500',
      verified: true
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Certificações <span className="text-gradient">& Qualificações</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Credenciais que validam minha expertise em tecnologias de dados e IA
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <Card key={index} className="cert-badge p-6 scroll-reveal h-full flex flex-col">
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${cert.color} bg-opacity-20 flex items-center justify-center flex-shrink-0`}>
                  <Award className="h-6 w-6 text-primary" />
                </div>
                {cert.verified && (
                  <Badge variant="secondary" className="bg-green-100 text-green-800 border-green-200">
                    Verificado
                  </Badge>
                )}
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-lg font-bold text-foreground mb-2 leading-tight">
                  {cert.title}
                </h3>
                
                <div className="text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-medium">{cert.issuer}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-3 w-3" />
                    <span>{cert.date}</span>
                    <span className="text-xs">•</span>
                    <span className="text-xs font-mono">{cert.credentialId}</span>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {cert.description}
                </p>

                {/* Skills */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {cert.skills.map((skill) => (
                    <Badge 
                      key={skill} 
                      variant="outline" 
                      className="text-xs border-primary/30 text-primary bg-primary/5"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Footer */}
              <div className="flex gap-2 mt-auto">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="flex-1 hover:bg-primary/10 hover:text-primary hover:border-primary/50"
                  asChild
                >
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-3 w-3 mr-2" />
                    Ver Certificado
                  </a>
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 scroll-reveal">
          {[
            { number: '5+', label: 'Certificações Ativas' },
            { number: '3', label: 'Provedores Diferentes' },
            { number: '100%', label: 'Taxa de Aprovação' },
            { number: '2024', label: 'Última Certificação' }
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

export default Certifications;