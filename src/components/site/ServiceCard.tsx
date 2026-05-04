import type { LucideIcon } from "lucide-react";
import { ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";

export function ServiceCard({
  icon: Icon,
  title,
  desc,
  to,
}: {
  icon: LucideIcon;
  title: string;
  desc: string;
  to?: string;
}) {
  const inner = (
    <div className="relative h-full overflow-hidden rounded-3xl border border-border bg-card p-7 sm:p-9 transition-all duration-500 hover:shadow-elevated hover:border-primary/20 group-hover:-translate-y-1.5 flex flex-col">
      <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-primary/5 blur-2xl transition-all duration-700 group-hover:scale-150 group-hover:bg-primary/10" />
      <span className="relative inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary text-primary shadow-sm transition-all duration-500 group-hover:scale-110 group-hover:bg-primary group-hover:text-white group-hover:shadow-glow group-hover:rotate-3">
        <Icon size={28} strokeWidth={2} />
      </span>
      <h3 className="relative mt-6 text-xl font-bold tracking-tight text-foreground transition-colors group-hover:text-primary leading-snug">{title}</h3>
      <p className="relative mt-3 text-[15px] text-muted-foreground font-medium leading-relaxed flex-grow">{desc}</p>
      {to && (
        <span className="relative mt-6 inline-flex items-center gap-2 text-sm font-bold text-primary transition-all group-hover:gap-3 group-hover:text-accent">
          Explore Service{" "}
          <ArrowRight size={18} className="transition-transform" />
        </span>
      )}
    </div>
  );
  return to ? (
    <Link to={to} className="group block h-full">
      {inner}
    </Link>
  ) : (
    <div className="group h-full">{inner}</div>
  );
}
