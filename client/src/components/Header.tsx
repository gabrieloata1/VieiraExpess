/*
 * DESIGN: Modernismo Corporativo Dinâmico
 * Header fixo com logo real da Vieira Express, navegação suave, CTA ciano.
 * Cores: Ciano #00C8E0, Cinza Escuro #1A1A2E, Branco
 * Tipografia: Poppins (display), Inter (body)
 */
import { Menu, X, Phone } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100'
          : 'bg-white shadow-sm'
      }`}
    >
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <img
            src="/logo-vieira.png"
            alt="Vieira Express Logo"
            className="h-14 w-14 object-cover rounded-full shadow-md"
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {[
            { label: 'Início', id: 'hero' },
            { label: 'Serviços', id: 'servicos' },
            { label: 'Sobre', id: 'sobre' },
            { label: 'Depoimentos', id: 'depoimentos' },
            { label: 'Contato', id: 'contato' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="relative text-[#1A1A2E] font-semibold text-sm uppercase tracking-wide hover:text-[#00C8E0] transition-colors duration-300 after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-[#00C8E0] after:transition-all after:duration-300 hover:after:w-full"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* CTA + Phone */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="tel:+551148647590"
            className="flex items-center gap-2 text-[#1A1A2E] font-semibold text-sm hover:text-[#00C8E0] transition-colors"
          >
            <Phone size={16} className="text-[#00C8E0]" />
            (11) 9 4864-7590
          </a>
          <Button
            className="bg-[#00C8E0] hover:bg-[#00B0C8] text-white font-bold text-sm px-6 py-2.5 rounded-md shadow-lg shadow-[#00C8E0]/25 transition-all duration-300 hover:shadow-xl hover:shadow-[#00C8E0]/30 hover:-translate-y-0.5"
            onClick={() => scrollToSection('orcamento')}
            style={{ fontFamily: 'var(--font-display)' }}
          >
            SOLICITAR ORÇAMENTO
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 rounded-md hover:bg-gray-100 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} className="text-[#1A1A2E]" /> : <Menu size={24} className="text-[#1A1A2E]" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="bg-white border-t border-gray-100 px-4 py-4 space-y-1">
          {[
            { label: 'Início', id: 'hero' },
            { label: 'Serviços', id: 'servicos' },
            { label: 'Sobre', id: 'sobre' },
            { label: 'Depoimentos', id: 'depoimentos' },
            { label: 'Contato', id: 'contato' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="block w-full text-left text-[#1A1A2E] font-semibold text-base py-3 px-4 rounded-md hover:bg-[#00C8E0]/10 hover:text-[#00C8E0] transition-all"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-3 border-t border-gray-100">
            <a
              href="tel:+551148647590"
              className="flex items-center gap-2 text-[#1A1A2E] font-semibold py-3 px-4"
            >
              <Phone size={16} className="text-[#00C8E0]" />
              (11) 9 4864-7590
            </a>
            <Button
              className="w-full bg-[#00C8E0] hover:bg-[#00B0C8] text-white font-bold py-3 mt-2 rounded-md"
              onClick={() => scrollToSection('orcamento')}
            >
              SOLICITAR ORÇAMENTO
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
