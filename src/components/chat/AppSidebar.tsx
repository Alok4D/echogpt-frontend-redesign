'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useChat } from '@/context/ChatContext';
import { 
  Sparkles, 
  Plus, 
  Compass, 
  LayoutGrid, 
  Users, 
  Settings, 
  LogOut, 
  ArrowUpRight,
  MessageSquare,
  SplitSquareVertical,
  Image as ImageIcon,
  BookOpen,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

export default function AppSidebar() {
  const pathname = usePathname();
  const { 
    createNewChat, 
    isSidebarOpen, 
    setIsSidebarOpen, 
    setIsUpgradeModalOpen, 
    setIsSettingsModalOpen, 
    setIsPromptLibraryOpen 
  } = useChat();

  const mainNav = [
    { name: 'New chat', action: () => createNewChat(), icon: Plus, isButton: true },
    { name: 'Chat App', href: '/chat', icon: MessageSquare },
    { name: 'Model Arena', href: '/compare', icon: SplitSquareVertical },
    { name: 'Explore', href: '/store', icon: Compass },
    { name: 'Templates', action: () => setIsPromptLibraryOpen(true), icon: LayoutGrid, isModal: true },
    { name: 'Image Studio', href: '/image-studio', icon: ImageIcon },
    { name: 'SOP & Career', href: '/sop', icon: BookOpen },
    { name: 'Settings', action: () => setIsSettingsModalOpen(true), icon: Settings, isModal: true },
  ];

  return (
    <aside
      className={`fixed top-0 left-0 bottom-0 z-40 bg-card/85 dark:bg-[#0f1523]/85 border-r border-card-border backdrop-blur-2xl transition-all duration-300 flex flex-col justify-between p-5 ${
        isSidebarOpen ? 'w-64' : 'w-20'
      }`}
    >
      {/* Top Section */}
      <div className="space-y-6">
        
        {/* Brand */}
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-full bg-foreground text-background flex items-center justify-center font-black text-sm shadow-md group-hover:scale-105 transition-transform">
              ✕
            </div>
            {isSidebarOpen && (
              <span className="font-extrabold text-base tracking-tight text-foreground">
                Echo<span className="text-primary font-bold">GPT</span>
              </span>
            )}
          </Link>

          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="p-1.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/60 transition-colors"
            title={isSidebarOpen ? 'Collapse' : 'Expand'}
          >
            {isSidebarOpen ? <ChevronLeft className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
          </button>
        </div>

        {/* Navigation Menu */}
        <nav className="space-y-1.5 text-xs font-semibold">
          {mainNav.map((item) => {
            if (item.isButton) {
              return (
                <button
                  key={item.name}
                  onClick={item.action}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-2xl text-primary hover:bg-primary/10 transition-all font-bold ${
                    !isSidebarOpen && 'justify-center px-0'
                  }`}
                >
                  <Plus className="w-4 h-4" />
                  {isSidebarOpen && <span>{item.name}</span>}
                </button>
              );
            }

            if (item.isModal) {
              return (
                <button
                  key={item.name}
                  onClick={item.action}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-2xl text-muted-foreground hover:text-foreground hover:bg-muted/60 transition-all font-medium ${
                    !isSidebarOpen && 'justify-center px-0'
                  }`}
                >
                  <item.icon className="w-4 h-4" />
                  {isSidebarOpen && <span>{item.name}</span>}
                </button>
              );
            }

            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href!}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-2xl font-medium transition-all ${
                  isActive
                    ? 'bg-primary/15 text-primary font-bold'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted/60'
                } ${!isSidebarOpen && 'justify-center px-0'}`}
              >
                <item.icon className="w-4 h-4" />
                {isSidebarOpen && <span>{item.name}</span>}
              </Link>
            );
          })}
        </nav>

      </div>

      {/* Bottom Section: Premium Card & Logout */}
      <div className="space-y-4">
        
        {/* Exact "Premium Plan" gradient card from user screenshot */}
        {isSidebarOpen ? (
          <div className="relative rounded-3xl p-5 bg-gradient-to-br from-[#0ea5e9] via-[#0284c7] to-[#2563eb] text-white shadow-xl shadow-cyan-500/20 overflow-hidden space-y-3">
            <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full blur-xl pointer-events-none -mr-6 -mt-6" />

            <div className="space-y-1">
              <h4 className="text-sm font-black tracking-tight">Premium Plan</h4>
              <p className="text-[11px] text-blue-100/90 leading-tight">
                Pick the plan and unlock all features
              </p>
            </div>

            <button
              onClick={() => setIsUpgradeModalOpen(true)}
              className="w-full py-2.5 px-3 rounded-2xl bg-white/20 hover:bg-white/30 backdrop-blur-md text-white font-bold text-xs transition-all flex items-center justify-center gap-1.5 shadow-sm border border-white/25"
            >
              <span>Upgrade now</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        ) : (
          <button
            onClick={() => setIsUpgradeModalOpen(true)}
            className="w-full p-3 rounded-2xl bg-gradient-to-br from-[#0ea5e9] to-[#2563eb] text-white flex items-center justify-center shadow-md"
            title="Upgrade to Premium Plan"
          >
            <ArrowUpRight className="w-4 h-4" />
          </button>
        )}

        {/* Log out button */}
        {isSidebarOpen ? (
          <Link
            href="/"
            className="flex items-center gap-2.5 px-3 py-2 text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors"
          >
            <LogOut className="w-4 h-4" />
            <span>Log out</span>
          </Link>
        ) : (
          <Link
            href="/"
            className="flex justify-center p-2 text-muted-foreground hover:text-foreground"
            title="Log out"
          >
            <LogOut className="w-4 h-4" />
          </Link>
        )}

      </div>
    </aside>
  );
}
