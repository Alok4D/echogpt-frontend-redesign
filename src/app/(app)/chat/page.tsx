'use client';

import React from 'react';
import ChatArea from '@/components/chat/ChatArea';
import PromptInput from '@/components/chat/PromptInput';
import RightHistorySidebar from '@/components/chat/RightHistorySidebar';

export default function ChatPage() {
  return (
    <div className="flex-1 flex h-[calc(100vh-4rem)] overflow-hidden">
      {/* Center Chat Area + Bottom Prompt Bar */}
      <div className="flex-1 flex flex-col min-w-0 h-full overflow-hidden">
        <ChatArea />
        <PromptInput />
      </div>

      {/* Right History Sidebar from user reference design */}
      <RightHistorySidebar />
    </div>
  );
}
