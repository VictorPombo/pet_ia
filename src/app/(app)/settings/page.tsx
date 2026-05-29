"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

export default function SettingsPage() {
  const [push, setPush] = useState(true);
  const [email, setEmail] = useState(true);
  const [sms, setSms] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  const Toggle = ({ active, onChange }: { active: boolean, onChange: () => void }) => (
    <div 
      onClick={onChange}
      className={`w-[44px] h-[24px] rounded-full p-1 cursor-pointer transition-colors relative ${active ? 'bg-[#FF6B00]' : 'bg-[#333]'}`}
    >
      <div 
        className={`w-4 h-4 rounded-full bg-white absolute top-1 transition-transform ${active ? 'left-[26px]' : 'left-1'}`}
      />
    </div>
  );

  return (
    <div className="max-w-[700px] w-full mx-auto flex flex-col gap-4 pb-12">
      
      <h1 className="text-[22px] font-bold text-white mb-2">Configurações</h1>

      {/* Card Minha conta */}
      <div className="bg-[#1A1A1A] rounded-xl p-6 flex flex-col md:flex-row items-center gap-6 border border-white/[0.06]">
        <div className="w-[80px] h-[80px] rounded-full bg-gray-700 overflow-hidden shrink-0 border-2 border-white/[0.1]">
          {/* Pode adicionar uma imagem do tutor aqui se desejar */}
          <div className="w-full h-full bg-[#2A2A2A] flex items-center justify-center text-white text-xl font-bold">V</div>
        </div>
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-[18px] font-bold text-white">Victor Pombo</h2>
          <p className="text-[#808080] text-[14px]">victorpombo20@gmail.com</p>
        </div>
        <button className="px-5 py-2 rounded-lg border border-white/[0.1] text-white text-[14px] font-medium hover:bg-white/[0.05] transition-colors">
          Editar perfil
        </button>
      </div>

      {/* Card Plano atual */}
      <div className="bg-[#1A1A1A] rounded-xl p-6 flex flex-col md:flex-row md:items-center justify-between gap-6 border border-white/[0.06]">
        <div className="flex flex-col items-start gap-2">
          <div className="flex items-center gap-3">
            <h3 className="text-[16px] font-bold text-white">Plano atual</h3>
            <span className="px-2.5 py-1 bg-[#333] text-[#A0A0A0] text-[11px] font-bold uppercase tracking-wider rounded-md">
              Free
            </span>
          </div>
          <p className="text-[#808080] text-[14px]">Você tem 1 pet cadastrado. Limite de histórico: 3 meses.</p>
        </div>
        <button className="px-5 py-2.5 rounded-lg bg-[#FF6B00] hover:bg-orange-600 text-white text-[14px] font-bold transition-colors w-full md:w-auto">
          Fazer upgrade
        </button>
      </div>

      {/* Card Notificações */}
      <div className="bg-[#1A1A1A] rounded-xl p-6 flex flex-col border border-white/[0.06]">
        <h3 className="text-[16px] font-bold text-white mb-4">Notificações</h3>
        
        <div className="flex items-center justify-between py-3 border-b border-white/[0.04]">
          <div>
            <p className="text-white text-[15px] font-medium">Notificações Push</p>
            <p className="text-[#808080] text-[13px]">Alertas no celular para remédios e vacinas</p>
          </div>
          <Toggle active={push} onChange={() => setPush(!push)} />
        </div>

        <div className="flex items-center justify-between py-3 border-b border-white/[0.04]">
          <div>
            <p className="text-white text-[15px] font-medium">E-mails</p>
            <p className="text-[#808080] text-[13px]">Resumos semanais e dicas da IA</p>
          </div>
          <Toggle active={email} onChange={() => setEmail(!email)} />
        </div>

        <div className="flex items-center justify-between py-3">
          <div>
            <p className="text-white text-[15px] font-medium">SMS</p>
            <p className="text-[#808080] text-[13px]">Apenas emergências</p>
          </div>
          <Toggle active={sms} onChange={() => setSms(!sms)} />
        </div>
      </div>

      {/* Card Aparência */}
      <div className="bg-[#1A1A1A] rounded-xl p-6 flex flex-col border border-white/[0.06]">
        <h3 className="text-[16px] font-bold text-white mb-4">Aparência</h3>
        <div className="flex items-center justify-between">
          <p className="text-white text-[15px] font-medium">Modo Escuro (Dark Mode)</p>
          <Toggle active={darkMode} onChange={() => setDarkMode(!darkMode)} />
        </div>
      </div>

      {/* Card Sobre */}
      <div className="bg-[#1A1A1A] rounded-xl p-6 flex flex-col border border-white/[0.06]">
        <h3 className="text-[16px] font-bold text-white mb-4">Sobre o App</h3>
        
        <button className="flex items-center justify-between py-3 border-b border-white/[0.04] text-left hover:text-white text-[#A0A0A0] transition-colors">
          <span className="text-[15px] font-medium">Versão</span>
          <span className="text-[14px]">v1.0.0 (Build 42)</span>
        </button>
        
        <button className="flex items-center justify-between py-3 border-b border-white/[0.04] text-left hover:text-white text-[#A0A0A0] transition-colors">
          <span className="text-[15px] font-medium">Termos de Serviço</span>
          <ChevronRight className="w-4 h-4" />
        </button>
        
        <button className="flex items-center justify-between py-3 text-left hover:text-white text-[#A0A0A0] transition-colors">
          <span className="text-[15px] font-medium">Política de Privacidade</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* Card Zona perigosa */}
      <div className="bg-[rgba(239,68,68,0.05)] rounded-xl p-6 flex flex-col border border-[rgba(239,68,68,0.15)] mt-4">
        <h3 className="text-[16px] font-bold text-[#EF4444] mb-2">Zona Perigosa</h3>
        <p className="text-[#808080] text-[14px] mb-6">
          Uma vez que você exclui sua conta, não há volta. Por favor, tenha certeza.
        </p>
        <button className="px-5 py-2.5 rounded-lg border border-[#EF4444] text-[#EF4444] text-[14px] font-bold hover:bg-[#EF4444]/10 transition-colors self-start w-full md:w-auto">
          Excluir minha conta
        </button>
      </div>

    </div>
  );
}
