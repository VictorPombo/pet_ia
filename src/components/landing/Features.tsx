import React from 'react';
import { BrainCircuit, Heart, BellRing, HeartPulse, CircleDollarSign, CalendarDays } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: BrainCircuit,
      title: "Assistente IA veterinário",
      description: "Descreva os sintomas. A IA analisa o histórico do pet, cruza dados e orienta se é urgente ou não."
    },
    {
      icon: Heart,
      title: "A vida do seu pet em fotos",
      description: "Álbum cronológico automático. Aniversários, vacinas, evolução de peso e momentos especiais."
    },
    {
      icon: BellRing,
      title: "Nunca mais esqueça nada",
      description: "Vacina, remédio, banho, antipulga, ração, consulta. O app avisa tudo no horário certo."
    },
    {
      icon: HeartPulse,
      title: "Smartwatch do seu pet",
      description: "Acompanhe peso, alimentação, água, fezes e sono. Tudo registrado com gráficos claros."
    },
    {
      icon: CircleDollarSign,
      title: "Quanto custa seu pet por ano?",
      description: "Controle gastos com vet, ração, remédios. Veja projeção anual de custos estimados."
    },
    {
      icon: CalendarDays,
      title: "Rotina visual e organizada",
      description: "Monte a grade: passeio, alimentação, treino. O pet e o tutor seguem juntos a rotina diária."
    }
  ];

  return (
    <section className="landing-section relative z-10 py-24 bg-surface/30">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Tudo que seu pet precisa. Num só lugar.
        </h2>
        <p className="text-text-muted text-lg">
          O ClosePet não é apenas um app, é um ecossistema completo para a vida do seu melhor amigo.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feat, i) => (
          <div 
            key={i} 
            className="glass-card p-8 group hover-lift animate-fade-in-up"
            style={{ animationDelay: `${i * 0.1}s` }}
          >
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <feat.icon className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">
              {feat.title}
            </h3>
            <p className="text-text-secondary leading-relaxed">
              {feat.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
