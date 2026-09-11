import { Link } from "@tanstack/react-router";
import { Globe2, Facebook, Instagram, Phone, Mail, MapPin, ShieldCheck, ArrowUpRight, Award } from "lucide-react";
import { COMPANY } from "@/data/company";
import logo from "@/assets/logo.png";
import { cn } from "@/lib/utils";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative mt-24 overflow-hidden bg-[#0A0F1C] text-white/80">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.12),transparent_50%)]" />
      <div className="container-px mx-auto max-w-7xl py-16 relative">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-12 lg:gap-10">
          {/* Brand Section */}
          <div className="lg:col-span-4 space-y-6">
            <Link to="/" className="flex items-center gap-4 group cursor-pointer inline-flex">
              <div className="relative">
                <img src={logo} alt="RS Travel and Tours" className="h-12 w-auto brightness-0 invert group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute -inset-2 bg-primary/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black text-white tracking-tighter leading-none">RS TRAVEL</span>
                <span className="text-[10px] font-bold text-primary tracking-[0.3em] uppercase mt-1">And Tours</span>
              </div>
            </Link>
            <p className="text-sm text-white/50 leading-relaxed max-w-sm">
              Pakistan's #1 IATA-accredited visa consultancy and premier travel agency in Blue Area, Islamabad. 
              Specializing in UK, USA, Schengen, Canada, and Australia visit visas, verified dummy flight tickets, hotel vouchers, and 5-star Umrah packages.
            </p>
            <div className="flex items-center gap-3">
              {[
                { Icon: Facebook, href: COMPANY.socials.facebook, color: "hover:text-blue-500", label: "Facebook" },
                { Icon: Instagram, href: COMPANY.socials.instagram, color: "hover:text-pink-500", label: "Instagram" },
              ].map(({ Icon, href, color, label }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={cn(
                    "p-2.5 rounded-xl bg-white/5 border border-white/10 transition-all hover:bg-white/10 hover:-translate-y-1",
                    color
                  )}
                >
                  <Icon size={18} />
                </a>
              ))}
              <div className="ml-2 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold">
                <Award size={14} /> 98% Success Rate
              </div>
            </div>

            {/* Quick Consultation CTA */}
            <div className="pt-2">
              <Link
                to="/consultation"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-xs font-bold text-white shadow-glow hover:bg-primary/90 transition-all active:scale-[0.98]"
              >
                Book Free Visa Evaluation <ArrowUpRight size={15} />
              </Link>
            </div>
          </div>

          {/* Top Visa Destinations Silo */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-bold text-white uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" /> Top Visa Destinations
            </h3>
            <ul className="space-y-3">
              {[
                { n: "United Kingdom Visit Visa", to: "/countries/$slug", params: { slug: "united-kingdom" } },
                { n: "USA B1/B2 Visitor Visa", to: "/countries/$slug", params: { slug: "united-states" } },
                { n: "Canada TRV Portal Visa", to: "/countries/$slug", params: { slug: "canada" } },
                { n: "Australia Subclass 600", to: "/countries/$slug", params: { slug: "australia" } },
                { n: "Schengen Visa Hub (Europe)", to: "/countries/$slug", params: { slug: "schengen" } },
                { n: "Germany Visit Visa", to: "/countries/schengen/$country", params: { country: "germany" } },
                { n: "Italy Tourist Visa", to: "/countries/schengen/$country", params: { country: "italy" } },
                { n: "Spain BLS Tourist Visa", to: "/countries/schengen/$country", params: { country: "spain" } },
                { n: "Dubai & UAE E-Visa", to: "/countries/middle-east/$country", params: { country: "united-arab-emirates" } },
                { n: "Turkey Sticker & E-Visa", to: "/countries/europe-others/$country", params: { country: "turkey" } },
                { n: "Thailand Tourist Visa", to: "/countries/south-asia/$country", params: { country: "thailand" } },
                { n: "Malaysia E-Visa Portal", to: "/countries/south-asia/$country", params: { country: "malaysia" } },
              ].map((d) => (
                <li key={d.n}>
                  <Link
                    to={d.to as any}
                    params={d.params as any}
                    className="text-xs text-white/50 hover:text-accent transition-colors flex items-center group"
                  >
                    <span className="w-0 group-hover:w-3 h-px bg-accent transition-all mr-0 group-hover:mr-2" />
                    {d.n}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Core Services Silo */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-bold text-white uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" /> Travel & Consular Services
            </h3>
            <ul className="space-y-3">
              {[
                { label: "Visa Consultancy Services", to: "/visa-services" },
                { label: "IATA Air Ticketing Worldwide", to: "/air-ticketing" },
                { label: "Economy & 5-Star Umrah Packages", to: "/umrah" },
                { label: "Embassy Verifiable Hotel Bookings", to: "/hotel-booking" },
                { label: "€30,000 Schengen Travel Insurance", to: "/travel-insurance" },
                { label: "Passport Renewal & Attestation", to: "/passport-services" },
                { label: "Pakistan Inbound Visit Visa", to: "/pakistan-visa" },
                { label: "AI Visa Profile Assessment (Free)", to: "/profile-assessment" },
                { label: "160+ Countries Directory", to: "/countries" },
                { label: "Client Success Stories", to: "/testimonials" },
                { label: "Frequently Asked Questions", to: "/faq" },
              ].map((link) => (
                <li key={link.to}>
                  <Link to={link.to as any} className="text-xs text-white/50 hover:text-accent transition-colors flex items-center group">
                    <span className="w-0 group-hover:w-3 h-px bg-accent transition-all mr-0 group-hover:mr-2" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Office Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-xs font-bold text-white uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" /> Head Office
            </h3>
            <div className="space-y-3">
              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 text-xs text-white/70 space-y-1">
                <div className="flex items-center gap-1.5 text-accent font-bold text-[11px] uppercase tracking-wider">
                  <MapPin size={13} /> Islamabad Office
                </div>
                <p className="text-[11px] text-white/60 leading-relaxed">
                  {COMPANY.address}
                </p>
              </div>

              <a href={`tel:${COMPANY.mobile}`} className="flex items-center gap-2.5 p-3 rounded-xl bg-white/5 border border-white/10 hover:border-accent/50 transition-colors">
                <Phone size={14} className="text-accent" />
                <span className="text-xs font-bold text-white/80">{COMPANY.mobile}</span>
              </a>

              <a href={`mailto:${COMPANY.email}`} className="flex items-center gap-2.5 p-3 rounded-xl bg-white/5 border border-white/10 hover:border-accent/50 transition-colors">
                <Mail size={14} className="text-accent" />
                <span className="text-xs font-bold text-white/80 truncate">{COMPANY.email}</span>
              </a>

              <Link
                to="/contact"
                className="w-full flex items-center justify-center gap-2 rounded-xl bg-white/10 border border-white/10 px-4 py-3 text-xs font-bold text-white hover:bg-white/15 transition-all"
              >
                Contact & Directions
              </Link>
            </div>
          </div>
        </div>

        {/* Regional Quick Links Bar for Global SEO Coverage */}
        <div className="mt-12 pt-6 border-t border-white/5">
          <p className="text-[10px] font-bold text-white/40 uppercase tracking-[0.2em] mb-3">
            Explore Visa & Travel Solutions by Region:
          </p>
          <div className="flex flex-wrap gap-2 text-xs">
            <Link to="/countries/$slug" params={{ slug: "schengen" }} className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-white/60 hover:text-white hover:bg-white/10 transition-colors">
              🇪🇺 Schengen European Zone
            </Link>
            <Link to="/countries/$slug" params={{ slug: "united-kingdom" }} className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-white/60 hover:text-white hover:bg-white/10 transition-colors">
              🇬🇧 United Kingdom Visas
            </Link>
            <Link to="/countries/$slug" params={{ slug: "united-states" }} className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-white/60 hover:text-white hover:bg-white/10 transition-colors">
              🇺🇸 USA Visitor Visas
            </Link>
            <Link to="/countries/$slug" params={{ slug: "canada" }} className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-white/60 hover:text-white hover:bg-white/10 transition-colors">
              🇨🇦 Canada Visas & Super Visa
            </Link>
            <Link to="/countries/$slug" params={{ slug: "australia" }} className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-white/60 hover:text-white hover:bg-white/10 transition-colors">
              🇦🇺 Australia Subclass 600
            </Link>
            <Link to="/umrah" className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-white/60 hover:text-white hover:bg-white/10 transition-colors">
              🇸🇦 Saudi Arabia & Umrah Packages
            </Link>
            <Link to="/countries/middle-east/$country" params={{ country: "united-arab-emirates" }} className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-white/60 hover:text-white hover:bg-white/10 transition-colors">
              🇦🇪 UAE / Dubai Visas
            </Link>
            <Link to="/countries/south-asia/$country" params={{ country: "thailand" }} className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-white/60 hover:text-white hover:bg-white/10 transition-colors">
              🇹🇭 Thailand & Southeast Asia
            </Link>
            <Link to="/air-ticketing" className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-white/60 hover:text-white hover:bg-white/10 transition-colors">
              ✈️ Cheap Flights from Islamabad (ISB)
            </Link>
          </div>
        </div>

        {/* Outbound Authority Trust Network & Verification Hub */}
        <div className="mt-8 pt-6 border-t border-white/5">
          <p className="text-[10px] font-bold text-white/40 uppercase tracking-[0.2em] mb-3">
            Official Consular & Travel Verification Portals:
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-white/50">
            <a href="https://amgvisa.com" target="_blank" rel="noopener noreferrer" className="text-cyan-400 font-semibold hover:underline flex items-center gap-1">
              <span>↗</span> AMG Visa Global Partner (amgvisa.com)
            </a>
            <a href="https://www.iata.org" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors flex items-center gap-1">
              <span>↗</span> IATA Official Member
            </a>
            <a href="https://www.gov.uk/browse/visas-immigration" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors flex items-center gap-1">
              <span>↗</span> UK Visas & Immigration (UKVI)
            </a>
            <a href="https://ceac.state.gov" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors flex items-center gap-1">
              <span>↗</span> US Department of State (CEAC)
            </a>
            <a href="https://www.canada.ca/en/immigration-refugees-citizenship.html" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors flex items-center gap-1">
              <span>↗</span> IRCC Canada Immigration
            </a>
            <a href="https://immi.homeaffairs.gov.au" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors flex items-center gap-1">
              <span>↗</span> Australian Home Affairs
            </a>
            <a href="https://visa.nadra.gov.pk" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors flex items-center gap-1">
              <span>↗</span> NADRA Pakistan E-Visa
            </a>
            <a href="https://www.nusuk.sa" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors flex items-center gap-1">
              <span>↗</span> Saudi Nusuk Official Portal
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-6 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[11px] font-medium text-white/40 tracking-wider">
            © {year} <span className="text-white/70 font-bold">{COMPANY.name.toUpperCase()}</span>. ALL RIGHTS RESERVED.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs text-white/50">
            <Link to="/about" className="hover:text-accent transition-colors">About Us</Link>
            <div className="h-3 w-px bg-white/10 hidden sm:block" />
            <Link to="/contact" className="hover:text-accent transition-colors">Contact</Link>
            <div className="h-3 w-px bg-white/10 hidden sm:block" />
            <Link to="/faq" className="hover:text-accent transition-colors">FAQs</Link>
            <div className="h-3 w-px bg-white/10 hidden sm:block" />
            <Link to="/privacy-policy" className="hover:text-accent transition-colors">Privacy Policy</Link>
            <div className="h-3 w-px bg-white/10 hidden sm:block" />
            <Link to="/terms" className="hover:text-accent transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

