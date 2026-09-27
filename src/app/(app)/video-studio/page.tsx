'use client';

import React, { useState } from 'react';
import { Video, Sparkles, Wand2, Upload, Play, Film, Sliders, CheckCircle2 } from 'lucide-react';

export default function VideoStudioPage() {
  const [prompt, setPrompt] = useState('Camera smoothly zooms through glowing futuristic cyberpunk neon skyscraper alleyway in 4k');
  const [duration, setDuration] = useState('5s');
  const [cameraMotion, setCameraMotion] = useState('Dynamic Drone Zoom');
  const [isRendering, setIsRendering] = useState(false);
  const [renderedVideos, setRenderedVideos] = useState([
    {
      id: '1',
      title: 'Neon Cyberpunk Flythrough',
      duration: '5s',
      thumbnail: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&auto=format&fit=crop&q=80',
    }
  ]);

  const handleRender = () => {
    if (!prompt.trim() || isRendering) return;
    setIsRendering(true);

    setTimeout(() => {
      setRenderedVideos(prev => [
        {
          id: `v-${Date.now()}`,
          title: prompt.slice(0, 30) + '...',
          duration: duration,
          thumbnail: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&auto=format&fit=crop&q=80',
        },
        ...prev
      ]);
      setIsRendering(false);
    }, 1500);
  };

  return (
    <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">
      <div className="max-w-7xl mx-auto space-y-6">
        
        {/* Header */}
        <div className="p-6 rounded-3xl bg-card border border-border/70 shadow-sm backdrop-blur-xl flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold text-rose-500 bg-rose-500/10 border border-rose-500/20">
              <Film className="w-3.5 h-3.5" />
              <span>AI Video Studio</span>
            </div>
            <h1 className="text-xl sm:text-2xl font-black text-foreground">
              Text-to-Video & Motion Studio
            </h1>
            <p className="text-xs text-muted-foreground">
              Generate cinematic high-frame-rate video shots from text prompts and optional reference imagery.
            </p>
          </div>
        </div>

        {/* 2-Column Interface */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Controls */}
          <div className="lg:col-span-5 p-6 rounded-3xl bg-card border border-border/80 shadow-md space-y-5">
            
            <div className="space-y-2">
              <label className="text-xs font-bold text-foreground">Video Scene Prompt</label>
              <textarea
                rows={4}
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                className="w-full p-3.5 rounded-2xl bg-muted/50 border border-border/80 text-xs text-foreground focus:outline-none focus:border-rose-500 leading-relaxed"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-foreground">Clip Duration</label>
                <div className="grid grid-cols-2 gap-2">
                  {['5s', '10s'].map((d) => (
                    <button
                      key={d}
                      onClick={() => setDuration(d)}
                      className={`py-2 rounded-xl text-xs font-bold transition-all ${
                        duration === d ? 'bg-rose-600 text-white' : 'bg-muted text-muted-foreground'
                      }`}
                    >
                      {d}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-foreground">Camera Movement</label>
                <select
                  value={cameraMotion}
                  onChange={(e) => setCameraMotion(e.target.value)}
                  className="w-full p-2.5 rounded-xl bg-muted/60 border border-border/80 text-xs text-foreground focus:outline-none focus:border-rose-500 font-medium"
                >
                  <option value="Dynamic Drone Zoom">Drone Zoom</option>
                  <option value="Pan Left to Right">Pan Left/Right</option>
                  <option value="Orbit 360">Orbit 360</option>
                  <option value="Slow Motion Static">Slow Motion</option>
                </select>
              </div>
            </div>

            <button
              onClick={handleRender}
              disabled={isRendering || !prompt.trim()}
              className="w-full py-3.5 rounded-2xl text-xs font-bold text-white bg-gradient-to-r from-rose-600 via-pink-600 to-indigo-600 hover:from-rose-500 hover:to-pink-500 shadow-xl shadow-rose-600/25 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {isRendering ? (
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : (
                <>
                  <Wand2 className="w-4 h-4" />
                  <span>Render Video Clip</span>
                </>
              )}
            </button>
          </div>

          {/* Video Previews */}
          <div className="lg:col-span-7 space-y-4">
            <h3 className="text-sm font-bold text-foreground flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-rose-500" />
              <span>Rendered AI Clips ({renderedVideos.length})</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {renderedVideos.map((v) => (
                <div
                  key={v.id}
                  className="group relative rounded-3xl overflow-hidden border border-border/80 bg-card shadow-md"
                >
                  <div className="relative aspect-video w-full overflow-hidden bg-muted">
                    <img
                      src={v.thumbnail}
                      alt={v.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity">
                      <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                        <Play className="w-5 h-5 fill-white ml-0.5" />
                      </div>
                    </div>
                    <div className="absolute bottom-3 right-3 px-2 py-0.5 rounded-md text-[10px] font-bold bg-black/70 text-white font-mono">
                      {v.duration}
                    </div>
                  </div>

                  <div className="p-3.5">
                    <h4 className="text-xs font-bold text-foreground truncate">{v.title}</h4>
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
