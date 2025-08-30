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
      color: 'from-primary/20 to-primary/10',
      skills: [
        { name: 'AWS Glue' },
        { name: 'Apache Spark' },
        { name: 'AWS Athena' },
        { name: 'Amazon S3' },
        { name: 'Lambda' },
        { name: 'QuickSight' }
      ]
    },
    {
      category: 'Linguagens & Frameworks',
      icon: Code,
      color: 'from-secondary/20 to-secondary/10',
      skills: [
        { name: 'Python' },
        { name: 'SQL' },
        { name: 'Pandas' },
        { name: 'boto3' },
        { name: 'PostgreSQL' },
        { name: 'Git' }
      ]
    },
    {
      category: 'IA & Machine Learning',
      icon: Brain,
      color: 'from-accent/20 to-accent/10',
      skills: [
        { name: 'LangChain' },
        { name: 'OpenAI API' },
        { name: 'Prompt Engineering' },
        { name: 'RLHF' },
        { name: 'AI Agents' },
        { name: 'LLM Apps' }
      ]
    },
    {
      category: 'DevOps & Tools',
      icon: Container,
      color: 'from-muted/20 to-muted/10',
      skills: [
        { name: 'Docker' },
        { name: 'Git' },
        { name: 'AWS CLI' },
        { name: 'Linux' },
        { name: 'DBeaver' },
        { name: 'PyCharm' }
      ]
    }
  ];

  const tools = [
    'AWS Glue', 'Apache Spark', 'Python', 'SQL', 'LangChain', 'Docker',
    'AWS Athena', 'Pandas', 'boto3', 'OpenAI API', 'Git', 'PostgreSQL',
    'Amazon S3', 'QuickSight', 'Lambda', 'PyXLSB', 'Difflib', 'DBeaver'
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
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center mr-4`}>
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{category.category}</h3>
                </div>

                <div className="space-y-3">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="text-sm font-medium text-muted-foreground">
                      {skill.name}
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

        {/* Additional Stats - Ajustado para júnior */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 scroll-reveal">
          {[
            { icon: Database, number: '10+', label: 'Pipelines Desenvolvidos' },
            { icon: Cpu, number: '1M+', label: 'Registros Processados' },
            { icon: BarChart3, number: '5+', label: 'Dashboards Criados' },
            { icon: Workflow, number: '3+', label: 'Projetos AWS' }
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