import React from 'react';
import { Check } from 'lucide-react';

export default function Pricing() {
  return (
    <section id="precos" className="py-12 px-4 md:py-20 md:px-6 relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-[22px] md:text-4xl font-bold text-white mb-2 md:mb-3">
            Escolha o plano ideal
          </h2>
          <p className="text-[#999] text-[14px] md:text-[16px]">
            Comece de graça e faça o upgrade quando precisar de mais superpoderes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-[1000px] mx-auto">
          
          {/* Plano Free */}
          <div className="flex flex-col bg-[#1A1A1A] rounded-2xl p-6 md:p-8 border border-white/[0.06]">
            <h3 className="text-[18px] md:text-2xl font-bold text-white mb-2">Free</h3>
            <div className="flex items-baseline gap-1 mb-6">
              <span className="text-[28px] md:text-4xl font-bold text-white">R$ 0</span>
            </div>
            <p className="text-[#666] text-[13px] md:text-sm mb-6 pb-6 border-b border-white/[0.06]">
              Para quem está começando e quer o básico bem feito.
            </p>
            <ul className="flex flex-col flex-1 gap-3 mb-6">
              <li className="flex items-center gap-3 text-[#B0B0B0] text-[13px] md:text-[14px]"><Check className="w-4 h-4 md:w-5 md:h-5 text-gray-500 shrink-0" /> 1 pet</li>
              <li className="flex items-center gap-3 text-[#B0B0B0] text-[13px] md:text-[14px]"><Check className="w-4 h-4 md:w-5 md:h-5 text-gray-500 shrink-0" /> Perfil básico</li>
              <li className="flex items-center gap-3 text-[#B0B0B0] text-[13px] md:text-[14px]"><Check className="w-4 h-4 md:w-5 md:h-5 text-gray-500 shrink-0" /> Alertas de vacina</li>
              <li className="flex items-center gap-3 text-[#B0B0B0] text-[13px] md:text-[14px]"><Check className="w-4 h-4 md:w-5 md:h-5 text-gray-500 shrink-0" /> Timeline limitada (20 fotos)</li>
            </ul>
            <a href="/register" className="btn-secondary w-full mt-auto py-3.5 md:py-3 text-[15px] md:text-[14px]">Começar agora</a>
          </div>

          {/* Plano Premium */}
          <div className="flex flex-col bg-[#1A1A1A] rounded-2xl p-6 md:p-8 border-2 border-primary transform-none md:scale-105 relative z-10 shadow-2xl">
            <span className="inline-block bg-primary text-white px-3 md:px-4 py-1 rounded-full text-[11px] md:text-[12px] uppercase font-bold tracking-wider mb-4 self-start">
              Mais Popular
            </span>
            <h3 className="text-[18px] md:text-2xl font-bold text-primary mb-2">Premium</h3>
            <div className="flex items-baseline gap-1 mb-6">
              <span className="text-[28px] md:text-4xl font-bold text-white">R$ 19,90</span>
              <span className="text-[#666] text-[14px] md:text-base">/mês</span>
            </div>
            <p className="text-[#666] text-[13px] md:text-sm mb-6 pb-6 border-b border-white/[0.06]">
              O pacote completo com IA e controle financeiro.
            </p>
            <ul className="flex flex-col flex-1 gap-3 mb-6">
              <li className="flex items-center gap-3 text-white text-[13px] md:text-[14px]"><Check className="w-4 h-4 md:w-5 md:h-5 text-primary shrink-0" /> Pets ilimitados</li>
              <li className="flex items-center gap-3 text-white text-[13px] md:text-[14px]"><Check className="w-4 h-4 md:w-5 md:h-5 text-primary shrink-0" /> IA veterinária ilimitada</li>
              <li className="flex items-center gap-3 text-white text-[13px] md:text-[14px]"><Check className="w-4 h-4 md:w-5 md:h-5 text-primary shrink-0" /> Controle financeiro completo</li>
              <li className="flex items-center gap-3 text-white text-[13px] md:text-[14px]"><Check className="w-4 h-4 md:w-5 md:h-5 text-primary shrink-0" /> Timeline ilimitada</li>
              <li className="flex items-center gap-3 text-white text-[13px] md:text-[14px]"><Check className="w-4 h-4 md:w-5 md:h-5 text-primary shrink-0" /> Treinamento com progresso</li>
              <li className="flex items-center gap-3 text-white text-[13px] md:text-[14px]"><Check className="w-4 h-4 md:w-5 md:h-5 text-primary shrink-0" /> Alertas personalizados</li>
              <li className="flex items-center gap-3 text-white text-[13px] md:text-[14px]"><Check className="w-4 h-4 md:w-5 md:h-5 text-primary shrink-0" /> Modo emergência</li>
            </ul>
            <a href="/register?plan=premium" className="btn-primary w-full mt-auto py-3.5 md:py-3 text-[15px] md:text-[14px]">Começar agora</a>
          </div>

          {/* Plano Family */}
          <div className="flex flex-col bg-[#1A1A1A] rounded-2xl p-6 md:p-8 border border-white/[0.06]">
            <h3 className="text-[18px] md:text-2xl font-bold text-white mb-2">Family</h3>
            <div className="flex items-baseline gap-1 mb-6">
              <span className="text-[28px] md:text-4xl font-bold text-white">R$ 29,90</span>
              <span className="text-[#666] text-[14px] md:text-base">/mês</span>
            </div>
            <p className="text-[#666] text-[13px] md:text-sm mb-6 pb-6 border-b border-white/[0.06]">
              Para famílias que dividem as responsabilidades.
            </p>
            <ul className="flex flex-col flex-1 gap-3 mb-6">
              <li className="flex items-center gap-3 text-[#B0B0B0] text-[13px] md:text-[14px]"><Check className="w-4 h-4 md:w-5 md:h-5 text-gray-500 shrink-0" /> Tudo do Premium</li>
              <li className="flex items-center gap-3 text-[#B0B0B0] text-[13px] md:text-[14px]"><Check className="w-4 h-4 md:w-5 md:h-5 text-gray-500 shrink-0" /> Até 5 tutores por pet</li>
              <li className="flex items-center gap-3 text-[#B0B0B0] text-[13px] md:text-[14px]"><Check className="w-4 h-4 md:w-5 md:h-5 text-gray-500 shrink-0" /> Compartilhamento de perfil</li>
              <li className="flex items-center gap-3 text-[#B0B0B0] text-[13px] md:text-[14px]"><Check className="w-4 h-4 md:w-5 md:h-5 text-gray-500 shrink-0" /> Relatório mensal por email</li>
            </ul>
            <a href="/register?plan=family" className="btn-secondary w-full mt-auto py-3.5 md:py-3 text-[15px] md:text-[14px]">Começar agora</a>
          </div>

        </div>
      </div>
    </section>
  );
}
