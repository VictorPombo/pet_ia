"use client";

import { FileText, UploadCloud, Microscope } from "lucide-react";

export default function ExamsPage() {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      <div className="w-24 h-24 rounded-full bg-[#111827] border border-white/5 flex items-center justify-center mb-6 relative">
        <Microscope className="w-10 h-10 text-[#2A7FFF]" />
        <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-[#00D1B2] flex items-center justify-center border-4 border-[#0D1B2A]">
          <FileText className="w-4 h-4 text-black" />
        </div>
      </div>
      
      <h2 className="text-[24px] font-bold text-[#FFFFFF] mb-3">Laudos e Exames</h2>
      <p className="text-[#F4F6F8] text-[15px] max-w-md mb-8 leading-relaxed">
        Centralize todos os exames de sangue, imagem e laudos laboratoriais do Thor. A IA extrairá automaticamente os resultados para acompanhamento.
      </p>

      <button className="bg-[#2A7FFF] hover:bg-[#1A6EE5] text-white px-8 py-3.5 rounded-xl text-[15px] font-bold flex items-center gap-2 transition-colors shadow-lg shadow-[#2A7FFF]/20">
        <UploadCloud className="w-5 h-5" />
        Fazer Upload de Exame
      </button>

      <p className="text-[#788794] text-[13px] mt-6 flex items-center gap-1.5">
        <span className="w-2 h-2 rounded-full bg-[#FFC857]"></span>
        Integração com clínicas em breve
      </p>
    </div>
  );
}
