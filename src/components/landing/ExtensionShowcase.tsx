'use client';

import React, { useState } from 'react';
import { 
  Chrome, 
  Sparkles, 
  Search, 
  SplitSquareVertical, 
  CheckCircle2, 
  ArrowRight, 
  Globe, 
  MousePointerClick, 
  FileText, 
  Code2, 
  Wand2, 
  Send,
  X,
  Plus
} from 'lucide-react';

export default function ExtensionShowcase() {
  const [selectedHighlightAction, setSelectedHighlightAction] = useState<string | null>('explain');
  const [activeSidePanelTab, setActiveSidePanelTab] = useState<'chat' | 'prompts' | 'history'>('chat');
  const [extensionChatInput, setExtensionChatInput] = useState('');
  const [extensionMessages, setExtensionMessages] = useState([
    { role: 'assistant', content: 'Hi! I am EchoGPT sidebar. Highlight text on this page or ask me anything without switching tabs!' }
  ]);

  const handleSendExtensionMessage = () => {
    if (!extensionChatInput.trim()) return;
    const newMsg = { role: 'user', content: extensionChatInput };
    setExtensionMessages(prev => [...prev, newMsg]);
    setExtensionChatInput('');

    setTimeout(() => {
      setExtensionMessages(prev => [
        ...prev,
        { role: 'assistant', content: `EchoGPT Sidebar [Claude 3.5]: Analyzed the active web page context. Here is your targeted answer regarding "${newMsg.content}".` }
      ]);
    }, 500);
  };

  return (
    <section id="extension" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold text-[#5B4FE1] bg-[#5B4FE1]/10 border border-[#5B4FE1]/20">
            <Chrome className="w-3.5 h-3.5 text-[#5B4FE1]" />
            <span>Chrome Extension Redesign</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-foreground tracking-tight">
            AI Directly in Your{' '}
            <span className="chatter-gradient-text">
              Browser Sidebar
            </span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg">
            Say goodbye to tab juggling. EchoGPT lives inside your browser, reading documents, explaining code, and summarizing articles in place.
          </p>
        </div>

        {/* Interactive Browser Sandbox Mockup */}
        <div className="max-w-5xl mx-auto rounded-3xl border border-border/80 bg-card/90 dark:bg-[#0A0D14] backdrop-blur-2xl shadow-2xl overflow-hidden">
          
          {/* Browser Chrome Header */}
          <div className="px-4 py-3 bg-muted/70 border-b border-border/70 flex items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-[#10B981]/80 inline-block" />
              </div>
              <div className="hidden sm:flex items-center gap-2 ml-4 px-3 py-1 rounded-lg bg-background/80 border border-border/60 text-xs text-muted-foreground max-w-xs font-mono truncate">
                <Globe className="w-3.5 h-3.5 text-[#5B4FE1]" />
                <span>https://developer.mozilla.org/web-apis</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="px-2.5 py-1 rounded-lg bg-[#5B4FE1]/10 border border-[#5B4FE1]/30 text-[#5B4FE1] dark:text-[#A78BFA] text-xs font-bold flex items-center gap-1.5">
                <Chrome className="w-3.5 h-3.5" />
                <span>EchoGPT Active</span>
              </div>
            </div>
          </div>

          {/* Browser Window Body (Split into Webpage View + Extension Sidebar) */}
          <div className="grid grid-cols-1 md:grid-cols-12 min-h-[460px]">
            
            {/* Left Column: Simulated Webpage with Highlightable Text */}
            <div className="md:col-span-7 p-6 sm:p-8 space-y-6 border-b md:border-b-0 md:border-r border-border/60 relative bg-background/40">
              
              <div className="space-y-2">
                <span className="text-[10px] font-bold text-[#5B4FE1] uppercase tracking-widest">MDN Web Docs Article</span>
                <h3 className="text-xl font-bold text-foreground">Understanding WebAssembly and JIT Optimization</h3>
              </div>

              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                WebAssembly (abbreviated Wasm) is a binary instruction format for a stack-based virtual machine. Wasm is designed as a portable compilation target for programming languages.
              </p>

              {/* Highlighted Section & Floating Action Bar */}
              <div className="relative p-4 rounded-2xl bg-[#5B4FE1]/10 border border-[#5B4FE1]/30 space-y-2">
                <p className="text-xs sm:text-sm font-medium text-foreground leading-relaxed bg-[#5B4FE1]/20 px-1 py-0.5 rounded">
                  &quot;The V8 engine optimizes native JIT compilation by speculative type feedback, reducing overhead in compute-heavy WebAssembly memory heaps.&quot;
                </p>

                {/* Floating Quick Actions Bar */}
                <div className="pt-2 flex flex-wrap items-center gap-2">
                  <button
                    onClick={() => setSelectedHighlightAction('explain')}
                    className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                      selectedHighlightAction === 'explain'
                        ? 'bg-[#5B4FE1] text-white shadow-sm'
                        : 'bg-card text-foreground hover:bg-muted border border-border'
                    }`}
                  >
                    <Wand2 className="w-3 h-3" />
                    <span>Explain Concept</span>
                  </button>

                  <button
                    onClick={() => setSelectedHighlightAction('summarize')}
                    className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                      selectedHighlightAction === 'summarize'
                        ? 'bg-[#5B4FE1] text-white shadow-sm'
                        : 'bg-card text-foreground hover:bg-muted border border-border'
                    }`}
                  >
                    <FileText className="w-3 h-3" />
                    <span>Summarize</span>
                  </button>

                  <button
                    onClick={() => setSelectedHighlightAction('code')}
                    className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                      selectedHighlightAction === 'code'
                        ? 'bg-[#5B4FE1] text-white shadow-sm'
                        : 'bg-card text-foreground hover:bg-muted border border-border'
                    }`}
                  >
                    <Code2 className="w-3 h-3" />
                    <span>Generate Code</span>
                  </button>
                </div>

                {/* Action Result Popup */}
                {selectedHighlightAction && (
                  <div className="mt-3 p-3 rounded-xl bg-card border border-[#5B4FE1]/30 text-xs text-foreground space-y-1 animate-fadeIn">
                    <span className="font-bold text-[#5B4FE1] text-[11px] block">
                      ⚡ EchoGPT Quick Analysis ({selectedHighlightAction.toUpperCase()}):
                    </span>
                    <p className="text-muted-foreground leading-relaxed">
                      {selectedHighlightAction === 'explain' && 'Speculative type feedback means the JS engine guesses data types to compile machine code in advance, speeding up execution by ~300%.'}
                      {selectedHighlightAction === 'summarize' && 'Wasm + V8 JIT uses smart type guessing to make web apps run near native CPU speeds.'}
                      {selectedHighlightAction === 'code' && 'const wasmModule = await WebAssembly.instantiateStreaming(fetch("math.wasm"));'}
                    </p>
                  </div>
                )}
              </div>

              <div className="pt-2 text-xs text-muted-foreground flex items-center gap-2">
                <MousePointerClick className="w-4 h-4 text-[#5B4FE1] animate-bounce" />
                <span>Try clicking different quick actions above!</span>
              </div>
            </div>

            {/* Right Column: Simulated EchoGPT Chrome Side Panel */}
            <div className="md:col-span-5 bg-card/60 flex flex-col justify-between p-4 sm:p-5 space-y-4">
              
              {/* Side Panel Header */}
              <div className="space-y-3">
                <div className="flex items-center justify-between pb-3 border-b border-border/50">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-[#5B4FE1] flex items-center justify-center text-white font-bold text-xs">
                      E
                    </div>
                    <div>
                      <span className="text-xs font-bold text-foreground block">EchoGPT Sidebar</span>
                      <span className="text-[10px] text-muted-foreground">Claude 3.5 Sonnet Active</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#10B981]/10 text-[#10B981] font-bold">
                      Connected
                    </span>
                  </div>
                </div>

                {/* Messages stream */}
                <div className="space-y-3 max-h-56 overflow-y-auto pr-1">
                  {extensionMessages.map((msg, i) => (
                    <div
                      key={i}
                      className={`p-3 rounded-xl text-xs leading-relaxed ${
                        msg.role === 'user'
                          ? 'bg-[#5B4FE1] text-white ml-6'
                          : 'bg-muted/70 text-foreground mr-4 border border-border/40'
                      }`}
                    >
                      {msg.content}
                    </div>
                  ))}
                </div>
              </div>

              {/* Side Panel Input Box */}
              <div className="pt-2">
                <div className="relative flex items-center">
                  <input
                    type="text"
                    value={extensionChatInput}
                    onChange={(e) => setExtensionChatInput(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSendExtensionMessage()}
                    placeholder="Ask sidebar about this tab..."
                    className="w-full pl-3 pr-10 py-2.5 rounded-xl bg-muted/60 border border-border/70 text-xs text-foreground focus:outline-none focus:border-[#5B4FE1]"
                  />
                  <button
                    onClick={handleSendExtensionMessage}
                    className="absolute right-1.5 p-1.5 rounded-lg bg-[#5B4FE1] text-white hover:bg-[#4F46E5]"
                  >
                    <Send className="w-3 h-3" />
                  </button>
                </div>
              </div>

            </div>

          </div>

          {/* Bottom Extension CTA Bar */}
          <div className="p-4 sm:p-5 bg-muted/60 border-t border-border/60 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
            <span className="text-muted-foreground font-medium">
              Available now on the Official Chrome Web Store for Chrome, Edge, Brave, and Arc browsers.
            </span>
            <a
              href="https://chromewebstore.google.com/detail/echogpt-multi-ai-chat-sid/negimdcamohmoheiifgecbjgjepkcfhj"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-white chatter-btn-primary shadow-md transition-all shrink-0"
            >
              <Chrome className="w-3.5 h-3.5" />
              <span>Install Extension Free</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
