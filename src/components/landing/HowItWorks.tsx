import React from 'react';

export default function HowItWorks() {
  const steps = [
    {
      num: "01",
      title: "Descreva os sintomas",
      desc: "Conte o que seu pet está sentindo com detalhes."
    },
    {
      num: "02",
      title: "IA analisa em segundos",
      desc: "A inteligência cruza os sintomas com o histórico."
    },
    {
      num: "03",
      title: "Receba a orientação",
      desc: "Saiba o que pode ser e se é hora de ir ao vet."
    }
  ];

  return (
    <section id="como-funciona" className="bg-section-odd py-24 relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20 reveal visible">
          <h2 className="mb-4 text-white">
            3 passos. Zero complicação.
          </h2>
          <p className="text-[#666]">
            Do sintoma à orientação em segundos.
          </p>
        </div>

        {/* Steps */}
        <div className="flex flex-col md:flex-row relative">
          
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-[24px] left-[10%] right-[10%] h-[1px] border-t border-dashed border-white/20 z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#FF6B00] to-transparent opacity-50 w-[200%] animate-[slideRight_3s_linear_infinite]" style={{ transform: 'translateX(-50%)' }} />
          </div>

          {/* Connector Line (Mobile) */}
          <div className="md:hidden absolute left-[24px] top-[10%] bottom-[10%] w-[1px] border-l border-dashed border-white/20 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#FF6B00] to-transparent opacity-50 h-[200%] animate-[slideDown_3s_linear_infinite]" style={{ transform: 'translateY(-50%)' }} />
          </div>

          {steps.map((step, i) => (
            <div key={i} className="flex-1 flex flex-col items-center text-center relative z-10 px-4 mb-12 md:mb-0 reveal visible stagger">
              
              {/* Number Background */}
              <div className="relative w-full flex justify-center md:justify-center justify-start md:mb-6">
                {/* Mobile specific layout */}
                <div className="md:hidden w-12 h-12 shrink-0 bg-[#111] rounded-full border border-white/10 flex items-center justify-center mr-4 relative z-10">
                  <div className="w-4 h-4 rounded-full bg-[#FF6B00] shadow-[0_0_10px_#FF6B00]" />
                </div>
                
                {/* Desktop specific layout */}
                <div className="hidden md:flex w-12 h-12 bg-[#111] rounded-full border border-white/10 items-center justify-center relative z-10">
                  <div className="w-4 h-4 rounded-full bg-[#FF6B00] shadow-[0_0_10px_#FF6B00]" />
                </div>
                
                <div className="absolute -top-6 md:-top-10 font-mono text-[48px] md:text-[64px] font-bold text-[#FF6B00]/20 select-none md:left-1/2 md:-translate-x-1/2 left-16 md:transform-none">
                  {step.num}
                </div>
                
                <div className="md:hidden flex flex-col items-start pt-2">
                  <h3 className="text-[20px] font-bold text-white mb-2 text-left">{step.title}</h3>
                  <p className="text-[15px] text-[#888] text-left">{step.desc}</p>
                </div>
              </div>
              
              {/* Desktop Text */}
              <div className="hidden md:flex flex-col items-center">
                <h3 className="text-[20px] font-bold text-white mb-2">{step.title}</h3>
                <p className="text-[15px] text-[#888] max-w-[280px]">{step.desc}</p>
              </div>

            </div>
          ))}

        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes slideRight {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0%); }
        }
        @keyframes slideDown {
          0% { transform: translateY(-50%); }
          100% { transform: translateY(0%); }
        }
      `}} />
    </section>
  );
}
