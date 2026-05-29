import React from 'react';
import Header from '@/components/landing/Header';
import Hero from '@/components/landing/Hero';
import FeaturesBar from '@/components/landing/FeaturesBar';
import HowItWorks from '@/components/landing/HowItWorks';
import StatsBar from '@/components/landing/StatsBar';
import AllFeatures from '@/components/landing/AllFeatures';
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
      <FeaturesBar />
      <HowItWorks />
      <StatsBar />
      <AllFeatures />
      <Compare />
      <Pricing />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
