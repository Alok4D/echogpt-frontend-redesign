'use client';

import React, { useState } from 'react';
import { useChat } from '@/context/ChatContext';
import { Clock, Search, MessageSquare, Trash2, Pin, ArrowRight, Sparkles } from 'lucide-react';
import Link from 'next/link';

export default function HistoryPage() {
  const { sessions, selectSession, deleteSession, togglePinSession } = useChat();
  const [search, setSearch] = useState('');

  const filtered = sessions.filter(s =>
    s.title.toLowerCase().includes(search.toLowerCase()) ||
    s.messages.some(m => m.content.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">
      <div className="max-w-7xl mx-auto space-y-6">
        
        {/* Header */}
        <div className="p-6 rounded-3xl bg-card border border-border/70 shadow-sm backdrop-blur-xl flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold text-blue-500 bg-blue-500/10 border border-blue-500/20">
              <Clock className="w-3.5 h-3.5" />
              <span>Full Conversation Archive</span>
            </div>
            <h1 className="text-xl sm:text-2xl font-black text-foreground">
              Chat History & Saved Sessions
            </h1>
            <p className="text-xs text-muted-foreground">
              Search, filter, manage and re-open your historical Multi-AI conversations.
            </p>
          </div>

          <div className="relative w-full sm:w-72">
            <Search className="w-3.5 h-3.5 text-muted-foreground absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search conversations..."
              className="w-full pl-10 pr-3 py-2.5 rounded-xl bg-muted/60 border border-border/80 text-xs text-foreground focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>

        {/* Sessions List */}
        <div className="space-y-3">
          {filtered.length === 0 ? (
            <div className="p-16 text-center text-muted-foreground text-xs italic bg-card rounded-3xl border border-border/70">
              No conversations found matching &quot;{search}&quot;.
            </div>
          ) : (
            filtered.map((s) => (
              <div
                key={s.id}
                className="p-5 rounded-2xl bg-card border border-border/70 shadow-sm flex items-center justify-between gap-4 hover:border-blue-500/40 transition-all group"
              >
                <div className="space-y-1 flex-1 overflow-hidden">
                  <div className="flex items-center gap-2">
                    <h3 className="text-sm font-bold text-foreground truncate">{s.title}</h3>
                    {s.isPinned && (
                      <span className="p-1 rounded bg-amber-500/10 text-amber-500">
                        <Pin className="w-3 h-3" />
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground flex items-center gap-3">
                    <span>Created: {s.createdAt}</span>
                    <span>•</span>
                    <span>{s.messages.length} messages</span>
                    <span>•</span>
                    <span className="font-mono text-blue-500">{s.modelId}</span>
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => togglePinSession(s.id)}
                    className="p-2 rounded-xl text-muted-foreground hover:text-amber-500 bg-muted"
                    title="Toggle Pin"
                  >
                    <Pin className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => deleteSession(s.id)}
                    className="p-2 rounded-xl text-muted-foreground hover:text-rose-500 bg-muted"
                    title="Delete Chat"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>

                  <Link
                    href="/chat"
                    onClick={() => selectSession(s.id)}
                    className="px-3.5 py-2 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 flex items-center gap-1.5 shadow-sm"
                  >
                    <span>Open</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))
          )}
        </div>

      </div>
    </div>
  );
}
