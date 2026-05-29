"use client";

import React from "react";
import { Plus, Pill, Clock, CalendarDays, CheckCircle2 } from "lucide-react";

export default function MedicationsPage() {
  const continuousMeds = [
    {
      id: 1,
      name: "Condroitina & Glicosamina",
      dosage: "1 comprimido",
      frequency: "1x ao dia",
      time: "08:00",
      next: "Amanhã",
      icon: Pill,
    },
    {
      id: 2,
      name: "Simparic 20kg",
      dosage: "1 comprimido",
      frequency: "A cada 35 dias",
      time: "Livre",
      next: "12 Jun 2026",
      icon: CheckCircle2,
    }
  ];

  const temporaryMeds = [
    {
      id: 3,
      name: "Amoxicilina 500mg",
      dosage: "1/2 comprimido",
      frequency: "De 12 em 12h",
      time: "08:00 e 20:00",
      duration: "7 dias (Faltam 3)",
      next: "Hoje, 20:00",
      icon: Clock,
      progress: 60, // 60% concluído
    }
  ];

  return (
    <div className="flex flex-col gap-8">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold text-white">Medicações</h2>
        <button className="flex items-center gap-2 px-4 py-2 bg-[#FF6B00] hover:bg-orange-600 text-white rounded-lg text-sm font-medium transition-colors">
          <Plus className="w-4 h-4" />
          <span className="hidden md:inline">Novo Medicamento</span>
        </button>
      </div>

      {/* Uso Contínuo */}
      <div>
        <h3 className="text-[#A0A0A0] text-sm font-bold uppercase tracking-wider mb-4">Uso Contínuo / Prevenção</h3>
        <div className="flex flex-col gap-4">
          {continuousMeds.map((med) => (
            <div key={med.id} className="flex flex-col md:flex-row md:items-center justify-between p-5 bg-[#1A1A1A] rounded-xl border border-white/[0.06] gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/[0.04] flex items-center justify-center border border-white/[0.06] shrink-0">
                  <med.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-white text-[16px] font-bold">{med.name}</h4>
                  <p className="text-[#A0A0A0] text-sm">{med.dosage}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-8 md:gap-12 bg-white/[0.02] p-3 rounded-lg border border-white/[0.04] md:border-none md:bg-transparent md:p-0">
                <div className="flex flex-col">
                  <span className="text-[#666] text-xs">Frequência</span>
                  <span className="text-white text-sm font-medium">{med.frequency}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[#666] text-xs">Horário</span>
                  <span className="text-white text-sm font-medium">{med.time}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[#666] text-xs">Próxima dose</span>
                  <span className="text-[#FF6B00] text-sm font-bold">{med.next}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tratamento Temporário */}
      <div>
        <h3 className="text-[#A0A0A0] text-sm font-bold uppercase tracking-wider mb-4">Tratamentos em Andamento</h3>
        <div className="flex flex-col gap-4">
          {temporaryMeds.map((med) => (
            <div key={med.id} className="flex flex-col p-5 bg-[#1A1A1A] rounded-xl border border-[#3B82F6]/30 gap-4 relative overflow-hidden">
              <div className="absolute top-0 left-0 bottom-0 w-1 bg-[#3B82F6]" />
              
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#3B82F6]/10 flex items-center justify-center shrink-0">
                    <med.icon className="w-6 h-6 text-[#3B82F6]" />
                  </div>
                  <div>
                    <h4 className="text-white text-[16px] font-bold">{med.name}</h4>
                    <p className="text-[#A0A0A0] text-sm">{med.dosage}</p>
                  </div>
                </div>

                <div className="flex items-center gap-8 md:gap-12 bg-[#3B82F6]/5 p-3 rounded-lg border border-[#3B82F6]/10 md:border-none md:bg-transparent md:p-0">
                  <div className="flex flex-col">
                    <span className="text-[#666] text-xs">Frequência</span>
                    <span className="text-white text-sm font-medium">{med.frequency}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[#666] text-xs">Duração</span>
                    <span className="text-white text-sm font-medium">{med.duration}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[#666] text-xs">Próxima dose</span>
                    <span className="text-[#3B82F6] text-sm font-bold">{med.next}</span>
                  </div>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mt-2">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-[#A0A0A0] text-xs">Progresso do tratamento</span>
                  <span className="text-[#A0A0A0] text-xs font-bold">{med.progress}%</span>
                </div>
                <div className="w-full h-1.5 bg-white/[0.06] rounded-full overflow-hidden">
                  <div className="h-full bg-[#3B82F6] rounded-full" style={{ width: `${med.progress}%` }} />
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
