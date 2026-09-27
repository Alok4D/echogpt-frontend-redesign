'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Sparkles, MessageCircle } from 'lucide-react';
import { FAQS } from '@/data/landingData';

export default function FAQSection() {
  const [openId, setOpenId] = useState<string | null>('platforms');
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const filteredFaqs = activeCategory === 'All'
    ? FAQS
    : FAQS.filter(f => f.category === activeCategory);

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold text-[#5B4FE1] bg-[#5B4FE1]/10 border border-[#5B4FE1]/20">
            <HelpCircle className="w-3.5 h-3.5 text-[#5B4FE1]" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-foreground tracking-tight">
            Frequently Asked{' '}
            <span className="chatter-gradient-text">
              Questions
            </span>
          </h2>
          <p className="text-muted-foreground text-base">
            Everything you need to know about EchoGPT, multi-model intelligence, and browser extension integration.
          </p>

          {/* Category Filter */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-2">
            {['All', 'General', 'Models', 'Extension', 'Billing'].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  activeCategory === cat
                    ? 'bg-[#5B4FE1] text-white shadow-md shadow-[#5B4FE1]/30'
                    : 'bg-muted/70 text-muted-foreground hover:text-foreground hover:bg-muted'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3.5">
          {filteredFaqs.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                className="rounded-2xl border border-border/70 bg-card/80 backdrop-blur-xl overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 hover:bg-muted/30 transition-colors"
                >
                  <span className="text-sm sm:text-base font-bold text-foreground">
                    {faq.question}
                  </span>
                  <div className={`p-1.5 rounded-full bg-muted text-muted-foreground transition-transform duration-200 shrink-0 ${isOpen ? 'rotate-180 bg-[#5B4FE1] text-white' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-xs sm:text-sm text-muted-foreground leading-relaxed border-t border-border/40 pt-4 animate-fadeIn">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions card */}
        <div className="mt-12 p-6 rounded-3xl bg-gradient-to-r from-[#5B4FE1]/10 via-[#7C3AED]/10 to-transparent border border-border/60 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-2xl bg-[#5B4FE1] flex items-center justify-center text-white shrink-0">
              <MessageCircle className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-foreground">Still have questions or need help?</h4>
              <p className="text-xs text-muted-foreground">Our support team is active 24/7 to answer your inquiries.</p>
            </div>
          </div>
          <a
            href="mailto:support@appifydevs.com"
            className="px-4 py-2 rounded-xl text-xs font-bold text-white chatter-btn-primary shadow-md transition-all shrink-0"
          >
            Contact Support
          </a>
        </div>

      </div>
    </section>
  );
}
