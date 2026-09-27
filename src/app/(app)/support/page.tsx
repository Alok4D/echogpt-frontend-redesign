'use client';

import React, { useState } from 'react';
import { LifeBuoy, MessageSquare, Send, CheckCircle2, ShieldCheck, Mail, FileText, Bug } from 'lucide-react';

export default function SupportPage() {
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [category, setCategory] = useState('Technical Issue');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setSubject('');
      setMessage('');
    }, 3000);
  };

  return (
    <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">
      <div className="max-w-4xl mx-auto space-y-6">
        
        {/* Header */}
        <div className="p-6 rounded-3xl bg-card border border-border/70 shadow-sm backdrop-blur-xl flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold text-blue-500 bg-blue-500/10 border border-blue-500/20">
              <LifeBuoy className="w-3.5 h-3.5" />
              <span>EchoGPT Helpdesk & Support</span>
            </div>
            <h1 className="text-xl sm:text-2xl font-black text-foreground">
              Customer Support & Bug Reporting
            </h1>
            <p className="text-xs text-muted-foreground">
              Have questions or found an issue? Our engineering support team typically responds within 2 hours.
            </p>
          </div>
        </div>

        {/* Support Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-5 rounded-2xl bg-card border border-border/70 space-y-2">
            <Mail className="w-5 h-5 text-blue-500" />
            <h3 className="text-sm font-bold text-foreground">Email Support</h3>
            <p className="text-xs text-muted-foreground">support@appifydevs.com</p>
          </div>

          <div className="p-5 rounded-2xl bg-card border border-border/70 space-y-2">
            <Bug className="w-5 h-5 text-rose-500" />
            <h3 className="text-sm font-bold text-foreground">Bug Reporting</h3>
            <p className="text-xs text-muted-foreground">Submit detailed logs and screenshots</p>
          </div>

          <div className="p-5 rounded-2xl bg-card border border-border/70 space-y-2">
            <ShieldCheck className="w-5 h-5 text-emerald-500" />
            <h3 className="text-sm font-bold text-foreground">System Status</h3>
            <p className="text-xs text-emerald-500 font-bold">100% All Engines Operational</p>
          </div>
        </div>

        {/* Ticket Form */}
        <div className="p-6 sm:p-8 rounded-3xl bg-card border border-border/80 shadow-md space-y-5">
          <h2 className="text-base font-bold text-foreground">Submit a Support Inquiry</h2>

          {submitted ? (
            <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-2 animate-fadeIn">
              <CheckCircle2 className="w-8 h-8 text-emerald-500 mx-auto" />
              <h3 className="text-sm font-bold text-foreground">Inquiry Received!</h3>
              <p className="text-xs text-muted-foreground">Ticket #2026-9812 has been created. We will reach back to your account email shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="font-bold text-foreground">Category</label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full p-2.5 rounded-xl bg-muted/60 border border-border/80 text-foreground focus:outline-none focus:border-blue-500 font-medium"
                  >
                    <option value="Technical Issue">Technical Issue</option>
                    <option value="Billing & Subscription">Billing & Subscription</option>
                    <option value="Chrome Extension Feedback">Chrome Extension Feedback</option>
                    <option value="Model Request">Model Request</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="font-bold text-foreground">Subject</label>
                  <input
                    type="text"
                    required
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="Brief description of your issue..."
                    className="w-full p-2.5 rounded-xl bg-muted/60 border border-border/80 text-foreground focus:outline-none focus:border-blue-500 font-medium"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="font-bold text-foreground">Detailed Description</label>
                <textarea
                  rows={4}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Provide any relevant prompt, error message, or steps to reproduce..."
                  className="w-full p-3 rounded-xl bg-muted/60 border border-border/80 text-foreground focus:outline-none focus:border-blue-500 leading-relaxed"
                />
              </div>

              <button
                type="submit"
                className="px-6 py-3 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 shadow-md transition-all flex items-center gap-2"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Submit Ticket</span>
              </button>
            </form>
          )}
        </div>

      </div>
    </div>
  );
}
