'use client';

import React, { useState, useRef, useEffect } from 'react';
import { useChat } from '@/context/ChatContext';
import { 
  Send, 
  Paperclip, 
  Mic, 
  MicOff, 
  BookOpen, 
  Sparkles, 
  X, 
  FileCode, 
  Image as ImageIcon,
  StopCircle
} from 'lucide-react';

export default function PromptInput() {
  const { 
    sendMessage, 
    isGenerating, 
    activeModel, 
    setIsPromptLibraryOpen,
    isDualMode,
    secondaryModel 
  } = useChat();

  const [input, setInput] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const [attachedFiles, setAttachedFiles] = useState<string[]>([]);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 180)}px`;
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

  const handleVoiceToggle = () => {
    if (isRecording) {
      setIsRecording(false);
    } else {
      setIsRecording(true);
      // Simulate speech-to-text
      setTimeout(() => {
        setInput(prev => prev + (prev ? ' ' : '') + 'Explain modern React 19 useActionState hook.');
        setIsRecording(false);
      }, 2000);
    }
  };

  const handleAttachSimulate = () => {
    setAttachedFiles(prev => [...prev, 'architecture-spec.ts']);
  };

  return (
    <div className="p-4 sm:p-6 bg-background/80 backdrop-blur-xl border-t border-border/70">
      <div className="max-w-4xl mx-auto space-y-3">
        
        {/* Attached Files Badges */}
        {attachedFiles.length > 0 && (
          <div className="flex items-center gap-2 flex-wrap animate-fadeIn">
            {attachedFiles.map((file, i) => (
              <div
                key={i}
                className="flex items-center gap-1.5 px-3 py-1 rounded-xl bg-blue-500/10 text-blue-500 border border-blue-500/20 text-xs font-medium"
              >
                <FileCode className="w-3.5 h-3.5" />
                <span>{file}</span>
                <button
                  onClick={() => setAttachedFiles(attachedFiles.filter((_, idx) => idx !== i))}
                  className="hover:text-rose-500 ml-1"
                >
                  <X className="w-3 h-3" />
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Input Container Box */}
        <div className="relative rounded-3xl border border-border/80 bg-card/90 shadow-xl focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-500/20 transition-all p-3 sm:p-4">
          
          {/* Main Textarea */}
          <textarea
            ref={textareaRef}
            rows={1}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={`Message ${activeModel.name}${isDualMode ? ` and ${secondaryModel.name}` : ''}... (Shift+Enter for new line)`}
            className="w-full bg-transparent border-none text-xs sm:text-sm text-foreground focus:outline-none resize-none placeholder:text-muted-foreground/70 max-h-44 leading-relaxed font-sans"
          />

          {/* Bottom Actions Bar inside Input Box */}
          <div className="flex items-center justify-between pt-2 border-t border-border/40 gap-2">
            
            {/* Left Tools: Attach, Voice, Prompt Templates */}
            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={handleAttachSimulate}
                className="p-2 rounded-xl text-muted-foreground hover:text-foreground hover:bg-muted border border-border/40 transition-all"
                title="Attach code snippet or file"
              >
                <Paperclip className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={handleVoiceToggle}
                className={`p-2 rounded-xl border transition-all ${
                  isRecording
                    ? 'bg-rose-500 text-white border-rose-600 animate-pulse'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted border-border/40'
                }`}
                title={isRecording ? 'Listening...' : 'Voice Input'}
              >
                {isRecording ? <Mic className="w-4 h-4" /> : <MicOff className="w-4 h-4" />}
              </button>

              <button
                type="button"
                onClick={() => setIsPromptLibraryOpen(true)}
                className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold text-muted-foreground hover:text-foreground hover:bg-muted border border-border/40 transition-all"
              >
                <BookOpen className="w-3.5 h-3.5 text-blue-500" />
                <span>Prompt Library</span>
              </button>
            </div>

            {/* Right: Active Model Badge & Send Button */}
            <div className="flex items-center gap-2">
              <div className="hidden sm:flex items-center gap-1 text-[11px] text-muted-foreground font-mono">
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: activeModel.color }} />
                <span>{activeModel.name.split(' ')[0]}</span>
                {isDualMode && (
                  <span className="text-amber-500 font-bold"> + {secondaryModel.name.split(' ')[0]}</span>
                )}
              </div>

              <button
                onClick={handleSend}
                disabled={!input.trim() || isGenerating}
                className="p-2.5 rounded-2xl bg-blue-600 hover:bg-blue-500 disabled:opacity-40 disabled:hover:bg-blue-600 text-white shadow-md shadow-blue-600/30 transition-all flex items-center justify-center"
              >
                {isGenerating ? (
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  <Send className="w-4 h-4" />
                )}
              </button>
            </div>

          </div>

        </div>

        {/* Disclaimer / Guidance Note */}
        <p className="text-[11px] text-center text-muted-foreground">
          EchoGPT unifies multiple AI models. Responses generated by AI may vary in accuracy.
        </p>

      </div>
    </div>
  );
}
