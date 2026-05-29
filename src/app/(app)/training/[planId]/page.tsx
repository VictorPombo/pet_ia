"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useParams } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft, Check, Play, Clock, ChevronDown, ChevronUp,
  Dog, Home, Footprints, Brain, Star,
} from "lucide-react";

const planData: Record<string, {
  title: string;
  description: string;
  gradient: string;
  icon: React.ElementType;
  lessons: Array<{ name: string; description: string; duration: number; difficulty: string; completed: boolean }>;
}> = {
  basic: {
    title: "Básico",
    description: "Comandos fundamentais para o dia a dia",
    gradient: "from-accent to-blue-400",
    icon: Dog,
    lessons: [
      { name: "Sentar", description: "Ensine seu pet a sentar sob comando. Use petiscos como reforço positivo.", duration: 10, difficulty: "Fácil", completed: true },
      { name: "Deitar", description: "A partir da posição sentado, guie o pet para deitar usando um petisco.", duration: 10, difficulty: "Fácil", completed: true },
      { name: "Ficar", description: "Ensine seu pet a permanecer parado por alguns segundos.", duration: 15, difficulty: "Fácil", completed: true },
      { name: "Vir quando chamado", description: "O recall é um dos comandos mais importantes. Pratique em ambiente controlado.", duration: 15, difficulty: "Médio", completed: false },
      { name: "Dar a pata", description: "Um comando divertido que fortalece o vínculo.", duration: 10, difficulty: "Fácil", completed: false },
      { name: "Largar/Soltar", description: "Essencial para segurança. Ensine a soltar objetos da boca.", duration: 15, difficulty: "Médio", completed: false },
      { name: "Não/Deixa", description: "Comando de inibição. Ensine a se afastar de algo proibido.", duration: 15, difficulty: "Médio", completed: false },
    ],
  },
  behavior: {
    title: "Comportamento",
    description: "Corrija hábitos e melhore a convivência",
    gradient: "from-success to-emerald-400",
    icon: Home,
    lessons: [
      { name: "Parar de latir excessivamente", description: "Identifique o gatilho do latido e use dessensibilização.", duration: 20, difficulty: "Difícil", completed: true },
      { name: "Ansiedade de separação", description: "Treine saídas curtas e progressivas.", duration: 25, difficulty: "Difícil", completed: false },
      { name: "Parar de destruir objetos", description: "Redirecione a energia para brinquedos apropriados.", duration: 20, difficulty: "Médio", completed: false },
      { name: "Socialização com outros cães", description: "Exposição gradual e positiva a outros cães.", duration: 30, difficulty: "Difícil", completed: false },
      { name: "Socialização com pessoas", description: "Apresente novas pessoas gradualmente.", duration: 20, difficulty: "Médio", completed: false },
      { name: "Não pular nas pessoas", description: "Ignore quando pular, recompense as 4 patas no chão.", duration: 15, difficulty: "Médio", completed: false },
      { name: "Aceitar manuseio", description: "Dessensibilize ao toque em patas, orelhas e boca.", duration: 15, difficulty: "Fácil", completed: false },
    ],
  },
  walk: {
    title: "Passeio",
    description: "Domine o passeio e a rua com seu pet",
    gradient: "from-warning to-amber-400",
    icon: Footprints,
    lessons: [
      { name: "Não puxar a guia", description: "Pare quando puxar, ande quando a guia estiver frouxa.", duration: 20, difficulty: "Médio", completed: true },
      { name: "Andar junto (heel)", description: "Ensine a andar ao seu lado esquerdo.", duration: 20, difficulty: "Médio", completed: false },
      { name: "Ignorar distrações", description: "Treine o foco mesmo com distrações ao redor.", duration: 25, difficulty: "Difícil", completed: false },
      { name: "Parar no meio-fio", description: "Pare automaticamente antes de atravessar.", duration: 15, difficulty: "Fácil", completed: false },
      { name: "Necessidades no lugar certo", description: "Estabeleça rotina de horários e locais.", duration: 15, difficulty: "Médio", completed: false },
      { name: "Comportamento com outros cães na rua", description: "Mantenha distância, redirecione atenção.", duration: 25, difficulty: "Difícil", completed: false },
    ],
  },
  advanced: {
    title: "Avançado",
    description: "Truques, agility e estímulos mentais",
    gradient: "from-purple to-violet-400",
    icon: Brain,
    lessons: [
      { name: "Rolar", description: "A partir do deitar, guie para rolar com petisco circular.", duration: 15, difficulty: "Médio", completed: false },
      { name: "Dar tchau/acenar", description: "Extensão do dar a pata — levantar e movimentar.", duration: 15, difficulty: "Médio", completed: false },
      { name: "Buscar e trazer", description: "O fetch completo: ir, pegar, trazer e soltar.", duration: 20, difficulty: "Médio", completed: false },
      { name: "Finge de morto (bang)", description: "Ao 'bang', deita de lado e fica parado.", duration: 20, difficulty: "Difícil", completed: false },
      { name: "Circuito de agilidade", description: "Circuito simples com cones, túneis e saltos.", duration: 30, difficulty: "Difícil", completed: false },
      { name: "Estímulo mental com puzzles", description: "Brinquedos puzzle e jogos de farejar.", duration: 20, difficulty: "Fácil", completed: false },
      { name: "Identificar brinquedos por nome", description: "Buscar brinquedos específicos pelo nome.", duration: 25, difficulty: "Difícil", completed: false },
    ],
  },
};

const difficultyColors: Record<string, string> = {
  "Fácil": "bg-success/10 text-success",
  "Médio": "bg-warning/10 text-warning",
  "Difícil": "bg-error/10 text-error",
};

export default function TrainingPlanPage() {
  const params = useParams();
  const planId = params.planId as string;
  const plan = planData[planId];
  const [expandedLesson, setExpandedLesson] = useState<number | null>(null);
  const [lessons, setLessons] = useState(plan?.lessons || []);

  if (!plan) {
    return (
      <div className="text-center py-20">
        <p className="text-text-secondary">Plano não encontrado</p>
        <Link href="/training" className="text-accent hover:underline text-sm mt-2 inline-block">
          Voltar para adestramento
        </Link>
      </div>
    );
  }

  const completed = lessons.filter((l) => l.completed).length;
  const percent = Math.round((completed / lessons.length) * 100);
  const Icon = plan.icon;

  const toggleLesson = (index: number) => {
    setLessons((prev) =>
      prev.map((l, i) => (i === index ? { ...l, completed: !l.completed } : l))
    );
  };

  return (
    <div className="max-w-3xl mx-auto">
      {/* Back */}
      <Link href="/training" className="inline-flex items-center gap-1 text-sm text-text-secondary hover:text-accent transition-colors mb-6">
        <ArrowLeft className="w-4 h-4" />
        Voltar
      </Link>

      {/* Header */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-surface rounded-2xl border border-border p-6 mb-6">
        <div className="flex items-center gap-4 mb-4">
          <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${plan.gradient} flex items-center justify-center shadow-lg`}>
            <Icon className="w-7 h-7 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-text-primary">Plano {plan.title}</h1>
            <p className="text-sm text-text-secondary">{plan.description}</p>
          </div>
        </div>
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-text-secondary">{completed}/{lessons.length} lições completas</span>
          <span className="text-sm font-semibold text-accent">{percent}%</span>
        </div>
        <div className="h-3 rounded-full bg-surface-hover overflow-hidden">
          <motion.div
            className={`h-full rounded-full bg-gradient-to-r ${plan.gradient}`}
            initial={{ width: 0 }}
            animate={{ width: `${percent}%` }}
            transition={{ duration: 1 }}
          />
        </div>
      </motion.div>

      {/* Lessons */}
      <div className="space-y-3">
        {lessons.map((lesson, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.03 }}
            className={`bg-surface rounded-2xl border transition-all ${
              lesson.completed ? "border-success/20" : "border-border hover:border-accent/20"
            }`}
          >
            {/* Lesson Header */}
            <div
              className="flex items-center gap-4 p-4 cursor-pointer"
              onClick={() => setExpandedLesson(expandedLesson === i ? null : i)}
            >
              <button
                onClick={(e) => { e.stopPropagation(); toggleLesson(i); }}
                className={`w-7 h-7 rounded-lg border-2 flex items-center justify-center flex-shrink-0 transition-all ${
                  lesson.completed ? "bg-success border-success" : "border-border hover:border-accent"
                }`}
              >
                {lesson.completed && <Check className="w-4 h-4 text-white" />}
              </button>

              <div className="flex-1 min-w-0">
                <p className={`text-sm font-medium ${lesson.completed ? "text-text-muted line-through" : "text-text-primary"}`}>
                  {lesson.name}
                </p>
                <div className="flex items-center gap-2 mt-0.5">
                  <span className="text-xs text-text-muted flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {lesson.duration} min
                  </span>
                  <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-medium ${difficultyColors[lesson.difficulty] || ""}`}>
                    {lesson.difficulty}
                  </span>
                </div>
              </div>

              {expandedLesson === i ? (
                <ChevronUp className="w-4 h-4 text-text-muted" />
              ) : (
                <ChevronDown className="w-4 h-4 text-text-muted" />
              )}
            </div>

            {/* Expanded Content */}
            <AnimatePresence>
              {expandedLesson === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden"
                >
                  <div className="px-4 pb-4 pt-0 ml-11">
                    <p className="text-sm text-text-secondary leading-relaxed mb-4">
                      {lesson.description}
                    </p>
                    {!lesson.completed && (
                      <button
                        onClick={() => toggleLesson(i)}
                        className="flex items-center gap-2 px-4 py-2 rounded-xl bg-accent hover:bg-accent-hover text-white text-sm font-medium transition-all"
                      >
                        <Play className="w-4 h-4" />
                        Marcar como concluída
                      </button>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
