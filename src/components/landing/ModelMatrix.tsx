'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Sparkles, Cpu, Zap, CheckCircle2, ArrowRight, ShieldCheck } from 'lucide-react';
import { AI_MODELS } from '@/data/landingData';

export default function ModelMatrix() {
  const [activeFilter, setActiveFilter] = useState<'All' | 'Advanced' | 'Reasoning' | 'Coding'>('All');

  const filteredModels = activeFilter === 'All' 
    ? AI_MODELS 
    : AI_MODELS.filter(m => m.category === activeFilter || (activeFilter === 'Coding' && m.capabilities.some(c => c.toLowerCase().includes('code'))));

  return (
    <section id="models" className="py-24 relative bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold text-[#5B4FE1] bg-[#5B4FE1]/10 border border-[#5B4FE1]/20">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Model Matrix</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-foreground tracking-tight">
              Access the World&apos;s Best{' '}
              <span className="chatter-gradient-text">
                Intelligence
              </span>
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base">
              No need to switch tools or manage multiple API keys. Choose the exact brain best suited for your coding, writing, or reasoning task.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-1.5 p-1 rounded-2xl bg-card border border-border/80 overflow-x-auto no-scrollbar">
            {(['All', 'Advanced', 'Reasoning', 'Coding'] as const).map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all shrink-0 ${
                  activeFilter === filter
                    ? 'bg-[#5B4FE1] text-white shadow-md shadow-[#5B4FE1]/30'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                }`}
              >
                {filter === 'All' ? 'All Engines' : filter}
              </button>
            ))}
          </div>
        </div>

        {/* Models Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredModels.map((model) => (
            <div
              key={model.id}
              className="relative rounded-3xl p-6 bg-card/80 border border-border/80 hover:border-[#5B4FE1]/50 backdrop-blur-xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              {model.popular && (
                <div className="absolute -top-3 right-6 px-3 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-gradient-to-r from-[#5B4FE1] to-[#7C3AED] text-white shadow-md">
                  Most Used
                </div>
              )}

              <div className="space-y-4">
                {/* Header */}
                <div className="flex items-center gap-3">
                  <div
                    className="w-11 h-11 rounded-2xl flex items-center justify-center font-bold text-sm text-white shadow-md"
                    style={{ backgroundColor: model.color }}
                  >
                    {model.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="text-base font-extrabold text-foreground group-hover:text-[#5B4FE1] dark:group-hover:text-[#A78BFA] transition-colors">
                      {model.name}
                    </h3>
                    <span className="text-xs text-muted-foreground font-medium">
                      by {model.provider}
                    </span>
                  </div>
                </div>

                <p className="text-xs text-muted-foreground leading-relaxed">
                  {model.description}
                </p>

                {/* Specs */}
                <div className="grid grid-cols-2 gap-2 pt-2 text-xs">
                  <div className="p-2.5 rounded-xl bg-muted/50 border border-border/40">
                    <span className="text-[10px] text-muted-foreground block font-medium">Context Window</span>
                    <span className="font-bold text-foreground font-mono">{model.contextWindow}</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-muted/50 border border-border/40">
                    <span className="text-[10px] text-muted-foreground block font-medium">Response Speed</span>
                    <span className="font-bold text-foreground">{model.speed}</span>
                  </div>
                </div>

                {/* Capabilities list */}
                <div className="space-y-1.5 pt-1">
                  <span className="text-[11px] font-semibold text-muted-foreground block">Key Strengths:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {model.capabilities.map((cap, i) => (
                      <span
                        key={i}
                        className="text-[10px] px-2.5 py-1 rounded-lg bg-muted/80 text-foreground/80 font-medium border border-border/30"
                      >
                        {cap}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action */}
              <div className="pt-5 mt-4 border-t border-border/40">
                <Link
                  href={`/chat?model=${model.id}`}
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-bold text-foreground bg-muted hover:bg-[#5B4FE1] hover:text-white transition-all duration-200"
                >
                  <span>Chat with {model.name.split(' ')[0]}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
