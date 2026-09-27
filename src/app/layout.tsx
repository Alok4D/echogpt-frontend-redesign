import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/context/ThemeContext';

export const metadata: Metadata = {
  title: 'EchoGPT - All-in-One Multi-AI Workspace & Chrome Extension',
  description: 'Unify ChatGPT, Claude 3.5 Sonnet, Gemini 1.5 Pro, and DeepSeek R1 into one seamless workspace and browser sidebar. Side-by-side AI comparisons, prompt library, and instant workflow automation.',
  keywords: ['EchoGPT', 'Multi AI Chat', 'Claude 3.5 Sonnet', 'GPT-4o', 'DeepSeek R1', 'Gemini Pro', 'Chrome Extension AI', 'AI Comparison'],
  authors: [{ name: 'AppifyDevs' }],
  openGraph: {
    title: 'EchoGPT - Supercharge Your Workflow with Multi-AI Ecosystem',
    description: 'Compare AI models side-by-side, access smart browser sidebar, and boost productivity with unified AI.',
    url: 'https://echogpt.live',
    siteName: 'EchoGPT',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="min-h-screen bg-background text-foreground antialiased selection:bg-primary selection:text-white">
        <ThemeProvider>
          {children}
          <LiveSidePanelWidget />
        </ThemeProvider>
      </body>
    </html>
  );
}
