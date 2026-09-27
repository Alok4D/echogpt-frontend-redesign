'use client';

import React from 'react';
import { useChat } from '@/context/ChatContext';
import { Folder, Trash2, Clock, Plus, ArrowRight } from 'lucide-react';

export default function RightHistorySidebar() {
  const { sessions, currentSession, selectSession, clearAllSessions, createNewChat } = useChat();

  return (
    <aside className="hidden xl:flex w-64 flex-col justify-between p-5 border-l border-card-border bg-card/60 dark:bg-[#0f1523]/60 backdrop-blur-2xl shrink-0 h-[calc(100vh-4rem)]">
      
      {/* Top History List */}
      <div className="space-y-4 flex-1 overflow-hidden flex flex-col">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-black text-foreground">History</h3>
          <span className="text-[10px] font-bold text-muted-foreground font-mono">{sessions.length} chats</span>
        </div>

        {/* Scrollable list */}
        <div className="space-y-2 overflow-y-auto flex-1 pr-1 text-xs">
          {sessions.map((session) => {
            const isSelected = currentSession?.id === session.id;
            const lastMessage = session.messages[session.messages.length - 1]?.content || 'Empty conversation';

            return (
              <div
                key={session.id}
                onClick={() => selectSession(session.id)}
                className={`group cursor-pointer p-2.5 rounded-2xl transition-all flex items-start gap-2.5 ${
                  isSelected
                    ? 'bg-card/90 shadow-sm border border-card-border text-foreground font-bold'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                }`}
              >
                <Folder className={`w-4 h-4 shrink-0 mt-0.5 ${isSelected ? 'text-primary' : 'text-muted-foreground/80'}`} />
                <div className="flex-1 overflow-hidden">
                  <h4 className="truncate text-xs font-semibold leading-snug">{session.title}</h4>
                  <p className="truncate text-[10px] text-muted-foreground/80 font-normal mt-0.5">
                    {lastMessage.slice(0, 35)}...
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom Delete History Pill Button */}
      <div className="pt-4 border-t border-border/40">
        <button
          onClick={() => {
            if (confirm('Are you sure you want to clear your chat history?')) {
              clearAllSessions();
            }
          }}
          className="w-full py-2.5 px-3 rounded-2xl bg-white/70 dark:bg-card hover:bg-rose-500/10 text-rose-500 border border-card-border shadow-sm text-xs font-bold transition-all flex items-center justify-center gap-2"
        >
          <Trash2 className="w-3.5 h-3.5" />
          <span>Delete history</span>
        </button>
      </div>

    </aside>
  );
}
