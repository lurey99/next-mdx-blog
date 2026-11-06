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
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.className} bg-black text-[#ededed] min-h-screen antialiased selection:bg-white selection:text-black`}>
        {/* Subtle Apple-style radial ambient glow */}
        <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.04),transparent_60%)]" />

        {/* Minimal Apple Glass Navigation Bar (No ayush.dev text) */}
        <header className="sticky top-0 z-50 backdrop-blur-xl bg-black/70 border-b border-white/10 px-8 sm:px-16 py-4 flex items-center justify-end">
          <nav className="flex space-x-8 text-xs sm:text-sm font-medium text-zinc-400">
            <a href="#about" className="hover:text-white transition-colors duration-200">About</a>
            <a href="#overview" className="hover:text-white transition-colors duration-200">Qualifications</a>
            <a href="#work" className="hover:text-white transition-colors duration-200">Projects</a>
            <a href="#contact" className="hover:text-white transition-colors duration-200">Contact</a>
          </nav>
        </header>

        {/* Expanded Content Width to eliminate side empty clutter */}
        <main className="max-w-6xl mx-auto px-6 sm:px-12 lg:px-16 py-16 relative z-10">
          {children}
        </main>

        {/* Apple-style clean footer */}
        <footer className="border-t border-white/10 px-6 sm:px-16 py-8 text-xs text-zinc-400 flex flex-col sm:flex-row justify-between items-center max-w-6xl mx-auto w-full gap-4">
          <div className="flex items-center space-x-3">
            <span className="font-medium text-white">Ayush Malla Thakuri</span>
            <span className="text-zinc-600">&bull;</span>
            <span className="text-zinc-400">Dallas–Fort Worth</span>
          </div>

          <div className="flex items-center space-x-2 bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-full">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <LiveClock />
          </div>
        </footer>

        <Analytics />
      </body>
    </html>
  );
}