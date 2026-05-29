import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section className="text-center w-full" style={{
      background: 'linear-gradient(135deg, rgba(255,107,0,0.08) 0%, rgba(255,77,0,0.03) 50%, transparent 100%)',
      borderTop: '1px solid rgba(255,107,0,0.08)',
      borderBottom: '1px solid rgba(255,107,0,0.08)',
      padding: '100px 24px'
    }}>
      <div className="max-w-[800px] mx-auto flex flex-col items-center reveal visible">
        
        <h2 className="text-[36px] md:text-[44px] font-extrabold mb-4">
          <span className="gradient-text">Seu pet merece o melhor.</span>
        </h2>
        
        <p className="text-[16px] md:text-[18px] text-[#888] mb-10">
          Comece gratuitamente em 30 segundos.
        </p>
        
        <Link href="/register" className="glow-btn font-bold flex items-center justify-center gap-2" style={{
          padding: '18px 48px',
          borderRadius: '14px',
          fontSize: '16px',
          marginBottom: '16px'
        }}>
          Criar conta grátis <ArrowRight className="w-5 h-5" />
        </Link>
        
        <p className="text-[13px] text-[#555]">
          Sem cartão de crédito. Cancele quando quiser.
        </p>

      </div>
    </section>
  );
}
