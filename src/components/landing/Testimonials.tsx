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
    <section className="bg-section-even py-24 relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6">
        
        <div className="text-center max-w-2xl mx-auto mb-16 reveal visible">
          <h2 className="mb-4 text-white">
            Quem usa, ama.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="glass-card flex flex-col p-10 relative z-10 reveal visible stagger">
              
              {/* Decorative Quote */}
              <div className="absolute top-5 left-6 font-serif text-[80px] leading-none text-[#FF6B00]/10 select-none z-[-1]">
                &ldquo;
              </div>

              <div className="flex items-center gap-1 mb-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-4 h-4 text-[#FF6B00] fill-[#FF6B00]" />
                ))}
              </div>
              
              <p className="text-[#AAA] text-[17px] leading-[1.8] italic flex-1 mb-8">
                &ldquo;{t.text}&rdquo;
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#111] p-[2px]" style={{
                  background: 'linear-gradient(135deg, #FF6B00, #FF4D00)'
                }}>
                  <div className="w-full h-full rounded-full bg-[#111] flex items-center justify-center font-bold text-white text-[14px]">
                    {t.initials}
                  </div>
                </div>
                <div>
                  <div className="text-white font-bold text-[16px] leading-tight">{t.name}</div>
                  <div className="text-[#666] text-[14px] leading-snug">{t.pet}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
