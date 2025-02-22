import type { MDXComponents } from "next-mdx-remote-client/rsc";

import { Card } from "@/components/ui/card";
import { Video } from "@/components/ui/video";
import { Checkbox } from "@/components/ui/checkbox";

const components: MDXComponents = {
  Card,
  Video,

  h1: ({ children }) => <h1 className="text-2xl font-semibold">{children}</h1>,
  h2: ({ children }) => <h2 className="text-lg font-semibold">{children}</h2>,
  h3: ({ children }) => <h3 className="text-base font-semibold">{children}</h3>,
  h4: ({ children }) => <h4 className="text-sm font-semibold">{children}</h4>,
  h5: ({ children }) => <h5 className="text-xs font-semibold">{children}</h5>,
  h6: ({ children }) => <h6 className="text-xs font-semibold">{children}</h6>,

  strong: ({ children }) => (
    <strong className="text-foreground">{children}</strong>
  ),

  ul: ({ children }) => <ul className="space-y-1">{children}</ul>,

  li: ({ children }) => {
    const id = Math.random().toString(36).substring(2, 8);
    return (
      <li className="flex flex-row gap-2 items-center">
        <Checkbox id={id} />
        <label htmlFor={id}>{children}</label>
      </li>
    );
  },
};

export default components;
