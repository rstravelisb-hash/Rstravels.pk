import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { COMPANY } from "@/data/company";

export function TopBar() {
  const now = new Date();
  const day = now.getDay();
  const hour = now.getHours();
  const isOpen = day !== 0 && hour >= 10 && hour < 18;

  return (
    <div className={`hidden md:block text-primary-foreground text-xs py-2.5 transition-colors duration-500 bg-[#0a2351]`}>
      <div className="px-4 md:px-6 mx-auto flex max-w-7xl items-center justify-between">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 border border-white/10 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${isOpen ? "bg-green-300" : "bg-red-400"}`}></span>
              <span className={`relative inline-flex rounded-full h-2 w-2 ${isOpen ? "bg-green-400" : "bg-red-500"}`}></span>
            </span>
            <span className="font-semibold tracking-tight">{isOpen ? "Open Now" : "Closed"}</span>
            <span className="opacity-40">|</span>
            <span className="italic opacity-95 font-bold tracking-wider">Welcome to {COMPANY.name}</span>
          </div>
          
          <div className="flex items-center gap-5 opacity-90">
            <span className="inline-flex items-center gap-1.5 whitespace-nowrap">
              <MapPin size={13} className="text-accent-glow" />
              Blue Area, Islamabad
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock size={13} className="text-accent-glow" />
              10 AM - 6 PM (Sun Off)
            </span>
          </div>
        </div>

        <div className="flex items-center gap-5">
          <a
            href={`tel:${COMPANY.mobile.replace(/\s/g, "")}`}
            className="inline-flex items-center gap-1.5 hover:text-accent-glow transition-colors"
          >
            <Phone size={13} />
            {COMPANY.mobile}
          </a>
          <a
            href={`mailto:${COMPANY.email}`}
            className="inline-flex items-center gap-1.5 hover:text-accent-glow transition-colors"
          >
            <Mail size={13} />
            {COMPANY.email}
          </a>
        </div>
      </div>
    </div>
  );
}
