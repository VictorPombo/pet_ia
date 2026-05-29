"use client";

import React, { useState } from 'react';
import { AlertTriangle, Phone, Share2, MapPin, Droplet, HeartPulse } from 'lucide-react';

export default function EmergencyPage() {
  const [active, setActive] = useState(false);

  return (
    <div className="flex flex-col gap-6 animate-fade-in pb-24 md:pb-0 min-h-[calc(100vh-100px)]">
      
      <div>
        <h1 className="text-3xl font-bold text-white font-display mb-1">Modo Emergência</h1>
        <p className="text-text-muted text-sm">Acesso rápido a dados vitais e contatos de urgência.</p>
      </div>

      {!active ? (
        <div className="flex-1 flex flex-col items-center justify-center pb-20">
          <div className="relative group cursor-pointer" onClick={() => setActive(true)}>
            {/* Pulse rings */}
            <div className="absolute inset-0 rounded-full bg-red-500/20 animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite]" />
            <div className="absolute inset-[-20px] rounded-full bg-red-500/10 animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite] animation-delay-500" />
            
            {/* Main Button */}
            <button className="relative z-10 w-48 h-48 rounded-full bg-gradient-to-b from-red-500 to-red-700 shadow-[0_0_50px_rgba(239,68,68,0.5)] border-4 border-red-400 flex flex-col items-center justify-center gap-3 transition-transform group-hover:scale-105 active:scale-95">
              <AlertTriangle className="w-16 h-16 text-white" />
              <span className="text-white font-bold text-xl tracking-wider">EMERGÊNCIA</span>
            </button>
          </div>
          <p className="mt-12 text-text-muted max-w-sm text-center">
            Toque no botão para revelar os dados vitais do pet e hospitais 24h próximos a você.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-4 animate-fade-in-up">
          
          <div className="flex flex-col gap-6">
            <div className="glass-card p-6 border-red-500/30 bg-red-500/5">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-red-400 flex items-center gap-2">
                  <AlertTriangle className="w-6 h-6" /> Dados Vitais (Apollo)
                </h2>
                <button onClick={() => setActive(false)} className="text-xs text-text-muted hover:text-white underline">Ocultar</button>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="p-4 rounded-xl bg-surface border border-border-glass">
                  <span className="block text-xs text-text-muted uppercase tracking-wider mb-1">Tipo Sanguíneo</span>
                  <div className="flex items-center gap-2">
                    <Droplet className="w-5 h-5 text-red-400" />
                    <span className="text-white font-bold text-lg">DEA 1.1+</span>
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-surface border border-border-glass">
                  <span className="block text-xs text-text-muted uppercase tracking-wider mb-1">Peso Atual</span>
                  <div className="flex items-center gap-2">
                    <HeartPulse className="w-5 h-5 text-primary" />
                    <span className="text-white font-bold text-lg">32.4 kg</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20">
                  <span className="block text-xs text-red-400 uppercase tracking-wider font-bold mb-1">Alergias Conhecidas</span>
                  <span className="text-white font-medium">Picada de abelha, Cefalexina</span>
                </div>
                <div className="p-4 rounded-xl bg-surface border border-border-glass">
                  <span className="block text-xs text-text-muted uppercase tracking-wider mb-1">Doenças Crônicas</span>
                  <span className="text-white font-medium">Nenhuma</span>
                </div>
                <div className="p-4 rounded-xl bg-surface border border-border-glass">
                  <span className="block text-xs text-text-muted uppercase tracking-wider mb-1">Medicação Contínua</span>
                  <span className="text-white font-medium">Nenhuma no momento</span>
                </div>
              </div>
            </div>

            <button className="btn-secondary w-full py-4 text-white hover:bg-white/5 border-border-glass flex items-center justify-center gap-2">
              <Share2 className="w-5 h-5" />
              Compartilhar Ficha Médica PDF
            </button>
          </div>

          <div className="flex flex-col gap-6">
            <div className="glass-card p-6 border-primary/20">
              <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <Phone className="w-6 h-6 text-primary" /> Contatos Rápidos
              </h2>
              
              <div className="flex flex-col gap-4">
                <div className="flex justify-between items-center p-4 rounded-xl bg-surface border border-border-glass">
                  <div>
                    <span className="block text-xs text-primary font-bold uppercase tracking-wider mb-1">Veterinário Principal</span>
                    <span className="text-white font-bold block">Dra. Amanda Costa</span>
                  </div>
                  <button className="w-12 h-12 rounded-full bg-green-500 hover:bg-green-600 flex items-center justify-center shadow-lg shadow-green-500/20 transition-transform hover:scale-105 active:scale-95">
                    <Phone className="w-5 h-5 text-white" />
                  </button>
                </div>
              </div>
            </div>

            <div className="glass-card p-6 flex-1">
              <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <MapPin className="w-6 h-6 text-text-muted" /> Hospitais 24h Próximos
              </h2>
              
              {/* Fake Map area */}
              <div className="w-full h-40 bg-[#1A1A1A] rounded-xl border border-border-glass mb-4 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
                <MapPin className="w-8 h-8 text-red-500 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10" />
                <span className="relative z-10 text-xs text-text-muted mt-10">Mapa carregando...</span>
              </div>

              <div className="flex flex-col gap-3">
                <div className="p-3 rounded-lg bg-surface border border-border-glass flex justify-between items-center">
                  <div>
                    <h4 className="text-white font-bold text-sm">Hospital Vet Prime 24h</h4>
                    <p className="text-xs text-text-muted">Aprox. 2.5 km • Aberto agora</p>
                  </div>
                  <button className="p-2 text-primary hover:bg-primary/10 rounded-lg">
                    <Phone className="w-4 h-4" />
                  </button>
                </div>
                <div className="p-3 rounded-lg bg-surface border border-border-glass flex justify-between items-center">
                  <div>
                    <h4 className="text-white font-bold text-sm">Clínica Vida Animal</h4>
                    <p className="text-xs text-text-muted">Aprox. 4.1 km • Aberto agora</p>
                  </div>
                  <button className="p-2 text-primary hover:bg-primary/10 rounded-lg">
                    <Phone className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>
      )}

    </div>
  );
}
