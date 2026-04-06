import { motion } from 'framer-motion';
import { Phone, Instagram, MapPin, Clock } from 'lucide-react';
import { Link, useLocation } from 'wouter';
import React from 'react';

const WHATSAPP_NUMBER = '5512981728313';
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=Olá! Gostaria de solicitar um orçamento para um evento.`;
const INSTAGRAM_URL = 'https://instagram.com/mendes_churrascoecia_oficial';
const APEZATO_URL = 'https://www.apezatomarketing.com.br';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [location, setLocation] = useLocation();

  const handleHomeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (location === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setLocation('/');
      setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100);
    }
    setIsMenuOpen(false);
  };

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    if (location !== '/') {
      // If not on home, navigate home first then scroll
      e.preventDefault();
      setLocation('/');
      setTimeout(() => {
        const element = document.querySelector(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
    setIsMenuOpen(false);
  };

  const navLinks = [
    { name: 'Início', href: '/', isHome: true },
    { name: 'Sobre', href: '/sobre' },
    { name: 'Serviços', href: '/#servicos', id: '#servicos' },
    { name: 'Como Funciona', href: '/#como-funciona', id: '#como-funciona' },
    { name: 'Diferenciais', href: '/#diferenciais', id: '#diferenciais' },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border/50">
        <div className="container max-w-7xl">
          <div className="flex items-center justify-between h-20 px-4 sm:px-6 lg:px-8">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <img 
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663520254285/aVZm6JdTQvcxzemDz8Yg75/favicon-mendes-5YnD2HjzGMJhNCnTwNK6Gs.webp"
                alt="Mendes Churrascaria"
                className="w-10 h-10"
              />
              <div className="hidden sm:block text-left">
                <p className="text-sm font-black text-primary leading-none">MENDES</p>
                <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-tighter">Churrascaria e Cia</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                link.isHome ? (
                  <a 
                    key={link.name}
                    href={link.href}
                    onClick={handleHomeClick}
                    className="text-sm font-bold hover:text-primary transition-colors cursor-pointer"
                  >
                    {link.name}
                  </a>
                ) : link.href.startsWith('/#') ? (
                  <a 
                    key={link.name}
                    href={link.href} 
                    onClick={(e) => handleAnchorClick(e, link.id!)}
                    className="text-sm font-bold hover:text-primary transition-colors cursor-pointer"
                  >
                    {link.name}
                  </a>
                ) : (
                  <Link 
                    key={link.name}
                    href={link.href}
                    className={`text-sm font-bold hover:text-primary transition-colors ${location === link.href ? 'text-primary' : ''}`}
                  >
                    {link.name}
                  </Link>
                )
              ))}
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
                {navLinks.map((link) => (
                  link.isHome ? (
                    <a 
                      key={link.name}
                      href={link.href}
                      onClick={handleHomeClick}
                      className="text-sm font-bold hover:text-primary transition-colors cursor-pointer"
                    >
                      {link.name}
                    </a>
                  ) : link.href.startsWith('/#') ? (
                    <a 
                      key={link.name}
                      href={link.href} 
                      onClick={(e) => handleAnchorClick(e, link.id!)}
                      className="text-sm font-bold hover:text-primary transition-colors cursor-pointer"
                    >
                      {link.name}
                    </a>
                  ) : (
                    <Link 
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={`text-sm font-bold hover:text-primary transition-colors ${location === link.href ? 'text-primary' : ''}`}
                    >
                      {link.name}
                    </Link>
                  )
                ))}
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
            <div className="text-center md:text-left">
              <Link href="/" className="inline-flex items-center gap-3 mb-6 hover:opacity-80 transition-opacity">
                <img 
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663520254285/aVZm6JdTQvcxzemDz8Yg75/favicon-mendes-5YnD2HjzGMJhNCnTwNK6Gs.webp"
                  alt="Mendes Churrascaria"
                  className="w-12 h-12"
                />
                <div>
                  <p className="text-sm font-black text-primary">MENDES</p>
                  <p className="text-xs font-bold text-muted-foreground">Churrascaria e Cia</p>
                </div>
              </Link>
              <p className="text-sm text-muted-foreground">Experiências inesquecíveis em cada evento. Premium BBQ desde 1995.</p>
            </div>

            {/* Links */}
            <div className="text-center md:text-left">
              <h4 className="font-black mb-4">Navegação</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="/" onClick={handleHomeClick} className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">Início</a></li>
                <li><Link href="/sobre" className="text-muted-foreground hover:text-primary transition-colors">Sobre</Link></li>
                <li><a href="/#servicos" className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">Serviços</a></li>
                <li><a href="/#como-funciona" className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">Como Funciona</a></li>
                <li><a href="/#diferenciais" className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">Diferenciais</a></li>
              </ul>
            </div>

            {/* Contato */}
            <div className="text-center md:text-left">
              <h4 className="font-black mb-4">Contato</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center justify-center md:justify-start gap-2">
                  <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                    (12) 98172-8313
                  </a>
                </li>
                <li className="flex items-center justify-center md:justify-start gap-2">
                  <Instagram className="w-4 h-4 text-primary flex-shrink-0" />
                  <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                    @mendes_churrascoecia_oficial
                  </a>
                </li>
                <li className="flex items-center justify-center md:justify-start gap-2">
                  <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">Vale do Paraíba e Litoral Norte</span>
                </li>
              </ul>
            </div>

            {/* Horário */}
            <div className="text-center md:text-left">
              <h4 className="font-black mb-4">Atendimento</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center justify-center md:justify-start gap-2">
                  <Clock className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">Segunda a Domingo</span>
                </li>
                <li className="text-muted-foreground text-center md:text-left">Consulte disponibilidade para seu evento</li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-border/50 pt-8">
            <div className="flex flex-col items-center justify-center gap-4 text-center">
              <p className="text-sm text-muted-foreground">
                © 2026 Mendes Churrascaria e Cia. Todos os direitos reservados.
              </p>
              <div className="flex items-center gap-6 justify-center">
                <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  <Phone className="w-5 h-5" />
                </a>
              </div>
              <a 
                href={APEZATO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/10 border-2 border-primary text-primary font-bold hover:bg-primary/20 transition-all duration-300 animate-ripple-pulse"
              >
                Desenvolvido por Apezato Marketing
              </a>
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
