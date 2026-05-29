import React from 'react';
import { Check } from 'lucide-react';

export default function Pricing() {
  return (
    <section id="precos" style={{ padding: '80px 24px', position: 'relative', overflow: 'hidden' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div className="text-center" style={{ marginBottom: '48px' }}>
          <h2 className="text-3xl md:text-4xl font-bold text-white" style={{ marginBottom: '12px' }}>
            Escolha o plano ideal
          </h2>
          <p className="text-[#999] text-[16px]">
            Comece de graça e faça o upgrade quando precisar de mais superpoderes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: '24px', maxWidth: '1000px', margin: '0 auto' }}>
          
          {/* Plano Free */}
          <div className="flex flex-col" style={{ background: '#1A1A1A', borderRadius: '16px', padding: '32px', border: '1px solid rgba(255,255,255,0.06)' }}>
            <h3 className="text-2xl font-bold text-white" style={{ marginBottom: '8px' }}>Free</h3>
            <div className="flex items-baseline gap-1" style={{ marginBottom: '24px' }}>
              <span className="text-4xl font-bold text-white">R$ 0</span>
            </div>
            <p className="text-[#666] text-sm" style={{ marginBottom: '24px', paddingBottom: '24px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
              Para quem está começando e quer o básico bem feito.
            </p>
            <ul className="flex flex-col flex-1" style={{ gap: '12px', margin: '0 0 24px 0' }}>
              <li className="flex items-center gap-3 text-[#B0B0B0] text-[14px]"><Check className="w-5 h-5 text-gray-500 shrink-0" /> 1 pet</li>
              <li className="flex items-center gap-3 text-[#B0B0B0] text-[14px]"><Check className="w-5 h-5 text-gray-500 shrink-0" /> Perfil básico</li>
              <li className="flex items-center gap-3 text-[#B0B0B0] text-[14px]"><Check className="w-5 h-5 text-gray-500 shrink-0" /> Alertas de vacina</li>
              <li className="flex items-center gap-3 text-[#B0B0B0] text-[14px]"><Check className="w-5 h-5 text-gray-500 shrink-0" /> Timeline limitada (20 fotos)</li>
            </ul>
            <a href="/register" className="btn-secondary w-full" style={{ marginTop: 'auto' }}>Começar agora</a>
          </div>

          {/* Plano Premium — BADGE DENTRO DO CARD */}
          <div className="flex flex-col" style={{ background: '#1A1A1A', borderRadius: '16px', padding: '32px', border: '2px solid #FF6B00' }}>
            {/* Badge DENTRO do card, position relative, primeiro filho */}
            <span style={{ display: 'inline-block', background: '#FF6B00', color: '#fff', padding: '4px 16px', borderRadius: '20px', fontSize: '12px', textTransform: 'uppercase', fontWeight: 700, letterSpacing: '0.05em', marginBottom: '16px', alignSelf: 'flex-start' }}>
              Mais Popular
            </span>
            <h3 className="text-2xl font-bold text-primary" style={{ marginBottom: '8px' }}>Premium</h3>
            <div className="flex items-baseline gap-1" style={{ marginBottom: '24px' }}>
              <span className="text-4xl font-bold text-white">R$ 19,90</span>
              <span className="text-[#666]">/mês</span>
            </div>
            <p className="text-[#666] text-sm" style={{ marginBottom: '24px', paddingBottom: '24px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
              O pacote completo com IA e controle financeiro.
            </p>
            <ul className="flex flex-col flex-1" style={{ gap: '12px', margin: '0 0 24px 0' }}>
              <li className="flex items-center gap-3 text-white text-[14px]"><Check className="w-5 h-5 text-primary shrink-0" /> Pets ilimitados</li>
              <li className="flex items-center gap-3 text-white text-[14px]"><Check className="w-5 h-5 text-primary shrink-0" /> IA veterinária ilimitada</li>
              <li className="flex items-center gap-3 text-white text-[14px]"><Check className="w-5 h-5 text-primary shrink-0" /> Controle financeiro completo</li>
              <li className="flex items-center gap-3 text-white text-[14px]"><Check className="w-5 h-5 text-primary shrink-0" /> Timeline ilimitada</li>
              <li className="flex items-center gap-3 text-white text-[14px]"><Check className="w-5 h-5 text-primary shrink-0" /> Treinamento com progresso</li>
              <li className="flex items-center gap-3 text-white text-[14px]"><Check className="w-5 h-5 text-primary shrink-0" /> Alertas personalizados</li>
              <li className="flex items-center gap-3 text-white text-[14px]"><Check className="w-5 h-5 text-primary shrink-0" /> Modo emergência</li>
            </ul>
            <a href="/register?plan=premium" className="btn-primary w-full" style={{ marginTop: 'auto' }}>Começar agora</a>
          </div>

          {/* Plano Family */}
          <div className="flex flex-col" style={{ background: '#1A1A1A', borderRadius: '16px', padding: '32px', border: '1px solid rgba(255,255,255,0.06)' }}>
            <h3 className="text-2xl font-bold text-white" style={{ marginBottom: '8px' }}>Family</h3>
            <div className="flex items-baseline gap-1" style={{ marginBottom: '24px' }}>
              <span className="text-4xl font-bold text-white">R$ 29,90</span>
              <span className="text-[#666]">/mês</span>
            </div>
            <p className="text-[#666] text-sm" style={{ marginBottom: '24px', paddingBottom: '24px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
              Para famílias que dividem as responsabilidades.
            </p>
            <ul className="flex flex-col flex-1" style={{ gap: '12px', margin: '0 0 24px 0' }}>
              <li className="flex items-center gap-3 text-[#B0B0B0] text-[14px]"><Check className="w-5 h-5 text-gray-500 shrink-0" /> Tudo do Premium</li>
              <li className="flex items-center gap-3 text-[#B0B0B0] text-[14px]"><Check className="w-5 h-5 text-gray-500 shrink-0" /> Até 5 tutores por pet</li>
              <li className="flex items-center gap-3 text-[#B0B0B0] text-[14px]"><Check className="w-5 h-5 text-gray-500 shrink-0" /> Compartilhamento de perfil</li>
              <li className="flex items-center gap-3 text-[#B0B0B0] text-[14px]"><Check className="w-5 h-5 text-gray-500 shrink-0" /> Relatório mensal por email</li>
            </ul>
            <a href="/register?plan=family" className="btn-secondary w-full" style={{ marginTop: 'auto' }}>Começar agora</a>
          </div>

        </div>
      </div>
    </section>
  );
}
