import React from 'react';
import { MessageSquareMore, BrainCircuit, CheckCircle, ArrowRight } from 'lucide-react';

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="py-12 px-4 md:py-20 md:px-6 relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto">
      
        {/* Title */}
        <div className="flex items-center justify-center gap-4 mb-8 md:mb-12">
          <div className="h-[1px] w-[40px] md:w-[60px] bg-gradient-to-l from-[#FF6B00]/60 to-transparent" />
          <div className="flex items-center gap-2">
            <span className="text-primary text-lg">•</span>
            <h2 className="text-[22px] md:text-[26px] font-bold text-white tracking-tight">Como funciona</h2>
            <span className="text-primary text-lg">•</span>
          </div>
          <div className="h-[1px] w-[40px] md:w-[60px] bg-gradient-to-r from-[#FF6B00]/60 to-transparent" />
        </div>

        {/* 3 Steps — grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr_auto_1fr] gap-4 md:gap-6 items-center">
          
          {/* Step 1 */}
          <div className="flex items-center gap-4 md:gap-5 bg-[#1A1A1A] p-5 md:p-8 rounded-xl h-full">
            <div className="shrink-0 flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-[#FF6B00] text-[#FF6B00] font-bold text-[16px] md:text-[18px]">
              1
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-white font-bold text-[15px] md:text-[15px] mb-1">Descreva os sintomas</h3>
              <p className="text-[#666] text-[13px] md:text-[12px] leading-relaxed">Conte o que seu pet está sentindo com detalhes.</p>
            </div>
            <MessageSquareMore className="w-8 h-8 md:w-10 md:h-10 text-primary/70 shrink-0" />
          </div>

          {/* Arrow 1 */}
          <div className="hidden lg:flex items-center justify-center">
            <ArrowRight className="w-5 h-5 text-primary/50" />
          </div>

          {/* Step 2 */}
          <div className="flex items-center gap-4 md:gap-5 bg-[#1A1A1A] p-5 md:p-8 rounded-xl h-full">
            <div className="shrink-0 flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-[#FF6B00] text-[#FF6B00] font-bold text-[16px] md:text-[18px]">
              2
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-white font-bold text-[15px] md:text-[15px] mb-1">IA analisa em segundos</h3>
              <p className="text-[#666] text-[13px] md:text-[12px] leading-relaxed">Nossa IA veterinária avalia os sintomas e histórico do pet.</p>
            </div>
            <BrainCircuit className="w-8 h-8 md:w-10 md:h-10 text-primary/70 shrink-0" />
          </div>

          {/* Arrow 2 */}
          <div className="hidden lg:flex items-center justify-center">
            <ArrowRight className="w-5 h-5 text-primary/50" />
          </div>

          {/* Step 3 */}
          <div className="flex items-center gap-4 md:gap-5 bg-[#1A1A1A] p-5 md:p-8 rounded-xl h-full">
            <div className="shrink-0 flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-[#FF6B00] text-[#FF6B00] font-bold text-[16px] md:text-[18px]">
              3
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-white font-bold text-[15px] md:text-[15px] mb-1">Receba orientação</h3>
              <p className="text-[#666] text-[13px] md:text-[12px] leading-relaxed">Saiba o que pode ser e se é hora de ir ao veterinário.</p>
            </div>
            <CheckCircle className="w-8 h-8 md:w-10 md:h-10 text-primary/70 shrink-0" />
          </div>

        </div>
      </div>
    </section>
  );
}
