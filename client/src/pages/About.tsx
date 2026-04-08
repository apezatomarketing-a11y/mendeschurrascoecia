import { motion } from 'framer-motion';
import { ArrowRight, Phone, Star, Instagram, ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Layout from '@/components/Layout';
import React, { useState, useEffect, useCallback } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

const WHATSAPP_NUMBER = '5512981728313';
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=Olá! Gostaria de saber mais sobre a Mendes Churrasco.`;
const INSTAGRAM_URL = 'https://instagram.com/mendes_churrascoecia_oficial';

const galleryImages = [
  { src: '/assets/about/about_main.jpg', alt: 'Mendes Churrasco - Sobre' },
  { src: '/assets/about/differentials.jpg', alt: 'Nossos Diferenciais' },
  { src: '/assets/about/service1.jpg', alt: 'Serviço de Churrasco 1' },
  { src: '/assets/about/service2.jpg', alt: 'Serviço de Churrasco 2' },
  { src: '/assets/about/service3.jpg', alt: 'Serviço de Churrasco 3' },
  { src: '/assets/about/food1.jpg', alt: 'Nossas Comidas 1' },
  { src: '/assets/about/food2.jpg', alt: 'Nossas Comidas 2' },
  { src: '/assets/about/food3.jpg', alt: 'Nossas Comidas 3' },
  { src: '/assets/about/food4.jpg', alt: 'Nossas Comidas 4' },
  { src: '/assets/about/food5.jpg', alt: 'Nossas Comidas 5' },
  { src: '/assets/about/food6.jpg', alt: 'Nossas Comidas 6' },
  { src: '/assets/about/food7.jpg', alt: 'Nossas Comidas 7' },
  { src: '/assets/about/food8.jpg', alt: 'Nossas Comidas 8' },
  { src: '/assets/about/food9.jpg', alt: 'Nossas Comidas 9' },
];

export default function About() {
  const [api, setApi] = useState<CarouselApi>();
  const [isPaused, setIsPaused] = useState(false);
  const [videoPlaying, setVideoPlaying] = useState(false);
  const videoRef = React.useRef<HTMLVideoElement>(null);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const toggleVideo = () => {
    if (videoRef.current) {
      if (videoPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setVideoPlaying(!videoPlaying);
    }
  };

  // Autoplay logic
  useEffect(() => {
    if (!api || isPaused) return;

    const intervalId = setInterval(() => {
      api.scrollNext();
    }, 3000);

    return () => clearInterval(intervalId);
  }, [api, isPaused]);

  return (
    <Layout>
      <div className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-card/30 overflow-hidden">
          <div className="container max-w-7xl relative z-10">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 mb-6 px-5 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-bold uppercase tracking-widest">
                <Star className="w-4 h-4 fill-primary" />
                Nossa História
              </motion.div>
              <motion.h1 variants={fadeInUp} className="text-4xl sm:text-6xl font-black mb-8">
                Sobre a <span className="text-primary">Mendes Churrasco</span>
              </motion.h1>
              <motion.p variants={fadeInUp} className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Unindo disciplina militar, paixão pela gastronomia e o prazer de servir bem para criar momentos inesquecíveis.
              </motion.p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6 text-muted-foreground text-lg leading-relaxed"
              >
                <p>
                  A <strong className="text-foreground">Mendes Churrasco & Cia</strong> nasceu da paixão pela gastronomia e pelo prazer de servir bem. Fundada por um militar aposentado com anos de experiência no ramo alimentício, a empresa une disciplina, organização e amor pela cozinha para entregar experiências únicas em cada evento.
                </p>
                <p>
                  Especializada em buffet de churrasco completo, atendemos clientes que buscam praticidade, qualidade e um atendimento próximo e dedicado. Cada evento é tratado de forma personalizada, garantindo que tudo saia conforme o planejado — desde pequenos encontros até grandes celebrações de até 300 pessoas.
                </p>
                <p>
                  Atendendo toda a região do <strong className="text-foreground">Vale do Paraíba e Litoral Norte</strong>, nos destacamos pelo compromisso com a satisfação dos nossos clientes, oferecendo não apenas comida de qualidade, mas uma experiência completa e memorável.
                </p>
                <div className="pt-4">
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                    <Button className="rounded-full h-14 px-8 font-bold text-lg group">
                      Fale Conosco
                      <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative aspect-video rounded-3xl overflow-hidden border border-border/50 shadow-2xl group"
              >
                <video
                  ref={videoRef}
                  src="/assets/about/main_video.mp4"
                  className="w-full h-full object-cover"
                  loop
                  muted
                  playsInline
                />
                <div 
                  className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                  onClick={toggleVideo}
                >
                  <div className="w-20 h-20 rounded-full bg-primary/90 flex items-center justify-center text-white shadow-xl">
                    {videoPlaying ? <Pause className="w-10 h-10 fill-current" /> : <Play className="w-10 h-10 fill-current ml-1" />}
                  </div>
                </div>
                {!videoPlaying && (
                  <div className="absolute bottom-6 left-6 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full text-white text-sm font-bold flex items-center gap-2">
                    <Play className="w-4 h-4 fill-current" />
                    Clique para assistir
                  </div>
                )}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-20 bg-card/20">
          <div className="container max-w-7xl px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-black mb-4">Galeria de Experiências</h2>
              <p className="text-muted-foreground">Confira alguns registros dos nossos eventos e a qualidade dos nossos serviços.</p>
            </div>

            <div 
              className="relative"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <Carousel
                setApi={setApi}
                opts={{
                  align: "start",
                  loop: true,
                }}
                className="w-full"
              >
                <CarouselContent className="-ml-2 md:-ml-4">
                  {galleryImages.map((image, index) => (
                    <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                      <div className="p-1">
                        <Card className="overflow-hidden rounded-2xl border-none bg-transparent group relative aspect-[4/5]">
                          <img
                            src={image.src}
                            alt={image.alt}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                            <p className="text-white font-bold text-lg">{image.alt}</p>
                          </div>
                        </Card>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <div className="flex justify-center gap-4 mt-8">
                  <CarouselPrevious className="static translate-y-0 h-12 w-12 rounded-full border-primary/20 bg-background/50 hover:bg-primary hover:text-white transition-all" />
                  <CarouselNext className="static translate-y-0 h-12 w-12 rounded-full border-primary/20 bg-background/50 hover:bg-primary hover:text-white transition-all" />
                </div>
              </Carousel>
            </div>
          </div>
        </section>

        {/* Info Cards */}
        <section className="py-20 px-4">
          <div className="container max-w-7xl">
            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-8 rounded-3xl bg-card border border-border/50 hover:border-primary/30 transition-colors"
              >
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                  <Star className="w-6 h-6 text-primary fill-primary" />
                </div>
                <h3 className="text-xl font-black mb-4 text-foreground">Diferencial Especial</h3>
                <p className="text-muted-foreground">
                  Em festas de debutantes com mais de 150 convidados, oferecemos uma <strong className="text-primary">cascata de chocolate</strong> como cortesia para tornar o momento ainda mais doce.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="p-8 rounded-3xl bg-card border border-border/50 hover:border-primary/30 transition-colors"
              >
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                  <Star className="w-6 h-6 text-primary fill-primary" />
                </div>
                <h3 className="text-xl font-black mb-4 text-foreground">Capacidade</h3>
                <p className="text-muted-foreground">
                  Atendemos eventos de diversos portes, com capacidade mínima de <strong className="text-foreground">35 pessoas</strong> e máxima de <strong className="text-foreground">300 pessoas</strong>.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="p-8 rounded-3xl bg-card border border-border/50 hover:border-primary/30 transition-colors"
              >
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                  <Star className="w-6 h-6 text-primary fill-primary" />
                </div>
                <h3 className="text-xl font-black mb-4 text-foreground">Contratação</h3>
                <p className="text-muted-foreground">
                  Processo simples e transparente: sinal de <strong className="text-foreground">30%</strong> para reserva da data e orçamento personalizado conforme o número de convidados.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
