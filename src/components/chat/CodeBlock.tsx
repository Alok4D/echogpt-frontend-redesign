'use client';

import React, { useState } from 'react';
import { Copy, Check, Code2, Terminal } from 'lucide-react';

interface CodeBlockProps {
  language: string;
  code: string;
}

export default function CodeBlock({ language, code }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="my-3 rounded-2xl overflow-hidden border border-border/70 bg-[#090c15] text-slate-100 shadow-xl font-mono text-xs">
      
      {/* Code Header Bar */}
      <div className="px-4 py-2 bg-[#121624] border-b border-border/40 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Terminal className="w-3.5 h-3.5 text-blue-400" />
          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
            {language || 'code'}
          </span>
        </div>
        
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[11px] font-semibold text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-700 transition-all"
        >
          {copied ? (
            <>
              <Check className="w-3 h-3 text-emerald-400" />
              <span className="text-emerald-400 font-sans">Copied!</span>
            </>
          ) : (
            <>
              <Copy className="w-3 h-3" />
              <span className="font-sans">Copy Code</span>
            </>
          )}
        </button>
      </div>

      {/* Code Text Area */}
      <div className="p-4 overflow-x-auto leading-relaxed text-slate-200 selection:bg-blue-600/40">
        <pre>{code}</pre>
      </div>
    </div>
  );
}
