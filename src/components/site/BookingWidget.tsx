import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "@tanstack/react-router";
import {
  Plane,
  Moon,
  Stamp,
  Hotel,
  Search,
  MapPin,
  Calendar,
  Phone,
  Users,
  ChevronDown,
  ArrowRightLeft,
  MessageCircle,
  Plus,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { format, startOfToday, addDays } from "date-fns";
import { cn } from "@/lib/utils";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { ALL_COUNTRIES } from "@/data/all-countries";
import { COMPANY } from "@/data/company";
import { COUNTRY_PATH_MAP } from "@/data/country-paths";
import { DESTINATIONS } from "@/data/destinations";
import logo from "@/assets/logo.png";

type TripType = "round-trip" | "one-way" | "multi-city";

declare global {
  interface Window {
    _airportsCache?: any[];
  }
}

// Reusable responsive glass classes
const BaseGlassClasses = "h-12 md:h-14 rounded-2xl bg-white/70 backdrop-blur-xl border border-white/50 shadow-sm hover:bg-white/90 focus:bg-white focus:border-primary/40 focus:ring-4 focus:ring-primary/10 transition-all duration-300 text-xs sm:text-sm font-bold";
const InputGlassClasses = cn(BaseGlassClasses, "pl-10 sm:pl-11 placeholder:text-muted-foreground/50 placeholder:font-semibold w-full");
const ButtonGlassClasses = cn(BaseGlassClasses, "flex items-center px-3 sm:px-4 w-full text-foreground justify-start");

export function BookingWidget({ initialTab = "flights" }: { initialTab?: string }) {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(initialTab);
  const [tripType, setTripType] = useState<TripType>("round-trip");
  const [departureDate, setDepartureDate] = useState<Date>();
  const [returnDate, setReturnDate] = useState<Date>();
  const [travellers, setTravellers] = useState({ adults: 1, children: 0, infants: 0 });
  const [multiCityLegs, setMultiCityLegs] = useState([
    { id: 1, from: "", to: "", date: undefined },
    { id: 2, from: "", to: "", date: undefined },
  ]);

  const [fromSearch, setFromSearch] = useState("");
  const [toSearch, setToSearch] = useState("");
  const [visaSearch, setVisaSearch] = useState("");
  const [umrahDuration, setUmrahDuration] = useState("15");

  const [showFromSuggestions, setShowFromSuggestions] = useState(false);
  const [showToSuggestions, setShowToSuggestions] = useState(false);
  const [showVisaSuggestions, setShowVisaSuggestions] = useState(false);

  const [hotelSearch, setHotelSearch] = useState("");
  const [showHotelSuggestions, setShowHotelSuggestions] = useState(false);
  const [hotelRange, setHotelRange] = useState<{ from: Date | undefined; to: Date | undefined }>({
    from: startOfToday(),
    to: addDays(startOfToday(), 3),
  });
  const [hotelRooms, setHotelRooms] = useState(1);
  const [hotelGuests, setHotelGuests] = useState({ adults: 2, children: 0 });
  const [hotelCategory, setHotelCategory] = useState("4-star");
  const [hotelBudget, setHotelBudget] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [showInquiryModal, setShowInquiryModal] = useState(false);

  const [cabinClass, setCabinClass] = useState("economy");
  const [currency, setCurrency] = useState("PKR");
  const [umrahPackage, setUmrahPackage] = useState("economy");
  const [visaType, setVisaType] = useState("tourist");

  const [flightDepOpen, setFlightDepOpen] = useState(false);
  const [flightRetOpen, setFlightRetOpen] = useState(false);
  const [umrahDateOpen, setUmrahDateOpen] = useState(false);
  const [multiDateOpen, setMultiDateOpen] = useState<number | null>(null);

  const [airports, setAirports] = useState<any[]>([]);
  const [isLoadingAirports, setIsLoadingAirports] = useState(true);

  const loadAirports = React.useCallback(() => {
    if (airports.length > 0 || !isLoadingAirports) return;

    if (window._airportsCache) {
      setAirports(window._airportsCache);
      setIsLoadingAirports(false);
      return;
    }

    fetch('/data/airports.json')
      .then(res => res.json())
      .then(data => {
        window._airportsCache = data;
        setAirports(data);
        setIsLoadingAirports(false);
      })
      .catch(err => {
        console.error("Failed to load airports:", err);
        setIsLoadingAirports(false);
      });
  }, [airports.length, isLoadingAirports]);

  useEffect(() => {
    if (activeTab === 'flights' || activeTab === 'hotel') {
      loadAirports();
    }
  }, [activeTab, loadAirports]);

  const getFilteredAirports = (search: string) => {
    if (!search || search.length < 2) return [];
    const s = search.toLowerCase();

    if (s.length === 3) {
      const exactIATA = airports.find(d => d.i?.toLowerCase() === s);
      if (exactIATA) return [exactIATA];
    }

    return airports
      .filter(d =>
        (d.i && d.i.toLowerCase().includes(s)) ||
        (d.n && d.n.toLowerCase().includes(s)) ||
        (d.m && d.m.toLowerCase().includes(s)) ||
        (d.c && d.c.toLowerCase().includes(s))
      )
      .sort((a, b) => {
        if (a.i?.toLowerCase().startsWith(s)) return -1;
        if (b.i?.toLowerCase().startsWith(s)) return 1;
        if (a.m?.toLowerCase().startsWith(s)) return -1;
        if (b.m?.toLowerCase().startsWith(s)) return 1;
        return 0;
      })
      .slice(0, 40);
  };

  const filteredFrom = useMemo(() => getFilteredAirports(fromSearch), [fromSearch, airports]);
  const filteredTo = useMemo(() => getFilteredAirports(toSearch), [toSearch, airports]);

  const filteredVisaCountries = useMemo(() => {
    const s = visaSearch.toLowerCase();
    const featuredDestinations = [
      { name: "United Kingdom", code: "gb" },
      { name: "United States", code: "us" },
      { name: "Canada", code: "ca" },
      { name: "Australia", code: "au" },
      { name: "Germany", code: "de" },
      { name: "France", code: "fr" },
      { name: "Italy", code: "it" },
      { name: "Spain", code: "es" },
      { name: "United Arab Emirates", code: "ae" },
      { name: "Saudi Arabia", code: "sa" },
      { name: "Turkey", code: "tr" },
      { name: "Qatar", code: "qa" },
      { name: "Azerbaijan", code: "az" },
      { name: "Thailand", code: "th" },
      { name: "Malaysia", code: "my" },
      { name: "Egypt", code: "eg" },
    ];

    if (!visaSearch || visaSearch.length < 1) return featuredDestinations;

    const combined = [
      ...featuredDestinations,
      ...ALL_COUNTRIES.filter(c => !featuredDestinations.some(fd => fd.name === c.name))
    ];

    return combined.filter(c => c.name.toLowerCase().includes(s)).slice(0, 40);
  }, [visaSearch]);

  const filteredHotelDestinations = useMemo(() => {
    if (!hotelSearch || hotelSearch.length < 2) return [];
    const s = hotelSearch.toLowerCase();
    return airports
      .filter(a => a.m?.toLowerCase().includes(s) || a.n?.toLowerCase().includes(s))
      .slice(0, 10);
  }, [hotelSearch, airports]);

  const [activeMultiSearch, setActiveMultiSearch] = useState<{ id: number, field: 'from' | 'to' } | null>(null);

  const addLeg = () => {
    setMultiCityLegs([...multiCityLegs, { id: Date.now(), from: "", to: "", date: undefined }]);
  };

  const removeLeg = (id: number) => {
    if (multiCityLegs.length > 2) {
      setMultiCityLegs(multiCityLegs.filter((leg) => leg.id !== id));
    }
  };

  const navigateToCountry = (country: { name: string, code?: string }) => {
    const name = country.name;
    const slug = name.toLowerCase().replace(/\s+/g, '-');

    const primary = DESTINATIONS.find(d => d.name.toLowerCase() === name.toLowerCase() || d.slug === slug);
    if (primary) {
      navigate({ to: "/countries/$slug", params: { slug: primary.slug } });
      return;
    }

    const regionPath = COUNTRY_PATH_MAP[slug] || COUNTRY_PATH_MAP[name.toLowerCase().replace(/\s+/g, "-")];
    if (regionPath) {
      if (regionPath === "schengen") {
        navigate({ to: "/countries/schengen/$country", params: { country: slug } });
      } else {
        navigate({ to: `/countries/${regionPath}/$country`, params: { country: slug } });
      }
      return;
    }
  };

  const updateLeg = (id: number, field: 'from' | 'to' | 'date', value: any) => {
    setMultiCityLegs(prev => prev.map(leg =>
      leg.id === id ? { ...leg, [field]: value } : leg
    ));
  };

  const tabs = [
    { id: "flights", label: "Flights", icon: Plane, color: "text-blue-500" },
    { id: "umrah", label: "Umrah", icon: Moon, color: "text-red-500" },
    { id: "visa", label: "Visa", icon: Stamp, color: "text-sky-400" },
    { id: "hotel", label: "Hotel", icon: Hotel, color: "text-emerald-500" },
  ];

  const totalTravellers = travellers.adults + travellers.children + travellers.infants;

  const getInquiryMessage = (phone: string) => {
    let msg = `Hello ${COMPANY.name}! I would like to inquire about:\n\n`;

    if (activeTab === 'flights') {
      if (tripType === 'multi-city') {
        msg += `✈️ *Multi-City Flight Inquiry*\n`;
        multiCityLegs.forEach((leg, i) => {
          msg += `Leg ${i + 1}: ${leg.from || 'TBA'} to ${leg.to || 'TBA'} (${leg.date ? format(leg.date, 'dd MMM') : 'TBA'})\n`;
        });
      } else {
        msg += `✈️ *${tripType === 'round-trip' ? 'Round-Trip' : 'One-Way'} Flight Inquiry*\n`;
        msg += `From: ${fromSearch || 'TBA'}\nTo: ${toSearch || 'TBA'}\n`;
        msg += `Departure: ${departureDate ? format(departureDate, 'dd MMM yyyy') : 'TBA'}\n`;
        if (tripType === 'round-trip') msg += `Return: ${returnDate ? format(returnDate, 'dd MMM yyyy') : 'TBA'}\n`;
      }
      msg += `Travellers: ${travellers.adults} Adults, ${travellers.children} Children, ${travellers.infants} Infants\n`;
    } else if (activeTab === 'umrah') {
      msg += `🕋 *Umrah Inquiry*\n`;
      msg += `Stay Duration: ${umrahDuration} Days\n`;
      msg += `Departure: ${departureDate ? format(departureDate, 'dd MMM yyyy') : 'TBA'}\n`;
      msg += `Travellers: ${travellers.adults} Adults, ${travellers.children} Children, ${travellers.infants} Infants\n`;
    } else if (activeTab === 'visa') {
      msg += `🛂 *Visa Assistance Inquiry*\n`;
      msg += `Destination: ${visaSearch || 'TBA'}\n`;
    } else if (activeTab === 'hotel') {
      msg += `🏨 *Hotel Booking Inquiry*\n`;
      msg += `Destination: ${hotelSearch || 'TBA'}\n`;
      msg += `Dates: ${hotelRange?.from ? format(hotelRange.from, 'dd MMM') : 'TBA'} - ${hotelRange?.to ? format(hotelRange.to, 'dd MMM') : 'TBA'}\n`;
      msg += `Category: ${hotelCategory.replace('-', ' ')}\n`;
      if (hotelBudget) msg += `Budget: PKR ${hotelBudget}\n`;
      msg += `Rooms: ${hotelRooms}, Guests: ${hotelGuests.adults + hotelGuests.children}\n`;
    }

    if (userPhone) msg += `\nMy Contact: ${userPhone}\n`;
    msg += `\nPlease provide the best rates and details.`;
    return `https://wa.me/${phone.replace(/\D/g, '')}?text=${encodeURIComponent(msg)}`;
  };

  const isFlightValid = () => {
    if (tripType === 'multi-city') return multiCityLegs.every(leg => leg.from && leg.to && leg.date);
    const base = fromSearch && toSearch && departureDate;
    if (tripType === 'round-trip') return base && returnDate;
    return base;
  };

  const isUmrahValid = () => !!departureDate;
  const isVisaValid = () => !!visaSearch;
  const isHotelValid = () => !!hotelSearch && !!hotelRange?.from && !!hotelRange?.to;

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const tabParam = params.get('tab');
    if (tabParam && ['flights', 'umrah', 'visa', 'hotel'].includes(tabParam)) {
      setActiveTab(tabParam);
    }
  }, []);

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
    const paths: Record<string, string> = {
      flights: '/air-ticketing',
      umrah: '/umrah',
      visa: '/visa-services',
      hotel: '/hotel-booking'
    };
    const targetPath = paths[tabId];
    if (targetPath) {
      navigate({ to: `${targetPath}?tab=${tabId}` as any });
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-3 sm:px-6 relative z-50">
      <div className="bg-white/80 backdrop-blur-2xl rounded-[2rem] sm:rounded-[2.5rem] shadow-2xl shadow-black/5 border border-white overflow-visible relative">
        <div className="flex flex-col">
          {/* Header & Tabs */}
          <div className="flex items-center justify-between border-b border-border/40 bg-gradient-to-r from-white/40 to-transparent pr-2 sm:pr-8 rounded-t-[2rem] sm:rounded-t-[2.5rem] overflow-hidden w-full select-none">
            <div className="flex overflow-x-auto no-scrollbar scroll-smooth w-full lg:w-auto flex-nowrap shrink-0 sm:ml-4">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => handleTabClick(tab.id)}
                    className={cn(
                      "flex items-center justify-center gap-1.5 sm:gap-2 px-4 sm:px-6 py-4 sm:py-5 transition-all duration-300 relative flex-1 sm:flex-none min-w-max group",
                      isActive ? "text-foreground" : "text-muted-foreground/70 hover:text-foreground hover:bg-white/40"
                    )}
                  >
                    <Icon size={16} className={cn("transition-colors sm:w-[18px] sm:h-[18px]", isActive ? tab.color : "text-muted-foreground/50 group-hover:text-muted-foreground")} />
                    <span className={cn("text-[11px] sm:text-sm tracking-tight uppercase", isActive ? "font-black" : "font-bold")}>{tab.label}</span>
                    {isActive && (
                      <motion.div
                        layoutId="activeTabIndicator"
                        className="absolute bottom-0 left-0 right-0 sm:left-4 sm:right-4 h-[3px] bg-primary rounded-t-full shadow-[0_-2px_10px_rgba(var(--primary),0.5)]"
                      />
                    )}
                  </button>
                );
              })}
            </div>

            <div className="hidden xl:flex items-center gap-4 py-3 pl-8 pr-4 border-l border-border/40 ml-auto bg-white/20">
              <img src={logo} alt={COMPANY.name} className="h-8 w-auto object-contain opacity-90" />
              <div className="flex flex-col">
                <span className="text-[11px] font-bold text-primary leading-none">{COMPANY.name}</span>
                <span className="text-[9px] uppercase tracking-wider text-muted-foreground/80 font-bold mt-1">Travel Portal</span>
              </div>
            </div>
          </div>
        </div>

        {/* Tab Content */}
        <div className="p-4 sm:p-6 md:p-8">
          <AnimatePresence mode="wait">
            {activeTab === "flights" && (
              <motion.div
                key="flights"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="space-y-4 sm:space-y-6"
              >
                {/* Filters Row */}
                <div className="flex flex-col md:flex-row md:flex-wrap items-start md:items-center gap-3 sm:gap-6">
                  {/* Trip Types Pill */}
                  <div className="flex items-center w-full md:w-auto bg-white/50 backdrop-blur-md p-1 rounded-full border border-white/60 shadow-sm">
                    {(["round-trip", "one-way", "multi-city"] as const).map((type) => (
                      <button
                        key={type}
                        onClick={() => setTripType(type)}
                        className={cn(
                          "px-2 sm:px-4 py-1.5 sm:py-2 text-[10px] sm:text-xs font-bold rounded-full transition-all uppercase tracking-wider flex-1 text-center",
                          tripType === type
                            ? "bg-primary text-white shadow-md"
                            : "text-muted-foreground hover:bg-white hover:text-foreground"
                        )}
                      >
                        {type === "round-trip" ? "Round Trip" : type === "one-way" ? "One Way" : "Multi-City"}
                      </button>
                    ))}
                  </div>

                  <div className="w-full flex flex-wrap items-center gap-2 flex-1 justify-between md:justify-start">
                    <Select value={cabinClass || "economy"} onValueChange={setCabinClass}>
                      <SelectTrigger aria-label="Select Cabin Class" className="w-[calc(50%-0.25rem)] md:w-[130px] h-10 border border-white/50 bg-white/50 backdrop-blur-md hover:bg-white/80 rounded-[1rem] focus:ring-2 focus:ring-primary/20 text-xs font-bold shadow-sm">
                        <SelectValue placeholder="Class" />
                      </SelectTrigger>
                      <SelectContent className="rounded-xl border-white/50 bg-white/95 backdrop-blur-xl">
                        <SelectItem value="economy">Economy</SelectItem>
                        <SelectItem value="premium-economy">Premium</SelectItem>
                        <SelectItem value="business">Business</SelectItem>
                        <SelectItem value="first-class">First Class</SelectItem>
                      </SelectContent>
                    </Select>

                    <Popover>
                      <PopoverTrigger asChild>
                        <Button aria-label="Select Travellers" variant="outline" className="w-[calc(50%-0.25rem)] md:w-auto h-10 px-3 border border-white/50 bg-white/50 backdrop-blur-md hover:bg-white/80 rounded-[1rem] justify-start text-xs font-bold shadow-sm">
                          <Users size={14} className="mr-1.5 text-primary shrink-0" />
                          <span className="truncate">{totalTravellers} Pax</span>
                          <ChevronDown size={14} className="ml-auto opacity-50 shrink-0" />
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-[calc(100vw-32px)] sm:w-72 p-5 rounded-[1.5rem] bg-white/95 backdrop-blur-2xl border-white/50 shadow-2xl" align="start">
                        <div className="space-y-4">
                          <p className="font-bold text-sm border-b border-border/50 pb-2">Select Travellers</p>
                          {[
                            { label: "Adults", sub: "12+ yrs", key: "adults" },
                            { label: "Children", sub: "2-12 yrs", key: "children" },
                            { label: "Infants", sub: "Below 2 yrs", key: "infants" },
                          ].map((item) => (
                            <div key={item.key} className="flex items-center justify-between">
                              <div>
                                <p className="text-sm font-bold">{item.label}</p>
                                <p className="text-[11px] font-semibold text-muted-foreground">{item.sub}</p>
                              </div>
                              <div className="flex items-center gap-3">
                                <button
                                  onClick={() => setTravellers(prev => ({ ...prev, [item.key]: Math.max(item.key === 'adults' ? 1 : 0, (prev as any)[item.key] - 1) }))}
                                  className="w-8 h-8 rounded-full border border-border flex items-center justify-center hover:bg-secondary text-lg"
                                >
                                  -
                                </button>
                                <span className="text-sm font-black w-4 text-center">{(travellers as any)[item.key]}</span>
                                <button
                                  onClick={() => setTravellers(prev => ({ ...prev, [item.key]: (prev as any)[item.key] + 1 }))}
                                  className="w-8 h-8 rounded-full border border-border flex items-center justify-center hover:bg-secondary text-lg"
                                >
                                  +
                                </button>
                              </div>
                            </div>
                          ))}
                        </div>
                      </PopoverContent>
                    </Popover>

                    <div className="flex items-center space-x-2 px-3 h-10 rounded-[1rem] bg-white/50 backdrop-blur-md border border-white/50 shadow-sm cursor-pointer group w-[calc(50%-0.25rem)] md:w-auto">
                      <Checkbox id="direct-flights" className="h-4 w-4 border-muted-foreground/30 data-[state=checked]:bg-primary rounded" />
                      <Label htmlFor="direct-flights" className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground group-hover:text-foreground cursor-pointer select-none">Direct</Label>
                    </div>

                    <Select value={currency || "PKR"} onValueChange={setCurrency}>
                      <SelectTrigger aria-label="Select Currency" className="w-[calc(50%-0.25rem)] md:w-[85px] h-10 border border-white/50 bg-white/50 backdrop-blur-md hover:bg-white/80 rounded-[1rem] focus:ring-2 focus:ring-primary/20 text-xs font-bold shadow-sm ml-auto md:ml-0">
                        <SelectValue placeholder="PKR" />
                      </SelectTrigger>
                      <SelectContent className="rounded-xl border-white/50 bg-white/95 backdrop-blur-xl">
                        <SelectItem value="PKR">PKR</SelectItem>
                        <SelectItem value="USD">USD</SelectItem>
                        <SelectItem value="AED">AED</SelectItem>
                        <SelectItem value="GBP">GBP</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Search Fields */}
                <div className="space-y-3 sm:space-y-4">
                  {tripType !== "multi-city" ? (
                    <div className="grid gap-3 sm:gap-4 lg:grid-cols-5 md:grid-cols-2 relative">

                      {/* Destination Row/Col */}
                      <div className="flex flex-col md:grid md:grid-cols-2 lg:col-span-2 gap-3 md:gap-6 relative">
                        {/* Origin */}
                        <div className="relative group flex flex-col">
                          <Label className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground/80 mb-1 ml-2">Leaving From</Label>
                          <div className="relative">
                            <MapPin className="absolute left-3.5 sm:left-4 top-1/2 -translate-y-1/2 text-primary/50 group-hover:text-primary transition-colors z-10" size={18} />
                            <Input
                              id="origin-input"
                              name="origin"
                              autoComplete="off"
                              placeholder={isLoadingAirports ? "Loading..." : "City or Airport"}
                              value={fromSearch}
                              onChange={(e) => {
                                setFromSearch(e.target.value);
                                setShowFromSuggestions(true);
                              }}
                              onFocus={() => setShowFromSuggestions(true)}
                              className={InputGlassClasses}
                            />
                            {fromSearch && (
                              <button
                                onClick={() => { setFromSearch(""); setShowFromSuggestions(false); }}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground/50 hover:text-destructive z-10"
                              >
                                <X size={16} />
                              </button>
                            )}
                            {showFromSuggestions && filteredFrom.length > 0 && (
                              <div className="absolute top-[calc(100%+6px)] left-0 right-0 bg-white/95 backdrop-blur-3xl rounded-[1.25rem] shadow-2xl border border-white/50 z-[100] overflow-hidden py-2 animate-in fade-in zoom-in-95 max-h-[300px] overflow-y-auto custom-scrollbar">
                                {filteredFrom.map((d) => (
                                  <button
                                    key={`${d.i}-${d.n}`}
                                    onClick={() => { setFromSearch(`${d.i} (${d.m || d.n})`); setShowFromSuggestions(false); }}
                                    className="w-full px-4 py-2.5 text-left hover:bg-secondary/50 flex flex-col group/item transition-colors"
                                  >
                                    <span className="text-[13px] font-black group-hover/item:text-primary truncate w-full">{d.i} - {d.n}</span>
                                    <span className="text-[10px] font-medium text-muted-foreground truncate w-full">{d.m}, {d.c}</span>
                                  </button>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>

                        {/* Swap Button (Mobile: Center Stacked, Desktop: Center Horizontal) */}
                        <div className="absolute right-4 top-[39px] md:left-1/2 md:right-auto md:top-1/2 md:-translate-y-1/2 md:-translate-x-1/2 md:mt-[7px] z-20">
                          <Button
                            variant="outline"
                            size="icon"
                            onClick={() => {
                              const temp = fromSearch;
                              setFromSearch(toSearch);
                              setToSearch(temp);
                            }}
                            className="rounded-full bg-white backdrop-blur-md shadow-[0_4px_12px_rgba(0,0,0,0.1)] hover:shadow-lg hover:bg-primary hover:text-white transition-all duration-300 border border-white/80 w-9 h-9 md:w-10 md:h-10 hover:rotate-180"
                          >
                            <ArrowRightLeft size={14} className="rotate-90 md:rotate-0" />
                          </Button>
                        </div>

                        {/* Destination */}
                        <div className="relative group flex flex-col">
                          <Label className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground/80 mb-1 ml-2">Going To</Label>
                          <div className="relative">
                            <MapPin className="absolute left-3.5 sm:left-4 top-1/2 -translate-y-1/2 text-primary/50 group-hover:text-primary transition-colors z-10" size={18} />
                            <Input
                              id="destination-input"
                              name="destination"
                              autoComplete="off"
                              placeholder={isLoadingAirports ? "Loading..." : "City or Airport"}
                              value={toSearch}
                              onChange={(e) => {
                                setToSearch(e.target.value);
                                setShowToSuggestions(true);
                              }}
                              onFocus={() => setShowToSuggestions(true)}
                              className={InputGlassClasses}
                            />
                            {toSearch && (
                              <button
                                onClick={() => { setToSearch(""); setShowToSuggestions(false); }}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground/50 hover:text-destructive z-10"
                              >
                                <X size={16} />
                              </button>
                            )}
                            {showToSuggestions && filteredTo.length > 0 && (
                              <div className="absolute top-[calc(100%+6px)] left-0 right-0 bg-white/95 backdrop-blur-3xl rounded-[1.25rem] shadow-2xl border border-white/50 z-[100] overflow-hidden py-2 animate-in fade-in zoom-in-95 max-h-[300px] overflow-y-auto custom-scrollbar">
                                {filteredTo.map((d) => (
                                  <button
                                    key={`${d.i}-${d.n}`}
                                    onClick={() => { setToSearch(`${d.i} (${d.m || d.n})`); setShowToSuggestions(false); }}
                                    className="w-full px-4 py-2.5 text-left hover:bg-secondary/50 flex flex-col group/item transition-colors"
                                  >
                                    <span className="text-[13px] font-black group-hover/item:text-primary truncate w-full">{d.i} - {d.n}</span>
                                    <span className="text-[10px] font-medium text-muted-foreground truncate w-full">{d.m}, {d.c}</span>
                                  </button>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Dates */}
                      <div className={cn("grid gap-3 sm:gap-4", tripType === "round-trip" ? "grid-cols-2 lg:col-span-2" : "grid-cols-1")}>
                        <div className="relative group flex flex-col">
                          <Label className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground/80 mb-1 ml-2">Departing</Label>
                          <Popover open={flightDepOpen} onOpenChange={setFlightDepOpen}>
                            <PopoverTrigger asChild>
                              <Button variant="outline" className={cn(ButtonGlassClasses, !departureDate && "text-muted-foreground/60")}>
                                <Calendar className="shrink-0 text-primary/50 group-hover:text-primary mr-2.5" size={18} />
                                <span className="truncate">{departureDate ? format(departureDate, "MMM dd, yyyy") : "Select Date"}</span>
                              </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-1 rounded-[1.25rem] bg-white/95 backdrop-blur-xl border border-white/50 shadow-2xl" align="start">
                              <CalendarComponent
                                mode="single"
                                selected={departureDate}
                                onSelect={(date) => { setDepartureDate(date); setFlightDepOpen(false); }}
                                initialFocus
                                disabled={(date) => date < startOfToday()}
                              />
                            </PopoverContent>
                          </Popover>
                        </div>

                        {tripType === "round-trip" && (
                          <div className="relative group flex flex-col">
                            <Label className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground/80 mb-1 ml-2">Returning</Label>
                            <Popover open={flightRetOpen} onOpenChange={setFlightRetOpen}>
                              <PopoverTrigger asChild>
                                <Button variant="outline" className={cn(ButtonGlassClasses, !returnDate && "text-muted-foreground/60")}>
                                  <Calendar className="shrink-0 text-primary/50 group-hover:text-primary mr-2.5" size={18} />
                                  <span className="truncate">{returnDate ? format(returnDate, "MMM dd, yyyy") : "Select Date"}</span>
                                </Button>
                              </PopoverTrigger>
                              <PopoverContent className="w-auto p-1 rounded-[1.25rem] bg-white/95 backdrop-blur-xl border border-white/50 shadow-2xl" align="start">
                                <CalendarComponent
                                  mode="single"
                                  selected={returnDate}
                                  onSelect={(date) => { setReturnDate(date); setFlightRetOpen(false); }}
                                  initialFocus
                                  disabled={(date) => date < startOfToday() || (!!departureDate && date < departureDate)}
                                />
                              </PopoverContent>
                            </Popover>
                          </div>
                        )}
                      </div>

                      {/* Phone */}
                      <div className="relative group flex flex-col lg:col-span-1">
                        <Label className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground/80 mb-1 ml-2">Contact No.</Label>
                        <div className="relative">
                          <Phone className="absolute left-3.5 sm:left-4 top-1/2 -translate-y-1/2 text-primary/50 group-hover:text-primary transition-colors z-10" size={18} />
                          <Input
                            name="phone"
                            autoComplete="tel"
                            placeholder="WhatsApp No."
                            type="tel"
                            value={userPhone}
                            onChange={(e) => setUserPhone(e.target.value)}
                            className={InputGlassClasses}
                          />
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-3 sm:space-y-4">
                      {/* Multi-City Legs */}
                      {multiCityLegs.map((leg, i) => (
                        <motion.div
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          key={leg.id}
                          className="flex flex-col lg:grid lg:grid-cols-12 gap-3 sm:gap-4 p-4 sm:p-5 rounded-[1.5rem] bg-white/50 backdrop-blur-md border border-white/60 shadow-sm relative"
                        >
                          <div className="absolute top-3 right-3 z-20 lg:hidden">
                            <Button
                              onClick={() => removeLeg(leg.id)}
                              disabled={multiCityLegs.length <= 2}
                              variant="ghost"
                              size="icon"
                              className="h-7 w-7 rounded-full bg-red-500/10 text-red-500 hover:bg-red-500 hover:text-white disabled:opacity-0"
                            >
                              <X size={14} />
                            </Button>
                          </div>

                          <div className="lg:col-span-4 relative flex flex-col">
                            <Label className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground/80 mb-1 ml-2">Flight {i + 1} From</Label>
                            <div className="relative">
                              <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 text-primary/50 z-10" size={18} />
                              <Input
                                placeholder="Origin"
                                value={leg.from}
                                onChange={(e) => {
                                  updateLeg(leg.id, 'from', e.target.value);
                                  setActiveMultiSearch({ id: leg.id, field: 'from' });
                                }}
                                className={InputGlassClasses}
                              />
                              {activeMultiSearch?.id === leg.id && activeMultiSearch?.field === 'from' && getFilteredAirports(leg.from).length > 0 && (
                                <div className="absolute top-[calc(100%+6px)] left-0 right-0 bg-white/95 backdrop-blur-2xl rounded-[1.25rem] shadow-2xl border border-white/50 z-[100] overflow-hidden py-2 max-h-[250px] overflow-y-auto custom-scrollbar">
                                  {getFilteredAirports(leg.from).map((d) => (
                                    <button
                                      key={`${d.i}-${d.n}`}
                                      onClick={() => { updateLeg(leg.id, 'from', `${d.i} (${d.m || d.n})`); setActiveMultiSearch(null); }}
                                      className="w-full px-4 py-2 text-left hover:bg-secondary/50 flex flex-col group/item"
                                    >
                                      <span className="text-xs font-bold group-hover/item:text-primary truncate w-full">{d.i} - {d.n}</span>
                                      <span className="text-[10px] text-muted-foreground truncate w-full">{d.m}, {d.c}</span>
                                    </button>
                                  ))}
                                </div>
                              )}
                            </div>
                          </div>
                          <div className="lg:col-span-4 relative flex flex-col">
                            <Label className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground/80 mb-1 ml-2">To</Label>
                            <div className="relative">
                              <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 text-primary/50 z-10" size={18} />
                              <Input
                                placeholder="Destination"
                                value={leg.to}
                                onChange={(e) => {
                                  updateLeg(leg.id, 'to', e.target.value);
                                  setActiveMultiSearch({ id: leg.id, field: 'to' });
                                }}
                                className={InputGlassClasses}
                              />
                              {activeMultiSearch?.id === leg.id && activeMultiSearch?.field === 'to' && getFilteredAirports(leg.to).length > 0 && (
                                <div className="absolute top-[calc(100%+6px)] left-0 right-0 bg-white/95 backdrop-blur-2xl rounded-[1.25rem] shadow-2xl border border-white/50 z-[100] overflow-hidden py-2 max-h-[250px] overflow-y-auto custom-scrollbar">
                                  {getFilteredAirports(leg.to).map((d) => (
                                    <button
                                      key={`${d.i}-${d.n}`}
                                      onClick={() => { updateLeg(leg.id, 'to', `${d.i} (${d.m || d.n})`); setActiveMultiSearch(null); }}
                                      className="w-full px-4 py-2 text-left hover:bg-secondary/50 flex flex-col group/item"
                                    >
                                      <span className="text-xs font-bold group-hover/item:text-primary truncate w-full">{d.i} - {d.n}</span>
                                      <span className="text-[10px] text-muted-foreground truncate w-full">{d.m}, {d.c}</span>
                                    </button>
                                  ))}
                                </div>
                              )}
                            </div>
                          </div>
                          <div className="lg:col-span-3 relative flex flex-col">
                            <Label className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground/80 mb-1 ml-2">Departure</Label>
                            <Popover open={multiDateOpen === leg.id} onOpenChange={(isOpen: boolean) => setMultiDateOpen(isOpen ? leg.id : null)}>
                              <PopoverTrigger asChild>
                                <Button variant="outline" className={cn(ButtonGlassClasses, !leg.date && "text-muted-foreground/60")}>
                                  <Calendar className="shrink-0 text-primary/50 mr-2.5" size={18} />
                                  <span className="truncate">{leg.date ? format(leg.date, "MMM dd, yyyy") : "Select Date"}</span>
                                </Button>
                              </PopoverTrigger>
                              <PopoverContent className="w-auto p-1 rounded-[1.25rem] bg-white/95 backdrop-blur-xl border border-white/50 shadow-2xl" align="start">
                                <CalendarComponent
                                  mode="single"
                                  selected={leg.date}
                                  onSelect={(date) => { updateLeg(leg.id, 'date', date); setMultiDateOpen(null); }}
                                  initialFocus
                                  disabled={(date) => date < startOfToday()}
                                />
                              </PopoverContent>
                            </Popover>
                          </div>
                          <div className="lg:col-span-1 hidden lg:flex items-end justify-center pb-1">
                            <Button
                              onClick={() => removeLeg(leg.id)}
                              disabled={multiCityLegs.length <= 2}
                              variant="ghost"
                              size="icon"
                              className="h-10 w-10 rounded-full bg-red-500/10 text-red-500 hover:bg-red-500 hover:text-white transition-colors disabled:opacity-0"
                            >
                              <X size={18} />
                            </Button>
                          </div>
                        </motion.div>
                      ))}
                      <div className="mt-4 flex justify-start">
                        <Button
                          variant="outline"
                          onClick={addLeg}
                          className="w-full sm:w-auto rounded-xl border-dashed border-primary/40 bg-primary/5 text-primary hover:bg-primary/10 h-10 sm:h-12 px-5 font-bold text-xs sm:text-sm"
                        >
                          <Plus className="mr-2" size={16} /> Add Another City
                        </Button>
                      </div>
                    </div>
                  )}
                </div>

                {/* Bottom Action */}
                <div className="flex items-center justify-end mt-6 sm:mt-8 pt-4 border-t border-border/40">
                  <Button
                    onClick={() => setShowInquiryModal(true)}
                    disabled={!isFlightValid()}
                    className="w-full md:w-auto h-12 md:h-14 px-8 md:px-12 rounded-[1.25rem] bg-gradient-to-r from-primary to-primary-glow text-white shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 font-bold text-sm md:text-base border-none disabled:opacity-50 disabled:translate-y-0 disabled:shadow-none"
                  >
                    <Search className="mr-2.5" size={18} />
                    Search Flights
                  </Button>
                </div>
              </motion.div>
            )}

            {activeTab === "umrah" && (
              <motion.div
                key="umrah"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="space-y-4 sm:space-y-6"
              >
                <div className="grid gap-3 sm:gap-4 sm:grid-cols-2 lg:grid-cols-5">
                  <div className="relative group flex flex-col">
                    <Label className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground/80 mb-1 ml-2">Package Type</Label>
                    <Select value={umrahPackage || "economy"} onValueChange={setUmrahPackage}>
                      <SelectTrigger className={cn(BaseGlassClasses, "px-4 w-full")}>
                        <SelectValue placeholder="Select Package" />
                      </SelectTrigger>
                      <SelectContent className="rounded-xl border-white/50 bg-white/95 backdrop-blur-xl">
                        <SelectItem value="economy">Economy Package</SelectItem>
                        <SelectItem value="star-3">3 Star Package</SelectItem>
                        <SelectItem value="star-4">4 Star Package</SelectItem>
                        <SelectItem value="star-5">5 Star Premium</SelectItem>
                        <SelectItem value="custom">Custom Package</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="relative group flex flex-col">
                    <Label className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground/80 mb-1 ml-2">Stay Duration</Label>
                    <Select value={umrahDuration || "15"} onValueChange={setUmrahDuration}>
                      <SelectTrigger className={cn(BaseGlassClasses, "px-4 w-full")}>
                        <SelectValue placeholder="Select Duration" />
                      </SelectTrigger>
                      <SelectContent className="rounded-xl border-white/50 bg-white/95 backdrop-blur-xl">
                        <SelectItem value="7">7 Days</SelectItem>
                        <SelectItem value="10">10 Days</SelectItem>
                        <SelectItem value="15">15 Days</SelectItem>
                        <SelectItem value="30">30 Days</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="relative group flex flex-col">
                    <Label className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground/80 mb-1 ml-2">Travel Date</Label>
                    <Popover open={umrahDateOpen} onOpenChange={setUmrahDateOpen}>
                      <PopoverTrigger asChild>
                        <Button variant="outline" className={cn(ButtonGlassClasses, !departureDate && "text-muted-foreground/60")}>
                          <Calendar className="shrink-0 text-primary/50 mr-2.5" size={18} />
                          <span className="truncate">{departureDate ? format(departureDate, "PPP") : "Select date"}</span>
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-1 rounded-[1.25rem] bg-white/95 backdrop-blur-xl border-white/50 shadow-2xl" align="start">
                        <CalendarComponent
                          mode="single"
                          selected={departureDate}
                          onSelect={(date) => { setDepartureDate(date); setUmrahDateOpen(false); }}
                          initialFocus
                          disabled={(date) => date < addDays(startOfToday(), 7)}
                        />
                      </PopoverContent>
                    </Popover>
                  </div>

                  <div className="relative group flex flex-col">
                    <Label className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground/80 mb-1 ml-2">Travellers</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button variant="outline" className={cn(ButtonGlassClasses, "justify-between")}>
                          <div className="flex items-center">
                            <Users className="shrink-0 text-primary/50 mr-2.5" size={18} />
                            <span className="truncate">{totalTravellers} Pax</span>
                          </div>
                          <ChevronDown size={14} className="opacity-50 shrink-0" />
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-[calc(100vw-32px)] sm:w-72 p-5 rounded-[1.5rem] bg-white/95 backdrop-blur-2xl border-white/50 shadow-2xl" align="end">
                        <div className="space-y-4">
                          <p className="font-bold text-sm border-b border-border/50 pb-2">Select Travellers</p>
                          {[
                            { label: "Adults", sub: "12+ yrs", key: "adults" },
                            { label: "Children", sub: "2-12 yrs", key: "children" },
                            { label: "Infants", sub: "Below 2 yrs", key: "infants" },
                          ].map((item) => (
                            <div key={item.key} className="flex items-center justify-between">
                              <div>
                                <p className="text-sm font-bold">{item.label}</p>
                                <p className="text-[11px] font-semibold text-muted-foreground">{item.sub}</p>
                              </div>
                              <div className="flex items-center gap-3">
                                <button onClick={() => setTravellers(prev => ({ ...prev, [item.key]: Math.max(item.key === 'adults' ? 1 : 0, (prev as any)[item.key] - 1) }))} className="w-8 h-8 rounded-full border border-border flex items-center justify-center hover:bg-secondary text-lg">-</button>
                                <span className="text-sm font-black w-4 text-center">{(travellers as any)[item.key]}</span>
                                <button onClick={() => setTravellers(prev => ({ ...prev, [item.key]: (prev as any)[item.key] + 1 }))} className="w-8 h-8 rounded-full border border-border flex items-center justify-center hover:bg-secondary text-lg">+</button>
                              </div>
                            </div>
                          ))}
                        </div>
                      </PopoverContent>
                    </Popover>
                  </div>

                  <div className="relative group flex flex-col sm:col-span-2 lg:col-span-1">
                    <Label className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground/80 mb-1 ml-2">Contact No.</Label>
                    <div className="relative">
                      <Phone className="absolute left-3.5 sm:left-4 top-1/2 -translate-y-1/2 text-primary/50 z-10" size={18} />
                      <Input placeholder="WhatsApp No." type="tel" value={userPhone} onChange={(e) => setUserPhone(e.target.value)} className={InputGlassClasses} />
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-end mt-6 sm:mt-8 pt-4 border-t border-border/40">
                  <Button
                    onClick={() => setShowInquiryModal(true)}
                    disabled={!isUmrahValid()}
                    className="w-full md:w-auto h-12 md:h-14 px-8 md:px-12 rounded-[1.25rem] bg-gradient-to-r from-red-600 to-red-500 text-white shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 font-bold text-sm md:text-base border-none disabled:opacity-50"
                  >
                    <Moon className="mr-2.5" size={18} />
                    Check Packages
                  </Button>
                </div>
              </motion.div>
            )}

            {activeTab === "visa" && (
              <motion.div
                key="visa"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="space-y-4 sm:space-y-6"
              >
                <div className="grid gap-3 sm:gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  <div className="relative group flex flex-col sm:col-span-2 lg:col-span-2">
                    <Label className="text-[10px] font-bold uppercase tracking-wider text-primary mb-1 ml-2">Destination Country</Label>
                    <div className="relative">
                      <MapPin className="absolute left-3.5 sm:left-4 top-1/2 -translate-y-1/2 text-primary z-10" size={18} />
                      <Input
                        autoComplete="off"
                        placeholder="e.g. UK, USA, Canada"
                        value={visaSearch}
                        onChange={(e) => { setVisaSearch(e.target.value); setShowVisaSuggestions(true); }}
                        onFocus={() => setShowVisaSuggestions(true)}
                        className={InputGlassClasses}
                      />
                      {visaSearch && (
                        <button onClick={() => { setVisaSearch(""); setShowVisaSuggestions(false); }} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground/50 hover:text-destructive z-10">
                          <X size={16} />
                        </button>
                      )}
                      {showVisaSuggestions && filteredVisaCountries.length > 0 && (
                        <div className="absolute top-[calc(100%+6px)] left-0 right-0 bg-white/95 backdrop-blur-3xl rounded-[1.25rem] shadow-2xl border border-white/50 z-[110] overflow-hidden py-2 animate-in fade-in max-h-[250px] overflow-y-auto custom-scrollbar">
                          {filteredVisaCountries.map((country) => (
                            <button
                              key={`${country.code}-${country.name}`}
                              onClick={() => { setVisaSearch(country.name); setShowVisaSuggestions(false); navigateToCountry(country); }}
                              className="w-full px-4 py-2.5 text-left hover:bg-secondary/50 flex items-center gap-3 group/item transition-colors"
                            >
                              <img src={`https://flagcdn.com/w40/${country.code}.png`} alt={country.name} className="w-6 h-4 object-cover rounded shadow-sm border border-border/50 shrink-0" />
                              <span className="text-sm font-bold group-hover/item:text-primary transition-colors truncate">{country.name}</span>
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="relative group flex flex-col">
                    <Label className="text-[10px] font-bold uppercase tracking-wider text-primary mb-1 ml-2">Visa Type</Label>
                    <Select value={visaType || "tourist"} onValueChange={setVisaType}>
                      <SelectTrigger className={cn(BaseGlassClasses, "px-4 w-full")}>
                        <SelectValue placeholder="Select Type" />
                      </SelectTrigger>
                      <SelectContent className="rounded-xl border-white/50 bg-white/95 backdrop-blur-xl">
                        <SelectItem value="tourist">Tourist Visa</SelectItem>
                        <SelectItem value="business">Business Visa</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="relative group flex flex-col">
                    <Label className="text-[10px] font-bold uppercase tracking-wider text-primary mb-1 ml-2">Contact No.</Label>
                    <div className="relative">
                      <Phone className="absolute left-3.5 sm:left-4 top-1/2 -translate-y-1/2 text-primary z-10" size={18} />
                      <Input placeholder="WhatsApp No." type="tel" value={userPhone} onChange={(e) => setUserPhone(e.target.value)} className={InputGlassClasses} />
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-end gap-3 sm:gap-4 mt-6 sm:mt-8 pt-4 border-t border-border/40">
                  <Button
                    onClick={() => window.open(`https://wa.me/923025204291?text=${encodeURIComponent(`Hello! I would like to inquire about visa services for ${visaSearch}.`)}`, "_blank")}
                    disabled={!isVisaValid()}
                    className={cn(
                      "w-full sm:w-auto h-12 md:h-14 px-8 rounded-[1.25rem] font-bold text-sm transition-all flex items-center gap-2.5 border-none",
                      isVisaValid() ? "bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg hover:shadow-xl hover:-translate-y-0.5" : "bg-muted text-muted-foreground/50 cursor-not-allowed"
                    )}
                  >
                    <MessageCircle size={18} />
                    Talk to Expert
                  </Button>
                  <Button
                    onClick={() => navigate({ to: "/profile-assessment" })}
                    disabled={!isVisaValid()}
                    className="w-full sm:w-auto h-12 md:h-14 px-8 rounded-[1.25rem] bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all font-bold text-sm border-none disabled:opacity-50"
                  >
                    <Stamp className="mr-2.5" size={18} />
                    Check Eligibility
                  </Button>
                </div>
              </motion.div>
            )}

            {activeTab === "hotel" && (
              <motion.div
                key="hotel"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="space-y-4 sm:space-y-6"
              >
                <div className="grid gap-3 sm:gap-4 lg:grid-cols-4 md:grid-cols-2">
                  <div className="relative group flex flex-col lg:col-span-2">
                    <Label className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground/80 mb-1 ml-2">Destination / Hotel</Label>
                    <div className="relative">
                      <MapPin className="absolute left-3.5 sm:left-4 top-1/2 -translate-y-1/2 text-primary/50 z-10" size={18} />
                      <Input
                        placeholder="City, Area or Hotel"
                        value={hotelSearch}
                        onChange={(e) => { setHotelSearch(e.target.value); setShowHotelSuggestions(true); }}
                        onFocus={() => setShowHotelSuggestions(true)}
                        className={InputGlassClasses}
                      />
                      {hotelSearch && (
                        <button onClick={() => { setHotelSearch(""); setShowHotelSuggestions(false); }} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground/50 hover:text-destructive z-10">
                          <X size={16} />
                        </button>
                      )}
                      {showHotelSuggestions && filteredHotelDestinations.length > 0 && (
                        <div className="absolute top-[calc(100%+6px)] left-0 right-0 bg-white/95 backdrop-blur-3xl rounded-[1.25rem] shadow-2xl border border-white/50 z-[110] overflow-hidden py-2 animate-in fade-in max-h-[250px] overflow-y-auto custom-scrollbar">
                          {filteredHotelDestinations.map((d) => (
                            <button
                              key={`${d.i}-${d.n}`}
                              onClick={() => { setHotelSearch(d.m || d.n); setShowHotelSuggestions(false); }}
                              className="w-full px-4 py-2.5 text-left hover:bg-secondary/50 flex flex-col group/item transition-colors"
                            >
                              <span className="text-sm font-bold group-hover/item:text-primary truncate w-full">{d.m || d.n}</span>
                              <span className="text-[10px] text-muted-foreground truncate w-full">{d.c}</span>
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="relative group flex flex-col">
                    <Label className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground/80 mb-1 ml-2">Check-in & Out</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button variant="outline" className={cn(ButtonGlassClasses, !hotelRange?.from && "text-muted-foreground/60")}>
                          <Calendar className="shrink-0 text-primary/50 mr-2.5" size={18} />
                          <span className="truncate">
                            {hotelRange?.from ? (hotelRange.to ? `${format(hotelRange.from, "MMM dd")} - ${format(hotelRange.to, "MMM dd")}` : format(hotelRange.from, "MMM dd")) : "Select Dates"}
                          </span>
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-[calc(100vw-32px)] sm:w-auto p-1 rounded-[1.25rem] bg-white/95 backdrop-blur-xl border-white/50 shadow-2xl" align="start">
                        <CalendarComponent
                          mode="range"
                          defaultMonth={hotelRange?.from}
                          selected={hotelRange as any}
                          onSelect={setHotelRange as any}
                          numberOfMonths={1}
                          disabled={(date) => date < startOfToday()}
                        />
                      </PopoverContent>
                    </Popover>
                  </div>

                  <div className="relative group flex flex-col">
                    <Label className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground/80 mb-1 ml-2">Guests & Rooms</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button variant="outline" className={cn(ButtonGlassClasses, "justify-between")}>
                          <div className="flex items-center">
                            <Users className="shrink-0 text-primary/50 mr-2.5" size={18} />
                            <span className="truncate">{hotelGuests.adults + hotelGuests.children} Pax, {hotelRooms} Rm</span>
                          </div>
                          <ChevronDown size={14} className="opacity-50 shrink-0" />
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-[calc(100vw-32px)] sm:w-72 p-5 rounded-[1.5rem] bg-white/95 backdrop-blur-2xl border-white/50 shadow-2xl" align="end">
                        <div className="space-y-4">
                          <p className="font-bold text-sm border-b border-border/50 pb-2">Select Guests & Rooms</p>
                          <div className="flex items-center justify-between">
                            <p className="text-sm font-bold">Rooms</p>
                            <div className="flex items-center gap-3">
                              <button onClick={() => setHotelRooms(prev => Math.max(1, prev - 1))} className="w-8 h-8 rounded-full border border-border flex items-center justify-center hover:bg-secondary text-lg">-</button>
                              <span className="text-sm font-black w-4 text-center">{hotelRooms}</span>
                              <button onClick={() => setHotelRooms(prev => prev + 1)} className="w-8 h-8 rounded-full border border-border flex items-center justify-center hover:bg-secondary text-lg">+</button>
                            </div>
                          </div>
                          {[{ label: "Adults", key: "adults" }, { label: "Children", key: "children" }].map((item) => (
                            <div key={item.key} className="flex items-center justify-between">
                              <p className="text-sm font-bold">{item.label}</p>
                              <div className="flex items-center gap-3">
                                <button onClick={() => setHotelGuests(prev => ({ ...prev, [item.key]: Math.max(item.key === 'adults' ? 1 : 0, (prev as any)[item.key] - 1) }))} className="w-8 h-8 rounded-full border border-border flex items-center justify-center hover:bg-secondary text-lg">-</button>
                                <span className="text-sm font-black w-4 text-center">{(hotelGuests as any)[item.key]}</span>
                                <button onClick={() => setHotelGuests(prev => ({ ...prev, [item.key]: (prev as any)[item.key] + 1 }))} className="w-8 h-8 rounded-full border border-border flex items-center justify-center hover:bg-secondary text-lg">+</button>
                              </div>
                            </div>
                          ))}
                        </div>
                      </PopoverContent>
                    </Popover>
                  </div>
                </div>

                <div className="grid gap-3 sm:gap-4 lg:grid-cols-3 md:grid-cols-2 mt-2">
                  <div className="relative group flex flex-col">
                    <Label className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground/80 mb-1 ml-2">Hotel Category</Label>
                    <Select value={hotelCategory || "4-star"} onValueChange={setHotelCategory}>
                      <SelectTrigger className={cn(BaseGlassClasses, "px-4 w-full")}>
                        <SelectValue placeholder="Select Category" />
                      </SelectTrigger>
                      <SelectContent className="rounded-xl border-white/50 bg-white/95 backdrop-blur-xl">
                        <SelectItem value="2-star">2 Star Hotel</SelectItem>
                        <SelectItem value="3-star">3 Star Hotel</SelectItem>
                        <SelectItem value="4-star">4 Star Hotel</SelectItem>
                        <SelectItem value="5-star">5 Star Luxury</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="relative group flex flex-col">
                    <Label className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground/80 mb-1 ml-2">Budget (Optional)</Label>
                    <div className="relative">
                      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-primary font-bold text-xs z-10">PKR</div>
                      <Input placeholder="e.g. 50,000" value={hotelBudget} onChange={(e) => setHotelBudget(e.target.value)} className={cn(InputGlassClasses, "pl-[3.5rem]")} />
                    </div>
                  </div>

                  <div className="relative group flex flex-col lg:col-span-1">
                    <Label className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground/80 mb-1 ml-2">Contact No.</Label>
                    <div className="relative">
                      <Phone className="absolute left-3.5 sm:left-4 top-1/2 -translate-y-1/2 text-primary/50 z-10" size={18} />
                      <Input placeholder="WhatsApp No." type="tel" value={userPhone} onChange={(e) => setUserPhone(e.target.value)} className={InputGlassClasses} />
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-end mt-6 sm:mt-8 pt-4 border-t border-border/40">
                  <Button
                    onClick={() => window.open(getInquiryMessage("+923025204291"), "_blank")}
                    disabled={!isHotelValid()}
                    className="w-full md:w-auto h-12 md:h-14 px-8 md:px-12 rounded-[1.25rem] bg-gradient-to-r from-emerald-600 to-emerald-500 text-white shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 font-bold text-sm md:text-base disabled:opacity-50"
                  >
                    <Search className="mr-2.5" size={18} />
                    Find Best Hotels
                  </Button>
                </div>
              </motion.div>
            )}

          </AnimatePresence>
        </div>
      </div>

      {/* Premium Inquiry Modal */}
      <AnimatePresence>
        {showInquiryModal && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/60 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="bg-white/95 backdrop-blur-2xl rounded-[2rem] sm:rounded-[2.5rem] shadow-2xl border border-white w-full max-w-md overflow-hidden max-h-[90vh] flex flex-col"
            >
              <div className="bg-gradient-to-br from-primary to-primary-glow p-6 sm:p-8 text-white relative shrink-0">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-10 -mt-10" />
                <button onClick={() => setShowInquiryModal(false)} className="absolute right-4 top-4 sm:right-6 sm:top-6 text-white/70 hover:text-white p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors backdrop-blur-md">
                  <X size={18} />
                </button>
                <h3 className="text-2xl sm:text-3xl font-black mb-1 tracking-tight">Travel Inquiry</h3>
                <p className="text-white/90 text-xs sm:text-sm font-medium">Send your details to our expert via WhatsApp</p>
              </div>

              <div className="p-5 sm:p-7 space-y-4 overflow-y-auto custom-scrollbar">
                <div className="bg-secondary/20 rounded-3xl p-4 border border-border/50 shadow-inner">
                  <p className="text-[10px] text-center text-muted-foreground uppercase tracking-widest font-bold mb-4">
                    Choose Your Travel Expert
                  </p>
                  <div className="space-y-3 sm:space-y-4">
                    {(activeTab === 'umrah' ? [
                      { name: "Sammer Abbasi", role: "Umrah Specialist", phone: "+923445979486" }
                    ] : activeTab === 'flights' ? [
                      { name: "Sammer Abbasi", role: "Ticketing Officer", phone: "+923445979486" },
                      { name: "Support Desk", role: "Ticketing Team", phone: "+923025204291" }
                    ] : [
                      { name: "Sammer Abbasi", role: "Travel Consultant", phone: "+923445979486" },
                      { name: "Sammer Abbasi", role: "Visa Specialist", phone: "+923025204291" },
                      { name: "RS Travel Expert", role: "Service Representative", phone: "+923025204291" }
                    ]).map((rep) => (
                      <a
                        key={rep.name + rep.role}
                        href={getInquiryMessage(rep.phone)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 sm:gap-4 w-full p-3 sm:p-4 bg-white/90 backdrop-blur-sm border border-border/50 hover:border-emerald-500 shadow-sm hover:shadow-md rounded-[1.25rem] transition-all duration-300 hover:-translate-y-1 group/wa"
                      >
                        <div className="h-10 w-10 sm:h-12 sm:w-12 shrink-0 rounded-[1rem] bg-emerald-500/10 flex items-center justify-center group-hover/wa:bg-emerald-500 transition-colors">
                          <MessageCircle size={20} className="text-emerald-600 group-hover/wa:text-white transition-colors" />
                        </div>
                        <div className="flex-1 text-left min-w-0">
                          <p className="text-[9px] sm:text-[10px] text-muted-foreground font-bold uppercase tracking-wider truncate mb-0.5">{rep.role}</p>
                          <p className="text-sm sm:text-base font-black text-foreground truncate leading-none">{rep.name}</p>
                        </div>
                        <div className="flex flex-col items-end gap-1">
                          <div className="h-2 w-2 shrink-0 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
                          <span className="text-[8px] font-bold text-muted-foreground group-hover/wa:text-emerald-600 uppercase tracking-tighter hidden sm:block">Online</span>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>

                <p className="text-[9px] sm:text-[10px] text-center text-muted-foreground uppercase tracking-widest font-bold opacity-60 pt-2">
                  Your journey starts with {COMPANY.name}
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}