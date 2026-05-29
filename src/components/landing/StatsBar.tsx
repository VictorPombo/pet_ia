import React from 'react';
import { Users, Star, ShieldCheck, Clock, Brain } from 'lucide-react';

export default function StatsBar() {
  const stats = [
    { icon: Users, value: "+50.000", label: "Tutores confiam" },
    { icon: Star, value: "4,9/5", label: "Avaliação média" },
    { icon: ShieldCheck, value: "100%", label: "Seguro" },
    { icon: Clock, value: "24/7", label: "Sempre online" },
    { icon: Brain, value: "IA Avançada", label: "Treinada por vets" },
  ];

  return (
    <section className="px-4 md:px-6 relative overflow-hidden mt-6 md:mt-12 mb-0">
      <div className="max-w-[1100px] mx-auto">
        <div className="bg-[#111111] border border-[#1F1F1F] rounded-2xl p-6 md:p-8 shadow-[0_10px_40px_rgba(0,0,0,0.5)]">
          <div className="grid grid-cols-2 lg:flex lg:flex-nowrap items-center justify-between gap-4 md:gap-6">
            {stats.map((stat, index) => (
              <React.Fragment key={index}>
                <div className={`flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-2 md:gap-3 shrink-0 ${index === stats.length - 1 ? 'col-span-2 lg:col-span-1' : ''}`}>
                  <stat.icon className="w-6 h-6 md:w-7 md:h-7 text-primary shrink-0" />
                  <div>
                    <p className="text-white font-bold text-[15px] md:text-[16px] leading-tight whitespace-nowrap">{stat.value}</p>
                    <p className="text-[#666] text-[11px] whitespace-nowrap">{stat.label}</p>
                  </div>
                </div>
                {index < stats.length - 1 && (
                  <div className="hidden lg:block shrink-0 w-[1px] h-[32px] bg-[#222]" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
