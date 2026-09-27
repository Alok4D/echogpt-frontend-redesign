'use client';

import React, { useState } from 'react';
import { useChat } from '@/context/ChatContext';
import { Sparkles, Check, X, Zap, ShieldCheck, ArrowRight, Star } from 'lucide-react';

export default function UpgradeProModal() {
  const { isUpgradeModalOpen, setIsUpgradeModalOpen } = useChat();
  const [selectedPlan, setSelectedPlan] = useState<'1month' | '3months' | '6months' | '1year'>('1year');

  if (!isUpgradeModalOpen) return null;

  const packages = [
    {
      id: '1month',
      duration: '1 Month Pro',
      price: '$12',
      perMonth: '$12/mo',
      savings: null,
      desc: 'Experience unlimited chats & flagship reasoning for 30 days.',
    },
    {
      id: '3months',
      duration: '3 Months Pro',
      price: '$32',
      perMonth: '$10.60/mo',
      savings: 'Save 12%',
      desc: 'Quarterly billing discount with full multi-model access.',
    },
    {
      id: '6months',
      duration: '6 Months Pro',
      price: '$59',
      perMonth: '$9.80/mo',
      savings: 'Save 18%',
      desc: 'Enjoy half a year of uncapped AI power and priority queue.',
    },
    {
      id: '1year',
      duration: '1 Year Pro (Best Value)',
      price: '$99',
      perMonth: '$8.25/mo',
      popular: true,
      savings: 'Save 32%',
      desc: 'Access all flagship models, image studio, and browser extension for a full year.',
    }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-2xl rounded-3xl bg-card border border-border/80 p-6 sm:p-8 shadow-2xl overflow-hidden">
        
        {/* Close button */}
        <button
          onClick={() => setIsUpgradeModalOpen(false)}
          className="absolute top-5 right-5 p-2 rounded-full text-muted-foreground hover:text-foreground bg-muted hover:bg-muted/80"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Header */}
        <div className="space-y-2 mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold text-blue-500 bg-blue-500/10 border border-blue-500/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>EchoGPT Pro Membership</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-foreground">
            Unlock Full Flagship Multi-AI Power
          </h2>
          <p className="text-xs sm:text-sm text-muted-foreground">
            Unlimited Claude 3.5 Sonnet, GPT-4o, DeepSeek R1, AI Image Studio & Side-by-Side Dual AI Comparisons.
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-6">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              onClick={() => setSelectedPlan(pkg.id as any)}
              className={`relative cursor-pointer rounded-2xl p-4 border transition-all ${
                selectedPlan === pkg.id
                  ? 'border-blue-500 bg-blue-500/5 shadow-md scale-[1.02]'
                  : 'border-border/70 hover:border-border bg-muted/30'
              }`}
            >
              {pkg.popular && (
                <span className="absolute -top-2.5 right-4 px-2.5 py-0.5 rounded-full text-[9px] font-black uppercase bg-blue-600 text-white shadow">
                  Best Value
                </span>
              )}

              <div className="flex items-center justify-between mb-1.5">
                <h4 className="text-sm font-bold text-foreground">{pkg.duration}</h4>
                {pkg.savings && (
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                    {pkg.savings}
                  </span>
                )}
              </div>

              <div className="flex items-baseline gap-1.5 mb-1">
                <span className="text-2xl font-black text-foreground font-mono">{pkg.price}</span>
                <span className="text-xs text-muted-foreground font-medium">({pkg.perMonth})</span>
              </div>

              <p className="text-[11px] text-muted-foreground leading-tight">{pkg.desc}</p>
            </div>
          ))}
        </div>

        {/* Feature Highlights */}
        <div className="grid grid-cols-2 gap-2 text-xs text-muted-foreground mb-6 p-3.5 rounded-2xl bg-muted/40 border border-border/40">
          <div className="flex items-center gap-1.5">
            <Check className="w-3.5 h-3.5 text-emerald-500" />
            <span>Uncapped Claude & GPT-4o</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Check className="w-3.5 h-3.5 text-emerald-500" />
            <span>Side-by-Side Model Arena</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Check className="w-3.5 h-3.5 text-emerald-500" />
            <span>Chrome Extension Full Access</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Check className="w-3.5 h-3.5 text-emerald-500" />
            <span>Priority Fast Compute Queue</span>
          </div>
        </div>

        {/* Action Button */}
        <div className="flex items-center justify-between gap-4">
          <button
            onClick={() => setIsUpgradeModalOpen(false)}
            className="px-5 py-3 rounded-xl text-xs font-bold text-muted-foreground hover:text-foreground"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              alert('Redirecting to secure payment checkout for ' + selectedPlan);
              setIsUpgradeModalOpen(false);
            }}
            className="flex-1 py-3 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2"
          >
            <span>Proceed to Checkout</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
}
