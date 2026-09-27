'use client';

import React, { useState } from 'react';
import { useChat } from '@/context/ChatContext';
import { X, Search, Sparkles, Code2, BookOpen, PenTool, Lightbulb, ArrowRight } from 'lucide-react';
import { PromptTemplate } from '@/types/chat';

export default function PromptLibraryModal() {
  const { isPromptLibraryOpen, setIsPromptLibraryOpen, sendMessage } = useChat();
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [search, setSearch] = useState<string>('');

  if (!isPromptLibraryOpen) return null;

  const templates: PromptTemplate[] = [
    {
      id: '1',
      category: 'Coding',
      title: 'Full-Stack Next.js Architecture',
      prompt: 'Design a scalable Next.js 14/15 App Router architecture with Server Actions, Zod validation, Prisma ORM, and Tailwind CSS. Provide a complete directory tree and sample implementation.',
      icon: 'Code2',
    },
    {
      id: '2',
      category: 'Coding',
      title: 'Algorithm & Time-Space Optimization',
      prompt: 'Analyze the following algorithm for edge cases, calculate strict Big-O time and space complexity, and rewrite an optimized version with explanation.',
      icon: 'Code2',
    },
    {
      id: '3',
      category: 'Academic',
      title: 'University Statement of Purpose (SOP)',
      prompt: 'Draft an exceptional, compelling Statement of Purpose for a Master\'s program in Computer Science, highlighting research projects, technical leadership, and career vision.',
      icon: 'BookOpen',
    },
    {
      id: '4',
      category: 'Writing',
      title: 'High-Converting Landing Page Copy',
      prompt: 'Write punchy, modern SaaS landing page copy including a Hero headline, 3 value propositions, feature descriptions, and social proof testimonials.',
      icon: 'PenTool',
    },
    {
      id: '5',
      category: 'Reasoning',
      title: 'Step-by-Step Deep Problem Solving',
      prompt: 'Break down this complex challenge into first principles. Provide a multi-scenario analysis with pros, cons, failure modes, and a final recommended strategy.',
      icon: 'Lightbulb',
    },
    {
      id: '6',
      category: 'Productivity',
      title: 'Executive Meeting Notes & Action Items',
      prompt: 'Summarize the following meeting transcript into: 1. Core Decisions Made, 2. Assigned Action Items with owners, 3. Open questions for next sync.',
      icon: 'Sparkles',
    }
  ];

  const filtered = templates.filter(t => {
    const matchesCat = activeCategory === 'All' || t.category === activeCategory;
    const matchesSearch = t.title.toLowerCase().includes(search.toLowerCase()) || t.prompt.toLowerCase().includes(search.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const handleUsePrompt = (promptText: string) => {
    setIsPromptLibraryOpen(false);
    sendMessage(promptText);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-3xl rounded-3xl bg-card border border-border/80 p-6 sm:p-8 shadow-2xl overflow-hidden max-h-[85vh] flex flex-col">
        
        {/* Close button */}
        <button
          onClick={() => setIsPromptLibraryOpen(false)}
          className="absolute top-5 right-5 p-2 rounded-full text-muted-foreground hover:text-foreground bg-muted hover:bg-muted/80"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Header */}
        <div className="space-y-2 mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold text-indigo-500 bg-indigo-500/10 border border-indigo-500/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>EchoGPT Prompt Library</span>
          </div>
          <h2 className="text-2xl font-black text-foreground">
            Curated High-Performance Prompts
          </h2>
          <p className="text-xs text-muted-foreground">
            Click any prompt to instantly load and execute it in your active conversation.
          </p>
        </div>

        {/* Search & Categories */}
        <div className="space-y-3 mb-6">
          <div className="relative">
            <Search className="w-4 h-4 text-muted-foreground absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search prompts by keyword or goal..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-muted/60 border border-border/70 text-xs text-foreground focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-1">
            {['All', 'Coding', 'Writing', 'Academic', 'Reasoning', 'Productivity'].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all shrink-0 ${
                  activeCategory === cat
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'bg-muted/70 text-muted-foreground hover:text-foreground'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Prompts Grid */}
        <div className="flex-1 overflow-y-auto pr-1 space-y-3">
          {filtered.map((item) => (
            <div
              key={item.id}
              onClick={() => handleUsePrompt(item.prompt)}
              className="group cursor-pointer p-4 rounded-2xl bg-muted/30 hover:bg-blue-500/5 border border-border/60 hover:border-blue-500/40 transition-all flex items-start justify-between gap-4"
            >
              <div className="space-y-1.5">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-blue-500/10 text-blue-500 border border-blue-500/20">
                    {item.category}
                  </span>
                  <h4 className="text-sm font-bold text-foreground group-hover:text-blue-500 transition-colors">
                    {item.title}
                  </h4>
                </div>
                <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">
                  {item.prompt}
                </p>
              </div>

              <button className="p-2 rounded-xl bg-muted text-muted-foreground group-hover:bg-blue-600 group-hover:text-white transition-all shrink-0 mt-1">
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
