'use client';

import React, { useState } from 'react';
import { 
  Image as ImageIcon, 
  Sparkles, 
  Wand2, 
  Download, 
  RefreshCw, 
  Sliders, 
  Layers, 
  Copy, 
  Check, 
  CheckCircle2,
  Maximize2
} from 'lucide-react';

export default function ImageStudioPage() {
  const [prompt, setPrompt] = useState('Futuristic cybernetic workspace with multi-monitor glowing holograms, ultra-detailed 8k, cinematic lighting');
  const [aspectRatio, setAspectRatio] = useState<'1:1' | '16:9' | '9:16' | '4:3'>('16:9');
  const [stylePreset, setStylePreset] = useState('Photorealistic Cinematic');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedImages, setGeneratedImages] = useState([
    {
      id: '1',
      url: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=80',
      prompt: 'Abstract liquid gradient waves in neon violet and electric cyan',
      ratio: '16:9',
      style: 'Digital Art',
    },
    {
      id: '2',
      url: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=800&auto=format&fit=crop&q=80',
      prompt: '3D iridescent sphere floating on minimalist background',
      ratio: '1:1',
      style: '3D Render',
    }
  ]);

  const handleGenerate = () => {
    if (!prompt.trim() || isGenerating) return;
    setIsGenerating(true);

    setTimeout(() => {
      const newImg = {
        id: `img-${Date.now()}`,
        url: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=800&auto=format&fit=crop&q=80',
        prompt: prompt,
        ratio: aspectRatio,
        style: stylePreset,
      };
      setGeneratedImages(prev => [newImg, ...prev]);
      setIsGenerating(false);
    }, 1200);
  };

  const styleOptions = [
    'Photorealistic Cinematic',
    'Anime & Cyberpunk',
    '3D Blender Isometric',
    'Oil Painting & Baroque',
    'Minimalist Flat Vector',
  ];

  return (
    <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">
      <div className="max-w-7xl mx-auto space-y-6">
        
        {/* Header */}
        <div className="p-6 rounded-3xl bg-card border border-border/70 shadow-sm backdrop-blur-xl flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold text-purple-500 bg-purple-500/10 border border-purple-500/20">
              <ImageIcon className="w-3.5 h-3.5" />
              <span>AI Image & Visual Studio</span>
            </div>
            <h1 className="text-xl sm:text-2xl font-black text-foreground">
              Generate High-Fidelity 4K Visuals
            </h1>
            <p className="text-xs text-muted-foreground">
              Create production-ready graphic assets, UI concepts, and artworks with tailored prompt styles.
            </p>
          </div>
        </div>

        {/* Controls and Prompt Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Left Settings & Prompt Column */}
          <div className="lg:col-span-5 p-6 rounded-3xl bg-card border border-border/80 shadow-md space-y-5">
            
            {/* Prompt Textarea */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-foreground">Image Prompt</label>
              <textarea
                rows={4}
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Describe your desired image in detail..."
                className="w-full p-3.5 rounded-2xl bg-muted/50 border border-border/80 text-xs text-foreground focus:outline-none focus:border-purple-500 leading-relaxed"
              />
            </div>

            {/* Aspect Ratio Picker */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-foreground">Aspect Ratio</label>
              <div className="grid grid-cols-4 gap-2">
                {(['1:1', '16:9', '9:16', '4:3'] as const).map((ratio) => (
                  <button
                    key={ratio}
                    onClick={() => setAspectRatio(ratio)}
                    className={`py-2 rounded-xl text-xs font-bold transition-all ${
                      aspectRatio === ratio
                        ? 'bg-purple-600 text-white shadow-md'
                        : 'bg-muted text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    {ratio}
                  </button>
                ))}
              </div>
            </div>

            {/* Style Preset Selector */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-foreground">Art Style Preset</label>
              <select
                value={stylePreset}
                onChange={(e) => setStylePreset(e.target.value)}
                className="w-full p-3 rounded-xl bg-muted/60 border border-border/80 text-xs text-foreground focus:outline-none focus:border-purple-500 font-medium"
              >
                {styleOptions.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            </div>

            {/* Generate Action Button */}
            <button
              onClick={handleGenerate}
              disabled={isGenerating || !prompt.trim()}
              className="w-full py-3.5 rounded-2xl text-xs font-bold text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 hover:from-purple-500 hover:to-indigo-500 shadow-xl shadow-purple-600/30 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {isGenerating ? (
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : (
                <>
                  <Wand2 className="w-4 h-4" />
                  <span>Generate Artwork</span>
                </>
              )}
            </button>
          </div>

          {/* Right Gallery Grid */}
          <div className="lg:col-span-7 space-y-4">
            <h3 className="text-sm font-bold text-foreground flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-purple-500" />
              <span>Generated Creation Gallery ({generatedImages.length})</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {generatedImages.map((img) => (
                <div
                  key={img.id}
                  className="group relative rounded-3xl overflow-hidden border border-border/80 bg-card shadow-md flex flex-col"
                >
                  <div className="relative aspect-video w-full overflow-hidden bg-muted">
                    <img
                      src={img.url}
                      alt={img.prompt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 right-3 px-2 py-0.5 rounded-md text-[10px] font-bold bg-black/60 text-white backdrop-blur-md">
                      {img.ratio}
                    </div>
                  </div>

                  <div className="p-4 space-y-2">
                    <span className="text-[10px] font-bold text-purple-500 uppercase">{img.style}</span>
                    <p className="text-xs text-foreground font-medium line-clamp-2">{img.prompt}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
