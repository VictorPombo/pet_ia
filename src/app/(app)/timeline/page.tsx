"use client";

import React from "react";
import { Plus, ChevronDown } from "lucide-react";
import Image from "next/image";

type TimelineCategory = 'aniversario' | 'peso' | 'vacina' | 'vet' | 'habilidade' | 'momento';

export default function TimelinePage() {
  const events = [
    {
      id: 1,
      date: "20 Maio 2026",
      type: "habilidade" as TimelineCategory,
      title: "Aprendeu a dar a pata!",
      desc: "Depois de 3 dias de treino com petisco, Apollo finalmente entendeu o comando 'pata'.",
      image: null,
    },
    {
      id: 2,
      date: "12 Maio 2026",
      type: "momento" as TimelineCategory,
      title: "Primeira ida ao parque",
      desc: "Ele ficou com medo dos outros cachorros no começo, mas depois brincou bastante.",
      image: "/images/hero-dog.png", // Usando a mesma imagem placeholder
    },
    {
      id: 3,
      date: "05 Maio 2026",
      type: "vacina" as TimelineCategory,
      title: "Vacina V10 Completa",
      desc: "Última dose da V10 aplicada na clínica. Ele se comportou super bem.",
      image: null,
    },
    {
      id: 4,
      date: "10 Abril 2026",
      type: "peso" as TimelineCategory,
      title: "Pesagem mensal: 12kg",
      desc: "Ganhamos 1kg desde o mês passado. O veterinário disse que está no peso ideal para a idade.",
      image: null,
    },
    {
      id: 5,
      date: "15 Março 2026",
      type: "aniversario" as TimelineCategory,
      title: "Apollo chegou em casa! 🏠",
      desc: "O primeiro dia do nosso filhote na casa nova. Muito choro a noite, mas muito amor.",
      image: null,
    }
  ];

  const getBadgeStyle = (t: TimelineCategory) => {
    switch (t) {
      case 'aniversario': return { label: '🎂 Aniversário', style: 'bg-[rgba(236,72,153,0.1)] text-[#EC4899]' };
      case 'peso': return { label: '⚖ Peso', style: 'bg-[rgba(59,130,246,0.1)] text-[#3B82F6]' };
      case 'vacina': return { label: '💉 Vacina', style: 'bg-[rgba(34,197,94,0.1)] text-[#22C55E]' };
      case 'vet': return { label: '🏥 Vet', style: 'bg-[rgba(239,68,68,0.1)] text-[#EF4444]' };
      case 'habilidade': return { label: '🐾 Habilidade', style: 'bg-[rgba(255,107,0,0.1)] text-[#FF6B00]' };
      case 'momento': return { label: '📸 Momento', style: 'bg-[rgba(128,128,128,0.1)] text-[#A0A0A0]' };
    }
  };

  return (
    <div className="flex flex-col">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <h1 className="text-[22px] font-bold text-white">Timeline</h1>
        
        <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
          <button className="flex items-center gap-2 px-3 py-2 bg-transparent border border-white/[0.1] rounded-lg text-sm text-white hover:bg-white/[0.05]">
            Filtrar por <ChevronDown className="w-4 h-4 text-[#808080]" />
          </button>
          
          <button className="flex items-center gap-1 px-4 py-2 bg-[#FF6B00] hover:bg-orange-600 text-white rounded-lg text-sm font-medium transition-colors ml-auto md:ml-0">
            Adicionar momento <Plus className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Layout vertical com linha */}
      <div className="max-w-[700px] w-full mx-auto relative pb-10">
        
        {/* Linha vertical */}
        <div className="absolute left-[16px] top-2 bottom-0 w-[2px] bg-white/[0.06] z-0" />

        {/* Eventos */}
        {events.map((event) => {
          const badge = getBadgeStyle(event.type);
          
          return (
            <div key={event.id} className="ml-[16px] pl-[32px] mb-8 relative z-10">
              
              {/* Bolinha na linha */}
              <div className="absolute left-[-8px] top-[6px] w-[14px] h-[14px] rounded-full bg-[#FF6B00] border-2 border-[#0A0A0A]" />

              {/* Conteúdo */}
              <div className="flex flex-col">
                <span className="text-[13px] text-[#808080] mb-2">{event.date}</span>
                
                <div className="flex items-center mb-3">
                  <span className={`text-[11px] font-bold px-2.5 py-1 rounded-[10px] ${badge.style}`}>
                    {badge.label}
                  </span>
                </div>

                <h3 className="text-[16px] font-bold text-white mb-1.5 leading-tight">{event.title}</h3>
                <p className="text-[14px] text-[#808080] leading-relaxed">{event.desc}</p>

                {event.image && (
                  <div className="mt-3 relative w-full h-[200px] sm:h-[280px] rounded-xl overflow-hidden border border-white/[0.04]">
                    <Image 
                      src={event.image} 
                      alt="Momento"
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
              </div>

            </div>
          );
        })}

      </div>

    </div>
  );
}
