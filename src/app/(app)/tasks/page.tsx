'use client';

import React, { useState } from 'react';
import { CheckSquare, Sparkles, Plus, Clock, Play, CheckCircle2, AlertCircle, ArrowRight } from 'lucide-react';

export default function TasksPage() {
  const [tasks, setTasks] = useState([
    { id: '1', title: 'Daily Tech & AI News Digest', trigger: 'Every Morning at 8:00 AM', status: 'Active', model: 'GPT-4o', lastRun: 'Today, 8:00 AM' },
    { id: '2', title: 'GitHub PR Automated Review & Lint', trigger: 'On Webhook Event', status: 'Active', model: 'Claude 3.5 Sonnet', lastRun: '2 hours ago' },
    { id: '3', title: 'Weekly Competitor Benchmark Report', trigger: 'Every Monday', status: 'Paused', model: 'Gemini 1.5 Pro', lastRun: '3 days ago' },
  ]);

  const [newTaskTitle, setNewTaskTitle] = useState('');

  const handleAddTask = () => {
    if (!newTaskTitle.trim()) return;
    const t = {
      id: `task-${Date.now()}`,
      title: newTaskTitle.trim(),
      trigger: 'Manual / Scheduled',
      status: 'Active',
      model: 'Claude 3.5 Sonnet',
      lastRun: 'Just now',
    };
    setTasks([t, ...tasks]);
    setNewTaskTitle('');
  };

  return (
    <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">
      <div className="max-w-7xl mx-auto space-y-6">
        
        {/* Header */}
        <div className="p-6 rounded-3xl bg-card border border-border/70 shadow-sm backdrop-blur-xl flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold text-blue-500 bg-blue-500/10 border border-blue-500/20">
              <CheckSquare className="w-3.5 h-3.5" />
              <span>AI Automated Tasks & Workflows</span>
            </div>
            <h1 className="text-xl sm:text-2xl font-black text-foreground">
              Automate Recurring Intelligence
            </h1>
            <p className="text-xs text-muted-foreground">
              Configure autonomous scheduled AI jobs that synthesize reports, monitor repositories, and trigger webhooks.
            </p>
          </div>
        </div>

        {/* Quick Add Bar */}
        <div className="p-4 sm:p-5 rounded-3xl bg-card border border-border/80 shadow-md flex items-center gap-3">
          <input
            type="text"
            value={newTaskTitle}
            onChange={(e) => setNewTaskTitle(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleAddTask()}
            placeholder="Create an autonomous workflow task (e.g., 'Summarize tech newsletter every Friday')..."
            className="flex-1 pl-4 pr-3 py-2.5 rounded-xl bg-muted/60 border border-border/70 text-xs text-foreground focus:outline-none focus:border-blue-500 font-medium"
          />
          <button
            onClick={handleAddTask}
            className="px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 shadow-md transition-all flex items-center gap-1.5 shrink-0"
          >
            <Plus className="w-4 h-4" />
            <span>Create Task</span>
          </button>
        </div>

        {/* Tasks List */}
        <div className="space-y-3.5">
          {tasks.map((task) => (
            <div
              key={task.id}
              className="p-5 rounded-2xl bg-card border border-border/70 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-blue-500/40 transition-all"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2.5">
                  <h3 className="text-sm font-bold text-foreground">{task.title}</h3>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                    task.status === 'Active' ? 'bg-emerald-500/10 text-emerald-500 border border-emerald-500/20' : 'bg-muted text-muted-foreground'
                  }`}>
                    {task.status}
                  </span>
                </div>
                <div className="flex items-center gap-4 text-xs text-muted-foreground font-medium">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-blue-500" />
                    <span>{task.trigger}</span>
                  </span>
                  <span>Engine: <strong className="text-foreground">{task.model}</strong></span>
                  <span>Last run: {task.lastRun}</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button className="px-3 py-1.5 rounded-xl text-xs font-bold bg-muted hover:bg-muted/80 text-foreground transition-all flex items-center gap-1.5">
                  <Play className="w-3 h-3 text-blue-500 fill-blue-500" />
                  <span>Run Now</span>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
