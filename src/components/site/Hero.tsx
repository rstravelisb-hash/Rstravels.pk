import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Plane, Award, Sparkles, FileText } from "lucide-react";
import heroImg from "@/assets/hero-travel.jpg";
import { SEOBlock } from "./SEOBlock";
import { COUNTRIES } from "@/data/countries-data";
import React, { Suspense } from "react";
import { CountryCard } from "./CountryCard";
import { cn } from "@/lib/utils";
const BookingWidget = React.lazy(() => import("./BookingWidget").then(m => ({ default: m.BookingWidget })));

export function Hero() {
  return (
    <section className="relative overflow-hidden min-h-[90vh] flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-bg.webp"
          alt="Scenic landscape background"
          className="h-full w-full object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-[oklch(0.18_0.05_260)]/90" />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="absolute -top-32 -left-32 h-[36rem] w-[36rem] rounded-full bg-primary-glow/20 blur-3xl animate-blob z-0" />
      <div
        className="absolute -bottom-40 -right-32 h-[36rem] w-[36rem] rounded-full bg-accent/20 blur-3xl animate-blob z-0"
        style={{ animationDelay: "3s" }}
      />

      <div className="container-px relative mx-auto pt-16 md:pt-24 lg:pt-28 pb-12">
        {/* Booking Widget Implementation - Now on Top with higher Z-index */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="relative z-50 mb-12 md:mb-16"
        >
          <div className="mb-6 text-center px-4">
            <h1 className="text-2xl xs:text-3xl font-black tracking-tight text-white md:text-4xl lg:text-5xl uppercase leading-[1.1]">
              Book Your Global <span className="gradient-text-accent">Travel Now</span>
            </h1>
            <p className="mt-2 text-sm font-medium text-white/60 tracking-[0.2em] uppercase hidden sm:block">
              Pakistan's No. 1 Travel Agency & Visit Visa Expert
            </p>
          </div>
          <Suspense fallback={<div className="h-[200px] w-full animate-pulse rounded-3xl bg-white/5 backdrop-blur-md border border-white/10" />}>
            <BookingWidget />
          </Suspense>
        </motion.div>

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="text-white"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white/90 backdrop-blur">
              <Sparkles size={12} className="text-accent-glow" /> Pakistan&apos;s Trusted Visa
              Consultancy · Islamabad
            </span>
            <h2 className="mt-5 text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
              Your Gateway to <span className="gradient-text-accent">the World</span>
            </h2>
            <p className="mt-5 max-w-xl text-base text-white/85 md:text-lg leading-relaxed">
              From Visit Visas to customized Tourism Packages, Group Tours, and All Airline Tickets — RS Travel and Tours delivers
              premium travel experiences backed by 15+ years of excellence.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-3">
              <Link
                to="/consultation"
                className="group inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-accent to-accent-glow px-6 py-3.5 text-sm font-semibold text-accent-foreground shadow-glow transition-transform hover:-translate-y-0.5 shine"
              >
                Book Free Consultation{" "}
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/profile-assessment"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/15"
              >
                <FileText size={16} /> Free Profile Assessment
              </Link>
              <Link
                to="/visa-services"
                className="hidden sm:inline-flex items-center gap-2 text-sm font-medium text-white/70 hover:text-white transition-colors ml-2"
              >
                View Services <ArrowRight size={14} />
              </Link>
            </div>

            <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4 max-w-md">
              {[
                { v: "15+", l: "Years experience" },
                { v: "98%", l: "Approval rate" },
                { v: "20K+", l: "Happy travelers" },
              ].map((s: { v: string; l: string }, idx: number) => (
                <div
                  key={s.l}
                  className={`rounded-xl border border-white/15 bg-white/5 p-3 backdrop-blur text-center ${idx === 2 ? 'col-span-2 sm:col-span-1' : ''}`}
                >
                  <p className="text-xl font-bold text-white md:text-2xl">{s.v}</p>
                  <p className="mt-0.5 text-[11px] text-white/70 leading-tight">{s.l}</p>
                </div>
              ))}
            </div>

            {/* SEO Content Block */}
            <SEOBlock />
          </motion.div>

          <div className="flex flex-col gap-6 lg:gap-8 w-full max-w-full overflow-hidden">
            <div className="flex overflow-x-auto no-scrollbar scroll-smooth w-full flex-nowrap shrink-0 ml-0 sm:ml-2">
            {/* Top Right: Country Card Slider */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="w-full overflow-hidden"
              style={{ maskImage: "linear-gradient(to right, transparent, black 2%, black 98%, transparent)", WebkitMaskImage: "linear-gradient(to right, transparent, black 2%, black 98%, transparent)" }}
            >
              <motion.div
                className="flex gap-4 w-max"
                animate={{ x: ["0%", "-50%"] }}
                transition={{ repeat: Infinity, ease: "linear", duration: 40 }}
              >
                {[...COUNTRIES, ...COUNTRIES].map((country, idx) => (
                  <div key={`slide-${country.slug}-${idx}`} className="w-[240px] md:w-[280px] flex-shrink-0">
                    <CountryCard {...country} />
                  </div>
                ))}
              </motion.div>
            </motion.div>
            </div>

            {/* Bottom Right: Hero Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src={heroImg}
                  alt="RS Travel and Tours traveler at airport with passport and tickets"
                  width={1920}
                  height={1080}
                  loading="eager"
                  fetchPriority="high"
                  className="h-[300px] w-full object-cover md:h-[360px] lg:h-[400px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute left-5 top-5 glass rounded-2xl p-3 shadow-soft"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary-glow text-white">
                      <ShieldCheck size={16} />
                    </span>
                    <div className={cn(
                      "flex items-center gap-2 px-4 sm:px-6 py-4 transition-all duration-300 relative min-w-max group",
                    )}>
                      <p className="text-[11px] font-semibold text-foreground/70">One of the best</p>
                      <p className="text-xs font-bold text-foreground">Travel Agency</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 5, delay: 1, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute right-5 bottom-5 glass rounded-2xl p-3 shadow-soft"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-accent to-accent-glow text-accent-foreground">
                      <Plane size={16} />
                    </span>
                    <div>
                      <p className="text-[11px] font-semibold text-foreground/70">Flights worldwide</p>
                      <p className="text-xs font-bold text-foreground">Best Fares Guaranteed</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 6, delay: 0.5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute right-5 top-1/3 glass rounded-2xl p-3 shadow-soft"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-400 text-white">
                      <Award size={16} />
                    </span>
                    <div>
                      <p className="text-[11px] font-semibold text-foreground/70">Success rate</p>
                      <p className="text-xs font-bold text-foreground">98% Visit Visas</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}
