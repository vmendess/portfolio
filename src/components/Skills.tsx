import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Database, 
  Cloud, 
  Code, 
  Brain, 
  Container, 
  BarChart3,
  Cpu,
  Workflow
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      category: 'Cloud & Big Data',
      icon: Cloud,
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'AWS Glue', level: 90 },
        { name: 'Apache Spark', level: 85 },
        { name: 'AWS Athena', level: 88 },
        { name: 'Amazon S3', level: 92 },
        { name: 'Redshift', level: 80 },
        { name: 'EMR', level: 75 }
      ]
    },
    {
      category: 'Linguagens & Frameworks',
      icon: Code,
      color: 'from-green-500 to-emerald-500',
      skills: [
        { name: 'Python', level: 95 },
        { name: 'SQL', level: 90 },
        { name: 'PySpark', level: 85 },
        { name: 'Pandas', level: 88 },
        { name: 'NumPy', level: 82 },
        { name: 'Dask', level: 70 }
      ]
    },
    {
      category: 'IA & Machine Learning',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'LangChain', level: 88 },
        { name: 'OpenAI API', level: 85 },
        { name: 'Hugging Face', level: 78 },
        { name: 'Prompt Engineering', level: 92 },
        { name: 'RAG Systems', level: 80 },
        { name: 'Vector Databases', level: 75 }
      ]
    },
    {
      category: 'DevOps & Tools',
      icon: Container,
      color: 'from-orange-500 to-red-500',
      skills: [
        { name: 'Docker', level: 85 },
        { name: 'Git', level: 90 },
        { name: 'Linux', level: 82 },
        { name: 'Airflow', level: 78 },
        { name: 'Terraform', level: 70 },
        { name: 'CI/CD', level: 75 }
      ]
    }
  ];

  const tools = [
    'AWS Glue', 'Apache Spark', 'Python', 'SQL', 'LangChain', 'Docker',
    'AWS Athena', 'Pandas', 'NumPy', 'OpenAI', 'Git', 'Linux',
    'Amazon S3', 'Redshift', 'PySpark', 'Airflow', 'Terraform', 'MLflow'
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Minhas <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Tecnologias e ferramentas que domino para criar soluções robustas de dados
          </p>
        </div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card key={index} className="skill-card p-8 scroll-reveal">
                <div className="flex items-center mb-6">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${category.color} bg-opacity-20 flex items-center justify-center mr-4`}>
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{category.category}</h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-foreground">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress 
                        value={skill.level} 
                        className="h-2 bg-muted"
                      />
                    </div>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>

        {/* Tools Cloud */}
        <div className="scroll-reveal">
          <h3 className="text-2xl font-bold text-center mb-8 text-gradient">Ferramentas & Tecnologias</h3>
          <Card className="p-8 bg-gradient-card border-border/50">
            <div className="flex flex-wrap gap-3 justify-center">
              {tools.map((tool) => (
                <Badge 
                  key={tool} 
                  variant="secondary" 
                  className="px-4 py-2 text-sm font-medium bg-muted/50 hover:bg-primary/10 hover:text-primary hover:border-primary/30 transition-all cursor-default"
                >
                  {tool}
                </Badge>
              ))}
            </div>
          </Card>
        </div>

        {/* Additional Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 scroll-reveal">
          {[
            { icon: Database, number: '50+', label: 'Pipelines ETL' },
            { icon: Cpu, number: '1TB+', label: 'Dados Processados' },
            { icon: BarChart3, number: '20+', label: 'Dashboards Criados' },
            { icon: Workflow, number: '5+', label: 'Arquiteturas Projetadas' }
          ].map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-gradient mb-2">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;