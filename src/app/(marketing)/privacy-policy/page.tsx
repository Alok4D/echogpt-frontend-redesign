'use client';

import React from 'react';
import Navbar from '@/components/landing/Navbar';
import Footer from '@/components/landing/Footer';
import { Shield, Lock, Eye, FileText } from 'lucide-react';

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />
      <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 py-32 space-y-8">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold text-emerald-500 bg-emerald-500/10 border border-emerald-500/20">
            <Shield className="w-3.5 h-3.5" />
            <span>Zero-Retention Privacy Policy</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-foreground">Privacy Policy</h1>
          <p className="text-xs text-muted-foreground">Last updated: September 27, 2026</p>
        </div>

        <div className="prose dark:prose-invert max-w-none text-xs sm:text-sm text-muted-foreground space-y-6 leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-base font-bold text-foreground">1. Zero Data Training Guarantee</h2>
            <p>At EchoGPT, privacy is our foundational architecture. We enforce strict agreements with our AI foundation model providers (OpenAI, Anthropic, Google, and DeepSeek) ensuring that none of your proprietary prompts, code snippets, or conversations are ever used to train public machine learning models.</p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-foreground">2. Encryption in Transit & Rest</h2>
            <p>All data transmitted between your browser, our Chrome Extension, and the EchoGPT backend is encrypted using industry-standard TLS 1.3 encryption protocols. Local conversation caches are stored exclusively on your device client-side.</p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-foreground">3. Browser Extension Permissions</h2>
            <p>The EchoGPT Chrome Extension only accesses active tab content when you explicitly highlight text or invoke the floating action toolbar. We do not track keystrokes or background browsing history.</p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
