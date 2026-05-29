"use client";

import React, { useState } from "react";
import { Check, Syringe, Pill, Droplets, Bug, Bone, Stethoscope } from "lucide-react";

type Priority = 'Baixa' | 'Média' | 'Alta' | 'Urgente';
type Category = 'vacina' | 'remedio' | 'banho' | 'antipulga' | 'racao' | 'consulta';

interface Alert {
  id: number;
  title: string;
  date: string;
  priority: Priority;
  category: Category;
  completed: boolean;
}

const mockAlerts: Alert[] = [
  { id: 1, title: 'Renovar receita do Simparic', date: 'Hoje, 14:00', priority: 'Urgente', category: 'remedio', completed: false },
  { id: 2, title: 'Vacina V10 (Reforço)', date: 'Amanhã, 10:00', priority: 'Alta', category: 'vacina', completed: false },
  { id: 3, title: 'Comprar ração Golden (15kg)', date: 'Em 3 dias', priority: 'Média', category: 'racao', completed: false },
  { id: 4, title: 'Consulta de retorno veterinário', date: 'Em 5 dias', priority: 'Média', category: 'consulta', completed: false },
  { id: 5, title: 'Banho e tosa', date: 'Na próxima semana', priority: 'Baixa', category: 'banho', completed: false },
  { id: 6, title: 'Antipulga mensal aplicado', date: 'Ontem', priority: 'Média', category: 'antipulga', completed: true },
];

export default function AlertsPage() {
  const [filter, setFilter] = useState<'Todos' | 'Pendentes' | 'Concluídos'>('Todos');
  const [alerts, setAlerts] = useState<Alert[]>(mockAlerts);

  const toggleComplete = (id: number) => {
    setAlerts(alerts.map(a => a.id === id ? { ...a, completed: !a.completed } : a));
  };

  const getPriorityStyle = (p: Priority) => {
    switch (p) {
      case 'Baixa': return 'bg-[rgba(128,128,128,0.1)] text-[#808080]';
      case 'Média': return 'bg-[rgba(59,130,246,0.1)] text-[#3B82F6]';
      case 'Alta': return 'bg-[rgba(255,107,0,0.1)] text-[#FF6B00]';
      case 'Urgente': return 'bg-[rgba(239,68,68,0.15)] text-[#EF4444]';
    }
  };

  const getCategoryIcon = (c: Category) => {
    switch (c) {
      case 'vacina': return <Syringe className="w-5 h-5 text-[#22C55E]" />;
      case 'remedio': return <Pill className="w-5 h-5 text-[#3B82F6]" />;
      case 'banho': return <Droplets className="w-5 h-5 text-[#06B6D4]" />;
      case 'antipulga': return <Bug className="w-5 h-5 text-[#EAB308]" />;
      case 'racao': return <Bone className="w-5 h-5 text-[#FF6B00]" />;
      case 'consulta': return <Stethoscope className="w-5 h-5 text-[#EF4444]" />;
    }
  };

  const getCategoryBg = (c: Category) => {
    switch (c) {
      case 'vacina': return 'bg-[rgba(34,197,94,0.1)]';
      case 'remedio': return 'bg-[rgba(59,130,246,0.1)]';
      case 'banho': return 'bg-[rgba(6,182,212,0.1)]';
      case 'antipulga': return 'bg-[rgba(234,179,8,0.1)]';
      case 'racao': return 'bg-[rgba(255,107,0,0.1)]';
      case 'consulta': return 'bg-[rgba(239,68,68,0.1)]';
    }
  };

  // Ordena para manter os urgentes pendentes no topo
  const sortedAlerts = [...alerts].sort((a, b) => {
    if (!a.completed && a.priority === 'Urgente' && (b.completed || b.priority !== 'Urgente')) return -1;
    if (!b.completed && b.priority === 'Urgente' && (a.completed || a.priority !== 'Urgente')) return 1;
    return 0;
  });

  const filteredAlerts = sortedAlerts.filter(a => {
    if (filter === 'Pendentes') return !a.completed;
    if (filter === 'Concluídos') return a.completed;
    return true;
  });

  return (
    <div className="flex flex-col">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between mb-6 gap-4">
        <h1 className="text-[22px] font-bold text-white">Alertas</h1>
        
        {/* Filtros */}
        <div className="flex gap-2 flex-wrap">
          {['Todos', 'Pendentes', 'Concluídos'].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f as any)}
              className={`px-4 py-1.5 rounded-full text-[13px] font-medium transition-colors ${
                filter === f 
                  ? 'bg-[rgba(255,107,0,0.15)] border border-[rgba(255,107,0,0.3)] text-white' 
                  : 'bg-transparent border border-[rgba(255,255,255,0.08)] text-[#808080] hover:text-white'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Lista */}
      <div className="flex flex-col">
        {filteredAlerts.map(alert => (
          <div 
            key={alert.id}
            className={`flex items-center gap-4 p-4 md:px-5 md:py-4 bg-[#1A1A1A] rounded-xl mb-2 border ${
              !alert.completed && alert.priority === 'Urgente' 
                ? 'border-transparent border-l-[3px] border-l-[#EF4444]' 
                : 'border-transparent'
            }`}
          >
            {/* Ícone */}
            <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${getCategoryBg(alert.category)}`}>
              {getCategoryIcon(alert.category)}
            </div>

            {/* Texto */}
            <div className="flex-1 flex flex-col min-w-0">
              <span className={`text-[15px] font-bold truncate ${alert.completed ? 'text-[#808080] line-through' : 'text-white'}`}>
                {alert.title}
              </span>
              <span className="text-[13px] text-[#808080]">
                {alert.date}
              </span>
            </div>

            {/* Badge (hide on small screens if completed) */}
            {!alert.completed && (
              <div className={`hidden sm:flex px-2.5 py-1 rounded-xl text-[11px] font-bold uppercase tracking-wider ${getPriorityStyle(alert.priority)}`}>
                {alert.priority}
              </div>
            )}

            {/* Botão */}
            <button
              onClick={() => toggleComplete(alert.id)}
              className={`w-9 h-9 rounded-lg border border-[rgba(255,255,255,0.1)] flex items-center justify-center shrink-0 transition-colors ${
                alert.completed 
                  ? 'bg-[#22C55E] border-transparent text-white' 
                  : 'bg-transparent text-[#808080] hover:bg-[#22C55E] hover:border-transparent hover:text-white'
              }`}
            >
              <Check className="w-5 h-5" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
