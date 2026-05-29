"use client";

import React from "react";
import { Plus } from "lucide-react";

type Category = 'Passeio' | 'Alimentação' | 'Descanso' | 'Brincadeira' | 'Treino' | 'Higiene' | 'Medicação';

const categoryColors: Record<Category, string> = {
  'Passeio': '#FF6B00',
  'Alimentação': '#22C55E',
  'Descanso': '#1E40AF',
  'Brincadeira': '#EAB308',
  'Treino': '#7C3AED',
  'Higiene': '#06B6D4',
  'Medicação': '#EF4444'
};

const weekDays = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'];

const generateMockActivities = (dayIndex: number) => {
  return [
    { id: `1-${dayIndex}`, time: '07:00', name: 'Passeio matinal', duration: '30 min', category: 'Passeio' as Category },
    { id: `2-${dayIndex}`, time: '08:00', name: 'Café da manhã', duration: '10 min', category: 'Alimentação' as Category },
    { id: `3-${dayIndex}`, time: '10:00', name: 'Brincadeira', duration: '15 min', category: 'Brincadeira' as Category },
    { id: `4-${dayIndex}`, time: '14:00', name: 'Treino de foco', duration: '15 min', category: 'Treino' as Category },
    { id: `5-${dayIndex}`, time: '19:00', name: 'Passeio noturno', duration: '40 min', category: 'Passeio' as Category },
    { id: `6-${dayIndex}`, time: '20:00', name: 'Jantar', duration: '10 min', category: 'Alimentação' as Category },
    { id: `7-${dayIndex}`, time: '21:00', name: 'Escovar dentes', duration: '5 min', category: 'Higiene' as Category },
    { id: `8-${dayIndex}`, time: '22:00', name: 'Dormir', duration: '8h', category: 'Descanso' as Category },
  ];
};

export default function RoutinePage() {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">
        <h1 className="text-[22px] font-bold text-white">Rotina semanal</h1>
        <button className="flex items-center justify-center gap-2 px-4 py-2 bg-[#FF6B00] hover:bg-orange-600 text-white rounded-lg text-sm font-medium transition-colors w-full md:w-auto">
          Adicionar atividade <Plus className="w-4 h-4" />
        </button>
      </div>

      {/* Grade semanal */}
      <div className="grid grid-cols-1 md:grid-cols-7 gap-2">
        {weekDays.map((day, idx) => (
          <div key={day} className="flex flex-col">
            <div className="text-center text-[#808080] text-[13px] font-bold py-2 mb-2">
              {day}
            </div>
            <div className="flex flex-col gap-[6px]">
              {generateMockActivities(idx).map((act) => (
                <div 
                  key={act.id} 
                  className="bg-[#1A1A1A] rounded-lg p-[10px] flex flex-col gap-1 border-l-[3px]"
                  style={{ borderLeftColor: categoryColors[act.category] }}
                >
                  <span className="text-[#808080] text-[11px]">{act.time}</span>
                  <span className="text-white text-[13px] font-medium leading-tight">{act.name}</span>
                  <span className="text-[#808080] text-[11px]">{act.duration}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
