import { ArrowUpRight, MapPin } from "lucide-react";
import { Link } from "@tanstack/react-router";

export function CountryCard({
  name,
  short,
  image,
  accent,
  slug,
}: {
  name: string;
  short: string;
  image: string;
  accent?: string;
  slug: string;
}) {
  return (
    <Link to="/countries/$slug" params={{ slug }} className="block group">
      <article className="relative h-96 overflow-hidden rounded-[2.5rem] border border-border/50 shadow-soft transition-all duration-700 hover:shadow-elevated hover:border-primary/20">
        <img
          src={image}
          alt={name}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent transition-opacity duration-500 group-hover:opacity-90" />
        
        {accent && (
          <span className="absolute left-6 top-6 inline-flex items-center gap-1.5 rounded-full bg-white/10 backdrop-blur-xl px-4 py-2 text-[10px] font-black uppercase tracking-[0.1em] text-white border border-white/20 z-10 shadow-lg">
            <MapPin size={12} className="text-accent" /> {accent}
          </span>
        )}

        <span className="absolute right-6 top-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 text-white opacity-0 -translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0 z-10 shadow-glow">
          <ArrowUpRight size={22} />
        </span>

        <div className="absolute inset-x-0 bottom-0 p-8 text-white z-10">
          <h3 className="text-3xl font-black tracking-tight transition-all duration-500 group-hover:-translate-y-2">{name}</h3>
          <p className="mt-3 text-[15px] text-white/80 font-medium leading-relaxed line-clamp-2 transition-all duration-500 group-hover:-translate-y-2 group-hover:text-white">{short}</p>
          <div className="mt-6 h-1.5 w-0 bg-accent transition-all duration-700 group-hover:w-16 rounded-full shadow-glow" />
        </div>
      </article>
    </Link>
  );
}
