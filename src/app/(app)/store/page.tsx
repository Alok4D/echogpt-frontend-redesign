'use client';

import React, { useState } from 'react';
import { Store, Sparkles, Star, ArrowRight, Code2, Bot, PenTool, Search, Sliders } from 'lucide-react';
import Link from 'next/link';

export default function StorePage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [search, setSearch] = useState('');

  const storeItems = [
    {
      id: '1',
      title: 'Full-Stack Next.js 15 Copilot',
      category: 'Developer',
      desc: 'Expert coding agent specializing in React 19, Server Actions, Tailwind CSS, and edge deployments.',
      author: 'AppifyDevs Official',
      rating: 4.9,
      uses: '18.4k',
      badge: 'Staff Pick',
    },
    {
      id: '2',
      title: 'SaaS Copywriting Master',
      category: 'Marketing',
      desc: 'Generates high-converting landing page headlines, pitch decks, and email outreach sequences.',
      author: 'EchoGPT Community',
      rating: 4.8,
      uses: '12.1k',
    },
    {
      id: '3',
      title: 'Senior Data Scientist & Pythonist',
      category: 'Data & AI',
      desc: 'Performs exploratory data analysis, writes Pandas pipelines, and formats Matplotlib charts.',
      author: 'NeuralLab',
      rating: 4.9,
      uses: '9.8k',
    },
    {
      id: '4',
      title: 'Academic Thesis & SOP Reviewer',
      category: 'Academic',
      desc: 'Proofreads graduate papers, identifies logical fallacies, and checks adherence to APA/IEEE citation standards.',
      author: 'AcademicAI',
      rating: 4.9,
      uses: '14.2k',
      badge: 'Popular',
    },
    {
      id: '5',
      title: 'API & Microservice Architect',
      category: 'Developer',
      desc: 'Designs RESTful, gRPC, and GraphQL schemas with zero latency overhead and strict error contracts.',
      author: 'CloudGuild',
      rating: 4.8,
      uses: '7.6k',
    },
    {
      id: '6',
      title: 'Executive Ghostwriter & Speechsmith',
      category: 'Writing',
      desc: 'Crafts persuasive thought leadership articles, keynote outlines, and LinkedIn essays.',
      author: 'AppifyDevs Official',
      rating: 5.0,
      uses: '11.5k',
    }
  ];

  const filtered = storeItems.filter(item => {
    const matchesCat = activeCategory === 'All' || item.category === activeCategory;
    const matchesSearch = item.title.toLowerCase().includes(search.toLowerCase()) || item.desc.toLowerCase().includes(search.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">
      <div className="max-w-7xl mx-auto space-y-6">
        
        {/* Header */}
        <div className="p-6 rounded-3xl bg-card border border-border/70 shadow-sm backdrop-blur-xl flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold text-amber-500 bg-amber-500/10 border border-amber-500/20">
              <Store className="w-3.5 h-3.5" />
              <span>EchoGPT Agent & Prompt Marketplace</span>
            </div>
            <h1 className="text-xl sm:text-2xl font-black text-foreground">
              Discover Specialized AI Agents
            </h1>
            <p className="text-xs text-muted-foreground">
              Pre-configured autonomous assistants fine-tuned for engineering, design, marketing, and research.
            </p>
          </div>
        </div>

        {/* Search & Filters */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="relative w-full sm:w-80">
            <Search className="w-3.5 h-3.5 text-muted-foreground absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search specialized agents..."
              className="w-full pl-9 pr-3 py-2 rounded-xl bg-card border border-border/80 text-xs text-foreground focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar w-full sm:w-auto">
            {['All', 'Developer', 'Marketing', 'Data & AI', 'Academic', 'Writing'].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all shrink-0 ${
                  activeCategory === cat
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'bg-card text-muted-foreground hover:text-foreground border border-border/60'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Agents Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="p-6 rounded-3xl bg-card border border-border/80 shadow-md flex flex-col justify-between space-y-4 hover:border-blue-500/50 hover:shadow-xl transition-all group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-blue-500/10 text-blue-500 border border-blue-500/20">
                    {item.category}
                  </span>
                  {item.badge && (
                    <span className="text-[10px] font-black px-2 py-0.5 rounded-md bg-amber-500/10 text-amber-500 border border-amber-500/30">
                      {item.badge}
                    </span>
                  )}
                </div>

                <h3 className="text-base font-extrabold text-foreground group-hover:text-blue-500 transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>

              <div className="pt-4 border-t border-border/40 space-y-3">
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span className="font-medium">by {item.author}</span>
                  <div className="flex items-center gap-1 text-amber-400 font-bold">
                    <Star className="w-3 h-3 fill-amber-400" />
                    <span>{item.rating}</span>
                    <span className="text-muted-foreground font-normal">({item.uses})</span>
                  </div>
                </div>

                <Link
                  href="/chat"
                  className="w-full py-2.5 rounded-xl bg-muted hover:bg-blue-600 hover:text-white text-xs font-bold text-foreground transition-all flex items-center justify-center gap-1.5"
                >
                  <span>Chat with Agent</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
