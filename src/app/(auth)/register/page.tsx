"use client";

import { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff, Mail, Lock, User, ArrowRight, Check, PawPrint, ShieldCheck, Zap, Heart } from "lucide-react";

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [loading, setLoading] = useState(false);

  const passwordStrength = () => {
    if (password.length === 0) return { level: 0, label: "", color: "" };
    if (password.length < 6) return { level: 1, label: "Fraca", color: "bg-red-500" };
    if (password.length < 8) return { level: 2, label: "Média", color: "bg-yellow-500" };
    if (/[A-Z]/.test(password) && /[0-9]/.test(password) && password.length >= 8)
      return { level: 3, label: "Forte", color: "bg-green-500" };
    return { level: 2, label: "Média", color: "bg-yellow-500" };
  };

  const strength = passwordStrength();
  const passwordsMatch = confirmPassword.length > 0 && password === confirmPassword;
  const passwordsDontMatch = confirmPassword.length > 0 && password !== confirmPassword;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) return;
    setLoading(true);
    // TODO: Integrate with Supabase auth
    setTimeout(() => {
      setLoading(false);
      window.location.href = "/onboarding";
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
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-orange-700 flex items-center justify-center shadow-[0_0_20px_rgba(255,107,0,0.3)]">
              <PawPrint className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white tracking-tight">
              Close<span className="text-primary">Pet</span>
            </span>
          </div>

          {/* Heading */}
          <div className="mb-8">
            <h1 className="text-[28px] font-bold text-white mb-2 tracking-tight">Crie sua conta</h1>
            <p className="text-[#666] text-[14px]">Comece gratuitamente. Sem cartão de crédito.</p>
          </div>

          {/* Google Button */}
          <button className="w-full flex items-center justify-center gap-3 py-3.5 rounded-xl text-[14px] font-medium text-white transition-all duration-200 hover:bg-white/[0.06]" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            Continuar com Google
          </button>

          {/* Divider */}
          <div className="flex items-center gap-4 my-7">
            <div className="flex-1 h-px bg-white/[0.06]" />
            <span className="text-[11px] text-[#555] uppercase tracking-widest font-medium">ou</span>
            <div className="flex-1 h-px bg-white/[0.06]" />
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            
            {/* Name */}
            <div>
              <label className="block text-[13px] font-medium text-[#999] mb-2">Nome completo</label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-[18px] h-[18px] text-[#444]" />
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Como devemos te chamar?"
                  required
                  className="w-full pl-12 pr-4 py-3.5 rounded-xl text-[14px] text-white placeholder:text-[#444] focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                  style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-[13px] font-medium text-[#999] mb-2">Email</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-[18px] h-[18px] text-[#444]" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="seu@email.com"
                  required
                  className="w-full pl-12 pr-4 py-3.5 rounded-xl text-[14px] text-white placeholder:text-[#444] focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                  style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-[13px] font-medium text-[#999] mb-2">Senha</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-[18px] h-[18px] text-[#444]" />
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Mínimo 6 caracteres"
                  required
                  minLength={6}
                  className="w-full pl-12 pr-12 py-3.5 rounded-xl text-[14px] text-white placeholder:text-[#444] focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                  style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[#555] hover:text-[#999] transition-colors"
                >
                  {showPassword ? <EyeOff className="w-[18px] h-[18px]" /> : <Eye className="w-[18px] h-[18px]" />}
                </button>
              </div>
              {/* Password Strength */}
              {password.length > 0 && (
                <div className="mt-3 flex items-center gap-3">
                  <div className="flex-1 flex gap-1.5">
                    {[1, 2, 3].map((level) => (
                      <div
                        key={level}
                        className={`h-1 flex-1 rounded-full transition-all duration-300 ${
                          level <= strength.level ? strength.color : "bg-white/[0.06]"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-[11px] text-[#666] font-medium">{strength.label}</span>
                </div>
              )}
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-[13px] font-medium text-[#999] mb-2">Confirmar senha</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-[18px] h-[18px] text-[#444]" />
                <input
                  type={showPassword ? "text" : "password"}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Repita a senha"
                  required
                  className="w-full pl-12 pr-12 py-3.5 rounded-xl text-[14px] text-white placeholder:text-[#444] focus:outline-none focus:ring-2 transition-all"
                  style={{
                    background: 'rgba(255,255,255,0.03)',
                    border: passwordsDontMatch
                      ? '1px solid rgba(239,68,68,0.5)'
                      : passwordsMatch
                      ? '1px solid rgba(34,197,94,0.5)'
                      : '1px solid rgba(255,255,255,0.08)',
                  }}
                />
                {passwordsMatch && (
                  <Check className="absolute right-4 top-1/2 -translate-y-1/2 w-[18px] h-[18px] text-green-500" />
                )}
              </div>
              {passwordsDontMatch && (
                <p className="text-[12px] text-red-400 mt-1.5">As senhas não coincidem</p>
              )}
            </div>

            {/* Terms */}
            <label className="flex items-start gap-3 cursor-pointer mt-1">
              <div className="relative mt-0.5">
                <input
                  type="checkbox"
                  checked={acceptTerms}
                  onChange={(e) => setAcceptTerms(e.target.checked)}
                  className="sr-only peer"
                  required
                />
                <div className="w-5 h-5 rounded-md peer-checked:bg-primary peer-checked:border-primary transition-all flex items-center justify-center" style={{ border: '1px solid rgba(255,255,255,0.15)' }}>
                  {acceptTerms && <Check className="w-3.5 h-3.5 text-white" />}
                </div>
              </div>
              <span className="text-[12px] text-[#666] leading-relaxed">
                Li e aceito os{" "}
                <a href="#" className="text-primary hover:underline">Termos de Uso</a> e a{" "}
                <a href="#" className="text-primary hover:underline">Política de Privacidade</a>
              </span>
            </label>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading || !acceptTerms || passwordsDontMatch}
              className="group relative w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-primary hover:bg-orange-600 text-white text-[14px] font-bold transition-all duration-300 shadow-[0_0_30px_rgba(255,107,0,0.2)] hover:shadow-[0_0_40px_rgba(255,107,0,0.35)] disabled:opacity-40 disabled:cursor-not-allowed disabled:shadow-none overflow-hidden mt-2"
            >
              {loading ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  Criar minha conta
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </>
              )}
              {/* Shine effect */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/15 to-transparent" />
            </button>
          </form>

          {/* Login Link */}
          <p className="text-center text-[13px] text-[#555] mt-8">
            Já tem conta?{" "}
            <Link href="/login" className="text-primary font-medium hover:underline">
              Faça login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
