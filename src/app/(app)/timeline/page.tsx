"use client";

import React, { useState } from 'react';
import { Plus, Camera, Cake, TrendingUp, Syringe, Stethoscope, Medal, Image as ImageIcon } from 'lucide-react';

export default function TimelinePage() {
  const events = [
    {
      id: 1,
      type: 'photo',
      title: "Nova caminha!",
      desc: "Apollo amou a caminha nova que compramos na Petz.",
      date: "14 de Maio de 2026",
      icon: Camera,
      color: "bg-purple-500",
      image: true
    },
    {
      id: 2,
      type: 'weight',
      title: "Pesagem mensal",
      desc: "32.4 kg. O veterinário disse que o peso está ideal para a idade e porte.",
      date: "10 de Maio de 2026",
      icon: TrendingUp,
      color: "bg-blue-500",
      image: false
    },
    {
      id: 3,
      type: 'vaccine',
      title: "Vacina V10",
      desc: "Tomou a dose anual da Múltipla. Ficou um pouco quieto à tarde mas depois melhorou.",
      date: "05 de Maio de 2026",
      icon: Syringe,
      color: "bg-green-500",
      image: false
    },
    {
      id: 4,
      type: 'birthday',
      title: "Aniversário de 3 anos! 🎉",
      desc: "Fizemos um bolinho de carne e ele devorou em 5 segundos.",
      date: "12 de Abril de 2026",
      icon: Cake,
      color: "bg-primary",
      image: true
    },
    {
      id: 5,
      type: 'vet',
      title: "Check-up Anual",
      desc: "Tudo certo com os exames de sangue. Coração forte!",
      date: "10 de Abril de 2026",
      icon: Stethoscope,
      color: "bg-cyan-500",
      image: false
    },
    {
      id: 6,
      type: 'skill',
      title: "Aprendeu a dar a pata!",
      desc: "Finalmente conseguimos ensinar o 'Dar a pata' usando petiscos de frango.",
      date: "20 de Março de 2026",
      icon: Medal,
      color: "bg-yellow-500",
      image: false
    }
  ];

  return (
    <div className="flex flex-col gap-6 animate-fade-in pb-24 md:pb-0">
      
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white font-display mb-1">Timeline</h1>
          <p className="text-text-muted text-sm">A história do Apollo em um álbum cronológico.</p>
        </div>
        <button className="btn-primary py-2 px-4 text-sm">
          <Plus className="w-4 h-4" />
          Novo Momento
        </button>
      </div>

      <div className="flex gap-2 overflow-x-auto scrollbar-none pb-2 mb-4">
        <button className="px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap bg-white text-black">Todos</button>
        <button className="px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap bg-surface border border-border-glass text-text-muted flex items-center gap-2"><ImageIcon className="w-4 h-4" /> Fotos</button>
        <button className="px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap bg-surface border border-border-glass text-text-muted flex items-center gap-2"><Stethoscope className="w-4 h-4" /> Saúde</button>
        <button className="px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap bg-surface border border-border-glass text-text-muted flex items-center gap-2"><Medal className="w-4 h-4" /> Conquistas</button>
      </div>

      {/* Timeline List */}
      <div className="relative pl-6 md:pl-8 max-w-3xl">
        
        {/* Vertical Line */}
        <div className="absolute left-[39px] md:left-[47px] top-4 bottom-0 w-0.5 bg-border-glass z-0" />

        <div className="flex flex-col gap-8 relative z-10">
          {events.map((event) => (
            <div key={event.id} className="relative flex items-start gap-6">
              
              {/* Timeline Icon Node */}
              <div className={`w-10 h-10 rounded-full ${event.color} flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(0,0,0,0.5)] border-4 border-[#111111] z-10 relative`}>
                <event.icon className="w-4 h-4 text-white" />
              </div>
              
              {/* Event Content */}
              <div className="flex-1 glass-card overflow-hidden hover:border-primary/30 transition-colors">
                {event.image && (
                  <div className="w-full h-48 bg-[#2A2A2A] relative flex items-center justify-center border-b border-border-glass group cursor-pointer overflow-hidden">
                    <div className="absolute inset-0 bg-primary/10 group-hover:scale-105 transition-transform" />
                    <ImageIcon className="w-10 h-10 text-text-muted opacity-50 relative z-10" />
                  </div>
                )}
                <div className="p-5 flex flex-col gap-2">
                  <div className="flex justify-between items-start gap-4">
                    <h3 className="text-lg font-bold text-white">{event.title}</h3>
                    <span className="text-xs text-text-muted whitespace-nowrap">{event.date}</span>
                  </div>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {event.desc}
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
      
    </div>
  );
}
