"use client";

import React from 'react';
import Link from 'next/link';
import { Bone, Footprints, ShieldCheck, PlayCircle, Star } from 'lucide-react';

export default function TrainingPage() {
  const plans = [
    {
      id: "basico",
      title: "Básico e Obediência",
      description: "Comandos essenciais para o dia a dia e boa convivência.",
      progress: 40,
      lessons: 10,
      completed: 4,
      icon: Bone,
      color: "text-[#FF6B00]",
      bg: "bg-[#FF6B00]/10",
      border: "border-[#FF6B00]/30",
      active: true,
    },
    {
      id: "passeio",
      title: "Passeio Perfeito",
      description: "Aprenda a passear sem o cão puxar a guia e ignorar distrações.",
      progress: 0,
      lessons: 8,
      completed: 0,
      icon: Footprints,
      color: "text-blue-500",
      bg: "bg-blue-500/10",
      border: "border-blue-500/30",
      active: false,
    },
    {
      id: "avancado",
      title: "Truques Avançados",
      description: "Desafie a mente do seu cão com truques divertidos.",
      progress: 0,
      lessons: 15,
      completed: 0,
      icon: Star,
      color: "text-purple-500",
      bg: "bg-purple-500/10",
      border: "border-purple-500/30",
      active: false,
    }
  ];

  return (
    <div className="flex flex-col">
      
      {/* Hero Simples */}
      <div className="mb-10 p-8 rounded-2xl bg-gradient-to-r from-[#FF6B00]/20 to-transparent border border-[#FF6B00]/10 relative overflow-hidden">
        <div className="relative z-10">
          <h1 className="text-3xl font-bold text-white mb-2">Planos de Adestramento</h1>
          <p className="text-[#A0A0A0] max-w-lg">
            Aulas personalizadas baseadas no perfil comportamental do seu pet. Siga os planos para melhorar a convivência e a disciplina.
          </p>
        </div>
        <ShieldCheck className="absolute -right-4 -bottom-10 w-48 h-48 text-[#FF6B00] opacity-10" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {plans.map((plan) => (
          <Link 
            href={`/training/${plan.id}`} 
            key={plan.id}
            className="flex flex-col bg-[#1A1A1A] p-6 rounded-xl border border-white/[0.06] hover:bg-white/[0.02] transition-all group relative overflow-hidden"
          >
            {/* Background Icon */}
            <plan.icon className={`absolute -right-4 -bottom-4 w-32 h-32 ${plan.color} opacity-5 group-hover:opacity-10 group-hover:scale-110 transition-all`} />
            
            <div className="flex items-center gap-4 mb-4 relative z-10">
              <div className={`w-12 h-12 rounded-xl ${plan.bg} border ${plan.border} flex items-center justify-center`}>
                <plan.icon className={`w-6 h-6 ${plan.color}`} />
              </div>
              {plan.active && (
                <span className="px-2 py-1 rounded bg-[#22C55E]/10 text-[#22C55E] text-[10px] font-bold uppercase tracking-wider border border-[#22C55E]/20">
                  Em andamento
                </span>
              )}
            </div>
            
            <div className="relative z-10 mb-6 flex-1">
              <h2 className="text-xl font-bold text-white mb-1">{plan.title}</h2>
              <p className="text-[#A0A0A0] text-sm">{plan.description}</p>
            </div>

            <div className="relative z-10">
              <div className="flex justify-between items-center mb-2">
                <span className="text-white text-sm font-bold">{plan.progress}% concluído</span>
                <span className="text-[#A0A0A0] text-xs">{plan.completed} de {plan.lessons} aulas</span>
              </div>
              <div className="w-full h-1.5 bg-white/[0.06] rounded-full overflow-hidden mb-4">
                <div className={`h-full ${plan.color.replace('text', 'bg')} rounded-full`} style={{ width: `${plan.progress}%` }} />
              </div>
              <div className="flex items-center gap-2 text-[#FF6B00] text-sm font-medium group-hover:translate-x-1 transition-transform">
                <PlayCircle className="w-4 h-4" />
                Acessar plano
              </div>
            </div>
          </Link>
        ))}
      </div>

    </div>
  );
}
