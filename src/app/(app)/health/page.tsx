"use client";

import React from "react";
import { Plus, CheckCircle2, AlertTriangle, Stethoscope, FileText } from "lucide-react";

export default function HealthHistoryPage() {
  const history = [
    {
      id: 1,
      date: "25 Mai 2026",
      type: "success",
      title: "Vacina Aplicada",
      description: "V10 aplicada na clínica PetCare.",
      icon: CheckCircle2,
      color: "text-green-500",
      borderColor: "border-green-500",
    },
    {
      id: 2,
      date: "12 Mai 2026",
      type: "alert",
      title: "Sintoma: Vômito",
      description: "Apollo vomitou 2 vezes de manhã. Observando.",
      icon: AlertTriangle,
      color: "text-orange-500",
      borderColor: "border-orange-500",
    },
    {
      id: 3,
      date: "01 Abr 2026",
      type: "info",
      title: "Consulta de Rotina",
      description: "Tudo normal. Peso mantido em 32kg.",
      icon: Stethoscope,
      color: "text-blue-500",
      borderColor: "border-blue-500",
    },
    {
      id: 4,
      date: "10 Jan 2026",
      type: "info",
      title: "Exame de Sangue",
      description: "Checkup anual. Valores dentro da normalidade.",
      icon: FileText,
      color: "text-blue-500",
      borderColor: "border-blue-500",
    },
  ];

  return (
    <div className="flex flex-col">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-white">Diário de Saúde</h2>
        <button className="flex items-center gap-2 px-4 py-2 bg-[#FF6B00] hover:bg-orange-600 text-white rounded-lg text-sm font-medium transition-colors">
          <Plus className="w-4 h-4" />
          <span className="hidden md:inline">Novo Registro</span>
        </button>
      </div>

      <div className="flex flex-col gap-6">
        {history.map((item) => (
          <div 
            key={item.id}
            className="flex flex-col md:flex-row md:items-center gap-4 bg-[#1A1A1A] p-4 rounded-xl border border-white/[0.06] border-l-4 shadow-sm"
            style={{ borderLeftColor: item.type === 'success' ? '#22C55E' : item.type === 'alert' ? '#F97316' : '#3B82F6' }}
          >
            <div className="flex items-center gap-3 md:w-[150px] shrink-0">
              <item.icon className={`w-5 h-5 ${item.color}`} />
              <span className="text-[#A0A0A0] text-sm font-medium">{item.date}</span>
            </div>
            <div className="flex-1">
              <h3 className="text-white text-[15px] font-bold">{item.title}</h3>
              <p className="text-[#A0A0A0] text-sm mt-1">{item.description}</p>
            </div>
            <button className="text-[#FF6B00] text-sm font-medium hover:underline self-start md:self-center">
              Ver mais
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
