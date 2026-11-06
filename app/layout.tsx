import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import { LiveClock } from './live-clock';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://ayushmallathakuri.com.np'),
  title: {
    default: 'Ayush Malla Thakuri',
    template: '%s | Ayush Malla Thakuri',
  },
  description: 'Ayush Malla Thakuri - Computer Science student at UNT, Software Developer.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-white text-black min-h-screen antialiased selection:bg-black selection:text-white`}>
        {/* Subtle Apple light ambient radial glow */}
        <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(0,0,0,0.03),transparent)]" />

        {/* Minimal Navigation Bar */}
        <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/80 border-b border-black/[0.06] px-8 sm:px-16 py-4 flex items-center justify-end">
          <nav className="flex space-x-8 text-xs sm:text-sm font-medium text-zinc-600">
            <a href="#about" className="hover:text-black transition-colors duration-200">About</a>
            <a href="#skills" className="hover:text-black transition-colors duration-200">Skills</a>
            <a href="#education" className="hover:text-black transition-colors duration-200">Education</a>
            <a href="#work" className="hover:text-black transition-colors duration-200">Projects</a>
            <a href="#contact" className="hover:text-black transition-colors duration-200">Contact</a>
          </nav>
        </header>

        {/* Main Content */}
        <main className="max-w-6xl mx-auto px-6 sm:px-12 lg:px-16 py-16 relative z-10">
          {children}
        </main>

        {/* Apple-style Footer */}
        <footer className="border-t border-black/[0.08] px-6 sm:px-16 py-8 text-xs text-zinc-500 flex flex-col sm:flex-row justify-between items-center max-w-6xl mx-auto w-full gap-4">
          <div className="flex items-center space-x-3">
            <span className="font-semibold text-black">Ayush Malla Thakuri</span>
            <span className="text-zinc-300">&bull;</span>
            <span className="text-zinc-600">Dallas–Fort Worth</span>
          </div>

          <div className="flex items-center space-x-2 bg-black/[0.04] border border-black/[0.08] px-3.5 py-1.5 rounded-full">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <LiveClock />
          </div>
        </footer>

        <Analytics />
      </body>
    </html>
  );
}