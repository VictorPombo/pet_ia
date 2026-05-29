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
    <section id="faq" className="py-12 px-4 md:py-20 md:px-6 relative overflow-hidden">
      <div className="max-w-[800px] mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-[22px] md:text-4xl font-bold text-white">
            Dúvidas frequentes
          </h2>
        </div>

        <div className="flex flex-col">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i} className="border-b border-white/[0.06] py-3 md:py-5">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full text-left flex items-center justify-between focus:outline-none gap-4"
                >
                  <span className="text-[15px] md:text-[16px] font-bold text-white py-2 md:py-0">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-primary shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isOpen && (
                  <div className="text-[#999] text-[14px] leading-relaxed pt-2 pb-2 md:pt-3 md:pb-0">
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
