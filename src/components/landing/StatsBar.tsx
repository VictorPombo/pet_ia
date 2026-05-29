import React from 'react';
import { Users, Star, ShieldCheck, Clock, Brain } from 'lucide-react';

export default function StatsBar() {
  const stats = [
    { icon: Users, value: "+50.000", label: "Tutores já confiam" },
    { icon: Star, value: "4,9/5", label: "Avaliação dos usuários" },
    { icon: ShieldCheck, value: "100%", label: "Dados protegidos" },
    { icon: Clock, value: "24/7", label: "Disponível sempre" },
    { icon: Brain, value: "IA Avançada", label: "Treinada por vets" },
  ];

  return (
    <section style={{ padding: '0 24px', position: 'relative', overflow: 'hidden', marginTop: '48px', marginBottom: '0' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ background: '#111111', border: '1px solid #1F1F1F', borderRadius: '16px', padding: '24px 32px', boxShadow: '0 10px 40px rgba(0,0,0,0.5)' }}>
          <div className="flex flex-wrap lg:flex-nowrap items-center justify-between" style={{ gap: '24px' }}>
            {stats.map((stat, index) => (
              <React.Fragment key={index}>
                <div className="flex items-center gap-3 shrink-0">
                  <stat.icon className="w-7 h-7 text-primary shrink-0" />
                  <div>
                    <p className="text-white font-bold text-[16px] leading-tight whitespace-nowrap">{stat.value}</p>
                    <p className="text-[#666] text-[11px] whitespace-nowrap">{stat.label}</p>
                  </div>
                </div>
                {index < stats.length - 1 && (
                  <div className="hidden lg:block shrink-0" style={{ width: '1px', height: '32px', background: '#222' }} />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
