import React from 'react';
import { ArrowRight, Star } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#050505] min-h-[100vh] flex items-center pt-24 md:pt-32 pb-16">
      <div className="max-w-[1200px] w-full mx-auto px-5 md:px-6 z-10 relative">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-8">
          
          {/* Left Column - Text (55%) */}
          <div className="flex-1 w-full flex flex-col items-center md:items-start text-center md:text-left reveal visible">
            
            {/* Micro-label */}
            <div className="inline-flex items-center gap-2 bg-[#FF6B00]/[0.08] border border-[#FF6B00]/20 rounded-full px-4 py-1.5 mb-6 md:mb-8">
              <span className="text-[13px] text-[#FF8534] tracking-[0.02em] font-medium">✨ A #1 plataforma pet com IA do Brasil</span>
            </div>
            
            {/* Title */}
            <h1 className="font-extrabold text-white mb-6 tracking-tight">
              Seu pet com veterinário <br className="hidden md:block" />
              <span className="gradient-text">24 horas por dia</span>
            </h1>
            
            {/* Subtitle */}
            <p className="text-[#888] mb-8 md:mb-10 max-w-[500px]">
              Descreva os sintomas, receba avaliação instantânea e saiba se precisa correr ao vet.
            </p>
            
            {/* Buttons */}
            <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto mb-10 md:mb-12">
              <Link href="/register" className="glow-btn px-8 py-4 rounded-xl font-semibold text-[16px] flex items-center justify-center gap-2 w-full md:w-auto">
                Começar grátis <ArrowRight className="w-5 h-5" />
              </Link>
              <a href="#como-funciona" className="bg-transparent border border-white/12 text-[#CCC] hover:border-white/30 transition-all px-8 py-4 rounded-xl font-semibold text-[16px] flex items-center justify-center w-full md:w-auto">
                Ver como funciona
              </a>
            </div>
            
            {/* Social Proof */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
              <div className="flex -space-x-3">
                <div className="w-10 h-10 rounded-full border-2 border-[#050505] bg-[#333] flex items-center justify-center text-[10px]">👩🏻</div>
                <div className="w-10 h-10 rounded-full border-2 border-[#050505] bg-[#444] flex items-center justify-center text-[10px]">👨🏼</div>
                <div className="w-10 h-10 rounded-full border-2 border-[#050505] bg-[#555] flex items-center justify-center text-[10px]">👩🏽</div>
              </div>
              <div className="flex flex-col items-start text-left">
                <div className="text-[13px] text-[#888] font-medium">Mais de 50.000 tutores confiam</div>
                <div className="text-[13px] text-white font-bold flex items-center gap-1">
                  <Star className="w-4 h-4 text-[#FF6B00] fill-[#FF6B00]" /> 4,9/5
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Visual (45%) */}
          <div className="flex-1 w-full md:w-[45%] flex justify-center relative mt-8 md:mt-0 reveal visible" style={{ transitionDelay: '0.2s' }}>
            
            {/* Background Glow */}
            <div className="absolute inset-0 z-0 rounded-full" style={{ background: 'radial-gradient(circle at center, rgba(255,107,0,0.12) 0%, transparent 60%)' }}></div>
            
            {/* Mockup Frame */}
            <div className="relative z-10 w-[90%] md:w-full max-w-[400px] aspect-[9/19] bg-[#0A0A0A] rounded-[32px] border border-white/10 shadow-[0_24px_80px_rgba(0,0,0,0.6)] overflow-hidden md:[transform:perspective(1200px)_rotateY(-8deg)_rotateX(3deg)] transition-transform duration-500 hover:md:[transform:perspective(1200px)_rotateY(-4deg)_rotateX(1deg)]">
              
              {/* Fake App Content */}
              <div className="flex flex-col h-full bg-[#0A0A0A]">
                {/* Header */}
                <div className="px-5 pt-10 pb-4 border-b border-white/[0.05]">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#1A1A1A] border border-white/10 overflow-hidden">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src="/images/hero-dog.png" alt="Pet" className="w-full h-full object-cover" onError={(e) => (e.currentTarget.style.display = 'none')} />
                    </div>
                    <div>
                      <div className="text-white text-[14px] font-bold">Apollo</div>
                      <div className="text-[#888] text-[11px]">Golden Retriever • 2 anos</div>
                    </div>
                  </div>
                </div>
                
                {/* Body - Chat IA */}
                <div className="flex-1 p-5 flex flex-col gap-4">
                  <div className="bg-[#1A1A1A] p-3 rounded-2xl rounded-tl-none self-start max-w-[85%] border border-white/[0.03]">
                    <p className="text-[13px] text-white">Olá! Como o Apollo está se sentindo hoje?</p>
                  </div>
                  <div className="bg-gradient-to-br from-[#FF6B00] to-[#E8450A] p-3 rounded-2xl rounded-tr-none self-end max-w-[85%]">
                    <p className="text-[13px] text-white">Ele está com diarreia desde ontem à noite e não quis comer a ração hoje de manhã.</p>
                  </div>
                  <div className="bg-[#1A1A1A] p-4 rounded-2xl rounded-tl-none self-start w-full border border-white/[0.03]">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-6 h-6 rounded-full bg-[#FF6B00]/20 flex items-center justify-center">
                        <span className="text-[#FF6B00] text-[12px]">🧠</span>
                      </div>
                      <span className="text-[12px] text-[#FF8534] font-bold">Análise IA</span>
                    </div>
                    <p className="text-[12px] text-[#CCC] leading-relaxed mb-3">
                      Como o Apollo é um cão jovem (2 anos) e não tem histórico de alergias graves, a falta de apetite com diarreia pode ser um desarranjo intestinal leve.
                    </p>
                    <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-2">
                      <span className="text-red-400 text-[11px] font-bold">Atenção:</span>
                      <span className="text-[#AAA] text-[11px]"> Observe se há vômito. Mantenha ele hidratado. Se não melhorar em 24h, busque um veterinário.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
