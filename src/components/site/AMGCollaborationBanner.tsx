import { ExternalLink, Handshake, ShieldCheck, Globe, ArrowUpRight, CheckCircle2 } from "lucide-react";
import logo from "@/assets/logo.avif";

export function AMGCollaborationBanner() {
  return (
    <section className="container-px mx-auto max-w-7xl py-12">
      <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#090E1A] via-[#0D1527] to-[#0A1020] border border-cyan-500/20 p-8 sm:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
        {/* Glow Effects */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

        <div className="relative z-10 grid gap-8 lg:grid-cols-12 lg:items-center">
          {/* Left Column: Partnership Badges & Content */}
          <div className="lg:col-span-8 space-y-6">
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-cyan-300">
                <Handshake size={14} className="text-cyan-400" /> Official Global Collaboration
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-emerald-300">
                <ShieldCheck size={14} /> Verified Partner Network
              </span>
            </div>

            {/* Co-branded Logo Row */}
            <div className="flex items-center gap-4 pt-1">
              <div className="flex items-center justify-center p-2 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                <img src={logo} alt="RS Travel and Tours Logo" className="h-9 sm:h-11 w-auto object-contain" />
              </div>
              <span className="text-xl sm:text-2xl font-black text-cyan-400">×</span>
              <div className="flex items-center gap-3 p-2 px-3.5 rounded-2xl bg-cyan-950/40 border border-cyan-500/30 backdrop-blur-md">
                <img src="/amg-visa-logo.webp" alt="AMG Visa Official Emblem" className="h-8 sm:h-10 w-auto object-contain drop-shadow-[0_2px_8px_rgba(6,182,212,0.4)]" />
                <div className="text-left">
                  <span className="block text-xs sm:text-sm font-black text-white tracking-wider">AMG VISA</span>
                  <span className="block text-[9px] text-cyan-300/80 font-bold uppercase tracking-widest">Global Solutions</span>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight leading-tight">
                RS Travel and Tours <span className="text-cyan-400">× AMG Visa</span>
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
                We are proud to partner with <strong>AMG Visa</strong> (<a href="https://amgvisa.com" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline inline-flex items-center gap-1">amgvisa.com <ArrowUpRight size={13} /></a>) to offer an expanded global consular ecosystem. Combining 15+ years of Pakistan visa expertise with international immigration networks for expedited approvals worldwide.
              </p>
            </div>

            {/* Feature Pills */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              {[
                { title: "Expanded Global Reach", desc: "Access to broader overseas visa filing networks" },
                { title: "Priority Case Filing", desc: "Streamlined document verification & fast-track queues" },
                { title: "Unified Quality Standard", desc: "Strict embassy compliance & maximum approval rates" },
              ].map((item) => (
                <div key={item.title} className="rounded-2xl bg-white/[0.04] border border-white/10 p-3.5">
                  <div className="flex items-center gap-2 text-xs font-bold text-white mb-1">
                    <CheckCircle2 size={14} className="text-cyan-400 shrink-0" />
                    <span>{item.title}</span>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-normal">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Interactive CTA Card */}
          <div className="lg:col-span-4 flex flex-col justify-center">
            <div className="rounded-3xl border border-cyan-500/30 bg-slate-900/80 p-6 sm:p-8 backdrop-blur-xl shadow-xl text-center space-y-5 relative group">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500/20 to-primary/20 border border-cyan-400/40 p-3 group-hover:scale-105 transition-transform duration-300">
                <img src="/amg-visa-logo.webp" alt="AMG Visa" className="size-full object-contain drop-shadow-[0_4px_12px_rgba(6,182,212,0.5)]" />
              </div>

              <div>
                <p className="text-xs font-black uppercase tracking-widest text-cyan-400">Strategic Alliance</p>
                <h3 className="text-xl font-bold text-white mt-1">AMG Visa Portal</h3>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  Explore specialized international visa programs and partner services directly on the AMG Visa platform.
                </p>
              </div>

              <a
                href="https://amgvisa.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-3.5 text-xs sm:text-sm font-bold text-white shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:shadow-[0_0_30px_rgba(6,182,212,0.6)] hover:brightness-110 transition-all"
              >
                <span>Visit AMG Visa Official Website</span>
                <ExternalLink size={15} />
              </a>

              <p className="text-[10px] text-slate-500 font-medium">
                Official Collaboration • https://amgvisa.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
