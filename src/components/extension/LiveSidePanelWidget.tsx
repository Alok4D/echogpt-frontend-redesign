'use client';

import React, { useState } from 'react';
import { 
  Sparkles, 
  Chrome, 
  X, 
  Plus, 
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
  ChevronDown,
  Check,
  Search,
  Paperclip
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
    'Tell me an interesting fun fact about mountains',
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
      setMessages(prev => [...prev, { role: 'assistant', text: reply, model: selectedModel.name }]);
      setIsTyping(false);
    }, 700);
  };

  return (
    <>
      {/* Floating Trigger Button */}
 
      {/* Redesigned Chrome Extension Side Panel with Soft Pastel Mesh Glass */}
      {isOpen && (
        <aside className="fixed top-0 right-0 bottom-0 z-50 w-full sm:w-[400px] glass-panel bg-card/90 backdrop-blur-2xl border-l border-card-border shadow-2xl flex flex-col justify-between animate-slideLeft transition-all">
          
          {/* Top Header */}
          <div className="p-4 border-b border-card-border bg-white/40 dark:bg-card/40 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#5B4FE1] to-[#7C3AED] text-white flex items-center justify-center font-black text-xs shadow-md">
                E
              </div>
              <div>
                <span className="text-xs font-black text-foreground block">EchoGPT Sidebar</span>
                <span className="text-[10px] text-muted-foreground">Multi-AI Browser Assistant</span>
              </div>
            </div>

            <div className="flex items-center gap-1.5">
              <button
                onClick={() => setMessages([{ role: 'assistant', text: 'New session initialized. How can I assist you?', model: selectedModel.name }])}
                className="px-2.5 py-1 rounded-full text-[11px] font-bold text-[#5B4FE1] bg-[#5B4FE1]/10 hover:bg-[#5B4FE1]/20 transition-all flex items-center gap-1"
              >
                <Plus className="w-3 h-3" />
                <span>New</span>
              </button>

              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-full text-muted-foreground hover:text-foreground hover:bg-black/5 dark:hover:bg-white/5"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Main Body */}
          <div className="flex-1 flex min-h-0 overflow-hidden">
            
            {/* Left Content Area */}
            <div className="flex-1 flex flex-col min-w-0 overflow-y-auto p-4 space-y-4">
              
              {messages.length <= 1 && (
                <div className="space-y-4 pt-1 animate-fadeIn">
                  <div className="space-y-1">
                    <span className="text-xs font-semibold text-muted-foreground">Hi, good morning 👋</span>
                    <h3 className="text-base font-black text-foreground">How can I help you?</h3>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    {quickActions.map((action) => (
                      <button
                        key={action.name}
                        onClick={() => {
                          setActiveTab(action.tab as any);
                          handleSend(action.prompt);
                        }}
                        className="p-2.5 rounded-2xl glass-pill hover:border-[#5B4FE1]/40 text-left transition-all flex items-center gap-2 group"
                      >
                        <div className="w-7 h-7 rounded-xl bg-[#5B4FE1]/10 text-[#5B4FE1] flex items-center justify-center group-hover:scale-105">
                          <action.icon className="w-3.5 h-3.5" />
                        </div>
                        <span className="text-xs font-bold text-foreground group-hover:text-[#5B4FE1] truncate">
                          {action.name}
                        </span>
                      </button>
                    ))}
                  </div>

                  <div className="space-y-1.5 pt-1">
                    <span className="text-[10px] font-bold text-muted-foreground uppercase">Suggested Prompts</span>
                    {suggestedPrompts.slice(0, 3).map((p, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleSend(p)}
                        className="w-full text-left p-2.5 rounded-2xl glass-pill text-xs text-foreground/90 font-medium transition-all truncate"
                      >
                        {p}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {messages.length > 1 && (
                <div className="space-y-3 pt-1">
                  {messages.map((m, i) => (
                    <div
                      key={i}
                      className={`p-3 rounded-2xl text-xs leading-relaxed ${
                        m.role === 'user'
                          ? 'glass-pill bg-white/90 text-foreground ml-6 shadow-sm border border-card-border font-medium'
                          : 'text-foreground mr-2 whitespace-pre-wrap leading-relaxed'
                      }`}
                    >
                      {m.role === 'assistant' && (
                        <span className="text-[10px] font-bold text-[#5B4FE1] block mb-1">
                          {m.model || 'EchoGPT'}
                        </span>
                      )}
                      <p>{m.text}</p>
                    </div>
                  ))}

                  {isTyping && (
                    <div className="p-3 rounded-2xl glass-pill text-xs text-muted-foreground animate-pulse max-w-[180px] flex items-center gap-2">
                      <Sparkles className="w-3.5 h-3.5 text-[#5B4FE1] animate-spin" />
                      <span>Thinking...</span>
                    </div>
                  )}
                </div>
              )}

            </div>

            {/* Right Mini Toolbar */}
            <div className="w-12 border-l border-card-border bg-white/30 dark:bg-card/30 flex flex-col justify-between py-3 items-center text-[10px] shrink-0">
              <div className="space-y-3 w-full flex flex-col items-center">
                {[
                  { name: 'Chat', icon: Sparkles, id: 'Chat' },
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
                    className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all ${
                      activeTab === item.id
                        ? 'bg-[#5B4FE1] text-white font-bold shadow-md'
                        : 'text-muted-foreground hover:text-foreground hover:bg-black/5 dark:hover:bg-white/5'
                    }`}
                    title={item.name}
                  >
                    <item.icon className="w-4 h-4" />
                  </button>
                ))}
              </div>

              <div className="space-y-2 w-full flex flex-col items-center pt-2 border-t border-card-border">
                <button
                  className="w-9 h-9 rounded-xl flex items-center justify-center text-amber-500 hover:bg-amber-500/10 transition-all"
                  title="Upgrade"
                >
                  <Crown className="w-4 h-4" />
                </button>
                <button
                  className="w-9 h-9 rounded-xl flex items-center justify-center text-muted-foreground hover:text-foreground transition-all"
                  title="Settings"
                >
                  <Settings className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>

          {/* Bottom Prompt Bar */}
          <div className="p-3.5 border-t border-card-border bg-white/60 dark:bg-card/60 space-y-2">
            <div className="flex items-center justify-between text-xs">
              <div className="relative">
                <button
                  onClick={() => setModelDropdown(!modelDropdown)}
                  className="flex items-center gap-1.5 px-2.5 py-1 rounded-full glass-pill text-[11px] font-bold text-foreground"
                >
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: selectedModel.color }} />
                  <span>{selectedModel.name.split(' ')[0]}</span>
                  <ChevronDown className="w-3 h-3 text-muted-foreground" />
                </button>

                {modelDropdown && (
                  <div className="absolute bottom-full left-0 mb-2 w-56 rounded-3xl bg-card border border-card-border shadow-2xl p-1.5 z-50 animate-fadeIn space-y-1">
                    {AI_MODELS.map(m => (
                      <button
                        key={m.id}
                        onClick={() => { setSelectedModel(m); setModelDropdown(false); }}
                        className="w-full text-left p-2 rounded-2xl text-xs flex items-center justify-between hover:bg-muted/70 text-foreground"
                      >
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full" style={{ backgroundColor: m.color }} />
                          <span>{m.name}</span>
                        </div>
                        {selectedModel.id === m.id && <Check className="w-3 h-3 text-[#5B4FE1]" />}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <div className="flex items-center gap-1 text-muted-foreground">
                <button className="p-1 rounded-full hover:text-foreground" title="Search">
                  <Search className="w-3.5 h-3.5" />
                </button>
                <button className="p-1 rounded-full hover:text-foreground" title="Attach">
                  <Paperclip className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            <div className="relative flex items-center">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask me something....."
                className="w-full pl-3 pr-10 py-2.5 rounded-2xl glass-pill text-xs text-foreground focus:outline-none focus:ring-1 focus:ring-[#5B4FE1]"
              />
              <button
                onClick={() => handleSend()}
                disabled={!inputMessage.trim() || isTyping}
                className="absolute right-1.5 p-1.5 rounded-xl chatter-btn-primary disabled:opacity-40 text-white shadow-sm transition-all"
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
