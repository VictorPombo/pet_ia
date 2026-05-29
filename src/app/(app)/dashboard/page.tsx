"use client";

import React from 'react';
import { TrendingUp, BellRing, CircleDollarSign, Flame, CheckCircle2, Clock, ChevronDown, Activity, Utensils, Moon, Camera } from 'lucide-react';

export default function DashboardPage() {
  return (
    <div className="flex flex-col">
      
      {/* Topo - Saudação e Seletor */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold text-white mb-1">
            Olá, Victor! Como está o Apollo hoje?
          </h1>
          <p className="text-[#A0A0A0] text-sm">Bem-vindo de volta ao seu painel.</p>
        </div>
        
        <button className="flex items-center gap-3 bg-[#1A1A1A] border border-white/[0.06] rounded-xl p-2 pr-4 hover:bg-white/[0.03] transition-colors">
          <div className="w-10 h-10 rounded-full bg-[#2A2A2A] overflow-hidden">
            {/* Foto Avatar Pet (Placeholder) */}
            <div className="w-full h-full bg-[#FF6B00]/20 flex items-center justify-center text-[#FF6B00] font-bold">A</div>
          </div>
          <div className="flex flex-col items-start">
            <span className="text-white text-sm font-bold">Apollo</span>
            <span className="text-[#A0A0A0] text-xs">Golden Retriever</span>
          </div>
          <ChevronDown className="w-4 h-4 text-[#A0A0A0] ml-2" />
        </button>
      </div>

      {/* 4 Cards Resumo */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 mb-8">
        
        {/* Card 1 - Peso */}
        <div className="bg-[#1A1A1A] border border-white/[0.06] rounded-xl p-6 flex flex-col justify-between">
          <div className="flex justify-between items-center mb-4">
            <span className="text-[#A0A0A0] text-sm font-medium">Peso atual</span>
            <div className="w-8 h-8 rounded-lg bg-[#22C55E]/10 flex items-center justify-center">
              <TrendingUp className="w-4 h-4 text-[#22C55E]" />
            </div>
          </div>
          <div className="flex items-end gap-2">
            <span className="text-3xl font-bold text-white leading-none">32,4</span>
            <span className="text-[#A0A0A0] text-sm mb-1">kg</span>
          </div>
          <div className="mt-3 flex items-center gap-1 text-xs">
            <TrendingUp className="w-3 h-3 text-[#22C55E]" />
            <span className="text-[#22C55E] font-medium">+0.2kg</span>
            <span className="text-[#A0A0A0]">vs. última semana</span>
          </div>
        </div>

        {/* Card 2 - Próximo alerta */}
        <div className="bg-[#1A1A1A] border border-white/[0.06] rounded-xl p-6 flex flex-col justify-between">
          <div className="flex justify-between items-center mb-4">
            <span className="text-[#A0A0A0] text-sm font-medium">Próximo alerta</span>
            <div className="w-8 h-8 rounded-lg bg-[#FF6B00]/10 flex items-center justify-center">
              <BellRing className="w-4 h-4 text-[#FF6B00]" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold text-white mb-1">Vacina V10</span>
            <span className="text-[#FF6B00] text-sm font-medium">Vence em 3 dias</span>
          </div>
          <div className="mt-4">
            <button className="text-xs font-bold text-[#A0A0A0] hover:text-white transition-colors">Ver todos os alertas &rarr;</button>
          </div>
        </div>

        {/* Card 3 - Gasto do mês */}
        <div className="bg-[#1A1A1A] border border-white/[0.06] rounded-xl p-6 flex flex-col justify-between">
          <div className="flex justify-between items-center mb-4">
            <span className="text-[#A0A0A0] text-sm font-medium">Gasto do mês</span>
            <div className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center">
              <CircleDollarSign className="w-4 h-4 text-red-500" />
            </div>
          </div>
          <div className="flex items-end gap-1">
            <span className="text-[#A0A0A0] text-lg mb-0.5">R$</span>
            <span className="text-3xl font-bold text-white leading-none">847</span>
          </div>
          <div className="mt-4 flex items-end gap-1 h-6">
            <div className="w-2 rounded-t-sm bg-red-500/20 h-[40%]" />
            <div className="w-2 rounded-t-sm bg-red-500/40 h-[60%]" />
            <div className="w-2 rounded-t-sm bg-red-500/60 h-[30%]" />
            <div className="w-2 rounded-t-sm bg-red-500/80 h-[80%]" />
            <div className="w-2 rounded-t-sm bg-red-500 h-[100%]" />
          </div>
        </div>

        {/* Card 4 - Streak de rotina */}
        <div className="bg-[#1A1A1A] border border-white/[0.06] rounded-xl p-6 flex flex-col justify-between">
          <div className="flex justify-between items-center mb-4">
            <span className="text-[#A0A0A0] text-sm font-medium">Streak de rotina</span>
            <div className="w-8 h-8 rounded-lg bg-[#FF6B00]/10 flex items-center justify-center">
              <Flame className="w-4 h-4 text-[#FF6B00]" />
            </div>
          </div>
          <div className="flex items-end gap-2">
            <span className="text-3xl font-bold text-white leading-none">12</span>
            <span className="text-[#A0A0A0] text-sm mb-1">dias seguidos 🔥</span>
          </div>
          <div className="mt-4">
            <div className="w-full h-1.5 bg-white/[0.06] rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-orange-600 to-[#FF6B00] rounded-full w-[80%]" />
            </div>
            <p className="text-[#A0A0A0] text-xs mt-2 text-right">Meta: 15 dias</p>
          </div>
        </div>

      </div>

      {/* Gráficos (2 colunas) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        
        {/* Gráfico Maior (Evolução de Peso) */}
        <div className="lg:col-span-2 bg-[#1A1A1A] border border-white/[0.06] rounded-xl p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-bold text-white">Evolução do Peso</h2>
            <select className="bg-white/[0.04] border border-white/[0.06] rounded-lg px-3 py-1.5 text-sm text-[#A0A0A0] focus:outline-none">
              <option>Últimos 30 dias</option>
              <option>Últimos 6 meses</option>
            </select>
          </div>
          
          {/* Falso Gráfico de Linha (Placeholder Visual) */}
          <div className="w-full h-48 relative flex items-end justify-between px-2">
            <div className="absolute inset-0 border-b border-l border-white/[0.06]" />
            
            {/* Grid lines horizontais */}
            <div className="absolute top-0 w-full border-t border-white/[0.03] border-dashed" />
            <div className="absolute top-1/4 w-full border-t border-white/[0.03] border-dashed" />
            <div className="absolute top-2/4 w-full border-t border-white/[0.03] border-dashed" />
            <div className="absolute top-3/4 w-full border-t border-white/[0.03] border-dashed" />
            
            {/* Barras de linha simuladas com gradient (Mockup de gráfico bonito) */}
            <div className="flex w-full h-full items-end justify-between px-4 z-10 gap-2">
              <div className="w-full max-w-[40px] bg-gradient-to-t from-[#FF6B00]/20 to-transparent rounded-t-sm h-[40%] border-t-2 border-[#FF6B00] relative group">
                <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity bg-black px-2 py-1 rounded">31.8</span>
              </div>
              <div className="w-full max-w-[40px] bg-gradient-to-t from-[#FF6B00]/20 to-transparent rounded-t-sm h-[45%] border-t-2 border-[#FF6B00] relative group">
                <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity bg-black px-2 py-1 rounded">32.0</span>
              </div>
              <div className="w-full max-w-[40px] bg-gradient-to-t from-[#FF6B00]/20 to-transparent rounded-t-sm h-[42%] border-t-2 border-[#FF6B00] relative group">
                <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity bg-black px-2 py-1 rounded">31.9</span>
              </div>
              <div className="w-full max-w-[40px] bg-gradient-to-t from-[#FF6B00]/20 to-transparent rounded-t-sm h-[50%] border-t-2 border-[#FF6B00] relative group">
                <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity bg-black px-2 py-1 rounded">32.2</span>
              </div>
              <div className="w-full max-w-[40px] bg-gradient-to-t from-[#FF6B00]/30 to-transparent rounded-t-sm h-[55%] border-t-2 border-[#FF6B00] relative group shadow-[0_-5px_15px_rgba(255,107,0,0.3)]">
                <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity bg-black px-2 py-1 rounded">32.4</span>
              </div>
            </div>
            
            <div className="absolute -bottom-6 w-full flex justify-between px-4 text-xs text-[#666]">
              <span>S1</span><span>S2</span><span>S3</span><span>S4</span><span>Hoje</span>
            </div>
          </div>
        </div>

        {/* Gráfico Menor (Consumo de Água) */}
        <div className="lg:col-span-1 bg-[#1A1A1A] border border-white/[0.06] rounded-xl p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-bold text-white">Consumo de Água</h2>
          </div>
          
          <div className="flex items-end justify-between h-48 w-full gap-2 px-2 pb-6 relative">
             <div className="absolute inset-0 border-b border-l border-white/[0.06]" />
            <div className="w-full bg-[#3B82F6]/40 rounded-t-md h-[60%] hover:bg-[#3B82F6]/60 transition-colors z-10" title="Seg: 600ml" />
            <div className="w-full bg-[#3B82F6]/70 rounded-t-md h-[90%] hover:bg-[#3B82F6]/90 transition-colors z-10" title="Ter: 900ml" />
            <div className="w-full bg-[#3B82F6]/40 rounded-t-md h-[40%] hover:bg-[#3B82F6]/60 transition-colors z-10" title="Qua: 400ml" />
            <div className="w-full bg-[#3B82F6] rounded-t-md h-[100%] hover:bg-[#3B82F6] transition-colors z-10 shadow-[0_0_15px_rgba(59,130,246,0.3)]" title="Qui: 1000ml" />
            <div className="w-full bg-white/[0.05] rounded-t-md h-full flex items-center justify-center z-10">
              <span className="text-[10px] text-[#A0A0A0]">Hoje</span>
            </div>
          </div>
        </div>

      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Rotina de Hoje */}
        <div className="bg-[#1A1A1A] border border-white/[0.06] rounded-xl p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-bold text-white">Rotina de Hoje</h2>
            <span className="bg-[#22C55E]/10 text-[#22C55E] text-xs font-bold px-2 py-1 rounded">2 de 4 feitos</span>
          </div>

          <div className="flex flex-col gap-0">
            
            <div className="flex items-center gap-4 py-4 border-b border-white/[0.04]">
              <span className="text-[#A0A0A0] text-sm w-12 text-right font-medium">07:00</span>
              <div className="w-10 h-10 rounded-full bg-[#FF6B00]/10 flex items-center justify-center">
                <Activity className="w-5 h-5 text-[#FF6B00]" />
              </div>
              <div className="flex-1">
                <p className="text-white text-sm font-bold line-through opacity-70">Passeio matinal</p>
                <p className="text-[#666] text-xs">Parque (30 min)</p>
              </div>
              <CheckCircle2 className="w-6 h-6 text-[#22C55E]" />
            </div>

            <div className="flex items-center gap-4 py-4 border-b border-white/[0.04]">
              <span className="text-[#A0A0A0] text-sm w-12 text-right font-medium">08:00</span>
              <div className="w-10 h-10 rounded-full bg-[#22C55E]/10 flex items-center justify-center">
                <Utensils className="w-5 h-5 text-[#22C55E]" />
              </div>
              <div className="flex-1">
                <p className="text-white text-sm font-bold line-through opacity-70">Café da manhã</p>
                <p className="text-[#666] text-xs">150g ração + sachê</p>
              </div>
              <CheckCircle2 className="w-6 h-6 text-[#22C55E]" />
            </div>

            <div className="flex items-center gap-4 py-4 border-b border-white/[0.04]">
              <span className="text-[#FFFFFF] text-sm w-12 text-right font-bold">18:00</span>
              <div className="w-10 h-10 rounded-full bg-[#FF6B00]/10 border border-[#FF6B00]/30 flex items-center justify-center">
                <Activity className="w-5 h-5 text-[#FF6B00]" />
              </div>
              <div className="flex-1">
                <p className="text-white text-sm font-bold">Passeio noturno</p>
                <p className="text-[#A0A0A0] text-xs">Apenas xixi rápido</p>
              </div>
              <Clock className="w-5 h-5 text-[#FF6B00]" />
            </div>

            <div className="flex items-center gap-4 py-4">
              <span className="text-[#666] text-sm w-12 text-right font-medium">20:00</span>
              <div className="w-10 h-10 rounded-full bg-white/[0.03] flex items-center justify-center">
                <Moon className="w-5 h-5 text-[#666]" />
              </div>
              <div className="flex-1">
                <p className="text-[#666] text-sm font-bold">Jantar</p>
              </div>
              <Clock className="w-5 h-5 text-[#444]" />
            </div>

          </div>
        </div>

        {/* Timeline Recente */}
        <div>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-bold text-white">Timeline Recente</h2>
            <button className="text-[#FF6B00] text-sm font-medium hover:underline">Adicionar foto</button>
          </div>

          <div className="grid grid-cols-3 gap-4">
            
            <div className="aspect-square rounded-xl overflow-hidden relative group cursor-pointer bg-[#2A2A2A]">
              {/* Fake Image Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#1A1A1A] to-[#2A2A2A]" />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
              <div className="absolute bottom-2 left-2 right-2">
                <p className="text-white text-[11px] font-bold truncate">Dormindo muito!</p>
                <p className="text-[#A0A0A0] text-[9px]">Hoje</p>
              </div>
              <Camera className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 text-white/20 group-hover:scale-110 transition-transform" />
            </div>

            <div className="aspect-square rounded-xl overflow-hidden relative group cursor-pointer bg-[#2A2A2A]">
              <div className="absolute inset-0 bg-gradient-to-br from-[#3B82F6]/20 to-[#1A1A1A]" />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                <TrendingUp className="w-8 h-8 text-[#3B82F6] opacity-50" />
              </div>
              <div className="absolute bottom-2 left-2 right-2">
                <p className="text-white text-[11px] font-bold truncate">Pesagem</p>
                <p className="text-[#A0A0A0] text-[9px]">Ontem</p>
              </div>
            </div>

            <div className="aspect-square rounded-xl overflow-hidden relative group cursor-pointer bg-[#2A2A2A]">
               <div className="absolute inset-0 bg-gradient-to-br from-[#1A1A1A] to-[#2A2A2A]" />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
              <div className="absolute bottom-2 left-2 right-2">
                <p className="text-white text-[11px] font-bold truncate">Nova caminha</p>
                <p className="text-[#A0A0A0] text-[9px]">Semana passada</p>
              </div>
              <Camera className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 text-white/20 group-hover:scale-110 transition-transform" />
            </div>

          </div>
        </div>

      </div>

    </div>
  );
}
