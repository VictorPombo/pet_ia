"use client";

import { motion } from "framer-motion";
import { AlertCircle, Activity, Droplets, Moon, UtensilsCrossed } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from "recharts";

const weightData = [
  { month: "Jan", weight: 26.2 },
  { month: "Fev", weight: 26.8 },
  { month: "Mar", weight: 27.3 },
  { month: "Abr", weight: 27.9 },
  { month: "Mai", weight: 28.5 },
];

const healthRecords = [
  { date: "2026-05-19", weight: 28.5, water: 650, food: 350, stool: "normal", sleep: 9.2, activity: 45, symptoms: "" },
  { date: "2026-05-18", weight: 28.5, water: 600, food: 340, stool: "normal", sleep: 8.8, activity: 60, symptoms: "" },
  { date: "2026-05-17", weight: 28.3, water: 700, food: 350, stool: "soft", sleep: 10.1, activity: 30, symptoms: "Espirros leves" },
  { date: "2026-05-16", weight: 28.3, water: 580, food: 350, stool: "normal", sleep: 9.0, activity: 50, symptoms: "" },
  { date: "2026-05-15", weight: 28.2, water: 620, food: 340, stool: "normal", sleep: 9.5, activity: 55, symptoms: "" },
];

const stoolLabels: Record<string, { label: string; color: string; bg: string }> = {
  normal: { label: "Normal", color: "text-[#00D1B2]", bg: "bg-[#00D1B2]/10" },
  soft: { label: "Mole", color: "text-[#FFC857]", bg: "bg-[#FFC857]/10" },
  hard: { label: "Duro", color: "text-[#FFC857]", bg: "bg-[#FFC857]/10" },
  liquid: { label: "Líquido", color: "text-[#FF6B6B]", bg: "bg-[#FF6B6B]/10" },
  blood: { label: "Com sangue", color: "text-[#FF6B6B]", bg: "bg-[#FF6B6B]/10" },
};

export default function HistoryPage() {
  const today = healthRecords[0];

  return (
    <div className="flex flex-col gap-6">
      
      {/* Resumo do Dia */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {[
          { icon: Activity, label: "Peso", value: `${today.weight} kg`, color: "text-[#2A7FFF]", bg: "bg-[#2A7FFF]/10" },
          { icon: Droplets, label: "Água", value: `${today.water} ml`, color: "text-[#00D1B2]", bg: "bg-[#00D1B2]/10" },
          { icon: UtensilsCrossed, label: "Ração", value: `${today.food}g`, color: "text-[#FFC857]", bg: "bg-[#FFC857]/10" },
          { icon: Moon, label: "Sono", value: `${today.sleep}h`, color: "text-[#A56BFF]", bg: "bg-[#A56BFF]/10" },
          { icon: Activity, label: "Fezes", value: stoolLabels[today.stool]?.label, color: stoolLabels[today.stool]?.color, bg: stoolLabels[today.stool]?.bg },
        ].map((item, i) => (
          <div key={i} className="bg-[#111827] rounded-[20px] p-4 border border-white/5 flex flex-col items-center justify-center text-center">
            <div className={`w-10 h-10 rounded-full ${item.bg} flex items-center justify-center mb-2`}>
              <item.icon className={`w-5 h-5 ${item.color}`} />
            </div>
            <p className="text-[#788794] text-[11px] font-bold uppercase">{item.label}</p>
            <p className={`text-[16px] font-bold ${item.color}`}>{item.value}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Gráfico */}
        <div className="lg:col-span-1 bg-[#111827] rounded-[24px] border border-white/5 p-6 h-[300px]">
          <h3 className="text-[16px] font-bold text-[#FFFFFF] mb-4">Evolução do Peso</h3>
          <div className="h-[200px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={weightData} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="weightColor" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#2A7FFF" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#2A7FFF" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <XAxis dataKey="month" tick={{ fill: '#788794', fontSize: 12 }} axisLine={false} tickLine={false} />
                <YAxis domain={['auto', 'auto']} tick={{ fill: '#788794', fontSize: 12 }} axisLine={false} tickLine={false} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#111827', borderColor: 'rgba(255,255,255,0.1)', borderRadius: '12px' }}
                  itemStyle={{ color: '#2A7FFF', fontWeight: 'bold' }}
                />
                <Area type="monotone" dataKey="weight" stroke="#2A7FFF" strokeWidth={3} fillOpacity={1} fill="url(#weightColor)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Histórico Completo */}
        <div className="lg:col-span-2 bg-[#111827] rounded-[24px] border border-white/5 p-6 overflow-hidden flex flex-col">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-[16px] font-bold text-[#FFFFFF]">Diário Clínico</h3>
            <button className="text-[13px] font-bold text-[#2A7FFF] hover:text-[#1A6EE5] transition-colors">Ver todos</button>
          </div>
          
          <div className="overflow-x-auto flex-1 scrollbar-none">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-white/10 text-[#788794] text-[12px] uppercase">
                  <th className="pb-3 font-bold">Data</th>
                  <th className="pb-3 font-bold">Métricas</th>
                  <th className="pb-3 font-bold">Sintomas Observados</th>
                </tr>
              </thead>
              <tbody className="text-[14px]">
                {healthRecords.map((r, i) => (
                  <tr key={i} className="border-b border-white/5 last:border-0 hover:bg-[#0D1B2A] transition-colors">
                    <td className="py-4 text-[#FFFFFF] font-medium whitespace-nowrap pr-4">
                      {new Date(r.date).toLocaleDateString("pt-BR", { day: '2-digit', month: 'short' })}
                    </td>
                    <td className="py-4 whitespace-nowrap pr-4">
                      <div className="flex items-center gap-2 text-[#F4F6F8]">
                        <span className="bg-[#0D1B2A] px-2 py-1 rounded-md text-[12px] border border-white/5">{r.weight}kg</span>
                        <span className="bg-[#0D1B2A] px-2 py-1 rounded-md text-[12px] border border-white/5">{r.food}g ração</span>
                        <span className={`px-2 py-1 rounded-md text-[12px] border border-white/5 font-bold ${stoolLabels[r.stool]?.color} ${stoolLabels[r.stool]?.bg}`}>
                          {stoolLabels[r.stool]?.label}
                        </span>
                      </div>
                    </td>
                    <td className="py-4">
                      {r.symptoms ? (
                        <span className="flex items-center gap-1.5 text-[#FFC857] text-[13px] font-bold bg-[#FFC857]/10 px-3 py-1 rounded-lg w-fit">
                          <AlertCircle className="w-4 h-4" />
                          {r.symptoms}
                        </span>
                      ) : (
                        <span className="text-[#788794] text-[13px] italic">Sem anomalias</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}
