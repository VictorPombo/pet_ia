"use client";

import React from "react";
import { Plus, Syringe, CalendarClock, ShieldCheck } from "lucide-react";

export default function VaccinesPage() {
  const vaccines = [
    {
      id: 1,
      name: "Múltipla (V10)",
      lastDose: "15 Mai 2025",
      nextDose: "15 Mai 2026",
      status: "warning", // Próximo de vencer
    },
    {
      id: 2,
      name: "Raiva",
      lastDose: "20 Ago 2025",
      nextDose: "20 Ago 2026",
      status: "ok",
    },
    {
      id: 3,
      name: "Gripe Canina",
      lastDose: "10 Nov 2025",
      nextDose: "10 Nov 2026",
      status: "ok",
    },
    {
      id: 4,
      name: "Giárdia",
      lastDose: "05 Fev 2026",
      nextDose: "05 Fev 2027",
      status: "ok",
    },
    {
      id: 5,
      name: "Leishmaniose",
      lastDose: "12 Mar 2024",
      nextDose: "12 Mar 2025",
      status: "danger", // Vencida
    },
  ];

  return (
    <div className="flex flex-col">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-white">Controle de Vacinas</h2>
        <button className="flex items-center gap-2 px-4 py-2 bg-[#FF6B00] hover:bg-orange-600 text-white rounded-lg text-sm font-medium transition-colors">
          <Plus className="w-4 h-4" />
          <span className="hidden md:inline">Nova Vacina</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {vaccines.map((vac) => (
          <div 
            key={vac.id}
            className="bg-[#1A1A1A] p-5 rounded-xl border relative flex flex-col justify-between"
            style={{ 
              borderColor: vac.status === 'danger' ? 'rgba(239,68,68,0.3)' : vac.status === 'warning' ? 'rgba(249,115,22,0.3)' : 'rgba(255,255,255,0.06)'
            }}
          >
            {/* Status Badge */}
            {vac.status === 'warning' && (
              <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-[#F97316] animate-pulse" title="Vence em breve" />
            )}
            {vac.status === 'danger' && (
              <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-red-500 animate-pulse" title="Vencida!" />
            )}
            {vac.status === 'ok' && (
              <ShieldCheck className="absolute top-4 right-4 w-5 h-5 text-green-500 opacity-50" />
            )}

            <div className="mb-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-lg bg-white/[0.04] flex items-center justify-center">
                  <Syringe className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-white text-[16px] font-bold">{vac.name}</h3>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <div className="flex justify-between items-center border-b border-white/[0.04] pb-2">
                <span className="text-[#A0A0A0] text-sm">Última dose</span>
                <span className="text-white text-sm font-medium">{vac.lastDose}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[#A0A0A0] text-sm flex items-center gap-1">
                  <CalendarClock className="w-3.5 h-3.5" /> Próxima
                </span>
                <span 
                  className={`text-sm font-bold ${
                    vac.status === 'danger' ? 'text-red-500' : vac.status === 'warning' ? 'text-[#F97316]' : 'text-white'
                  }`}
                >
                  {vac.nextDose}
                </span>
              </div>
            </div>

            <button className="w-full mt-5 py-2 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-white text-sm font-medium transition-colors border border-white/[0.06]">
              Atualizar Dose
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
