import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "ClosePet — O Sistema Operacional do Seu Pet",
  description:
    "Saúde, rotina, finanças, adestramento e IA — tudo em um só lugar. A central inteligente da vida do seu pet.",
  keywords: [
    "pet",
    "saúde animal",
    "gestão de pet",
    "adestramento",
    "veterinário",
    "cachorro",
    "gato",
    "closepet",
  ],
  openGraph: {
    title: "ClosePet — O Sistema Operacional do Seu Pet",
    description:
      "Saúde, rotina, finanças, adestramento e IA — tudo em um só lugar.",
    type: "website",
    locale: "pt_BR",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${plusJakarta.variable} ${jetBrainsMono.variable}`} suppressHydrationWarning>
      <body className="bg-[#050505] text-[#CCC] font-sans antialiased min-h-screen">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
