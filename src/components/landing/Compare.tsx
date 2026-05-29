import React from 'react';
import { Check, X } from 'lucide-react';

export default function Compare() {
  const commonFeatures = [
    "Apenas vacinas básicas",
    "Sem IA veterinária",
    "Zero controle financeiro",
    "Fotos espalhadas no celular",
    "Sem treinamento guiado",
    "Sem alertas personalizados"
  ];

  const petiaFeatures = [
    "Vacinas com alertas automáticos",
    "IA que analisa histórico do pet",
    "Projeção anual de gastos",
    "Timeline cronológica com marcos",
    "Aulas com IA comportamental",
    "Central de alertas com prioridade"
  ];

  return (
    <section className="bg-section-even py-24 relative overflow-hidden">
      <div className="max-w-[1000px] mx-auto px-4 md:px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 reveal visible">
          <h2 className="text-white">
            Por que <span className="gradient-text">ClosePet?</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          
          {/* Coluna Esquerda: Outros apps */}
          <div className="glass-card flex flex-col items-center md:items-start text-center md:text-left reveal visible stagger border-white/[0.03] opacity-80">
            <h3 className="text-[20px] font-bold text-white mb-8">Outros apps</h3>
            <ul className="flex flex-col gap-5 w-full">
              {commonFeatures.map((feat, i) => (
                <li key={i} className="flex flex-col md:flex-row items-center md:items-start gap-3">
                  <X className="w-5 h-5 text-[#555] shrink-0" />
                  <span className="text-[#555] text-[15px] line-through decoration-[#555]/50">
                    {feat}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna Direita: ClosePet */}
          <div className="relative rounded-2xl p-[1px] reveal visible stagger overflow-hidden bg-gradient-to-br from-[#FF6B00]/30 to-transparent">
            {/* Inner Content */}
            <div className="bg-[#111] rounded-2xl p-8 flex flex-col items-center md:items-start text-center md:text-left h-full relative">
              {/* Subtle background glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B00]/[0.03] to-transparent pointer-events-none rounded-2xl" />
              
              <h3 className="text-[20px] font-bold text-white mb-8 relative z-10">ClosePet</h3>
              <ul className="flex flex-col gap-5 w-full relative z-10">
                {petiaFeatures.map((feat, i) => (
                  <li key={i} className="flex flex-col md:flex-row items-center md:items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[#FF6B00] to-[#FF4D00] flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-white text-[15px] font-bold">
                      {feat}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
