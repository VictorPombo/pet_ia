"use client";

import React, { useState } from 'react';
import { Plus, Footprints, Bone, Moon, Activity, Brain, Bath, Pill } from 'lucide-react';

export default function RoutinePage() {
  // Mock data states to simulate toggle
  const [routines, setRoutines] = useState([
    { id: 1, time: '07:00', title: 'Passeio Matinal', duration: '30 min', type: 'walk', active: true },
    { id: 2, time: '08:00', title: 'Café da manhã', duration: '150g', type: 'food', active: true },
    { id: 3, time: '08:15', title: 'Bravecto', duration: '1 comp', type: 'med', active: false },
    { id: 4, time: '13:00', title: 'Soneca da tarde', duration: '3 horas', type: 'rest', active: true },
    { id: 5, time: '16:00', title: 'Treino Básico', duration: '15 min', type: 'train', active: true },
    { id: 6, time: '18:00', title: 'Passeio Noturno', duration: '20 min', type: 'walk', active: true },
    { id: 7, time: '19:00', title: 'Jantar', duration: '200g', type: 'food', active: true },
    { id: 8, time: '20:00', title: 'Escovar os pelos', duration: '10 min', type: 'hygiene', active: true },
  ]);

  const toggleRoutine = (id: number) => {
    setRoutines(prev => prev.map(r => r.id === id ? { ...r, active: !r.active } : r));
  };

  const getStyleForType = (type: string) => {
    switch(type) {
      case 'walk': return { color: 'text-orange-400', bg: 'bg-orange-500/10', border: 'border-orange-500/20', icon: Footprints };
      case 'food': return { color: 'text-green-400', bg: 'bg-green-500/10', border: 'border-green-500/20', icon: Bone };
      case 'rest': return { color: 'text-blue-400', bg: 'bg-blue-500/10', border: 'border-blue-500/20', icon: Moon };
      case 'play': return { color: 'text-yellow-400', bg: 'bg-yellow-500/10', border: 'border-yellow-500/20', icon: Activity };
      case 'train': return { color: 'text-purple-400', bg: 'bg-purple-500/10', border: 'border-purple-500/20', icon: Brain };
      case 'hygiene': return { color: 'text-cyan-400', bg: 'bg-cyan-500/10', border: 'border-cyan-500/20', icon: Bath };
      case 'med': return { color: 'text-red-400', bg: 'bg-red-500/10', border: 'border-red-500/20', icon: Pill };
      default: return { color: 'text-white', bg: 'bg-white/10', border: 'border-white/20', icon: Footprints };
    }
  };

  return (
    <div className="flex flex-col gap-6 animate-fade-in pb-24 md:pb-0">
      
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white font-display mb-1">Rotina</h1>
          <p className="text-text-muted text-sm">Grade semanal de atividades do pet.</p>
        </div>
        <button className="btn-primary py-2 px-4 text-sm">
          <Plus className="w-4 h-4" />
          Adicionar
        </button>
      </div>

      <div className="flex gap-2 mb-2 overflow-x-auto scrollbar-none pb-2">
        {['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'].map((day, i) => (
          <button key={i} className={`px-4 py-2 rounded-xl text-sm font-bold min-w-[60px] ${i === 2 ? 'bg-primary text-white' : 'bg-surface border border-border-glass text-text-muted'}`}>
            {day}
          </button>
        ))}
      </div>

      <div className="glass-card p-6">
        <div className="relative border-l-2 border-border-glass ml-4 flex flex-col gap-8">
          
          {routines.map((routine) => {
            const style = getStyleForType(routine.type);
            const Icon = style.icon;
            
            return (
              <div key={routine.id} className={`relative flex items-center gap-6 pl-8 transition-opacity ${routine.active ? 'opacity-100' : 'opacity-40'}`}>
                {/* Timeline Dot */}
                <div className={`absolute -left-[11px] w-5 h-5 rounded-full border-4 border-surface ${routine.active ? 'bg-primary' : 'bg-text-muted'}`} />
                
                <div className="w-16 shrink-0 text-text-muted font-bold">
                  {routine.time}
                </div>
                
                <div className={`flex-1 rounded-xl p-4 flex justify-between items-center ${style.bg} border ${style.border}`}>
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-full bg-surface border border-border-glass flex items-center justify-center shrink-0`}>
                      <Icon className={`w-5 h-5 ${style.color}`} />
                    </div>
                    <div>
                      <h3 className={`font-bold ${routine.active ? 'text-white' : 'text-text-muted'}`}>{routine.title}</h3>
                      <p className="text-xs text-text-secondary">{routine.duration}</p>
                    </div>
                  </div>
                  
                  {/* Toggle Switch */}
                  <button 
                    onClick={() => toggleRoutine(routine.id)}
                    className={`w-12 h-6 rounded-full relative transition-colors ${routine.active ? 'bg-primary' : 'bg-surface border border-border-glass'}`}
                  >
                    <div className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-all ${routine.active ? 'left-7' : 'left-1 bg-text-muted'}`} />
                  </button>
                </div>
              </div>
            );
          })}

        </div>
      </div>
      
    </div>
  );
}
