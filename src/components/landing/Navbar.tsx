'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Sparkles, Moon, Sun, Chrome, ArrowRight } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { label: 'Features', href: '#features' },
    { label: 'AI Models', href: '#models' },
    { label: 'Battle Arena', href: '#preview' },
    { label: 'Extension', href: '#extension' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-200 ${
        scrolled
          ? 'bg-background/95 backdrop-blur-md shadow-xs border-b border-border'
          : 'bg-background/80 backdrop-blur-sm border-b border-border/60'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#5B4FE1] via-[#7C3AED] to-[#D946EF] p-[2px] shadow-sm shadow-[#5B4FE1]/30 group-hover:scale-105 transition-transform duration-200">
            <div className="w-full h-full bg-background rounded-[10px] flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-[#5B4FE1] group-hover:rotate-12 transition-transform duration-300" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-lg tracking-tight bg-gradient-to-r from-foreground via-foreground/90 to-foreground/70 bg-clip-text text-transparent">
              Echo<span className="text-[#5B4FE1]">GPT</span>
            </span>
            <span className="text-[9.5px] font-semibold tracking-wider text-[#7C3AED] dark:text-[#A78BFA] uppercase -mt-1">
              Multi-AI Ecosystem
            </span>
          </div>
        </Link>

        {/* Navigation Links - Desktop */}
        <nav className="hidden md:flex items-center gap-7 text-[13.5px] font-medium text-muted-foreground">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-[#5B4FE1] dark:hover:text-[#A78BFA] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Buttons - Desktop */}
        <div className="hidden md:flex items-center gap-3">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted border border-border/60 transition-colors"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-[#5B4FE1]" />}
          </button>

          {/* Chrome Extension CTA */}
          <a
            href="https://chromewebstore.google.com/detail/echogpt-multi-ai-chat-sid/negimdcamohmoheiifgecbjgjepkcfhj"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[13px] font-semibold text-foreground px-3.5 py-2 rounded-lg hover:bg-muted border border-border/70 transition-colors inline-flex items-center gap-1.5"
          >
            <Chrome className="w-3.5 h-3.5 text-[#5B4FE1]" />
            <span>Extension</span>
          </a>

          {/* Main App Launch CTA */}
          <Link
            href="/chat"
            className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-white px-4 py-2 rounded-lg bg-[#5B4FE1] hover:bg-[#4E39E0] transition-colors shadow-sm"
          >
            <span>Launch Web App</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Mobile Menu Toggle & Theme */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className="p-2 rounded-lg text-muted-foreground hover:bg-muted border border-border/40"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-[#5B4FE1]" />}
          </button>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 rounded-lg text-foreground hover:bg-muted transition-colors border border-border/40"
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-background border-t border-border px-4 py-4 space-y-2 shadow-lg">
          {navLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="block px-3 py-2 text-[13px] font-medium text-muted-foreground hover:text-[#5B4FE1] hover:bg-muted rounded-lg transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}

          <div className="pt-2 flex flex-col gap-2">
            <a
              href="https://chromewebstore.google.com/detail/echogpt-multi-ai-chat-sid/negimdcamohmoheiifgecbjgjepkcfhj"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center text-[13px] font-semibold text-foreground border border-border py-2.5 rounded-lg hover:bg-muted transition-colors inline-flex items-center justify-center gap-2"
              onClick={() => setMenuOpen(false)}
            >
              <Chrome className="w-4 h-4 text-[#5B4FE1]" />
              <span>Add to Chrome Sidebar</span>
            </a>
            <Link
              href="/chat"
              className="w-full text-center text-[13px] font-semibold text-white py-2.5 rounded-lg bg-[#5B4FE1] hover:bg-[#4E39E0] transition-colors inline-flex items-center justify-center gap-2"
              onClick={() => setMenuOpen(false)}
            >
              <span>Launch Web App Free</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

export { Navbar };