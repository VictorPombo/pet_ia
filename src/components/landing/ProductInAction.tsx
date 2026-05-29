import React from 'react';

export default function ProductInAction() {
  return (
    <section className="bg-section-odd py-24 relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-0 md:px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 px-4 md:px-0 reveal visible">
          <h2 className="mb-4 text-white">
            <span className="gradient-text">Veja por dentro</span>
          </h2>
          <p className="text-[#666]">
            Projetado para ser simples, bonito e útil.
          </p>
        </div>

        {/* Mockups Container */}
        <div className="flex overflow-x-auto md:overflow-visible snap-x snap-mandatory hide-scrollbar pb-12 pt-8 px-6 md:px-0 md:justify-center items-center gap-6 md:gap-8 [perspective:1200px]">
          
          {/* Mockup 1: Dashboard */}
          <div className="snap-center shrink-0 w-[280px] md:w-[320px] flex flex-col items-center gap-6 reveal visible stagger">
            <div className="w-full aspect-[9/19] bg-[#111] border border-white/10 rounded-[32px] shadow-[0_30px_60px_rgba(0,0,0,0.8)] md:[transform:rotateY(-8deg)_rotateX(2deg)_translateZ(-20px)] transition-transform duration-500 hover:md:[transform:rotateY(0deg)_rotateX(0deg)_translateZ(0px)] overflow-hidden relative">
              {/* Fake UI */}
              <div className="absolute inset-0 bg-[#0A0A0A] p-5 flex flex-col gap-4">
                <div className="h-8 w-1/2 bg-white/5 rounded-full" />
                <div className="h-32 w-full bg-gradient-to-br from-[#FF6B00]/20 to-transparent border border-[#FF6B00]/10 rounded-2xl" />
                <div className="grid grid-cols-2 gap-3">
                  <div className="h-24 bg-white/5 rounded-xl" />
                  <div className="h-24 bg-white/5 rounded-xl" />
                </div>
                <div className="h-16 w-full bg-white/5 rounded-xl mt-auto" />
              </div>
            </div>
            <span className="label-small">Dashboard principal</span>
          </div>

          {/* Mockup 2: Chat IA */}
          <div className="snap-center shrink-0 w-[280px] md:w-[320px] flex flex-col items-center gap-6 reveal visible stagger relative z-10">
            {/* Background Glow */}
            <div className="absolute inset-0 top-[10%] bottom-[30%] bg-[#FF6B00]/20 blur-[100px] -z-10 rounded-full" />
            
            <div className="w-full aspect-[9/19] bg-[#111] border border-[#FF6B00]/30 rounded-[32px] shadow-[0_30px_80px_rgba(255,107,0,0.15)] md:[transform:translateZ(20px)] transition-transform duration-500 hover:md:[transform:translateZ(40px)] overflow-hidden relative">
              {/* Fake UI */}
              <div className="absolute inset-0 bg-[#0A0A0A] p-5 flex flex-col gap-4">
                <div className="flex items-center gap-3 border-b border-white/5 pb-4">
                  <div className="w-10 h-10 rounded-full bg-white/10" />
                  <div className="h-4 w-24 bg-white/10 rounded" />
                </div>
                <div className="self-end w-2/3 h-12 bg-gradient-to-br from-[#FF6B00] to-[#E8450A] rounded-2xl rounded-tr-none" />
                <div className="self-start w-5/6 h-24 bg-white/5 rounded-2xl rounded-tl-none border border-white/10" />
                <div className="self-end w-1/2 h-10 bg-gradient-to-br from-[#FF6B00] to-[#E8450A] rounded-2xl rounded-tr-none" />
                <div className="h-12 w-full bg-white/5 rounded-full mt-auto" />
              </div>
            </div>
            <span className="label-small text-[#FF8534]">Chat com IA</span>
          </div>

          {/* Mockup 3: Financeiro */}
          <div className="snap-center shrink-0 w-[280px] md:w-[320px] flex flex-col items-center gap-6 reveal visible stagger">
            <div className="w-full aspect-[9/19] bg-[#111] border border-white/10 rounded-[32px] shadow-[0_30px_60px_rgba(0,0,0,0.8)] md:[transform:rotateY(8deg)_rotateX(2deg)_translateZ(-20px)] transition-transform duration-500 hover:md:[transform:rotateY(0deg)_rotateX(0deg)_translateZ(0px)] overflow-hidden relative">
              {/* Fake UI */}
              <div className="absolute inset-0 bg-[#0A0A0A] p-5 flex flex-col gap-4">
                <div className="h-6 w-1/3 bg-white/5 rounded mb-2" />
                <div className="h-10 w-2/3 bg-white/10 rounded mb-4" />
                <div className="flex items-end gap-2 h-32 border-b border-white/10 pb-2">
                  <div className="w-full bg-white/5 h-[30%] rounded-t-sm" />
                  <div className="w-full bg-[#FF6B00]/40 h-[60%] rounded-t-sm" />
                  <div className="w-full bg-white/5 h-[40%] rounded-t-sm" />
                  <div className="w-full bg-white/5 h-[80%] rounded-t-sm" />
                  <div className="w-full bg-white/5 h-[50%] rounded-t-sm" />
                </div>
                <div className="h-16 w-full bg-white/5 rounded-xl" />
                <div className="h-16 w-full bg-white/5 rounded-xl" />
              </div>
            </div>
            <span className="label-small">Controle financeiro</span>
          </div>

        </div>
        
      </div>
      
      {/* Hide Scrollbar for Mobile Carousel */}
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />
    </section>
  );
}
