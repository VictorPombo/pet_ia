import React from 'react';

export default function SettingsPage() {
  return (
    <div className="flex flex-col gap-6 animate-fade-in pb-24 md:pb-0">
      <div>
        <h1 className="text-3xl font-bold text-white font-display mb-1">Configurações</h1>
        <p className="text-text-muted text-sm">Gerencie sua conta e preferências do app.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="glass-card p-6">
          <h2 className="text-lg font-bold text-white mb-4">Conta</h2>
          <div className="flex flex-col gap-4">
            <div>
              <label className="text-xs text-text-muted mb-1 block">Nome</label>
              <input type="text" className="w-full bg-surface border border-border-glass rounded-lg px-3 py-2 text-white outline-none" defaultValue="Victor Pombo" />
            </div>
            <div>
              <label className="text-xs text-text-muted mb-1 block">E-mail</label>
              <input type="email" className="w-full bg-surface border border-border-glass rounded-lg px-3 py-2 text-white outline-none opacity-70" defaultValue="victorpombo20@gmail.com" disabled />
            </div>
            <button className="btn-secondary w-fit mt-2">Salvar alterações</button>
          </div>
        </div>

        <div className="glass-card p-6">
          <h2 className="text-lg font-bold text-white mb-4">Plano de Assinatura</h2>
          <div className="p-4 rounded-xl bg-primary/10 border border-primary/20 mb-4">
            <span className="block text-xs text-primary font-bold uppercase tracking-wider mb-1">Plano Atual</span>
            <span className="text-white font-bold text-lg block mb-1">Premium Anual</span>
            <span className="text-sm text-text-secondary">Renova em 10/05/2027</span>
          </div>
          <button className="text-sm text-text-muted hover:text-white underline transition-colors">Cancelar assinatura</button>
        </div>
      </div>
    </div>
  );
}
