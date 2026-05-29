import React from 'react';
import { PlayCircle, ShieldCheck, Bone, Footprints, Medal } from 'lucide-react';

export default function TrainingPage() {
  const profileScores = [
    { label: "Energia", score: 85, color: "bg-primary" },
    { label: "Obediência", score: 60, color: "bg-green-500" },
    { label: "Sociabilidade", score: 95, color: "bg-blue-500" },
    { label: "Ansiedade", score: 30, color: "bg-red-500" },
    { label: "Foco", score: 45, color: "bg-yellow-500" },
    { label: "Agressividade", score: 5, color: "bg-red-900" },
  ];

  return (
    <div className="flex flex-col gap-8 animate-fade-in pb-24 md:pb-0">
      
      <div>
        <h1 className="text-3xl font-bold text-white font-display mb-1">Treinamento e Comportamento</h1>
        <p className="text-text-muted text-sm">Perfil comportamental avaliado pela IA e planos de aula.</p>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        
        {/* Perfil Comportamental */}
        <div className="xl:col-span-1 glass-card p-6 flex flex-col">
          <div className="flex items-center gap-2 mb-6">
            <ShieldCheck className="w-5 h-5 text-primary" />
            <h2 className="text-xl font-bold text-white">Perfil Comportamental</h2>
          </div>

          <div className="flex flex-col gap-4 mb-6">
            {profileScores.map((item, idx) => (
              <div key={idx}>
                <div className="flex justify-between text-xs font-bold mb-1">
                  <span className="text-text-secondary">{item.label}</span>
                  <span className="text-white">{item.score}/100</span>
                </div>
                <div className="w-full bg-surface border border-border-glass rounded-full h-2 overflow-hidden">
                  <div className={`h-full ${item.color} rounded-full`} style={{ width: `${item.score}%` }} />
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-xl bg-primary/5 border border-primary/20 flex-1">
            <h3 className="text-xs font-bold text-primary uppercase tracking-wider mb-2">Análise da IA</h3>
            <p className="text-sm text-text-secondary leading-relaxed">
              O Apollo possui energia e sociabilidade altíssimas, o que é ótimo! Porém, o foco está um pouco baixo. Recomendamos aulas curtas (10-15min) focadas em comandos básicos antes das refeições para melhorar a concentração.
            </p>
          </div>
        </div>

        {/* Planos e Aulas */}
        <div className="xl:col-span-2 flex flex-col gap-6">
          
          <h2 className="text-xl font-bold text-white">Planos de Treinamento</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="glass-card p-5 relative overflow-hidden group border-primary/30">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Bone className="w-20 h-20 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-1">Básico e Obediência</h3>
              <p className="text-sm text-text-muted mb-4">Comandos essenciais para o dia a dia.</p>
              
              <div className="flex justify-between text-xs font-bold mb-1">
                <span className="text-text-secondary">Progresso</span>
                <span className="text-primary">40%</span>
              </div>
              <div className="w-full bg-surface rounded-full h-1.5 mb-4">
                <div className="h-full bg-primary rounded-full" style={{ width: '40%' }} />
              </div>
              
              <span className="text-xs font-medium text-text-muted">4 de 10 aulas concluídas</span>
            </div>

            <div className="glass-card p-5 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Footprints className="w-20 h-20 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-1">Passeio Perfeito</h3>
              <p className="text-sm text-text-muted mb-4">Andar sem puxar a guia e ignorar gatilhos.</p>
              
              <div className="flex justify-between text-xs font-bold mb-1">
                <span className="text-text-secondary">Progresso</span>
                <span className="text-white">0%</span>
              </div>
              <div className="w-full bg-surface rounded-full h-1.5 mb-4">
                <div className="h-full bg-white/20 rounded-full" style={{ width: '0%' }} />
              </div>
              
              <span className="text-xs font-medium text-text-muted">0 de 8 aulas concluídas</span>
            </div>
          </div>

          <h2 className="text-xl font-bold text-white mt-2">Próximas Aulas (Básico)</h2>
          
          <div className="flex flex-col gap-3">
            <div className="glass-card p-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center border border-primary/30 shrink-0">
                  <PlayCircle className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-white font-bold">Comando "Fica" (Distância)</h4>
                  <div className="flex gap-3 text-xs text-text-muted mt-1 font-medium">
                    <span className="text-yellow-500">Médio</span>
                    <span>•</span>
                    <span>10 min</span>
                    <span>•</span>
                    <span>Praticado 2x</span>
                  </div>
                </div>
              </div>
              <button className="btn-primary py-2 px-4 text-sm w-full md:w-auto">Continuar</button>
            </div>

            <div className="glass-card p-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 opacity-70">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-surface-hover flex items-center justify-center border border-border-glass shrink-0">
                  <Medal className="w-5 h-5 text-text-muted" />
                </div>
                <div>
                  <h4 className="text-white font-bold">Deita e Rola</h4>
                  <div className="flex gap-3 text-xs text-text-muted mt-1 font-medium">
                    <span>Avançado</span>
                    <span>•</span>
                    <span>15 min</span>
                    <span>•</span>
                    <span>Não iniciado</span>
                  </div>
                </div>
              </div>
              <button className="btn-secondary py-2 px-4 text-sm w-full md:w-auto">Iniciar</button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
