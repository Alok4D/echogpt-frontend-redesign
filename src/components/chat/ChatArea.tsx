'use client';

import React, { useRef, useEffect, useState } from 'react';
import { useChat } from '@/context/ChatContext';
import MessageBubble from './MessageBubble';
import { 
  Sparkles, 
  Share2, 
  Bookmark, 
  MoreHorizontal, 
  Image as ImageIcon,
  Check,
  Compass,
  ArrowRight
} from 'lucide-react';

export default function ChatArea() {
  const { currentSession, isGenerating, activeModel, sendMessage } = useChat();
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [copiedShare, setCopiedShare] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [currentSession?.messages, isGenerating]);

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedShare(true);
    setTimeout(() => setCopiedShare(false), 2000);
  };

  return (
    <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6 flex flex-col justify-between">
      <div className="max-w-4xl w-full mx-auto space-y-6">
        
        {/* Floating Top Title Bar from user screenshot */}
        <div className="glass-pill rounded-3xl p-4 sm:p-5 flex items-center justify-between shadow-soft">
          <div className="flex items-center gap-3 overflow-hidden">
            <h2 className="text-base sm:text-lg font-black text-foreground truncate">
              {currentSession?.title || 'Mountains in the summer'}
            </h2>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20 hidden sm:inline-block">
              {activeModel.name.split(' ')[0]}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleShare}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/70 dark:bg-card/70 hover:bg-white dark:hover:bg-card border border-card-border text-xs font-semibold text-foreground transition-all shadow-sm"
            >
              {copiedShare ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Share2 className="w-3.5 h-3.5" />}
              <span className="hidden sm:inline">{copiedShare ? 'Copied' : 'Share'}</span>
            </button>

            <button
              onClick={() => setBookmarked(!bookmarked)}
              className={`p-2 rounded-full border border-card-border transition-all ${
                bookmarked ? 'bg-amber-500/10 text-amber-500 border-amber-500/30' : 'bg-white/70 dark:bg-card/70 text-muted-foreground hover:text-foreground'
              }`}
              title="Bookmark"
            >
              <Bookmark className="w-4 h-4" />
            </button>

            <button
              className="p-2 rounded-full bg-white/70 dark:bg-card/70 border border-card-border text-muted-foreground hover:text-foreground"
              title="More Options"
            >
              <MoreHorizontal className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Empty State / Welcome Screen */}
        {(!currentSession || currentSession.messages.length === 0) && (
          <div className="py-12 text-center space-y-6 animate-fadeIn">
            <div className="w-16 h-16 rounded-3xl bg-gradient-to-tr from-[#0ea5e9] to-[#2563eb] text-white flex items-center justify-center mx-auto shadow-xl shadow-cyan-500/20">
              <Sparkles className="w-8 h-8" />
            </div>

            <div className="space-y-2 max-w-md mx-auto">
              <h3 className="text-2xl font-black text-foreground">How can I help you today?</h3>
              <p className="text-xs text-muted-foreground">
                Ask about summer mountain tours, Next.js architecture, coding algorithms, or translations.
              </p>
            </div>

            {/* Visual Sample Card: Dolomites Mountains in Summer */}
            <div
              onClick={() => sendMessage('What can you see in the mountains in summer? Show scenic examples and recommend tours.')}
              className="cursor-pointer max-w-lg mx-auto glass-pill rounded-3xl p-4 border border-card-border hover:border-primary/40 transition-all text-left space-y-3 group shadow-soft"
            >
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold text-primary">✨ Suggested Visual Exploration</span>
                <ArrowRight className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <h4 className="text-xs font-bold text-foreground">Explore scenic summer mountain tours & lakes</h4>
              <div className="grid grid-cols-3 gap-2 rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&auto=format&fit=crop&q=80"
                  alt="Mountain Lake"
                  className="w-full h-20 object-cover rounded-xl"
                />
                <img
                  src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400&auto=format&fit=crop&q=80"
                  alt="Mountain Valley"
                  className="w-full h-20 object-cover rounded-xl"
                />
                <img
                  src="https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?w=400&auto=format&fit=crop&q=80"
                  alt="Mountain Peaks"
                  className="w-full h-20 object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
        )}

        {/* Messages Stream */}
        {currentSession && currentSession.messages.length > 0 && (
          <div className="space-y-6">
            {currentSession.messages.map((message, index) => (
              <MessageBubble
                key={message.id}
                message={message}
                isLast={index === currentSession.messages.length - 1}
              />
            ))}

            {isGenerating && (
              <div className="flex items-center gap-3 p-4 rounded-3xl glass-pill max-w-sm text-xs text-muted-foreground animate-pulse">
                <div className="w-6 h-6 rounded-xl bg-primary text-white flex items-center justify-center font-bold text-[10px]">
                  {activeModel.name.charAt(0)}
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="font-semibold text-foreground">{activeModel.name} is typing...</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-primary animate-bounce" />
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
