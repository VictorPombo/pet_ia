"use client";

import React, { useState } from 'react';
import { Activity, Syringe, Pill, FileText, Download, Plus } from 'lucide-react';

export default function HealthPage() {
  const [activeTab, setActiveTab] = useState<'diario' | 'vacinas' | 'meds' | 'exames'>('diario');

  return (
    <div className="flex flex-col gap-6 animate-fade-in pb-24 md:pb-0 h-full">
      
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white font-display mb-1">Saúde</h1>
          <p className="text-text-muted text-sm">Controle médico completo do Apollo.</p>
        </div>
        <button className="btn-primary py-2 px-4 text-sm">
          <Plus className="w-4 h-4" />
          Novo Registro
        </button>
      </div>

      {/* Tabs Navigation */}
      <div className="flex gap-2 border-b border-border-glass overflow-x-auto scrollbar-none pb-px">
        {[
          { id: 'diario', icon: Activity, label: 'Diário' },
          { id: 'vacinas', icon: Syringe, label: 'Vacinas' },
          { id: 'meds', icon: Pill, label: 'Medicações' },
          { id: 'exames', icon: FileText, label: 'Exames e Docs' }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`flex items-center gap-2 px-4 py-3 border-b-2 font-medium text-sm whitespace-nowrap transition-colors ${
              activeTab === tab.id 
                ? 'border-primary text-primary' 
                : 'border-transparent text-text-muted hover:text-white hover:border-white/30'
            }`}
          >
            <tab.icon className="w-4 h-4" />
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="mt-4">
        
        {/* ABA DIÁRIO */}
        {activeTab === 'diario' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 animate-fade-in-up">
            <div className="lg:col-span-1 glass-card p-6 flex flex-col gap-4">
              <h3 className="text-lg font-bold text-white mb-2">Registro Rápido</h3>
              <div>
                <label className="text-xs text-text-muted mb-1 block">Peso (kg)</label>
                <input type="number" className="w-full bg-surface border border-border-glass rounded-lg px-3 py-2 text-white outline-none focus:border-primary transition-colors" placeholder="Ex: 32.4" />
              </div>
              <div>
                <label className="text-xs text-text-muted mb-1 block">Fezes</label>
                <select className="w-full bg-surface border border-border-glass rounded-lg px-3 py-2 text-white outline-none focus:border-primary transition-colors appearance-none">
                  <option value="normal">Normal (firme)</option>
                  <option value="mole">Mole</option>
                  <option value="dura">Muito dura</option>
                  <option value="sangue">Com sangue</option>
                </select>
              </div>
              <div>
                <label className="text-xs text-text-muted mb-1 block">Sintomas (opcional)</label>
                <textarea className="w-full bg-surface border border-border-glass rounded-lg px-3 py-2 text-white outline-none focus:border-primary transition-colors min-h-[80px]" placeholder="Ex: vomitou amarelo de manhã..." />
              </div>
              <button className="btn-secondary w-full mt-2">Salvar registro</button>
            </div>
            
            <div className="lg:col-span-2 glass-card p-6">
              <h3 className="text-lg font-bold text-white mb-6">Histórico Recente</h3>
              <div className="flex flex-col gap-4">
                <div className="p-4 rounded-lg bg-white/5 border border-border-glass flex flex-col md:flex-row justify-between gap-4 md:items-center">
                  <div>
                    <span className="text-xs text-text-muted block mb-1">Hoje, 08:30</span>
                    <p className="text-sm text-white font-medium">Peso: 32.4kg | Fezes: Normais | Sem sintomas</p>
                  </div>
                </div>
                <div className="p-4 rounded-lg bg-white/5 border border-border-glass flex flex-col md:flex-row justify-between gap-4 md:items-center">
                  <div>
                    <span className="text-xs text-text-muted block mb-1">Ontem, 20:15</span>
                    <p className="text-sm text-white font-medium">Peso: -- | Fezes: Moles | Comeu capim</p>
                  </div>
                  <span className="px-2 py-1 rounded bg-yellow-500/10 text-yellow-500 text-xs font-bold border border-yellow-500/20">Atenção</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ABA VACINAS */}
        {activeTab === 'vacinas' && (
          <div className="glass-card overflow-hidden animate-fade-in-up">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-surface/80 border-b border-border-glass">
                    <th className="p-4 text-xs font-bold text-text-muted uppercase tracking-wider">Vacina</th>
                    <th className="p-4 text-xs font-bold text-text-muted uppercase tracking-wider">Data Aplicação</th>
                    <th className="p-4 text-xs font-bold text-text-muted uppercase tracking-wider">Próxima Dose</th>
                    <th className="p-4 text-xs font-bold text-text-muted uppercase tracking-wider">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border-glass">
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="p-4">
                      <p className="text-sm font-bold text-white">V10 (Múltipla)</p>
                      <p className="text-xs text-text-secondary">Zoetis - Lote #12345</p>
                    </td>
                    <td className="p-4 text-sm text-white">15/05/2025</td>
                    <td className="p-4 text-sm text-white">15/05/2026</td>
                    <td className="p-4">
                      <span className="px-2 py-1 rounded bg-primary/10 text-primary text-xs font-bold border border-primary/20">Vence em 3 dias</span>
                    </td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="p-4">
                      <p className="text-sm font-bold text-white">Antirrábica</p>
                      <p className="text-xs text-text-secondary">Prefeitura</p>
                    </td>
                    <td className="p-4 text-sm text-white">10/08/2025</td>
                    <td className="p-4 text-sm text-white">10/08/2026</td>
                    <td className="p-4">
                      <span className="px-2 py-1 rounded bg-green-500/10 text-green-400 text-xs font-bold border border-green-500/20">Em dia</span>
                    </td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="p-4">
                      <p className="text-sm font-bold text-white">Gripe Canina</p>
                      <p className="text-xs text-text-secondary">Bronchi-Shield</p>
                    </td>
                    <td className="p-4 text-sm text-white">01/01/2025</td>
                    <td className="p-4 text-sm text-white">01/01/2026</td>
                    <td className="p-4">
                      <span className="px-2 py-1 rounded bg-red-500/10 text-red-400 text-xs font-bold border border-red-500/20">Atrasada</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* ABA MEDICAÇÕES */}
        {activeTab === 'meds' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-fade-in-up">
            <div className="glass-card p-5 border-l-2 border-l-primary flex justify-between items-start">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-lg font-bold text-white">Bravecto</h3>
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-primary/20 text-primary border border-primary/30">Em uso</span>
                </div>
                <p className="text-sm text-text-secondary mb-4">1 comprimido (20-40kg)</p>
                <p className="text-xs text-text-muted">Frequência: <strong className="text-white">A cada 90 dias</strong></p>
              </div>
              <div className="w-10 h-10 rounded-full bg-surface-hover flex items-center justify-center border border-border-glass">
                <Pill className="w-5 h-5 text-primary" />
              </div>
            </div>

            <div className="glass-card p-5 border-l-2 border-l-text-muted opacity-60 flex justify-between items-start">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-lg font-bold text-white">Amoxicilina</h3>
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-white/10 text-text-muted border border-border-glass">Concluído</span>
                </div>
                <p className="text-sm text-text-secondary mb-4">500mg, 1/2 comp.</p>
                <p className="text-xs text-text-muted">Período: <strong className="text-white">10/05/26 - 17/05/26</strong></p>
              </div>
              <div className="w-10 h-10 rounded-full bg-surface flex items-center justify-center border border-border-glass">
                <Pill className="w-5 h-5 text-text-muted" />
              </div>
            </div>
          </div>
        )}

        {/* ABA EXAMES */}
        {activeTab === 'exames' && (
          <div className="animate-fade-in-up">
            <div className="glass-card overflow-hidden">
              <div className="p-4 border-b border-border-glass bg-surface/50 flex justify-between items-center">
                <h3 className="text-sm font-bold text-text-muted uppercase tracking-wider">Documentos Salvos</h3>
              </div>
              <div className="divide-y divide-border-glass">
                <div className="p-4 flex justify-between items-center hover:bg-white/5 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center border border-purple-500/20 shrink-0">
                      <FileText className="w-5 h-5 text-purple-400" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-white">Hemograma Completo</p>
                      <p className="text-xs text-text-secondary">Exame • 10/04/2026 • 1.2 MB</p>
                    </div>
                  </div>
                  <button className="p-2 text-text-muted hover:text-white transition-colors">
                    <Download className="w-5 h-5" />
                  </button>
                </div>
                <div className="p-4 flex justify-between items-center hover:bg-white/5 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center border border-blue-500/20 shrink-0">
                      <FileText className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-white">Receita Dermatite</p>
                      <p className="text-xs text-text-secondary">Prescrição • 15/02/2026 • 0.5 MB</p>
                    </div>
                  </div>
                  <button className="p-2 text-text-muted hover:text-white transition-colors">
                    <Download className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
