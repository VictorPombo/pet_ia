import React from "react";
import Sidebar from "@/components/dashboard/Sidebar";

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#FFFFFF] font-sans">
      <Sidebar />
      <main className="md:ml-[260px] p-4 pb-24 md:p-8 md:pb-8 min-h-screen relative overflow-hidden">
        {/* Decorative background glow for the whole app */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[#FF6B00]/5 blur-[120px] rounded-full pointer-events-none -z-10" />
        
        {/* Main Content Area */}
        <div className="max-w-7xl mx-auto w-full relative z-10">
          {children}
        </div>
      </main>
    </div>
  );
}
