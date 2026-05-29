"use client";

import { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff, Mail, Lock, ArrowRight, ShieldCheck, Zap, Heart, PawPrint } from "lucide-react";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // TODO: Integrate with Supabase auth
    setTimeout(() => {
      setLoading(false);
      window.location.href = "/dashboard";
    }, 1500);
  };

  const benefits = [
    { icon: ShieldCheck, text: "IA veterinária 24h" },
    { icon: Zap, text: "Resposta em segundos" },
    { icon: Heart, text: "Cuidado completo" },
  ];

  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 bg-[#0A0A0A]">
      
      {/* Coluna Esquerda - Branding (Oculta no mobile) */}
      <div className="hidden md:flex flex-col justify-center items-center relative p-12 overflow-hidden bg-[#0A0A0A]">
        {/* Background elements */}
        <div style={{ position: 'absolute', top: '30%', left: '50%', transform: 'translate(-50%, -50%)', width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,107,0,0.12) 0%, transparent 70%)' }} />
        <div style={{ position: 'absolute', bottom: '-10%', left: '-10%', width: '300px', height: '300px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,107,0,0.06) 0%, transparent 70%)' }} />
        
        {/* Logo */}
        <div className="absolute top-12 left-12 z-10">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#FF6B00] to-orange-700 flex items-center justify-center shadow-[0_0_20px_rgba(255,107,0,0.3)]">
              <PawPrint className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white tracking-tight">
              Close<span className="text-[#FF6B00]">Pet</span>
            </span>
          </Link>
        </div>

        <div className="relative z-10 flex flex-col justify-center items-start max-w-[440px] w-full">
          <h2 className="text-4xl lg:text-[44px] font-bold text-white leading-[1.1] tracking-tight mb-6">
            O cuidado que<br />
            seu pet <span className="text-[#FF6B00]">merece.</span>
          </h2>
          <p className="text-[#A0A0A0] text-[15px] leading-relaxed mb-10">
            Junte-se a mais de 50.000 tutores que já transformaram a saúde e o bem-estar dos seus pets com inteligência artificial.
          </p>

          <div className="flex flex-col gap-4 mb-12">
            {benefits.map((b, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center">
                  <b.icon className="w-5 h-5 text-[#FF6B00]" />
                </div>
                <span className="text-[#FFFFFF] text-[15px] font-medium">{b.text}</span>
              </div>
            ))}
          </div>

          <div className="w-full" style={{ background: '#1A1A1A', borderRadius: '12px', padding: '24px', border: '1px solid rgba(255,255,255,0.06)' }}>
            <p className="text-[#A0A0A0] text-[14px] leading-relaxed italic mb-4">
              &ldquo;O ClosePet salvou a vida do meu Golden quando ele teve uma crise de madrugada. A IA me orientou na hora.&rdquo;
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#FF6B00]/20 flex items-center justify-center text-[#FF6B00] text-[13px] font-bold">MS</div>
              <div>
                <p className="text-[#FFFFFF] text-[14px] font-bold">Mariana Silva</p>
                <p className="text-[#A0A0A0] text-[12px]">Tutora do Apollo</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Coluna Direita - Formulário */}
      <div className="flex items-center justify-center p-6 bg-[#111111]">
        <div className="w-full max-w-[440px]" style={{ padding: '48px 0' }}>
          
          {/* Mobile Logo */}
          <div className="md:hidden flex items-center justify-center gap-2.5 mb-10">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#FF6B00] to-orange-700 flex items-center justify-center shadow-[0_0_20px_rgba(255,107,0,0.3)]">
              <PawPrint className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white tracking-tight">
              Close<span className="text-[#FF6B00]">Pet</span>
            </span>
          </div>

          <div className="mb-8">
            <h1 className="text-[28px] font-bold text-[#FFFFFF] mb-2">Bem-vindo de volta</h1>
            <p className="text-[#A0A0A0] text-[15px]">Entre na sua conta para continuar</p>
          </div>

          <button className="w-full flex items-center justify-center gap-3 py-3.5 rounded-xl text-[15px] font-medium text-[#000000] transition-colors hover:bg-gray-100 mb-8" style={{ background: '#FFFFFF', border: '1px solid rgba(255,255,255,0.1)' }}>
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            Continuar com Google
          </button>

          <div className="flex items-center gap-4 mb-8">
            <div className="flex-1 h-px bg-white/[0.1]" />
            <span className="text-[12px] text-[#A0A0A0] uppercase font-medium">ou</span>
            <div className="flex-1 h-px bg-white/[0.1]" />
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="flex flex-col gap-1.5">
              <label className="text-[14px] text-[#A0A0A0]">Email</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#A0A0A0]" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="seu@email.com"
                  required
                  className="w-full pl-12 pr-4 py-3 rounded-lg text-[15px] text-[#FFFFFF] placeholder:text-[#666] focus:outline-none focus:border-[#FF6B00] transition-colors"
                  style={{ background: '#0A0A0A', border: '1px solid rgba(255,255,255,0.1)' }}
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-[14px] text-[#A0A0A0]">Senha</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#A0A0A0]" />
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                  className="w-full pl-12 pr-12 py-3 rounded-lg text-[15px] text-[#FFFFFF] placeholder:text-[#666] focus:outline-none focus:border-[#FF6B00] transition-colors"
                  style={{ background: '#0A0A0A', border: '1px solid rgba(255,255,255,0.1)' }}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[#A0A0A0] hover:text-[#FFFFFF] transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
              <div className="flex justify-end mt-1">
                <Link href="/forgot-password" className="text-[14px] text-[#FF6B00] hover:underline">
                  Esqueceu a senha?
                </Link>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 py-3.5 mt-2 rounded-xl bg-[#FF6B00] hover:bg-orange-600 text-[#FFFFFF] text-[15px] font-bold transition-all disabled:opacity-50"
            >
              {loading ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  Entrar
                  <ArrowRight className="w-5 h-5" />
                </>
              )}
            </button>
          </form>

          <p className="text-center text-[15px] text-[#A0A0A0] mt-8">
            Não tem conta?{" "}
            <Link href="/register" className="text-[#FF6B00] font-bold hover:underline">
              Cadastre-se
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
