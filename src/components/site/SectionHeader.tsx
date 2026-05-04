import { Reveal } from "./Reveal";

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  center = true,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
}) {
  return (
    <div className={`mb-16 ${center ? "text-center mx-auto max-w-3xl" : ""}`}>
      {eyebrow && (
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/10 bg-primary/5 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.15em] text-primary mb-5">
            <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" /> {eyebrow}
          </span>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2 className="text-3xl font-black tracking-tight md:text-4xl lg:text-5xl lg:leading-[1.1] text-foreground">
          {title}
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={0.1}>
          <p className="mt-5 text-base text-muted-foreground md:text-lg leading-relaxed max-w-2xl mx-auto">
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  );
}
