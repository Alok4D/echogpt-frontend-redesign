'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  SplitSquareVertical, 
  Sparkles, 
  Copy, 
  Check, 
  Play, 
  ArrowRight, 
  Zap, 
  Cpu, 
  Bot,
  Flame
} from 'lucide-react';

export default function ProductPreview() {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const sampleBattles = [
    {
      title: 'Python Algorithmic Optimization',
      prompt: 'Write an optimized LRU Cache in Python with O(1) get & put and thread-safety explanation.',
      leftModel: 'Claude 3.5 Sonnet',
      leftColor: '#D97706',
      leftSpeed: '420 ms',
      leftCode: `class LRUCache:\n    def __init__(self, capacity: int):\n        self.cap = capacity\n        self.cache = collections.OrderedDict()\n\n    def get(self, key: int) -> int:\n        if key not in self.cache:\n            return -1\n        self.cache.move_to_end(key)\n        return self.cache[key]\n\n    def put(self, key: int, value: int) -> None:\n        if key in self.cache:\n            self.cache.move_to_end(key)\n        self.cache[key] = value\n        if len(self.cache) > self.cap:\n            self.cache.popitem(last=False)`,
      rightModel: 'GPT-4o Omnimodel',
      rightColor: '#10A37F',
      rightSpeed: '390 ms',
      rightCode: `from collections import OrderedDict\nfrom threading import Lock\n\nclass ThreadSafeLRU:\n    def __init__(self, capacity: int):\n        self.capacity = capacity\n        self.map = OrderedDict()\n        self.lock = Lock()\n\n    def get(self, key):\n        with self.lock:\n            if key not in self.map:\n                return None\n            self.map.move_to_end(key)\n            return self.map[key]`
    },
    {
      title: 'Next.js 14 Server Action & Error Handling',
      prompt: 'Implement a type-safe Server Action for email subscription with Zod schema validation.',
      leftModel: 'Claude 3.5 Sonnet',
      leftColor: '#D97706',
      leftSpeed: '450 ms',
      leftCode: `'use server';\nimport { z } from 'zod';\n\nconst schema = z.object({\n  email: z.string().email('Invalid email address'),\n});\n\nexport async function subscribeUser(prevState: any, formData: FormData) {\n  const parsed = schema.safeParse({ email: formData.get('email') });\n  if (!parsed.success) {\n    return { success: false, error: parsed.error.flatten().fieldErrors };\n  }\n  await db.subscribers.create({ data: parsed.data });\n  return { success: true };\n}`,
      rightModel: 'DeepSeek R1',
      rightColor: '#6366F1',
      rightSpeed: '510 ms',
      rightCode: `'use server';\nimport { revalidatePath } from 'next/cache';\n\nexport type ActionState = { message: string; ok: boolean };\n\nexport async function handleSubscribe(prevState: ActionState, data: FormData): Promise<ActionState> {\n  const email = data.get('email') as string;\n  // Validating domain & MX records\n  try {\n    await saveEmail(email);\n    revalidatePath('/newsletter');\n    return { message: 'Subscribed!', ok: true };\n  } catch (err) {\n    return { message: 'Failed to subscribe', ok: false };\n  }\n}`
    }
  ];

  const [activeBattleIndex, setActiveBattleIndex] = useState(0);
  const activeBattle = sampleBattles[activeBattleIndex];

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section id="preview" className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold text-amber-500 bg-amber-500/10 border border-amber-500/20">
            <Flame className="w-3.5 h-3.5" />
            <span>Interactive Side-by-Side Arena</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-foreground tracking-tight">
            Stop Guessing.{' '}
            <span className="bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 bg-clip-text text-transparent">
              Compare in Real-Time.
            </span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg">
            Send one prompt to two different models concurrently. Compare logic, code quality, speed, and formatting side-by-side.
          </p>
        </div>

        {/* Battle Presets Tabs */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex p-1.5 rounded-2xl bg-card border border-border/80 gap-2 overflow-x-auto no-scrollbar">
            {sampleBattles.map((battle, idx) => (
              <button
                key={idx}
                onClick={() => setActiveBattleIndex(idx)}
                className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
                  activeBattleIndex === idx
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                }`}
              >
                {battle.title}
              </button>
            ))}
          </div>
        </div>

        {/* Dual Window Battle Card */}
        <div className="rounded-3xl border border-border/80 bg-card/90 dark:bg-[#0b0e17] backdrop-blur-2xl p-4 sm:p-7 shadow-2xl space-y-6">
          
          {/* Prompt Header */}
          <div className="p-4 rounded-2xl bg-muted/60 border border-border/50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div className="space-y-1">
              <span className="text-[11px] font-bold text-blue-500 uppercase tracking-wider">Shared Prompt</span>
              <p className="text-sm font-semibold text-foreground">&quot;{activeBattle.prompt}&quot;</p>
            </div>
            <Link
              href={`/compare?prompt=${encodeURIComponent(activeBattle.prompt)}`}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 transition-all shrink-0"
            >
              <span>Test Live in App</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Dual Columns */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            
            {/* Left AI Model Card */}
            <div className="rounded-2xl border border-border/60 bg-muted/30 p-5 space-y-3.5 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-xl flex items-center justify-center font-bold text-xs text-white" style={{ backgroundColor: activeBattle.leftColor }}>
                      {activeBattle.leftModel.charAt(0)}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-foreground">{activeBattle.leftModel}</h4>
                      <span className="text-[10px] text-muted-foreground">Anthropic AI</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] px-2 py-0.5 rounded-md font-mono bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                      ⚡ {activeBattle.leftSpeed}
                    </span>
                    <button
                      onClick={() => handleCopy(activeBattle.leftCode, 'left')}
                      className="p-1.5 rounded-lg text-muted-foreground hover:text-foreground bg-muted border border-border/40"
                    >
                      {copiedId === 'left' ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                </div>

                <div className="rounded-xl bg-[#090b10] border border-border/40 p-3.5 overflow-x-auto font-mono text-xs text-emerald-400/90 leading-relaxed">
                  <pre>{activeBattle.leftCode}</pre>
                </div>
              </div>
            </div>

            {/* Right AI Model Card */}
            <div className="rounded-2xl border border-border/60 bg-muted/30 p-5 space-y-3.5 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-xl flex items-center justify-center font-bold text-xs text-white" style={{ backgroundColor: activeBattle.rightColor }}>
                      {activeBattle.rightModel.charAt(0)}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-foreground">{activeBattle.rightModel}</h4>
                      <span className="text-[10px] text-muted-foreground">OpenAI / DeepSeek</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] px-2 py-0.5 rounded-md font-mono bg-blue-500/10 text-blue-500 border border-blue-500/20">
                      ⚡ {activeBattle.rightSpeed}
                    </span>
                    <button
                      onClick={() => handleCopy(activeBattle.rightCode, 'right')}
                      className="p-1.5 rounded-lg text-muted-foreground hover:text-foreground bg-muted border border-border/40"
                    >
                      {copiedId === 'right' ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                </div>

                <div className="rounded-xl bg-[#090b10] border border-border/40 p-3.5 overflow-x-auto font-mono text-xs text-blue-400/90 leading-relaxed">
                  <pre>{activeBattle.rightCode}</pre>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
