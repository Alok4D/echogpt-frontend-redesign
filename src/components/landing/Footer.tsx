'use client';

import React from 'react';
import Link from 'next/link';
import { Sparkles, Chrome, Github, Twitter, Linkedin, Heart, Shield, Terminal } from 'lucide-react';

export default function Footer() {
  const footerLinks = {
    product: [
      { name: 'Multi-AI Chat', href: '/chat' },
      { name: 'Model Comparison Arena', href: '/compare' },
      { name: 'AI Image Studio', href: '/image-studio' },
      { name: 'AI Video Studio', href: '/video-studio' },
      { name: 'AI Resume Builder', href: '/resume' },
      { name: 'Academic SOP Generator', href: '/sop' },
    ],
    ecosystem: [
      { name: 'Chrome Extension', href: 'https://chromewebstore.google.com/detail/echogpt-multi-ai-chat-sid/negimdcamohmoheiifgecbjgjepkcfhj', external: true },
      { name: 'AI Tools & Connectors', href: '/connectors' },
      { name: 'Prompt & Bot Store', href: '/store' },
      { name: 'Automated Tasks', href: '/tasks' },
      { name: 'Conversation History', href: '/history' },
      { name: 'Pricing & Subscriptions', href: '/subscriptions' },
    ],
    models: [
      { name: 'OpenAI GPT-4o Omnimodel', href: '#models' },
      { name: 'Anthropic Claude 3.5 Sonnet', href: '#models' },
      { name: 'Google Gemini 1.5 Pro', href: '#models' },
      { name: 'DeepSeek R1 / V3 Reasoning', href: '#models' },
      { name: 'Meta Llama 3.3 70B', href: '#models' },
      { name: 'Mistral Large 2', href: '#models' },
    ],
    company: [
      { name: 'About AppifyDevs', href: 'https://appifydevs.com/', external: true },
      { name: 'Support & Helpdesk', href: '/support' },
      { name: 'Privacy Policy', href: '/privacy-policy' },
      { name: 'Terms of Use', href: '/terms-of-use' },
    ]
  };

  return (
    <footer className="border-t border-border/60 bg-card/60 backdrop-blur-xl pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 lg:gap-12 pb-12 border-b border-border/40">
          
          {/* Brand Col */}
          <div className="col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#5B4FE1] via-[#7C3AED] to-[#D946EF] p-[2px]">
                <div className="w-full h-full bg-background rounded-[10px] flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-[#5B4FE1]" />
                </div>
              </div>
              <span className="font-black text-xl tracking-tight text-foreground">
                Echo<span className="text-[#5B4FE1]">GPT</span>
              </span>
            </Link>

            <p className="text-xs text-muted-foreground leading-relaxed max-w-sm">
              The next-generation unified Multi-AI ecosystem. Streamline coding, research, writing, and browsing with GPT-4o, Claude 3.5 Sonnet, Gemini 1.5 Pro, and DeepSeek in one synchronized workspace.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://appifydevs.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl text-muted-foreground hover:text-foreground bg-muted hover:bg-muted/80 border border-border/40 transition-all text-xs font-semibold flex items-center gap-1.5"
              >
                <span>Built by AppifyDevs</span>
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-black text-foreground uppercase tracking-wider">AI Apps</h4>
            <ul className="space-y-2 text-xs text-muted-foreground">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-foreground transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Ecosystem Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-black text-foreground uppercase tracking-wider">Ecosystem</h4>
            <ul className="space-y-2 text-xs text-muted-foreground">
              {footerLinks.ecosystem.map((link) => (
                <li key={link.name}>
                  {link.external ? (
                    <a href={link.href} target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors flex items-center gap-1">
                      <span>{link.name}</span>
                    </a>
                  ) : (
                    <Link href={link.href} className="hover:text-foreground transition-colors">
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Models & Company Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-black text-foreground uppercase tracking-wider">Company</h4>
            <ul className="space-y-2 text-xs text-muted-foreground">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  {link.external ? (
                    <a href={link.href} target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
                      {link.name}
                    </a>
                  ) : (
                    <Link href={link.href} className="hover:text-foreground transition-colors">
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>© 2026 EchoGPT Ecosystem. Developed by AppifyDevs. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-foreground transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-use" className="hover:text-foreground transition-colors">Terms of Service</Link>
            <a href="https://echogpt.live" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">Original echogpt.live</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
