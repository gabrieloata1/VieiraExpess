/*
 * DESIGN: Modernismo Corporativo Dinâmico - Vieira Express Landing Page
 * Cores: Ciano #00C8E0, Cinza Escuro #1A1A2E, Branco
 * Tipografia: Poppins (display), Inter (body)
 * Imagens: Banners reais do cliente + imagens geradas
 */
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServiceCard from '@/components/ServiceCard';
import TestimonialCard from '@/components/TestimonialCard';
import FAQSection from '@/components/FAQSection';
import WhatsAppButton from '@/components/WhatsAppButton';
import AnimatedCounter from '@/components/AnimatedCounter';
import {
  ArrowRight,
  CheckCircle2,
  Phone,
  Shield,
  Clock,
  Zap,
  TrendingUp,
  Users,
  Package,
  ChevronRight,
} from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

/* ── IMAGE URLS ── */
const IMAGES = {
  heroBg: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663605045527/bpsw3ZqLeramG3brkYb5Bc/hero-bg-JMAtt9Nd7vby4JKpwp8YT8.webp',
  aboutSection: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663605045527/bpsw3ZqLeramG3brkYb5Bc/about-section-F5jao2ABLVtn5swaLpdPVk.webp',
  ctaBg: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663605045527/bpsw3ZqLeramG3brkYb5Bc/cta-bg-cHnaAMzogBBumB3F72nKR6.webp',
  testimonialsBg: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663605045527/bpsw3ZqLeramG3brkYb5Bc/testimonials-bg-QwhnwnSDXpsSJyWi6AG6Cz.webp',
  postFleet: '/frota-completa.jpg',
  postUtilitarios: '/fiorino-entrega.jpg',
  postMoto: '/moto-entrega.jpg',
  postStats: '/van-entrega.jpg',
};

/* ── SERVICE DATA ── */
const services = [
  {
    id: 'motofretes',
    title: 'Motofretes',
    description: 'Ideal para documentos, pequenos pacotes e entregas com urgência máxima na cidade.',
    features: ['Entregas em até 2h', 'Agilidade no trânsito', 'Custo reduzido', 'Rastreio em tempo real'],
    icon: '🏍️',
    image: '/moto-entrega.jpg',
  },
  {
    id: 'carro',
    title: 'Carro de Passeio',
    description: 'Perfeito para mercadorias de médio porte, itens frágeis ou entregas discretas.',
    features: ['Capacidade intermediária', 'Maior proteção ao conteúdo', 'Flexibilidade urbana', 'Conforto no transporte'],
    icon: '🚗',
    image: '/carro-entrega.jpg',
  },
  {
    id: 'fiorino',
    title: 'Fiorino',
    description: 'Excelente para entregas comerciais, pequenas mudanças e volumes variados.',
    features: ['Até 600 kg de carga', 'Compartimento fechado', 'Segurança e economia', 'Acesso a ruas estreitas'],
    icon: '🚙',
    image: '/fiorino-entrega.jpg',
  },
  {
    id: 'van',
    title: 'Van / Sprinter',
    description: 'Para quem precisa transportar volumes maiores com rapidez e segurança.',
    features: ['Carga até 1.200 kg', 'Ampla capacidade interna', 'Ideal para e-commerce', 'Entregas em lote'],
    icon: '🚐',
    image: '/van-entrega.jpg',
  },
  {
    id: 'caminhao',
    title: 'Caminhão',
    description: 'Para demandas robustas com entregas regionais ou intermunicipais de grande porte.',
    features: ['Cargas maiores e pesadas', 'Reforço logístico', 'Baú fechado ou aberto', 'Cobertura regional'],
    icon: '🚚',
    image: '/caminhao-entrega.jpg',
  },
  {
    id: 'personalizadas',
    title: 'Soluções Personalizadas',
    description: 'Adaptamos nossos serviços às suas necessidades específicas de logística.',
    features: ['Tipo de veículo flexível', 'Rota personalizada', 'Urgência da entrega', 'Contrato sob medida'],
    icon: '⚙️',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop',
  },
];

/* ── TESTIMONIALS ── */
const testimonials = [
  {
    name: 'João Silva',
    company: 'E-commerce Fashion SP',
    text: 'Excelente serviço! Entregam sempre no prazo e com muito profissionalismo. A Vieira Express se tornou nossa parceira principal de logística.',
    rating: 5,
  },
  {
    name: 'Maria Santos',
    company: 'Loja de Roupas Online',
    text: 'Muito satisfeita com a rapidez e segurança das entregas. Nossos clientes elogiam o cuidado com os pacotes. Recomendo demais!',
    rating: 5,
  },
  {
    name: 'Carlos Oliveira',
    company: 'Distribuidora de Alimentos',
    text: 'Parceria de qualidade. Frota bem mantida, equipe responsável e preços justos. Já são mais de 2 anos trabalhando juntos.',
    rating: 5,
  },
  {
    name: 'Ana Rodrigues',
    company: 'Farmácia Popular',
    text: 'Precisávamos de entregas urgentes e a Vieira Express sempre atende com excelência. O motofrete deles é imbatível!',
    rating: 5,
  },
];

/* ── FAQ ── */
const faqItems = [
  {
    id: 'faq-1',
    question: 'Vocês atendem pessoa física e jurídica?',
    answer: 'Sim! Atendemos tanto pessoas físicas quanto jurídicas. Oferecemos soluções personalizadas para ambas as categorias, com preços competitivos e flexibilidade nos serviços.',
  },
  {
    id: 'faq-2',
    question: 'Posso agendar uma entrega para o mesmo dia?',
    answer: 'Sim, oferecemos serviços de entrega no mesmo dia. Dependendo da região e da urgência, conseguimos atender com rapidez. Entre em contato para confirmar disponibilidade.',
  },
  {
    id: 'faq-3',
    question: 'Qual o tempo médio de entrega?',
    answer: 'O tempo varia conforme a localização e o tipo de serviço. Para motofretes, entregamos em até 2 horas. Para outros veículos, fazemos orçamento conforme a necessidade.',
  },
  {
    id: 'faq-4',
    question: 'Vocês fazem contrato mensal para empresas?',
    answer: 'Sim! Oferecemos contratos mensais com preços especiais para empresas. Podemos customizar pacotes de acordo com o volume e frequência de entregas.',
  },
  {
    id: 'faq-5',
    question: 'Como faço para solicitar um orçamento?',
    answer: 'Você pode solicitar um orçamento através do formulário no site, ligando para (11) 9 4864-7590 ou enviando mensagem no WhatsApp (11) 9 8789-3161. Nossa equipe responderá rapidamente!',
  },
];

/* ── SCROLL ANIMATION HOOK ── */
function useScrollAnimation() {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return { ref, isVisible };
}

/* ── ANIMATED SECTION WRAPPER ── */
function AnimatedSection({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════════
   MAIN PAGE COMPONENT
   ══════════════════════════════════════════════════════════════════ */
export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMsg = `Olá! Gostaria de solicitar um orçamento.\n\nNome: ${formData.name}\nEmail: ${formData.email}\nTelefone: ${formData.phone}\nServiço: ${formData.service}\nMensagem: ${formData.message}`;
    window.open(`https://wa.me/5511948647590?text=${encodeURIComponent(whatsappMsg)}`, '_blank');
  };

  const handleQuoteClick = (serviceId: string) => {
    setFormData((prev) => ({ ...prev, service: serviceId }));
    document.getElementById('orcamento')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Header />
      <WhatsAppButton />

      {/* ═══════════════════════════════════════════════════════════
          HERO SECTION
         ═══════════════════════════════════════════════════════════ */}
      <section
        id="hero"
        className="relative min-h-[90vh] flex items-center pt-20"
      >
        <div className="absolute inset-0">
          <img
            src={IMAGES.heroBg}
            alt="Logística urbana"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0D0D1A]/95 via-[#0D0D1A]/80 to-[#0D0D1A]/40" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 bg-[#00C8E0]/15 border border-[#00C8E0]/30 rounded-full px-4 py-1.5 mb-6">
                <span className="w-2 h-2 rounded-full bg-[#00C8E0] animate-pulse" />
                <span className="text-[#00C8E0] text-sm font-semibold" style={{ fontFamily: 'var(--font-display)' }}>
                  Soluções em Logísticas
                </span>
              </div>

              <h1
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] mb-6"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Entregas com{' '}
                <span className="text-[#00C8E0]">rapidez</span> e{' '}
                <span className="text-[#00C8E0]">segurança</span>
              </h1>

            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed max-w-lg">
              Conte com a <strong className="text-white">Vieira Express</strong> para suas coletas e entregas.
              Frota completa, pontualidade garantida e o melhor custo-benefício.
            </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button
                className="bg-[#00C8E0] hover:bg-[#00B0C8] text-white font-bold text-base px-8 py-6 rounded-lg shadow-xl shadow-[#00C8E0]/25 transition-all duration-300 hover:shadow-2xl hover:shadow-[#00C8E0]/35 hover:-translate-y-1"
                onClick={() => document.getElementById('orcamento')?.scrollIntoView({ behavior: 'smooth' })}
                style={{ fontFamily: 'var(--font-display)' }}
              >
                SOLICITAR ORÇAMENTO
                <ArrowRight className="ml-2" size={20} />
              </Button>
              <Button
                variant="outline"
                className="border-2 border-white/30 text-white hover:bg-white/10 font-bold text-base px-8 py-6 rounded-lg transition-all duration-300"
                onClick={() => document.getElementById('servicos')?.scrollIntoView({ behavior: 'smooth' })}
                style={{ fontFamily: 'var(--font-display)' }}
              >
                NOSSOS SERVIÇOS
              </Button>
              </div>
            </div>

          <div className="flex gap-8 flex-wrap mt-12">
            <div>
              <div className="text-3xl font-extrabold text-[#00C8E0]" style={{ fontFamily: 'var(--font-display)' }}>
                <AnimatedCounter end={98} suffix="%" />
              </div>
              <p className="text-gray-400 text-sm mt-1">Entregas no prazo</p>
            </div>
            <div className="w-px bg-white/20" />
            <div>
              <div className="text-3xl font-extrabold text-[#00C8E0]" style={{ fontFamily: 'var(--font-display)' }}>
                <AnimatedCounter end={45} suffix="%" />
              </div>
              <p className="text-gray-400 text-sm mt-1">Com +48h antecedência</p>
            </div>
            <div className="w-px bg-white/20" />
            <div>
              <div className="text-3xl font-extrabold text-[#00C8E0]" style={{ fontFamily: 'var(--font-display)' }}>
                <AnimatedCounter end={5000} suffix="+" />
              </div>
              <p className="text-gray-400 text-sm mt-1">Entregas realizadas</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          TRUST BAR (CORRIGIDO PARA 2 COLUNAS RESPONSIVAS)
         ═══════════════════════════════════════════════════════════ */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
              {[
                { icon: <Clock size={22} />, title: 'Pontualidade', desc: 'Sempre no prazo' },
                { icon: <Shield size={22} />, title: 'Segurança', desc: 'Carga protegida' },
                { icon: <Zap size={22} />, title: 'Agilidade', desc: 'Rapidez total' },
                { icon: <TrendingUp size={22} />, title: 'Confiança', desc: 'Longo prazo' },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center text-center sm:flex-row sm:items-start sm:text-left gap-2 sm:gap-4 p-3 sm:p-5 rounded-xl bg-gray-50 border border-gray-100 hover:border-[#00C8E0]/30 hover:bg-[#00C8E0]/5 transition-all duration-300"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-[#00C8E0]/10 flex items-center justify-center flex-shrink-0 text-[#00C8E0]">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1A1A2E] text-xs sm:text-sm" style={{ fontFamily: 'var(--font-display)' }}>
                      {item.title}
                    </h4>
                    <p className="text-[#6B6B7B] text-[10px] sm:text-xs mt-0.5 leading-tight">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          LOGO SHOWCASE SECTION
         ═══════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-gradient-to-b from-white to-[#F8F9FA] flex items-center justify-center">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="flex flex-col items-center justify-center">
              <img
                src="/logo-vieira.png"
                alt="Vieira Express Logo"
                className="h-48 w-48 sm:h-64 sm:w-64 md:h-80 md:w-80 object-cover rounded-full shadow-2xl shadow-[#00C8E0]/40 mb-8 hover:shadow-[#00C8E0]/60 transition-all duration-500 hover:scale-105"
                />
              <h2
                className="text-4xl md:text-5xl font-extrabold text-[#1A1A2E] text-center mb-4"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Vieira Express
              </h2>
              <p className="text-[#6B6B7B] text-center max-w-xl text-lg">
                Soluções em Logística com profissionalismo, rapidez e segurança. Sua carga em boas mãos.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SERVICES SECTION
         ═══════════════════════════════════════════════════════════ */}
      <section id="servicos" className="py-20 bg-[#F8F9FA]">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-14">
              <span
                className="inline-block text-[#00C8E0] text-sm font-bold uppercase tracking-widest mb-3"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Nossos Serviços
              </span>
              <h2
                className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#1A1A2E] mb-4"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Frota completa para{' '}
                <span className="text-[#00C8E0]">melhor te atender</span>
              </h2>
              <p className="text-[#6B6B7B] max-w-2xl mx-auto text-lg">
                Conheça nossos serviços de coletas e entregas e escolha a melhor opção para sua necessidade
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {services.map((service, i) => (
              <AnimatedSection key={service.id} delay={i * 100}>
                <ServiceCard
                  title={service.title}
                  description={service.description}
                  features={service.features}
                  icon={service.icon}
                  image={service.image}
                  onQuote={() => handleQuoteClick(service.id)}
                />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          FLEET SHOWCASE
         ═══════════════════════════════════════════════════════════ */}
      <section className="py-20 bg-[#1A1A2E] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#00C8E0]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#00C8E0]/5 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span
                  className="inline-block text-[#00C8E0] text-sm font-bold uppercase tracking-widest mb-3"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  Nossa Frota
                </span>
                <h2
                  className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  Veículos <span className="text-[#00C8E0]">preparados</span> para cada tipo de entrega
                </h2>
                <p className="text-gray-400 text-lg leading-relaxed mb-8">
                  Temos uma frota diversificada e bem mantida, desde motos ágeis até caminhões robustos.
                  Cada veículo é equipado para garantir a segurança da sua carga.
                </p>

                <div className="space-y-4">
                  {[
                    'Motos para entregas rápidas',
                    'Carros e Fiorinos para volumes médios',
                    'Vans e Sprinters para grandes volumes',
                    'Caminhões para cargas pesadas',
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-[#00C8E0]/20 flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 size={14} className="text-[#00C8E0]" />
                      </div>
                      <span className="text-gray-300 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <img
                    src={IMAGES.postFleet}
                    alt="Frota Vieira Express"
                    className="rounded-xl shadow-2xl w-full object-cover h-64 hover:scale-[1.02] transition-transform duration-500"
                  />
                  <img
                    src={IMAGES.postMoto}
                    alt="Motofrete Vieira Express"
                    className="rounded-xl shadow-2xl w-full object-cover h-48 hover:scale-[1.02] transition-transform duration-500"
                  />
                </div>
                <div className="space-y-4 pt-8">
                  <img
                    src={IMAGES.postUtilitarios}
                    alt="Utilitários Vieira Express"
                    className="rounded-xl shadow-2xl w-full object-cover h-48 hover:scale-[1.02] transition-transform duration-500"
                  />
                  <img
                    src={IMAGES.postStats}
                    alt="Estatísticas Vieira Express"
                    className="rounded-xl shadow-2xl w-full object-cover h-64 hover:scale-[1.02] transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          ABOUT / HIGHLIGHTS SECTION
         ═══════════════════════════════════════════════════════════ */}
      <section id="sobre" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <img
                  src={IMAGES.aboutSection}
                  alt="Operação logística"
                  className="rounded-2xl shadow-2xl w-full object-cover h-[500px]"
                />
                <div className="absolute -bottom-6 -right-4 md:right-6 bg-white rounded-xl shadow-xl p-5 border border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-[#00C8E0] flex items-center justify-center">
                      <Users size={22} className="text-white" />
                    </div>
                    <div>
                      <p className="text-2xl font-extrabold text-[#1A1A2E]" style={{ fontFamily: 'var(--font-display)' }}>
                        +500
                      </p>
                      <p className="text-xs text-[#6B6B7B]">Clientes atendidos</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <span
                  className="inline-block text-[#00C8E0] text-sm font-bold uppercase tracking-widest mb-3"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  Sobre Nós
                </span>
                <h2
                  className="text-3xl md:text-4xl font-extrabold text-[#1A1A2E] mb-6 leading-tight"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  Logística <span className="text-[#00C8E0]">confiável</span> para o seu negócio
                </h2>
                <p className="text-[#4A4A5A] text-lg leading-relaxed mb-8">
                  Na <strong className="text-[#1A1A2E]">Vieira Express</strong>, conectamos empresas e pessoas com
                  soluções ágeis e eficientes em entregas expressas. Com uma frota diversificada e uma operação
                  altamente estratégica, atendemos desde pequenos pacotes até cargas de grande volume.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {[
                    { icon: <Clock size={20} />, title: 'Pontualidade', desc: '98% das entregas no prazo' },
                    { icon: <Shield size={20} />, title: 'Segurança', desc: 'Carga protegida e rastreada' },
                    { icon: <Package size={20} />, title: 'Versatilidade', desc: 'Frota para toda necessidade' },
                    { icon: <Zap size={20} />, title: 'Rapidez', desc: '45% com +48h de antecedência' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-100">
                      <div className="w-10 h-10 rounded-lg bg-[#00C8E0]/10 flex items-center justify-center flex-shrink-0 text-[#00C8E0]">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="font-bold text-[#1A1A2E] text-sm" style={{ fontFamily: 'var(--font-display)' }}>
                          {item.title}
                        </h4>
                        <p className="text-[#6B6B7B] text-xs mt-0.5">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          TESTIMONIALS SECTION
         ═══════════════════════════════════════════════════════════ */}
      <section id="depoimentos" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={IMAGES.testimonialsBg}
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#0D0D1A]/85" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection>
            <div className="text-center mb-14">
              <span
                className="inline-block text-[#00C8E0] text-sm font-bold uppercase tracking-widest mb-3"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Depoimentos
              </span>
              <h2
                className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                O que nossos <span className="text-[#00C8E0]">clientes</span> dizem
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                Confira os depoimentos de quem já confia na Vieira Express
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((testimonial, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <TestimonialCard
                  name={testimonial.name}
                  company={testimonial.company}
                  text={testimonial.text}
                  rating={testimonial.rating}
                />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          FAQ SECTION
         ═══════════════════════════════════════════════════════════ */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div className="lg:sticky lg:top-28">
                <span
                  className="inline-block text-[#00C8E0] text-sm font-bold uppercase tracking-widest mb-3"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  Dúvidas Frequentes
                </span>
                <h2
                  className="text-3xl md:text-4xl font-extrabold text-[#1A1A2E] mb-6 leading-tight"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  Perguntas <span className="text-[#00C8E0]">frequentes</span>
                </h2>
                <p className="text-[#6B6B7B] text-lg leading-relaxed mb-8">
                  Tire suas dúvidas sobre nossos serviços de logística e entregas.
                  Caso não encontre o que procura, entre em contato conosco.
                </p>
                <a
                  href="https://wa.me/5511948647590"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#00C8E0] font-bold hover:underline"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  Fale conosco pelo WhatsApp
                  <ChevronRight size={18} />
                </a>
              </div>

              <div>
                <FAQSection items={faqItems} />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          QUOTE FORM SECTION (CORRIGIDO BOTÃO)
         ═══════════════════════════════════════════════════════════ */}
      <section id="orcamento" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={IMAGES.ctaBg}
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#0D0D1A]/90" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto">
            <AnimatedSection>
              <div className="text-center mb-10">
                <span
                  className="inline-block text-[#00C8E0] text-sm font-bold uppercase tracking-widest mb-3"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  Orçamento
                </span>
                <h2
                  className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  Solicite seu <span className="text-[#00C8E0]">orçamento</span>
                </h2>
                <p className="text-gray-400 text-lg">
                  Preencha o formulário e nossa equipe entrará em contato rapidamente
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <form
                onSubmit={handleFormSubmit}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-8 md:p-10 border border-white/10"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                  <div>
                    <label className="block text-white text-sm font-semibold mb-2" style={{ fontFamily: 'var(--font-display)' }}>
                      Nome Completo
                    </label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleFormChange}
                      placeholder="Seu nome"
                      required
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-500 focus:border-[#00C8E0] focus:ring-[#00C8E0]/30 h-12"
                    />
                  </div>
                  <div>
                    <label className="block text-white text-sm font-semibold mb-2" style={{ fontFamily: 'var(--font-display)' }}>
                      Email
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleFormChange}
                      placeholder="seu@email.com"
                      required
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-500 focus:border-[#00C8E0] focus:ring-[#00C8E0]/30 h-12"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                  <div>
                    <label className="block text-white text-sm font-semibold mb-2" style={{ fontFamily: 'var(--font-display)' }}>
                      Telefone / WhatsApp
                    </label>
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleFormChange}
                      placeholder="(11) 99999-9999"
                      required
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-500 focus:border-[#00C8E0] focus:ring-[#00C8E0]/30 h-12"
                    />
                  </div>
                  <div>
                    <label className="block text-white text-sm font-semibold mb-2" style={{ fontFamily: 'var(--font-display)' }}>
                      Tipo de Serviço
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleFormChange}
                      required
                      className="w-full bg-white/10 border border-white/20 text-white rounded-md px-4 h-12 focus:border-[#00C8E0] focus:ring-[#00C8E0]/30 focus:outline-none"
                    >
                      <option value="" className="bg-[#1A1A2E]">Selecione um serviço</option>
                      {services.map((service) => (
                        <option key={service.id} value={service.id} className="bg-[#1A1A2E]">
                          {service.title}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-white text-sm font-semibold mb-2" style={{ fontFamily: 'var(--font-display)' }}>
                    Mensagem (opcional)
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleFormChange}
                    placeholder="Descreva sua necessidade..."
                    rows={4}
                    className="w-full bg-white/10 border border-white/20 text-white rounded-md px-4 py-3 placeholder:text-gray-500 focus:border-[#00C8E0] focus:ring-[#00C8E0]/30 focus:outline-none resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-[#00C8E0] hover:bg-[#00B0C8] text-white font-bold py-4 text-sm md:text-lg rounded-lg shadow-xl shadow-[#00C8E0]/25 transition-all duration-300 hover:shadow-2xl hover:shadow-[#00C8E0]/35 px-4 min-h-[56px]"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  <span className="flex items-center justify-center gap-2 flex-nowrap text-xs sm:text-base md:text-lg w-full">
                    ENVIAR ORÇAMENTO VIA WHATSAPP
                    <ArrowRight size={18} className="flex-shrink-0" />
                  </span>
                </Button>
              </form>
            </AnimatedSection>

            {/* Direct contact */}
            <AnimatedSection delay={400}>
              <div id="contato" className="mt-10 text-center">
                <p className="text-gray-400 mb-5">Ou entre em contato direto:</p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <a
                    href="tel:+5511948647590"
                    className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/20 text-white font-bold py-3.5 px-7 rounded-lg hover:bg-white/20 transition-all duration-300"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    <Phone size={18} className="text-[#00C8E0]" />
                    (11) 9 4864-7590
                  </a>
                  <a
                    href="https://wa.me/5511948647590"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white font-bold py-3.5 px-7 rounded-lg hover:bg-[#20BD5A] transition-all duration-300 shadow-lg shadow-[#25D366]/25"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="white">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    WhatsApp
                  </a>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
