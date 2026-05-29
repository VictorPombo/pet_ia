import React from 'react';
import Link from 'next/link';

export default function FinalCTA() {
  return (
    <section style={{ padding: '80px 24px', position: 'relative', overflow: 'hidden', background: 'linear-gradient(135deg, #0A0A0A, #1a0a00)', textAlign: 'center' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h2 className="text-4xl md:text-5xl font-bold text-white leading-[1.1] tracking-tight" style={{ marginBottom: '32px' }}>
          Seu pet merece o melhor cuidado. <span className="text-primary">Comece agora.</span>
        </h2>
        
        <Link href="/register" className="inline-block bg-white text-black hover:bg-gray-100 font-bold text-lg transition-colors" style={{ padding: '16px 32px', borderRadius: '12px', marginBottom: '16px' }}>
          Criar conta grátis
        </Link>
        
        <p className="text-[#666] text-sm">
          Sem cartão de crédito. Cancele quando quiser.
        </p>
      </div>
    </section>
  );
}
