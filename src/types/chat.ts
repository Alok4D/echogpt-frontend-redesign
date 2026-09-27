import { AIModel } from './index';

export interface Message {
  id: string;
  role: 'user' | 'assistant' | 'system';
  content: string;
  timestamp: string;
  modelId?: string;
  modelName?: string;
  modelColor?: string;
  codeBlocks?: { language: string; code: string }[];
  isStreaming?: boolean;
}

export interface ChatSession {
  id: string;
  title: string;
  createdAt: string;
  updatedAt: string;
  modelId: string;
  isPinned?: boolean;
  messages: Message[];
  isDualCompare?: boolean;
  secondaryModelId?: string;
}

export interface PromptTemplate {
  id: string;
  title: string;
  category: 'Coding' | 'Writing' | 'Reasoning' | 'Productivity' | 'Academic';
  prompt: string;
  icon: string;
}
