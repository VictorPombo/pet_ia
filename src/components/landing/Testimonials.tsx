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
    <section id="depoimentos" className="py-12 px-4 md:py-20 md:px-6 relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-[22px] md:text-4xl font-bold text-white">
            Quem usa, ama.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="flex flex-col bg-[#1A1A1A] p-5 md:p-8 rounded-xl border border-white/[0.06]">
              <div className="flex items-center gap-1 mb-4 md:mb-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-4 h-4 md:w-5 md:h-5 text-primary fill-primary" />
                ))}
              </div>
              <p className="text-white text-[14px] md:text-[15px] leading-relaxed flex-1 mb-6 md:mb-8">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center text-primary font-bold w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#333]">
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
