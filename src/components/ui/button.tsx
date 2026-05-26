import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonStyles = cva(
  "inline-flex items-center justify-center gap-2 rounded-md font-semibold tracking-tight transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--brand)] disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-[var(--brand)] text-white hover:bg-[var(--brand-deep)] shadow-sm",
        secondary:
          "bg-[var(--steel)] text-white hover:bg-[var(--steel-soft)]",
        outline:
          "border border-[var(--line)] bg-white text-[var(--steel)] hover:border-[var(--brand)] hover:text-[var(--brand)]",
        ghost: "text-[var(--steel)] hover:text-[var(--brand)]",
      },
      size: {
        sm: "h-9 px-3 text-sm",
        md: "h-11 px-5 text-sm",
        lg: "h-12 px-6 text-base",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

type Variants = VariantProps<typeof buttonStyles>;

export function Button({
  href,
  variant,
  size,
  className,
  children,
  ...props
}: Variants &
  React.ButtonHTMLAttributes<HTMLButtonElement> & { href?: string }) {
  const classes = cn(buttonStyles({ variant, size }), className);
  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
