import React from 'react';
import { Clock, PawPrint, UserX, Award, Stethoscope } from 'lucide-react';

export default function FeaturesBar() {
  const items = [
    { icon: Clock, title: "Disponível 24h", desc: "Sempre que precisar" },
    { icon: PawPrint, title: "Para cães e gatos", desc: "Todas as idades e raças" },
    { icon: UserX, title: "Sem cadastro", desc: "Rápido e prático" },
    { icon: Award, title: "Orientação confiável", desc: "IA treinada por veterinários" },
    { icon: Stethoscope, title: "Não substitui o vet", desc: "Indicamos quando procurar" },
  ];

  return (
    <section style={{ padding: '0 24px', position: 'relative', overflow: 'hidden' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', marginTop: '40px' }}>
        <div style={{ background: '#111111', border: '1px solid #1F1F1F', borderRadius: '16px', padding: '20px 32px', boxShadow: '0 10px 40px rgba(0,0,0,0.5)' }}>
          <div className="flex flex-wrap lg:flex-nowrap items-center justify-between" style={{ gap: '24px' }}>
            {items.map((item, index) => (
              <React.Fragment key={index}>
                <div className="flex items-center gap-3 shrink-0">
                  <item.icon className="w-6 h-6 text-primary shrink-0" />
                  <div>
                    <p className="text-white font-bold text-[13px] whitespace-nowrap">{item.title}</p>
                    <p className="text-[#666] text-[11px] whitespace-nowrap">{item.desc}</p>
                  </div>
                </div>
                {index < items.length - 1 && (
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
