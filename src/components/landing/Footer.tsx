"use client";

import React from "react";
import Link from "next/link";
import { Sparkles } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#1A1A2E] text-white pt-20 pb-10 border-t border-[#2A2A48]">
      <div className="max-w-7xl mx-auto px-4 md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-12">
          
          {/* Brand & Description (5 Cols) */}
          <div className="md:col-span-5 flex flex-col items-start">
            <Link href="/" className="flex items-center gap-3 mb-5 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#5B4FE1] via-[#7C3AED] to-[#D946EF] p-[2px] shadow-md group-hover:scale-105 transition-transform flex items-center justify-center">
                <div className="w-full h-full bg-[#1A1A2E] rounded-[10px] flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-[#8B5CF6]" />
                </div>
              </div>
              <span className="font-extrabold text-2xl tracking-tight text-white">
                Echo<span className="text-[#8B5CF6]">GPT</span>
              </span>
            </Link>
            
            <p className="text-[14.5px] text-[#9CA3AF] leading-[1.7] max-w-sm mb-8">
              The modern unified Multi-AI ecosystem built for high-performance productivity and research. Connect instantly to GPT-4o, Claude 3.5, Gemini 1.5, and DeepSeek.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3.5">
              <a
                href="https://x.com/AlokRoy1880109"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/15 hover:text-[#8B5CF6] flex items-center justify-center text-slate-300 transition-all cursor-pointer"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
                </svg>
              </a>
              <a
                href="https://github.com/Alok4D"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/15 hover:text-[#8B5CF6] flex items-center justify-center text-slate-300 transition-all cursor-pointer"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4"/>
                  <path d="M9 18c-4.5 1.5-5-2.5-7-3"/>
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/alok-roy-likedin"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/15 hover:text-[#8B5CF6] flex items-center justify-center text-slate-300 transition-all cursor-pointer"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect width="4" height="12" x="2" y="9"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
              <a
                href="https://www.facebook.com/alok.roy.738161"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/15 hover:text-[#8B5CF6] flex items-center justify-center text-slate-300 transition-all cursor-pointer"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Spacer */}
          <div className="hidden md:block md:col-span-1"></div>

          {/* Links Columns Container (6 Cols) */}
          <div className="md:col-span-6 flex justify-between flex-wrap gap-8 md:flex-nowrap">
            
            {/* Column 1: Product */}
            <div className="flex flex-col">
              <h4 className="text-[15px] font-bold text-white mb-5 uppercase tracking-wider text-xs">Product</h4>
              <div className="flex flex-col gap-3 text-[14px]">
                <Link href="#features" className="text-[#9CA3AF] hover:text-white transition-colors">Features</Link>
                <Link href="#models" className="text-[#9CA3AF] hover:text-white transition-colors">AI Models</Link>
                <Link href="#preview" className="text-[#9CA3AF] hover:text-white transition-colors">Model Arena</Link>
                <Link href="/chat" className="text-[#8B5CF6] hover:text-[#A78BFA] font-medium transition-colors">Start Chatting →</Link>
              </div>
            </div>

            {/* Column 2: Resources */}
            <div className="flex flex-col">
              <h4 className="text-[15px] font-bold text-white mb-5 uppercase tracking-wider text-xs">Ecosystem</h4>
              <div className="flex flex-col gap-3 text-[14px]">
                <a
                  href="https://chromewebstore.google.com/detail/echogpt-multi-ai-chat-sid/negimdcamohmoheiifgecbjgjepkcfhj"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#9CA3AF] hover:text-white transition-colors"
                >
                  Chrome Extension
                </a>
                <Link href="/compare" className="text-[#9CA3AF] hover:text-white transition-colors">Comparison Mode</Link>
                <Link href="/image-studio" className="text-[#9CA3AF] hover:text-white transition-colors">Image Studio</Link>
                <Link href="/sop" className="text-[#9CA3AF] hover:text-white transition-colors">SOP & Resume</Link>
              </div>
            </div>

            {/* Column 3: Company */}
            <div className="flex flex-col">
              <h4 className="text-[15px] font-bold text-white mb-5 uppercase tracking-wider text-xs">Company</h4>
              <div className="flex flex-col gap-3 text-[14px]">
                <a href="https://appifydevs.com/" target="_blank" rel="noopener noreferrer" className="text-[#9CA3AF] hover:text-white transition-colors">About AppifyDevs</a>
                <Link href="/privacy-policy" className="text-[#9CA3AF] hover:text-white transition-colors">Privacy Policy</Link>
                <Link href="/terms-of-use" className="text-[#9CA3AF] hover:text-white transition-colors">Terms of Service</Link>
                <a href="mailto:support@appifydevs.com" className="text-[#9CA3AF] hover:text-white transition-colors">Contact Us</a>
              </div>
            </div>

          </div>
          
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#9CA3AF] text-[13.5px]">
            © {new Date().getFullYear()} EchoGPT. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-[13.5px]">
            <Link href="/privacy-policy" className="text-[#9CA3AF] hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-use" className="text-[#9CA3AF] hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;