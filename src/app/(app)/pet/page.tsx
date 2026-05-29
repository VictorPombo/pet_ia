"use client";

import React from 'react';
import { Camera, Edit2 } from 'lucide-react';

export default function PetProfilePage() {
  return (
    <div className="flex flex-col gap-8 max-w-5xl mx-auto">
      
      {/* Topo - Foto e Nome */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8 bg-[#1A1A1A] p-8 rounded-xl border border-white/[0.06]">
        
        {/* Foto */}
        <div className="relative group">
          <div className="w-[160px] h-[160px] md:w-[200px] md:h-[200px] rounded-full overflow-hidden bg-[#2A2A2A] flex items-center justify-center flex-shrink-0" style={{ border: '2px solid rgba(255,107,0,0.3)' }}>
            <span className="text-[#FF6B00] text-5xl font-bold">A</span>
          </div>
          <button className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-[#FF6B00] hover:bg-orange-600 transition-colors flex items-center justify-center shadow-lg text-white">
            <Camera className="w-5 h-5" />
          </button>
        </div>

        {/* Info Base */}
        <div className="flex-1 flex flex-col justify-center text-center md:text-left h-[160px] md:h-[200px]">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
            <div>
              <h1 className="text-4xl font-bold text-white mb-2">Apollo</h1>
              <p className="text-[#A0A0A0] text-lg">Golden Retriever</p>
            </div>
            <button className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg border border-white/[0.1] text-white font-medium hover:bg-white/[0.05] transition-colors self-center md:self-start">
              <Edit2 className="w-4 h-4" />
              Editar Perfil
            </button>
          </div>
        </div>
      </div>

      {/* Grid de Cards (2 Colunas Desktop, 1 Mobile) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Card: Dados Gerais */}
        <div className="bg-[#1A1A1A] rounded-xl p-6 border border-white/[0.06] relative">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-[16px] font-bold text-white">Dados Gerais</h2>
            <button className="text-[#FF6B00] text-sm font-medium hover:underline">Editar</button>
          </div>
          <div className="grid grid-cols-2 gap-y-4 gap-x-4">
            <div className="flex flex-col gap-1">
              <span className="text-[#A0A0A0] text-[14px]">Nome</span>
              <span className="text-white text-[15px]">Apollo</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[#A0A0A0] text-[14px]">Espécie</span>
              <span className="text-white text-[15px]">Cão</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[#A0A0A0] text-[14px]">Raça</span>
              <span className="text-white text-[15px]">Golden Retriever</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[#A0A0A0] text-[14px]">Nascimento</span>
              <span className="text-white text-[15px]">15/03/2020 (6 anos)</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[#A0A0A0] text-[14px]">Gênero</span>
              <span className="text-white text-[15px]">Macho</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[#A0A0A0] text-[14px]">Castrado</span>
              <span className="text-white text-[15px]">Sim</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[#A0A0A0] text-[14px]">Peso</span>
              <span className="text-white text-[15px]">32.4 kg</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[#A0A0A0] text-[14px]">Nível Ativ.</span>
              <span className="text-white text-[15px]">Alto</span>
            </div>
          </div>
        </div>

        {/* Card: Saúde Base */}
        <div className="bg-[#1A1A1A] rounded-xl p-6 border border-white/[0.06] relative">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-[16px] font-bold text-white">Saúde Base</h2>
            <button className="text-[#FF6B00] text-sm font-medium hover:underline">Editar</button>
          </div>
          <div className="grid grid-cols-1 gap-y-4">
            <div className="flex flex-col gap-1">
              <span className="text-[#A0A0A0] text-[14px]">Tipo Sanguíneo</span>
              <span className="text-white text-[15px]">DEA 1.1 Positivo</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[#A0A0A0] text-[14px]">Alergias</span>
              <span className="text-white text-[15px]">Picada de abelha, Frango (proteína)</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[#A0A0A0] text-[14px]">Doenças Crônicas</span>
              <span className="text-white text-[15px]">Displasia coxofemoral leve</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[#A0A0A0] text-[14px]">Medicações Contínuas</span>
              <span className="text-white text-[15px]">Condroitina (diário)</span>
            </div>
          </div>
        </div>

        {/* Card: Alimentação */}
        <div className="bg-[#1A1A1A] rounded-xl p-6 border border-white/[0.06] relative">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-[16px] font-bold text-white">Alimentação</h2>
            <button className="text-[#FF6B00] text-sm font-medium hover:underline">Editar</button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-4">
            <div className="flex flex-col gap-1">
              <span className="text-[#A0A0A0] text-[14px]">Marca da Ração</span>
              <span className="text-white text-[15px]">Premier Ambientes Internos</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[#A0A0A0] text-[14px]">Tipo de Alimento</span>
              <span className="text-white text-[15px]">Seco Super Premium</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[#A0A0A0] text-[14px]">Qtd. Diária</span>
              <span className="text-white text-[15px]">350g (Dividido em 2x)</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[#A0A0A0] text-[14px]">Restrições</span>
              <span className="text-white text-[15px]">Sem frango</span>
            </div>
          </div>
        </div>

        {/* Card: Contatos */}
        <div className="bg-[#1A1A1A] rounded-xl p-6 border border-white/[0.06] relative">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-[16px] font-bold text-white">Contatos e Plano</h2>
            <button className="text-[#FF6B00] text-sm font-medium hover:underline">Editar</button>
          </div>
          <div className="grid grid-cols-1 gap-y-4">
            <div className="flex flex-col gap-1">
              <span className="text-[#A0A0A0] text-[14px]">Veterinário Principal</span>
              <span className="text-white text-[15px]">Dr. Carlos Silva — (11) 98888-7777</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[#A0A0A0] text-[14px]">Clínica 24h (Emergência)</span>
              <span className="text-white text-[15px]">PetCare Ibirapuera — (11) 3333-4444</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[#A0A0A0] text-[14px]">Plano de Saúde</span>
              <span className="text-white text-[15px]">PetLove Premium (Carteirinha: #837264)</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
