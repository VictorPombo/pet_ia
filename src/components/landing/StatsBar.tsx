import React from 'react';
import { Clock, ShieldCheck, BrainCircuit, HeartPulse, Stethoscope } from 'lucide-react';

export default function StatsBar() {
  const items = [
    { icon: Clock, label: "24/7 disponível" },
    { icon: HeartPulse, label: "Cães e gatos" },
    { icon: BrainCircuit, label: "IA veterinária" },
    { icon: ShieldCheck, label: "100% seguro" },
    { icon: Stethoscope, label: "Não substitui o vet" },
  ];

  return (
    <section className="w-full bg-white/[0.02] border-y border-white/[0.04] py-5 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6">
        <div className="flex flex-wrap items-center justify-center md:justify-between gap-y-4 gap-x-6 md:gap-4">
          {items.map((item, index) => (
            <React.Fragment key={index}>
              <div className="flex items-center gap-2">
                <item.icon className="w-4 h-4 text-[#555] shrink-0" />
                <span className="text-[#555] text-[13px] font-medium whitespace-nowrap">{item.label}</span>
              </div>
              {index < items.length - 1 && (
                <span className="hidden md:block text-[#333] text-[10px]">•</span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
