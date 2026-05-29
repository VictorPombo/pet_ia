"use client";

import React, { useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, PlayCircle, Clock, ChevronDown, ChevronUp } from "lucide-react";

export default function TrainingPlanPage() {
  const params = useParams();
  const planId = params.planId as string;
  
  // Fake data for UI structure
  const planInfo = {
    title: "Básico e Obediência",
    description: "Comandos essenciais para o dia a dia e boa convivência.",
    lessonsCount: 10,
    completedCount: 4,
  };

  const [lessons, setLessons] = useState([
    { id: 1, title: "1. Como ensinar a sentar", duration: "10 min", difficulty: "Fácil", completed: true, desc: "Aprenda a técnica do petisco guiado para fazer seu cão sentar naturalmente." },
    { id: 2, title: "2. Fica e Espera", duration: "15 min", difficulty: "Fácil", completed: true, desc: "Ensine o cão a controlar o impulso e esperar o comando de liberação." },
    { id: 3, title: "3. Dar a pata", duration: "10 min", difficulty: "Fácil", completed: true, desc: "Truque simples que ajuda na conexão e no exame veterinário das patas." },
    { id: 4, title: "4. Deitar sob comando", duration: "15 min", difficulty: "Médio", completed: true, desc: "A partir da posição sentada, ensine-o a deitar de forma relaxada." },
    { id: 5, title: "5. Vir quando chamado (Recall)", duration: "20 min", difficulty: "Médio", completed: false, desc: "O comando mais importante para a segurança do seu pet solto." },
    { id: 6, title: "6. Largar objetos", duration: "15 min", difficulty: "Médio", completed: false, desc: "Como trocar um objeto que ele pegou por algo de maior valor." },
  ]);

  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleLesson = (id: number) => {
    setLessons(lessons.map(l => l.id === id ? { ...l, completed: !l.completed } : l));
  };

  return (
    <div className="flex flex-col max-w-4xl mx-auto">
      
      {/* Topo / Voltar */}
      <Link href="/training" className="inline-flex items-center gap-2 text-[#A0A0A0] hover:text-white transition-colors mb-6 text-sm font-medium">
        <ArrowLeft className="w-4 h-4" />
        Voltar para planos
      </Link>

      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">{planInfo.title}</h1>
          <p className="text-[#A0A0A0]">{planInfo.description}</p>
        </div>
        <div className="bg-[#1A1A1A] border border-white/[0.06] rounded-xl px-4 py-3 flex items-center gap-4">
          <div className="flex flex-col">
            <span className="text-[#A0A0A0] text-xs">Progresso</span>
            <span className="text-white text-sm font-bold">{planInfo.completedCount} de {planInfo.lessonsCount}</span>
          </div>
          <div className="w-24 h-2 bg-white/[0.06] rounded-full overflow-hidden">
            <div className="h-full bg-[#FF6B00] rounded-full" style={{ width: `${(planInfo.completedCount / planInfo.lessonsCount) * 100}%` }} />
          </div>
        </div>
      </div>

      {/* Lista de Aulas */}
      <div className="flex flex-col gap-4">
        {lessons.map((lesson) => {
          const isExpanded = expandedId === lesson.id;
          
          return (
            <div 
              key={lesson.id} 
              className={`bg-[#1A1A1A] rounded-xl border transition-colors overflow-hidden ${lesson.completed ? 'border-[#22C55E]/30' : 'border-white/[0.06] hover:border-white/[0.1]'}`}
            >
              <div 
                className="flex items-center gap-4 p-5 cursor-pointer"
                onClick={() => setExpandedId(isExpanded ? null : lesson.id)}
              >
                {/* Status Icon */}
                <button 
                  onClick={(e) => { e.stopPropagation(); toggleLesson(lesson.id); }}
                  className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors border-2 ${lesson.completed ? 'bg-[#22C55E] border-[#22C55E]' : 'border-[#444] hover:border-[#FF6B00]'}`}
                >
                  {lesson.completed && <CheckCircle2 className="w-5 h-5 text-white" />}
                </button>

                {/* Info */}
                <div className="flex-1 flex flex-col md:flex-row md:items-center justify-between gap-2">
                  <h3 className={`text-[16px] font-bold ${lesson.completed ? 'text-[#A0A0A0] line-through' : 'text-white'}`}>
                    {lesson.title}
                  </h3>
                  <div className="flex items-center gap-3 text-xs font-medium text-[#A0A0A0]">
                    <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {lesson.duration}</span>
                    <span className="w-1 h-1 rounded-full bg-[#444]" />
                    <span className={`${lesson.difficulty === 'Fácil' ? 'text-green-500' : 'text-yellow-500'}`}>{lesson.difficulty}</span>
                  </div>
                </div>

                {/* Toggle Arrow */}
                <button className="text-[#666]">
                  {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                </button>
              </div>

              {/* Expanded Area */}
              {isExpanded && (
                <div className="p-5 pt-0 pl-[68px] border-t border-white/[0.04]">
                  <p className="text-[#A0A0A0] text-sm leading-relaxed mb-4">{lesson.desc}</p>
                  {!lesson.completed && (
                    <button 
                      onClick={() => toggleLesson(lesson.id)}
                      className="flex items-center gap-2 px-5 py-2.5 bg-[#FF6B00] hover:bg-orange-600 text-white rounded-lg text-sm font-medium transition-colors"
                    >
                      <PlayCircle className="w-4 h-4" />
                      Começar Aula
                    </button>
                  )}
                </div>
              )}

            </div>
          );
        })}
      </div>

    </div>
  );
}
