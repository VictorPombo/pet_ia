import React from 'react';
import { Camera, MessageCircle, Globe, PawPrint } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid rgba(255,255,255,0.06)', padding: '48px 24px', position: 'relative', overflow: 'hidden' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        
        {/* Top Row */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start" style={{ gap: '32px', marginBottom: '48px' }}>
          
          <div className="flex flex-col items-center md:items-start">
            <Link href="/" className="flex items-center gap-2" style={{ marginBottom: '12px' }}>
              <PawPrint className="w-7 h-7 text-primary" />
              <span className="text-xl font-bold text-white">Close<span className="text-primary">Pet</span></span>
            </Link>
            <p className="text-[#666] text-sm text-center md:text-left" style={{ maxWidth: '280px' }}>
              O ecossistema definitivo para quem cuida e ama de verdade.
            </p>
          </div>

          <div className="flex flex-wrap justify-center" style={{ gap: '48px' }}>
            <div className="flex flex-col" style={{ gap: '12px' }}>
              <span className="text-white font-bold text-[13px]" style={{ marginBottom: '4px' }}>Produto</span>
              <a href="#funcionalidades" className="text-[#666] hover:text-primary transition-colors text-[13px]">Features</a>
              <a href="#precos" className="text-[#666] hover:text-primary transition-colors text-[13px]">Preços</a>
              <a href="#faq" className="text-[#666] hover:text-primary transition-colors text-[13px]">FAQ</a>
            </div>
            
            <div className="flex flex-col" style={{ gap: '12px' }}>
              <span className="text-white font-bold text-[13px]" style={{ marginBottom: '4px' }}>Empresa</span>
              <Link href="/sobre" className="text-[#666] hover:text-primary transition-colors text-[13px]">Sobre Nós</Link>
              <Link href="/contato" className="text-[#666] hover:text-primary transition-colors text-[13px]">Contato</Link>
              <Link href="/blog" className="text-[#666] hover:text-primary transition-colors text-[13px]">Blog Pet</Link>
            </div>

            <div className="flex flex-col" style={{ gap: '12px' }}>
              <span className="text-white font-bold text-[13px]" style={{ marginBottom: '4px' }}>Legal</span>
              <Link href="/termos" className="text-[#666] hover:text-primary transition-colors text-[13px]">Termos de Uso</Link>
              <Link href="/privacidade" className="text-[#666] hover:text-primary transition-colors text-[13px]">Privacidade</Link>
            </div>
          </div>

        </div>

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row justify-between items-center" style={{ paddingTop: '24px', borderTop: '1px solid rgba(255,255,255,0.06)', gap: '24px' }}>
          <p className="text-[#666] text-sm text-center md:text-left">
            © 2026 ClosePet — Feito com ❤️ para quem ama pets
          </p>
          <div className="flex items-center" style={{ gap: '12px' }}>
            <a href="#" className="flex items-center justify-center text-[#666] hover:text-primary transition-colors" style={{ width: '40px', height: '40px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.08)' }}>
              <Camera className="w-5 h-5" />
            </a>
            <a href="#" className="flex items-center justify-center text-[#666] hover:text-primary transition-colors" style={{ width: '40px', height: '40px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.08)' }}>
              <MessageCircle className="w-5 h-5" />
            </a>
            <a href="#" className="flex items-center justify-center text-[#666] hover:text-primary transition-colors" style={{ width: '40px', height: '40px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.08)' }}>
              <Globe className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
