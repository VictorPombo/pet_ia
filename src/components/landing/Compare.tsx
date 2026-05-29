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
    <section style={{ padding: '80px 24px', position: 'relative', overflow: 'hidden' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div className="text-center" style={{ marginBottom: '48px' }}>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            ClosePet vs. o que existe hoje
          </h2>
        </div>

        {/* Real HTML table with overflow-x auto for mobile */}
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', maxWidth: '900px', margin: '0 auto', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ background: '#1A1A1A' }}>
                <th style={{ padding: '16px 24px', textAlign: 'left', color: '#999', fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>Funcionalidade</th>
                <th style={{ padding: '16px 24px', textAlign: 'center', color: '#999', fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>Apps comuns</th>
                <th style={{ padding: '16px 24px', textAlign: 'center', color: '#FF6B00', fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>ClosePet</th>
              </tr>
            </thead>
            <tbody>
              {comparison.map((item, idx) => (
                <tr key={idx} className="hover:bg-white/5 transition-colors">
                  <td style={{ padding: '16px 24px', borderBottom: '1px solid rgba(255,255,255,0.06)', verticalAlign: 'middle', color: '#fff', fontWeight: 500, fontSize: '15px' }}>
                    {item.feature}
                  </td>
                  <td style={{ padding: '16px 24px', borderBottom: '1px solid rgba(255,255,255,0.06)', verticalAlign: 'middle', textAlign: 'center' }}>
                    {item.common.has ? (
                      <div className="flex flex-col items-center gap-1">
                        <Check className="w-5 h-5 text-gray-500" />
                        {item.common.text && <span className="text-[12px] text-[#666]">{item.common.text}</span>}
                      </div>
                    ) : (
                      <X className="w-5 h-5 text-[#333] mx-auto" />
                    )}
                  </td>
                  <td style={{ padding: '16px 24px', borderBottom: '1px solid rgba(255,255,255,0.06)', verticalAlign: 'middle', textAlign: 'center' }}>
                    {item.petia.has ? (
                      <div className="flex flex-col items-center gap-1">
                        <Check className="w-5 h-5 text-primary" />
                        {item.petia.text && <span className="text-[12px] text-primary/80 font-medium">{item.petia.text}</span>}
                      </div>
                    ) : (
                      <X className="w-5 h-5 text-[#333] mx-auto" />
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
