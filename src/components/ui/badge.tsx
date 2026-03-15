import { forwardRef, type HTMLAttributes } from "react";
import { tv, type VariantProps } from "tailwind-variants";

const badgeVariants = tv({
  base: "inline-flex items-center gap-2 font-mono text-xs",
  variants: {
    variant: {
      critical: "text-accent-red",
      warning: "text-accent-amber",
      good: "text-accent-green",
      default: "text-foreground",
    },
    size: {
      default: "text-xs",
      sm: "text-[10px]",
      lg: "text-sm",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

const badgeDotVariants = tv({
  base: "h-2 w-2 rounded-full",
  variants: {
    variant: {
      critical: "bg-accent-red",
      warning: "bg-accent-amber",
      good: "bg-accent-green",
      default: "bg-foreground",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export interface BadgeRootProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

const BadgeRoot = forwardRef<HTMLDivElement, BadgeRootProps>(
  ({ className, variant, size, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={badgeVariants({ variant, size, className })}
        {...props}
      >
        {children}
      </div>
    );
  },
);

BadgeRoot.displayName = "BadgeRoot";

export interface BadgeDotProps
  extends HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeDotVariants> {}

const BadgeDot = forwardRef<HTMLSpanElement, BadgeDotProps>(
  ({ className, variant, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={badgeDotVariants({ variant, className })}
        {...props}
      />
    );
  },
);

BadgeDot.displayName = "BadgeDot";

const Badge = BadgeRoot;

export { Badge, BadgeDot, BadgeRoot, badgeDotVariants, badgeVariants };
