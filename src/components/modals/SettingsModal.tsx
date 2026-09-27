'use client';

import React, { useState } from 'react';
import { useChat } from '@/context/ChatContext';
import { useTheme } from '@/context/ThemeContext';
import { X, Moon, Sun, Key, Shield, User, Sliders, Trash2, Check } from 'lucide-react';

export default function SettingsModal() {
  const { isSettingsModalOpen, setIsSettingsModalOpen, clearAllSessions } = useChat();
  const { theme, toggleTheme } = useTheme();
  const [customInstructions, setCustomInstructions] = useState('Always provide concise answers with TypeScript types and best practices.');
  const [apiKey, setApiKey] = useState('');
  const [savedSuccess, setSavedSuccess] = useState(false);

  if (!isSettingsModalOpen) return null;

  const handleSave = () => {
    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      setIsSettingsModalOpen(false);
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-xl rounded-3xl bg-card border border-border/80 p-6 sm:p-8 shadow-2xl overflow-hidden space-y-6">
        
        {/* Close button */}
        <button
          onClick={() => setIsSettingsModalOpen(false)}
          className="absolute top-5 right-5 p-2 rounded-full text-muted-foreground hover:text-foreground bg-muted hover:bg-muted/80"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Header */}
        <div className="space-y-1">
          <h2 className="text-xl font-black text-foreground flex items-center gap-2">
            <Sliders className="w-5 h-5 text-blue-500" />
            <span>EchoGPT Settings & Preferences</span>
          </h2>
          <p className="text-xs text-muted-foreground">
            Configure appearance, custom AI instructions, and data privacy.
          </p>
        </div>

        <div className="space-y-5 divide-y divide-border/40 text-xs">
          
          {/* Appearance Section */}
          <div className="pt-2 flex items-center justify-between">
            <div>
              <span className="font-bold text-foreground block">Theme Mode</span>
              <span className="text-muted-foreground">Toggle between sleek Dark and crisp Light mode.</span>
            </div>
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-xl border border-border/60 bg-muted hover:bg-muted/80 flex items-center gap-2 text-foreground font-bold"
            >
              {theme === 'dark' ? <Moon className="w-4 h-4 text-blue-400" /> : <Sun className="w-4 h-4 text-amber-500" />}
              <span>{theme === 'dark' ? 'Dark' : 'Light'}</span>
            </button>
          </div>

          {/* Custom System Instructions */}
          <div className="pt-4 space-y-2">
            <label className="font-bold text-foreground block">Custom AI Instructions</label>
            <p className="text-muted-foreground">What would you like the AI models to know about you to provide better responses?</p>
            <textarea
              rows={3}
              value={customInstructions}
              onChange={(e) => setCustomInstructions(e.target.value)}
              className="w-full p-3 rounded-xl bg-muted/60 border border-border/70 text-xs text-foreground focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* Optional Bring Your Own API Key */}
          <div className="pt-4 space-y-2">
            <label className="font-bold text-foreground flex items-center gap-1.5">
              <Key className="w-3.5 h-3.5 text-blue-500" />
              <span>Custom API Key (Optional)</span>
            </label>
            <p className="text-muted-foreground">Bring your own OpenAI, Anthropic, or OpenRouter keys for zero markup.</p>
            <input
              type="password"
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              placeholder="sk-..."
              className="w-full p-2.5 rounded-xl bg-muted/60 border border-border/70 text-xs text-foreground focus:outline-none focus:border-blue-500 font-mono"
            />
          </div>

          {/* Danger Zone: Clear History */}
          <div className="pt-4 flex items-center justify-between">
            <div>
              <span className="font-bold text-rose-500 block">Clear Conversation Data</span>
              <span className="text-muted-foreground">Permanently delete all stored chats from browser storage.</span>
            </div>
            <button
              onClick={() => {
                if (confirm('Are you sure you want to clear all chat sessions?')) {
                  clearAllSessions();
                  setIsSettingsModalOpen(false);
                }
              }}
              className="px-3 py-2 rounded-xl text-xs font-bold text-rose-500 bg-rose-500/10 hover:bg-rose-500 hover:text-white transition-all flex items-center gap-1.5"
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span>Clear Chats</span>
            </button>
          </div>

        </div>

        {/* Modal Bottom Save */}
        <div className="pt-4 flex items-center justify-end gap-3 border-t border-border/40">
          <button
            onClick={() => setIsSettingsModalOpen(false)}
            className="px-4 py-2.5 rounded-xl text-xs font-bold text-muted-foreground hover:text-foreground"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="px-6 py-2.5 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 shadow-md flex items-center gap-1.5"
          >
            {savedSuccess ? (
              <>
                <Check className="w-3.5 h-3.5" />
                <span>Saved!</span>
              </>
            ) : (
              <span>Save Preferences</span>
            )}
          </button>
        </div>

      </div>
    </div>
  );
}
