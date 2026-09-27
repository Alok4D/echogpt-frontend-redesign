'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Zap,
  Bot,
  Layers,
  Sparkles,
  Paperclip,
  Smile,
  Send,
  MoreVertical,
  Chrome,
  ArrowRight,
  SplitSquareVertical,
  BrainCircuit,
} from 'lucide-react';

const FEATURE_CARDS = [
  {
    icon: <Bot className="w-5 h-5 text-[#5B4FE1]" />,
    title: "Multi-AI Chat",
    description: "Switch seamlessly between GPT-4o, Claude 3.5 Sonnet, Gemini 1.5, and DeepSeek R1.",
  },
  {
    icon: <SplitSquareVertical className="w-5 h-5 text-[#5B4FE1]" />,
    title: "Side-by-Side Arena",
    description: "Prompt multiple flagship models in parallel and compare latency, code, and reasoning.",
  },
  {
    icon: <Chrome className="w-5 h-5 text-[#5B4FE1]" />,
    title: "Chrome Extension",
    description: "Always-on browser sidebar to summarize articles, write emails, and chat on any webpage.",
  },
  {
    icon: <Sparkles className="w-5 h-5 text-[#5B4FE1]" />,
    title: "AI Creative Studios",
    description: "Generate cinematic images & videos, optimize ATS resumes, and craft academic SOPs.",
  },
];

export default function HeroSection() {
  return (
    <section className="relative pt-24 pb-16 md:pt-28 md:pb-24 bg-background overflow-hidden">
      
      {/* ── Panoramic Real Banner Background Image ── */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src="/banner-images/real-banner-background.png"
          alt="Hero background banner"
          fill
          priority
          className="object-cover lg:object-contain object-right opacity-90 dark:opacity-20"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* ── Top Hero Grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center min-h-[500px]">
          
          {/* Left Column: Text + Badges + CTAs (5 Cols) */}
          <div className="lg:col-span-5 text-center lg:text-left flex flex-col items-center lg:items-start z-10">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EDE9FE]/90 dark:bg-[#5B4FE1]/15 border border-[#DDD6FE] dark:border-[#5B4FE1]/30 text-[#5B4FE1] dark:text-[#A78BFA] text-xs font-semibold mb-6 shadow-xs">
              <Zap className="w-3.5 h-3.5 fill-[#5B4FE1] text-[#5B4FE1]" />
              <span>Multi-AI Workspace • Chrome Sidebar • No API Keys</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold text-foreground tracking-tight leading-[1.08] mb-5 font-sans">
              One Workspace. <br />
              Every Flagship <span className="text-[#5B4FE1]">AI Engine</span>
            </h1>

            {/* Subtitle Description */}
            <p className="text-[15px] sm:text-[16px] text-muted-foreground leading-relaxed mb-8 max-w-md">
              Stop paying for 5 separate subscriptions. Access <strong className="text-foreground">GPT-4o</strong>, <strong className="text-foreground">Claude 3.5 Sonnet</strong>, <strong className="text-foreground">Gemini 1.5 Pro</strong>, and <strong className="text-foreground">DeepSeek R1</strong> in one unified chat & sidebar.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5">
              <Link
                href="/chat"
                className="inline-flex items-center justify-center gap-2 text-[14.5px] font-semibold text-white px-7 py-3 rounded-lg bg-[#5B4FE1] hover:bg-[#4E39E0] shadow-md shadow-[#5B4FE1]/30 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              >
                <span>Launch Web App Free</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="https://chromewebstore.google.com/detail/echogpt-multi-ai-chat-sid/negimdcamohmoheiifgecbjgjepkcfhj"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 text-[14.5px] font-semibold text-foreground px-6 py-3 rounded-lg border border-border bg-card hover:bg-muted transition-all shadow-xs cursor-pointer"
              >
                <Chrome className="w-4 h-4 text-[#5B4FE1]" />
                <span>Add to Chrome</span>
              </a>
            </div>
          </div>

          {/* Right Column: Chat Mockup floating seamlessly on top of background (7 Cols) */}
          <div className="lg:col-span-7 relative flex items-center justify-center lg:justify-end min-h-[400px] lg:min-h-[500px]">
            
            {/* Chat Box Card */}
            <div className="relative z-10 w-full max-w-[480px] bg-card/95 backdrop-blur-md border border-border rounded-2xl shadow-xl shadow-[#5B4FE1]/10 p-5 select-none my-4">
              
              {/* Chat Card Header */}
              <div className="flex items-center justify-between pb-4 border-b border-border/60">
                <div className="flex items-center gap-3">
                  <div className="relative w-10 h-10 rounded-xl bg-gradient-to-tr from-[#5B4FE1] to-[#D946EF] p-[2px] shadow-sm">
                    <div className="w-full h-full bg-background rounded-[10px] flex items-center justify-center">
                      <Sparkles className="w-5 h-5 text-[#5B4FE1]" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-[15px] font-bold text-foreground leading-tight">EchoGPT Arena</h3>
                    <p className="text-[11.5px] text-muted-foreground font-medium mt-0.5 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#10B981] inline-block animate-pulse" />
                      <span>4 Models Connected</span>
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  {/* Overlapping Model Badges Stack */}
                  <div className="flex items-center -space-x-1.5">
                    <div className="w-6 h-6 rounded-full bg-[#10A37F] text-white text-[9px] font-bold flex items-center justify-center ring-2 ring-background" title="OpenAI GPT-4o">
                      G
                    </div>
                    <div className="w-6 h-6 rounded-full bg-[#D97706] text-white text-[9px] font-bold flex items-center justify-center ring-2 ring-background" title="Claude 3.5 Sonnet">
                      C
                    </div>
                    <div className="w-6 h-6 rounded-full bg-[#3B82F6] text-white text-[9px] font-bold flex items-center justify-center ring-2 ring-background" title="Gemini 1.5 Pro">
                      G
                    </div>
                    <div className="w-6 h-6 rounded-full bg-[#4F46E5] text-white text-[9px] font-bold flex items-center justify-center ring-2 ring-background" title="DeepSeek R1">
                      D
                    </div>
                  </div>

                  <Link href="/compare" className="text-muted-foreground hover:text-foreground p-1">
                    <MoreVertical className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Chat Messages */}
              <div className="py-4 space-y-3.5 text-xs sm:text-[13px]">
                
                {/* 1. User Prompt */}
                <div className="flex items-start gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-[#5B4FE1] text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                    U
                  </div>
                  <div className="flex-1 bg-muted/60 border border-border/60 rounded-xl p-3">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-bold text-foreground">You (Multi-Prompt)</span>
                      <span className="text-[10.5px] text-muted-foreground">Just now</span>
                    </div>
                    <p className="text-foreground/90 font-medium">
                      Compare React Server Components vs Client Components in Next.js 15.
                    </p>
                  </div>
                </div>

                {/* 2. Claude 3.5 Sonnet Output */}
                <div className="flex items-start gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-[#D97706] text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                    C
                  </div>
                  <div className="flex-1 bg-[#D97706]/5 border border-[#D97706]/20 rounded-xl p-3">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-bold text-[#D97706] dark:text-amber-400">Claude 3.5 Sonnet</span>
                      <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-[#D97706]/10 text-[#D97706] font-mono">180 t/s</span>
                    </div>
                    <p className="text-foreground/80 leading-relaxed">
                      <strong className="text-foreground">RSC</strong> renders exclusively on server with zero client bundle impact. <strong className="text-foreground">RCC</strong> hydrates on browser for state & interactivity.
                    </p>
                  </div>
                </div>

                {/* 3. DeepSeek R1 Output */}
                <div className="flex items-start gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-[#4F46E5] text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                    D
                  </div>
                  <div className="flex-1 bg-[#4F46E5]/5 border border-[#4F46E5]/20 rounded-xl p-3">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-bold text-[#4F46E5] dark:text-indigo-400">DeepSeek R1</span>
                      <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-[#4F46E5]/10 text-[#4F46E5] font-mono">Reasoning</span>
                    </div>
                    <p className="text-foreground/80 leading-relaxed font-mono text-[11.5px]">
                      &lt;think&gt; RSC wire protocol payload eliminates massive npm dependencies from browser JS. &lt;/think&gt;
                    </p>
                  </div>
                </div>

              </div>

              {/* Chat Mockup Input Bar */}
              <div className="pt-2">
                <div className="flex items-center gap-2 bg-muted/60 border border-border/80 rounded-xl px-3.5 py-2">
                  <button type="button" className="text-muted-foreground hover:text-foreground">
                    <Paperclip className="w-4 h-4 rotate-45" />
                  </button>
                  <span className="flex-1 text-[12.5px] text-muted-foreground">Ask all 4 models simultaneously...</span>
                  <button type="button" className="text-muted-foreground hover:text-foreground">
                    <BrainCircuit className="w-4 h-4" />
                  </button>
                  <Link
                    href="/chat"
                    className="w-7 h-7 rounded-lg bg-[#5B4FE1] hover:bg-[#4E39E0] flex items-center justify-center text-white shrink-0 transition-colors"
                  >
                    <Send className="w-3.5 h-3.5 -rotate-12" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Bottom 4 Feature Cards (Attached flush under background shape) ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-6 sm:mt-10 relative z-10">
          {FEATURE_CARDS.map((card, idx) => (
            <div
              key={idx}
              className="bg-card/90 backdrop-blur-sm border border-border rounded-xl p-6 shadow-xs hover:shadow-md hover:border-[#5B4FE1]/40 transition-all text-left group"
            >
              <div className="w-10 h-10 rounded-xl bg-[#EDE9FE] dark:bg-[#5B4FE1]/15 flex items-center justify-center mb-4 transition-transform group-hover:scale-105">
                {card.icon}
              </div>
              <h4 className="text-[15px] font-bold text-foreground mb-1.5">
                {card.title}
              </h4>
              <p className="text-[13px] text-muted-foreground leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export { HeroSection, HeroSection as Hero };