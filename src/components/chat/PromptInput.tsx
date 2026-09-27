'use client';

import React, { useState, useRef, useEffect } from 'react';
import { useChat } from '@/context/ChatContext';
import { 
  Send, 
  Paperclip, 
  Mic, 
  MicOff, 
  Lightbulb, 
  Globe, 
  Code2, 
  MoreHorizontal, 
  Sparkles,
  X,
  FileCode
} from 'lucide-react';

export default function PromptInput() {
  const { 
    sendMessage, 
    isGenerating, 
    activeModel, 
    isDualMode, 
    secondaryModel,
    setIsPromptLibraryOpen 
  } = useChat();

  const [input, setInput] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const [webSearchActive, setWebSearchActive] = useState(false);
  const [attachedFiles, setAttachedFiles] = useState<string[]>([]);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 140)}px`;
    }
  }, [input]);

  const handleSend = () => {
    if (!input.trim() || isGenerating) return;
    sendMessage(input);
    setInput('');
    setAttachedFiles([]);
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleChipClick = (type: string) => {
    if (type === 'Brainstorm') {
      setInput('Brainstorm 5 creative ideas for ');
    } else if (type === 'Web search') {
      setWebSearchActive(!webSearchActive);
    } else if (type === 'Code') {
      setInput('Write clean, optimized TypeScript code for ');
    } else {
      setIsPromptLibraryOpen(true);
    }
  };

  return (
    <div className="p-4 sm:p-6 bg-transparent">
      <div className="max-w-3xl mx-auto space-y-2.5">
        
        {/* Floating Input Box Card */}
        <div className="glass-pill rounded-3xl p-3.5 sm:p-4 shadow-glass transition-all focus-within:ring-2 focus-within:ring-primary/20 space-y-3">
          
          {/* Quick Action Chips Bar */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1 text-xs">
            <button
              onClick={() => handleChipClick('Brainstorm')}
              className="px-3 py-1.5 rounded-full bg-white/70 dark:bg-card/70 hover:bg-white dark:hover:bg-card border border-card-border font-semibold text-muted-foreground hover:text-foreground transition-all flex items-center gap-1.5 shadow-sm shrink-0"
            >
              <Lightbulb className="w-3.5 h-3.5 text-amber-500" />
              <span>Brainstorm</span>
            </button>

            <button
              onClick={() => handleChipClick('Web search')}
              className={`px-3 py-1.5 rounded-full border font-semibold transition-all flex items-center gap-1.5 shadow-sm shrink-0 ${
                webSearchActive
                  ? 'bg-primary/15 border-primary text-primary'
                  : 'bg-white/70 dark:bg-card/70 hover:bg-white dark:hover:bg-card border-card-border text-muted-foreground hover:text-foreground'
              }`}
            >
              <Globe className="w-3.5 h-3.5 text-primary" />
              <span>Web search</span>
            </button>

            <button
              onClick={() => handleChipClick('Code')}
              className="px-3 py-1.5 rounded-full bg-white/70 dark:bg-card/70 hover:bg-white dark:hover:bg-card border border-card-border font-semibold text-muted-foreground hover:text-foreground transition-all flex items-center gap-1.5 shadow-sm shrink-0"
            >
              <Code2 className="w-3.5 h-3.5 text-emerald-500" />
              <span>Code</span>
            </button>

            <button
              onClick={() => handleChipClick('More')}
              className="px-3 py-1.5 rounded-full bg-white/70 dark:bg-card/70 hover:bg-white dark:hover:bg-card border border-card-border font-semibold text-muted-foreground hover:text-foreground transition-all flex items-center gap-1.5 shadow-sm shrink-0"
            >
              <MoreHorizontal className="w-3.5 h-3.5" />
              <span>More</span>
            </button>
          </div>

          {/* Input Row */}
          <div className="flex items-center gap-2.5 pt-1">
            <button
              onClick={() => setAttachedFiles(prev => [...prev, 'notes.pdf'])}
              className="p-2 rounded-full text-muted-foreground hover:text-foreground hover:bg-black/5 dark:hover:bg-white/5 transition-colors shrink-0"
              title="Attach File"
            >
              <Paperclip className="w-4 h-4" />
            </button>

            <button
              onClick={() => setIsRecording(!isRecording)}
              className={`p-2 rounded-full transition-colors shrink-0 ${
                isRecording ? 'text-rose-500 animate-pulse bg-rose-500/10' : 'text-muted-foreground hover:text-foreground hover:bg-black/5 dark:hover:bg-white/5'
              }`}
              title="Voice Prompt"
            >
              {isRecording ? <Mic className="w-4 h-4" /> : <MicOff className="w-4 h-4" />}
            </button>

            {/* Main Textarea */}
            <textarea
              ref={textareaRef}
              rows={1}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask me something....."
              className="flex-1 bg-transparent border-none text-xs sm:text-sm text-foreground focus:outline-none resize-none placeholder:text-muted-foreground/70 leading-relaxed max-h-36 py-1"
            />

            {/* Circular Send Button */}
            <button
              onClick={handleSend}
              disabled={!input.trim() || isGenerating}
              className="w-10 h-10 rounded-2xl chatter-btn-primary disabled:opacity-40 text-white transition-all flex items-center justify-center shrink-0 hover:scale-105 active:scale-95"
            >
              {isGenerating ? (
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : (
                <Send className="w-4 h-4 ml-0.5" />
              )}
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
