/*
 * DESIGN: Card de serviço com visual premium
 * Hover com elevação, borda ciano, ícone grande, botão CTA
 */
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { ReactNode } from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  features: string[];
  icon: ReactNode;
  image?: string;
  onQuote: () => void;
}

export default function ServiceCard({
  title,
  description,
  features,
  icon,
  image,
  onQuote,
}: ServiceCardProps) {
  return (
    <div className="group bg-white rounded-xl overflow-hidden border border-gray-200 hover:border-[#00C8E0] transition-all duration-500 hover:shadow-2xl hover:shadow-[#00C8E0]/10 hover:-translate-y-2">
      {/* Image / Icon Area */}
      <div className="relative h-52 overflow-hidden bg-gradient-to-br from-[#1A1A2E] to-[#2A2A3E]">
        {image ? (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
          />
        ) : (
          <div className="flex items-center justify-center h-full">
            <span className="text-6xl">{icon}</span>
          </div>
        )}
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A2E] via-transparent to-transparent opacity-60" />
        {/* Title overlay */}
        <div className="absolute bottom-4 left-5 right-5">
          <h3
            className="text-xl font-bold text-white drop-shadow-lg"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            {title}
          </h3>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <p className="text-[#4A4A5A] text-sm mb-5 leading-relaxed">{description}</p>

        {/* Features */}
        <ul className="space-y-2.5 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2.5 text-sm text-[#1A1A2E]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00C8E0] mt-1.5 flex-shrink-0" />
              <span className="font-medium">{feature}</span>
            </li>
          ))}
        </ul>

        {/* Button */}
        <Button
          onClick={onQuote}
          className="w-full bg-[#1A1A2E] hover:bg-[#00C8E0] text-white font-bold py-2.5 rounded-md transition-all duration-300 group-hover:bg-[#00C8E0] group-hover:shadow-lg group-hover:shadow-[#00C8E0]/25"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          <span className="flex items-center justify-center gap-2">
            Solicitar Orçamento
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </span>
        </Button>
      </div>
    </div>
  );
}
