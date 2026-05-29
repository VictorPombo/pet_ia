import React from 'react';
import { Camera, BellRing, HeartPulse, CircleDollarSign, CalendarDays, BrainCircuit } from 'lucide-react';

export default function Features() {
  return (
    <section className="bg-section-even py-24 relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 reveal visible">
          <h2 className="mb-4 text-white">
            Tudo que seu pet <span className="gradient-text">precisa.</span>
          </h2>
          <p className="text-[#666]">
            Um ecossistema completo de cuidado inteligente.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          
          {/* Card 1 — IA Veterinária (Span 2) */}
          <div className="glass-card md:col-span-2 flex flex-col md:flex-row gap-6 items-center overflow-hidden reveal visible group stagger" style={{ background: 'linear-gradient(135deg, #0F0F0F 0%, rgba(255,107,0,0.03) 100%)', minHeight: '320px' }}>
            <div className="flex-1 flex flex-col items-start z-10">
              <span className="text-[48px] mb-4">🧠</span>
              <h3 className="font-bold text-white mb-2">Assistente IA veterinário</h3>
              <p className="text-[#888] text-[15px] leading-relaxed max-w-[320px]">
                Descreva os sintomas. A IA analisa peso, raça, idade e histórico para orientar se é urgência ou não.
              </p>
            </div>
            {/* Mini mockup placeholder */}
            <div className="flex-1 w-full flex justify-end items-end h-full mt-6 md:mt-0 opacity-80 group-hover:opacity-100 transition-opacity duration-500">
              <div className="w-[85%] md:w-[280px] h-[200px] md:h-[260px] bg-[#111] rounded-tl-2xl rounded-tr-2xl border-t border-l border-r border-white/10 p-4 translate-y-8 group-hover:translate-y-4 transition-transform duration-500 shadow-2xl">
                <div className="flex gap-2 mb-4 items-end">
                  <div className="w-6 h-6 rounded-full bg-[#333] shrink-0" />
                  <div className="bg-[#222] p-2 rounded-xl rounded-bl-none text-[10px] text-[#888] w-24 h-8" />
                </div>
                <div className="flex gap-2 mb-4 justify-end items-end">
                  <div className="bg-[#FF6B00]/20 p-2 rounded-xl rounded-br-none text-[10px] text-[#FF8534] w-32 h-10 border border-[#FF6B00]/30" />
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 — Timeline */}
          <div className="glass-card md:col-span-1 flex flex-col reveal visible stagger">
            <span className="text-[32px] mb-4">📸</span>
            <h3 className="font-bold text-white mb-2">A vida do seu pet em fotos</h3>
            <p className="text-[#888] text-[15px] leading-relaxed">
              Álbum cronológico. Aniversários, vacinas, marcos especiais.
            </p>
          </div>

          {/* Card 3 — Alertas */}
          <div className="glass-card md:col-span-1 flex flex-col reveal visible stagger">
            <span className="text-[32px] mb-4">🔔</span>
            <h3 className="font-bold text-white mb-2">Nunca mais esqueça</h3>
            <p className="text-[#888] text-[15px] leading-relaxed">
              Vacina, remédio, banho, ração. Alerta automático.
            </p>
          </div>

          {/* Card 4 — Controle de Saúde */}
          <div className="glass-card md:col-span-1 flex flex-col reveal visible stagger">
            <span className="text-[32px] mb-4">❤️</span>
            <h3 className="font-bold text-white mb-2">Smartwatch do pet</h3>
            <p className="text-[#888] text-[15px] leading-relaxed">
              Peso, água, sono, atividade. Tudo com gráficos.
            </p>
          </div>

          {/* Card 5 — Finanças (Span 2) */}
          <div className="glass-card md:col-span-2 flex flex-col md:flex-row justify-between items-center gap-6 reveal visible stagger overflow-hidden">
            <div className="flex-1 flex flex-col items-start z-10">
              <span className="text-[32px] mb-4">💰</span>
              <h3 className="font-bold text-white mb-2">Quanto custa seu pet por ano?</h3>
              <p className="text-[#888] text-[15px] leading-relaxed max-w-[320px]">
                Controle gastos e veja projeção anual de custos estimados com saúde e alimentação.
              </p>
            </div>
            <div className="flex-1 flex items-end justify-center w-full h-[140px] gap-3 md:gap-4 mt-4 md:mt-0 opacity-60 group-hover:opacity-100 transition-all">
              <div className="w-8 md:w-10 bg-[#FF6B00]/40 rounded-t-md h-[40%]" />
              <div className="w-8 md:w-10 bg-[#FF6B00]/60 rounded-t-md h-[65%]" />
              <div className="w-8 md:w-10 bg-gradient-to-t from-[#FF6B00] to-[#FF8534] rounded-t-md h-[90%] relative shadow-[0_0_15px_rgba(255,107,0,0.4)]" />
              <div className="w-8 md:w-10 bg-[#FF6B00]/30 rounded-t-md h-[50%]" />
            </div>
          </div>

          {/* Card 6 — Rotina */}
          <div className="glass-card md:col-span-1 flex flex-col reveal visible stagger">
            <span className="text-[32px] mb-4">📅</span>
            <h3 className="font-bold text-white mb-2">Rotina visual</h3>
            <p className="text-[#888] text-[15px] leading-relaxed">
              Grade semanal. Passeio, ração, treino, higiene.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
