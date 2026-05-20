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
        className={`fixed inset-x-0 z-[100] mx-auto w-[96%] max-w-7xl transition-all duration-500 text-white ${
          scrolled
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
          </Link>

          {/* Heading added here, replacing the nav links and text */}
          <div className="flex-1 flex justify-center px-4">
            <h1 className="text-red-400 font-bold text-sm md:text-xl uppercase tracking-wider text-center drop-shadow-md">
              not secure , ssl required , contact your provider
            </h1>
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
                  </div>
                  <button
                    onClick={() => setOpen(false)}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-xl hover:bg-muted transition-colors"
                    aria-label="Close menu"
                  >
                    <X size={20} />
                  </button>
                </div>

                {/* Mobile Heading replacing the mobile nav links */}
                <nav className="flex-1 overflow-y-auto p-4 flex items-center justify-center custom-scrollbar">
                  <h2 className="text-red-500 font-bold text-lg uppercase text-center">
                    not secure , ssl required , contact your provider
                  </h2>
                </nav>

                <div className="p-6 border-t border-border bg-muted/30">
                  <div className="mt-6 space-y-3">
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
