import { type ButtonHTMLAttributes, forwardRef } from "react";
import { tv, type VariantProps } from "tailwind-variants";

const buttonVariants = tv({
  base: "inline-flex items-center justify-center whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 font-mono",
  variants: {
    variant: {
      default: "bg-primary text-primary-foreground enabled:hover:bg-primary/90",
      destructive:
        "bg-destructive text-destructive-foreground enabled:hover:bg-destructive/90",
      outline:
        "border border-input bg-background enabled:hover:bg-accent enabled:hover:text-accent-foreground",
      secondary:
        "bg-secondary text-secondary-foreground enabled:hover:bg-secondary/80",
      ghost: "enabled:hover:bg-accent enabled:hover:text-accent-foreground",
      link: "text-primary underline-offset-4 enabled:hover:underline",
    },
    size: {
      default: "px-6 py-2.5 text-[13px] gap-2",
      sm: "px-4 py-2 text-xs gap-2",
      lg: "px-8 py-3 text-sm gap-2",
      xl: "px-10 py-4 text-base gap-2",
      icon: "h-9 w-9",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    return (
      <button
        className={buttonVariants({ variant, size, className })}
        ref={ref}
        {...props}
      />
    );
  },
);

Button.displayName = "Button";

export { Button, buttonVariants };
