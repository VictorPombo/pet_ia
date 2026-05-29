import React from 'react';
import { Plus, TrendingDown, TrendingUp, Scissors, HeartPulse, Bone, ShoppingBag } from 'lucide-react';

export default function FinancesPage() {
  const expenses = [
    { id: 1, date: "15 Mai", desc: "Ração PremieR 15kg", cat: "Alimentação", val: "R$ 289,90", icon: Bone, color: "text-green-400" },
    { id: 2, date: "10 Mai", desc: "Consulta Dra. Amanda", cat: "Veterinário", val: "R$ 250,00", icon: HeartPulse, color: "text-blue-400" },
    { id: 3, date: "08 Mai", desc: "Bravecto 20-40kg", cat: "Remédios", val: "R$ 315,00", icon: HeartPulse, color: "text-red-400" },
    { id: 4, date: "02 Mai", desc: "Banho e Tosa", cat: "Higiene", val: "R$ 120,00", icon: Scissors, color: "text-cyan-400" },
    { id: 5, date: "28 Abr", desc: "Brinquedo Kong", cat: "Acessórios", val: "R$ 145,00", icon: ShoppingBag, color: "text-purple-400" },
  ];

  return (
    <div className="flex flex-col gap-6 animate-fade-in pb-24 md:pb-0">
      
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white font-display mb-1">Finanças</h1>
          <p className="text-text-muted text-sm">Controle de gastos e projeções anuais.</p>
        </div>
        <button className="btn-primary py-2 px-4 text-sm">
          <Plus className="w-4 h-4" />
          Nova Despesa
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {/* Resumo do Mês */}
        <div className="glass-card p-6 flex flex-col justify-between">
          <span className="text-text-muted font-bold text-sm mb-4">Gasto total em Maio</span>
          <div>
            <div className="flex items-baseline gap-1 mb-2">
              <span className="text-text-secondary text-xl">R$</span>
              <span className="text-4xl font-bold text-white">974</span>
              <span className="text-text-secondary text-xl">,90</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <div className="flex items-center gap-1 text-red-400 bg-red-400/10 px-2 py-0.5 rounded">
                <TrendingUp className="w-3 h-3" />
                <span>+12%</span>
              </div>
              <span className="text-text-muted">vs. mês anterior</span>
            </div>
          </div>
        </div>

        {/* Projeção Anual */}
        <div className="glass-card p-6 flex flex-col justify-between">
          <span className="text-text-muted font-bold text-sm mb-4">Projeção Anual</span>
          <div>
            <div className="flex items-baseline gap-1 mb-2">
              <span className="text-text-secondary text-xl">R$</span>
              <span className="text-4xl font-bold text-primary">11.698</span>
              <span className="text-text-secondary text-xl">,80</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <div className="flex items-center gap-1 text-green-400 bg-green-400/10 px-2 py-0.5 rounded">
                <TrendingDown className="w-3 h-3" />
                <span>-5%</span>
              </div>
              <span className="text-text-muted">vs. ano passado</span>
            </div>
          </div>
        </div>

        {/* Gráfico Donut Simulado CSS */}
        <div className="glass-card p-6 flex items-center justify-between">
          <div className="relative w-24 h-24 rounded-full border-[12px] border-surface-hover" 
               style={{ background: 'conic-gradient(#4ADE80 0% 30%, #60A5FA 30% 55%, #F87171 55% 85%, #A78BFA 85% 100%)', borderRadius: '50%' }}>
            <div className="absolute inset-2 bg-surface rounded-full flex items-center justify-center">
              <span className="text-xs text-text-muted font-bold">Maio</span>
            </div>
          </div>
          <div className="flex flex-col gap-2 text-xs font-medium">
            <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-green-400" /> <span className="text-white">30% Alimentação</span></div>
            <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-blue-400" /> <span className="text-white">25% Veterinário</span></div>
            <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-red-400" /> <span className="text-white">30% Remédios</span></div>
            <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-purple-400" /> <span className="text-white">15% Outros</span></div>
          </div>
        </div>

      </div>

      <div className="glass-card overflow-hidden mt-2">
        <div className="p-5 border-b border-border-glass bg-surface/50 flex justify-between items-center">
          <h3 className="text-lg font-bold text-white">Últimas Despesas</h3>
          <div className="flex gap-2">
            <select className="bg-surface border border-border-glass text-white text-sm rounded-lg px-3 py-1 outline-none">
              <option>Maio</option>
              <option>Abril</option>
            </select>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[600px]">
            <tbody className="divide-y divide-border-glass">
              {expenses.map((exp) => (
                <tr key={exp.id} className="hover:bg-white/5 transition-colors">
                  <td className="p-4 w-16">
                    <div className="w-10 h-10 rounded-full bg-surface border border-border-glass flex items-center justify-center">
                      <exp.icon className={`w-5 h-5 ${exp.color}`} />
                    </div>
                  </td>
                  <td className="p-4">
                    <p className="text-sm font-bold text-white">{exp.desc}</p>
                    <p className="text-xs text-text-secondary">{exp.cat}</p>
                  </td>
                  <td className="p-4 text-sm text-text-muted">
                    {exp.date}
                  </td>
                  <td className="p-4 text-right">
                    <span className="text-sm font-bold text-white">{exp.val}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}
