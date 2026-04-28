/*
 * DESIGN: Footer premium com logo, contatos e redes sociais
 */
import { Mail, MapPin, Phone, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0D0D1A] text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <img
              src="/logo-vieira.png"
              alt="Vieira Express Logo"
              className="h-14 w-14 object-cover rounded-full mb-5 shadow-md"
            />
            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              Entregamos com rapidez, segurança e profissionalismo. Sua carga em boas mãos.
            </p>

          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="font-bold text-white mb-5 text-sm uppercase tracking-wider"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Links Rápidos
            </h4>
            <ul className="space-y-3">
              {['Serviços', 'Sobre Nós', 'Depoimentos', 'Orçamento', 'Contato'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(/\s/g, '').replace('ó', 'o')}`}
                    className="text-gray-400 text-sm hover:text-[#00C8E0] transition-colors flex items-center gap-1 group"
                  >
                    <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4
              className="font-bold text-white mb-5 text-sm uppercase tracking-wider"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Serviços
            </h4>
            <ul className="space-y-3">
              {['Motofretes', 'Carro de Passeio', 'Fiorino', 'Van / Sprinter', 'Caminhão', 'Soluções Personalizadas'].map((item) => (
                <li key={item}>
                  <span className="text-gray-400 text-sm flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-[#00C8E0]" />
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4
              className="font-bold text-white mb-5 text-sm uppercase tracking-wider"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Contato
            </h4>
            <div className="space-y-4">
              <a href="tel:+551148647590" className="flex items-start gap-3 text-gray-400 text-sm hover:text-[#00C8E0] transition-colors group">
                <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0 group-hover:bg-[#00C8E0]/20 transition-colors">
                  <Phone size={16} className="text-[#00C8E0]" />
                </div>
                <div>
                  <p className="font-semibold text-white text-sm">(11) 9 4864-7590</p>
                  <p>(11) 9 8789-3161</p>
                </div>
              </a>
              <div className="flex items-start gap-3 text-gray-400 text-sm">
                <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0">
                  <MapPin size={16} className="text-[#00C8E0]" />
                </div>
                <p>Rua Jaraguá, 41<br />Bom Retiro, São Paulo - SP</p>
              </div>
              <div className="flex items-start gap-3 text-gray-400 text-sm">
                <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0">
                  <Mail size={16} className="text-[#00C8E0]" />
                </div>
                <p>vieira.express10@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-gray-500 text-xs">
            © 2026 Vieira Express - Soluções em Logísticas. Todos os direitos reservados.
          </p>
          <p className="text-gray-500 text-xs">
            CNPJ: 40.630.115/0001-84
          </p>
        </div>
      </div>
    </footer>
  );
}
