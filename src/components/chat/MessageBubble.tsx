'use client';

import React, { useState } from 'react';
import { Message } from '@/types/chat';
import CodeBlock from './CodeBlock';
import { Copy, Check, RotateCcw, ThumbsUp, ThumbsDown, Volume2, Sparkles, User } from 'lucide-react';
import { useChat } from '@/context/ChatContext';

interface MessageBubbleProps {
  message: Message;
  isLast?: boolean;
}

export default function MessageBubble({ message, isLast }: MessageBubbleProps) {
  const { regenerateLastMessage } = useChat();
  const [copied, setCopied] = useState(false);
  const [liked, setLiked] = useState<boolean | null>(null);
  const [isSpeaking, setIsSpeaking] = useState(false);

  const isUser = message.role === 'user';

  const handleCopy = () => {
    navigator.clipboard.writeText(message.content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSpeak = () => {
    if ('speechSynthesis' in window) {
      if (isSpeaking) {
        window.speechSynthesis.cancel();
        setIsSpeaking(false);
      } else {
        const utterance = new SpeechSynthesisUtterance(message.content.replace(/```[\s\S]*?```/g, 'Code snippet omitted.'));
        utterance.onend = () => setIsSpeaking(false);
        window.speechSynthesis.speak(utterance);
        setIsSpeaking(true);
      }
    }
  };

  // Helper to check if mountains/summer is mentioned to render the visual 3-image cards preview like the user screenshot!
  const hasMountainImages = message.content.toLowerCase().includes('mountain') || message.content.toLowerCase().includes('summer');

  const renderFormattedContent = (text: string) => {
    const codeBlockRegex = /```([a-zA-Z0-9_-]*)\n([\s\S]*?)```/g;
    const parts = [];
    let lastIndex = 0;
    let match;

    while ((match = codeBlockRegex.exec(text)) !== null) {
      if (match.index > lastIndex) {
        parts.push({
          type: 'text',
          content: text.substring(lastIndex, match.index),
        });
      }

      parts.push({
        type: 'code',
        language: match[1] || 'text',
        code: match[2].trim(),
      });

      lastIndex = match.index + match[0].length;
    }

    if (lastIndex < text.length) {
      parts.push({
        type: 'text',
        content: text.substring(lastIndex),
      });
    }

    return parts.map((part, i) => {
      if (part.type === 'code') {
        return <CodeBlock key={i} language={part.language || 'text'} code={part.code || ''} />;
      }

      return (
        <div key={i} className="space-y-2 whitespace-pre-wrap leading-relaxed">
          {part.content}
        </div>
      );
    });
  };

  return (
    <div className={`flex gap-3.5 sm:gap-4 ${isUser ? 'justify-end' : 'justify-start'} animate-fadeIn`}>
      
      {/* Assistant Avatar */}
      {!isUser && (
        <div
          className="w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs text-white shrink-0 mt-1 shadow-md bg-gradient-to-tr from-[#0ea5e9] to-[#2563eb]"
        >
          {message.modelName ? message.modelName.charAt(0) : 'E'}
        </div>
      )}

      {/* Bubble Container */}
      <div className={`max-w-[88%] sm:max-w-[78%] space-y-2 ${isUser ? 'items-end' : 'items-start'}`}>
        
        {/* Model info badge for assistant */}
        {!isUser && message.modelName && (
          <div className="flex items-center gap-2 text-xs">
            <span className="font-bold text-foreground">{message.modelName}</span>
            <span className="text-[10px] text-muted-foreground font-mono">{message.timestamp}</span>
          </div>
        )}

        {/* Message Content Bubble */}
        <div
          className={`p-4 sm:p-5 text-xs sm:text-sm shadow-soft ${
            isUser
              ? 'glass-pill rounded-3xl rounded-br-md text-foreground font-medium border border-card-border'
              : 'text-foreground/90 space-y-3 leading-relaxed'
          }`}
        >
          {isUser ? (
            <p className="whitespace-pre-wrap leading-relaxed">{message.content}</p>
          ) : (
            <div className="space-y-3">
              {renderFormattedContent(message.content)}

              {/* Multi-Image Preview Cards like screenshot */}
              {hasMountainImages && (
                <div className="grid grid-cols-3 gap-2.5 pt-2 rounded-2xl overflow-hidden">
                  <div className="relative rounded-2xl overflow-hidden aspect-[4/5] shadow-sm">
                    <img
                      src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=500&auto=format&fit=crop&q=80"
                      alt="Alpine Mountain View"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="relative rounded-2xl overflow-hidden aspect-[4/5] shadow-sm">
                    <img
                      src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=500&auto=format&fit=crop&q=80"
                      alt="Mountain Valley Meadow"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="relative rounded-2xl overflow-hidden aspect-[4/5] shadow-sm">
                    <img
                      src="https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?w=500&auto=format&fit=crop&q=80"
                      alt="Dramatic Rocky Mountain"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Assistant Actions Bar */}
        {!isUser && (
          <div className="flex items-center gap-1 text-muted-foreground pt-1">
            <button
              onClick={handleCopy}
              className="p-1.5 rounded-lg hover:text-foreground hover:bg-black/5 dark:hover:bg-white/5 transition-all"
              title="Copy"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
            </button>

            <button
              onClick={handleSpeak}
              className={`p-1.5 rounded-lg hover:text-foreground hover:bg-black/5 dark:hover:bg-white/5 transition-all ${isSpeaking ? 'text-primary animate-pulse' : ''}`}
              title="Listen"
            >
              <Volume2 className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={() => setLiked(liked === true ? null : true)}
              className={`p-1.5 rounded-lg hover:text-foreground hover:bg-black/5 dark:hover:bg-white/5 transition-all ${liked === true ? 'text-emerald-500' : ''}`}
            >
              <ThumbsUp className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={() => setLiked(liked === false ? null : false)}
              className={`p-1.5 rounded-lg hover:text-foreground hover:bg-black/5 dark:hover:bg-white/5 transition-all ${liked === false ? 'text-rose-500' : ''}`}
            >
              <ThumbsDown className="w-3.5 h-3.5" />
            </button>

            {isLast && (
              <button
                onClick={regenerateLastMessage}
                className="flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-semibold text-primary hover:bg-primary/10 transition-all ml-2"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Regenerate</span>
              </button>
            )}
          </div>
        )}

      </div>

      {/* User Avatar Portrait */}
      {isUser && (
        <div className="w-8 h-8 rounded-full overflow-hidden border border-card-border shadow-sm shrink-0 mt-1">
          <img
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80"
            alt="User"
            className="w-full h-full object-cover"
          />
        </div>
      )}

    </div>
  );
}
