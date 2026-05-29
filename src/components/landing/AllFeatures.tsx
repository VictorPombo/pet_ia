import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export default function AllFeatures() {
  const allFeatures = [
    "Perfil completo do pet (raça, peso, vacinas, alergias, tipo sanguíneo, vet de referência)",
    "Diário de saúde (peso diário, água, comida, fezes, sono, atividade, sintomas)",
    "Carteira de vacinação digital com alertas de próxima dose",
    "Controle de medicações em andamento",
    "Upload de exames, prescrições e laudos",
    "Perfil comportamental com pontuação IA (energia, obediência, sociabilidade, ansiedade, foco, agressividade)",
    "Planos de treinamento (básico, comportamento, passeio, avançado)",
    "Aulas com progresso rastreado (não iniciado, em progresso, concluído)",
    "Chat IA contextual (saúde, treinamento, comportamento, nutrição, emergência)",
    "Grade de rotina semanal (passeio, alimentação, descanso, brincadeira, treino, higiene, medicação)",
    "Central de alertas com prioridade (baixa, média, alta, urgente)",
    "Controle financeiro categorizado (alimentação, veterinário, remédios, higiene, acessórios)",
    "Despesas recorrentes e projeção de gastos futuros",
    "Linha do tempo visual (fotos, marcos, aniversários, evolução de peso)",
    "Modo emergência (hospitais próximos, tipo sanguíneo, alergias, ligar rápido)"
  ];

  return (
    <section id="funcionalidades" className="py-12 px-4 md:py-20 md:px-6 relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-[22px] md:text-4xl font-bold text-white">
            Tudo que o ClosePet faz pelo seu pet
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[14px] md:gap-x-10 md:gap-y-5">
          {allFeatures.map((feat, i) => (
            <div key={i} className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <span className="text-[#B0B0B0] leading-snug text-[14px] md:text-[15px]">
                {feat}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
