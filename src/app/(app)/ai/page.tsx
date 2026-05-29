"use client";

import React, { useState } from 'react';
import { Send, Bot, User, Sparkles } from 'lucide-react';

export default function AIPage() {
  const [context, setContext] = useState('Saúde');
  
  const contexts = ['Geral', 'Saúde', 'Treinamento', 'Comportamento', 'Nutrição'];

  return (
    <div className="flex flex-col h-[calc(100vh-120px)] animate-fade-in">
      
      {/* Header */}
      <div className="mb-4">
        <h1 className="text-3xl font-bold text-white font-display mb-1 flex items-center gap-2">
          IA do Pet <Sparkles className="w-6 h-6 text-primary" />
        </h1>
        <p className="text-text-muted text-sm">O assistente veterinário inteligente do Apollo.</p>
      </div>

      {/* Context Selector */}
      <div className="flex gap-2 overflow-x-auto scrollbar-none pb-2 mb-2">
        {contexts.map((c) => (
          <button
            key={c}
            onClick={() => setContext(c)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
              context === c 
                ? 'bg-primary text-white' 
                : 'bg-surface border border-border-glass text-text-muted hover:text-white'
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      {/* Chat Area */}
      <div className="flex-1 glass-card overflow-hidden flex flex-col relative">
        <div className="flex-1 overflow-y-auto p-4 md:p-6 flex flex-col gap-6 scrollbar-none">
          
          <div className="flex text-xs text-text-muted justify-center my-2">
            Hoje, 14:30
          </div>

          {/* AI Message */}
          <div className="flex items-start gap-3 max-w-[85%] md:max-w-[70%]">
            <div className="w-8 h-8 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center shrink-0 mt-1">
              <Bot className="w-5 h-5 text-primary" />
            </div>
            <div className="bg-[#1A1A1A] border border-primary/20 rounded-2xl rounded-tl-sm p-4 text-white text-sm leading-relaxed shadow-sm">
              Olá! Notei no diário que o Apollo teve fezes moles ontem à noite. Como ele está agora? Posso ajudar a avaliar os sintomas se precisar.
            </div>
          </div>

          {/* User Message */}
          <div className="flex items-start gap-3 max-w-[85%] md:max-w-[70%] self-end flex-row-reverse">
            <div className="w-8 h-8 rounded-full bg-surface-hover border border-border-glass flex items-center justify-center shrink-0 mt-1">
              <User className="w-5 h-5 text-text-muted" />
            </div>
            <div className="bg-[#2A2A2A] rounded-2xl rounded-tr-sm p-4 text-white text-sm leading-relaxed shadow-sm">
              Ele vomitou um pouco de espuma amarela hoje de manhã antes de comer. Mas agora está brincando normal.
            </div>
          </div>

          {/* AI Message */}
          <div className="flex items-start gap-3 max-w-[85%] md:max-w-[70%]">
            <div className="w-8 h-8 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center shrink-0 mt-1">
              <Bot className="w-5 h-5 text-primary" />
            </div>
            <div className="bg-[#1A1A1A] border border-primary/20 rounded-2xl rounded-tl-sm p-4 text-white text-sm leading-relaxed shadow-sm">
              Entendi. O vômito de espuma amarela (bile) pela manhã geralmente ocorre quando o estômago do cão fica vazio por muito tempo. Como ele está ativo e brincando, não parece ser uma emergência. 
              <br/><br/>
              <strong>Sugestão:</strong> Tente dividir a porção da noite em duas partes e dar uma delas um pouco mais tarde, antes de dormir. Isso evita que o estômago fique vazio por tantas horas. 
              <br/><br/>
              Gostaria que eu adicione um alerta para monitorarmos isso amanhã?
            </div>
          </div>

        </div>

        {/* Input Area */}
        <div className="p-4 bg-surface border-t border-border-glass">
          <div className="relative">
            <input 
              type="text" 
              placeholder="Descreva o que está acontecendo com seu pet..." 
              className="w-full bg-[#111111] border border-border-glass rounded-xl pl-4 pr-12 py-3 text-white outline-none focus:border-primary transition-colors text-sm"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-lg bg-primary flex items-center justify-center hover:bg-orange-600 transition-colors">
              <Send className="w-4 h-4 text-white ml-0.5" />
            </button>
          </div>
        </div>
      </div>
      
    </div>
  );
}
