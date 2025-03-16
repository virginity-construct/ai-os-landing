import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import AgentSystem from '@/components/AgentSystem';
import Testimonials from '@/components/Testimonials';
import WaitlistForm from '@/components/WaitlistForm';
import InvestorSection from '@/components/InvestorSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />
      <Hero />
      <Features />
      <AgentSystem />
      <Testimonials />
      <WaitlistForm />
      <InvestorSection />
      <Footer />
    </main>
  );
}
