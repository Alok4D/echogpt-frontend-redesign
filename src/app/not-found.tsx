import React from 'react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-background text-foreground">
      <div className="max-w-md w-full glass-panel p-8 rounded-3xl text-center space-y-4">
        <h2 className="text-4xl font-black text-primary">404</h2>
        <h3 className="text-lg font-bold text-foreground">Page Not Found</h3>
        <p className="text-xs text-muted-foreground">The page you are looking for does not exist in the EchoGPT workspace.</p>
        <Link
          href="/"
          className="inline-block px-5 py-2.5 rounded-2xl bg-primary text-white font-bold text-xs shadow-md"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
}
