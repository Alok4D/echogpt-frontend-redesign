'use client';

import React, { useState } from 'react';
import { BookOpen, Sparkles, Check, Globe, GraduationCap, Copy, Download, Send, ArrowRight } from 'lucide-react';

export default function SOPGeneratorPage() {
  const [targetCountry, setTargetCountry] = useState('United States');
  const [degreeLevel, setDegreeLevel] = useState('Master\'s Degree (MS)');
  const [fieldOfStudy, setFieldOfStudy] = useState('Computer Science & Artificial Intelligence');
  const [background, setBackground] = useState('3 years experience as a Software Engineer, completed BSc with 3.8 GPA, published 1 research paper in NLP.');
  const [targetUniversity, setTargetUniversity] = useState('Stanford University / CMU');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedSOP, setGeneratedSOP] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const countries = [
    { name: 'United States', flag: '🇺🇸', focus: 'Research innovation & holistic leadership' },
    { name: 'United Kingdom', flag: '🇬🇧', focus: 'Academic rigor & direct career alignment' },
    { name: 'Canada', flag: '🇨🇦', focus: 'Professional immigration & industry research' },
    { name: 'Germany', flag: '🇩🇪', focus: 'Technical depth, methodology & zero tuition' },
    { name: 'Australia', flag: '🇦🇺', focus: 'Practical skills & post-study work authorization' },
  ];

  const handleGenerate = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setGeneratedSOP(`STATEMENT OF PURPOSE\n\nCandidate: Applicant for ${degreeLevel} in ${fieldOfStudy}\nTarget Institution: ${targetUniversity}\nCountry Requirements: ${targetCountry}\n\nI. Introduction & Academic Passion\nMy aspiration to pursue graduate studies in ${fieldOfStudy} at ${targetUniversity} stems from a deep-rooted commitment to solving real-world computational challenges through scalable software engineering. With a solid foundation in software systems and applied artificial intelligence, I aim to push the boundaries of intelligent distributed architectures.\n\nII. Academic Preparation & Technical Foundation\nDuring my undergraduate degree, I consistently demonstrated academic excellence while focusing on systems design, algorithms, and deep learning. My capstone research explored transformer efficiency in low-resource settings, leading to a peer-reviewed publication.\n\nIII. Professional Experience & Leadership\nOver the past three years as a Software Engineer, I spearheaded the development of high-throughput backend services, reducing latency by 45% and managing production deployments handling millions of daily transactions.\n\nIV. Why ${targetUniversity} & ${targetCountry}?\n${targetUniversity}'s world-renowned faculty and cutting-edge labs offer the ideal crucible for my research goals. Furthermore, studying in ${targetCountry} will provide the global exposure and rigorous academic ecosystem necessary to excel as a technical leader.\n\nV. Conclusion & Long-Term Vision\nUpon completing my ${degreeLevel}, I plan to contribute to pioneering AI systems in industry and academia. I am confident that my diligence, technical background, and passion make me an excellent candidate for your esteemed program.`);
      setIsGenerating(false);
    }, 1200);
  };

  const handleCopy = () => {
    if (!generatedSOP) return;
    navigator.clipboard.writeText(generatedSOP);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">
      <div className="max-w-7xl mx-auto space-y-6">
        
        {/* Header */}
        <div className="p-6 rounded-3xl bg-card border border-border/70 shadow-sm backdrop-blur-xl flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold text-emerald-500 bg-emerald-500/10 border border-emerald-500/20">
              <BookOpen className="w-3.5 h-3.5" />
              <span>AI Academic Statement of Purpose (SOP) Suite</span>
            </div>
            <h1 className="text-xl sm:text-2xl font-black text-foreground">
              Higher Studies & Visa SOP Generator
            </h1>
            <p className="text-xs text-muted-foreground">
              Generate university-grade Statements of Purpose tailored specifically to destination country visa guidelines.
            </p>
          </div>
        </div>

        {/* 2-Column Form & Preview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Form */}
          <div className="lg:col-span-5 p-6 rounded-3xl bg-card border border-border/80 shadow-md space-y-5">
            
            {/* Country Selector */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-foreground flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5 text-blue-500" />
                <span>Destination Country</span>
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {countries.map((c) => (
                  <button
                    key={c.name}
                    onClick={() => setTargetCountry(c.name)}
                    className={`p-2.5 rounded-xl text-left border transition-all ${
                      targetCountry === c.name
                        ? 'bg-emerald-500/10 border-emerald-500 text-foreground font-bold'
                        : 'bg-muted/50 border-border/70 text-muted-foreground hover:bg-muted'
                    }`}
                  >
                    <span className="text-sm mr-1">{c.flag}</span>
                    <span className="text-xs font-semibold">{c.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Degree & Field */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-foreground">Target Degree</label>
                <input
                  type="text"
                  value={degreeLevel}
                  onChange={(e) => setDegreeLevel(e.target.value)}
                  className="w-full p-2.5 rounded-xl bg-muted/60 border border-border/80 text-xs text-foreground focus:outline-none focus:border-emerald-500 font-medium"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-foreground">Target University</label>
                <input
                  type="text"
                  value={targetUniversity}
                  onChange={(e) => setTargetUniversity(e.target.value)}
                  className="w-full p-2.5 rounded-xl bg-muted/60 border border-border/80 text-xs text-foreground focus:outline-none focus:border-emerald-500 font-medium"
                />
              </div>
            </div>

            {/* Field of Study */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-foreground">Program & Major</label>
              <input
                type="text"
                value={fieldOfStudy}
                onChange={(e) => setFieldOfStudy(e.target.value)}
                className="w-full p-2.5 rounded-xl bg-muted/60 border border-border/80 text-xs text-foreground focus:outline-none focus:border-emerald-500 font-medium"
              />
            </div>

            {/* Academic & Professional Background */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-foreground">Your Academic & Work Highlights</label>
              <textarea
                rows={3}
                value={background}
                onChange={(e) => setBackground(e.target.value)}
                placeholder="Mention projects, GPA, research papers, and technical roles..."
                className="w-full p-3 rounded-xl bg-muted/60 border border-border/80 text-xs text-foreground focus:outline-none focus:border-emerald-500 leading-relaxed"
              />
            </div>

            {/* Generate Button */}
            <button
              onClick={handleGenerate}
              disabled={isGenerating}
              className="w-full py-3.5 rounded-2xl text-xs font-bold text-white bg-gradient-to-r from-emerald-600 via-teal-600 to-blue-600 hover:from-emerald-500 hover:to-teal-500 shadow-xl shadow-emerald-600/20 transition-all flex items-center justify-center gap-2"
            >
              {isGenerating ? (
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : (
                <>
                  <Sparkles className="w-4 h-4" />
                  <span>Generate Full SOP</span>
                </>
              )}
            </button>
          </div>

          {/* SOP Output Window */}
          <div className="lg:col-span-7 p-6 rounded-3xl bg-card border border-border/80 shadow-md flex flex-col justify-between min-h-[500px]">
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-border/50">
                <div className="flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-emerald-500" />
                  <span className="text-xs font-bold text-foreground">Generated Document Output</span>
                </div>
                {generatedSOP && (
                  <button
                    onClick={handleCopy}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold bg-muted hover:bg-muted/80 text-foreground border border-border/50 transition-all"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied ? 'Copied' : 'Copy SOP'}</span>
                  </button>
                )}
              </div>

              <div className="text-xs sm:text-sm text-foreground/90 whitespace-pre-wrap leading-relaxed font-serif bg-muted/20 p-5 rounded-2xl border border-border/40 max-h-[500px] overflow-y-auto">
                {generatedSOP || (
                  <div className="py-24 text-center text-muted-foreground italic">
                    Fill out your profile on the left and click &quot;Generate Full SOP&quot; to synthesize a complete Statement of Purpose.
                  </div>
                )}
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
