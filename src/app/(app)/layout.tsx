'use client';

import React from 'react';
import { ChatProvider, useChat } from '@/context/ChatContext';
import AppSidebar from '@/components/chat/AppSidebar';
import AppHeader from '@/components/chat/AppHeader';
import UpgradeProModal from '@/components/modals/UpgradeProModal';
import PromptLibraryModal from '@/components/modals/PromptLibraryModal';
import SettingsModal from '@/components/modals/SettingsModal';

function AppLayoutInner({ children }: { children: React.ReactNode }) {
  const { isSidebarOpen } = useChat();

  return (
    <div className="min-h-screen bg-background text-foreground flex">
      {/* Sidebar Navigation */}
      <AppSidebar />

      {/* Main Content Area */}
      <div className={`flex-1 flex flex-col min-w-0 transition-all duration-300 ${
        isSidebarOpen ? 'pl-72' : 'pl-20'
      }`}>
        <AppHeader />
        <main className="flex-1 flex flex-col min-h-0 bg-muted/10">
          {children}
        </main>
      </div>

      {/* Global Application Modals */}
      <UpgradeProModal />
      <PromptLibraryModal />
      <SettingsModal />
    </div>
  );
}

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <ChatProvider>
      <AppLayoutInner>{children}</AppLayoutInner>
    </ChatProvider>
  );
}
