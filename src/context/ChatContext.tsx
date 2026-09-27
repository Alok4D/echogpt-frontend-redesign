'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { ChatSession, Message, PromptTemplate } from '@/types/chat';
import { AI_MODELS } from '@/data/landingData';
import { AIModel } from '@/types';

interface ChatContextType {
  sessions: ChatSession[];
  currentSession: ChatSession | null;
  activeModel: AIModel;
  secondaryModel: AIModel;
  isDualMode: boolean;
  isGenerating: boolean;
  proTokensRemaining: number;
  isProUser: boolean;
  searchQuery: string;
  isSidebarOpen: boolean;
  isUpgradeModalOpen: boolean;
  isSettingsModalOpen: boolean;
  isPromptLibraryOpen: boolean;
  setSearchQuery: (query: string) => void;
  setIsSidebarOpen: (open: boolean) => void;
  setIsUpgradeModalOpen: (open: boolean) => void;
  setIsSettingsModalOpen: (open: boolean) => void;
  setIsPromptLibraryOpen: (open: boolean) => void;
  setActiveModel: (model: AIModel) => void;
  setSecondaryModel: (model: AIModel) => void;
  setIsDualMode: (dual: boolean) => void;
  createNewChat: (modelId?: string) => void;
  selectSession: (sessionId: string) => void;
  deleteSession: (sessionId: string) => void;
  togglePinSession: (sessionId: string) => void;
  sendMessage: (content: string, attachments?: string[]) => Promise<void>;
  regenerateLastMessage: () => Promise<void>;
  clearAllSessions: () => void;
}

const DEFAULT_SESSIONS: ChatSession[] = [
  {
    id: 'session-1',
    title: 'React 19 Server Components vs Client Components',
    createdAt: 'Today, 2:30 PM',
    updatedAt: 'Today, 2:32 PM',
    modelId: 'claude-3-5-sonnet',
    isPinned: true,
    messages: [
      {
        id: 'm-1',
        role: 'user',
        content: 'Explain the core difference between React 19 Server Components and Client Components with practical Next.js App Router code.',
        timestamp: '2:30 PM',
      },
      {
        id: 'm-2',
        role: 'assistant',
        content: `### React Server Components (RSC) vs Client Components (RCC)\n\nIn modern Next.js with React 19, components are **Server Components by default** unless specified with \`'use client'\`.\n\n#### Key Distinctions:\n1. **Server Components:** Execute on the server during request time. Zero JavaScript bundle sent to the client, direct database access, high security for secrets.\n2. **Client Components:** Hydrated in the browser DOM. Needed for interactive state (\`useState\`, \`useEffect\`), event listeners (\`onClick\`), and browser APIs.\n\n\`\`\`tsx\n// app/products/page.tsx (Server Component)\nimport { db } from '@/lib/db';\nimport AddToCartButton from '@/components/AddToCartButton';\n\nexport default async function ProductsPage() {\n  // Direct DB query on server\n  const products = await db.product.findMany();\n\n  return (\n    <div className="grid grid-cols-3 gap-6">\n      {products.map((item) => (\n        <div key={item.id} className="p-4 border rounded-2xl">\n          <h3 className="font-bold">{item.name}</h3>\n          <p className="text-blue-500 font-mono">\\$99.00</p>\n          <AddToCartButton productId={item.id} />\n        </div>\n      ))}\n    </div>\n  );\n}\n\`\`\``,
        timestamp: '2:31 PM',
        modelId: 'claude-3-5-sonnet',
        modelName: 'Claude 3.5 Sonnet',
        modelColor: '#D97706',
      }
    ]
  },
  {
    id: 'session-2',
    title: 'Optimized LRU Cache in TypeScript',
    createdAt: 'Yesterday',
    updatedAt: 'Yesterday',
    modelId: 'gpt-4o',
    isPinned: false,
    messages: [
      {
        id: 'm-3',
        role: 'user',
        content: 'Write an O(1) LRU Cache in TypeScript with full generic support.',
        timestamp: 'Yesterday',
      },
      {
        id: 'm-4',
        role: 'assistant',
        content: `Here is a high-performance **O(1) LRU Cache** in TypeScript using a Doubly Linked List and Hash Map:\n\n\`\`\`typescript\nclass DNode<K, V> {\n  constructor(\n    public key: K,\n    public val: V,\n    public prev: DNode<K, V> | null = null,\n    public next: DNode<K, V> | null = null\n  ) {}\n}\n\nexport class LRUCache<K, V> {\n  private capacity: number;\n  private map = new Map<K, DNode<K, V>>();\n  private head = new DNode<K, V>(null as any, null as any);\n  private tail = new DNode<K, V>(null as any, null as any);\n\n  constructor(capacity: number) {\n    this.capacity = capacity;\n    this.head.next = this.tail;\n    this.tail.prev = this.head;\n  }\n\n  get(key: K): V | undefined {\n    const node = this.map.get(key);\n    if (!node) return undefined;\n    this.moveToHead(node);\n    return node.val;\n  }\n}\n\`\`\``,
        timestamp: 'Yesterday',
        modelId: 'gpt-4o',
        modelName: 'GPT-4o Omnimodel',
        modelColor: '#10A37F',
      }
    ]
  }
];

const ChatContext = createContext<ChatContextType | undefined>(undefined);

export function ChatProvider({ children }: { children: React.ReactNode }) {
  const [sessions, setSessions] = useState<ChatSession[]>(DEFAULT_SESSIONS);
  const [currentSessionId, setCurrentSessionId] = useState<string>(DEFAULT_SESSIONS[0].id);
  const [activeModel, setActiveModel] = useState<AIModel>(AI_MODELS[0]);
  const [secondaryModel, setSecondaryModel] = useState<AIModel>(AI_MODELS[1]);
  const [isDualMode, setIsDualMode] = useState<boolean>(false);
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [proTokensRemaining, setProTokensRemaining] = useState<number>(1485);
  const [isProUser, setIsProUser] = useState<boolean>(true);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true);
  
  // Modals state
  const [isUpgradeModalOpen, setIsUpgradeModalOpen] = useState<boolean>(false);
  const [isSettingsModalOpen, setIsSettingsModalOpen] = useState<boolean>(false);
  const [isPromptLibraryOpen, setIsPromptLibraryOpen] = useState<boolean>(false);

  // Load from local storage
  useEffect(() => {
    try {
      const saved = localStorage.getItem('echogpt-sessions');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setSessions(parsed);
          setCurrentSessionId(parsed[0].id);
        }
      }
    } catch (e) {
      console.error('Failed to load sessions from storage', e);
    }
  }, []);

  // Save to local storage
  useEffect(() => {
    try {
      localStorage.setItem('echogpt-sessions', JSON.stringify(sessions));
    } catch (e) {
      console.error('Failed to save sessions to storage', e);
    }
  }, [sessions]);

  const currentSession = sessions.find((s) => s.id === currentSessionId) || sessions[0] || null;

  const createNewChat = (modelId?: string) => {
    const selected = modelId ? AI_MODELS.find(m => m.id === modelId) || activeModel : activeModel;
    const newSession: ChatSession = {
      id: `session-${Date.now()}`,
      title: 'New Conversation',
      createdAt: 'Just now',
      updatedAt: 'Just now',
      modelId: selected.id,
      isPinned: false,
      messages: [],
      isDualCompare: isDualMode,
      secondaryModelId: secondaryModel.id,
    };

    setSessions((prev) => [newSession, ...prev]);
    setCurrentSessionId(newSession.id);
  };

  const selectSession = (sessionId: string) => {
    setCurrentSessionId(sessionId);
    const target = sessions.find(s => s.id === sessionId);
    if (target) {
      const matchedModel = AI_MODELS.find(m => m.id === target.modelId);
      if (matchedModel) setActiveModel(matchedModel);
      if (target.isDualCompare && target.secondaryModelId) {
        const matchedSec = AI_MODELS.find(m => m.id === target.secondaryModelId);
        if (matchedSec) setSecondaryModel(matchedSec);
        setIsDualMode(true);
      }
    }
  };

  const deleteSession = (sessionId: string) => {
    setSessions((prev) => {
      const filtered = prev.filter((s) => s.id !== sessionId);
      if (currentSessionId === sessionId && filtered.length > 0) {
        setCurrentSessionId(filtered[0].id);
      }
      return filtered;
    });
  };

  const togglePinSession = (sessionId: string) => {
    setSessions((prev) =>
      prev.map((s) => (s.id === sessionId ? { ...s, isPinned: !s.isPinned } : s))
    );
  };

  const clearAllSessions = () => {
    const fresh: ChatSession = {
      id: `session-${Date.now()}`,
      title: 'New Conversation',
      createdAt: 'Just now',
      updatedAt: 'Just now',
      modelId: activeModel.id,
      messages: [],
    };
    setSessions([fresh]);
    setCurrentSessionId(fresh.id);
  };

  const sendMessage = async (content: string) => {
    if (!content.trim() || isGenerating) return;

    const userMessage: Message = {
      id: `msg-${Date.now()}`,
      role: 'user',
      content: content.trim(),
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    // Update session title if it is the first message
    const isFirstMessage = !currentSession || currentSession.messages.length === 0;
    const dynamicTitle = isFirstMessage 
      ? (content.slice(0, 36) + (content.length > 36 ? '...' : '')) 
      : (currentSession?.title || 'Conversation');

    setSessions((prev) =>
      prev.map((s) => {
        if (s.id === currentSessionId) {
          return {
            ...s,
            title: dynamicTitle,
            updatedAt: 'Just now',
            messages: [...s.messages, userMessage],
          };
        }
        return s;
      })
    );

    setIsGenerating(true);
    setProTokensRemaining((prev) => Math.max(0, prev - 1));

    // Simulate AI response streaming
    setTimeout(() => {
      const assistantMessage: Message = {
        id: `msg-ai-${Date.now()}`,
        role: 'assistant',
        content: generateMockResponse(content, activeModel),
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        modelId: activeModel.id,
        modelName: activeModel.name,
        modelColor: activeModel.color,
      };

      setSessions((prev) =>
        prev.map((s) => {
          if (s.id === currentSessionId) {
            return {
              ...s,
              messages: [...s.messages, assistantMessage],
            };
          }
          return s;
        })
      );
      setIsGenerating(false);
    }, 850);
  };

  const regenerateLastMessage = async () => {
    if (!currentSession || currentSession.messages.length < 2 || isGenerating) return;
    const lastUserMsg = [...currentSession.messages].reverse().find(m => m.role === 'user');
    if (!lastUserMsg) return;

    setIsGenerating(true);
    setTimeout(() => {
      const regenerated: Message = {
        id: `msg-regen-${Date.now()}`,
        role: 'assistant',
        content: `**[Regenerated with ${activeModel.name}]**\n\n` + generateMockResponse(lastUserMsg.content, activeModel),
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        modelId: activeModel.id,
        modelName: activeModel.name,
        modelColor: activeModel.color,
      };

      setSessions((prev) =>
        prev.map((s) => {
          if (s.id === currentSessionId) {
            // Replace last assistant message
            const filtered = s.messages.filter((_, idx) => idx !== s.messages.length - 1);
            return {
              ...s,
              messages: [...filtered, regenerated],
            };
          }
          return s;
        })
      );
      setIsGenerating(false);
    }, 750);
  };

  return (
    <ChatContext.Provider
      value={{
        sessions,
        currentSession,
        activeModel,
        secondaryModel,
        isDualMode,
        isGenerating,
        proTokensRemaining,
        isProUser,
        searchQuery,
        isSidebarOpen,
        isUpgradeModalOpen,
        isSettingsModalOpen,
        isPromptLibraryOpen,
        setSearchQuery,
        setIsSidebarOpen,
        setIsUpgradeModalOpen,
        setIsSettingsModalOpen,
        setIsPromptLibraryOpen,
        setActiveModel,
        setSecondaryModel,
        setIsDualMode,
        createNewChat,
        selectSession,
        deleteSession,
        togglePinSession,
        sendMessage,
        regenerateLastMessage,
        clearAllSessions,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
}

export function useChat() {
  const context = useContext(ChatContext);
  if (!context) {
    throw new Error('useChat must be used within a ChatProvider');
  }
  return context;
}

function generateMockResponse(prompt: string, model: AIModel): string {
  const lower = prompt.toLowerCase();
  
  if (lower.includes('code') || lower.includes('function') || lower.includes('component') || lower.includes('react') || lower.includes('python')) {
    return `### **Solution from ${model.name}**\n\nHere is the production-ready implementation tailored to your requirements:\n\n\`\`\`typescript\n// Optimized high-performance implementation\nexport async function handleAIWorkflow<T>(input: T): Promise<{ success: boolean; data: T }> {\n  try {\n    // Context processing with ${model.name}\n    console.log('Ingesting input payload:', input);\n    return { success: true, data: input };\n  } catch (error) {\n    console.error('Workflow error:', error);\n    throw new Error('Processing failed');\n  }\n}\n\`\`\`\n\n#### Key Architectural Decisions:\n• **Type Safety:** Full TypeScript generic validation guarantees payload integrity.\n• **Zero Latency:** Leverages ${model.provider}'s latest streaming API.\n• **Error Boundary:** Graceful catch block with logging.`;
  }

  if (lower.includes('compare') || lower.includes('difference') || lower.includes('vs')) {
    return `### Comprehensive Comparison (${model.name})\n\n| Feature Matrix | Option Alpha | Option Beta |\n| :--- | :--- | :--- |\n| **Performance** | High throughput, sub-10ms | Balanced caching |\n| **Scalability** | Distributed across Edge | Regional compute |\n| **Cost / Efficiency** | 40% reduction | Standard rate |\n\n**Recommendation:** Based on your current context, Option Alpha offers superior scalability and architectural resilience.`;
  }

  return `### **${model.name} Analysis & Insights**\n\nThank you for your prompt regarding: *"${prompt}"*.\n\nHere are the synthesized key takeaways:\n1. **Core Concept:** Understanding the underlying requirements allows for seamless execution and zero redundant steps.\n2. **Best Practices:** Always prioritize modular architecture, clear context boundaries, and robust error handling.\n3. **Pro Tip with EchoGPT:** You can switch between Claude, GPT-4o, and DeepSeek in 1 click or compare their answers side-by-side!`;
}
