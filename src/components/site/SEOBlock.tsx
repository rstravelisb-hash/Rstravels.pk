import { Link } from "@tanstack/react-router";
import { ShieldCheck, Award, MapPin, CheckCircle2, Clock, Globe, HelpCircle, ArrowRight } from "lucide-react";

export function SEOBlock() {
  return (
    <div className="my-16 rounded-[2.5rem] bg-[#0A0F1C] text-white/85 p-8 md:p-12 border border-slate-800 shadow-2xl relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      {/* 1. Core Authority & Topic Silo */}
      <div className="relative z-10 grid gap-8 lg:grid-cols-3">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/15 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-accent">
            <Award size={14} /> Pakistan's #1 Authority
          </div>
          <h2 className="text-2xl font-black text-white uppercase tracking-tight">
            Pakistan's Top <span className="text-accent">Visa Consultancy</span> & Travel Agency
          </h2>
          <p className="text-xs leading-relaxed text-white/70">
            <strong>RS Travel and Tours</strong> is Islamabad’s premier IATA-accredited agency providing full-scope consular assistance for UK, USA, Schengen, Canada, and Australia visit visas. Located on Fazal-e-Haq Road in Blue Area, we combine 15+ years of consular file preparation with an industry-leading 98% approval rate.
          </p>
          <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-xs text-white/80 space-y-1.5">
            <div className="flex items-center gap-2 font-bold text-emerald-400">
              <CheckCircle2 size={15} /> 100% Embassy & VFS / Gerry's Compliant
            </div>
            <p className="text-[11px] text-white/60 leading-relaxed">
              We specialize in Tourism, Family Reunion, and Business Visitor Visas, dummy flight reservations, verified hotel vouchers, and Schengen travel insurance.
            </p>
          </div>
        </div>

        {/* 2. Popular Search Clusters (Local & High Intent) */}
        <div className="space-y-4">
          <p className="font-bold text-white text-sm uppercase tracking-wider border-b border-white/10 pb-2.5 flex items-center gap-2">
            <MapPin size={15} className="text-accent" /> Islamabad & Rawalpindi Visa Hubs
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs font-medium text-white/70">
            <li><Link to="/countries/$slug" params={{ slug: "united-kingdom" }} className="hover:text-accent transition-colors flex items-center gap-1.5"><span>→</span> UK Visit Visa Islamabad</Link></li>
            <li><Link to="/countries/$slug" params={{ slug: "united-states" }} className="hover:text-accent transition-colors flex items-center gap-1.5"><span>→</span> USA B1/B2 Interview Prep</Link></li>
            <li><Link to="/countries/$slug" params={{ slug: "schengen" }} className="hover:text-accent transition-colors flex items-center gap-1.5"><span>→</span> Schengen Visa Blue Area</Link></li>
            <li><Link to="/countries/$slug" params={{ slug: "canada" }} className="hover:text-accent transition-colors flex items-center gap-1.5"><span>→</span> Canada TRV Portal Support</Link></li>
            <li><Link to="/countries/$slug" params={{ slug: "australia" }} className="hover:text-accent transition-colors flex items-center gap-1.5"><span>→</span> Australia Subclass 600</Link></li>
            <li><Link to="/countries/schengen/$country" params={{ country: "germany" }} className="hover:text-accent transition-colors flex items-center gap-1.5"><span>→</span> Germany Visa Gerry's</Link></li>
            <li><Link to="/countries/schengen/$country" params={{ country: "italy" }} className="hover:text-accent transition-colors flex items-center gap-1.5"><span>→</span> Italy Visa Gerry's ISB</Link></li>
            <li><Link to="/countries/schengen/$country" params={{ country: "spain" }} className="hover:text-accent transition-colors flex items-center gap-1.5"><span>→</span> Spain BLS Appointment</Link></li>
            <li><Link to="/countries/middle-east/$country" params={{ country: "united-arab-emirates" }} className="hover:text-accent transition-colors flex items-center gap-1.5"><span>→</span> Dubai 30/60 Days E-Visa</Link></li>
            <li><Link to="/countries/south-asia/$country" params={{ country: "thailand" }} className="hover:text-accent transition-colors flex items-center gap-1.5"><span>→</span> Thailand Tourist Visa Agent</Link></li>
          </ul>
        </div>

        {/* 3. High Demand Travel Logistics */}
        <div className="space-y-4">
          <p className="font-bold text-white text-sm uppercase tracking-wider border-b border-white/10 pb-2.5 flex items-center gap-2">
            <Globe size={15} className="text-accent" /> Ticketing, Umrah & Logistics
          </p>
          <ul className="space-y-2.5 text-xs font-medium text-white/70">
            <li className="flex items-center justify-between border-b border-white/5 pb-2">
              <Link to="/air-ticketing" className="hover:text-accent transition-colors">Cheap Flights ISB to London / Toronto</Link>
              <span className="text-[10px] text-accent font-bold px-2 py-0.5 rounded bg-accent/10 border border-accent/20">IATA LIVE</span>
            </li>
            <li className="flex items-center justify-between border-b border-white/5 pb-2">
              <Link to="/umrah" className="hover:text-accent transition-colors">Economy & 5-Star Umrah Packages 2026</Link>
              <span className="text-[10px] text-emerald-400 font-bold px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">Direct Flights</span>
            </li>
            <li className="flex items-center justify-between border-b border-white/5 pb-2">
              <Link to="/travel-insurance" className="hover:text-accent transition-colors">€30,000 Schengen Travel Insurance</Link>
              <span className="text-[10px] text-accent font-bold px-2 py-0.5 rounded bg-accent/10 border border-accent/20">Instant PDF</span>
            </li>
            <li className="flex items-center justify-between border-b border-white/5 pb-2">
              <Link to="/hotel-booking" className="hover:text-accent transition-colors">Embassy Verifiable Hotel Bookings</Link>
              <span className="text-[10px] text-white/60 font-bold px-2 py-0.5 rounded bg-white/5 border border-white/10">Free Vouchers</span>
            </li>
            <li className="flex items-center justify-between">
              <Link to="/profile-assessment" className="hover:text-accent transition-colors">Visa Success Probability AI Audit</Link>
              <span className="text-[10px] text-accent font-bold px-2 py-0.5 rounded bg-accent/10 border border-accent/20">Free 60s</span>
            </li>
          </ul>
        </div>
      </div>

      {/* 4. Semantic Entity Footprint for AI Crawlers */}
      <div className="relative z-10 mt-10 rounded-2xl bg-white/[0.04] border border-white/10 p-5 sm:p-6 text-xs text-white/70 space-y-3">
        <p className="font-bold text-white uppercase tracking-wider text-[11px] flex items-center gap-1.5">
          <HelpCircle size={14} className="text-accent" /> Why RS Travel & Tours Ranks #1 in Islamabad
        </p>
        <p className="leading-relaxed">
          Searchers looking for the <em>best visa consultant in Islamabad</em>, <em>UK visit visa filing</em>, <em>USA B1/B2 appointment booking</em>, or <em>cheap air tickets from Islamabad airport (ISB)</em> trust RS Travels for transparent guidance, zero hidden costs, and meticulous document auditing. Visit our head office at <strong>Office #6, Mezzanine Floor, Ratta Mansion, Fazal-e-Haq Road, Blue Area, Islamabad</strong> or call <a href="tel:+92512000147" className="text-accent font-bold underline">+92 51 2000147</a> for instant case evaluation.
        </p>
      </div>
    </div>
  );
}


