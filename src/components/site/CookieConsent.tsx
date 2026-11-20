import { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { Cookie, ShieldCheck, ChevronDown, ChevronUp, Check, X, Sliders, Info } from "lucide-react";

export interface CookiePreferences {
  essential: boolean;
  analytics: boolean;
  marketing: boolean;
  timestamp: string;
}

const STORAGE_KEY = "rs_cookie_consent_v1";

declare global {
  interface Window {
    __openCookieSettings?: () => void;
  }
}

export function CookieConsent() {
  const [isOpen, setIsOpen] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    essential: true,
    analytics: true,
    marketing: false,
    timestamp: "",
  });

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored) as CookiePreferences;
        setPreferences(parsed);
      } else {
        // Show after a brief delay for smoother initial page load
        const timer = setTimeout(() => {
          setIsOpen(true);
        }, 1200);
        return () => clearTimeout(timer);
      }
    } catch {
      // In case localStorage is blocked in private browsing
      setIsOpen(true);
    }
  }, []);

  // Expose global opener so Footer or any link can re-trigger preferences
  useEffect(() => {
    window.__openCookieSettings = () => {
      setShowPreferences(true);
      setIsOpen(true);
    };
    return () => {
      delete window.__openCookieSettings;
    };
  }, []);

  const saveConsent = (prefs: CookiePreferences) => {
    const updated = {
      ...prefs,
      essential: true, // Always required
      timestamp: new Date().toISOString(),
    };
    setPreferences(updated);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    } catch (e) {
      console.warn("Could not save cookie preferences to localStorage", e);
    }

    // Dispatch custom event for tracking scripts
    if (typeof window !== "undefined") {
      window.dispatchEvent(
        new CustomEvent("cookie_consent_updated", {
          detail: updated,
        })
      );
    }

    setIsOpen(false);
  };

  const handleAcceptAll = () => {
    saveConsent({
      essential: true,
      analytics: true,
      marketing: true,
      timestamp: "",
    });
  };

  const handleRejectNonEssential = () => {
    saveConsent({
      essential: true,
      analytics: false,
      marketing: false,
      timestamp: "",
    });
  };

  const handleSaveCustom = () => {
    saveConsent(preferences);
  };

  if (!isOpen) return null;

  return (
    <div
      role="region"
      aria-label="Cookie consent banner"
      className="fixed bottom-20 md:bottom-6 left-4 right-4 md:left-auto md:right-6 md:max-w-md z-50 animate-in fade-in slide-in-from-bottom-5 duration-300 pointer-events-auto"
    >
      <div className="rounded-2xl md:rounded-3xl border border-border/80 bg-slate-900/95 backdrop-blur-xl p-5 md:p-6 shadow-2xl text-slate-100 ring-1 ring-white/10">
        {/* Header */}
        <div className="flex items-start gap-3.5">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-400 shadow-glow">
            <Cookie size={20} />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between gap-2">
              <h3 className="text-sm font-bold tracking-tight text-white flex items-center gap-1.5">
                We Respect Your Privacy
              </h3>
              <button
                type="button"
                onClick={handleRejectNonEssential}
                className="text-slate-400 hover:text-white transition-colors p-1 -mr-1"
                aria-label="Dismiss cookie banner with essential only"
              >
                <X size={16} />
              </button>
            </div>
            <p className="mt-1 text-xs text-slate-300 leading-relaxed">
              We use essential cookies to keep our visa portal secure, plus optional analytical cookies to measure flight search speeds and improve your experience.
            </p>
          </div>
        </div>

        {/* Detailed Preferences Accordion */}
        {showPreferences && (
          <div className="mt-4 pt-4 border-t border-slate-800 space-y-3 max-h-60 overflow-y-auto pr-1">
            {/* Category: Essential */}
            <div className="rounded-xl bg-slate-800/50 p-3 border border-slate-700/50 flex items-start justify-between gap-3">
              <div>
                <div className="flex items-center gap-1.5 text-xs font-bold text-white">
                  <ShieldCheck size={14} className="text-emerald-400" />
                  <span>Strictly Essential</span>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded">
                    Always On
                  </span>
                </div>
                <p className="text-[11px] text-slate-400 mt-1">
                  Required for site navigation, inquiry form security, and HTTPS verification.
                </p>
              </div>
              <input
                type="checkbox"
                checked
                disabled
                className="h-4 w-4 rounded accent-primary mt-1 opacity-60 cursor-not-allowed"
                aria-label="Strictly essential cookies cannot be disabled"
              />
            </div>

            {/* Category: Analytics */}
            <div className="rounded-xl bg-slate-800/50 p-3 border border-slate-700/50 flex items-start justify-between gap-3">
              <div>
                <div className="flex items-center gap-1.5 text-xs font-bold text-white">
                  <span>Performance & Analytics</span>
                </div>
                <p className="text-[11px] text-slate-400 mt-1">
                  Helps us understand popular visa routes and optimize page load speeds anonymously.
                </p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer mt-1">
                <input
                  type="checkbox"
                  checked={preferences.analytics}
                  onChange={(e) =>
                    setPreferences((prev) => ({
                      ...prev,
                      analytics: e.target.checked,
                    }))
                  }
                  className="sr-only peer"
                  aria-label="Toggle Performance & Analytics cookies"
                />
                <div className="w-8 h-4.5 bg-slate-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-3.5 after:w-3.5 after:transition-all peer-checked:bg-amber-500"></div>
              </label>
            </div>

            {/* Category: Marketing */}
            <div className="rounded-xl bg-slate-800/50 p-3 border border-slate-700/50 flex items-start justify-between gap-3">
              <div>
                <div className="flex items-center gap-1.5 text-xs font-bold text-white">
                  <span>Marketing & Personalization</span>
                </div>
                <p className="text-[11px] text-slate-400 mt-1">
                  Enables relevant travel promotions, Umrah updates, and airline deals.
                </p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer mt-1">
                <input
                  type="checkbox"
                  checked={preferences.marketing}
                  onChange={(e) =>
                    setPreferences((prev) => ({
                      ...prev,
                      marketing: e.target.checked,
                    }))
                  }
                  className="sr-only peer"
                  aria-label="Toggle Marketing & Personalization cookies"
                />
                <div className="w-8 h-4.5 bg-slate-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-3.5 after:w-3.5 after:transition-all peer-checked:bg-amber-500"></div>
              </label>
            </div>
          </div>
        )}

        {/* Links & Expand Toggle */}
        <div className="mt-3 flex items-center justify-between text-[11px] text-slate-400">
          <Link
            to="/privacy-policy"
            className="hover:text-amber-400 underline underline-offset-2 transition-colors flex items-center gap-1"
          >
            <Info size={12} /> Privacy & Cookie Policy
          </Link>
          <button
            type="button"
            onClick={() => setShowPreferences((prev) => !prev)}
            className="text-amber-400 hover:text-amber-300 font-semibold inline-flex items-center gap-1 transition-colors"
          >
            <Sliders size={12} />
            {showPreferences ? "Simple View" : "Customize Preferences"}
          </button>
        </div>

        {/* Action Buttons */}
        <div className="mt-4 flex flex-col sm:flex-row items-center gap-2">
          {showPreferences ? (
            <>
              <button
                type="button"
                onClick={handleSaveCustom}
                className="w-full sm:flex-1 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 px-4 py-2 text-xs font-bold text-slate-950 hover:brightness-110 transition-all shadow-glow flex items-center justify-center gap-1.5"
              >
                <Check size={14} /> Save Preferences
              </button>
              <button
                type="button"
                onClick={handleAcceptAll}
                className="w-full sm:w-auto rounded-xl border border-slate-700 bg-slate-800/80 px-3.5 py-2 text-xs font-semibold text-slate-200 hover:bg-slate-700 hover:text-white transition-all"
              >
                Accept All
              </button>
            </>
          ) : (
            <>
              <button
                type="button"
                onClick={handleAcceptAll}
                className="w-full sm:flex-1 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 px-4 py-2.5 text-xs font-bold text-slate-950 hover:brightness-110 transition-all shadow-glow flex items-center justify-center gap-1.5"
              >
                Accept All Cookies
              </button>
              <button
                type="button"
                onClick={handleRejectNonEssential}
                className="w-full sm:flex-1 rounded-xl border border-slate-700 bg-slate-800/80 px-4 py-2.5 text-xs font-semibold text-slate-300 hover:bg-slate-700 hover:text-white transition-all text-center"
              >
                Essential Only
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
