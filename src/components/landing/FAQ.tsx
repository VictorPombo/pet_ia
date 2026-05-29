"use client";

import React, { useState, useRef } from 'react';
import { Plus } from 'lucide-react';

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
    <section id="faq" className="bg-section-odd py-24 relative overflow-hidden">
      <div className="max-w-[720px] mx-auto px-4 md:px-6">
        
        <div className="text-center mb-16 reveal visible">
          <h2 className="text-white">
            Perguntas frequentes
          </h2>
        </div>

        <div className="flex flex-col">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i} className="border-b border-white/[0.05] py-6 reveal visible stagger">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full text-left flex items-center justify-between focus:outline-none gap-4 cursor-pointer"
                >
                  <span className="text-[17px] font-semibold text-white">{faq.question}</span>
                  <Plus className={`w-5 h-5 text-[#888] shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-45 text-white' : ''}`} />
                </button>
                
                <div 
                  className="overflow-hidden transition-all duration-300 ease-in-out"
                  style={{ 
                    maxHeight: isOpen ? '200px' : '0px',
                    opacity: isOpen ? 1 : 0
                  }}
                >
                  <div className="text-[#888] text-[15px] leading-[1.7] pt-3">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
