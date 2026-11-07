import type { Metadata } from 'next';
import { LiveClock } from './live-clock';

export const metadata: Metadata = {
  metadataBase: new URL('https://ayushmallathakuri.com.np'),
  title: {
    default: 'Ayush Malla Thakuri',
    template: '%s | Ayush Malla Thakuri',
  },
  description: 'Software Developer and Computer Science undergraduate.',
  openGraph: {
    title: 'Ayush Malla Thakuri',
    description: 'Software Developer and Computer Science undergraduate.',
    url: 'https://ayushmallathakuri.com.np',
    siteName: 'Ayush Malla Thakuri',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased min-h-screen bg-white text-black font-sans relative">
        {/* Absolute positioning: navbar stays at top and scrolls away off-screen */}
        <header className="absolute top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
          <nav className="pointer-events-auto flex items-center gap-1 sm:gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white/80 backdrop-blur-md border border-black/[0.08] shadow-sm">
            <a
              href="#about"
              className="px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium text-zinc-600 hover:text-black hover:bg-black/[0.04] transition-all"
            >
              About
            </a>
            <a
              href="#skills"
              className="px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium text-zinc-600 hover:text-black hover:bg-black/[0.04] transition-all"
            >
              Skills
            </a>
            <a
              href="#education"
              className="px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium text-zinc-600 hover:text-black hover:bg-black/[0.04] transition-all"
            >
              Education
            </a>
            <a
              href="#work"
              className="px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium text-zinc-600 hover:text-black hover:bg-black/[0.04] transition-all"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium text-zinc-600 hover:text-black hover:bg-black/[0.04] transition-all"
            >
              Contact
            </a>
          </nav>
        </header>

        {/* Main Content */}
        <main className="max-w-4xl mx-auto px-6 pt-28 pb-20">
          {children}
        </main>

        {/* Footer */}
        <footer className="border-t border-black/[0.06] py-10 max-w-4xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500">
          <div>&copy; {new Date().getFullYear()} Ayush Malla Thakuri</div>
          <div className="flex items-center gap-2">
            <span>Dallas–Fort Worth, TX</span>
            <span>&bull;</span>
            <LiveClock />
          </div>
        </footer>
      </body>
    </html>
  );
}