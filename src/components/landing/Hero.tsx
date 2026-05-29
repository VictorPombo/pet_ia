import React from 'react';
import { ArrowRight, Brain, Zap, Shield, HeartPulse, FileText, CheckCircle, PawPrint } from 'lucide-react';

export default function Hero() {
  return (
    <section style={{ padding: '80px 24px', paddingTop: '152px', position: 'relative', overflow: 'hidden' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          
          {/* LEFT — Text (50%) */}
          <div className="flex-1 flex flex-col items-start" style={{ minWidth: 0 }}>
            <h1 className="text-[40px] sm:text-[48px] lg:text-[56px] font-bold leading-[1.1] tracking-tight text-white" style={{ marginBottom: '24px' }}>
              Seu pet com veterinário<br />
              <span className="text-primary text-[48px] sm:text-[56px] lg:text-[64px]">24 horas por dia</span>
            </h1>
            
            <p className="text-[15px] text-[#999] leading-[1.7]" style={{ maxWidth: '440px', marginBottom: '40px' }}>
              Descreva os sintomas, receba avaliação instantânea e saiba se precisa correr ao vet. Inteligência artificial treinada em medicina veterinária.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3" style={{ marginBottom: '48px' }}>
              <a href="#consultar" className="bg-primary text-white hover:bg-orange-600 font-bold transition-colors flex items-center justify-center gap-2 text-[14px]" style={{ padding: '14px 28px', borderRadius: '8px' }}>
                Consultar agora — grátis <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#como-funciona" className="text-white font-medium hover:bg-white/5 transition-colors flex items-center justify-center text-[14px]" style={{ padding: '14px 28px', borderRadius: '8px', border: '1px solid #333' }}>
                Como funciona
              </a>
            </div>
            
            <div className="flex flex-wrap gap-8 lg:gap-10">
              <div className="flex items-center gap-3">
                <Brain className="w-7 h-7 text-primary" />
                <div>
                  <p className="text-white font-bold text-[13px] leading-tight">IA veterinária</p>
                  <p className="text-[#666] text-[11px]">Especializada</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Zap className="w-7 h-7 text-primary" />
                <div>
                  <p className="text-white font-bold text-[13px] leading-tight">Resposta em segundos</p>
                  <p className="text-[#666] text-[11px]">Agilidade total</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Shield className="w-7 h-7 text-primary" />
                <div>
                  <p className="text-white font-bold text-[13px] leading-tight">Dados protegidos</p>
                  <p className="text-[#666] text-[11px]">100% seguro</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* RIGHT — Circular Dog Image with Glow + Badges */}
          <div className="flex-1 flex items-center justify-center" style={{ minWidth: 0 }}>
            
            {/* Camada 1 — Glow container (badges ficam aqui, FORA do overflow hidden) */}
            <div className="w-[280px] h-[280px] md:w-[380px] md:h-[380px] lg:w-[500px] lg:h-[500px]" style={{ borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,107,0,0.15) 0%, transparent 70%)', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              
              {/* Camada 2 — Anel/borda visível com overflow hidden */}
              <div className="w-[220px] h-[220px] md:w-[310px] md:h-[310px] lg:w-[420px] lg:h-[420px]" style={{ borderRadius: '50%', border: '1px solid rgba(255,107,0,0.3)', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                
                {/* Camada 3 — Imagem do cachorro */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src="/images/hero-dog.png?v=3" 
                  alt="Golden Retriever" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', borderRadius: '50%' }}
                />
              </div>

              {/* Badge: Topo-esquerda */}
              <div className="hidden md:flex" style={{ position: 'absolute', top: '5%', left: '-15%', background: 'rgba(26,26,26,0.8)', backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)', border: '1px solid rgba(255,107,0,0.2)', borderRadius: '8px', padding: '8px 14px', fontSize: '13px', color: '#fff', alignItems: 'center', gap: '8px', whiteSpace: 'nowrap' }}>
                <HeartPulse className="w-5 h-5 text-primary shrink-0" />
                <span className="text-[11px] lg:text-[13px]">Análise de sintomas com IA avançada</span>
              </div>

              {/* Badge: Topo-direita */}
              <div className="hidden md:flex" style={{ position: 'absolute', top: '5%', right: '-15%', background: 'rgba(26,26,26,0.8)', backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)', border: '1px solid rgba(255,107,0,0.2)', borderRadius: '8px', padding: '8px 14px', fontSize: '13px', color: '#fff', alignItems: 'center', gap: '8px', whiteSpace: 'nowrap' }}>
                <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                <span className="text-[11px] lg:text-[13px]">Orientação segura e confiável</span>
              </div>

              {/* Badge: Centro-esquerda */}
              <div className="hidden md:flex" style={{ position: 'absolute', top: '55%', left: '-20%', background: 'rgba(26,26,26,0.8)', backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)', border: '1px solid rgba(255,107,0,0.2)', borderRadius: '8px', padding: '8px 14px', fontSize: '13px', color: '#fff', alignItems: 'center', gap: '8px', whiteSpace: 'nowrap' }}>
                <FileText className="w-5 h-5 text-primary shrink-0" />
                <span className="text-[11px] lg:text-[13px]">Avaliação instantânea em segundos</span>
              </div>

              {/* Badge: Centro-direita */}
              <div className="hidden md:flex" style={{ position: 'absolute', top: '55%', right: '-15%', background: 'rgba(26,26,26,0.8)', backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)', border: '1px solid rgba(255,107,0,0.2)', borderRadius: '8px', padding: '8px 14px', fontSize: '13px', color: '#fff', alignItems: 'center', gap: '8px', whiteSpace: 'nowrap' }}>
                <PawPrint className="w-5 h-5 text-primary shrink-0" />
                <span className="text-[11px] lg:text-[13px]">Baseado em estudos veterinários</span>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
