import React from 'react';
import { Camera, MessageCircle, Globe, PawPrint } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-white/[0.04] pt-[64px] px-[24px] pb-[32px]">
      <div className="max-w-[1200px] mx-auto w-full">
        
        {/* Top Row - 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr_1fr_1fr] gap-10 md:gap-8 mb-12 text-center md:text-left">
          
          {/* Col 1 */}
          <div className="flex flex-col items-center md:items-start">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <PawPrint className="w-6 h-6 text-primary" />
              <span className="text-xl font-extrabold text-white">Close<span className="text-primary">Pet</span></span>
            </Link>
            <p className="text-[#555] text-[14px] max-w-[260px]">
              O ecossistema definitivo para quem cuida e ama de verdade.
            </p>
          </div>

          {/* Col 2 */}
          <div className="flex flex-col gap-4">
            <span className="text-white font-bold text-[14px]">Produto</span>
            <div className="flex flex-col gap-3">
              <a href="#funcionalidades" className="text-[#888] hover:text-white transition-colors text-[14px]">Features</a>
              <a href="#precos" className="text-[#888] hover:text-white transition-colors text-[14px]">Preços</a>
              <a href="#faq" className="text-[#888] hover:text-white transition-colors text-[14px]">FAQ</a>
            </div>
          </div>
            
          {/* Col 3 */}
          <div className="flex flex-col gap-4">
            <span className="text-white font-bold text-[14px]">Empresa</span>
            <div className="flex flex-col gap-3">
              <Link href="/sobre" className="text-[#888] hover:text-white transition-colors text-[14px]">Sobre Nós</Link>
              <Link href="/contato" className="text-[#888] hover:text-white transition-colors text-[14px]">Contato</Link>
              <Link href="/blog" className="text-[#888] hover:text-white transition-colors text-[14px]">Blog Pet</Link>
            </div>
          </div>

          {/* Col 4 */}
          <div className="flex flex-col gap-4">
            <span className="text-white font-bold text-[14px]">Legal</span>
            <div className="flex flex-col gap-3">
              <Link href="/termos" className="text-[#888] hover:text-white transition-colors text-[14px]">Termos de Uso</Link>
              <Link href="/privacidade" className="text-[#888] hover:text-white transition-colors text-[14px]">Privacidade</Link>
            </div>
          </div>

        </div>

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-6 border-t border-white/[0.04] mt-12 gap-6">
          <p className="text-[#444] text-[13px] text-center md:text-left">
            © 2026 ClosePet
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="flex items-center justify-center text-[#444] hover:text-white transition-colors">
              <Camera className="w-5 h-5" />
            </a>
            <a href="#" className="flex items-center justify-center text-[#444] hover:text-white transition-colors">
              <MessageCircle className="w-5 h-5" />
            </a>
            <a href="#" className="flex items-center justify-center text-[#444] hover:text-white transition-colors">
              <Globe className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
