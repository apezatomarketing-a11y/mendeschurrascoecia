import { motion } from 'framer-motion';
import { Phone, Instagram, MapPin, Clock } from 'lucide-react';
import { Link } from 'wouter';
import React from 'react';

const WHATSAPP_NUMBER = '5512981728313';
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=Olá! Gostaria de solicitar um orçamento para um evento.`;
const INSTAGRAM_URL = 'https://instagram.com/mendes_churrascoecia_oficial';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border/50">
        <div className="container max-w-7xl">
          <div className="flex items-center justify-between h-20 px-4 sm:px-6 lg:px-8">
            {/* Logo */}
            <button onClick={scrollToTop} className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <img 
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663520254285/aVZm6JdTQvcxzemDz8Yg75/favicon-mendes-5YnD2HjzGMJhNCnTwNK6Gs.webp"
                alt="Mendes Churrascaria"
                className="w-10 h-10"
              />
              <div className="hidden sm:block">
                <p className="text-sm font-black text-primary">MENDES</p>
                <p className="text-xs font-bold text-muted-foreground">Churrascaria</p>
              </div>
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <a href="#servicos" className="text-sm font-bold hover:text-primary transition-colors">Serviços</a>
              <a href="#como-funciona" className="text-sm font-bold hover:text-primary transition-colors">Como Funciona</a>
              <a href="#diferenciais" className="text-sm font-bold hover:text-primary transition-colors">Diferenciais</a>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-primary-foreground font-bold hover:bg-red-800 transition-all">
                <Phone className="w-4 h-4" />
                Orçamento
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden flex flex-col gap-1.5 p-2"
            >
              <div className={`w-6 h-0.5 bg-foreground transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <div className={`w-6 h-0.5 bg-foreground transition-all ${isMenuOpen ? 'opacity-0' : ''}`} />
              <div className={`w-6 h-0.5 bg-foreground transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="md:hidden border-t border-border/50 bg-card/50 backdrop-blur-sm"
            >
              <div className="flex flex-col gap-4 p-4">
                <a href="#servicos" className="text-sm font-bold hover:text-primary transition-colors">Serviços</a>
                <a href="#como-funciona" className="text-sm font-bold hover:text-primary transition-colors">Como Funciona</a>
                <a href="#diferenciais" className="text-sm font-bold hover:text-primary transition-colors">Diferenciais</a>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-primary-foreground font-bold hover:bg-red-800 transition-all w-full justify-center">
                  <Phone className="w-4 h-4" />
                  Solicitar Orçamento
                </a>
              </div>
            </motion.div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-card/50 border-t border-border/50 mt-20">
        <div className="container max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div>
              <button onClick={scrollToTop} className="flex items-center gap-3 mb-6 hover:opacity-80 transition-opacity">
                <img 
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663520254285/aVZm6JdTQvcxzemDz8Yg75/favicon-mendes-5YnD2HjzGMJhNCnTwNK6Gs.webp"
                  alt="Mendes Churrascaria"
                  className="w-12 h-12"
                />
                <div>
                  <p className="text-sm font-black text-primary">MENDES</p>
                  <p className="text-xs font-bold text-muted-foreground">Churrascaria e Cia</p>
                </div>
              </button>
              <p className="text-sm text-muted-foreground">Experiências inesquecíveis em cada evento. Premium BBQ desde 1995.</p>
            </div>

            {/* Links */}
            <div>
              <h4 className="font-black mb-4">Navegação</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#servicos" className="text-muted-foreground hover:text-primary transition-colors">Serviços</a></li>
                <li><a href="#como-funciona" className="text-muted-foreground hover:text-primary transition-colors">Como Funciona</a></li>
                <li><a href="#diferenciais" className="text-muted-foreground hover:text-primary transition-colors">Diferenciais</a></li>
                <li><a href="#regioes" className="text-muted-foreground hover:text-primary transition-colors">Regiões</a></li>
              </ul>
            </div>

            {/* Contato */}
            <div>
              <h4 className="font-black mb-4">Contato</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-primary" />
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                    (12) 98172-8313
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Instagram className="w-4 h-4 text-primary" />
                  <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                    @mendes_churrascoecia_oficial
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                  <span className="text-muted-foreground">Vale do Paraíba e Litoral Norte</span>
                </li>
              </ul>
            </div>

            {/* Horário */}
            <div>
              <h4 className="font-black mb-4">Atendimento</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-primary" />
                  <span className="text-muted-foreground">Segunda a Domingo</span>
                </li>
                <li className="text-muted-foreground">Consulte disponibilidade para seu evento</li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-border/50 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-sm text-muted-foreground text-center md:text-left">
                © 2026 Mendes Churrascaria e Cia. Todos os direitos reservados.
              </p>
              <div className="flex items-center gap-6">
                <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  <Phone className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a 
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-all hover:scale-110"
        title="Fale conosco no WhatsApp"
      >
        <Phone className="w-6 h-6" />
      </a>
    </div>
  );
}
