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
  Menu,
  Zap,
  Info
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
  const [secondaryDropdownOpen, setSecondaryDropdownOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 h-16 bg-background/80 backdrop-blur-xl border-b border-border/70 px-4 sm:px-6 flex items-center justify-between gap-4">
      
      {/* Left: Sidebar Toggle + Active Model Dropdown */}
      <div className="flex items-center gap-3">
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="p-2 rounded-xl text-muted-foreground hover:text-foreground hover:bg-muted border border-border/40"
          title="Toggle Sidebar"
        >
          <Menu className="w-4 h-4" />
        </button>

        {/* Primary Model Dropdown */}
        <div className="relative">
          <button
            onClick={() => {
              setModelDropdownOpen(!modelDropdownOpen);
              setSecondaryDropdownOpen(false);
            }}
            className="flex items-center gap-2.5 px-3.5 py-1.5 rounded-xl bg-muted/60 hover:bg-muted border border-border/70 transition-all text-xs font-bold text-foreground"
          >
            <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: activeModel.color }} />
            <span className="max-w-[140px] truncate">{activeModel.name}</span>
            <ChevronDown className="w-3.5 h-3.5 text-muted-foreground" />
          </button>

          {modelDropdownOpen && (
            <div className="absolute top-full left-0 mt-2 w-72 rounded-2xl bg-card border border-border/80 shadow-2xl p-2 z-50 animate-fadeIn divide-y divide-border/30">
              <div className="p-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground block mb-2">
                  Select Primary Engine
                </span>
                <div className="space-y-1">
                  {AI_MODELS.map((model) => (
                    <button
                      key={model.id}
                      onClick={() => {
                        setActiveModel(model);
                        setModelDropdownOpen(false);
                      }}
                      className={`w-full text-left p-2 rounded-xl text-xs flex items-center justify-between transition-all ${
                        activeModel.id === model.id
                          ? 'bg-blue-600 text-white font-bold'
                          : 'text-foreground hover:bg-muted'
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
            </div>
          )}
        </div>

        {/* Secondary Model Dropdown (when dual mode is on) */}
        {isDualMode && (
          <div className="relative hidden sm:block">
            <button
              onClick={() => {
                setSecondaryDropdownOpen(!secondaryDropdownOpen);
                setModelDropdownOpen(false);
              }}
              className="flex items-center gap-2.5 px-3.5 py-1.5 rounded-xl bg-muted/60 hover:bg-muted border border-border/70 transition-all text-xs font-bold text-foreground"
            >
              <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: secondaryModel.color }} />
              <span className="max-w-[140px] truncate">{secondaryModel.name}</span>
              <ChevronDown className="w-3.5 h-3.5 text-muted-foreground" />
            </button>

            {secondaryDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-72 rounded-2xl bg-card border border-border/80 shadow-2xl p-2 z-50 animate-fadeIn">
                <div className="p-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground block mb-2">
                    Select Comparison Engine
                  </span>
                  <div className="space-y-1">
                    {AI_MODELS.map((model) => (
                      <button
                        key={model.id}
                        onClick={() => {
                          setSecondaryModel(model);
                          setSecondaryDropdownOpen(false);
                        }}
                        className={`w-full text-left p-2 rounded-xl text-xs flex items-center justify-between transition-all ${
                          secondaryModel.id === model.id
                            ? 'bg-blue-600 text-white font-bold'
                            : 'text-foreground hover:bg-muted'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full" style={{ backgroundColor: model.color }} />
                          <span>{model.name}</span>
                        </div>
                        {secondaryModel.id === model.id && <Check className="w-3.5 h-3.5" />}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Dual Mode Toggle Button */}
        <button
          onClick={() => setIsDualMode(!isDualMode)}
          className={`hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold border transition-all ${
            isDualMode
              ? 'bg-amber-500/10 text-amber-500 border-amber-500/30'
              : 'text-muted-foreground hover:text-foreground bg-muted/40 border-border/60 hover:bg-muted'
          }`}
          title="Compare 2 AI models side by side"
        >
          <SplitSquareVertical className="w-3.5 h-3.5" />
          <span>{isDualMode ? 'Dual Compare Active' : 'Dual Mode'}</span>
        </button>
      </div>

      {/* Right: Actions, Prompt Library, Tokens, Theme */}
      <div className="flex items-center gap-2 sm:gap-3">
        
        {/* Prompt Library */}
        <button
          onClick={() => setIsPromptLibraryOpen(true)}
          className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold text-foreground bg-muted/60 hover:bg-muted border border-border/60 transition-all"
        >
          <BookOpen className="w-3.5 h-3.5 text-blue-500" />
          <span>Prompt Library</span>
        </button>

        {/* Pro Tokens Badge */}
        <button
          onClick={() => setIsUpgradeModalOpen(true)}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold text-blue-600 dark:text-blue-400 bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/25 transition-all"
        >
          <Crown className="w-3.5 h-3.5 text-amber-500" />
          <span className="font-mono">{proTokensRemaining}</span>
          <span className="hidden sm:inline">chats</span>
        </button>

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          aria-label="Toggle Theme"
          className="p-2 rounded-xl text-muted-foreground hover:text-foreground bg-muted/60 hover:bg-muted border border-border/50 transition-all"
        >
          {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-indigo-600" />}
        </button>

        {/* Settings */}
        <button
          onClick={() => setIsSettingsModalOpen(true)}
          className="p-2 rounded-xl text-muted-foreground hover:text-foreground bg-muted/60 hover:bg-muted border border-border/50 transition-all"
          title="Settings"
        >
          <Sliders className="w-4 h-4" />
        </button>
      </div>

    </header>
  );
}
