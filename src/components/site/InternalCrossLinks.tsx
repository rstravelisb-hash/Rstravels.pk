import { Link } from "@tanstack/react-router";
import { Plane, Building2, ShieldCheck, Sparkles, FileText, Globe2, ArrowRight, CheckCircle2, Award } from "lucide-react";

interface DestinationCrossLinksProps {
  countryName: string;
  countrySlug?: string;
  isSchengen?: boolean;
}

export function DestinationCrossLinks({ countryName, countrySlug, isSchengen }: DestinationCrossLinksProps) {
  return (
    <div className="my-16 rounded-[2.5rem] bg-[#0A0F1C] p-6 sm:p-10 border border-slate-800 shadow-2xl relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-primary/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-6 mb-6">
        <div>
          <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-accent mb-1">
            <Sparkles size={13} /> Complete Your {countryName} Application
          </span>
          <h3 className="text-xl sm:text-2xl font-black text-white">
            Essential Consular & Travel Add-Ons for {countryName}
          </h3>
        </div>
        <Link
          to="/profile-assessment"
          className="inline-flex items-center gap-2 self-start md:self-auto rounded-xl bg-accent px-4 py-2.5 text-xs font-bold text-slate-950 hover:bg-accent/90 transition-all shadow-glow"
        >
          Check Visa Approval Odds <ArrowRight size={14} />
        </Link>
      </div>

      <div className="relative z-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {/* 1. Flight Itinerary */}
        <Link
          to="/air-ticketing"
          className="group rounded-2xl border border-slate-800 bg-slate-900/60 p-4 transition-all duration-300 hover:bg-slate-800/80 hover:border-primary/50"
        >
          <div className="flex items-center gap-3 mb-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/20 text-primary group-hover:scale-110 transition-transform">
              <Plane size={18} />
            </div>
            <div>
              <span className="text-[10px] font-bold text-accent uppercase tracking-wider block">Embassy Compliant</span>
              <h4 className="text-sm font-bold text-white group-hover:text-primary transition-colors">Flight Reservation</h4>
            </div>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">
            Verifiable round-trip flight booking with PNR for {countryName} visa application.
          </p>
        </Link>

        {/* 2. Hotel Booking */}
        <Link
          to="/hotel-booking"
          className="group rounded-2xl border border-slate-800 bg-slate-900/60 p-4 transition-all duration-300 hover:bg-slate-800/80 hover:border-accent/50"
        >
          <div className="flex items-center gap-3 mb-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent/20 text-accent group-hover:scale-110 transition-transform">
              <Building2 size={18} />
            </div>
            <div>
              <span className="text-[10px] font-bold text-accent uppercase tracking-wider block">Free Vouchers</span>
              <h4 className="text-sm font-bold text-white group-hover:text-accent transition-colors">Hotel Bookings</h4>
            </div>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">
            Confirmed hotel voucher matching your {countryName} itinerary with free cancellation.
          </p>
        </Link>

        {/* 3. Travel Insurance */}
        <Link
          to="/travel-insurance"
          className="group rounded-2xl border border-slate-800 bg-slate-900/60 p-4 transition-all duration-300 hover:bg-slate-800/80 hover:border-emerald-500/50"
        >
          <div className="flex items-center gap-3 mb-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-400 group-hover:scale-110 transition-transform">
              <ShieldCheck size={18} />
            </div>
            <div>
              <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider block">
                {isSchengen ? "€30,000 Mandatory" : "Worldwide Cover"}
              </span>
              <h4 className="text-sm font-bold text-white group-hover:text-emerald-400 transition-colors">Travel Insurance</h4>
            </div>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">
            Instant embassy-approved insurance policy covering COVID-19 & emergency medical.
          </p>
        </Link>

        {/* 4. Passport & Attestation */}
        <Link
          to="/passport-services"
          className="group rounded-2xl border border-slate-800 bg-slate-900/60 p-4 transition-all duration-300 hover:bg-slate-800/80 hover:border-purple-500/50"
        >
          <div className="flex items-center gap-3 mb-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-purple-500/20 text-purple-400 group-hover:scale-110 transition-transform">
              <FileText size={18} />
            </div>
            <div>
              <span className="text-[10px] font-bold text-purple-400 uppercase tracking-wider block">MOFA & NADRA</span>
              <h4 className="text-sm font-bold text-white group-hover:text-purple-400 transition-colors">Passport & FRC</h4>
            </div>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">
            Fast-track passport renewal, FRC/MRC apostille, and official certified translations.
          </p>
        </Link>
      </div>

      {/* Cross-Link Other Popular Visa Hubs */}
      <div className="relative z-10 mt-8 pt-6 border-t border-slate-800">
        <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
          Explore Other Popular Visa Destinations:
        </p>
        <div className="flex flex-wrap gap-2 text-xs">
          <Link to="/countries/$slug" params={{ slug: "united-kingdom" }} className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition-colors">
            🇬🇧 UK Visit Visa
          </Link>
          <Link to="/countries/$slug" params={{ slug: "united-states" }} className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition-colors">
            🇺🇸 USA B1/B2 Visa
          </Link>
          <Link to="/countries/$slug" params={{ slug: "schengen" }} className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition-colors">
            🇪🇺 Schengen Europe Hub
          </Link>
          <Link to="/countries/$slug" params={{ slug: "canada" }} className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition-colors">
            🇨🇦 Canada Visitor Visa
          </Link>
          <Link to="/countries/$slug" params={{ slug: "australia" }} className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition-colors">
            🇦🇺 Australia Subclass 600
          </Link>
          <Link to="/umrah" className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition-colors">
            🇸🇦 Saudi Umrah Packages
          </Link>
          <Link to="/countries/middle-east/$country" params={{ country: "united-arab-emirates" }} className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition-colors">
            🇦🇪 Dubai E-Visa
          </Link>
          <Link to="/countries/europe-others/$country" params={{ country: "turkey" }} className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition-colors">
            🇹🇷 Turkey Sticker Visa
          </Link>
          <Link to="/countries/south-asia/$country" params={{ country: "thailand" }} className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition-colors">
            🇹🇭 Thailand E-Visa
          </Link>
          <Link to="/countries/south-asia/$country" params={{ country: "malaysia" }} className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition-colors">
            🇲🇾 Malaysia E-Visa
          </Link>
        </div>
      </div>
    </div>
  );
}

export function ServiceCrossLinksHub({ currentService }: { currentService?: string }) {
  const services = [
    { title: "Visa Consultancy Services", to: "/visa-services", desc: "UK, USA, Canada, Schengen & Australia visit visas with 98% approval.", tag: "Consular Filing" },
    { title: "IATA Air Ticketing", to: "/air-ticketing", desc: "Instant worldwide flight bookings & verifiable dummy tickets for visas.", tag: "Live GDS" },
    { title: "Umrah Packages 2026", to: "/umrah", desc: "Economy to 5-star luxury Umrah packages with Haram-facing hotels & visa.", tag: "Direct Flights" },
    { title: "Embassy Hotel Bookings", to: "/hotel-booking", desc: "Official hotel reservation vouchers with free cancellation for embassy submission.", tag: "Instant Voucher" },
    { title: "Schengen Travel Insurance", to: "/travel-insurance", desc: "€30,000 embassy-compliant travel insurance covering medical emergencies.", tag: "Instant PDF" },
    { title: "Passport & NADRA Attestation", to: "/passport-services", desc: "Urgent passport renewal, FRC/MRC verification, and MOFA legal attestation.", tag: "Fast Track" },
    { title: "Pakistan Inbound Visa", to: "/pakistan-visa", desc: "NADRA Pakistan Online Visa System support for foreign nationals & overseas.", tag: "E-Visa Portal" },
    { title: "AI Visa Assessment Tool", to: "/profile-assessment", desc: "Free 60-second consular algorithm scoring your visa approval probability.", tag: "100% Free" },
  ];

  const filtered = services.filter((s) => s.to !== currentService);

  return (
    <div className="my-16 rounded-[2.5rem] bg-[#0A0F1C] p-6 sm:p-10 border border-slate-800 shadow-2xl relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-primary/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 border-b border-slate-800 pb-4 mb-6">
        <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-accent mb-1">
          <Globe2 size={13} /> Complete Travel Solutions
        </span>
        <h3 className="text-xl sm:text-2xl font-black text-white">
          Explore Companion Travel & Consular Services
        </h3>
        <p className="text-xs text-slate-300 mt-1">
          RS Travel and Tours is your single-window partner for international flights, visa documentation, insurance, and hotel vouchers.
        </p>
      </div>

      <div className="relative z-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.slice(0, 6).map((s) => (
          <Link
            key={s.to}
            to={s.to as any}
            className="group rounded-2xl border border-slate-800 bg-slate-900/60 p-5 transition-all duration-300 hover:bg-slate-800/80 hover:border-accent/50 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="text-[10px] font-bold text-accent uppercase tracking-wider px-2 py-0.5 rounded-full bg-accent/10 border border-accent/20">
                  {s.tag}
                </span>
                <ArrowRight size={14} className="text-slate-400 group-hover:text-accent group-hover:translate-x-1 transition-all" />
              </div>
              <h4 className="text-sm font-bold text-white group-hover:text-accent transition-colors mb-1">
                {s.title}
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                {s.desc}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
