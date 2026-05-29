"use client";

import React from "react";
import { Phone, Share2, MapPin } from "lucide-react";

export default function EmergencyPage() {
  const criticalData = [
    { label: "Nome", value: "Apollo" },
    { label: "Raça", value: "Golden Retriever" },
    { label: "Peso", value: "12,3 kg" },
    { label: "Tipo Sanguíneo", value: "DEA 1.1 Positivo" },
    { label: "Alergias", value: "Picada de abelha" },
    { label: "Doenças", value: "Nenhuma (Saudável)" },
    { label: "Medicações contínuas", value: "Nenhuma" },
  ];

  return (
    <div className="flex flex-col items-center py-12 px-6">
      
      {/* Botão emergência */}
      <button className="w-[180px] h-[180px] rounded-full bg-gradient-to-br from-[#EF4444] to-[#FF6B00] text-white flex flex-col items-center justify-center gap-2 mb-10 border-none cursor-pointer shadow-[0_0_50px_rgba(239,68,68,0.25)] hover:shadow-[0_0_70px_rgba(239,68,68,0.4)] hover:scale-105 transition-all animate-pulse-slow">
        <span className="text-[32px]">🚨</span>
        <span className="text-[14px] font-bold tracking-wider">EMERGÊNCIA</span>
      </button>

      {/* Card dados críticos */}
      <div className="max-w-[600px] w-full bg-[#1A1A1A] border border-[rgba(239,68,68,0.15)] rounded-xl p-6 shadow-lg shadow-red-500/5">
        <h2 className="text-[18px] font-bold text-white mb-5 flex items-center gap-2">
          Dados críticos do Apollo
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {criticalData.map((item, idx) => (
            <div key={idx} className="flex flex-col">
              <span className="text-[13px] text-[#808080] mb-0.5">{item.label}</span>
              <span className="text-[15px] text-white font-medium">{item.value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 3 botões de ação */}
      <div className="flex flex-row flex-wrap justify-center gap-3 mt-8">
        <button className="flex items-center gap-2 bg-[#EF4444] hover:bg-red-600 text-white px-7 py-3.5 rounded-[10px] text-[14px] font-bold transition-colors">
          <Phone className="w-4 h-4" /> Ligar para Vet
        </button>
        
        <button className="flex items-center gap-2 bg-[#FF6B00] hover:bg-orange-600 text-white px-7 py-3.5 rounded-[10px] text-[14px] font-bold transition-colors">
          <Share2 className="w-4 h-4" /> Compartilhar histórico
        </button>
        
        <button className="flex items-center gap-2 bg-transparent border border-white hover:bg-white/[0.05] text-white px-7 py-3.5 rounded-[10px] text-[14px] font-bold transition-colors">
          <MapPin className="w-4 h-4" /> Hospitais próximos
        </button>
      </div>

    </div>
  );
}
