'use client';

import React from 'react';
import Navbar from '@/components/landing/Navbar';
import HeroSection from '@/components/landing/HeroSection';
import FeatureGrid from '@/components/landing/FeatureGrid';
import ModelMatrix from '@/components/landing/ModelMatrix';
import ProductPreview from '@/components/landing/ProductPreview';
import WhyEchoGPT from '@/components/landing/WhyEchoGPT';
import ExtensionShowcase from '@/components/landing/ExtensionShowcase';
import PricingTiers from '@/components/landing/PricingTiers';
import FAQSection from '@/components/landing/FAQSection';
import CTASection from '@/components/landing/CTASection';
import Footer from '@/components/landing/Footer';

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground transition-colors duration-300">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <FeatureGrid />
        <ModelMatrix />
        <ProductPreview />
        <WhyEchoGPT />
        <ExtensionShowcase />
        <PricingTiers />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
