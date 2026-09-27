'use client';

import React from 'react';
import Link from 'next/link';
import { Sparkles, Chrome, ArrowRight, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Glow Container */}
        <div className="relative rounded-3xl p-8 sm:p-14 lg:p-16 overflow-hidden bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 text-white shadow-2xl shadow-blue-600/25">
          
          {/* Background Decorative Rings */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-white/10 blur-2xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-cyan-400/15 blur-2xl pointer-events-none" />

          <div className="relative max-w-3xl mx-auto text-center space-y-6">
            
            {/* Top Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold bg-white/10 border border-white/20 text-white backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
              <span>Ready to transform your productivity?</span>
            </div>

            {/* Title */}
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
              Start Using Every AI Engine in One Place Today.
            </h2>

            {/* Description */}
            <p className="text-base sm:text-lg text-blue-100 max-w-2xl mx-auto leading-relaxed">
              Join thousands of developers, researchers, and creators leveraging EchoGPT for faster coding, research, and browsing.
            </p>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/chat"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl text-sm font-black text-blue-900 bg-white hover:bg-blue-50 shadow-2xl hover:shadow-white/20 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
              >
                <Sparkles className="w-4 h-4 text-blue-600" />
                <span>Launch Web App Free</span>
                <ArrowRight className="w-4 h-4 ml-0.5" />
              </Link>

              <a
                href="https://chromewebstore.google.com/detail/echogpt-multi-ai-chat-sid/negimdcamohmoheiifgecbjgjepkcfhj"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl text-sm font-bold text-white bg-white/15 hover:bg-white/25 border border-white/25 backdrop-blur-md hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
              >
                <Chrome className="w-4 h-4 text-cyan-300" />
                <span>Get Chrome Extension</span>
              </a>
            </div>

            {/* Footer Trust Markers */}
            <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-blue-100/90 font-medium">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-300" />
                <span>Free Tier Available</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Zap className="w-4 h-4 text-cyan-300" />
                <span>No Credit Card Required</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-cyan-300" />
                <span>Private & Encrypted</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
