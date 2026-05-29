import React from 'react';
import Link from 'next/link';

export default function FinalCTA() {
  return (
    <section className="py-12 px-4 md:py-20 md:px-6 relative overflow-hidden bg-gradient-to-br from-[#0A0A0A] to-[#1a0a00] text-center">
      <div className="max-w-[800px] mx-auto">
        <h2 className="text-[22px] md:text-5xl font-bold text-white leading-[1.2] md:leading-[1.1] tracking-tight mb-6 md:mb-8">
          Seu pet merece o melhor cuidado. <span className="text-primary">Comece agora.</span>
        </h2>
        
        <Link href="/register" className="inline-block bg-white text-black hover:bg-gray-100 font-bold transition-colors w-full md:w-auto px-8 py-4 md:py-4 rounded-xl text-[16px] md:text-[18px] mb-4">
          Criar conta grátis
        </Link>
        
        <p className="text-[#666] text-[13px] md:text-sm">
          Sem cartão de crédito. Cancele quando quiser.
        </p>
      </div>
    </section>
  );
}
