import React from "react";
import { Reveal } from "./Reveal";
import { Link } from "@tanstack/react-router";
import { Home, ChevronRight } from "lucide-react";

export interface BreadcrumbCrumb {
  name: string;
  url?: string;
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
  breadcrumb,
  breadcrumbs,
  backgroundImage,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  breadcrumb?: string;
  breadcrumbs?: BreadcrumbCrumb[];
  backgroundImage?: string;
}) {
  const crumbs: BreadcrumbCrumb[] = [
    { name: "Home", url: "/" },
    ...(breadcrumbs && breadcrumbs.length > 0
      ? breadcrumbs
      : [{ name: breadcrumb || title }]),
  ];

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: c.name,
      ...(c.url ? { item: c.url.startsWith("http") ? c.url : `https://rstravels.pk${c.url}` } : {}),
    })),
  };

  return (
    <section
      className={`relative overflow-hidden ${!backgroundImage ? "bg-gradient-to-br from-primary via-[oklch(0.32_0.16_258)] to-[oklch(0.45_0.18_30)]" : "bg-black"} text-white`}
    >
      <script type="application/ld+json">{JSON.stringify(breadcrumbJsonLd)}</script>
      {!backgroundImage && (
        <>
          <div className="absolute inset-0 mesh-bg opacity-40" />
          <div className="absolute -top-24 -right-24 h-80 w-80 rounded-full bg-accent/30 blur-3xl animate-blob" />
          <div
            className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-primary-glow/30 blur-3xl animate-blob"
            style={{ animationDelay: "2s" }}
          />
        </>
      )}

      {backgroundImage && (
        <div className="absolute inset-0 z-0">
          <img
            src={backgroundImage}
            alt={title}
            className="h-full w-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent" />
        </div>
      )}

      <div className="container-px relative z-10 mx-auto max-w-7xl py-20 md:py-28">
        <Reveal>
          <nav aria-label="Breadcrumb" className="mb-4 flex flex-wrap items-center gap-1.5 text-xs text-white/70">
            {crumbs.map((c, idx) => {
              const isLast = idx === crumbs.length - 1;
              return (
                <React.Fragment key={c.name}>
                  {idx === 0 ? (
                    <Link to="/" className="inline-flex items-center gap-1 hover:text-white transition-colors">
                      <Home size={12} /> {c.name}
                    </Link>
                  ) : isLast || !c.url ? (
                    <span className="text-white font-medium">{c.name}</span>
                  ) : (
                    <Link to={c.url as any} className="hover:text-white transition-colors">
                      {c.name}
                    </Link>
                  )}
                  {!isLast && <ChevronRight size={12} className="text-white/40" />}
                </React.Fragment>
              );
            })}
          </nav>
        </Reveal>
        {eyebrow && (
          <Reveal>
            <span className="inline-block rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white/90 backdrop-blur">
              {eyebrow}
            </span>
          </Reveal>
        )}
        <Reveal delay={0.05}>
          <h1 className="mt-3 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">{title}</h1>
        </Reveal>
        {subtitle && (
          <Reveal delay={0.1}>
            <p className="mt-4 max-w-2xl text-base text-white/85 md:text-lg">{subtitle}</p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
