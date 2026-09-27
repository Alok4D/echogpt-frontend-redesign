'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useChat } from '@/context/ChatContext';
import { useTheme } from '@/context/ThemeContext';
import { AI_MODELS } from '@/data/landingData';
import { 
  Sparkles, 
  Moon, 
  Sun, 
  ChevronDown, 
  SplitSquareVertical, 
  Sliders, 
  BookOpen, 
  Share2, 
  Crown, 
  Check, 
  Menu
} from 'lucide-react';

export default function AppHeader() {
  const { 
    activeModel, 
    setActiveModel, 
    secondaryModel, 
    setSecondaryModel, 
    isDualMode, 
    setIsDualMode, 
    isSidebarOpen, 
    setIsSidebarOpen,
    setIsPromptLibraryOpen,
    setIsSettingsModalOpen,
    setIsUpgradeModalOpen,
    proTokensRemaining
  } = useChat();

  const { theme, toggleTheme } = useTheme();
  const [modelDropdownOpen, setModelDropdownOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 h-16 bg-card/60 dark:bg-[#0f1523]/60 backdrop-blur-xl border-b border-card-border px-4 sm:px-6 flex items-center justify-between gap-4">
      
      {/* Left: Sidebar Toggle + Active Model Dropdown */}
      <div className="flex items-center gap-3">
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="p-2 rounded-2xl text-muted-foreground hover:text-foreground hover:bg-white/60 dark:hover:bg-card border border-card-border shadow-sm transition-all"
          title="Toggle Sidebar"
        >
          <Menu className="w-4 h-4" />
        </button>

        {/* Primary Model Dropdown */}
        <div className="relative">
          <button
            onClick={() => setModelDropdownOpen(!modelDropdownOpen)}
            className="flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/70 dark:bg-card/70 hover:bg-white dark:hover:bg-card border border-card-border shadow-sm transition-all text-xs font-bold text-foreground"
          >
            <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: activeModel.color }} />
            <span className="max-w-[140px] truncate">{activeModel.name}</span>
            <ChevronDown className="w-3.5 h-3.5 text-muted-foreground" />
          </button>

          {modelDropdownOpen && (
            <div className="absolute top-full left-0 mt-2 w-72 rounded-3xl bg-card border border-card-border shadow-2xl p-2 z-50 animate-fadeIn divide-y divide-border/30">
              <div className="p-2 space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground block mb-2 px-1">
                  Select AI Engine
                </span>
                {AI_MODELS.map((model) => (
                  <button
                    key={model.id}
                    onClick={() => {
                      setActiveModel(model);
                      setModelDropdownOpen(false);
                    }}
                    className={`w-full text-left p-2.5 rounded-2xl text-xs flex items-center justify-between transition-all ${
                      activeModel.id === model.id
                        ? 'bg-primary text-white font-bold shadow-sm'
                        : 'text-foreground hover:bg-muted/70'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full" style={{ backgroundColor: model.color }} />
                      <span>{model.name}</span>
                    </div>
                    {activeModel.id === model.id && <Check className="w-3.5 h-3.5" />}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Dual Mode Toggle */}
        <button
          onClick={() => setIsDualMode(!isDualMode)}
          className={`hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold border transition-all ${
            isDualMode
              ? 'bg-primary/15 text-primary border-primary/30 shadow-sm'
              : 'text-muted-foreground hover:text-foreground bg-white/60 dark:bg-card/60 border-card-border'
          }`}
        >
          <SplitSquareVertical className="w-3.5 h-3.5" />
          <span>{isDualMode ? 'Dual Compare Active' : 'Dual Mode'}</span>
        </button>
      </div>

      {/* Right Actions */}
      <div className="flex items-center gap-2.5">
        <button
          onClick={() => setIsUpgradeModalOpen(true)}
          className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold text-primary bg-primary/10 hover:bg-primary/20 border border-primary/25 shadow-sm transition-all"
        >
          <Crown className="w-3.5 h-3.5 text-amber-500" />
          <span className="font-mono">{proTokensRemaining}</span>
          <span className="hidden sm:inline">chats</span>
        </button>

        <button
          onClick={toggleTheme}
          aria-label="Toggle Theme"
          className="p-2 rounded-full text-muted-foreground hover:text-foreground bg-white/60 dark:bg-card/60 hover:bg-white dark:hover:bg-card border border-card-border shadow-sm transition-all"
        >
          {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-primary" />}
        </button>

        <button
          onClick={() => setIsSettingsModalOpen(true)}
          className="p-2 rounded-full text-muted-foreground hover:text-foreground bg-white/60 dark:bg-card/60 hover:bg-white dark:hover:bg-card border border-card-border shadow-sm transition-all"
          title="Settings"
        >
          <Sliders className="w-4 h-4" />
        </button>
      </div>

    </header>
  );
}
