'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useChat } from '@/context/ChatContext';
import { useTheme } from '@/context/ThemeContext';
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
  ExternalLink,
  Crown,
  Layers,
  Sliders
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
    { name: 'Tools & Connectors', href: '/connectors', icon: Layers },
    { name: 'Prompt Store', href: '/store', icon: Store },
    { name: 'AI Tasks', href: '/tasks', icon: CheckSquare },
    { name: 'Chat History', href: '/history', icon: Clock },
    { name: 'Subscriptions', href: '/subscriptions', icon: CreditCard },
    { name: 'Support', href: '/support', icon: LifeBuoy },
  ];

  const filteredSessions = sessions.filter(s =>
    s.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const pinnedSessions = filteredSessions.filter(s => s.isPinned);
  const recentSessions = filteredSessions.filter(s => !s.isPinned);

  return (
    <aside
      className={`fixed top-0 left-0 bottom-0 z-40 bg-card/95 border-r border-border/70 backdrop-blur-2xl transition-all duration-300 flex flex-col justify-between ${
        isSidebarOpen ? 'w-72' : 'w-20'
      }`}
    >
      {/* Top Header & New Chat Button */}
      <div className="p-4 space-y-4">
        {/* Brand & Collapse Toggle */}
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5 overflow-hidden">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 p-[2px] shrink-0">
              <div className="w-full h-full bg-background rounded-[10px] flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-blue-500" />
              </div>
            </div>
            {isSidebarOpen && (
              <span className="font-black text-lg tracking-tight text-foreground whitespace-nowrap">
                Echo<span className="text-blue-500">GPT</span>
              </span>
            )}
          </Link>

          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="p-1.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
            title={isSidebarOpen ? 'Collapse Sidebar' : 'Expand Sidebar'}
          >
            {isSidebarOpen ? <ChevronLeft className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
          </button>
        </div>

        {/* New Chat Primary Action Button */}
        <button
          onClick={() => createNewChat()}
          className={`w-full py-2.5 rounded-xl font-bold text-xs text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:from-blue-500 hover:to-indigo-500 shadow-md shadow-blue-600/20 hover:shadow-blue-600/35 transition-all flex items-center justify-center gap-2 ${
            !isSidebarOpen && 'px-0'
          }`}
        >
          <Plus className="w-4 h-4 shrink-0" />
          {isSidebarOpen && <span>New Conversation</span>}
        </button>

        {/* Search Chats (only when expanded) */}
        {isSidebarOpen && (
          <div className="relative">
            <Search className="w-3.5 h-3.5 text-muted-foreground absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search chat history..."
              className="w-full pl-9 pr-3 py-2 rounded-xl bg-muted/50 border border-border/60 text-xs text-foreground focus:outline-none focus:border-blue-500 transition-all placeholder:text-muted-foreground/70"
            />
          </div>
        )}
      </div>

      {/* Main Navigation & Chats Scroll Area */}
      <div className="flex-1 overflow-y-auto px-3 space-y-6 text-xs">
        
        {/* Workspace Tools Links */}
        <div className="space-y-1">
          {isSidebarOpen && (
            <span className="px-2 text-[10px] font-bold uppercase tracking-wider text-muted-foreground/70 block mb-1">
              AI Tools
            </span>
          )}

          {navigationItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-xl font-medium transition-all ${
                  isActive
                    ? 'bg-blue-600 text-white font-bold shadow-sm'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted/70'
                } ${!isSidebarOpen && 'justify-center px-0'}`}
                title={item.name}
              >
                <item.icon className="w-4 h-4 shrink-0" />
                {isSidebarOpen && (
                  <div className="flex items-center justify-between flex-1 overflow-hidden">
                    <span className="truncate">{item.name}</span>
                    {item.badge && (
                      <span className={`text-[9px] font-bold px-1.5 py-0.2 rounded ${
                        isActive ? 'bg-white/20 text-white' : 'bg-blue-500/10 text-blue-500'
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

        {/* Conversations History List (when sidebar is open) */}
        {isSidebarOpen && (
          <div className="space-y-4 pt-2 border-t border-border/40">
            
            {/* Pinned Chats */}
            {pinnedSessions.length > 0 && (
              <div className="space-y-1">
                <span className="px-2 text-[10px] font-bold uppercase tracking-wider text-amber-500 flex items-center gap-1">
                  <Pin className="w-3 h-3" />
                  <span>Pinned Conversations</span>
                </span>
                {pinnedSessions.map((session) => (
                  <div
                    key={session.id}
                    onClick={() => selectSession(session.id)}
                    className={`group cursor-pointer flex items-center justify-between px-3 py-2 rounded-xl transition-all ${
                      currentSession?.id === session.id
                        ? 'bg-muted text-foreground font-bold border border-border/60'
                        : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                    }`}
                  >
                    <span className="truncate flex-1 text-xs">{session.title}</span>
                    <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          togglePinSession(session.id);
                        }}
                        className="p-1 text-amber-500 hover:text-amber-400"
                        title="Unpin"
                      >
                        <Pin className="w-3 h-3" />
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          deleteSession(session.id);
                        }}
                        className="p-1 text-muted-foreground hover:text-rose-500"
                        title="Delete"
                      >
                        <Trash2 className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Recent Chats */}
            <div className="space-y-1">
              <span className="px-2 text-[10px] font-bold uppercase tracking-wider text-muted-foreground/70 block">
                Recent Chats
              </span>
              {recentSessions.length === 0 ? (
                <p className="px-2 py-1 text-[11px] text-muted-foreground/60 italic">No conversations found</p>
              ) : (
                recentSessions.map((session) => (
                  <div
                    key={session.id}
                    onClick={() => selectSession(session.id)}
                    className={`group cursor-pointer flex items-center justify-between px-3 py-2 rounded-xl transition-all ${
                      currentSession?.id === session.id
                        ? 'bg-muted text-foreground font-bold border border-border/60'
                        : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                    }`}
                  >
                    <span className="truncate flex-1 text-xs">{session.title}</span>
                    <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          togglePinSession(session.id);
                        }}
                        className="p-1 text-muted-foreground hover:text-amber-500"
                        title="Pin Chat"
                      >
                        <Pin className="w-3 h-3" />
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          deleteSession(session.id);
                        }}
                        className="p-1 text-muted-foreground hover:text-rose-500"
                        title="Delete"
                      >
                        <Trash2 className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>

          </div>
        )}

      </div>

      {/* Bottom Pro Membership & User Profile Footer */}
      <div className="p-3 border-t border-border/60 space-y-3 bg-muted/20">
        
        {/* Pro Membership Banner */}
        {isSidebarOpen ? (
          <div className="p-3 rounded-2xl bg-gradient-to-r from-blue-600/10 via-indigo-600/10 to-transparent border border-blue-500/20 space-y-2">
            <div className="flex items-center justify-between text-xs">
              <div className="flex items-center gap-1.5 font-bold text-blue-500">
                <Crown className="w-3.5 h-3.5" />
                <span>Pro Member</span>
              </div>
              <span className="font-mono text-[10px] text-muted-foreground">
                {proTokensRemaining}/1500 chats
              </span>
            </div>

            <div className="w-full h-1.5 rounded-full bg-muted overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"
                style={{ width: `${(proTokensRemaining / 1500) * 100}%` }}
              />
            </div>

            <button
              onClick={() => setIsUpgradeModalOpen(true)}
              className="w-full py-1.5 rounded-lg text-[11px] font-bold text-blue-600 dark:text-blue-400 bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/20 transition-all flex items-center justify-center gap-1"
            >
              <span>Manage Package</span>
            </button>
          </div>
        ) : (
          <button
            onClick={() => setIsUpgradeModalOpen(true)}
            className="w-full p-2 rounded-xl text-blue-500 bg-blue-500/10 flex items-center justify-center"
            title="Pro Membership"
          >
            <Crown className="w-4 h-4" />
          </button>
        )}

        {/* User Account Bar */}
        <div className="flex items-center justify-between pt-1">
          <div className="flex items-center gap-2.5 overflow-hidden">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-purple-500 to-blue-500 flex items-center justify-center text-white font-bold text-xs shrink-0">
              A
            </div>
            {isSidebarOpen && (
              <div className="flex flex-col truncate">
                <span className="text-xs font-bold text-foreground truncate">Candidate User</span>
                <span className="text-[10px] text-muted-foreground truncate">pro@appifydevs.com</span>
              </div>
            )}
          </div>

          {isSidebarOpen && (
            <button
              onClick={() => setIsSettingsModalOpen(true)}
              className="p-1.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted"
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
