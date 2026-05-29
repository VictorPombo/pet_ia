import React from 'react';
import { Camera, MessageCircle, Globe, PawPrint } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] py-8 px-4 md:py-12 md:px-6 relative overflow-hidden flex flex-col items-center md:items-stretch text-center md:text-left">
      <div className="max-w-[1200px] mx-auto w-full">
        
        {/* Top Row */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 md:gap-8 mb-12">
          
          <div className="flex flex-col items-center md:items-start">
            <Link href="/" className="flex items-center gap-2 mb-3">
              <PawPrint className="w-6 h-6 md:w-7 md:h-7 text-primary" />
              <span className="text-xl md:text-xl font-bold text-white">Close<span className="text-primary">Pet</span></span>
            </Link>
            <p className="text-[#666] text-[14px] md:text-sm text-center md:text-left max-w-[280px]">
              O ecossistema definitivo para quem cuida e ama de verdade.
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-12 w-full md:w-auto">
            <div className="flex flex-col gap-3">
              <span className="text-white font-bold text-[14px] md:text-[13px] mb-1">Produto</span>
              <a href="#funcionalidades" className="text-[#666] hover:text-primary transition-colors text-[14px] md:text-[13px]">Features</a>
              <a href="#precos" className="text-[#666] hover:text-primary transition-colors text-[14px] md:text-[13px]">Preços</a>
              <a href="#faq" className="text-[#666] hover:text-primary transition-colors text-[14px] md:text-[13px]">FAQ</a>
            </div>
            
            <div className="flex flex-col gap-3">
              <span className="text-white font-bold text-[14px] md:text-[13px] mb-1">Empresa</span>
              <Link href="/sobre" className="text-[#666] hover:text-primary transition-colors text-[14px] md:text-[13px]">Sobre Nós</Link>
              <Link href="/contato" className="text-[#666] hover:text-primary transition-colors text-[14px] md:text-[13px]">Contato</Link>
              <Link href="/blog" className="text-[#666] hover:text-primary transition-colors text-[14px] md:text-[13px]">Blog Pet</Link>
            </div>

            <div className="flex flex-col gap-3">
              <span className="text-white font-bold text-[14px] md:text-[13px] mb-1">Legal</span>
              <Link href="/termos" className="text-[#666] hover:text-primary transition-colors text-[14px] md:text-[13px]">Termos de Uso</Link>
              <Link href="/privacidade" className="text-[#666] hover:text-primary transition-colors text-[14px] md:text-[13px]">Privacidade</Link>
            </div>
          </div>

        </div>

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-6 md:pt-6 border-t border-white/[0.06] gap-6 md:gap-6">
          <p className="text-[#666] text-[13px] md:text-sm text-center md:text-left">
            © 2026 ClosePet — Feito com ❤️ para quem ama pets
          </p>
          <div className="flex items-center gap-4 md:gap-3">
            <a href="#" className="flex items-center justify-center text-[#666] hover:text-primary transition-colors w-10 h-10 rounded-full border border-white/[0.08]">
              <Camera className="w-5 h-5" />
            </a>
            <a href="#" className="flex items-center justify-center text-[#666] hover:text-primary transition-colors w-10 h-10 rounded-full border border-white/[0.08]">
              <MessageCircle className="w-5 h-5" />
            </a>
            <a href="#" className="flex items-center justify-center text-[#666] hover:text-primary transition-colors w-10 h-10 rounded-full border border-white/[0.08]">
              <Globe className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
