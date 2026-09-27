'use client';

import React, { useState } from 'react';
import { AI_MODELS } from '@/data/landingData';
import { AIModel } from '@/types';
import CodeBlock from '@/components/chat/CodeBlock';
import { 
  SplitSquareVertical, 
  Sparkles, 
  Send, 
  ChevronDown, 
  Copy, 
  Check, 
  RotateCcw, 
  ThumbsUp, 
  Trophy, 
  Zap, 
  Cpu, 
  Clock 
} from 'lucide-react';

export default function CompareArenaPage() {
  const [leftModel, setLeftModel] = useState<AIModel>(AI_MODELS[1]); // Claude 3.5 Sonnet
  const [rightModel, setRightModel] = useState<AIModel>(AI_MODELS[0]); // GPT-4o
  const [prompt, setPrompt] = useState('Compare quicksort vs mergesort with time complexity and Python implementation.');
  const [isBattleRunning, setIsBattleRunning] = useState(false);
  const [leftResponse, setLeftResponse] = useState<string | null>(null);
  const [rightResponse, setRightResponse] = useState<string | null>(null);
  const [leftTime, setLeftTime] = useState<number | null>(null);
  const [rightTime, setRightTime] = useState<number | null>(null);
  const [leftDropdown, setLeftDropdown] = useState(false);
  const [rightDropdown, setRightDropdown] = useState(false);
  const [winner, setWinner] = useState<'left' | 'right' | null>(null);

  const presets = [
    { label: 'Algorithm & Big-O', text: 'Implement an optimal binary search tree with balance factor calculation in TypeScript.' },
    { label: 'React 19 Server Actions', text: 'Explain how Server Actions handle optimistic updates and form revalidation with Next.js 15.' },
    { label: 'Deep Reasoning & Logic', text: 'Solve this riddle with step-by-step reasoning: Three boxes are labeled incorrectly. How many draws to correctly identify all boxes?' },
    { label: 'System Design', text: 'Design a distributed rate limiter for 1,000,000 requests per second with Redis and sliding window algorithm.' }
  ];

  const handleStartBattle = () => {
    if (!prompt.trim() || isBattleRunning) return;
    setIsBattleRunning(true);
    setLeftResponse(null);
    setRightResponse(null);
    setLeftTime(null);
    setRightTime(null);
    setWinner(null);

    // Simulate Left response (Claude / Custom)
    setTimeout(() => {
      setLeftTime(410);
      setLeftResponse(`### **${leftModel.name} Response**\n\n#### Key Algorithmic Differences:\n• **Quicksort:** In-place partitioning, average $O(N \\log N)$, worst-case $O(N^2)$ (mitigated by randomized pivot).\n• **Mergesort:** Guaranteed $O(N \\log N)$ time, stable, requires $O(N)$ auxiliary space.\n\n\`\`\`python\ndef quicksort(arr):\n    if len(arr) <= 1:\n        return arr\n    pivot = arr[len(arr) // 2]\n    left = [x for x in arr if x < pivot]\n    middle = [x for x in arr if x == pivot]\n    right = [x for x in arr if x > pivot]\n    return quicksort(left) + middle + quicksort(right)\n\`\`\`\n\n*Optimized for recursion depth and clean list comprehensions.*`);
    }, 850);

    // Simulate Right response (GPT-4o / DeepSeek)
    setTimeout(() => {
      setRightTime(380);
      setRightResponse(`### **${rightModel.name} Response**\n\n| Algorithm | Average Time | Worst Case | Space Complexity | Stability |\n| :--- | :--- | :--- | :--- | :--- |\n| **Quicksort** | $O(N \\log N)$ | $O(N^2)$ | $O(\\log N)$ | No |\n| **Mergesort** | $O(N \\log N)$ | $O(N \\log N)$ | $O(N)$ | Yes |\n\n\`\`\`python\ndef mergesort(arr):\n    if len(arr) > 1:\n        mid = len(arr) // 2\n        L, R = arr[:mid], arr[mid:]\n        mergesort(L)\n        mergesort(R)\n        i = j = k = 0\n        while i < len(L) and j < len(R):\n            if L[i] <= R[j]:\n                arr[k] = L[i]; i += 1\n            else:\n                arr[k] = R[j]; j += 1\n            k += 1\n        while i < len(L): arr[k] = L[i]; i += 1; k += 1\n        while j < len(R): arr[k] = R[j]; j += 1; k += 1\n    return arr\n\`\`\``);
      setIsBattleRunning(false);
    }, 950);
  };

  return (
    <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">
      <div className="max-w-7xl mx-auto space-y-6">
        
        {/* Arena Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 rounded-3xl bg-card border border-border/70 shadow-sm backdrop-blur-xl">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold text-amber-500 bg-amber-500/10 border border-amber-500/20">
              <SplitSquareVertical className="w-3.5 h-3.5" />
              <span>Multi-AI Comparison Arena</span>
            </div>
            <h1 className="text-xl sm:text-2xl font-black text-foreground">
              Side-by-Side Model Benchmarking
            </h1>
            <p className="text-xs text-muted-foreground">
              Execute identical prompts concurrently across two leading AI models to compare accuracy, reasoning, and latency.
            </p>
          </div>

          {/* Model Pickers Top Row */}
          <div className="flex items-center gap-2 sm:gap-3">
            
            {/* Left Model Selector */}
            <div className="relative">
              <button
                onClick={() => { setLeftDropdown(!leftDropdown); setRightDropdown(false); }}
                className="flex items-center gap-2 px-3 py-2 rounded-xl bg-muted hover:bg-muted/80 border border-border/70 text-xs font-bold text-foreground"
              >
                <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: leftModel.color }} />
                <span>{leftModel.name.split(' ')[0]}</span>
                <ChevronDown className="w-3.5 h-3.5 text-muted-foreground" />
              </button>

              {leftDropdown && (
                <div className="absolute top-full left-0 mt-2 w-64 rounded-2xl bg-card border border-border/80 shadow-2xl p-2 z-50 animate-fadeIn">
                  <div className="space-y-1">
                    {AI_MODELS.map(m => (
                      <button
                        key={m.id}
                        onClick={() => { setLeftModel(m); setLeftDropdown(false); }}
                        className="w-full text-left p-2 rounded-xl text-xs flex items-center gap-2 hover:bg-muted font-medium text-foreground"
                      >
                        <span className="w-2 h-2 rounded-full" style={{ backgroundColor: m.color }} />
                        <span>{m.name}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <span className="text-xs font-black text-amber-500">VS</span>

            {/* Right Model Selector */}
            <div className="relative">
              <button
                onClick={() => { setRightDropdown(!rightDropdown); setLeftDropdown(false); }}
                className="flex items-center gap-2 px-3 py-2 rounded-xl bg-muted hover:bg-muted/80 border border-border/70 text-xs font-bold text-foreground"
              >
                <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: rightModel.color }} />
                <span>{rightModel.name.split(' ')[0]}</span>
                <ChevronDown className="w-3.5 h-3.5 text-muted-foreground" />
              </button>

              {rightDropdown && (
                <div className="absolute top-full right-0 mt-2 w-64 rounded-2xl bg-card border border-border/80 shadow-2xl p-2 z-50 animate-fadeIn">
                  <div className="space-y-1">
                    {AI_MODELS.map(m => (
                      <button
                        key={m.id}
                        onClick={() => { setRightModel(m); setRightDropdown(false); }}
                        className="w-full text-left p-2 rounded-xl text-xs flex items-center gap-2 hover:bg-muted font-medium text-foreground"
                      >
                        <span className="w-2 h-2 rounded-full" style={{ backgroundColor: m.color }} />
                        <span>{m.name}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

          </div>
        </div>

        {/* Prompt Input Box & Presets */}
        <div className="p-4 sm:p-5 rounded-3xl bg-card border border-border/80 shadow-md space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[11px] font-bold text-muted-foreground">Quick Presets:</span>
            {presets.map((preset, idx) => (
              <button
                key={idx}
                onClick={() => setPrompt(preset.text)}
                className="px-2.5 py-1 rounded-lg bg-muted hover:bg-blue-500/10 hover:text-blue-500 border border-border/50 text-[11px] font-medium transition-all"
              >
                {preset.label}
              </button>
            ))}
          </div>

          <div className="relative flex items-center">
            <textarea
              rows={2}
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Enter benchmark prompt to execute on both models..."
              className="w-full pl-4 pr-32 py-3 rounded-2xl bg-muted/50 border border-border/80 text-xs sm:text-sm text-foreground focus:outline-none focus:border-blue-500"
            />
            <button
              onClick={handleStartBattle}
              disabled={isBattleRunning || !prompt.trim()}
              className="absolute right-3 px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 shadow-md transition-all flex items-center gap-2 disabled:opacity-50"
            >
              {isBattleRunning ? (
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : (
                <>
                  <Zap className="w-4 h-4" />
                  <span>Run Battle</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Side-by-Side Dual Result Windows */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
          
          {/* Left Model Window */}
          <div className={`rounded-3xl border transition-all duration-300 p-5 sm:p-6 bg-card flex flex-col justify-between ${
            winner === 'left' ? 'border-amber-500 ring-2 ring-amber-500/30' : 'border-border/80'
          }`}>
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-border/40">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl flex items-center justify-center font-bold text-xs text-white" style={{ backgroundColor: leftModel.color }}>
                    {leftModel.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-foreground">{leftModel.name}</h3>
                    <span className="text-[10px] text-muted-foreground">{leftModel.contextWindow} context</span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  {leftTime && (
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-500 font-bold">
                      ⚡ {leftTime} ms
                    </span>
                  )}
                  {winner === 'left' && (
                    <span className="flex items-center gap-1 text-[11px] font-bold text-amber-500 px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/30">
                      <Trophy className="w-3.5 h-3.5" />
                      <span>Winner</span>
                    </span>
                  )}
                </div>
              </div>

              <div className="text-xs sm:text-sm text-foreground/90 whitespace-pre-wrap leading-relaxed">
                {leftResponse ? (
                  <div>{leftResponse}</div>
                ) : (
                  <div className="py-16 text-center text-muted-foreground text-xs italic">
                    {isBattleRunning ? 'Claude is processing the benchmark...' : 'Click "Run Battle" to evaluate responses.'}
                  </div>
                )}
              </div>
            </div>

            {leftResponse && (
              <div className="pt-4 mt-4 border-t border-border/40 flex items-center justify-between">
                <button
                  onClick={() => setWinner('left')}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                    winner === 'left'
                      ? 'bg-amber-500 text-white'
                      : 'bg-muted text-muted-foreground hover:text-foreground'
                  }`}
                >
                  <ThumbsUp className="w-3.5 h-3.5" />
                  <span>Vote as Best Response</span>
                </button>
              </div>
            )}
          </div>

          {/* Right Model Window */}
          <div className={`rounded-3xl border transition-all duration-300 p-5 sm:p-6 bg-card flex flex-col justify-between ${
            winner === 'right' ? 'border-amber-500 ring-2 ring-amber-500/30' : 'border-border/80'
          }`}>
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-border/40">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl flex items-center justify-center font-bold text-xs text-white" style={{ backgroundColor: rightModel.color }}>
                    {rightModel.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-foreground">{rightModel.name}</h3>
                    <span className="text-[10px] text-muted-foreground">{rightModel.contextWindow} context</span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  {rightTime && (
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-blue-500/10 text-blue-500 font-bold">
                      ⚡ {rightTime} ms
                    </span>
                  )}
                  {winner === 'right' && (
                    <span className="flex items-center gap-1 text-[11px] font-bold text-amber-500 px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/30">
                      <Trophy className="w-3.5 h-3.5" />
                      <span>Winner</span>
                    </span>
                  )}
                </div>
              </div>

              <div className="text-xs sm:text-sm text-foreground/90 whitespace-pre-wrap leading-relaxed">
                {rightResponse ? (
                  <div>{rightResponse}</div>
                ) : (
                  <div className="py-16 text-center text-muted-foreground text-xs italic">
                    {isBattleRunning ? 'GPT is processing the benchmark...' : 'Click "Run Battle" to evaluate responses.'}
                  </div>
                )}
              </div>
            </div>

            {rightResponse && (
              <div className="pt-4 mt-4 border-t border-border/40 flex items-center justify-between">
                <button
                  onClick={() => setWinner('right')}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                    winner === 'right'
                      ? 'bg-amber-500 text-white'
                      : 'bg-muted text-muted-foreground hover:text-foreground'
                  }`}
                >
                  <ThumbsUp className="w-3.5 h-3.5" />
                  <span>Vote as Best Response</span>
                </button>
              </div>
            )}
          </div>

        </div>

      </div>
    </div>
  );
}
