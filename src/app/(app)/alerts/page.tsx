import React from 'react';
import { Syringe, Stethoscope, Droplet, Bath, CheckCircle } from 'lucide-react';

export default function AlertsPage() {
  const alerts = [
    {
      id: 1,
      title: "Vacina V10 (Múltipla)",
      time: "Vence em 3 dias",
      type: 'vaccine',
      priority: 'high',
      icon: Syringe,
      completed: false
    },
    {
      id: 2,
      title: "Antipulgas Bravecto",
      time: "Vence hoje",
      type: 'med',
      priority: 'urgent',
      icon: Droplet,
      completed: false
    },
    {
      id: 3,
      title: "Consulta de Retorno",
      time: "Amanhã, 14:00",
      type: 'vet',
      priority: 'medium',
      icon: Stethoscope,
      completed: false
    },
    {
      id: 4,
      title: "Banho no PetShop",
      time: "Sábado, 10:00",
      type: 'grooming',
      priority: 'low',
      icon: Bath,
      completed: false
    },
    {
      id: 5,
      title: "Vermífugo",
      time: "Concluído há 2 dias",
      type: 'med',
      priority: 'low',
      icon: Droplet,
      completed: true
    }
  ];

  const getPriorityStyle = (priority: string, completed: boolean) => {
    if (completed) return "bg-surface text-text-muted border-border-glass";
    switch(priority) {
      case 'urgent': return "bg-red-500/10 text-red-500 border-red-500/20 animate-pulse";
      case 'high': return "bg-orange-500/10 text-orange-500 border-orange-500/20";
      case 'medium': return "bg-blue-500/10 text-blue-400 border-blue-500/20";
      case 'low': return "bg-surface-hover text-text-muted border-border-glass";
      default: return "bg-surface-hover text-text-muted border-border-glass";
    }
  };

  const getPriorityLabel = (priority: string) => {
    switch(priority) {
      case 'urgent': return "Urgente";
      case 'high': return "Alta";
      case 'medium': return "Média";
      case 'low': return "Baixa";
      default: return "Normal";
    }
  };

  return (
    <div className="flex flex-col gap-6 animate-fade-in pb-24 md:pb-0">
      
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white font-display mb-1">Alertas</h1>
          <p className="text-text-muted text-sm">Notificações e lembretes para não esquecer nada.</p>
        </div>
      </div>

      <div className="flex gap-2 overflow-x-auto scrollbar-none pb-2">
        <button className="px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap bg-white text-black">Todos</button>
        <button className="px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap bg-surface border border-border-glass text-text-muted">Pendentes</button>
        <button className="px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap bg-surface border border-border-glass text-text-muted">Concluídos</button>
      </div>

      <div className="flex flex-col gap-3">
        {alerts.map((alert) => (
          <div key={alert.id} className={`glass-card p-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 transition-all ${alert.completed ? 'opacity-50' : 'hover:border-primary/30'}`}>
            <div className="flex items-center gap-4">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 border ${alert.completed ? 'bg-surface border-border-glass text-text-muted' : 'bg-surface border-border-glass text-white'}`}>
                <alert.icon className="w-6 h-6" />
              </div>
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <h3 className={`font-bold ${alert.completed ? 'text-text-muted line-through' : 'text-white'}`}>{alert.title}</h3>
                  <span className={`px-2 py-0.5 rounded text-[10px] font-bold border uppercase tracking-wider ${getPriorityStyle(alert.priority, alert.completed)}`}>
                    {alert.completed ? 'Concluído' : getPriorityLabel(alert.priority)}
                  </span>
                </div>
                <p className="text-sm text-text-secondary font-medium">{alert.time}</p>
              </div>
            </div>
            {!alert.completed && (
              <button className="btn-secondary py-2 px-4 text-sm w-full md:w-auto flex items-center gap-2 border-primary/20 hover:border-primary/50 text-white">
                <CheckCircle className="w-4 h-4 text-primary" />
                Concluir
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
