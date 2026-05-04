import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Globe2, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS } from "@/data/navigation";
import { COMPANY } from "@/data/company";
import logo from "@/assets/logo.png";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <>
      <header
        className={`fixed inset-x-0 z-[100] mx-auto w-[96%] max-w-7xl transition-all duration-500 text-white ${scrolled
          ? "top-2 h-16 rounded-[2rem] bg-primary/80 backdrop-blur-lg border border-white/20 shadow-xl"
          : "top-4 md:top-14 h-16 md:h-20 rounded-2xl md:rounded-[2rem] bg-primary/40 backdrop-blur-md border border-white/10 shadow-lg"
          }`}
      >
        <div className="px-4 md:px-6 mx-auto flex h-full items-center justify-between gap-2 xl:gap-4 w-full">
          <Link to="/" className="group flex flex-shrink-0 items-center gap-1.5 md:gap-2">
            <img
              src={logo}
              alt={COMPANY.name}
              className={`${scrolled ? "h-9" : "h-11"} w-auto object-contain transition-all duration-500 group-hover:scale-105`}
            />
            <div className="hidden sm:block border-l border-white/30 h-8 mx-1" />
            <span className="leading-tight flex flex-col justify-center">
              <span className="block text-sm md:text-base xl:text-lg font-bold italic tracking-tight whitespace-nowrap uppercase text-white" style={{ fontFamily: "'Poppins', sans-serif" }}>
                RS <span className="text-accent">Travel and Tours</span>
              </span>
              <span className="hidden xl:block text-[10px] font-medium uppercase tracking-[0.2em] text-white/80 whitespace-nowrap">
                Visa & Travel · Islamabad
              </span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-px xl:gap-0.5">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                activeOptions={{ exact: l.to === "/" }}
                className={`group relative px-1.5 xl:px-2.5 py-2 text-[11px] xl:text-[13px] font-semibold text-white/80 hover:text-white transition-all duration-300 data-[status=active]:text-white whitespace-nowrap ${l.label === "Insurance"
                  ? "hidden 2xl:block"
                  : l.label === "Air Ticketing"
                    ? "hidden xl:block"
                    : ""
                  }`}
                activeProps={{ className: "text-white" }}
              >
                <span className="relative z-10">
                  {l.label === "Visa Services" ? (
                    <>
                      <span className="xl:hidden">Visas</span>
                      <span className="hidden xl:inline">Visa Services</span>
                    </>
                  ) : (
                    l.label
                  )}
                </span>
                {/* Hover Pill Background */}
                <span className="absolute inset-0 z-0 scale-95 rounded-full bg-white/10 opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100" />
                {/* Active/Hover Underline */}
                <span className="absolute inset-x-2 xl:inset-x-3 -bottom-1 h-0.5 origin-left scale-x-0 rounded-full bg-accent transition-transform duration-300 group-hover:scale-x-100" />
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-2 xl:gap-4 shrink-0">
            <Link
              to="/contact"
              className="relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-accent px-6 py-2.5 text-sm font-bold text-accent-foreground shadow-glow transition-all hover:shadow-elevated hover:-translate-y-0.5 active:translate-y-0 active:scale-95 group/btn"
            >
              <span className="relative z-10 flex items-center gap-2">
                Contact Us
                <ChevronRight size={16} className="transition-transform group-hover/btn:translate-x-0.5" />
              </span>
              <div className="absolute inset-0 bg-white/20 translate-y-full transition-transform group-hover/btn:translate-y-0" />
            </Link>
          </div>

          <button
            onClick={() => setOpen(true)}
            className="lg:hidden shrink-0 inline-flex h-10 w-10 md:h-11 md:w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white shadow-sm backdrop-blur-md transition-all hover:bg-white/20 active:scale-95"
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[150] bg-black/40 backdrop-blur-sm lg:hidden"
            onClick={() => setOpen(false)}
          >
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 240 }}
              className="absolute right-0 top-0 h-full w-[86%] max-w-sm bg-background shadow-elevated z-[151]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between border-b border-border px-6 py-5">
                  <div className="flex items-center gap-3">
                    <img src={logo} alt={COMPANY.name} className="h-8 w-auto" />
                    <span className="font-bold italic tracking-tight text-lg uppercase" style={{ fontFamily: "'Poppins', sans-serif" }}>
                      RS <span className="text-accent">Travel & Tours</span>
                    </span>
                  </div>
                  <button
                    onClick={() => setOpen(false)}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-xl hover:bg-muted transition-colors"
                    aria-label="Close menu"
                  >
                    <X size={20} />
                  </button>
                </div>

                <nav className="flex-1 overflow-y-auto p-4 custom-scrollbar">
                  <div className="space-y-1">
                    {NAV_LINKS.map((l, i) => (
                      <motion.div
                        key={l.to}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.03 + 0.1 }}
                      >
                        <Link
                          to={l.to}
                          activeOptions={{ exact: l.to === "/" }}
                          activeProps={{ className: "bg-primary/5 text-primary" }}
                          className="flex items-center justify-between rounded-xl px-5 py-4 text-sm font-semibold text-foreground/80 transition-colors hover:bg-muted"
                        >
                          {l.label}
                          <ChevronRight size={18} className="opacity-40" />
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </nav>

                <div className="p-6 border-t border-border bg-muted/30">
                  <Link
                    to="/contact"
                    className="flex items-center justify-center gap-2 rounded-2xl bg-accent px-4 py-4 text-sm font-bold text-accent-foreground shadow-glow transition-transform active:scale-[0.98]"
                  >
                    Contact Us <ChevronRight size={18} />
                  </Link>
                  <div className="mt-6 space-y-3">
                    <div className="text-xs font-medium text-muted-foreground flex items-center gap-2">
                      <div className="h-1 w-1 rounded-full bg-primary" /> {COMPANY.address}
                    </div>
                    <p className="text-[10px] text-muted-foreground/60 text-center uppercase tracking-widest font-bold">
                      &copy; {new Date().getFullYear()} {COMPANY.name}
                    </p>
                  </div>
                </div>
              </div>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
