import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Linkedin, Github, MapPin, Phone, Send } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'vmendes590@gmail.com',
      href: 'mailto:vmendes590@gmail.com',
      color: 'from-primary/20 to-primary/10'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: '/in/vinicius-machado-11b7a1256',
      href: 'https://www.linkedin.com/in/vinicius-machado-11b7a1256',
      color: 'from-secondary/20 to-secondary/10'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: '@vmendess',
      href: 'https://github.com/vmendess',
      color: 'from-accent/20 to-accent/10'
    },
    {
      icon: MapPin,
      label: 'Localização',
      value: 'Fortaleza, CE - Brasil',
      href: '#',
      color: 'from-muted/20 to-muted/10'
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Vamos <span className="text-gradient">Conversar</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Interessado em colaborar ou discutir oportunidades? Entre em contato comigo!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="scroll-reveal">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">Informações de Contato</h3>
              <p className="text-muted-foreground leading-relaxed">
                Estou sempre aberto a discutir novos projetos, oportunidades interessantes 
                ou simplesmente bater um papo sobre dados e tecnologia.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <Card key={index} className="skill-card p-6">
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${info.color} bg-opacity-20 flex items-center justify-center`}>
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground">{info.label}</h4>
                        <a 
                          href={info.href}
                          className="text-muted-foreground hover:text-primary transition-colors"
                          target={info.label !== 'Email' && info.label !== 'Localização' ? '_blank' : undefined}
                          rel={info.label !== 'Email' && info.label !== 'Localização' ? 'noopener noreferrer' : undefined}
                        >
                          {info.value}
                        </a>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>

            {/* Quick Actions */}
            <div className="mt-8 space-y-4">
              <h4 className="font-semibold text-foreground">Ações Rápidas</h4>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button 
                  className="bg-gradient-primary hover:opacity-90 text-primary-foreground flex-1"
                  asChild
                >
                  <a href="mailto:vmendes590@gmail.com">
                    <Mail className="h-4 w-4 mr-2" />
                    Enviar Email
                  </a>
                </Button>
                <Button 
                  variant="outline" 
                  className="hover:bg-primary/10 hover:text-primary hover:border-primary/50 flex-1"
                  asChild
                >
                  <a href="https://www.linkedin.com/in/vinicius-machado-11b7a1256" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-4 w-4 mr-2" />
                    LinkedIn
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="scroll-reveal">
            <Card className="p-8 bg-gradient-card border-border/50">
              <h3 className="text-2xl font-bold text-foreground mb-6">Envie uma Mensagem</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Nome *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="bg-background/50 border-border/50 focus:border-primary"
                      placeholder="Seu nome completo"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="bg-background/50 border-border/50 focus:border-primary"
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                    Assunto *
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="bg-background/50 border-border/50 focus:border-primary"
                    placeholder="Sobre o que você gostaria de conversar?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Mensagem *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="bg-background/50 border-border/50 focus:border-primary resize-none"
                    placeholder="Descreva seu projeto, oportunidade ou qualquer coisa que gostaria de discutir..."
                  />
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-gradient-primary hover:opacity-90 text-primary-foreground py-3"
                >
                  <Send className="h-4 w-4 mr-2" />
                  Enviar Mensagem
                </Button>
              </form>
            </Card>
          </div>
        </div>

        {/* Additional Info */}
        <div className="text-center mt-16 scroll-reveal">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-foreground mb-4">Vamos Construir Algo Incrível Juntos!</h3>
            <p className="text-muted-foreground leading-relaxed">
              Seja para um projeto de dados complexo, uma solução de IA inovadora, ou apenas uma conversa 
              sobre as últimas tendências em tecnologia, estou sempre interessado em conectar com pessoas 
              que compartilham a paixão por transformar dados em valor.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;