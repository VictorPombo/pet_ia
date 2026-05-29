import React from 'react';
import { XCircle, Syringe, Wallet, Activity, Image as ImageIcon } from 'lucide-react';

export default function Problem() {
  const problems = [
    {
      icon: Syringe,
      text: "Vacina atrasada e você nem lembra",
    },
    {
      icon: Wallet,
      text: "Gasta R$ 1.500/mês com pet e nem percebe",
    },
    {
      icon: Activity,
      text: "Seu cachorro vomitou e você não sabe se é grave",
    },
    {
      icon: ImageIcon,
      text: "Fotos do pet espalhadas em 5 pastas diferentes",
    }
  ];

  return (
    <section className="landing-section relative z-10 py-24 border-t border-border-glass">
      <div className="text-center max-w-4xl mx-auto mb-16 animate-fade-in-up">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          Você cuida do seu pet... mas tá no controle de verdade?
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {problems.map((prob, i) => (
          <div 
            key={i} 
            className="glass-card p-6 flex flex-col items-center text-center animate-fade-in-up" 
            style={{ animationDelay: `${i * 0.1}s` }}
          >
            <div className="relative mb-6">
              <div className="w-16 h-16 rounded-full bg-surface-hover flex items-center justify-center">
                <prob.icon className="w-8 h-8 text-text-secondary grayscale opacity-50" />
              </div>
              <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-[#2A0F0F] flex items-center justify-center border-2 border-background">
                <XCircle className="w-5 h-5 text-red-500" />
              </div>
            </div>
            <p className="text-white font-medium text-lg">
              {prob.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
