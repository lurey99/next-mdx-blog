import type { MDXComponents } from 'mdx/types';
import { TVCard } from './app/tv-card';
import { CopyEmail } from './app/copy-email';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    TVCard,
    CopyEmail,
  };
}