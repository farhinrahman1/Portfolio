import * as React from "react";

import { cn } from "@/lib/utils";

const Blockquote = ({
  children,
  className,
  ...props
}: React.BlockquoteHTMLAttributes<HTMLQuoteElement>) => {
  return (
    <blockquote
      className={cn("mt-6 border-l-2 pl-6 italic", className)}
      {...props}
    >
      {children}
    </blockquote>
  );
};

const BlockquoteAuthor = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) => {
  return (
    <p
      className={cn("mt-2 text-sm text-muted-foreground", className)}
      {...props}
    >
      {children}
    </p>
  );
};

export { Blockquote, BlockquoteAuthor };
