"use client";

import React from "react";
import { ArrowUpRight, Plus, ChevronDown } from "lucide-react";

export default function FinancesPage() {
  const expenses = [
    { id: 1, date: "15 Mai", desc: "Ração Golden Power Training 15kg", category: "Alimentação", color: "#22C55E", value: "R$ 189,90", recurring: true },
    { id: 2, date: "10 Mai", desc: "Consulta Dr. Carlos", category: "Veterinário", color: "#3B82F6", value: "R$ 250,00", recurring: false },
    { id: 3, date: "05 Mai", desc: "Simparic 20kg", category: "Remédios", color: "#EF4444", value: "R$ 125,50", recurring: true },
    { id: 4, date: "02 Mai", desc: "Banho e Tosa", category: "Higiene", color: "#06B6D4", value: "R$ 80,00", recurring: false },
    { id: 5, date: "28 Abr", desc: "Coleira peitoral nova", category: "Acessórios", color: "#EAB308", value: "R$ 145,00", recurring: false },
  ];

  const categories = [
    { name: "Alimentação", color: "#22C55E", val: "R$ 450" },
    { name: "Veterinário", color: "#3B82F6", val: "R$ 380" },
    { name: "Remédios", color: "#EF4444", val: "R$ 200" },
    { name: "Higiene", color: "#06B6D4", val: "R$ 150" },
    { name: "Acessórios", color: "#EAB308", val: "R$ 67" },
  ];

  return (
    <div className="flex flex-col">
      
      {/* 2 cards de resumo */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <div className="bg-[#1A1A1A] p-6 rounded-xl flex flex-col justify-between">
          <span className="text-[#808080] text-sm mb-2">Gasto em maio</span>
          <div className="flex items-end gap-3">
            <span className="text-[28px] font-bold text-white leading-none">R$ 1.247</span>
            <span className="text-[#EF4444] text-sm font-medium flex items-center mb-1">
              <ArrowUpRight className="w-4 h-4" /> 12% vs abril
            </span>
          </div>
        </div>

        <div className="bg-[#1A1A1A] p-6 rounded-xl flex flex-col justify-between">
          <span className="text-[#808080] text-sm mb-2">Projeção anual</span>
          <div className="flex flex-col">
            <span className="text-[28px] font-bold text-white leading-none mb-1">R$ 14.964</span>
            <span className="text-[#808080] text-xs">baseado nos últimos 3 meses</span>
          </div>
        </div>
      </div>

      {/* 2 gráficos */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mb-8">
        
        {/* Gráfico Donut */}
        <div className="bg-[#1A1A1A] p-6 rounded-xl flex flex-col">
          <h3 className="text-[16px] font-bold text-white mb-6">Gastos por categoria</h3>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-[200px] h-[200px] rounded-full border-[16px] border-[#2A2A2A] flex items-center justify-center shrink-0">
              <span className="text-[#808080] font-medium text-sm text-center">Gráfico<br/>donut</span>
            </div>
            <div className="flex flex-col gap-3 w-full">
              {categories.map((c) => (
                <div key={c.name} className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full" style={{ backgroundColor: c.color }} />
                    <span className="text-white text-sm">{c.name}</span>
                  </div>
                  <span className="text-white font-bold text-sm">{c.val}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Gráfico Barras */}
        <div className="bg-[#1A1A1A] p-6 rounded-xl flex flex-col">
          <h3 className="text-[16px] font-bold text-white mb-6">Últimos 6 meses</h3>
          <div className="w-full h-[200px] bg-[#2A2A2A] rounded-lg border border-white/[0.02] flex items-center justify-center mt-auto">
            <span className="text-[#808080] font-medium">Gráfico de barras verticais</span>
          </div>
        </div>

      </div>

      {/* Tabela */}
      <div className="bg-[#1A1A1A] p-6 rounded-xl">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
          <h3 className="text-[18px] font-bold text-white">Despesas</h3>
          <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
            
            <button className="flex items-center gap-2 px-3 py-2 bg-transparent border border-white/[0.1] rounded-lg text-sm text-white hover:bg-white/[0.05]">
              Maio 2026 <ChevronDown className="w-4 h-4 text-[#808080]" />
            </button>
            
            <button className="flex items-center gap-2 px-3 py-2 bg-transparent border border-white/[0.1] rounded-lg text-sm text-white hover:bg-white/[0.05]">
              Categoria <ChevronDown className="w-4 h-4 text-[#808080]" />
            </button>
            
            <button className="flex items-center gap-1 px-4 py-2 bg-[#FF6B00] hover:bg-orange-600 text-white rounded-lg text-sm font-medium transition-colors ml-auto md:ml-0">
              Adicionar <Plus className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[700px]">
            <thead>
              <tr className="bg-[#222]">
                <th className="p-3 text-[#808080] text-[13px] font-semibold uppercase rounded-tl-lg">Data</th>
                <th className="p-3 text-[#808080] text-[13px] font-semibold uppercase">Descrição</th>
                <th className="p-3 text-[#808080] text-[13px] font-semibold uppercase">Categoria</th>
                <th className="p-3 text-[#808080] text-[13px] font-semibold uppercase">Recorrente</th>
                <th className="p-3 text-[#808080] text-[13px] font-semibold uppercase text-right rounded-tr-lg">Valor</th>
              </tr>
            </thead>
            <tbody>
              {expenses.map((exp) => (
                <tr key={exp.id} className="border-b border-white/[0.04] last:border-0 hover:bg-white/[0.02]">
                  <td className="p-4 text-white text-sm">{exp.date}</td>
                  <td className="p-4 text-white text-sm">{exp.desc}</td>
                  <td className="p-4">
                    <span 
                      className="px-2.5 py-1 rounded text-xs font-bold"
                      style={{ backgroundColor: `${exp.color}20`, color: exp.color }}
                    >
                      {exp.category}
                    </span>
                  </td>
                  <td className="p-4">
                    {exp.recurring && (
                      <span className="px-2 py-1 rounded bg-[#FF6B00]/10 text-[#FF6B00] text-xs font-bold">Sim</span>
                    )}
                  </td>
                  <td className="p-4 text-right text-white font-bold text-[15px]">{exp.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>

    </div>
  );
}
