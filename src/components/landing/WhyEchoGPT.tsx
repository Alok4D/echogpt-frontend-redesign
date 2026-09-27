'use client';

import React from 'react';
import { Check, X, Sparkles, HelpCircle, ShieldCheck, Zap } from 'lucide-react';

export default function WhyEchoGPT() {
  const comparisonItems = [
    {
      feature: 'Access to Claude 3.5 Sonnet, GPT-4o & Gemini 1.5',
      echogpt: 'All in 1 Subscription ($12/mo)',
      traditional: 'Pay 3 Separate Plans ($60+/mo)',
      positive: true,
    },
    {
      feature: 'Side-by-Side Real-Time AI Battle Arena',
      echogpt: 'Native Dual-Screen Compare in 1 Click',
      traditional: 'Impossible (Requires manual copy-pasting across tabs)',
      positive: true,
    },
    {
      feature: 'Persistent Browser Extension Sidebar',
      echogpt: 'Integrated on any webpage & document',
      traditional: 'Limited or separate extension needed',
      positive: true,
    },
    {
      feature: 'Floating Highlight Quick-Action Toolbar',
      echogpt: 'Instant Summarize, Explain, Fix Grammar',
      traditional: 'Must copy text & open separate website',
      positive: true,
    },
    {
      feature: 'Integrated AI Resume & Academic SOP Builder',
      echogpt: 'Built-in Specialized Generators',
      traditional: 'Requires separate $19/mo specialized SaaS',
      positive: true,
    },
    {
      feature: 'Zero Training on User Data Policy',
      echogpt: 'Strict TLS 1.3 & Zero Data Retention',
      traditional: 'Opt-out buried in obscure settings',
      positive: true,
    },
  ];

  return (
    <section className="py-24 relative bg-muted/30 border-y border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold text-emerald-500 bg-emerald-500/10 border border-emerald-500/20">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Smart Economics & Workflow</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-foreground tracking-tight">
            Why Switch to{' '}
            <span className="bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 bg-clip-text text-transparent">
              EchoGPT
            </span>
            ?
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg">
            Compare the difference between managing fragmented individual AI subscriptions versus our unified power platform.
          </p>
        </div>

        {/* Comparison Table Card */}
        <div className="max-w-4xl mx-auto rounded-3xl border border-border/80 bg-card/90 backdrop-blur-xl shadow-2xl overflow-hidden">
          <div className="grid grid-cols-12 p-4 sm:p-6 border-b border-border/70 bg-muted/50 text-xs sm:text-sm font-bold">
            <div className="col-span-5 sm:col-span-6 text-foreground">Capability / Feature</div>
            <div className="col-span-4 sm:col-span-3 text-blue-500 flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>EchoGPT</span>
            </div>
            <div className="col-span-3 sm:col-span-3 text-muted-foreground">Standard AI Bots</div>
          </div>

          <div className="divide-y divide-border/40">
            {comparisonItems.map((item, idx) => (
              <div key={idx} className="grid grid-cols-12 p-4 sm:p-6 items-center text-xs sm:text-sm hover:bg-muted/30 transition-colors">
                <div className="col-span-5 sm:col-span-6 font-semibold text-foreground pr-2">
                  {item.feature}
                </div>
                
                {/* EchoGPT Column */}
                <div className="col-span-4 sm:col-span-3 flex items-start sm:items-center gap-2 font-medium text-emerald-600 dark:text-emerald-400">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0 mt-0.5 sm:mt-0">
                    <Check className="w-3.5 h-3.5 text-emerald-500" />
                  </div>
                  <span className="text-xs sm:text-sm">{item.echogpt}</span>
                </div>

                {/* Traditional Column */}
                <div className="col-span-3 sm:col-span-3 flex items-start sm:items-center gap-2 font-medium text-muted-foreground">
                  <div className="w-5 h-5 rounded-full bg-rose-500/20 flex items-center justify-center shrink-0 mt-0.5 sm:mt-0">
                    <X className="w-3.5 h-3.5 text-rose-500" />
                  </div>
                  <span className="text-xs sm:text-sm">{item.traditional}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Banner */}
          <div className="p-6 bg-gradient-to-r from-blue-600/10 via-indigo-600/10 to-transparent border-t border-border/60 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="font-bold text-foreground text-sm">Save over $480/year with unified intelligence</h4>
              <p className="text-xs text-muted-foreground">Zero setup fees. Cancel anytime with 1 click.</p>
            </div>
            <a
              href="#pricing"
              className="px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 shadow-md shadow-blue-600/30 transition-all shrink-0"
            >
              See Pricing Plans
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
