"use client";

import { ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { QrCode, Syringe, Activity, FileText, Pill, ShieldAlert } from "lucide-react";

const healthTabs = [
  { label: "ClosePet ID", href: "/health", icon: QrCode, exact: true },
  { label: "Vacinas", href: "/health/vaccines", icon: Syringe },
  { label: "Histórico", href: "/health/history", icon: Activity },
  { label: "Exames", href: "/health/exams", icon: FileText },
  { label: "Medicação", href: "/health/medications", icon: Pill },
];

export default function HealthLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  const isActive = (href: string, exact?: boolean) => {
    if (exact) return pathname === href;
    return pathname.startsWith(href);
  };

  return (
    <div className="max-w-6xl mx-auto w-full flex flex-col gap-6">
      
      {/* Header Module */}
      <div>
        <h1 className="text-[28px] font-bold text-[#FFFFFF] tracking-tight flex items-center gap-2">
          <ShieldAlert className="w-8 h-8 text-[#00D1B2]" />
          Saúde do Thor
        </h1>
        <p className="text-[#F4F6F8] text-[15px] mt-1">Infraestrutura Digital Pet — Acesse a carteira digital, vacinas e histórico completo.</p>
      </div>

      {/* Tabs Navigation */}
      <div className="bg-[#111827] rounded-2xl border border-white/5 p-1 flex overflow-x-auto scrollbar-none gap-1">
        {healthTabs.map((tab) => {
          const active = isActive(tab.href, tab.exact);
          return (
            <Link
              key={tab.href}
              href={tab.href}
              className={`flex items-center gap-2 px-5 py-3 rounded-xl text-[14px] font-medium transition-all whitespace-nowrap ${
                active 
                  ? "bg-[#2A7FFF]/15 text-[#2A7FFF] border border-[#2A7FFF]/20" 
                  : "text-[#F4F6F8] hover:bg-white/5 border border-transparent"
              }`}
            >
              <tab.icon className="w-4 h-4" />
              {tab.label}
            </Link>
          );
        })}
      </div>

      {/* Module Content */}
      <div className="w-full">
        {children}
      </div>

    </div>
  );
}
