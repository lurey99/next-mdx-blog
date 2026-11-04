import type { MDXComponents } from 'mdx/types';
import { TVCard } from './app/tv-card';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    TVCard,
  };
}