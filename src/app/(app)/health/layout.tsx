"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const tabs = [
  { label: "Diário", href: "/health", exact: true },
  { label: "Vacinas", href: "/health/vaccines", exact: false },
  { label: "Medicações", href: "/health/medications", exact: false },
  { label: "Exames", href: "/health/exams", exact: false },
];

export default function HealthLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const isActive = (href: string, exact: boolean) => {
    if (exact) return pathname === href;
    return pathname.startsWith(href);
  };

  return (
    <div className="flex flex-col">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white mb-1">Central de Saúde</h1>
        <p className="text-[#A0A0A0] text-sm">Gerencie o histórico médico, vacinas e medicações do seu pet.</p>
      </div>

      <nav className="flex gap-0 border-b border-white/[0.06] mb-8 overflow-x-auto scrollbar-none">
        {tabs.map((tab) => {
          const active = isActive(tab.href, tab.exact);
          return (
            <Link
              key={tab.href}
              href={tab.href}
              className={`px-6 py-3 text-sm font-medium transition-all whitespace-nowrap border-b-2 ${
                active 
                  ? "text-white border-[#FF6B00]" 
                  : "text-[#A0A0A0] border-transparent hover:text-[#FFFFFF]"
              }`}
            >
              {tab.label}
            </Link>
          );
        })}
      </nav>

      <div className="w-full">
        {children}
      </div>
    </div>
  );
}
