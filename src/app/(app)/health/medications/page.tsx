"use client";

import { Pill, Plus, Clock } from "lucide-react";

export default function MedicationsPage() {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      <div className="w-24 h-24 rounded-full bg-[#111827] border border-white/5 flex items-center justify-center mb-6 relative">
        <Pill className="w-10 h-10 text-[#A56BFF]" />
        <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-[#FFC857] flex items-center justify-center border-4 border-[#0D1B2A]">
          <Clock className="w-4 h-4 text-black" />
        </div>
      </div>
      
      <h2 className="text-[24px] font-bold text-[#FFFFFF] mb-3">Receitas e Medicamentos</h2>
      <p className="text-[#F4F6F8] text-[15px] max-w-md mb-8 leading-relaxed">
        Controle antipulgas, vermífugos e tratamentos contínuos do Thor. Nossa IA criará os alarmes automaticamente com base na receita do veterinário.
      </p>

      <button className="bg-[#A56BFF] hover:bg-[#8B4EE5] text-white px-8 py-3.5 rounded-xl text-[15px] font-bold flex items-center gap-2 transition-colors shadow-lg shadow-[#A56BFF]/20">
        <Plus className="w-5 h-5" />
        Adicionar Medicamento
      </button>

      <p className="text-[#788794] text-[13px] mt-6 flex items-center gap-1.5">
        <span className="w-2 h-2 rounded-full bg-[#00D1B2] animate-pulse"></span>
        IA monitorando horários
      </p>
    </div>
  );
}
