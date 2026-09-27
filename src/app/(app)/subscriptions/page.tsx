'use client';

import React from 'react';
import { useChat } from '@/context/ChatContext';
import { PRICING_PLANS, FAQS } from '@/data/landingData';
import { CreditCard, Crown, Sparkles, Check, ArrowRight, ShieldCheck, Zap } from 'lucide-react';

export default function SubscriptionsPage() {
  const { proTokensRemaining, setIsUpgradeModalOpen } = useChat();

  return (
    <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-8">
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* Header Banner */}
        <div className="p-8 rounded-3xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700 text-white shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-white/20 text-white backdrop-blur-md">
              <Crown className="w-3.5 h-3.5 text-amber-300" />
              <span>Current Status: Pro Membership Active</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black">
              EchoGPT Pro Unlimited Tier
            </h1>
            <p className="text-xs sm:text-sm text-blue-100 max-w-xl">
              You have active access to Claude 3.5 Sonnet, GPT-4o, DeepSeek R1, AI Image Studio, and the Chrome Extension Sidebar.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 text-center space-y-1 shrink-0">
            <span className="text-[10px] uppercase font-bold text-blue-200">Flagship Chats Remaining</span>
            <div className="text-3xl font-black font-mono">{proTokensRemaining} / 1500</div>
            <span className="text-[10px] text-emerald-300 font-medium">Auto-refills in 24 days</span>
          </div>
        </div>

        {/* Upgrade / Change Plan Cards */}
        <div className="space-y-4">
          <h2 className="text-lg font-black text-foreground">Available Subscription Plans</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PRICING_PLANS.map((plan) => (
              <div
                key={plan.id}
                className={`p-6 rounded-3xl bg-card border flex flex-col justify-between space-y-6 ${
                  plan.popular ? 'border-2 border-blue-500 shadow-xl' : 'border-border/70 shadow-sm'
                }`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-base font-bold text-foreground">{plan.name}</h3>
                    {plan.popular && (
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-black bg-blue-600 text-white">
                        Active
                      </span>
                    )}
                  </div>

                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-black text-foreground font-mono">${plan.priceMonthly}</span>
                    <span className="text-xs text-muted-foreground">/month</span>
                  </div>

                  <p className="text-xs text-muted-foreground">{plan.description}</p>

                  <ul className="space-y-2 text-xs text-foreground/90 pt-2 border-t border-border/40">
                    {plan.features.map((f, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => setIsUpgradeModalOpen(true)}
                  className={`w-full py-2.5 rounded-xl text-xs font-bold transition-all ${
                    plan.popular
                      ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-md'
                      : 'bg-muted hover:bg-muted/80 text-foreground border border-border/60'
                  }`}
                >
                  {plan.popular ? 'Manage Current Tier' : 'Switch to Plan'}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="space-y-4 pt-4 border-t border-border/40">
          <h2 className="text-lg font-black text-foreground">Subscriptions FAQ</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {FAQS.slice(0, 4).map((f) => (
              <div key={f.id} className="p-4 rounded-2xl bg-card border border-border/70 space-y-1.5 text-xs">
                <h4 className="font-bold text-foreground">{f.question}</h4>
                <p className="text-muted-foreground leading-relaxed">{f.answer}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
