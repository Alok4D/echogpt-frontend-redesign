export interface AIModel {
  id: string;
  name: string;
  provider: 'OpenAI' | 'Anthropic' | 'Google' | 'DeepSeek' | 'Meta' | 'Mistral';
  badge: string;
  category: 'Advanced' | 'Standard' | 'Coding' | 'Reasoning';
  description: string;
  contextWindow: string;
  speed: 'Ultra Fast' | 'Fast' | 'Balanced' | 'Deep Reasoning';
  capabilities: string[];
  color: string;
  accentBg: string;
  iconName: string;
  popular?: boolean;
}

export interface PricingPlan {
  id: string;
  name: string;
  popular?: boolean;
  priceMonthly: number;
  priceYearly: number;
  description: string;
  features: string[];
  ctaText: string;
  badge?: string;
  tokensMonthly: string;
  modelsIncluded: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'General' | 'Models' | 'Extension' | 'Billing';
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  content: string;
  rating: number;
  highlightedModel?: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant' | 'system';
  content: string;
  timestamp: string;
  modelId?: string;
  modelName?: string;
  isStreaming?: boolean;
  tokensUsed?: number;
}
