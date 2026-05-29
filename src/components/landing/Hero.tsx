import React from 'react';
import { ArrowRight, Brain, Zap, Shield, HeartPulse, FileText, CheckCircle, PawPrint } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-12 px-4 pt-24 md:pt-[152px] md:pb-[80px] md:px-6">
      <div className="max-w-[1200px] mx-auto">
        
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center text-center md:text-left">
          
          {/* LEFT — Text (50%) */}
          <div className="flex-1 flex flex-col items-center md:items-start min-w-0">
            <h1 className="text-[28px] md:text-[48px] lg:text-[56px] font-bold leading-[1.15] md:leading-[1.1] tracking-tight text-white mb-6">
              Seu pet com veterinário<br />
              <span className="text-primary text-[28px] md:text-[56px] lg:text-[64px]">24 horas por dia</span>
            </h1>
            
            <p className="text-[14px] md:text-[15px] text-[#999] leading-[1.6] md:leading-[1.7] max-w-[440px] mb-8 md:mb-10">
              Descreva os sintomas, receba avaliação instantânea e saiba se precisa correr ao vet. Inteligência artificial treinada em medicina veterinária.
            </p>
            
            <div className="flex flex-col md:flex-row gap-3 mb-10 md:mb-12 w-full md:w-auto">
              <a href="#consultar" className="bg-primary text-white hover:bg-orange-600 font-bold transition-colors flex items-center justify-center gap-2 text-[15px] md:text-[14px] px-7 py-3.5 md:py-3.5 rounded-lg w-full md:w-auto">
                Consultar agora — grátis <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#como-funciona" className="text-white font-medium hover:bg-white/5 transition-colors flex items-center justify-center text-[15px] md:text-[14px] px-7 py-3.5 md:py-3.5 rounded-lg border border-[#333] w-full md:w-auto">
                Como funciona
              </a>
            </div>
            
            <div className="flex flex-col md:flex-row items-center md:items-start flex-wrap gap-4 md:gap-10">
              <div className="flex items-center gap-3">
                <Brain className="w-7 h-7 text-primary" />
                <div className="text-left">
                  <p className="text-white font-bold text-[13px] leading-tight">IA veterinária</p>
                  <p className="text-[#666] text-[11px]">Especializada</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Zap className="w-7 h-7 text-primary" />
                <div className="text-left">
                  <p className="text-white font-bold text-[13px] leading-tight">Resposta em segundos</p>
                  <p className="text-[#666] text-[11px]">Agilidade total</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Shield className="w-7 h-7 text-primary" />
                <div className="text-left">
                  <p className="text-white font-bold text-[13px] leading-tight">Dados protegidos</p>
                  <p className="text-[#666] text-[11px]">100% seguro</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* RIGHT — Circular Dog Image with Glow + Badges */}
          <div className="flex-1 flex items-center justify-center min-w-0 mt-4 md:mt-0 w-full">
            
            {/* Camada 1 — Glow container */}
            <div className="w-[220px] h-[220px] md:w-[380px] md:h-[380px] lg:w-[500px] lg:h-[500px] rounded-full relative flex items-center justify-center mx-auto" style={{ background: 'radial-gradient(circle, rgba(255,107,0,0.15) 0%, transparent 70%)' }}>
              
              {/* Camada 2 — Anel/borda visível com overflow hidden */}
              <div className="w-[220px] h-[220px] md:w-[310px] md:h-[310px] lg:w-[420px] lg:h-[420px] rounded-full border border-[rgba(255,107,0,0.3)] relative overflow-hidden flex items-center justify-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src="/images/hero-dog.png?v=3" 
                  alt="Golden Retriever" 
                  className="w-full h-full object-cover object-top rounded-full"
                />
              </div>

              {/* Badges - Hidden on Mobile */}
              <div className="hidden md:flex absolute top-[5%] left-[-15%] bg-[rgba(26,26,26,0.8)] backdrop-blur-md border border-[rgba(255,107,0,0.2)] rounded-lg px-3.5 py-2 text-[13px] text-white items-center gap-2 whitespace-nowrap">
                <HeartPulse className="w-5 h-5 text-primary shrink-0" />
                <span className="text-[11px] lg:text-[13px]">Análise de sintomas com IA avançada</span>
              </div>

              <div className="hidden md:flex absolute top-[5%] right-[-15%] bg-[rgba(26,26,26,0.8)] backdrop-blur-md border border-[rgba(255,107,0,0.2)] rounded-lg px-3.5 py-2 text-[13px] text-white items-center gap-2 whitespace-nowrap">
                <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                <span className="text-[11px] lg:text-[13px]">Orientação segura e confiável</span>
              </div>

              <div className="hidden md:flex absolute top-[55%] left-[-20%] bg-[rgba(26,26,26,0.8)] backdrop-blur-md border border-[rgba(255,107,0,0.2)] rounded-lg px-3.5 py-2 text-[13px] text-white items-center gap-2 whitespace-nowrap">
                <FileText className="w-5 h-5 text-primary shrink-0" />
                <span className="text-[11px] lg:text-[13px]">Avaliação instantânea em segundos</span>
              </div>

              <div className="hidden md:flex absolute top-[55%] right-[-15%] bg-[rgba(26,26,26,0.8)] backdrop-blur-md border border-[rgba(255,107,0,0.2)] rounded-lg px-3.5 py-2 text-[13px] text-white items-center gap-2 whitespace-nowrap">
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
