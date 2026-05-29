import React from 'react';
import { Check } from 'lucide-react';
import Link from 'next/link';

export default function Pricing() {
  return (
    <section id="precos" className="bg-section-odd py-24 relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6">
        
        <div className="text-center max-w-2xl mx-auto mb-16 reveal visible">
          <h2 className="mb-4 text-white">
            Simples e transparente.
          </h2>
          <p className="text-[#666]">
            Comece grátis. Upgrade quando quiser.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-[1100px] mx-auto items-center">
          
          {/* Plano Free */}
          <div className="glass-card flex flex-col h-full md:h-[600px] order-2 md:order-1 reveal visible stagger">
            <h3 className="font-bold text-white mb-2">Free</h3>
            <div className="flex items-baseline gap-1 mb-8">
              <span className="font-mono text-[48px] font-bold text-white">0</span>
              <span className="text-[16px] text-[#666]">/mês</span>
            </div>
            
            <ul className="flex flex-col gap-3.5 mb-8 flex-1">
              {[
                "1 pet",
                "Perfil básico",
                "Alertas de vacina",
                "Timeline limitada (20 fotos)"
              ].map((feat, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 text-[#666]" />
                  </div>
                  <span className="text-[15px] text-[#CCC]">{feat}</span>
                </li>
              ))}
            </ul>
            
            <Link href="/register" className="w-full text-center py-4 rounded-xl font-semibold transition-all border border-white/10 bg-transparent text-white hover:border-white mt-auto">
              Começar grátis
            </Link>
          </div>

          {/* Plano Premium */}
          <div className="flex flex-col h-full md:h-[640px] rounded-[20px] p-[40px_32px] relative z-10 order-1 md:order-2 md:scale-[1.03] reveal visible stagger" style={{
            background: 'linear-gradient(180deg, rgba(255,107,0,0.06) 0%, rgba(255,107,0,0.01) 100%)',
            border: '1px solid rgba(255,107,0,0.2)',
            boxShadow: '0 8px 40px rgba(255,107,0,0.08)'
          }}>
            <div className="self-start inline-block mb-6 rounded-full px-[14px] py-[5px] text-[11px] font-bold uppercase tracking-[0.1em] text-white" style={{
              background: 'linear-gradient(135deg, #FF6B00, #FF4D00)'
            }}>
              Recomendado
            </div>
            
            <h3 className="font-bold text-primary mb-2">Premium</h3>
            <div className="flex items-baseline gap-1 mb-8">
              <span className="font-mono text-[48px] font-bold text-white">19,90</span>
              <span className="text-[16px] text-[#666]">/mês</span>
            </div>
            
            <ul className="flex flex-col gap-3.5 mb-8 flex-1">
              {[
                "Pets ilimitados",
                "IA veterinária ilimitada",
                "Controle financeiro completo",
                "Timeline ilimitada",
                "Treinamento com progresso",
                "Alertas personalizados",
                "Modo emergência"
              ].map((feat, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#FF6B00]/10 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 text-[#FF6B00]" />
                  </div>
                  <span className="text-[15px] text-white">{feat}</span>
                </li>
              ))}
            </ul>
            
            <Link href="/register?plan=premium" className="w-full text-center py-4 rounded-xl font-semibold glow-btn mt-auto">
              Assinar Premium
            </Link>
          </div>

          {/* Plano Family */}
          <div className="glass-card flex flex-col h-full md:h-[600px] order-3 md:order-3 reveal visible stagger">
            <h3 className="font-bold text-white mb-2">Family</h3>
            <div className="flex items-baseline gap-1 mb-8">
              <span className="font-mono text-[48px] font-bold text-white">29,90</span>
              <span className="text-[16px] text-[#666]">/mês</span>
            </div>
            
            <ul className="flex flex-col gap-3.5 mb-8 flex-1">
              {[
                "Tudo do Premium",
                "Até 5 tutores por pet",
                "Compartilhamento de perfil",
                "Relatório mensal por email"
              ].map((feat, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 text-[#666]" />
                  </div>
                  <span className="text-[15px] text-[#CCC]">{feat}</span>
                </li>
              ))}
            </ul>
            
            <Link href="/register?plan=family" className="w-full text-center py-4 rounded-xl font-semibold transition-all border border-white/10 bg-transparent text-white hover:border-white mt-auto">
              Assinar Family
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
