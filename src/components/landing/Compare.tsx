import React from 'react';
import { Check, X } from 'lucide-react';

export default function Compare() {
  const comparison = [
    { feature: "Vacinas", common: { text: "Básico", has: true }, petia: { text: "Com alertas automáticos", has: true } },
    { feature: "IA veterinária", common: { text: "", has: false }, petia: { text: "Com histórico do pet", has: true } },
    { feature: "Controle financeiro", common: { text: "", has: false }, petia: { text: "Com projeção anual", has: true } },
    { feature: "Timeline emocional", common: { text: "", has: false }, petia: { text: "Álbum cronológico", has: true } },
    { feature: "Treinamento com progresso", common: { text: "", has: false }, petia: { text: "Aulas + IA comportamental", has: true } },
    { feature: "Rotina visual", common: { text: "", has: false }, petia: { text: "Grade semanal completa", has: true } },
  ];

  return (
    <section className="py-12 px-0 md:py-20 md:px-6 relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-8 md:mb-12 px-4 md:px-0">
          <h2 className="text-[22px] md:text-4xl font-bold text-white">
            ClosePet vs. o que existe hoje
          </h2>
        </div>

        {/* Real HTML table with overflow-x auto for mobile */}
        <div className="overflow-x-auto px-4 md:px-0 -webkit-overflow-scrolling-touch">
          <table className="w-full min-w-[500px] max-w-[900px] mx-auto border-collapse text-[13px] md:text-[15px]">
            <thead>
              <tr className="bg-[#1A1A1A]">
                <th className="p-3 md:p-4 text-left text-[#999] text-[11px] md:text-[12px] font-bold uppercase tracking-wider border-b border-white/[0.06] rounded-tl-xl">Funcionalidade</th>
                <th className="p-3 md:p-4 text-center text-[#999] text-[11px] md:text-[12px] font-bold uppercase tracking-wider border-b border-white/[0.06]">Apps comuns</th>
                <th className="p-3 md:p-4 text-center text-primary text-[11px] md:text-[12px] font-bold uppercase tracking-wider border-b border-white/[0.06] rounded-tr-xl">ClosePet</th>
              </tr>
            </thead>
            <tbody>
              {comparison.map((item, idx) => (
                <tr key={idx} className="hover:bg-white/5 transition-colors">
                  <td className="p-3 md:p-4 border-b border-white/[0.06] align-middle text-white font-medium">
                    {item.feature}
                  </td>
                  <td className="p-3 md:p-4 border-b border-white/[0.06] align-middle text-center">
                    {item.common.has ? (
                      <div className="flex flex-col items-center gap-1">
                        <Check className="w-4 h-4 md:w-5 md:h-5 text-gray-500" />
                        {item.common.text && <span className="text-[11px] md:text-[12px] text-[#666]">{item.common.text}</span>}
                      </div>
                    ) : (
                      <X className="w-4 h-4 md:w-5 md:h-5 text-[#333] mx-auto" />
                    )}
                  </td>
                  <td className="p-3 md:p-4 border-b border-white/[0.06] align-middle text-center">
                    {item.petia.has ? (
                      <div className="flex flex-col items-center gap-1">
                        <Check className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                        {item.petia.text && <span className="text-[11px] md:text-[12px] text-primary/80 font-medium">{item.petia.text}</span>}
                      </div>
                    ) : (
                      <X className="w-4 h-4 md:w-5 md:h-5 text-[#333] mx-auto" />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
