import { Quote, Star } from "lucide-react";

export function TestimonialCard({
  name,
  role,
  quote,
}: {
  name: string;
  role: string;
  quote: string;
}) {
  return (
    <div className="group relative flex h-full flex-col overflow-hidden rounded-[2.5rem] border border-border/40 bg-card/40 p-8 backdrop-blur-xl shadow-lg transition-all duration-300 ease-out hover:-translate-y-1.5 hover:bg-card/60 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10">
      {/* Subtle background gradient reveal on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      {/* Decorative Quote Icon with smooth animated physics */}
      <Quote
        className="absolute right-6 top-6 text-primary/5 transition-all duration-300 ease-out group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:rotate-12 group-hover:scale-110 group-hover:text-primary/20"
        size={64}
        strokeWidth={1.5}
      />

      {/* Content Wrapper - positioned relatively to sit above the absolute background layers */}
      <div className="relative z-10 flex flex-1 flex-col">
        {/* Rating Stars with slight scale on hover */}
        <div className="flex gap-1 text-accent transition-transform duration-500 origin-left group-hover:scale-105">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} size={16} fill="currentColor" className="drop-shadow-sm" />
          ))}
        </div>

        {/* Testimonial Text */}
        <p className="mt-6 flex-1 text-lg leading-relaxed text-foreground/90 italic font-medium">
          &ldquo;{quote}&rdquo;
        </p>

        {/* Footer / User Info with animated border */}
        <div className="mt-8 flex items-center gap-4 border-t border-border/40 pt-6 transition-colors duration-500 group-hover:border-primary/20">

          {/* Avatar / Initials Circle */}
          <div className="relative inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary-glow text-base font-bold text-white shadow-md ring-4 ring-background transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg group-hover:ring-primary/10">
            <span className="drop-shadow-md">
              {name
                .split(" ")
                .map((s) => s[0])
                .slice(0, 2)
                .join("")}
            </span>
          </div>

          {/* Name & Role */}
          <div className="flex flex-col">
            <p className="text-base font-bold tracking-tight text-foreground transition-colors duration-300 group-hover:text-primary">
              {name}
            </p>
            <p className="mt-0.5 text-[11px] font-bold text-muted-foreground uppercase tracking-widest">
              {role}
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
