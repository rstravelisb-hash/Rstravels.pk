import React from "react";
import { useLocation, Link } from "@tanstack/react-router";
import { 
  Handshake, 
  ShieldCheck, 
  Globe, 
  ArrowUpRight, 
  ExternalLink, 
  CheckCircle2, 
  Plane, 
  Building2, 
  ShieldPlus, 
  Sparkles, 
  Award, 
  FileCheck,
  PhoneCall,
  CalendarCheck
} from "lucide-react";
import logo from "@/assets/logo.avif";

export type BannerVariant = "visa" | "flights" | "hotels" | "insurance" | "umrah" | "general";

interface ContextualPartnershipBannerProps {
  variant?: BannerVariant;
  className?: string;
}

export function ContextualPartnershipBanner({ variant: explicitVariant, className = "" }: ContextualPartnershipBannerProps) {
  const location = useLocation();
  const pathname = location?.pathname || "";

  // Auto-detect variant from route if not explicitly provided
  const variant: BannerVariant = React.useMemo(() => {
    if (explicitVariant) return explicitVariant;
    if (pathname.startsWith("/air-ticketing")) return "flights";
    if (pathname.startsWith("/hotel-booking")) return "hotels";
    if (pathname.startsWith("/travel-insurance")) return "insurance";
    if (pathname.startsWith("/umrah")) return "umrah";
    if (pathname.startsWith("/visa-services") || pathname.startsWith("/countries") || pathname.startsWith("/pakistan-visa")) return "visa";
    return "general";
  }, [explicitVariant, pathname]);

  // Content configurations according to page context
  const bannerConfig = React.useMemo(() => {
    switch (variant) {
      case "flights":
        return {
          badge: "IATA Certified Aviation Network",
          badgeIcon: Plane,
          subBadge: "100+ Global Airlines",
          partnerName: "IATA Global Airlines Alliance",
          coBrandTag: "Aviation Network",
          titlePrefix: "RS Travel and Tours",
          titleHighlight: "× Global Airline Alliance",
          description: (
            <>
              As an accredited travel management agency, we partner directly with the world&apos;s leading aviation carriers—including <strong>Emirates, Qatar Airways, PIA, Turkish Airlines, Saudia, and British Airways</strong>—to guarantee wholesale GDS airfares, student baggage perks, and flexible flight itineraries.
            </>
          ),
          features: [
            { title: "Direct GDS Airline Inventory", desc: "Real-time seat allocation with no third-party markups" },
            { title: "Special Student Baggage", desc: "Extra 23kg-46kg baggage allowances on major routes" },
            { title: "24/7 Global Re-routing Desk", desc: "Instant date changes, cancellations & emergency rebooking" },
          ],
          ctaTitle: "Flight Booking Desk",
          ctaDesc: "Get instant discounted group, corporate, or student flight quotes from our certified ticketing specialists.",
          ctaBtnText: "Book Discounted Flight",
          ctaLink: "/air-ticketing",
          isExternal: false,
          accentColor: "from-blue-500/20 via-primary/10 to-indigo-500/20",
          borderAccent: "border-blue-500/30",
          pillColor: "text-blue-300 border-blue-400/30 bg-blue-500/10",
          tagColor: "text-blue-400",
          ctaGradient: "from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500"
        };

      case "hotels":
        return {
          badge: "Verified Hospitality Alliance",
          badgeIcon: Building2,
          subBadge: "190+ Countries",
          partnerName: "Global Hotel & Verified Voucher Network",
          coBrandTag: "Hospitality Network",
          titlePrefix: "RS Travel and Tours",
          titleHighlight: "× Global Hospitality Alliance",
          description: (
            <>
              We partner directly with leading international hotel chains—including <strong>Marriott, Hilton, Accor, IHG, and Millennium</strong>—to issue verified accommodation vouchers with live PNRs accepted by all Schengen, UK, US, and Canadian embassies worldwide.
            </>
          ),
          features: [
            { title: "100% Embassy-Verifiable Bookings", desc: "Confirmed vouchers with active hotel verification codes" },
            { title: "Free Cancellation Flexibility", desc: "Refundable hotel options aligned with visa decision dates" },
            { title: "Global Corporate Rates", desc: "Exclusive wholesale discounts across 500,000+ properties" },
          ],
          ctaTitle: "Verified Hotel Vouchers",
          ctaDesc: "Obtain official hotel reservations compliant with foreign consular documentation checklists.",
          ctaBtnText: "Search Hotel Bookings",
          ctaLink: "/hotel-booking",
          isExternal: false,
          accentColor: "from-amber-500/20 via-primary/10 to-orange-500/20",
          borderAccent: "border-amber-500/30",
          pillColor: "text-amber-300 border-amber-400/30 bg-amber-500/10",
          tagColor: "text-amber-400",
          ctaGradient: "from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500"
        };

      case "insurance":
        return {
          badge: "Authorized Direct Issuing Partner",
          badgeIcon: ShieldPlus,
          subBadge: "Embassy Approved Policies",
          partnerName: "Jubilee • Adamjee • United Insurance",
          coBrandTag: "Insurance Consortium",
          titlePrefix: "RS Travel and Tours",
          titleHighlight: "× Top Insurers Alliance",
          description: (
            <>
              As an authorized direct issuing agent in Islamabad, we partner with Pakistan&apos;s premier insurance corporations including <strong>Jubilee Life, Adamjee Insurance, and United Insurance</strong> to deliver instant QR-code verifiable policies with up to $100,000 emergency medical cover.
            </>
          ),
          features: [
            { title: "Instant QR Code Verification", desc: "Scannable and verifiable by all foreign embassies in seconds" },
            { title: "€30,000+ Schengen Compliant", desc: "Guaranteed coverage for medical, hospitalization & repatriation" },
            { title: "Zero Middleman Markups", desc: "Official direct corporate rates starting from just PKR 3,000" },
          ],
          ctaTitle: "Instant Travel Insurance",
          ctaDesc: "Generate your official embassy-approved travel health policy within 10 minutes.",
          ctaBtnText: "Get Travel Insurance Policy",
          ctaLink: "/travel-insurance",
          isExternal: false,
          accentColor: "from-emerald-500/20 via-primary/10 to-teal-500/20",
          borderAccent: "border-emerald-500/30",
          pillColor: "text-emerald-300 border-emerald-400/30 bg-emerald-500/10",
          tagColor: "text-emerald-400",
          ctaGradient: "from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500"
        };

      case "umrah":
        return {
          badge: "Saudi Nusuk Platform & Luxury Hospitality",
          badgeIcon: Sparkles,
          subBadge: "Direct Makkah & Madinah Deals",
          partnerName: "Nusuk Portal & 5-Star Haram Hotels",
          coBrandTag: "Umrah Operations",
          titlePrefix: "RS Travel and Tours",
          titleHighlight: "× Saudi Hospitality Alliance",
          description: (
            <>
              In collaboration with the <strong>Saudi Ministry of Hajj &amp; Umrah (Nusuk)</strong> and premier Haram hotel chains (Swissôtel, Fairmont Makkah, Pullman Zamzam, and Hilton), we provide seamless electronic visa processing, direct flights, and verified luxury accommodations steps from the Kaaba.
            </>
          ),
          features: [
            { title: "Instant Electronic Umrah Visas", desc: "Fast-track 24-48 hour Nusuk portal electronic visa issuance" },
            { title: "Zero-Meter Haram Stays", desc: "Guaranteed rooms in Clock Tower & Ajyad facing Masjid al-Haram" },
            { title: "VIP Ground Transfers", desc: "Private GMC & high-speed Haramain bullet train arrangements" },
          ],
          ctaTitle: "Customized Umrah Packages",
          ctaDesc: "Design your family or executive Umrah itinerary with our senior pilgrimage specialists in Islamabad.",
          ctaBtnText: "Explore Umrah Packages 2026",
          ctaLink: "/umrah",
          isExternal: false,
          accentColor: "from-yellow-500/20 via-primary/10 to-amber-500/20",
          borderAccent: "border-yellow-500/30",
          pillColor: "text-yellow-300 border-yellow-400/30 bg-yellow-500/10",
          tagColor: "text-yellow-400",
          ctaGradient: "from-yellow-600 to-amber-600 hover:from-yellow-500 hover:to-amber-500"
        };

      case "visa":
      case "general":
      default:
        return {
          badge: "Official Global Collaboration",
          badgeIcon: Handshake,
          subBadge: "Verified Partner Network",
          partnerName: "AMG Visa Global Solutions",
          coBrandTag: "Global Consular Network",
          titlePrefix: "RS Travel and Tours",
          titleHighlight: "× AMG Visa Global Network",
          description: (
            <>
              We are proud to partner with <strong>AMG Visa</strong> (<a href="https://amgvisa.com" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline inline-flex items-center gap-1 font-semibold">amgvisa.com <ArrowUpRight size={13} /></a>) to offer an expanded global consular ecosystem. Combining 15+ years of Pakistan visa expertise with international immigration networks for expedited approvals worldwide.
            </>
          ),
          features: [
            { title: "Expanded Global Reach", desc: "Access to broader overseas visa filing networks in 50+ countries" },
            { title: "Priority Case Filing", desc: "Streamlined document verification, apostille & fast-track queues" },
            { title: "Unified Quality Standard", desc: "Strict embassy compliance & verified 98% approval rates" },
          ],
          ctaTitle: "AMG Visa Official Portal",
          ctaDesc: "Explore specialized international visa programs and partner services directly on the AMG Visa platform.",
          ctaBtnText: "Visit AMG Visa Official Website",
          ctaLink: "https://amgvisa.com",
          isExternal: true,
          accentColor: "from-cyan-500/20 via-primary/10 to-blue-500/20",
          borderAccent: "border-cyan-500/30",
          pillColor: "text-cyan-300 border-cyan-400/30 bg-cyan-500/10",
          tagColor: "text-cyan-400",
          ctaGradient: "from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500"
        };
    }
  }, [variant]);

  const BadgeIcon = bannerConfig.badgeIcon;

  return (
    <section className={`container-px mx-auto max-w-7xl py-10 my-4 ${className}`} aria-label="Official Strategic Partnerships">
      <div className={`relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#090E1A] via-[#0D1527] to-[#0A1020] border ${bannerConfig.borderAccent} p-7 sm:p-10 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.5)]`}>
        
        {/* Ambient Glows */}
        <div className={`absolute top-0 right-0 w-96 h-96 bg-gradient-to-br ${bannerConfig.accentColor} rounded-full blur-[100px] pointer-events-none`} />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

        <div className="relative z-10 grid gap-8 lg:grid-cols-12 lg:items-center">
          
          {/* Left Column: Contextual Partnership Details */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Badges Row */}
            <div className="flex flex-wrap items-center gap-3">
              <span className={`inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1 text-xs font-bold uppercase tracking-wider ${bannerConfig.pillColor}`}>
                <BadgeIcon size={14} /> {bannerConfig.badge}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-emerald-300">
                <ShieldCheck size={14} /> {bannerConfig.subBadge}
              </span>
            </div>

            {/* Co-branded Logo & Badge Row */}
            <div className="flex flex-wrap items-center gap-3.5 pt-1">
              <div className="flex items-center justify-center p-2 px-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                <img src={logo} alt="RS Travel and Tours Official Logo" className="h-8 sm:h-10 w-auto object-contain" />
              </div>
              
              <span className={`text-lg sm:text-xl font-black ${bannerConfig.tagColor}`}>×</span>
              
              {variant === "visa" || variant === "general" ? (
                <div className="flex items-center gap-3 p-2 px-3.5 rounded-2xl bg-cyan-950/40 border border-cyan-500/30 backdrop-blur-md">
                  <img src="/amg-visa-logo.webp" alt="AMG Visa Official Emblem" className="h-7 sm:h-9 w-auto object-contain drop-shadow-[0_2px_8px_rgba(6,182,212,0.4)]" />
                  <div className="text-left">
                    <span className="block text-xs sm:text-sm font-black text-white tracking-wider">AMG VISA</span>
                    <span className="block text-[9px] text-cyan-300/80 font-bold uppercase tracking-widest">Global Solutions</span>
                  </div>
                </div>
              ) : (
                <div className="flex items-center gap-2.5 p-2 px-3.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                  <div className={`flex size-8 items-center justify-center rounded-xl bg-gradient-to-br ${bannerConfig.accentColor} border ${bannerConfig.borderAccent}`}>
                    <BadgeIcon size={16} className={bannerConfig.tagColor} />
                  </div>
                  <div className="text-left">
                    <span className="block text-xs sm:text-sm font-black text-white tracking-wider uppercase">{bannerConfig.partnerName}</span>
                    <span className={`block text-[9px] font-bold uppercase tracking-widest ${bannerConfig.tagColor}`}>{bannerConfig.coBrandTag}</span>
                  </div>
                </div>
              )}
            </div>

            {/* Title & Description */}
            <div className="space-y-3">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight leading-tight">
                {bannerConfig.titlePrefix} <span className={bannerConfig.tagColor}>{bannerConfig.titleHighlight}</span>
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
                {bannerConfig.description}
              </p>
            </div>

            {/* Feature Pills */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              {bannerConfig.features.map((item) => (
                <div key={item.title} className="rounded-2xl bg-white/[0.04] border border-white/10 p-3.5 hover:bg-white/[0.07] transition-colors">
                  <div className="flex items-center gap-2 text-xs font-bold text-white mb-1">
                    <CheckCircle2 size={14} className={`${bannerConfig.tagColor} shrink-0`} />
                    <span>{item.title}</span>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-normal">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Interactive CTA Card */}
          <div className="lg:col-span-4 flex flex-col justify-center">
            <div className={`rounded-3xl border ${bannerConfig.borderAccent} bg-slate-900/80 p-6 sm:p-8 backdrop-blur-xl shadow-xl text-center space-y-5 relative group`}>
              
              <div className={`mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br ${bannerConfig.accentColor} border ${bannerConfig.borderAccent} p-3 group-hover:scale-105 transition-transform duration-300`}>
                {variant === "visa" || variant === "general" ? (
                  <img src="/amg-visa-logo.webp" alt="AMG Visa" className="size-full object-contain drop-shadow-[0_4px_12px_rgba(6,182,212,0.5)]" />
                ) : (
                  <BadgeIcon size={36} className={bannerConfig.tagColor} />
                )}
              </div>

              <div>
                <p className={`text-xs font-black uppercase tracking-widest ${bannerConfig.tagColor}`}>
                  {variant === "visa" || variant === "general" ? "Strategic Alliance" : "Official Partnership"}
                </p>
                <h3 className="text-xl font-bold text-white mt-1">{bannerConfig.ctaTitle}</h3>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  {bannerConfig.ctaDesc}
                </p>
              </div>

              {bannerConfig.isExternal ? (
                <a
                  href={bannerConfig.ctaLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r ${bannerConfig.ctaGradient} px-5 py-3.5 text-xs sm:text-sm font-bold text-white shadow-lg transition-all`}
                >
                  <span>{bannerConfig.ctaBtnText}</span>
                  <ExternalLink size={15} />
                </a>
              ) : (
                <Link
                  to={bannerConfig.ctaLink as any}
                  className={`inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r ${bannerConfig.ctaGradient} px-5 py-3.5 text-xs sm:text-sm font-bold text-white shadow-lg transition-all`}
                >
                  <span>{bannerConfig.ctaBtnText}</span>
                  <ArrowUpRight size={15} />
                </Link>
              )}

              <p className="text-[10px] text-slate-500 font-medium">
                {variant === "visa" || variant === "general" ? "Official Collaboration • https://amgvisa.com" : "Verified Partner Channel • RS Travel and Tours"}
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
