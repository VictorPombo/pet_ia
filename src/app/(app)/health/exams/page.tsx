"use client";

import React from "react";
import { UploadCloud, FileText, FileDown, Search } from "lucide-react";

export default function ExamsPage() {
  const exams = [
    {
      id: 1,
      date: "10 Jan 2026",
      type: "Exame de Sangue (Hemograma Completo)",
      clinic: "PetCare Ibirapuera",
      status: "Analisado pela IA",
    },
    {
      id: 2,
      date: "15 Ago 2025",
      type: "Ultrassom Abdominal",
      clinic: "Vet Imagem",
      status: "Analisado pela IA",
    },
    {
      id: 3,
      date: "02 Fev 2025",
      type: "Exame de Urina",
      clinic: "Laboratório Pet",
      status: "Arquivo",
    }
  ];

  return (
    <div className="flex flex-col gap-8">
      
      {/* Upload Zone */}
      <div className="w-full bg-[#1A1A1A] border-2 border-dashed border-[#FF6B00]/40 rounded-2xl p-10 flex flex-col items-center justify-center text-center hover:bg-[#FF6B00]/5 transition-colors cursor-pointer group">
        <div className="w-16 h-16 rounded-full bg-[#FF6B00]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
          <UploadCloud className="w-8 h-8 text-[#FF6B00]" />
        </div>
        <h3 className="text-lg font-bold text-white mb-2">Anexar novo exame</h3>
        <p className="text-[#A0A0A0] text-sm max-w-sm mb-6">
          Arraste e solte o PDF do exame aqui ou clique para selecionar. A IA fará a leitura automática dos resultados.
        </p>
        <button className="px-6 py-2.5 bg-white/[0.04] border border-white/[0.08] hover:bg-white/[0.1] text-white rounded-lg text-sm font-medium transition-colors">
          Procurar arquivo
        </button>
      </div>

      {/* Lista de Exames */}
      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-lg font-bold text-white">Histórico de Exames</h3>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#666]" />
            <input 
              type="text" 
              placeholder="Buscar exame..." 
              className="bg-[#1A1A1A] border border-white/[0.06] rounded-lg pl-9 pr-4 py-2 text-sm text-white placeholder:text-[#666] focus:outline-none focus:border-[#FF6B00] transition-colors w-full md:w-64"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {exams.map((exam) => (
            <div key={exam.id} className="flex flex-col md:flex-row md:items-center justify-between p-4 md:p-5 bg-[#1A1A1A] rounded-xl border border-white/[0.06] gap-4">
              
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center shrink-0">
                  <FileText className="w-5 h-5 text-blue-500" />
                </div>
                <div>
                  <h4 className="text-white text-[15px] font-bold">{exam.type}</h4>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-[#A0A0A0] text-[13px]">{exam.date}</span>
                    <span className="w-1 h-1 rounded-full bg-[#444]" />
                    <span className="text-[#A0A0A0] text-[13px]">{exam.clinic}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between md:justify-end gap-6 w-full md:w-auto mt-2 md:mt-0 pt-4 md:pt-0 border-t border-white/[0.04] md:border-none">
                <div className="flex items-center gap-2">
                  <span className={`w-2 h-2 rounded-full ${exam.status.includes('IA') ? 'bg-[#22C55E]' : 'bg-[#666]'}`} />
                  <span className="text-[13px] text-[#A0A0A0]">{exam.status}</span>
                </div>
                <button className="flex items-center gap-2 text-[#FF6B00] hover:text-orange-600 text-sm font-medium transition-colors">
                  <FileDown className="w-4 h-4" />
                  Ver PDF
                </button>
              </div>

            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
