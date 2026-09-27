'use client';

import React from 'react';
import Link from 'next/link';
import { 
  SplitSquareVertical, 
  Chrome, 
  Image as ImageIcon, 
  FileText, 
  Store, 
  Mic, 
  Sparkles, 
  Zap, 
  CheckCircle2, 
  ArrowRight,
  Code2,
  Cpu
} from 'lucide-react';

export default function FeatureGrid() {
  const features = [
    {
      icon: SplitSquareVertical,
      title: 'Side-by-Side Multi-AI Battle',
      badge: 'Exclusive Feature',
      description: 'Send one prompt simultaneously to Claude 3.5 Sonnet, GPT-4o, and DeepSeek R1. Benchmark code quality, accuracy, and speed in real-time.',
      gradient: 'from-blue-600 to-indigo-600',
      tagColor: 'text-blue-500 bg-blue-500/10 border-blue-500/20',
      link: '/compare',
      actionText: 'Try Model Battle'
    },
    {
      icon: Chrome,
      title: 'Context-Aware Browser Sidebar',
      badge: 'Chrome Extension',
      description: 'Highlight any text or code on any website for instant Summarize, Explain, Fix Grammar, or Translation without leaving the page.',
      gradient: 'from-cyan-500 to-blue-600',
      tagColor: 'text-cyan-500 bg-cyan-500/10 border-cyan-500/20',
      link: '#extension',
      actionText: 'Explore Extension'
    },
    {
      icon: ImageIcon,
      title: 'AI Image & Creative Studio',
      badge: 'Studio Suite',
      description: 'Generate high-definition visuals with curated styles, custom aspect ratios (16:9, 1:1, 4:3), and prompt engineering enhancements.',
      gradient: 'from-purple-500 to-pink-600',
      tagColor: 'text-purple-500 bg-purple-500/10 border-purple-500/20',
      link: '/image-studio',
      actionText: 'Open Image Studio'
    },
    {
      icon: FileText,
      title: 'SOP & Resume Engineering',
      badge: 'Career & Visa AI',
      description: 'Build university-grade Statements of Purpose tailored by country requirements, plus ATS-optimized resumes with custom skills breakdown.',
      gradient: 'from-emerald-500 to-teal-600',
      tagColor: 'text-emerald-500 bg-emerald-500/10 border-emerald-500/20',
      link: '/sop',
      actionText: 'Build SOP & Resume'
    },
    {
      icon: Store,
      title: 'Universal AI Prompt & Tools Store',
      badge: 'Ecosystem',
      description: 'Access hundreds of community-tested system prompts, coding assistants, copywriters, and automated task workflows in 1 click.',
      gradient: 'from-amber-500 to-orange-600',
      tagColor: 'text-amber-500 bg-amber-500/10 border-amber-500/20',
      link: '/store',
      actionText: 'Browse Store'
    },
    {
      icon: Code2,
      title: 'Artifacts & Syntax Highlighting',
      badge: 'Developer First',
      description: 'Rich code execution preview, 1-click clipboard copy, and markdown rendering with zero clutter and optimal readability.',
      gradient: 'from-rose-500 to-red-600',
      tagColor: 'text-rose-500 bg-rose-500/10 border-rose-500/20',
      link: '/chat',
      actionText: 'Test Code Sandbox'
    }
  ];

  return (
    <section id="features" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold text-blue-500 bg-blue-500/10 border border-blue-500/20">
            <Zap className="w-3.5 h-3.5" />
            <span>Power Features</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-foreground tracking-tight">
            Engineered for Uncompromised{' '}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-400 bg-clip-text text-transparent">
              Productivity
            </span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg">
            EchoGPT is not just a chatbot wrapper—it is an intelligent ecosystem that merges multi-model intelligence into every facet of your workflow.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="group relative rounded-3xl p-7 bg-card/60 hover:bg-card/90 border border-border/70 hover:border-blue-500/40 backdrop-blur-xl shadow-sm hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
            >
              {/* Card Top */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${feature.gradient} p-2.5 flex items-center justify-center text-white shadow-lg`}>
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full border ${feature.tagColor}`}>
                    {feature.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-foreground group-hover:text-blue-500 transition-colors">
                  {feature.title}
                </h3>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Card Footer Link */}
              <div className="pt-6 mt-4 border-t border-border/40">
                <Link
                  href={feature.link}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-500 group-hover:text-blue-400 group-hover:translate-x-1 transition-all"
                >
                  <span>{feature.actionText}</span>
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
