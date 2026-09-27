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
    } else {
      alert('Speech synthesis is not supported in this browser.');
    }
  };

  // Helper to parse markdown code blocks vs text
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

      // Render regular markdown headings and bold text
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
          className="w-8 h-8 rounded-xl flex items-center justify-center font-bold text-xs text-white shrink-0 mt-1 shadow-md"
          style={{ backgroundColor: message.modelColor || '#3B82F6' }}
        >
          {message.modelName ? message.modelName.charAt(0) : 'E'}
        </div>
      )}

      {/* Bubble Container */}
      <div className={`max-w-[88%] sm:max-w-[80%] space-y-2 ${isUser ? 'items-end' : 'items-start'}`}>
        
        {/* Model info badge for assistant */}
        {!isUser && message.modelName && (
          <div className="flex items-center gap-2 text-xs">
            <span className="font-bold text-foreground">{message.modelName}</span>
            <span className="text-[10px] text-muted-foreground font-mono">{message.timestamp}</span>
          </div>
        )}

        {/* Message Content Bubble */}
        <div
          className={`p-4 sm:p-5 rounded-3xl text-xs sm:text-sm shadow-sm ${
            isUser
              ? 'bg-blue-600 text-white rounded-br-sm'
              : 'bg-card/90 dark:bg-card border border-border/80 text-foreground rounded-tl-sm backdrop-blur-xl'
          }`}
        >
          {isUser ? (
            <p className="whitespace-pre-wrap leading-relaxed">{message.content}</p>
          ) : (
            <div className="space-y-2 leading-relaxed">
              {renderFormattedContent(message.content)}
            </div>
          )}
        </div>

        {/* Assistant Actions Bar (Copy, Speak, Regenerate, Thumbs) */}
        {!isUser && (
          <div className="flex items-center gap-1 text-muted-foreground pt-1">
            <button
              onClick={handleCopy}
              className="p-1.5 rounded-lg hover:text-foreground hover:bg-muted transition-all"
              title="Copy answer"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
            </button>

            <button
              onClick={handleSpeak}
              className={`p-1.5 rounded-lg hover:text-foreground hover:bg-muted transition-all ${isSpeaking ? 'text-blue-500 animate-pulse' : ''}`}
              title="Read aloud"
            >
              <Volume2 className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={() => setLiked(liked === true ? null : true)}
              className={`p-1.5 rounded-lg hover:text-foreground hover:bg-muted transition-all ${liked === true ? 'text-emerald-500' : ''}`}
              title="Good response"
            >
              <ThumbsUp className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={() => setLiked(liked === false ? null : false)}
              className={`p-1.5 rounded-lg hover:text-foreground hover:bg-muted transition-all ${liked === false ? 'text-rose-500' : ''}`}
              title="Poor response"
            >
              <ThumbsDown className="w-3.5 h-3.5" />
            </button>

            {isLast && (
              <button
                onClick={regenerateLastMessage}
                className="flex items-center gap-1 px-2 py-1 rounded-lg hover:text-foreground hover:bg-muted text-[11px] font-semibold transition-all ml-2"
                title="Regenerate with active model"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Regenerate</span>
              </button>
            )}
          </div>
        )}

      </div>

      {/* User Avatar */}
      {isUser && (
        <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-purple-500 to-indigo-600 flex items-center justify-center font-bold text-xs text-white shrink-0 mt-1 shadow-md">
          <User className="w-4 h-4" />
        </div>
      )}

    </div>
  );
}
