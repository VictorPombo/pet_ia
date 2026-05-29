"use client";

import React from "react";
import { ArrowUpRight, ChevronDown, CheckCircle2, Circle } from "lucide-react";
import Image from "next/image";

export default function DashboardPage() {
  return (
    <div className="flex flex-col animate-fade-in">
      
      {/* Topo — saudação */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white mb-1">Olá, Victor!</h1>
          <p className="text-[16px] text-[#808080]">Como está o Apollo hoje?</p>
        </div>
        
        {/* Seletor de pet */}
        <div className="flex items-center gap-3 bg-[#1A1A1A] border border-white/[0.06] rounded-xl p-2 cursor-pointer hover:bg-white/[0.02] transition-colors self-start md:self-auto">
          <div className="w-10 h-10 rounded-lg bg-orange-500/20 overflow-hidden relative">
            <Image 
              src="/images/hero-dog.png" 
              alt="Apollo"
              fill
              className="object-cover"
            />
          </div>
          <span className="text-white font-medium text-sm">Apollo</span>
          <ChevronDown className="w-4 h-4 text-[#808080] mr-2" />
        </div>
      </div>

      {/* 4 cards de resumo */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-8">
        
        <div className="bg-[#1A1A1A] p-6 rounded-xl border border-white/[0.06] flex flex-col">
          <span className="text-[12px] text-[#808080] mb-2 uppercase tracking-wider font-semibold">Peso</span>
          <div className="flex items-end justify-between">
            <span className="text-[28px] font-bold text-white leading-none">12,3 kg</span>
            <div className="flex items-center gap-1 text-[#22C55E] text-xs font-bold bg-[#22C55E]/10 px-2 py-1 rounded">
              <ArrowUpRight className="w-3 h-3" /> 0,3
            </div>
          </div>
        </div>

        <div className="bg-[#1A1A1A] p-6 rounded-xl border border-[#FF6B00]/20 flex flex-col">
          <span className="text-[12px] text-[#808080] mb-2 uppercase tracking-wider font-semibold">Próximo alerta</span>
          <div className="flex flex-col">
            <span className="text-[20px] font-bold text-white mb-1">Vacina V10</span>
            <span className="text-[#FF6B00] text-sm font-medium">em 3 dias</span>
          </div>
        </div>

        <div className="bg-[#1A1A1A] p-6 rounded-xl border border-white/[0.06] flex flex-col">
          <span className="text-[12px] text-[#808080] mb-2 uppercase tracking-wider font-semibold">Gasto do mês</span>
          <div className="flex items-end justify-between">
            <span className="text-[28px] font-bold text-white leading-none">R$ 847</span>
          </div>
        </div>

        <div className="bg-[#1A1A1A] p-6 rounded-xl border border-white/[0.06] flex flex-col">
          <span className="text-[12px] text-[#808080] mb-2 uppercase tracking-wider font-semibold">Streak de atividades</span>
          <div className="flex items-end justify-between">
            <span className="text-[28px] font-bold text-white leading-none">12 dias <span className="text-[22px]">🔥</span></span>
          </div>
        </div>

      </div>

      {/* 2 gráficos lado a lado */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mb-8">
        
        {/* Card grande */}
        <div className="xl:col-span-2 bg-[#1A1A1A] p-6 rounded-xl border border-white/[0.06] flex flex-col">
          <h3 className="text-[16px] font-bold text-white mb-4">Peso — últimos 30 dias</h3>
          <div className="w-full h-[200px] bg-[#2A2A2A] rounded-lg border border-white/[0.02] flex items-center justify-center">
            <span className="text-[#808080] font-medium">Gráfico de peso</span>
          </div>
        </div>

        {/* Card menor */}
        <div className="xl:col-span-1 bg-[#1A1A1A] p-6 rounded-xl border border-white/[0.06] flex flex-col">
          <h3 className="text-[16px] font-bold text-white mb-4">Água — últimos 7 dias</h3>
          <div className="w-full h-[200px] bg-[#2A2A2A] rounded-lg border border-white/[0.02] flex items-center justify-center">
            <span className="text-[#808080] font-medium">Gráfico de barras</span>
          </div>
        </div>

      </div>

      {/* Rotina de hoje */}
      <div className="bg-[#1A1A1A] p-6 rounded-xl border border-white/[0.06]">
        <h3 className="text-[16px] font-bold text-white mb-4">Rotina de hoje</h3>
        
        <div className="flex flex-col">
          
          <div className="flex items-center gap-4 py-3 border-b border-white/[0.04]">
            <span className="w-[60px] text-[#808080] text-sm">07h</span>
            <span className="text-xl">🚶</span>
            <span className="flex-1 text-white text-[15px]">Passeio matinal</span>
            <span className="flex items-center gap-1 text-[#22C55E] text-sm font-medium"><CheckCircle2 className="w-4 h-4" /> feito</span>
          </div>
          
          <div className="flex items-center gap-4 py-3 border-b border-white/[0.04]">
            <span className="w-[60px] text-[#808080] text-sm">08h</span>
            <span className="text-xl">🦴</span>
            <span className="flex-1 text-white text-[15px]">Café da manhã</span>
            <span className="flex items-center gap-1 text-[#22C55E] text-sm font-medium"><CheckCircle2 className="w-4 h-4" /> feito</span>
          </div>

          <div className="flex items-center gap-4 py-3 border-b border-white/[0.04]">
            <span className="w-[60px] text-[#808080] text-sm">14h</span>
            <span className="text-xl">🧠</span>
            <span className="flex-1 text-white text-[15px]">Treinamento Básico</span>
            <span className="flex items-center gap-1 text-[#808080] text-sm"><Circle className="w-4 h-4" /> pendente</span>
          </div>

          <div className="flex items-center gap-4 py-3">
            <span className="w-[60px] text-[#808080] text-sm">19h</span>
            <span className="text-xl">🚶</span>
            <span className="flex-1 text-white text-[15px]">Passeio noturno</span>
            <span className="flex items-center gap-1 text-[#808080] text-sm"><Circle className="w-4 h-4" /> pendente</span>
          </div>

        </div>
      </div>

    </div>
  );
}
