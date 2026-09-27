'use client';

import React, { useState } from 'react';
import { FileText, Sparkles, Check, Plus, Trash2, Download, Copy, Briefcase, GraduationCap, Code } from 'lucide-react';

export default function ResumeBuilderPage() {
  const [fullName, setFullName] = useState('Alok Roy');
  const [jobTitle, setJobTitle] = useState('Senior Frontend Engineer');
  const [email, setEmail] = useState('alok@appifydevs.com');
  const [skills, setSkills] = useState('React, Next.js 15, TypeScript, Tailwind CSS, Framer Motion, GraphQL, WebSockets');
  const [experience, setExperience] = useState('Spearheaded the redesign of the EchoGPT multi-AI ecosystem, reducing load times by 40% and boosting user engagement by 65%.');
  const [isGenerating, setIsGenerating] = useState(false);
  const [optimizedBullets, setOptimizedBullets] = useState<string[]>([
    'Architected high-throughput Multi-AI frontend supporting simultaneous streaming from Claude 3.5 Sonnet and GPT-4o.',
    'Engineered custom design system with Glassmorphism, Tailwind CSS, and zero-latency dark/light mode switching.',
    'Built context-aware Chrome Extension sidebar simulator with real-time text highlight actions.'
  ]);

  const handleAIOptimize = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setOptimizedBullets([
        'Engineered scalable Next.js 15 App Router architecture with full TypeScript type-safety and sub-100ms first contentful paint.',
        'Spearheaded the complete EchoGPT Multi-AI frontend redesign, boosting concurrent session throughput by 65%.',
        'Implemented custom responsive components with Framer Motion, resulting in WCAG 2.1 AA accessibility compliance.',
        'Integrated real-time streaming parser with syntax-highlighted code execution blocks and 1-click clipboard actions.'
      ]);
      setIsGenerating(false);
    }, 900);
  };

  return (
    <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">
      <div className="max-w-7xl mx-auto space-y-6">
        
        {/* Header */}
        <div className="p-6 rounded-3xl bg-card border border-border/70 shadow-sm backdrop-blur-xl flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold text-blue-500 bg-blue-500/10 border border-blue-500/20">
              <FileText className="w-3.5 h-3.5" />
              <span>AI Resume & Career Suite</span>
            </div>
            <h1 className="text-xl sm:text-2xl font-black text-foreground">
              ATS-Optimized Resume Builder
            </h1>
            <p className="text-xs text-muted-foreground">
              Transform your raw experience into high-impact, recruiter-tailored bullet points with quantified achievements.
            </p>
          </div>
        </div>

        {/* 2-Column Editor and Live ATS Resume Preview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Editor Column */}
          <div className="lg:col-span-5 p-6 rounded-3xl bg-card border border-border/80 shadow-md space-y-5">
            
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-foreground">Full Name</label>
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full p-2.5 rounded-xl bg-muted/60 border border-border/80 text-xs text-foreground focus:outline-none focus:border-blue-500 font-medium"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-foreground">Target Role</label>
                <input
                  type="text"
                  value={jobTitle}
                  onChange={(e) => setJobTitle(e.target.value)}
                  className="w-full p-2.5 rounded-xl bg-muted/60 border border-border/80 text-xs text-foreground focus:outline-none focus:border-blue-500 font-medium"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-foreground">Core Skills</label>
              <input
                type="text"
                value={skills}
                onChange={(e) => setSkills(e.target.value)}
                className="w-full p-2.5 rounded-xl bg-muted/60 border border-border/80 text-xs text-foreground focus:outline-none focus:border-blue-500 font-medium"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-foreground">Work Experience Notes</label>
              <textarea
                rows={3}
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
                className="w-full p-3 rounded-xl bg-muted/60 border border-border/80 text-xs text-foreground focus:outline-none focus:border-blue-500 leading-relaxed"
              />
            </div>

            <button
              onClick={handleAIOptimize}
              disabled={isGenerating}
              className="w-full py-3.5 rounded-2xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-600/30 transition-all flex items-center justify-center gap-2"
            >
              {isGenerating ? (
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : (
                <>
                  <Sparkles className="w-4 h-4" />
                  <span>AI Enhance & Optimize Bullets</span>
                </>
              )}
            </button>
          </div>

          {/* Live ATS Document Preview Column */}
          <div className="lg:col-span-7 p-8 rounded-3xl bg-card border border-border/80 shadow-md space-y-6 min-h-[500px]">
            
            {/* Header */}
            <div className="border-b border-border/60 pb-4 space-y-1 text-center">
              <h2 className="text-2xl font-black text-foreground">{fullName}</h2>
              <p className="text-xs font-bold text-blue-500">{jobTitle} • {email}</p>
            </div>

            {/* Skills */}
            <div className="space-y-2">
              <h3 className="text-xs font-black text-foreground uppercase tracking-wider border-b border-border/40 pb-1">
                Technical Expertise
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{skills}</p>
            </div>

            {/* Experience */}
            <div className="space-y-3">
              <h3 className="text-xs font-black text-foreground uppercase tracking-wider border-b border-border/40 pb-1">
                Professional Experience & Achievements
              </h3>
              
              <ul className="space-y-2 text-xs text-foreground/90">
                {optimizedBullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-2 leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0 mt-1.5" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
