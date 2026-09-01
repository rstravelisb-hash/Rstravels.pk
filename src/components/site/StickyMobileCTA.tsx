import { Link } from "@tanstack/react-router";
import { Phone, Calendar, Sparkles } from "lucide-react";
import { COMPANY } from "@/data/company";

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 448 512"
    fill="currentColor"
    className={className}
  >
    <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zM223.9 414.8c-33.1 0-65.5-8.9-94-25.7l-6.7-4-69.8 18.3L72 334.1l-4.4-7.1c-18.5-29.7-28.2-64.2-28.2-100.4 0-103.5 84.3-187.8 187.9-187.8 50.1 0 97.3 19.5 132.8 55 35.5 35.5 55 82.7 55 132.8 0 103.5-84.3 187.8-187.8 187.8zM326.6 276.5c-5.6-2.8-33.3-16.5-38.5-18.4-5.2-1.9-9-2.8-12.8 2.8-3.8 5.6-14.6 18.4-17.9 22.2-3.3 3.8-6.6 4.2-12.2 1.4-5.6-2.8-23.7-8.8-45.2-28-16.7-14.9-28-33.3-31.3-38.9-3.3-5.6-.3-8.6 2.4-11.4 2.5-2.5 5.6-6.6 8.5-9.9 2.8-3.3 3.8-5.6 5.6-9.4 1.9-3.8.9-7.1-.5-9.9-1.4-2.8-12.8-30.9-17.6-42.3-4.6-11.1-9.3-9.6-12.8-9.8-3.3-.2-7.1-.2-10.9-.2-3.8 0-9.9 1.4-15.1 7.1-5.2 5.6-20.4 19.9-20.4 48.4s20.9 56.1 23.8 60c2.8 3.8 40.9 62.4 99.1 87.5 13.8 5.9 24.6 9.4 33 12 13.9 4.4 26.6 3.8 36.6 2.3 11.2-1.7 34.3-14 39.1-27.5 4.8-13.5 4.8-25 3.3-27.5-1.5-2.5-5.3-3.9-10.9-6.7z" />
  </svg>
);

export function StickyMobileCTA() {
  const phoneClean = COMPANY.mobile.replace(/\s/g, "");
  const whatsappUrl = `https://wa.me/923445979486?text=${encodeURIComponent(
    "Hi RS Travel and Tours, I need visa and travel assistance."
  )}`;

  return (
    <aside aria-label="Quick Actions" className="fixed bottom-0 inset-x-0 z-[90] md:hidden pb-safe">
      <div className="mx-2 mb-2 p-2 rounded-2xl bg-slate-950/90 backdrop-blur-xl border border-slate-700/60 shadow-2xl shadow-black/60 flex items-center justify-between gap-1.5">
        {/* Call button */}
        <a
          href={`tel:${phoneClean}`}
          className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl bg-white/10 text-white font-bold text-xs active:scale-95 transition-all border border-white/10"
        >
          <Phone size={14} className="text-blue-400" />
          <span>Call Now</span>
        </a>

        {/* WhatsApp button */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl bg-[#25D366] text-white font-bold text-xs active:scale-95 transition-all shadow-glow shadow-green-500/20"
        >
          <WhatsAppIcon className="h-3.5 w-3.5" />
          <span>WhatsApp</span>
        </a>

        {/* Free Consultation button */}
        <Link
          to="/consultation"
          className="flex-1 inline-flex items-center justify-center py-2.5 px-2 rounded-xl bg-accent text-accent-foreground font-bold text-xs active:scale-95 transition-all shadow-glow"
        >
          <span className="truncate">Book Free</span>
        </Link>
      </div>
    </aside>
  );
}
