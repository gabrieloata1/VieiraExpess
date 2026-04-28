/*
 * DESIGN: Card de depoimento premium com aspas decorativas
 */
import { Star, Quote } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  company: string;
  text: string;
  rating?: number;
  initials?: string;
}

export default function TestimonialCard({
  name,
  company,
  text,
  rating = 5,
  initials,
}: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-xl p-7 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 relative">
      {/* Quote decoration */}
      <div className="absolute top-5 right-5">
        <Quote size={32} className="text-[#00C8E0]/20" />
      </div>

      {/* Rating */}
      <div className="flex gap-1 mb-4">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} size={18} className="fill-amber-400 text-amber-400" />
        ))}
      </div>

      {/* Text */}
      <p className="text-[#1A1A2E] mb-6 leading-relaxed text-[15px]">
        "{text}"
      </p>

      {/* Author */}
      <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
        <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#00C8E0] to-[#0099B3] flex items-center justify-center text-white font-bold text-sm shadow-md"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          {initials || name.split(' ').map(n => n[0]).join('')}
        </div>
        <div>
          <p className="font-bold text-[#1A1A2E] text-sm" style={{ fontFamily: 'var(--font-display)' }}>
            {name}
          </p>
          <p className="text-xs text-[#6B6B7B]">{company}</p>
        </div>
      </div>
    </div>
  );
}
