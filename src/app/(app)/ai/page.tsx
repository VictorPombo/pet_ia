"use client";

import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, Sparkles } from 'lucide-react';

export default function AIPage() {
  const [context, setContext] = useState('Saúde');
  const contexts = ['Geral', 'Saúde', 'Treinamento', 'Comportamento', 'Nutrição'];
  
  const endOfMessagesRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom
  useEffect(() => {
    endOfMessagesRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <div className="flex flex-col h-[calc(100vh-120px)] md:h-[calc(100vh-64px)] max-w-4xl mx-auto w-full">
      
      {/* Header */}
      <div className="mb-4 pt-4 md:pt-0">
        <h1 className="text-2xl font-bold text-white mb-1 flex items-center gap-2">
          IA do Pet <Sparkles className="w-5 h-5 text-[#FF6B00]" />
        </h1>
        <p className="text-[#A0A0A0] text-sm">Assistente veterinário e comportamental inteligente.</p>
      </div>

      {/* Context Selector */}
      <div className="flex gap-2 overflow-x-auto scrollbar-none pb-4 mb-2">
        {contexts.map((c) => (
          <button
            key={c}
            onClick={() => setContext(c)}
            className={`px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors border ${
              context === c 
                ? 'bg-[#FF6B00]/10 border-[#FF6B00]/30 text-[#FF6B00]' 
                : 'bg-[#1A1A1A] border-white/[0.06] text-[#A0A0A0] hover:text-white hover:bg-white/[0.05]'
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      {/* Chat Area */}
      <div className="flex-1 bg-[#111111] border border-white/[0.06] rounded-t-2xl overflow-hidden flex flex-col relative shadow-2xl">
        <div className="flex-1 overflow-y-auto p-4 md:p-6 flex flex-col gap-6 scrollbar-none">
          
          <div className="flex text-xs text-[#666] justify-center my-2 font-medium">
            Hoje, 14:30
          </div>

          {/* AI Message */}
          <div className="flex items-start gap-3 max-w-[85%] md:max-w-[70%]">
            <div className="w-8 h-8 rounded-full bg-[#FF6B00]/10 border border-[#FF6B00]/30 flex items-center justify-center shrink-0 mt-1">
              <Bot className="w-5 h-5 text-[#FF6B00]" />
            </div>
            <div className="bg-[#1A1A1A] border border-white/[0.06] rounded-2xl rounded-tl-sm p-4 text-white text-[15px] leading-relaxed shadow-sm">
              Olá, Victor! Notei no diário que o Apollo teve fezes moles ontem à noite. Como ele está agora? Posso ajudar a avaliar os sintomas se precisar.
            </div>
          </div>

          {/* User Message */}
          <div className="flex items-start gap-3 max-w-[85%] md:max-w-[70%] self-end flex-row-reverse">
            <div className="bg-[#FF6B00] rounded-2xl rounded-tr-sm p-4 text-white text-[15px] leading-relaxed shadow-lg">
              Ele vomitou um pouco de espuma amarela hoje de manhã antes de comer. Mas agora está brincando normal.
            </div>
          </div>

          {/* AI Message */}
          <div className="flex items-start gap-3 max-w-[85%] md:max-w-[70%]">
            <div className="w-8 h-8 rounded-full bg-[#FF6B00]/10 border border-[#FF6B00]/30 flex items-center justify-center shrink-0 mt-1">
              <Bot className="w-5 h-5 text-[#FF6B00]" />
            </div>
            <div className="bg-[#1A1A1A] border border-white/[0.06] rounded-2xl rounded-tl-sm p-4 text-white text-[15px] leading-relaxed shadow-sm">
              Entendi. O vômito de espuma amarela (bile) pela manhã geralmente ocorre quando o estômago do cão fica vazio por muito tempo. Como ele está ativo e brincando, não parece ser uma emergência. 
              <br/><br/>
              <strong>Sugestão:</strong> Tente dividir a porção da noite em duas partes e dar uma delas um pouco mais tarde, antes de dormir. Isso evita que o estômago fique vazio por tantas horas. 
              <br/><br/>
              Gostaria que eu adicione um alerta para monitorarmos isso amanhã?
            </div>
          </div>

          {/* User Message */}
          <div className="flex items-start gap-3 max-w-[85%] md:max-w-[70%] self-end flex-row-reverse">
            <div className="bg-[#FF6B00] rounded-2xl rounded-tr-sm p-4 text-white text-[15px] leading-relaxed shadow-lg">
              Sim, por favor! E me lembra de comprar mais daquela ração úmida amanhã a tarde.
            </div>
          </div>

          <div ref={endOfMessagesRef} />
        </div>

        {/* Input Area */}
        <div className="p-4 bg-[#1A1A1A] border-t border-white/[0.06]">
          <div className="relative flex items-center">
            <input 
              type="text" 
              placeholder="Pergunte sobre a saúde, treino ou rotina do Apollo..." 
              className="w-full bg-[#0A0A0A] border border-white/[0.1] rounded-xl pl-4 pr-14 py-3.5 text-white outline-none focus:border-[#FF6B00] transition-colors text-[15px] placeholder:text-[#666]"
            />
            <button className="absolute right-2 w-10 h-10 rounded-lg bg-[#FF6B00] flex items-center justify-center hover:bg-orange-600 transition-colors shadow-lg">
              <Send className="w-4 h-4 text-white ml-0.5" />
            </button>
          </div>
        </div>
      </div>
      
    </div>
  );
}
