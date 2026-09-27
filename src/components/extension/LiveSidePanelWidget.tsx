'use client';

import React, { useState } from 'react';
import { 
  Sparkles, 
  Chrome, 
  X, 
  Plus, 
  Clock, 
  PenTool, 
  Globe, 
  BookOpen, 
  Image as ImageIcon, 
  Video, 
  SplitSquareVertical, 
  Layers, 
  Crown, 
  Settings, 
  Send, 
  Mic, 
  Search, 
  Paperclip, 
  Bot, 
  ChevronDown,
  Check,
  Crop,
  AtSign,
  Maximize2
} from 'lucide-react';
import { AI_MODELS } from '@/data/landingData';

export default function LiveSidePanelWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'Chat' | 'Write' | 'Read' | 'Translate' | 'Image' | 'Video' | 'Compare' | 'MCP'>('Chat');
  const [selectedModel, setSelectedModel] = useState(AI_MODELS[0]);
  const [modelDropdown, setModelDropdown] = useState(false);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState<Array<{ role: 'user' | 'assistant'; text: string; model?: string }>>([
    {
      role: 'assistant',
      text: 'Hi, good morning! 👋 How can I help you on this webpage today?',
      model: 'EchoGPT Omnimodel',
    }
  ]);

  const quickActions = [
    { name: 'Write', icon: PenTool, tab: 'Write', prompt: 'Help me draft an email response to this client pitch.' },
    { name: 'Translate', icon: Globe, tab: 'Translate', prompt: 'Translate this article into Spanish and French.' },
    { name: 'Read page', icon: BookOpen, tab: 'Read', prompt: 'Summarize the active webpage into 3 bullet points.' },
    { name: 'Image', icon: ImageIcon, tab: 'Image', prompt: 'Generate a vibrant 3D icon of an AI assistant.' },
    { name: 'Video', icon: Video, tab: 'Video', prompt: 'Create a 5s motion clip from this text prompt.' },
    { name: 'Compare', icon: SplitSquareVertical, tab: 'Compare', prompt: 'Compare Claude 3.5 and GPT-4o on this code snippet.' },
    { name: 'MCP', icon: Layers, tab: 'MCP', prompt: 'Connect to external GitHub repository issues.' },
  ];

  const suggestedPrompts = [
    'Tell me an interesting fun fact about AI architecture',
    'Explain quantum computing in simple terms',
    'Recommend 5 great sci-fi movies for developers',
    'How can I improve my frontend performance in Next.js?'
  ];

  const handleSend = (textToSend = inputMessage) => {
    if (!textToSend.trim() || isTyping) return;
    
    const userMsg = { role: 'user' as const, text: textToSend.trim() };
    setMessages(prev => [...prev, userMsg]);
    setInputMessage('');
    setIsTyping(true);

    setTimeout(() => {
      let reply = `[${selectedModel.name}]: I analyzed your request regarding "${textToSend}". Here is the optimized answer tailored for your active browser context.`;
      if (textToSend.includes('quantum')) {
        reply = `**[${selectedModel.name}] Quantum Computing Explained:**\nUnlike classical bits (0 or 1), qubits can exist as both simultaneously (superposition). This allows quantum computers to test millions of permutations in parallel!`;
      } else if (textToSend.includes('fact')) {
        reply = `**[${selectedModel.name}] AI Fun Fact:**\nTransformers compute all words in a sentence concurrently using self-attention matrices, unlike older RNNs that processed words sequentially!`;
      } else if (textToSend.includes('Next.js') || textToSend.includes('frontend')) {
        reply = `**[${selectedModel.name}] Next.js Performance Tips:**\n1. Use React Server Components for zero-bundle data fetching.\n2. Optimize images with \`next/image\`.\n3. Utilize dynamic imports for heavy third-party modals.`;
      }

      setMessages(prev => [...prev, { role: 'assistant', text: reply, model: selectedModel.name }]);
      setIsTyping(false);
    }, 700);
  };

  return (
    <>
      {/* Floating Trigger Button (Always visible bottom right) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 group flex items-center gap-2.5 px-4 py-3 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 text-white font-bold text-xs shadow-2xl shadow-blue-600/40 hover:shadow-blue-600/60 hover:scale-105 active:scale-95 transition-all duration-300"
        title="Open EchoGPT Chrome Sidebar Simulator"
      >
        <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
          <Chrome className="w-3.5 h-3.5 text-white" />
        </div>
        <span>{isOpen ? 'Close Extension' : 'EchoGPT Sidebar'}</span>
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
      </button>

      {/* Redesigned Chrome Extension Side Panel */}
      {isOpen && (
        <aside className="fixed top-0 right-0 bottom-0 z-50 w-full sm:w-[420px] bg-card/95 dark:bg-[#0c101c]/95 border-l border-border/80 backdrop-blur-2xl shadow-2xl flex flex-col justify-between animate-slideLeft transition-all">
          
          {/* Top Header */}
          <div className="p-3.5 border-b border-border/70 bg-muted/40 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-blue-600 to-cyan-400 p-[1.5px] flex items-center justify-center">
                <div className="w-full h-full bg-background rounded-[6px] flex items-center justify-center">
                  <Sparkles className="w-3.5 h-3.5 text-blue-500" />
                </div>
              </div>
              <div>
                <span className="text-xs font-black text-foreground block">EchoGPT Sidebar</span>
                <span className="text-[10px] text-muted-foreground">Multi-AI Browser Assistant</span>
              </div>
            </div>

            <div className="flex items-center gap-1.5">
              <button
                onClick={() => setMessages([{ role: 'assistant', text: 'New session initialized. How can I assist you?', model: selectedModel.name }])}
                className="px-2.5 py-1 rounded-lg text-[11px] font-bold text-blue-600 dark:text-blue-400 bg-blue-500/10 hover:bg-blue-500/20 transition-all flex items-center gap-1"
                title="Start New Chat"
              >
                <Plus className="w-3 h-3" />
                <span>New</span>
              </button>

              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted"
                title="Close Side Panel"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Main Area: Split into Content + Right Mini Toolbar */}
          <div className="flex-1 flex min-h-0 overflow-hidden">
            
            {/* Left Content / Chat Area */}
            <div className="flex-1 flex flex-col min-w-0 overflow-y-auto p-4 space-y-4">
              
              {/* Quick Actions Grid (if few messages) */}
              {messages.length <= 1 && (
                <div className="space-y-4 pt-1 animate-fadeIn">
                  <div className="space-y-1">
                    <span className="text-xs font-semibold text-muted-foreground">Hi, good morning 👋</span>
                    <h3 className="text-base font-black text-foreground">How can I help you?</h3>
                  </div>

                  {/* 2-Column Action Pills */}
                  <div className="grid grid-cols-2 gap-2">
                    {quickActions.map((action) => (
                      <button
                        key={action.name}
                        onClick={() => {
                          setActiveTab(action.tab as any);
                          handleSend(action.prompt);
                        }}
                        className="p-2.5 rounded-2xl bg-muted/50 hover:bg-blue-500/10 hover:border-blue-500/40 border border-border/60 text-left transition-all flex items-center gap-2 group"
                      >
                        <div className="w-7 h-7 rounded-xl bg-card flex items-center justify-center text-blue-500 group-hover:scale-105 shadow-sm">
                          <action.icon className="w-3.5 h-3.5" />
                        </div>
                        <span className="text-xs font-bold text-foreground group-hover:text-blue-500 truncate">
                          {action.name}
                        </span>
                      </button>
                    ))}
                  </div>

                  {/* Suggested Prompts */}
                  <div className="space-y-2 pt-2">
                    <span className="text-[11px] font-bold text-muted-foreground block">Suggested Prompts</span>
                    <div className="space-y-1.5">
                      {suggestedPrompts.map((p, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleSend(p)}
                          className="w-full text-left p-2.5 rounded-xl bg-muted/40 hover:bg-muted border border-border/50 text-xs text-foreground/90 font-medium transition-all truncate"
                        >
                          {p}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Messages Stream */}
              {messages.length > 1 && (
                <div className="space-y-3.5 pt-1">
                  {messages.map((m, i) => (
                    <div
                      key={i}
                      className={`p-3 rounded-2xl text-xs leading-relaxed ${
                        m.role === 'user'
                          ? 'bg-blue-600 text-white ml-6 rounded-br-sm shadow-sm'
                          : 'bg-muted/70 text-foreground mr-3 rounded-tl-sm border border-border/60 whitespace-pre-wrap'
                      }`}
                    >
                      {m.role === 'assistant' && (
                        <span className="text-[10px] font-bold text-blue-500 block mb-1">
                          {m.model || 'EchoGPT'}
                        </span>
                      )}
                      <p>{m.text}</p>
                    </div>
                  ))}

                  {isTyping && (
                    <div className="p-3 rounded-2xl bg-muted/60 text-xs text-muted-foreground animate-pulse max-w-[200px] flex items-center gap-2">
                      <Sparkles className="w-3.5 h-3.5 text-blue-500 animate-spin" />
                      <span>Generating response...</span>
                    </div>
                  )}
                </div>
              )}

            </div>

            {/* Rightmost Mini Toolbar (Matching the screenshot icons) */}
            <div className="w-14 border-l border-border/70 bg-muted/30 flex flex-col justify-between py-3 items-center text-[10px] shrink-0">
              
              {/* Top Tool Icons */}
              <div className="space-y-3 w-full flex flex-col items-center">
                {[
                  { name: 'Chat', icon: Bot, id: 'Chat' },
                  { name: 'Write', icon: PenTool, id: 'Write' },
                  { name: 'Read', icon: BookOpen, id: 'Read' },
                  { name: 'Translate', icon: Globe, id: 'Translate' },
                  { name: 'Image', icon: ImageIcon, id: 'Image' },
                  { name: 'Video', icon: Video, id: 'Video' },
                  { name: 'Compare', icon: SplitSquareVertical, id: 'Compare' },
                  { name: 'MCP', icon: Layers, id: 'MCP' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id as any)}
                    className={`w-10 h-10 rounded-xl flex flex-col items-center justify-center transition-all ${
                      activeTab === item.id
                        ? 'bg-blue-600 text-white font-bold shadow-md'
                        : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                    }`}
                    title={item.name}
                  >
                    <item.icon className="w-4 h-4" />
                    <span className="text-[8px] mt-0.5 leading-none">{item.name}</span>
                  </button>
                ))}
              </div>

              {/* Bottom Pro & Settings */}
              <div className="space-y-2 w-full flex flex-col items-center pt-2 border-t border-border/40">
                <button
                  className="w-10 h-9 rounded-xl flex flex-col items-center justify-center text-amber-500 hover:bg-amber-500/10 transition-all"
                  title="Upgrade to Pro"
                >
                  <Crown className="w-3.5 h-3.5" />
                  <span className="text-[8px] mt-0.5">Upgrade</span>
                </button>

                <button
                  className="w-10 h-9 rounded-xl flex flex-col items-center justify-center text-muted-foreground hover:text-foreground transition-all"
                  title="Settings"
                >
                  <Settings className="w-3.5 h-3.5" />
                  <span className="text-[8px] mt-0.5">Settings</span>
                </button>
              </div>

            </div>

          </div>

          {/* Bottom Chat Input Box */}
          <div className="p-3.5 border-t border-border/70 bg-card/90 space-y-2">
            
            {/* Model Selector Bar */}
            <div className="flex items-center justify-between text-xs">
              <div className="relative">
                <button
                  onClick={() => setModelDropdown(!modelDropdown)}
                  className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-muted hover:bg-muted/80 text-[11px] font-bold text-foreground border border-border/50"
                >
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: selectedModel.color }} />
                  <span>{selectedModel.name.split(' ')[0]}</span>
                  <ChevronDown className="w-3 h-3 text-muted-foreground" />
                </button>

                {modelDropdown && (
                  <div className="absolute bottom-full left-0 mb-2 w-56 rounded-2xl bg-card border border-border/80 shadow-2xl p-1.5 z-50 animate-fadeIn space-y-1">
                    {AI_MODELS.map(m => (
                      <button
                        key={m.id}
                        onClick={() => { setSelectedModel(m); setModelDropdown(false); }}
                        className="w-full text-left p-2 rounded-xl text-xs flex items-center justify-between hover:bg-muted text-foreground"
                      >
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full" style={{ backgroundColor: m.color }} />
                          <span>{m.name}</span>
                        </div>
                        {selectedModel.id === m.id && <Check className="w-3 h-3 text-blue-500" />}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <div className="flex items-center gap-1 text-muted-foreground">
                <button className="p-1 rounded-md hover:text-foreground hover:bg-muted" title="Screenshot webpage">
                  <Crop className="w-3.5 h-3.5" />
                </button>
                <button className="p-1 rounded-md hover:text-foreground hover:bg-muted" title="Web search grounding">
                  <Search className="w-3.5 h-3.5" />
                </button>
                <button className="p-1 rounded-md hover:text-foreground hover:bg-muted" title="Attach file">
                  <Paperclip className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Input Box */}
            <div className="relative flex items-center">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask a question or select page text..."
                className="w-full pl-3 pr-10 py-2.5 rounded-xl bg-muted/60 border border-border/70 text-xs text-foreground focus:outline-none focus:border-blue-500 font-sans"
              />
              <button
                onClick={() => handleSend()}
                disabled={!inputMessage.trim() || isTyping}
                className="absolute right-1.5 p-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 disabled:opacity-40 text-white shadow-sm transition-all"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

        </aside>
      )}
    </>
  );
}
