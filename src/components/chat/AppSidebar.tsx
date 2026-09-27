'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useChat } from '@/context/ChatContext';
import { 
  Sparkles, 
  Plus, 
  MessageSquare, 
  SplitSquareVertical, 
  Image as ImageIcon, 
  Video, 
  FileText, 
  BookOpen, 
  Store, 
  CheckSquare, 
  Clock, 
  CreditCard, 
  LifeBuoy, 
  Settings, 
  Pin, 
  Trash2, 
  Search, 
  ChevronLeft, 
  ChevronRight,
  Crown,
  Layers,
  ArrowUpRight
} from 'lucide-react';

export default function AppSidebar() {
  const pathname = usePathname();
  const { 
    sessions, 
    currentSession, 
    createNewChat, 
    selectSession, 
    deleteSession, 
    togglePinSession,
    searchQuery,
    setSearchQuery,
    isSidebarOpen, 
    setIsSidebarOpen, 
    setIsUpgradeModalOpen, 
    setIsSettingsModalOpen, 
    proTokensRemaining
  } = useChat();

  const navigationItems = [
    { name: 'Multi-AI Chat', href: '/chat', icon: MessageSquare, badge: 'Main' },
    { name: 'Model Arena', href: '/compare', icon: SplitSquareVertical, badge: 'Battle' },
    { name: 'Image Studio', href: '/image-studio', icon: ImageIcon },
    { name: 'Video Studio', href: '/video-studio', icon: Video },
    { name: 'Resume Builder', href: '/resume', icon: FileText },
    { name: 'SOP Generator', href: '/sop', icon: BookOpen },
    { name: 'Data Connectors', href: '/connectors', icon: Layers },
    { name: 'Prompt Store', href: '/store', icon: Store },
    { name: 'AI Tasks', href: '/tasks', icon: CheckSquare },
    { name: 'Chat History', href: '/history', icon: Clock },
    { name: 'Subscriptions', href: '/subscriptions', icon: CreditCard },
    { name: 'Support & Help', href: '/support', icon: LifeBuoy },
  ];

  const filteredSessions = sessions.filter(s =>
    s.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const pinnedSessions = filteredSessions.filter(s => s.isPinned);
  const recentSessions = filteredSessions.filter(s => !s.isPinned);

  return (
    <aside
      className={`fixed top-0 left-0 bottom-0 z-40 bg-card/85 dark:bg-[#0f1523]/85 border-r border-card-border backdrop-blur-2xl transition-all duration-300 flex flex-col justify-between ${
        isSidebarOpen ? 'w-72' : 'w-20'
      }`}
    >
      {/* Top Header & New Chat Button */}
      <div className="p-4 space-y-4">
        {/* Brand */}
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5 overflow-hidden">
            <div className="w-9 h-9 rounded-2xl bg-gradient-to-tr from-[#0ea5e9] to-[#2563eb] p-[2px] shrink-0 shadow-sm">
              <div className="w-full h-full bg-background rounded-[14px] flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-primary" />
              </div>
            </div>
            {isSidebarOpen && (
              <span className="font-extrabold text-lg tracking-tight text-foreground whitespace-nowrap">
                Echo<span className="text-primary">GPT</span>
              </span>
            )}
          </Link>

          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="p-1.5 rounded-xl text-muted-foreground hover:text-foreground hover:bg-muted/60 transition-colors"
            title={isSidebarOpen ? 'Collapse' : 'Expand'}
          >
            {isSidebarOpen ? <ChevronLeft className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
          </button>
        </div>

        {/* New Chat Primary Button */}
        <button
          onClick={() => createNewChat()}
          className={`w-full py-2.5 rounded-2xl font-bold text-xs text-white bg-gradient-to-r from-[#0ea5e9] via-[#0284c7] to-[#2563eb] hover:from-[#0284c7] hover:to-[#1d4ed8] shadow-glow-sky transition-all flex items-center justify-center gap-2 ${
            !isSidebarOpen && 'px-0'
          }`}
        >
          <Plus className="w-4 h-4 shrink-0" />
          {isSidebarOpen && <span>New Conversation</span>}
        </button>

        {/* Search */}
        {isSidebarOpen && (
          <div className="relative">
            <Search className="w-3.5 h-3.5 text-muted-foreground absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search chat history..."
              className="w-full pl-9 pr-3 py-2 rounded-xl glass-pill text-xs text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
            />
          </div>
        )}
      </div>

      {/* Navigation & Chat List Area */}
      <div className="flex-1 overflow-y-auto px-3 space-y-5 text-xs">
        
        {/* Core AI Tools */}
        <div className="space-y-1">
          {isSidebarOpen && (
            <span className="px-2 text-[10px] font-bold uppercase tracking-wider text-muted-foreground/70 block mb-1">
              AI Workspace
            </span>
          )}

          {navigationItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-2xl font-medium transition-all ${
                  isActive
                    ? 'bg-primary/15 text-primary font-bold shadow-sm'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                } ${!isSidebarOpen && 'justify-center px-0'}`}
                title={item.name}
              >
                <item.icon className="w-4 h-4 shrink-0" />
                {isSidebarOpen && (
                  <div className="flex items-center justify-between flex-1 overflow-hidden">
                    <span className="truncate">{item.name}</span>
                    {item.badge && (
                      <span className={`text-[9px] font-bold px-1.5 py-0.2 rounded-full ${
                        isActive ? 'bg-primary text-white' : 'bg-primary/10 text-primary'
                      }`}>
                        {item.badge}
                      </span>
                    )}
                  </div>
                )}
              </Link>
            );
          })}
        </div>

        {/* Chat History List */}
        {isSidebarOpen && (
          <div className="space-y-3 pt-2 border-t border-card-border">
            
            {pinnedSessions.length > 0 && (
              <div className="space-y-1">
                <span className="px-2 text-[10px] font-bold uppercase tracking-wider text-amber-500 flex items-center gap-1">
                  <Pin className="w-3 h-3" />
                  <span>Pinned Chats</span>
                </span>
                {pinnedSessions.map((s) => (
                  <div
                    key={s.id}
                    onClick={() => selectSession(s.id)}
                    className={`group cursor-pointer flex items-center justify-between px-3 py-2 rounded-xl transition-all ${
                      currentSession?.id === s.id
                        ? 'glass-pill font-bold text-foreground border-primary/30'
                        : 'text-muted-foreground hover:text-foreground hover:bg-muted/40'
                    }`}
                  >
                    <span className="truncate flex-1 text-xs">{s.title}</span>
                    <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button onClick={(e) => { e.stopPropagation(); togglePinSession(s.id); }} className="p-1 text-amber-500">
                        <Pin className="w-3 h-3" />
                      </button>
                      <button onClick={(e) => { e.stopPropagation(); deleteSession(s.id); }} className="p-1 text-rose-500">
                        <Trash2 className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            <div className="space-y-1">
              <span className="px-2 text-[10px] font-bold uppercase tracking-wider text-muted-foreground/70 block">
                Recent Chats
              </span>
              {recentSessions.map((s) => (
                <div
                  key={s.id}
                  onClick={() => selectSession(s.id)}
                  className={`group cursor-pointer flex items-center justify-between px-3 py-2 rounded-xl transition-all ${
                    currentSession?.id === s.id
                      ? 'glass-pill font-bold text-foreground border-primary/30'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted/40'
                  }`}
                >
                  <span className="truncate flex-1 text-xs">{s.title}</span>
                  <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button onClick={(e) => { e.stopPropagation(); togglePinSession(s.id); }} className="p-1 text-muted-foreground hover:text-amber-500">
                      <Pin className="w-3 h-3" />
                    </button>
                    <button onClick={(e) => { e.stopPropagation(); deleteSession(s.id); }} className="p-1 text-muted-foreground hover:text-rose-500">
                      <Trash2 className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

          </div>
        )}

      </div>

      {/* Bottom Pro Membership & Settings Footer */}
      <div className="p-3.5 border-t border-card-border space-y-3 bg-white/20 dark:bg-card/20">
        {isSidebarOpen ? (
          <div className="relative rounded-3xl p-4 bg-gradient-to-br from-[#0ea5e9] via-[#0284c7] to-[#2563eb] text-white shadow-xl shadow-cyan-500/20 space-y-2.5">
            <div className="flex items-center justify-between text-xs">
              <span className="font-black text-sm">Premium Plan</span>
              <span className="font-mono text-[10px] bg-white/20 px-2 py-0.5 rounded-full">{proTokensRemaining} chats</span>
            </div>
            <p className="text-[11px] text-blue-100/90 leading-tight">Pick the plan and unlock all features</p>
            <button
              onClick={() => setIsUpgradeModalOpen(true)}
              className="w-full py-2 rounded-2xl bg-white/20 hover:bg-white/30 backdrop-blur-md text-white font-bold text-xs transition-all flex items-center justify-center gap-1.5 border border-white/25"
            >
              <span>Upgrade now</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        ) : (
          <button
            onClick={() => setIsUpgradeModalOpen(true)}
            className="w-full p-2.5 rounded-2xl bg-gradient-to-br from-[#0ea5e9] to-[#2563eb] text-white flex items-center justify-center"
            title="Premium Plan"
          >
            <Crown className="w-4 h-4" />
          </button>
        )}

        <div className="flex items-center justify-between pt-1">
          <div className="flex items-center gap-2 overflow-hidden">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-purple-500 to-indigo-600 flex items-center justify-center text-white font-bold text-xs shrink-0">
              A
            </div>
            {isSidebarOpen && (
              <div className="flex flex-col truncate text-xs">
                <span className="font-bold text-foreground truncate">Candidate User</span>
                <span className="text-[10px] text-muted-foreground truncate">pro@appifydevs.com</span>
              </div>
            )}
          </div>

          {isSidebarOpen && (
            <button
              onClick={() => setIsSettingsModalOpen(true)}
              className="p-1.5 rounded-lg text-muted-foreground hover:text-foreground"
              title="Settings"
            >
              <Settings className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </aside>
  );
}
