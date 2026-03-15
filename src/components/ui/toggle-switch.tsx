import { forwardRef, type HTMLAttributes } from "react";
import { tv, type VariantProps } from "tailwind-variants";

const toggleSwitchVariants = tv({
  base: "inline-flex items-center gap-3 font-mono text-xs transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  variants: {
    size: {
      default: "text-xs",
      sm: "text-[10px]",
      lg: "text-sm",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

export interface ToggleSwitchProps
  extends Omit<HTMLAttributes<HTMLSpanElement>, "onChange">,
    VariantProps<typeof toggleSwitchVariants> {
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
}

const ToggleSwitch = forwardRef<HTMLSpanElement, ToggleSwitchProps>(
  (
    { className, size, checked, onChange, disabled, children, ...props },
    ref,
  ) => {
    const handleKeyDown = (e: React.KeyboardEvent) => {
      if (e.key === " " || e.key === "Enter") {
        e.preventDefault();
        if (!disabled) {
          onChange(!checked);
        }
      }
    };

    return (
      <span
        ref={ref}
        className={toggleSwitchVariants({ size, className })}
        role="switch"
        aria-checked={checked}
        tabIndex={disabled ? -1 : 0}
        onKeyDown={handleKeyDown}
        {...props}
      >
        <span
          className={`
            relative inline-flex h-[22px] w-[40px] shrink-0 cursor-pointer rounded-full transition-colors p-0.5
            focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring
            ${disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer"}
            ${checked ? "bg-primary" : "bg-[#2a2a2a]"}
          `}
          onClick={() => !disabled && onChange(!checked)}
          onKeyDown={(e) => {
            if (e.key === " " || e.key === "Enter") {
              e.preventDefault();
              if (!disabled) onChange(!checked);
            }
          }}
        >
          <span
            className={`
              pointer-events-none block h-4 w-4 rounded-full bg-black shadow-sm transition-transform duration-200 ease-in-out
              ${checked ? "translate-x-[18px]" : "translate-x-0"}
            `}
          />
        </span>
        {children && (
          <span className={checked ? "text-primary" : "text-[#6b7280]"}>
            {children}
          </span>
        )}
      </span>
    );
  },
);

ToggleSwitch.displayName = "ToggleSwitch";

export { ToggleSwitch, toggleSwitchVariants };
