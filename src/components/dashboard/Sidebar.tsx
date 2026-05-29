"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Home, PawPrint, Heart, Brain, Bot, 
  CalendarDays, BellRing, CircleDollarSign, 
  Image as ImageIcon, AlertTriangle, Settings, 
  LogOut, MoreHorizontal, X
} from 'lucide-react';

export default function Sidebar() {
  const pathname = usePathname();
  const [mobileMoreOpen, setMobileMoreOpen] = useState(false);

  const menuItems = [
    { href: "/dashboard", icon: Home, label: "Dashboard", isTab: true },
    { href: "/pet", icon: PawPrint, label: "Meus Pets", isTab: false },
    { href: "/health", icon: Heart, label: "Saúde", isTab: true },
    { href: "/training", icon: Brain, label: "Treinamento", isTab: false },
    { href: "/ai", icon: Bot, label: "IA do Pet", isTab: true },
    { href: "/routine", icon: CalendarDays, label: "Rotina", isTab: false },
    { href: "/alerts", icon: BellRing, label: "Alertas", isTab: true },
    { href: "/finances", icon: CircleDollarSign, label: "Finanças", isTab: false },
    { href: "/timeline", icon: ImageIcon, label: "Timeline", isTab: false },
    { href: "/emergency", icon: AlertTriangle, label: "Emergência", isTab: false },
  ];

  const tabItems = menuItems.filter(i => i.isTab);
  const moreItems = menuItems.filter(i => !i.isTab);

  return (
    <>
      {/* ================= DESKTOP SIDEBAR ================= */}
      <aside className="hidden md:flex flex-col fixed top-0 left-0 w-[260px] h-screen bg-[#0D0D0D] overflow-y-auto" style={{ borderRight: '1px solid rgba(255,255,255,0.06)', padding: '24px 16px' }}>
        
        {/* Topo: Logo */}
        <div className="mb-8 px-2">
          <Link href="/dashboard" className="flex items-center gap-2 group">
            <PawPrint className="w-8 h-8 text-[#FF6B00] group-hover:rotate-12 transition-transform" />
            <span className="text-2xl font-bold text-[#FFFFFF] tracking-tight">Close<span className="text-[#FF6B00]">Pet</span></span>
          </Link>
        </div>

        {/* Menu Principal */}
        <nav className="flex-1 flex flex-col gap-1">
          {menuItems.map((item) => {
            const isActive = pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200"
                style={{
                  background: isActive ? 'rgba(255,107,0,0.1)' : 'transparent',
                  borderLeft: isActive ? '3px solid #FF6B00' : '3px solid transparent',
                  color: isActive ? '#FFFFFF' : '#A0A0A0',
                }}
              >
                <item.icon className="w-5 h-5" style={{ color: isActive ? '#FF6B00' : 'inherit' }} />
                <span className="text-[15px] font-medium">{item.label}</span>
              </Link>
            );
          })}

          {/* Separador */}
          <div className="h-px my-4" style={{ background: 'rgba(255,255,255,0.06)' }} />

          <Link
            href="/settings"
            className="flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200"
            style={{
              background: pathname.startsWith('/settings') ? 'rgba(255,107,0,0.1)' : 'transparent',
              borderLeft: pathname.startsWith('/settings') ? '3px solid #FF6B00' : '3px solid transparent',
              color: pathname.startsWith('/settings') ? '#FFFFFF' : '#A0A0A0',
            }}
          >
            <Settings className="w-5 h-5" style={{ color: pathname.startsWith('/settings') ? '#FF6B00' : 'inherit' }} />
            <span className="text-[15px] font-medium">Configurações</span>
          </Link>
        </nav>

        {/* Base: Avatar e Logout */}
        <div className="mt-8 flex items-center justify-between px-2">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#1A1A1A] border flex items-center justify-center text-[#FFFFFF] font-bold shrink-0" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
              VP
            </div>
            <div className="flex flex-col">
              <span className="text-[#FFFFFF] text-[14px] font-bold">Victor Pombo</span>
              <span className="text-[#A0A0A0] text-[12px]">victor@email.com</span>
            </div>
          </div>
          <button className="p-2 rounded-lg text-[#A0A0A0] hover:text-[#EF4444] hover:bg-red-500/10 transition-colors">
            <LogOut className="w-5 h-5" />
          </button>
        </div>
      </aside>

      {/* ================= MOBILE BOTTOM TAB BAR ================= */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 h-[64px] bg-[#0D0D0D] z-50 flex items-center justify-around px-2" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        {tabItems.map((item) => {
          const isActive = pathname.startsWith(item.href);
          return (
            <Link 
              key={item.href} 
              href={item.href}
              className="flex flex-col items-center justify-center w-[64px] h-full gap-1 transition-colors"
            >
              <item.icon className="w-6 h-6" style={{ color: isActive ? '#FF6B00' : '#A0A0A0' }} />
              <span className="text-[10px] font-medium" style={{ color: isActive ? '#FF6B00' : '#A0A0A0' }}>
                {item.label}
              </span>
            </Link>
          );
        })}
        <button 
          onClick={() => setMobileMoreOpen(true)}
          className="flex flex-col items-center justify-center w-[64px] h-full gap-1 transition-colors"
        >
          <MoreHorizontal className="w-6 h-6" style={{ color: mobileMoreOpen ? '#FFFFFF' : '#A0A0A0' }} />
          <span className="text-[10px] font-medium" style={{ color: mobileMoreOpen ? '#FFFFFF' : '#A0A0A0' }}>
            Mais
          </span>
        </button>
      </nav>

      {/* MOBILE MORE MENU (Slide Up) */}
      {mobileMoreOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-[#000000]/80 backdrop-blur-sm flex flex-col justify-end" onClick={() => setMobileMoreOpen(false)}>
          <div 
            className="bg-[#111111] w-full rounded-t-2xl pb-24" 
            style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
            onClick={e => e.stopPropagation()}
          >
            <div className="flex justify-between items-center p-4 border-b" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
              <h3 className="text-[#FFFFFF] font-bold text-lg">Mais Opções</h3>
              <button onClick={() => setMobileMoreOpen(false)} className="p-2 text-[#A0A0A0]">
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="p-4 grid grid-cols-3 gap-4">
              {moreItems.map((item) => (
                <Link 
                  key={item.href} 
                  href={item.href}
                  onClick={() => setMobileMoreOpen(false)}
                  className="flex flex-col items-center justify-center p-4 rounded-xl gap-2 text-center"
                  style={{ background: '#1A1A1A', border: '1px solid rgba(255,255,255,0.06)' }}
                >
                  <item.icon className="w-6 h-6 text-[#FFFFFF]" />
                  <span className="text-[12px] font-medium text-[#A0A0A0]">{item.label}</span>
                </Link>
              ))}
              <Link 
                href="/settings"
                onClick={() => setMobileMoreOpen(false)}
                className="flex flex-col items-center justify-center p-4 rounded-xl gap-2 text-center"
                style={{ background: '#1A1A1A', border: '1px solid rgba(255,255,255,0.06)' }}
              >
                <Settings className="w-6 h-6 text-[#FFFFFF]" />
                <span className="text-[12px] font-medium text-[#A0A0A0]">Configurações</span>
              </Link>
              <button className="flex flex-col items-center justify-center p-4 rounded-xl gap-2 text-center" style={{ background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.2)' }}>
                <LogOut className="w-6 h-6 text-[#EF4444]" />
                <span className="text-[12px] font-medium text-[#EF4444]">Sair</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
