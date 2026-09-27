'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Check, Sparkles, Zap, ArrowRight, ShieldCheck, HelpCircle } from 'lucide-react';
import { PRICING_PLANS } from '@/data/landingData';

export default function PricingTiers() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  return (
    <section id="pricing" className="py-24 relative bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold text-blue-500 bg-blue-500/10 border border-blue-500/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Simple, Transparent Pricing</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-foreground tracking-tight">
            One Plan. All Top-Tier{' '}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              AI Models.
            </span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg">
            Choose the plan that fits your ambition. Switch or cancel anytime with zero cancellation fees.
          </p>

          {/* Billing Cycle Toggle */}
          <div className="pt-4 flex items-center justify-center gap-3">
            <span className={`text-xs font-bold ${billingCycle === 'monthly' ? 'text-foreground' : 'text-muted-foreground'}`}>
              Monthly Billing
            </span>
            <button
              onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
              className="w-14 h-7 rounded-full bg-muted border border-border/80 p-1 flex items-center transition-all relative"
            >
              <div
                className={`w-5 h-5 rounded-full bg-blue-600 shadow-md transition-transform duration-300 ${
                  billingCycle === 'yearly' ? 'translate-x-7' : 'translate-x-0'
                }`}
              />
            </button>
            <span className={`text-xs font-bold flex items-center gap-1.5 ${billingCycle === 'yearly' ? 'text-foreground' : 'text-muted-foreground'}`}>
              <span>Yearly Billing</span>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-emerald-500/20 text-emerald-500 border border-emerald-500/30">
                Save 30%
              </span>
            </span>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          {PRICING_PLANS.map((plan) => {
            const price = billingCycle === 'yearly' ? Math.round(plan.priceYearly / 12) : plan.priceMonthly;

            return (
              <div
                key={plan.id}
                className={`relative rounded-3xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
                  plan.popular
                    ? 'bg-card/95 border-2 border-blue-500 shadow-2xl shadow-blue-500/15 scale-105 z-10'
                    : 'bg-card/70 border border-border/70 hover:border-border shadow-md'
                } backdrop-blur-xl`}
              >
                {plan.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-[11px] font-black uppercase tracking-wider bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg">
                    {plan.badge}
                  </div>
                )}

                <div className="space-y-6">
                  {/* Plan Name & Description */}
                  <div className="space-y-2">
                    <h3 className="text-xl font-black text-foreground">{plan.name}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{plan.description}</p>
                  </div>

                  {/* Price */}
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl sm:text-5xl font-black text-foreground font-mono">
                      ${price}
                    </span>
                    <span className="text-xs text-muted-foreground font-medium">
                      / month {billingCycle === 'yearly' && plan.priceYearly > 0 ? `(billed $${plan.priceYearly}/yr)` : ''}
                    </span>
                  </div>

                  {/* Limits Badge */}
                  <div className="p-3 rounded-2xl bg-muted/60 border border-border/50 space-y-1">
                    <span className="text-[10px] font-bold text-blue-500 uppercase tracking-wider block">Usage Limits</span>
                    <span className="text-xs font-semibold text-foreground block">{plan.tokensMonthly}</span>
                  </div>

                  {/* Features List */}
                  <div className="space-y-2.5 pt-2">
                    <span className="text-xs font-bold text-foreground block">Included Features:</span>
                    <ul className="space-y-2 text-xs text-muted-foreground">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span className="text-foreground/90">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* CTA Action Button */}
                <div className="pt-8 mt-6 border-t border-border/40">
                  <Link
                    href={`/chat?plan=${plan.id}`}
                    className={`w-full py-3.5 rounded-2xl text-xs font-bold transition-all flex items-center justify-center gap-2 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 text-white shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 hover:-translate-y-0.5'
                        : 'bg-muted hover:bg-muted/80 text-foreground border border-border/60'
                    }`}
                  >
                    <span>{plan.ctaText}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Security & Guarantee Note */}
        <div className="mt-12 text-center text-xs text-muted-foreground flex flex-wrap items-center justify-center gap-6">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-500" />
            <span>30-Day Money Back Guarantee</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Zap className="w-4 h-4 text-blue-500" />
            <span>Instant Activation & Setup</span>
          </div>
        </div>

      </div>
    </section>
  );
}
