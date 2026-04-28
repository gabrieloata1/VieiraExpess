/*
 * DESIGN: FAQ com accordion estilizado
 */
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

interface FAQSectionProps {
  items: FAQItem[];
}

export default function FAQSection({ items }: FAQSectionProps) {
  return (
    <Accordion type="single" collapsible className="w-full space-y-3">
      {items.map((item) => (
        <AccordionItem
          key={item.id}
          value={item.id}
          className="border border-gray-200 rounded-xl px-6 data-[state=open]:border-[#00C8E0]/30 data-[state=open]:bg-[#00C8E0]/5 transition-all duration-300"
        >
          <AccordionTrigger className="hover:text-[#00C8E0] transition-colors py-5 hover:no-underline">
            <span
              className="text-left font-bold text-[#1A1A2E] text-[15px]"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              {item.question}
            </span>
          </AccordionTrigger>
          <AccordionContent className="text-[#4A4A5A] pb-5 leading-relaxed">
            {item.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
