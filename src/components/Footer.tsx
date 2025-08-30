import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: 'https://github.com/viniciusmachado', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/viniciusmachado', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:vinicius.machado@email.com', label: 'Email' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-darker-surface border-t border-border/50">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="text-2xl font-bold text-gradient mb-4">VM</div>
            <p className="text-muted-foreground leading-relaxed">
              Engenheiro de Dados especializado em soluções de IA generativa e arquiteturas de dados modernas.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Navegação</h3>
            <div className="space-y-2">
              {[
                { label: 'Sobre', href: '#about' },
                { label: 'Experiência', href: '#experience' },
                { label: 'Skills', href: '#skills' },
                { label: 'Projetos', href: '#projects' },
                { label: 'Contato', href: '#contact' },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Conecte-se</h3>
            <div className="flex space-x-3 mb-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <Button
                    key={social.label}
                    variant="outline"
                    size="sm"
                    asChild
                    className="hover:bg-primary/10 hover:text-primary hover:border-primary/50"
                  >
                    <a href={social.href} target="_blank" rel="noopener noreferrer">
                      <Icon className="h-4 w-4" />
                    </a>
                  </Button>
                );
              })}
            </div>
            <p className="text-sm text-muted-foreground">
              São Paulo, SP - Brasil<br />
              vinicius.machado@email.com
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/50 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-muted-foreground mb-4 md:mb-0">
            <p className="flex items-center">
              © {currentYear} Vinícius Machado. Feito com
              <Heart className="h-4 w-4 mx-1 text-red-500" />
              usando React + TypeScript
            </p>
          </div>

          <Button
            variant="outline"
            size="sm"
            onClick={scrollToTop}
            className="hover:bg-primary/10 hover:text-primary hover:border-primary/50"
          >
            <ArrowUp className="h-4 w-4 mr-2" />
            Voltar ao Topo
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;