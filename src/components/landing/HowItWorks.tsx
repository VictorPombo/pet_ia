import React from 'react';
import { MessageSquareMore, BrainCircuit, CheckCircle, ArrowRight } from 'lucide-react';

export default function HowItWorks() {
  return (
    <section id="como-funciona" style={{ padding: '80px 24px', position: 'relative', overflow: 'hidden' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
      
        {/* Title */}
        <div className="flex items-center justify-center gap-4" style={{ marginBottom: '48px' }}>
          <div style={{ height: '1px', width: '60px', background: 'linear-gradient(to left, rgba(255,107,0,0.6), transparent)' }} />
          <div className="flex items-center gap-2">
            <span className="text-primary text-lg">•</span>
            <h2 className="text-[22px] sm:text-[26px] font-bold text-white tracking-tight">Como funciona</h2>
            <span className="text-primary text-lg">•</span>
          </div>
          <div style={{ height: '1px', width: '60px', background: 'linear-gradient(to right, rgba(255,107,0,0.6), transparent)' }} />
        </div>

        {/* 3 Steps — grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr_auto_1fr]" style={{ gap: '24px', alignItems: 'center' }}>
          
          {/* Step 1 */}
          <div className="flex items-center gap-5" style={{ background: '#1A1A1A', padding: '32px', borderRadius: '12px', minHeight: 'auto' }}>
            <div className="shrink-0 flex items-center justify-center" style={{ width: '48px', height: '48px', borderRadius: '50%', border: '2px solid #FF6B00', color: '#FF6B00', fontWeight: 700, fontSize: '18px' }}>
              1
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-white font-bold text-[15px]" style={{ marginBottom: '4px' }}>Descreva os sintomas</h3>
              <p className="text-[#666] text-[12px] leading-relaxed">Conte o que seu pet está sentindo com detalhes.</p>
            </div>
            <MessageSquareMore className="w-10 h-10 text-primary/70 shrink-0" />
          </div>

          {/* Arrow 1 */}
          <div className="hidden lg:flex items-center justify-center">
            <ArrowRight className="w-5 h-5 text-primary/50" />
          </div>

          {/* Step 2 */}
          <div className="flex items-center gap-5" style={{ background: '#1A1A1A', padding: '32px', borderRadius: '12px', minHeight: 'auto' }}>
            <div className="shrink-0 flex items-center justify-center" style={{ width: '48px', height: '48px', borderRadius: '50%', border: '2px solid #FF6B00', color: '#FF6B00', fontWeight: 700, fontSize: '18px' }}>
              2
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-white font-bold text-[15px]" style={{ marginBottom: '4px' }}>IA analisa em segundos</h3>
              <p className="text-[#666] text-[12px] leading-relaxed">Nossa IA veterinária avalia os sintomas e histórico do pet.</p>
            </div>
            <BrainCircuit className="w-10 h-10 text-primary/70 shrink-0" />
          </div>

          {/* Arrow 2 */}
          <div className="hidden lg:flex items-center justify-center">
            <ArrowRight className="w-5 h-5 text-primary/50" />
          </div>

          {/* Step 3 */}
          <div className="flex items-center gap-5" style={{ background: '#1A1A1A', padding: '32px', borderRadius: '12px', minHeight: 'auto' }}>
            <div className="shrink-0 flex items-center justify-center" style={{ width: '48px', height: '48px', borderRadius: '50%', border: '2px solid #FF6B00', color: '#FF6B00', fontWeight: 700, fontSize: '18px' }}>
              3
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-white font-bold text-[15px]" style={{ marginBottom: '4px' }}>Receba orientação</h3>
              <p className="text-[#666] text-[12px] leading-relaxed">Saiba o que pode ser e se é hora de ir ao veterinário.</p>
            </div>
            <CheckCircle className="w-10 h-10 text-primary/70 shrink-0" />
          </div>

        </div>
      </div>
    </section>
  );
}
