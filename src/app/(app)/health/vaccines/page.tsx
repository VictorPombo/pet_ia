"use client";

import { useState } from "react";
import { Syringe, AlertTriangle, UploadCloud, Brain, Camera, FileCheck, CheckCircle2, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function VaccinesPage() {
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [uploadStatus, setUploadStatus] = useState<"idle" | "reading" | "success">("idle");

  const handleSimulateUpload = () => {
    setUploadStatus("reading");
    setTimeout(() => {
      setUploadStatus("success");
    }, 2500); // simulate 2.5s AI reading
  };

  return (
    <div className="flex flex-col gap-6">
      
      {/* HEADER ACTIONS */}
      <div className="flex items-center justify-between">
        <h2 className="text-[20px] font-bold text-[#FFFFFF]">Carteira de Vacinação</h2>
        <button 
          onClick={() => setShowUploadModal(true)}
          className="bg-[#2A7FFF] hover:bg-[#1A6EE5] text-white px-5 py-2.5 rounded-xl text-[14px] font-bold flex items-center gap-2 transition-colors shadow-lg shadow-[#2A7FFF]/20"
        >
          <Camera className="w-4 h-4" />
          Escanear Carteirinha
        </button>
      </div>

      {/* ALERT BANNER */}
      <div className="bg-[#FFC857]/10 border border-[#FFC857]/30 rounded-2xl p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <AlertTriangle className="w-5 h-5 text-[#FFC857]" />
          <div>
            <h4 className="text-[#FFC857] font-bold text-[14px]">Atenção: Vacina V10 vence em 12 dias</h4>
            <p className="text-[#FFC857]/80 text-[12px] mt-0.5">Agende o reforço na sua clínica veterinária de preferência.</p>
          </div>
        </div>
        <button className="bg-[#FFC857]/20 hover:bg-[#FFC857]/30 text-[#FFC857] px-4 py-2 rounded-lg text-[12px] font-bold transition-colors">
          Agendar
        </button>
      </div>

      {/* VACCINES LIST */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        
        {/* V10 */}
        <div className="bg-[#111827] rounded-2xl border border-[#FFC857]/30 p-5 relative overflow-hidden group hover:border-[#FFC857]/50 transition-colors">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#0D1B2A] border border-white/5 flex items-center justify-center">
                <Syringe className="w-5 h-5 text-[#FFC857]" />
              </div>
              <div>
                <h3 className="text-[#FFFFFF] font-bold text-[16px]">Múltipla (V10) — Reforço</h3>
                <span className="text-[#FFC857] font-bold text-[11px] bg-[#FFC857]/10 px-2 py-0.5 rounded-md mt-1 inline-block uppercase tracking-wider">
                  Vence em 12 dias
                </span>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-y-3 gap-x-4 bg-[#0D1B2A] rounded-xl p-4 border border-white/5">
            <div>
              <p className="text-[#788794] text-[10px] uppercase font-bold mb-0.5">Data Aplicação</p>
              <p className="text-[#FFFFFF] text-[13px] font-medium">10/06/2025</p>
            </div>
            <div>
              <p className="text-[#788794] text-[10px] uppercase font-bold mb-0.5">Próxima Dose</p>
              <p className="text-[#FFC857] text-[13px] font-bold">10/06/2026</p>
            </div>
            <div>
              <p className="text-[#788794] text-[10px] uppercase font-bold mb-0.5">Fabricante / Lote</p>
              <p className="text-[#FFFFFF] text-[13px] font-medium">Zoetis • Lote A99X2</p>
            </div>
            <div>
              <p className="text-[#788794] text-[10px] uppercase font-bold mb-0.5">Clínica / Vet</p>
              <p className="text-[#FFFFFF] text-[13px] font-medium">Pet Care • Dra. Ana Silva</p>
            </div>
          </div>
        </div>

        {/* Antirrábica */}
        <div className="bg-[#111827] rounded-2xl border border-white/5 p-5 relative overflow-hidden group hover:border-[#00D1B2]/30 transition-colors">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#0D1B2A] border border-white/5 flex items-center justify-center">
                <Syringe className="w-5 h-5 text-[#00D1B2]" />
              </div>
              <div>
                <h3 className="text-[#FFFFFF] font-bold text-[16px]">Antirrábica</h3>
                <span className="text-[#00D1B2] font-bold text-[11px] bg-[#00D1B2]/10 px-2 py-0.5 rounded-md mt-1 inline-block uppercase tracking-wider">
                  Válida (em dia)
                </span>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-y-3 gap-x-4 bg-[#0D1B2A] rounded-xl p-4 border border-white/5">
            <div>
              <p className="text-[#788794] text-[10px] uppercase font-bold mb-0.5">Data Aplicação</p>
              <p className="text-[#FFFFFF] text-[13px] font-medium">15/01/2026</p>
            </div>
            <div>
              <p className="text-[#788794] text-[10px] uppercase font-bold mb-0.5">Próxima Dose</p>
              <p className="text-[#FFFFFF] text-[13px] font-medium">15/01/2027</p>
            </div>
            <div>
              <p className="text-[#788794] text-[10px] uppercase font-bold mb-0.5">Fabricante / Lote</p>
              <p className="text-[#FFFFFF] text-[13px] font-medium">MSD • Lote B744P</p>
            </div>
            <div>
              <p className="text-[#788794] text-[10px] uppercase font-bold mb-0.5">Clínica / Vet</p>
              <p className="text-[#FFFFFF] text-[13px] font-medium">Pet Care • Dra. Ana Silva</p>
            </div>
          </div>
        </div>

        {/* Gripe */}
        <div className="bg-[#111827] rounded-2xl border border-white/5 p-5 relative overflow-hidden group hover:border-[#00D1B2]/30 transition-colors">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#0D1B2A] border border-white/5 flex items-center justify-center">
                <Syringe className="w-5 h-5 text-[#00D1B2]" />
              </div>
              <div>
                <h3 className="text-[#FFFFFF] font-bold text-[16px]">Gripe Canina</h3>
                <span className="text-[#00D1B2] font-bold text-[11px] bg-[#00D1B2]/10 px-2 py-0.5 rounded-md mt-1 inline-block uppercase tracking-wider">
                  Válida (em dia)
                </span>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-y-3 gap-x-4 bg-[#0D1B2A] rounded-xl p-4 border border-white/5">
            <div>
              <p className="text-[#788794] text-[10px] uppercase font-bold mb-0.5">Data Aplicação</p>
              <p className="text-[#FFFFFF] text-[13px] font-medium">20/02/2026</p>
            </div>
            <div>
              <p className="text-[#788794] text-[10px] uppercase font-bold mb-0.5">Próxima Dose</p>
              <p className="text-[#FFFFFF] text-[13px] font-medium">20/02/2027</p>
            </div>
            <div>
              <p className="text-[#788794] text-[10px] uppercase font-bold mb-0.5">Fabricante / Lote</p>
              <p className="text-[#FFFFFF] text-[13px] font-medium">Zoetis • Lote C911K</p>
            </div>
            <div>
              <p className="text-[#788794] text-[10px] uppercase font-bold mb-0.5">Clínica / Vet</p>
              <p className="text-[#FFFFFF] text-[13px] font-medium">Pet Care • Dr. Carlos</p>
            </div>
          </div>
        </div>
      </div>

      {/* UPLOAD MODAL AI (Simulação) */}
      <AnimatePresence>
        {showUploadModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0D1B2A]/90 backdrop-blur-sm p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-[#111827] rounded-[24px] border border-white/10 p-6 w-full max-w-md shadow-2xl relative overflow-hidden"
            >
              {/* Background Glow */}
              <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-[#2A7FFF]/10 rounded-full blur-[60px] pointer-events-none" />

              <div className="flex justify-between items-center mb-6 relative z-10">
                <div className="flex items-center gap-2">
                  <Brain className="w-5 h-5 text-[#2A7FFF]" />
                  <h3 className="text-[16px] font-bold text-[#FFFFFF]">Upload Inteligente</h3>
                </div>
                <button onClick={() => { setShowUploadModal(false); setUploadStatus("idle"); }} className="text-[#788794] hover:text-white transition-colors">
                  <X className="w-5 h-5" />
                </button>
              </div>

              {uploadStatus === "idle" && (
                <div className="flex flex-col items-center justify-center py-10">
                  <div className="w-20 h-20 rounded-full bg-[#0D1B2A] border-2 border-dashed border-[#2A7FFF]/50 flex items-center justify-center mb-4 cursor-pointer hover:bg-[#2A7FFF]/5 transition-colors" onClick={handleSimulateUpload}>
                    <UploadCloud className="w-8 h-8 text-[#2A7FFF]" />
                  </div>
                  <p className="text-[#FFFFFF] font-bold text-[15px] mb-1">Envie a foto da carteirinha</p>
                  <p className="text-[#F4F6F8] text-[13px] text-center max-w-[280px]">
                    Nossa IA vai ler a vacina, data, lote e veterinário automaticamente para você. Evite digitar!
                  </p>
                  <button onClick={handleSimulateUpload} className="mt-6 bg-[#2A7FFF] text-white px-6 py-2.5 rounded-xl text-[14px] font-bold hover:bg-[#1A6EE5] transition-colors w-full">
                    Simular Envio
                  </button>
                </div>
              )}

              {uploadStatus === "reading" && (
                <div className="flex flex-col items-center justify-center py-12">
                  <div className="relative mb-6">
                    <FileCheck className="w-12 h-12 text-[#2A7FFF] opacity-50" />
                    <motion.div 
                      className="absolute inset-0 border-t-2 border-[#2A7FFF] rounded-full w-12 h-12"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    />
                  </div>
                  <h4 className="text-[#FFFFFF] font-bold text-[16px] mb-2 animate-pulse">Lendo carteirinha...</h4>
                  <p className="text-[#788794] text-[13px] text-center">
                    Extraindo carimbos, lote e datas via IA
                  </p>
                </div>
              )}

              {uploadStatus === "success" && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex flex-col"
                >
                  <div className="flex items-center justify-center gap-2 mb-6 text-[#00D1B2]">
                    <CheckCircle2 className="w-6 h-6" />
                    <span className="font-bold text-[16px]">Dados extraídos com sucesso!</span>
                  </div>
                  
                  <div className="space-y-3 bg-[#0D1B2A] p-4 rounded-xl border border-white/5 mb-6">
                    <div className="flex justify-between border-b border-white/5 pb-2">
                      <span className="text-[#788794] text-[12px] font-bold uppercase">Vacina</span>
                      <span className="text-[#FFFFFF] text-[13px] font-medium">Giárdia</span>
                    </div>
                    <div className="flex justify-between border-b border-white/5 pb-2">
                      <span className="text-[#788794] text-[12px] font-bold uppercase">Data</span>
                      <span className="text-[#FFFFFF] text-[13px] font-medium">10/05/2026</span>
                    </div>
                    <div className="flex justify-between border-b border-white/5 pb-2">
                      <span className="text-[#788794] text-[12px] font-bold uppercase">Lote</span>
                      <span className="text-[#FFFFFF] text-[13px] font-medium">G4900X</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#788794] text-[12px] font-bold uppercase">Clínica</span>
                      <span className="text-[#FFFFFF] text-[13px] font-medium">Pet Care (Dr. Carlos)</span>
                    </div>
                  </div>

                  <button onClick={() => { setShowUploadModal(false); setUploadStatus("idle"); }} className="w-full bg-[#00D1B2] hover:bg-[#00BFA5] text-black px-6 py-3 rounded-xl text-[14px] font-bold transition-colors">
                    Salvar Vacina
                  </button>
                </motion.div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
