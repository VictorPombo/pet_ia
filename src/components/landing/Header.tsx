"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { PawPrint, Menu, X, ArrowRight } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Funcionalidades', href: '#funcionalidades' },
    { label: 'Como funciona', href: '#como-funciona' },
    { label: 'Preços', href: '#precos' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Depoimentos', href: '#depoimentos' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'py-0'
          : 'py-2'
      }`}
    >
      {/* Glass background layer */}
      <div
        className={`absolute inset-0 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#0A0A0A]/80 backdrop-blur-xl border-b border-white/[0.06] shadow-[0_4px_30px_rgba(0,0,0,0.5)]'
            : 'bg-transparent'
        }`}
      />

      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-4 md:px-6 h-[56px] md:h-[68px] flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 md:w-9 md:h-9 rounded-xl bg-gradient-to-br from-primary to-orange-700 flex items-center justify-center shadow-[0_0_20px_rgba(255,107,0,0.25)] group-hover:shadow-[0_0_30px_rgba(255,107,0,0.4)] transition-shadow duration-300">
            <PawPrint className="w-4 h-4 md:w-5 md:h-5 text-white" />
          </div>
          <span className="text-[18px] md:text-[20px] font-bold text-white tracking-tight">
            Close<span className="text-primary">Pet</span>
          </span>
        </Link>

        {/* Desktop Nav — center */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative px-4 py-2 text-[13px] font-medium text-[#888] hover:text-white transition-colors duration-200 rounded-lg hover:bg-white/[0.04] group"
            >
              {link.label}
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-primary rounded-full group-hover:w-6 transition-all duration-300" />
            </a>
          ))}
        </nav>

        {/* Right — CTAs */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="/login"
            className="px-4 py-2 text-[13px] font-medium text-[#ccc] hover:text-white transition-colors duration-200 rounded-lg hover:bg-white/[0.04]"
          >
            Entrar
          </Link>
          <Link
            href="/register"
            className="group relative overflow-hidden bg-primary hover:bg-orange-600 text-white text-[13px] font-bold px-5 py-2.5 rounded-xl transition-all duration-300 shadow-[0_0_20px_rgba(255,107,0,0.2)] hover:shadow-[0_0_30px_rgba(255,107,0,0.4)] flex items-center gap-2"
          >
            Começar grátis
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" />
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-white p-2 rounded-lg hover:bg-white/5 transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu (Fullscreen Overlay) */}
      <div
        className={`lg:hidden fixed inset-0 top-[56px] bg-[#0A0A0A] z-40 transition-all duration-300 overflow-y-auto ${
          mobileMenuOpen
            ? 'opacity-100 translate-x-0 pointer-events-auto'
            : 'opacity-0 translate-x-full pointer-events-none'
        }`}
      >
        <div className="p-6 flex flex-col gap-4 min-h-[calc(100vh-56px)]">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-[16px] font-medium text-[#ccc] hover:text-white py-4 border-b border-white/[0.06] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
          
          <div className="mt-auto flex flex-col gap-3 pb-8">
            <Link href="/login" onClick={() => setMobileMenuOpen(false)} className="text-center py-4 text-white font-medium border border-white/10 rounded-xl hover:bg-white/5 transition-colors w-full">
              Entrar
            </Link>
            <Link href="/register" onClick={() => setMobileMenuOpen(false)} className="text-center py-4 bg-primary hover:bg-orange-600 text-white font-bold rounded-xl shadow-[0_0_20px_rgba(255,107,0,0.2)] flex items-center justify-center gap-2 w-full">
              Começar grátis <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
