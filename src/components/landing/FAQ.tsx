"use client";

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const faqs = [
    {
      question: "O ClosePet funciona para gatos também?",
      answer: "Sim! A plataforma é 100% adaptada para cães e gatos. Todo o conteúdo gerado pela IA e as planilhas de rotina consideram a espécie e raça do seu pet."
    },
    {
      question: "A IA substitui o veterinário?",
      answer: "Não. A IA é um assistente de triagem e orientação. Ela analisa o histórico e os sintomas para te dizer se é urgente ou se você pode observar em casa, mas sempre recomendará um profissional em casos clínicos."
    },
    {
      question: "Posso usar de graça?",
      answer: "Sim, o plano Free é permanente. Você pode cadastrar 1 pet, ter controle do perfil e receber alertas automáticos de vacina sem pagar nada."
    },
    {
      question: "Meus dados são seguros?",
      answer: "Absolutamente. Usamos criptografia de ponta a ponta e segurança a nível de banco de dados (Row Level Security). Cada tutor vê apenas os dados e as fotos do seu próprio pet."
    },
    {
      question: "Posso cadastrar mais de um pet?",
      answer: "Sim! Nos planos Premium e Family você pode cadastrar pets ilimitados."
    },
    {
      question: "Como funciona o modo emergência?",
      answer: "É um botão de acesso rápido que exibe os dados vitais do pet (tipo sanguíneo, alergias), mostra hospitais 24h próximos a você e permite ligar para seu vet com 1 clique."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" style={{ padding: '80px 24px', position: 'relative', overflow: 'hidden' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <div className="text-center" style={{ marginBottom: '48px' }}>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Dúvidas frequentes
          </h2>
        </div>

        <div className="flex flex-col">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.06)', padding: '20px 0' }}>
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full text-left flex items-center justify-between focus:outline-none"
                  style={{ gap: '16px' }}
                >
                  <span className="text-[16px] font-bold text-white">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-primary shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isOpen && (
                  <div className="text-[#999] text-[14px] leading-relaxed" style={{ paddingTop: '12px' }}>
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
