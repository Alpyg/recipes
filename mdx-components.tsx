import { Checkbox } from "@/components/ui/checkbox";
import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="text-2xl font-semibold">{children}</h1>
    ),
    h2: ({ children }) => <h2 className="text-lg font-semibold">{children}</h2>,
    h3: ({ children }) => (
      <h3 className="text-base font-semibold">{children}</h3>
    ),
    h4: ({ children }) => <h4 className="text-sm font-semibold">{children}</h4>,
    h5: ({ children }) => <h5 className="text-xs font-semibold">{children}</h5>,
    h6: ({ children }) => <h6 className="text-xs font-semibold">{children}</h6>,

    li: ({ children }) => (
      <li>
        <Checkbox /> {children}
      </li>
    ),

    ...components,
  };
}
