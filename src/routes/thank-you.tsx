import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2, Phone, MessageSquare, ArrowRight, Sparkles, MapPin, Plane } from "lucide-react";
import { COMPANY } from "@/data/company";

export const Route = createFileRoute("/thank-you")({
  head: () => ({
    meta: [
      { title: "Thank You — RS Travel and Tours | Islamabad" },
      { name: "description", content: "Thank you for reaching out to RS Travel and Tours. Our senior visa consultant will contact you shortly." },
      { name: "robots", content: "index, follow" },
    ],
    links: [
      { rel: "canonical", href: "https://www.rstravels.pk/thank-you" },
    ],
  }),
  component: ThankYouPage,
});

function ThankYouPage() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0f1d] px-4 py-20">
      {/* Ambient background glows */}
      <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-primary/20 blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-emerald-500/20 blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      <div className="relative z-10 max-w-2xl text-center px-6 sm:px-10 py-12 sm:py-16 rounded-[2.5rem] bg-slate-900/70 backdrop-blur-2xl border border-slate-700/50 shadow-2xl">
        {/* Animated Success Badge */}
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 shadow-[0_0_30px_rgba(16,185,129,0.3)] animate-scale-in">
          <CheckCircle2 size={44} className="animate-pulse" />
        </div>

        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-black uppercase tracking-widest text-emerald-400 mb-4">
          <CheckCircle2 size={13} />
          Inquiry Successfully Received
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white uppercase leading-tight">
          Thank You for <span className="text-accent">Choosing RS Travels</span>
        </h1>

        <p className="mt-4 text-sm sm:text-base text-slate-300 max-w-lg mx-auto leading-relaxed">
          Your travel enquiry has been routed to our senior visa and flight desk in Blue Area, Islamabad. One of our specialists will evaluate your requirements and contact you within <strong className="text-white font-bold">1 business hour</strong>.
        </p>

        {/* Action card for immediate assistance */}
        <div className="mt-8 p-5 rounded-2xl bg-white/5 border border-white/10 text-left">
          <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">Need Instant Confirmation?</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <a
              href={`https://wa.me/${COMPANY.whatsapp.replace(/\D/g, "")}?text=Hi%20RS%20Travels,%20I%20just%20submitted%20a%20form%20on%20your%20website`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-3 rounded-xl bg-[#25D366]/20 border border-[#25D366]/30 text-emerald-300 hover:bg-[#25D366]/30 transition-all font-semibold text-xs"
            >
              <MessageSquare size={16} className="text-[#25D366]" />
              <span>Chat directly on WhatsApp</span>
            </a>

            <a
              href={`tel:${COMPANY.mobile.replace(/\s/g, "")}`}
              className="flex items-center gap-3 p-3 rounded-xl bg-blue-500/20 border border-blue-500/30 text-blue-300 hover:bg-blue-500/30 transition-all font-semibold text-xs"
            >
              <Phone size={16} className="text-blue-400" />
              <span>Call: {COMPANY.mobile}</span>
            </a>
          </div>
        </div>

        {/* Office details */}
        <div className="mt-6 flex items-center justify-center gap-2 text-xs font-medium text-slate-400">
          <MapPin size={14} className="text-accent" />
          <span>{COMPANY.address}</span>
        </div>

        {/* Return buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            to="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-accent px-8 py-3.5 text-sm font-bold text-accent-foreground shadow-glow hover:shadow-elevated transition-all hover:-translate-y-0.5"
          >
            Back to Homepage <ArrowRight size={16} />
          </Link>
          <Link
            to="/visa-services"
            className="w-full sm:w-auto inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-8 py-3.5 text-sm font-bold text-white hover:bg-white/10 transition-all"
          >
            Explore Visa Services
          </Link>
        </div>
      </div>
    </div>
  );
}
