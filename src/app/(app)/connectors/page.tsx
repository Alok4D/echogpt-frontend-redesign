'use client';

import React, { useState } from 'react';
import { Layers, CheckCircle2, Plus, ExternalLink, ShieldCheck, Database, Github, Slack, Globe } from 'lucide-react';

export default function ConnectorsPage() {
  const [connectors, setConnectors] = useState([
    { id: '1', name: 'GitHub Repositories', desc: 'Sync full repository context, issues, and PR reviews directly with AI.', icon: Github, connected: true, color: '#24292e' },
    { id: '2', name: 'PostgreSQL & Vector DB', desc: 'Query database schemas, run read-only SQL, and embed knowledge bases.', icon: Database, connected: true, color: '#336791' },
    { id: '3', name: 'Web Search & Live Grounding', desc: 'Real-time live Google search indexing for fresh up-to-date facts.', icon: Globe, connected: true, color: '#4285F4' },
    { id: '4', name: 'Slack Workspaces', desc: 'Bring EchoGPT into team channels for automated task updates and Q&A.', icon: Slack, connected: false, color: '#4A154B' },
  ]);

  const toggleConnect = (id: string) => {
    setConnectors(prev =>
      prev.map(c => c.id === id ? { ...c, connected: !c.connected } : c)
    );
  };

  return (
    <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">
      <div className="max-w-7xl mx-auto space-y-6">
        
        {/* Header */}
        <div className="p-6 rounded-3xl bg-card border border-border/70 shadow-sm backdrop-blur-xl flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold text-cyan-500 bg-cyan-500/10 border border-cyan-500/20">
              <Layers className="w-3.5 h-3.5" />
              <span>AI Data Connectors & Integrations</span>
            </div>
            <h1 className="text-xl sm:text-2xl font-black text-foreground">
              Connect External Data Sources
            </h1>
            <p className="text-xs text-muted-foreground">
              Empower your multi-AI models with live proprietary documentation, databases, and GitHub repositories.
            </p>
          </div>
        </div>

        {/* Connectors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {connectors.map((item) => (
            <div
              key={item.id}
              className="p-6 rounded-3xl bg-card border border-border/80 shadow-md flex flex-col justify-between space-y-4 hover:border-blue-500/40 transition-all"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-muted flex items-center justify-center text-foreground shadow-sm">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <span className={`px-2.5 py-1 rounded-full text-[11px] font-bold ${
                    item.connected ? 'bg-emerald-500/10 text-emerald-500 border border-emerald-500/20' : 'bg-muted text-muted-foreground'
                  }`}>
                    {item.connected ? 'Active & Synced' : 'Disconnected'}
                  </span>
                </div>

                <h3 className="text-base font-bold text-foreground">{item.name}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>

              <div className="pt-4 border-t border-border/40 flex items-center justify-between">
                <span className="text-[11px] text-muted-foreground font-mono">TLS 1.3 Encrypted</span>
                <button
                  onClick={() => toggleConnect(item.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                    item.connected
                      ? 'bg-muted hover:bg-rose-500/10 hover:text-rose-500 text-muted-foreground'
                      : 'bg-blue-600 hover:bg-blue-500 text-white shadow-md'
                  }`}
                >
                  {item.connected ? 'Disconnect' : 'Connect Integration'}
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
