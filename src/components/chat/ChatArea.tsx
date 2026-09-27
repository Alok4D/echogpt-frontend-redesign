'use client';

import React, { useRef, useEffect } from 'react';
import { useChat } from '@/context/ChatContext';
import MessageBubble from './MessageBubble';
import { Sparkles, Code2, BookOpen, Lightbulb, Zap, ArrowRight, Cpu, Bot } from 'lucide-react';

export default function ChatArea() {
  const { currentSession, isGenerating, activeModel, sendMessage, isDualMode, secondaryModel } = useChat();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [currentSession?.messages, isGenerating]);

  const starterPrompts = [
    {
      title: 'Architect a Next.js 15 App Router System',
      desc: 'Server Actions, Zod schema validation & caching strategy.',
      icon: Code2,
      prompt: 'Provide a full production architecture for a Next.js 15 application with Server Actions, optimistic UI updates, and type-safe Zod validation.',
    },
    {
      title: 'Compare Claude 3.5 Sonnet vs GPT-4o',
      desc: 'Test reasoning & code generation capabilities.',
      icon: Zap,
      prompt: 'Compare Claude 3.5 Sonnet and GPT-4o for complex system architecture and high-throughput data processing.',
    },
    {
      title: 'Write Academic Statement of Purpose (SOP)',
      desc: 'Tailored for higher studies & visa acceptance.',
      icon: BookOpen,
      prompt: 'Draft an exceptional, high-impact Statement of Purpose (SOP) for graduate studies in Artificial Intelligence.',
    },
    {
      title: 'Algorithm Optimization with Proof',
      desc: 'Big-O complexity, edge cases & clean code.',
      icon: Lightbulb,
      prompt: 'Write an optimized LRU Cache in TypeScript with O(1) time complexity and thread-safety analysis.',
    }
  ];

  return (
    <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">
      <div className="max-w-4xl mx-auto space-y-6">
        
        {/* Empty State / Welcome Screen */}
        {(!currentSession || currentSession.messages.length === 0) && (
          <div className="py-12 sm:py-20 text-center space-y-8 animate-fadeIn">
            
            {/* Center Logo Icon */}
            <div className="inline-flex p-4 rounded-3xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-cyan-400 text-white shadow-2xl shadow-blue-500/20">
              <Sparkles className="w-10 h-10" />
            </div>

            {/* Welcome Headings */}
            <div className="space-y-3 max-w-xl mx-auto">
              <h2 className="text-2xl sm:text-4xl font-black text-foreground tracking-tight">
                How can <span className="text-blue-500">{activeModel.name}</span> assist you?
              </h2>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Current engine: <strong className="text-foreground">{activeModel.name}</strong> ({activeModel.contextWindow} context). 
                {isDualMode ? ` Comparing alongside ${secondaryModel.name}.` : ' Switch models anytime from the top bar.'}
              </p>
            </div>

            {/* Quick Starter Prompts Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 max-w-2xl mx-auto text-left">
              {starterPrompts.map((starter, idx) => (
                <div
                  key={idx}
                  onClick={() => sendMessage(starter.prompt)}
                  className="group cursor-pointer p-4 rounded-2xl bg-card/80 hover:bg-blue-500/5 border border-border/70 hover:border-blue-500/40 backdrop-blur-xl shadow-sm hover:shadow-md transition-all flex items-start justify-between gap-3"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <starter.icon className="w-4 h-4 text-blue-500" />
                      <h4 className="text-xs font-bold text-foreground group-hover:text-blue-500 transition-colors">
                        {starter.title}
                      </h4>
                    </div>
                    <p className="text-[11px] text-muted-foreground leading-relaxed">{starter.desc}</p>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 text-muted-foreground group-hover:text-blue-500 group-hover:translate-x-1 transition-all shrink-0 mt-1" />
                </div>
              ))}
            </div>

          </div>
        )}

        {/* Messages Stream */}
        {currentSession && currentSession.messages.length > 0 && (
          <div className="space-y-6 pt-2">
            {currentSession.messages.map((message, index) => (
              <MessageBubble
                key={message.id}
                message={message}
                isLast={index === currentSession.messages.length - 1}
              />
            ))}

            {/* Generating Streaming Indicator */}
            {isGenerating && (
              <div className="flex items-center gap-3 p-4 rounded-2xl bg-card border border-border/70 text-xs text-muted-foreground animate-pulse max-w-sm">
                <div
                  className="w-7 h-7 rounded-lg flex items-center justify-center font-bold text-xs text-white"
                  style={{ backgroundColor: activeModel.color }}
                >
                  {activeModel.name.charAt(0)}
                </div>
                <div className="space-y-1">
                  <span className="font-bold text-foreground">{activeModel.name} is thinking...</span>
                  <div className="flex gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-bounce" />
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-bounce [animation-delay:0.2s]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-bounce [animation-delay:0.4s]" />
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>
    </div>
  );
}
