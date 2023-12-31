import * as React from "react";
import { VariantProps, cva } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

/**
 * Typography Component Found From Here.
 * https://github.com/shadcn-ui/ui/pull/363
 */
const typographyVariants = cva("text-foreground", {
  variants: {
    variant: {
      h1: "scroll-m-20 text-4xl font-extrabold tracking-tight",
      h2: "scroll-m-20 text-3xl font-bold tracking-tight first:mt-0",
      h3: "scroll-m-20 text-2xl font-semibold tracking-tight",
      h4: "scroll-m-20 text-xl font-semibold tracking-tight",
      h5: "scroll-m-20 text-lg font-semibold tracking-tight",
      h6: "scroll-m-20 text-base font-semibold tracking-tight",
      p: "leading-7",
      label: "leading-7",
      div: "leading-7",
      span: "leading-7",
      blockquote: "mt-6 border-l-2 pl-6 italic",
      ul: "my-6 ml-6 list-disc [&>li]:mt-2",
      inlineCode:
        "relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold",
      lead: "text-xl text-muted-foreground",
      largeText: "text-lg font-semibold",
      smallText: "text-sm font-medium leading-none",
      mediumText: "leading-7",
      mutedText: "text-sm text-muted-foreground",
    },
  },
  defaultVariants: {
    variant: "p",
  },
});

type VariantPropType = VariantProps<typeof typographyVariants>;

const variantElementMap: Record<
  NonNullable<VariantPropType["variant"]>,
  string
> = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  p: "p",
  blockquote: "blockquote",
  inlineCode: "code",
  largeText: "div",
  smallText: "small",
  lead: "p",
  mediumText: "p",
  mutedText: "p",
  ul: "ul",
  label: "label",
  span: "span",
  div: "div",
};

export interface TypographyProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof typographyVariants> {
  asChild?: boolean;
  as?: string;
}

type HeadingTypes = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
interface HeadingProps extends React.HTMLAttributes<HTMLElement> {
  variant?: HeadingTypes;
  as?: HeadingTypes;
}

type TextAsTypes = "p" | "label" | "div" | "span";
type TextTypes = "p" | "smallText" | "mediumText" | "largeText" | "mutedText";
interface TextProps extends React.HTMLAttributes<HTMLElement> {
  variant?: TextTypes;
  as?: TextAsTypes;
}

const Typography = React.forwardRef<HTMLElement, TypographyProps>(
  ({ className, variant, as, asChild, ...props }, ref) => {
    const Comp = asChild
      ? Slot
      : as ?? (variant ? variantElementMap[variant] : undefined) ?? "div";
    return (
      <Comp
        className={cn(typographyVariants({ variant, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

Typography.displayName = "Typography";

const Heading = React.forwardRef<HTMLElement, HeadingProps>(
  ({ className, children, as = "h3", variant = "h3" }, ref) => {
    return (
      <Typography className={className} ref={ref} variant={variant} as={as}>
        {children}
      </Typography>
    );
  }
);

Heading.displayName = "Heading";

const Text = ({ className, children, as = "p", variant = "p" }: TextProps) => (
  <Typography className={className} variant={variant} as={as}>
    {children}
  </Typography>
);

export { Typography, typographyVariants, Heading, Text };
