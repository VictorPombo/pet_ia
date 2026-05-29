"use client";

import { useState } from "react";
import Link from "next/link";
import { Mail, ArrowLeft, Send, CheckCircle, ShieldCheck, Zap, Heart, PawPrint } from "lucide-react";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // TODO: Integrate with Supabase auth
    setTimeout(() => {
      setLoading(false);
      setSent(true);
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

          {sent ? (
            <div className="flex flex-col items-center justify-center text-center">
              <div className="w-16 h-16 rounded-full bg-[#22C55E]/10 flex items-center justify-center mb-6">
                <CheckCircle className="w-8 h-8 text-[#22C55E]" />
              </div>
              <h3 className="text-2xl font-bold text-[#FFFFFF] mb-2">Email enviado!</h3>
              <p className="text-[#A0A0A0] text-[15px] mb-8">
                Enviamos um link de recuperação para <span className="font-bold text-white">{email}</span>. Verifique sua caixa de entrada e spam.
              </p>
              <Link href="/login" className="flex items-center gap-2 text-[#FF6B00] font-bold hover:underline">
                <ArrowLeft className="w-5 h-5" />
                Voltar para login
              </Link>
            </div>
          ) : (
            <>
              <div className="mb-8">
                <h1 className="text-[28px] font-bold text-[#FFFFFF] mb-2">Recuperar senha</h1>
                <p className="text-[#A0A0A0] text-[15px]">Enviaremos um link para redefinir sua senha</p>
              </div>

              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
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

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-[#FF6B00] hover:bg-orange-600 text-[#FFFFFF] text-[15px] font-bold transition-all disabled:opacity-50"
                >
                  {loading ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      Enviar link de recuperação
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </button>
              </form>

              <div className="mt-8">
                <Link href="/login" className="flex items-center gap-2 text-[#FF6B00] font-bold hover:underline">
                  <ArrowLeft className="w-5 h-5" />
                  Voltar para login
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
