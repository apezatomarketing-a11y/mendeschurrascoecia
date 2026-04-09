import { motion } from 'framer-motion';
import { ArrowRight, Phone, MapPin, Flame, Users, Wine, UtensilsCrossed, Clock, Star, Instagram, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Layout from '@/components/Layout';

const WHATSAPP_NUMBER = '5512981728313';
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=Olá! Gostaria de solicitar um orçamento para um evento.`;
const INSTAGRAM_URL = 'https://instagram.com/mendes_churrascoecia_oficial';

export default function Home() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const stagger = {
    visible: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } }
  };

  const services = [
    {
      icon: Flame,
      title: 'Buffet de Churrasco Completo',
      description: 'Carnes na brasa selecionadas e acompanhamentos variados, preparados com excelência.',
      color: 'from-red-600 to-orange-500'
    },
    {
      icon: Wine,
      title: 'Bebidas Inclusas',
      description: 'Bebidas conforme o pacote escolhido para sua celebração.',
      color: 'from-yellow-600 to-orange-500'
    },
    {
      icon: UtensilsCrossed,
      title: 'Estrutura Completa',
      description: 'Pratos, copos, talheres e toda a estrutura necessária para seu evento.',
      color: 'from-gray-600 to-gray-500'
    },
    {
      icon: Users,
      title: 'Equipe Opcional',
      description: 'Garçons e copeiras para um atendimento impecável e profissional.',
      color: 'from-red-700 to-red-600'
    },
  ];

  const differentials = [
    {
      title: 'Atendimento Próximo e Humano',
      description: 'Tratamos cada cliente como parte da família, com dedicação total.',
    },
    {
      title: 'Experiência Real no Ramo',
      description: 'Fundada por militar aposentado com anos de experiência alimentícia.',
    },
    {
      title: 'Organização e Pontualidade',
      description: 'Disciplina militar aplicada à perfeição em cada detalhe.',
    },
    {
      title: 'Serviço Completo',
      description: 'Você não se preocupa com nada, cuidamos de tudo.',
    },
  ];

  const testimonials = [
    {
      name: 'Carlos Silva',
      event: 'Casamento - 150 convidados',
      text: 'Excelente atendimento! A comida estava impecável e a equipe muito profissional.',
      rating: 5,
    },
    {
      name: 'Fernanda Costa',
      event: 'Aniversário - 80 convidados',
      text: 'Cascata de chocolate foi o destaque! Todos os convidados amaram. Recomendo!',
      rating: 5,
    },
    {
      name: 'Roberto Mendes',
      event: 'Confraternização Empresarial - 200 convidados',
      text: 'Profissionalismo de ponta a ponta. Voltaremos a contratar com certeza.',
      rating: 5,
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background via-background to-red-950/10">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div 
            animate={{ 
              scale: [1, 1.15, 1],
              opacity: [0.08, 0.15, 0.08]
            }}
            transition={{ duration: 20, repeat: Infinity }}
            className="absolute -top-1/3 -right-1/4 w-[600px] h-[600px] bg-red-700/20 rounded-full blur-[120px]"
          />
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.08, 0.12, 0.08]
            }}
            transition={{ duration: 25, repeat: Infinity, delay: 2 }}
            className="absolute -bottom-1/3 -left-1/4 w-[500px] h-[500px] bg-yellow-600/20 rounded-full blur-[100px]"
          />
        </div>

        <div className="container relative z-10 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="text-center lg:text-left"
            >
              <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 mb-6 px-5 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs sm:text-sm font-bold uppercase tracking-widest">
                <Flame className="w-4 h-4 animate-pulse" />
                Premium BBQ Experience
              </motion.div>
              
              <motion.h1 variants={fadeInUp} className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[1.1] mb-6 sm:mb-8">
                Buffet de <span className="bg-gradient-to-r from-primary via-yellow-500 to-yellow-600 bg-clip-text text-transparent">Churrasco</span>
              </motion.h1>
              
              <motion.p variants={fadeInUp} className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Experiências inesquecíveis em cada evento. Buffet de churrasco premium para celebrações memoráveis no Vale do Paraíba e Litoral Norte.
              </motion.p>
              
              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-5 mb-12">
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="w-full sm:w-auto rounded-full h-14 sm:h-16 px-8 sm:px-10 text-lg sm:text-xl font-bold shadow-2xl shadow-primary/30 hover:shadow-primary/50 group transition-all duration-300 hover:scale-105 bg-primary hover:bg-red-800">
                    <Phone className="mr-2 w-5 sm:w-6 h-5 sm:h-6" />
                    Solicite Orçamento
                    <ArrowRight className="ml-2 w-5 sm:w-6 h-5 sm:h-6 group-hover:translate-x-2 transition-transform" />
                  </Button>
                </a>
                <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto rounded-full h-14 sm:h-16 px-8 sm:px-10 text-lg sm:text-xl font-bold border-2 hover:bg-primary/5 group transition-all duration-300 hover:scale-105">
                    <Instagram className="mr-2 w-5 sm:w-6 h-5 sm:h-6" />
                    Nos Acompanhe
                  </Button>
                </a>
              </motion.div>

              {/* Stats */}
              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 sm:gap-8 lg:gap-12 pt-8 border-t border-border/50">
                <div className="flex flex-col items-center sm:items-start">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl sm:text-5xl font-black text-foreground">35</span>
                    <span className="text-xl sm:text-2xl font-bold text-primary">+</span>
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-muted-foreground uppercase tracking-tighter mt-1">Pessoas Mínimo</span>
                </div>
                <div className="hidden sm:block w-px h-12 bg-border" />
                <div className="flex flex-col items-center sm:items-start">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl sm:text-5xl font-black text-foreground">300</span>
                    <span className="text-xl sm:text-2xl font-bold text-secondary">+</span>
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-muted-foreground uppercase tracking-tighter mt-1">Capacidade Máxima</span>
                </div>
                <div className="hidden sm:block w-px h-12 bg-border" />
                <div className="flex flex-col items-center sm:items-start">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl sm:text-5xl font-black text-foreground">100%</span>
                    <span className="text-xl sm:text-2xl font-bold text-primary">✓</span>
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-muted-foreground uppercase tracking-tighter mt-1">Satisfação</span>
                </div>
              </motion.div>
            </motion.div>
            
            {/* Right Image - Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative hidden lg:block"
            >
              <div className="relative z-10">
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-[100px] animate-pulse" />
                <img 
                  src="/assets/logo-hero.png" 
                  alt="Mendes Churrasco e Cia Logo" 
                  className="relative z-10 w-full max-w-lg mx-auto drop-shadow-[0_35px_35px_rgba(0,0,0,0.3)]"
                />
              </div>
              
              {/* Floating Badge */}
              <motion.div 
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-10 -right-5 z-20 bg-card/90 backdrop-blur-xl p-5 rounded-3xl border border-border shadow-2xl"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-primary/20 flex items-center justify-center">
                    <Star className="w-6 h-6 text-primary fill-primary" />
                  </div>
                  <div>
                    <p className="font-black text-foreground text-sm">Premium Quality</p>
                    <p className="text-xs font-bold text-muted-foreground uppercase">Desde 1995</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-20 sm:py-28 lg:py-32 bg-background relative">
        <div className="container max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl md:text-6xl font-black mb-6"
            >
              Nossos Serviços
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="text-lg sm:text-xl text-muted-foreground"
            >
              Pacotes completos e personalizados para tornar seu evento inesquecível.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="group relative bg-card/50 rounded-[20px] p-8 overflow-hidden hover:bg-card transition-all duration-500 border border-border/50 hover:border-primary/30"
                >
                  <div className="relative z-10 h-full flex flex-col">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-black mb-4 group-hover:text-primary transition-colors">{service.title}</h3>
                    <p className="text-muted-foreground text-base sm:text-lg">{service.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Como Funciona Section */}
      <section id="como-funciona" className="py-20 sm:py-28 lg:py-32 bg-card/30 relative">
        <div className="container max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl md:text-6xl font-black mb-6"
            >
              Como Funciona
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: '1',
                title: 'Atendimento Personalizado',
                description: 'Entramos em contato para entender suas necessidades e preferências específicas.',
                icon: Phone,
              },
              {
                step: '2',
                title: 'Sinal de 30%',
                description: 'Apenas 30% de sinal para garantir sua reserva. Flexibilidade e confiança.',
                icon: Clock,
              },
              {
                step: '3',
                title: 'Orçamento por Pessoa',
                description: 'Preço justo baseado no número de convidados e pacote escolhido.',
                icon: Users,
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="relative"
                >
                  <div className="bg-background rounded-2xl p-8 border border-border/50 h-full">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-red-800 flex items-center justify-center">
                        <span className="text-2xl font-black text-primary-foreground">{item.step}</span>
                      </div>
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-black mb-4">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Capacidade Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-16 bg-gradient-to-r from-primary/20 to-yellow-600/20 rounded-2xl p-8 border border-primary/30"
          >
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-2xl font-black text-primary mb-4">Capacidade Mínima</h4>
                <p className="text-3xl font-black text-foreground mb-2">35 Pessoas</p>
                <p className="text-muted-foreground">Perfeito para reuniões e confraternizações menores.</p>
              </div>
              <div>
                <h4 className="text-2xl font-black text-primary mb-4">Capacidade Máxima</h4>
                <p className="text-3xl font-black text-foreground mb-2">300 Pessoas</p>
                <p className="text-muted-foreground">Ideal para grandes celebrações e eventos corporativos.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Diferenciais Section */}
      <section id="diferenciais" className="py-20 sm:py-28 lg:py-32 bg-background relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <Flame className="absolute top-10 left-10 w-32 h-32 text-primary" />
          <Flame className="absolute bottom-20 right-10 w-40 h-40 text-primary" />
        </div>

        <div className="container relative z-10 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl md:text-6xl font-black mb-6"
            >
              Nossos Diferenciais
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="text-lg sm:text-xl text-muted-foreground"
            >
              O que nos torna especiais no Vale do Paraíba e Litoral Norte.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {differentials.map((diff, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-card/50 rounded-xl p-8 border border-border/50 hover:border-primary/30 transition-all"
              >
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Star className="w-6 h-6 text-primary fill-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-black mb-2">{diff.title}</h4>
                    <p className="text-muted-foreground">{diff.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Cascata de Chocolate Special */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="relative bg-gradient-to-r from-primary/30 to-yellow-600/30 rounded-2xl p-12 border-2 border-primary/50 overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 rounded-full -mr-20 -mt-20" />
            <div className="relative z-10">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center flex-shrink-0">
                  <Flame className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-3xl font-black mb-4">Cascata de Chocolate - Nosso Diferencial!</h3>
                  <p className="text-lg text-muted-foreground mb-4">
                    Em festas de debutantes com mais de 150 convidados, oferecemos <span className="font-black text-primary">cascata de chocolate como cortesia</span> especial. Um momento mágico que seus convidados nunca esquecerão.
                  </p>
                  <p className="text-muted-foreground">
                    Essa é a nossa forma de tornar sua celebração ainda mais memorável e sofisticada.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Regiões Atendidas */}
      <section id="regioes" className="py-20 sm:py-28 lg:py-32 bg-card/30 relative">
        <div className="container max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl md:text-6xl font-black mb-6"
            >
              Regiões Atendidas
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                region: 'Vale do Paraíba',
                cities: 'São José dos Campos, Jacareí, Caçapava, Pindamonhangaba e região',
                icon: MapPin,
              },
              {
                region: 'Litoral Norte',
                cities: 'Caraguatatuba, Ilhabela, São Sebastião, Ubatuba e arredores',
                icon: MapPin,
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-background rounded-2xl p-8 border border-border/50 hover:border-primary/30 transition-all"
                >
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-black mb-2">{item.region}</h3>
                      <p className="text-muted-foreground text-lg">{item.cities}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 sm:py-28 lg:py-32 bg-background relative">
        <div className="container max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl md:text-6xl font-black mb-6"
            >
              O Que Nossos Clientes Dizem
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-card/50 rounded-xl p-8 border border-border/50"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, j) => (
                    <Star key={j} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-black text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.event}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 sm:py-24 lg:py-32 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
        </div>
        <div className="container relative z-10 max-w-7xl text-center">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            className="max-w-4xl mx-auto px-4"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 sm:mb-8">
              Pronto para Seu Evento Perfeito?
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl mb-10 sm:mb-12 opacity-90 leading-relaxed">
              Entre em contato conosco agora e solicite seu orçamento personalizado. Estamos prontos para tornar seu evento inesquecível.
            </p>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="secondary" className="rounded-full h-16 sm:h-20 px-10 sm:px-12 text-xl sm:text-2xl font-black shadow-2xl hover:scale-105 transition-transform">
                <Phone className="mr-3 w-6 h-6" />
                Solicitar Orçamento Agora
              </Button>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Scroll Down Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 hidden lg:block"
      >
        <ChevronDown className="w-8 h-8 text-primary/50" />
      </motion.div>
    </Layout>
  );
}
