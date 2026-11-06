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
        {/* Subtle ambient glow */}
        <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(0,0,0,0.03),transparent)]" />

        {/* Floating iOS Liquid Pill Navigation Bar */}
        <header className="sticky top-4 z-50 flex justify-center px-4">
          <nav className="flex items-center gap-1 sm:gap-2 px-3 py-1.5 rounded-full bg-white/70 backdrop-blur-2xl border border-black/10 shadow-[0_8px_32px_rgba(0,0,0,0.08)] transition-all duration-300 hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)]">
            <a
              href="#about"
              className="px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium text-zinc-600 hover:text-black hover:bg-black/[0.06] transition-all duration-200 active:scale-95"
            >
              About
            </a>
            <a
              href="#skills"
              className="px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium text-zinc-600 hover:text-black hover:bg-black/[0.06] transition-all duration-200 active:scale-95"
            >
              Skills
            </a>
            <a
              href="#education"
              className="px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium text-zinc-600 hover:text-black hover:bg-black/[0.06] transition-all duration-200 active:scale-95"
            >
              Education
            </a>
            <a
              href="#work"
              className="px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium text-zinc-600 hover:text-black hover:bg-black/[0.06] transition-all duration-200 active:scale-95"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium text-zinc-600 hover:text-black hover:bg-black/[0.06] transition-all duration-200 active:scale-95"
            >
              Contact
            </a>
          </nav>
        </header>

        {/* Main Content */}
        <main className="max-w-6xl mx-auto px-6 sm:px-12 lg:px-16 py-12 relative z-10">
          {children}
        </main>

        {/* Footer */}
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