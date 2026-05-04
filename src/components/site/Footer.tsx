import { Link } from "@tanstack/react-router";
import { Globe2, Facebook, Instagram, Linkedin, Twitter, Phone, Mail, MapPin } from "lucide-react";
import { COMPANY } from "@/data/company";
import logo from "@/assets/logo.png";
import { cn } from "@/lib/utils";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative mt-24 overflow-hidden bg-[#0A0F1C] text-white/80">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.1),transparent_50%)]" />
      <div className="container-px mx-auto max-w-7xl py-20 relative">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-12 lg:gap-16">
          {/* Brand Section */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-4 group cursor-default">
              <div className="relative">
                <img src={logo} alt={COMPANY.name} className="h-12 w-auto brightness-0 invert group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute -inset-2 bg-primary/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black text-white tracking-tighter leading-none">RS TRAVEL</span>
                <span className="text-[10px] font-bold text-primary tracking-[0.3em] uppercase mt-1">And Tours</span>
              </div>
            </div>
            <p className="text-sm text-white/50 leading-relaxed max-w-sm">
              Pakistan's leading travel agency specializing in premium tourism packages,
              global visit visa assistance, and worldwide air ticketing. We turn your
              travel dreams into reality with 98% success rate.
            </p>
            <div className="flex gap-4">
              {[
                { Icon: Facebook, href: COMPANY.socials.facebook, color: "hover:text-blue-500" },
                { Icon: Instagram, href: COMPANY.socials.instagram, color: "hover:text-pink-500" },

              ].map(({ Icon, href, color }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "p-2.5 rounded-xl bg-white/5 border border-white/10 transition-all hover:bg-white/10 hover:-translate-y-1",
                    color
                  )}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Destinations */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold text-white uppercase tracking-[0.2em] mb-8">Destinations</h4>
            <ul className="space-y-4">
              {[
                { n: "United States", s: "united-states" },
                { n: "United Kingdom", s: "united-kingdom" },
                { n: "Schengen Area", s: "schengen" },
                { n: "Canada", s: "canada" },
                { n: "Australia", s: "australia" },
              ].map((d) => (
                <li key={d.s}>
                  <Link
                    to="/countries/$slug"
                    params={{ slug: d.s }}
                    className="text-sm text-white/40 hover:text-primary transition-colors flex items-center group"
                  >
                    <span className="w-0 group-hover:w-4 h-px bg-primary transition-all mr-0 group-hover:mr-2" />
                    {d.n}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold text-white uppercase tracking-[0.2em] mb-8">Explore</h4>
            <ul className="space-y-4">
              {[
                { label: "About Us", to: "/about" },
                { label: "Our Services", to: "/countries" },
                { label: "Air Ticketing", to: "/air-ticketing" },
                { label: "Hotel Booking", to: "/hotel-booking" },
                { label: "Testimonials", to: "/testimonials" },
              ].map((link) => (
                <li key={link.to}>
                  <Link to={link.to as any} className="text-sm text-white/40 hover:text-primary transition-colors flex items-center group">
                    <span className="w-0 group-hover:w-4 h-px bg-primary transition-all mr-0 group-hover:mr-2" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div className="lg:col-span-4 space-y-8">
            <h4 className="text-xs font-bold text-white uppercase tracking-[0.2em]">Get in Touch</h4>
            <div className="space-y-4">
              <div className="flex gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 group hover:border-primary/50 transition-colors">
                <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin size={20} className="text-primary" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold text-white/30 uppercase tracking-widest">Head Office</span>
                  <span className="text-xs text-white/70 leading-relaxed">{COMPANY.address}</span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a href={`tel:${COMPANY.mobile}`} className="flex items-center gap-3 p-3 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/50 transition-colors">
                  <Phone size={16} className="text-primary" />
                  <span className="text-xs font-bold">{COMPANY.mobile}</span>
                </a>
                <a href={`mailto:${COMPANY.email}`} className="flex items-center gap-3 p-3 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/50 transition-colors">
                  <Mail size={16} className="text-primary" />
                  <span className="text-xs font-bold truncate">Email Us</span>
                </a>
              </div>
            </div>

            <Link
              to="/consultation"
              className="w-full flex items-center justify-center gap-2 rounded-2xl bg-primary px-6 py-4 text-sm font-bold text-white shadow-glow hover:bg-primary/90 transition-all active:scale-[0.98]"
            >
              Start Your Journey
              <Globe2 size={18} />
            </Link>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-[11px] font-medium text-white/30 tracking-wider">
            © {year} <span className="text-white/60 font-bold">{COMPANY.name.toUpperCase()}</span>. ALL RIGHTS RESERVED.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-[10px] font-bold text-white/20 uppercase tracking-[0.3em]">Authorized IATA Agent</span>
            <div className="h-4 w-px bg-white/10 hidden sm:block" />
            <span className="text-[10px] font-bold text-white/20 uppercase tracking-[0.3em]">Crafted in Islamabad</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
