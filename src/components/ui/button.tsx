import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
  className?: string;
};

export default function Button({
  children,
  href,
  variant = "primary",
  className,
}: ButtonProps) {
  const styles = cn(
    "inline-flex h-14 items-center justify-center rounded-full px-8 text-base font-semibold transition-all duration-300",
    "focus:outline-none focus:ring-2 focus:ring-violet-500",
    variant === "primary" &&
      "bg-violet-600 text-white hover:-translate-y-1 hover:bg-violet-500 hover:shadow-[0_20px_50px_rgba(124,58,237,.35)]",
    variant === "secondary" &&
      "border border-white/10 bg-white/5 text-white backdrop-blur-md hover:border-violet-500/40 hover:bg-white/10 hover:-translate-y-1",
    className
  );

  if (href) {
    return (
      <Link href={href} className={styles}>
        {children}
      </Link>
    );
  }

  return <button className={styles}>{children}</button>;
}