import React from 'react';
import Header from '@/components/landing/Header';
import Hero from '@/components/landing/Hero';
import StatsBar from '@/components/landing/StatsBar';
import Features from '@/components/landing/Features';
import ProductInAction from '@/components/landing/ProductInAction';
import HowItWorks from '@/components/landing/HowItWorks';
import Compare from '@/components/landing/Compare';
import Pricing from '@/components/landing/Pricing';
import Testimonials from '@/components/landing/Testimonials';
import FAQ from '@/components/landing/FAQ';
import FinalCTA from '@/components/landing/FinalCTA';
import Footer from '@/components/landing/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-background flex flex-col selection:bg-primary/30 selection:text-white">
      <Header />
      <Hero />
      <StatsBar />
      <Features />
      <ProductInAction />
      <HowItWorks />
      <Compare />
      <Pricing />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
