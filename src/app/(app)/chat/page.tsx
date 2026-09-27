'use client';

import React from 'react';
import ChatArea from '@/components/chat/ChatArea';
import PromptInput from '@/components/chat/PromptInput';

export default function ChatPage() {
  return (
    <div className="flex-1 flex flex-col h-[calc(100vh-4rem)] overflow-hidden">
      <ChatArea />
      <PromptInput />
    </div>
  );
}
