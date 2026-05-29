import React from 'react';
import { Star } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: "Mariana Silva",
      pet: "tutora do Apollo (Golden)",
      text: "Eu sempre perdia a carteirinha de vacinação. Agora o ClosePet me avisa no WhatsApp e no app. Além disso, a IA me ajudou muito quando ele teve diarreia de madrugada.",
      initials: "MS"
    },
    {
      name: "João Pedro",
      pet: "tutor da Luna (Gato Misto)",
      text: "Achei que gastava uns R$ 200 com a Luna por mês... O painel financeiro me mostrou a realidade e agora consigo planejar melhor os gastos anuais. Fantástico!",
      initials: "JP"
    },
    {
      name: "Camila e Roberto",
      pet: "tutores do Thor (Bulldog)",
      text: "Usamos o plano Family. Nós dois temos o app e a rotina do Thor está sincronizada. Se eu dou o remédio e marco lá, o Roberto já sabe que foi dado. Salvou nossa rotina.",
      initials: "CR"
    }
  ];

  return (
    <section id="depoimentos" style={{ padding: '80px 24px', position: 'relative', overflow: 'hidden' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div className="text-center" style={{ marginBottom: '48px' }}>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Quem usa, ama.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: '24px' }}>
          {testimonials.map((t, i) => (
            <div key={i} className="flex flex-col" style={{ background: '#1A1A1A', padding: '32px', borderRadius: '12px' }}>
              <div className="flex items-center gap-1" style={{ marginBottom: '24px' }}>
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-5 h-5 text-primary fill-primary" />
                ))}
              </div>
              <p className="text-white text-[15px] leading-relaxed flex-1" style={{ marginBottom: '32px' }}>
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="flex items-center" style={{ gap: '16px' }}>
                <div className="flex items-center justify-center text-primary font-bold" style={{ width: '48px', height: '48px', borderRadius: '50%', background: '#333' }}>
                  {t.initials}
                </div>
                <div>
                  <div className="text-white font-bold text-[14px]">{t.name}</div>
                  <div className="text-[#666] text-[12px]">{t.pet}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
