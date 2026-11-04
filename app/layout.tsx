import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';

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
      <body className={`${inter.className} bg-[#0b0c10] text-[#e0e2ec] min-h-screen antialiased selection:bg-amber-500 selection:text-black`}>
        {/* Engineering grid background */}
        <div className="fixed inset-0 pointer-events-none bg-[linear-gradient(to_right,#1f243015_1px,transparent_1px),linear-gradient(to_bottom,#1f243015_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

        {/* Top Navigation */}
        <header className="sticky top-0 z-50 backdrop-blur-md bg-[#0b0c10]/80 border-b border-zinc-800/50 px-6 sm:px-12 py-4 flex items-center justify-between">
          <a href="#" className="font-mono text-sm tracking-widest text-amber-500 hover:text-amber-400">
            ayush.dev
          </a>
          <nav className="flex space-x-6 text-xs sm:text-sm font-medium text-zinc-400">
            <a href="#about" className="hover:text-amber-400 transition-colors">About</a>
            <a href="#skills" className="hover:text-amber-400 transition-colors">Skills</a>
            <a href="#education" className="hover:text-amber-400 transition-colors">Education</a>
            <a href="#work" className="hover:text-amber-400 transition-colors">Projects</a>
            <a href="#contact" className="hover:text-amber-400 transition-colors">Contact</a>
          </nav>
        </header>

        {/* Left Vertical Social Dock */}
        <aside className="fixed left-6 bottom-10 z-40 hidden md:flex flex-col items-center space-y-6 text-zinc-500">
          <a
            href="https://github.com/assignment-reminder-dev/assignment-reminder-app"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="hover:text-amber-400 transition-colors"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
          </a>
          <a
            href="https://app.joinhandshake.com/profiles/fx3t8f"
            target="_blank"
            rel="noreferrer"
            aria-label="Handshake Profile"
            className="hover:text-amber-400 transition-colors font-mono font-bold text-sm"
          >
            H
          </a>
          <a
            href="mailto:ayushmallathakuri@my.unt.edu"
            aria-label="Email"
            className="hover:text-amber-400 transition-colors"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z"/></svg>
          </a>
          <div className="w-[1px] h-16 bg-zinc-800" />
        </aside>

        {/* Main Content */}
        <main className="max-w-4xl mx-auto px-6 sm:px-12 py-16 relative z-10">
          {children}
        </main>

        {/* Footer location and time */}
        <footer className="border-t border-zinc-800/80 px-6 sm:px-12 py-6 text-xs text-zinc-500 flex flex-col sm:flex-row justify-between items-center max-w-4xl mx-auto w-full gap-2 font-mono">
          <span>Ayush Malla Thakuri</span>
          <div className="flex items-center space-x-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>DFW, TX &bull; CST</span>
          </div>
        </footer>

        <Analytics />
      </body>
    </html>
  );
}