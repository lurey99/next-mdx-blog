'use client';

import { useState } from 'react';

export function CopyEmail() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText('ayushmallathakuri@my.unt.edu');
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <div className="relative inline-flex items-center">
      <button
        onClick={handleCopy}
        type="button"
        className="px-6 py-3.5 bg-black hover:bg-zinc-800 text-white font-semibold text-sm rounded-full transition-all duration-200 shadow-sm hover:scale-105 active:scale-95 flex items-center space-x-2 cursor-pointer"
      >
        <span>{copied ? 'Copied to Clipboard' : 'Copy Email'}</span>
        <svg className="w-4 h-4 fill-none stroke-current" strokeWidth="2" viewBox="0 0 24 24">
          {copied ? (
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
          )}
        </svg>
      </button>

      {copied && (
        <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1 bg-black text-white text-[11px] font-mono rounded-full shadow-lg whitespace-nowrap animate-fade-in">
          ayushmallathakuri@my.unt.edu
        </span>
      )}
    </div>
  );
}