'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Sparkles, 
  Chrome, 
  ArrowRight, 
  Play, 
  CheckCircle2, 
  Zap, 
  ShieldCheck, 
  Layers, 
  Bot, 
  Star,
  Send,
  Cpu,
  BrainCircuit,
  Copy
} from 'lucide-react';
import { AI_MODELS } from '@/data/landingData';

export default function HeroSection() {
  const [selectedModel, setSelectedModel] = useState(AI_MODELS[0]);
  const [interactivePrompt, setInteractivePrompt] = useState('Compare the performance difference between React Server Components and Client Components with code.');
  const [demoResponse, setDemoResponse] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleSimulate = (model = selectedModel) => {
    setIsGenerating(true);
    setDemoResponse(null);
    setTimeout(() => {
      if (model.id.includes('claude')) {
        setDemoResponse(`**[${model.name}] Deep Architecture Analysis:**\n\n• **RSC (Server Components):** Zero bundle size impact, direct DB access, executed exclusively on the server.\n• **RCC (Client Components):** Hydrated on client, supports React state (\`useState\`, \`useEffect\`) & event handlers (\`onClick\`).\n\n\`\`\`tsx\n// Server Component (Default)\nexport default async function ProductPage() {\n  const data = await db.query('SELECT * FROM products');\n  return <ProductView items={data} />;\n}\n\`\`\``);
      } else if (model.id.includes('deepseek')) {
        setDemoResponse(`**[${model.name}] Reasoning Chain & Breakdown:**\n\n<think>\n1. Identify execution environment (Node/Edge vs Browser DOM).\n2. Contrast payload size: RSC serializes as JSON-like wire protocol vs JavaScript bundle.\n</think>\n\n**Key Takeaway:** RSC executes strictly during request time, eliminating massive dependencies from the client bundle.`);
      } else {
        setDemoResponse(`**[${model.name}] Omnimodel Summary:**\n\n1. **Server Components:** Render HTML on the server and stream wire payloads to the browser.\n2. **Client Components:** Provide full DOM interactivity, animations, and lifecycle hooks.\n\n*Pro-tip with EchoGPT: Use RSC for data fetching, wrap interactive widgets in RCC.*`);
      }
      setIsGenerating(false);
    }, 600);
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background Decorative Gradients and Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[450px] bg-gradient-to-tr from-blue-600/20 via-indigo-600/20 to-cyan-400/20 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 -left-32 w-80 h-80 bg-purple-600/15 blur-[100px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/2 -right-32 w-80 h-80 bg-cyan-600/15 blur-[100px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto space-y-6">
          {/* Top Announcement Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-purple-500/10 border border-blue-500/25 text-blue-500 dark:text-blue-400 shadow-sm backdrop-blur-md animate-pulse-slow">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Next-Gen EchoGPT Multi-AI Ecosystem 2.0</span>
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-ping" />
          </div>

          {/* Main Hero Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-foreground leading-[1.1]">
            One Unified Workspace.{' '}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-400 bg-clip-text text-transparent">
              Every Flagship AI.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto font-normal leading-relaxed">
            Stop paying for 5 separate AI subscriptions. Switch instantly between <strong className="text-foreground">GPT-4o</strong>, <strong className="text-foreground">Claude 3.5 Sonnet</strong>, <strong className="text-foreground">Gemini 1.5 Pro</strong>, and <strong className="text-foreground">DeepSeek R1</strong> in a unified chat & browser sidebar.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-3">
            <Link
              href="/chat"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-2xl text-sm font-bold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:from-blue-500 hover:to-indigo-500 shadow-xl shadow-blue-600/30 hover:shadow-blue-600/45 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
            >
              <Sparkles className="w-4 h-4" />
              <span>Launch Web App Free</span>
              <ArrowRight className="w-4 h-4 ml-0.5" />
            </Link>

            <a
              href="https://chromewebstore.google.com/detail/echogpt-multi-ai-chat-sid/negimdcamohmoheiifgecbjgjepkcfhj"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl text-sm font-bold text-foreground bg-card/80 hover:bg-card border border-border/80 shadow-md hover:shadow-lg backdrop-blur-md hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
            >
              <Chrome className="w-4 h-4 text-blue-500" />
              <span>Add to Chrome (Sidebar)</span>
            </a>
          </div>

          {/* Social Proof & Metrics */}
          <div className="pt-6 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs font-medium text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-1.5">
                {[1, 2, 3, 4].map((i) => (
                  <img
                    key={i}
                    src={`https://images.unsplash.com/photo-${1530000000000 + i * 12345}?w=100&auto=format&fit=crop&q=60`}
                    alt="User"
                    className="w-6 h-6 rounded-full border-2 border-background object-cover bg-muted"
                  />
                ))}
              </div>
              <div className="flex items-center gap-1 text-amber-400">
                <Star className="w-3.5 h-3.5 fill-amber-400" />
                <span className="font-bold text-foreground">4.9/5</span>
                <span>(10k+ reviews)</span>
              </div>
            </div>

            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              <span>No API Key Required</span>
            </div>

            <div className="flex items-center gap-1.5">
              <Zap className="w-4 h-4 text-blue-500" />
              <span>Parallel Multi-Model Battle</span>
            </div>
          </div>
        </div>

        {/* Interactive Live Hero Sandbox Card */}
        <div className="mt-14 max-w-5xl mx-auto">
          <div className="relative rounded-3xl p-[1px] bg-gradient-to-b from-blue-500/40 via-indigo-500/20 to-transparent shadow-2xl shadow-blue-500/10">
            <div className="bg-card/90 dark:bg-[#0c101b]/95 backdrop-blur-2xl rounded-[23px] border border-border/60 overflow-hidden shadow-inner">
              
              {/* Sandbox Top Bar: Model Selector Pills */}
              <div className="px-5 py-3.5 border-b border-border/60 bg-muted/40 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                  </div>
                  <span className="text-xs font-semibold text-muted-foreground ml-2 hidden sm:inline">
                    Live Multi-Model Sandbox
                  </span>
                </div>

                {/* Model Selector Pills */}
                <div className="flex items-center gap-1.5 overflow-x-auto py-0.5 no-scrollbar max-w-full">
                  {AI_MODELS.slice(0, 4).map((model) => (
                    <button
                      key={model.id}
                      onClick={() => {
                        setSelectedModel(model);
                        handleSimulate(model);
                      }}
                      className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all duration-200 flex items-center gap-1.5 shrink-0 ${
                        selectedModel.id === model.id
                          ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30 scale-105'
                          : 'bg-muted/70 text-muted-foreground hover:text-foreground hover:bg-muted'
                      }`}
                    >
                      <span className="w-2 h-2 rounded-full" style={{ backgroundColor: model.color }} />
                      <span>{model.name.split(' ')[0]}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Sandbox Content Area */}
              <div className="p-5 sm:p-7 space-y-5">
                {/* Input Simulation */}
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-muted-foreground flex items-center justify-between">
                    <span>Ask any question to test {selectedModel.name}:</span>
                    <span className="text-[11px] text-blue-500 font-mono">1-Click Live Test</span>
                  </label>
                  <div className="relative flex items-center">
                    <input
                      type="text"
                      value={interactivePrompt}
                      onChange={(e) => setInteractivePrompt(e.target.value)}
                      onKeyDown={(e) => e.key === 'Enter' && handleSimulate()}
                      placeholder="Type a coding, writing or reasoning prompt..."
                      className="w-full pl-4 pr-24 py-3.5 rounded-2xl bg-muted/50 border border-border/80 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 text-sm font-medium text-foreground transition-all"
                    />
                    <button
                      onClick={() => handleSimulate()}
                      disabled={isGenerating}
                      className="absolute right-2 px-4 py-2 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 disabled:opacity-50 transition-all flex items-center gap-1.5"
                    >
                      {isGenerating ? (
                        <div className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      ) : (
                        <>
                          <span>Run</span>
                          <Send className="w-3 h-3" />
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {/* Simulated AI Output Bubble */}
                <div className="rounded-2xl bg-muted/40 border border-border/50 p-4 sm:p-5 transition-all">
                  <div className="flex items-center justify-between pb-3 border-b border-border/40">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg flex items-center justify-center font-bold text-xs text-white" style={{ backgroundColor: selectedModel.color }}>
                        {selectedModel.name.charAt(0)}
                      </div>
                      <div>
                        <div className="text-xs font-bold text-foreground flex items-center gap-1.5">
                          <span>{selectedModel.name}</span>
                          <span className="text-[10px] px-2 py-0.5 rounded-full font-normal bg-muted text-muted-foreground border border-border">
                            {selectedModel.speed}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <Cpu className="w-3.5 h-3.5 text-blue-500" />
                      <span className="font-mono text-[11px]">{selectedModel.contextWindow}</span>
                    </div>
                  </div>

                  <div className="pt-3.5 text-xs sm:text-sm font-sans text-foreground/90 leading-relaxed font-mono whitespace-pre-wrap">
                    {demoResponse || (
                      <div className="space-y-2 py-1 text-muted-foreground animate-pulse">
                        <p>Click &quot;Run&quot; above to see real-time output from {selectedModel.name}...</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Sandbox Bottom Footer Link */}
              <div className="px-6 py-3 bg-muted/30 border-t border-border/40 flex flex-col sm:flex-row items-center justify-between text-xs text-muted-foreground gap-2">
                <span>Want to see Claude and GPT-4o battle side-by-side?</span>
                <Link href="/compare" className="text-blue-500 hover:text-blue-400 font-bold flex items-center gap-1">
                  <span>Open Full Comparison Arena</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
