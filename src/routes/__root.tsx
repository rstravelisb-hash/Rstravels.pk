import { Outlet, Link, createRootRoute, HeadContent } from "@tanstack/react-router";

import { Navbar } from "@/components/site/Navbar";
import { TopBar } from "@/components/site/TopBar";
import { Footer } from "@/components/site/Footer";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import { StickyMobileCTA } from "@/components/site/StickyMobileCTA";
import { COMPANY } from "@/data/company";

function NotFoundComponent() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0f1d] px-4 py-20">
      {/* Dynamic Background Glows */}
      <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-primary/20 blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-accent/20 blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      <div className="relative z-10 max-w-2xl text-center px-6 py-12 rounded-[2.5rem] bg-slate-900/60 backdrop-blur-2xl border border-slate-700/50 shadow-2xl">
        <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-xs font-black uppercase tracking-widest text-accent mb-6 shadow-glow">
          <span className="h-2 w-2 rounded-full bg-accent animate-ping" />
          Page Lost in Transit
        </div>

        <h1 className="text-8xl md:text-9xl font-black tracking-tight text-white/90 drop-shadow-2xl">
          4<span className="text-accent">0</span>4
        </h1>

        <h2 className="mt-4 text-2xl md:text-3xl font-black text-white uppercase tracking-tight">
          Destination Not Found
        </h2>

        <p className="mt-3 text-sm md:text-base text-slate-300 max-w-md mx-auto leading-relaxed">
          The page or visa package you are looking for has either departed to a new route or does not exist.
        </p>

        {/* Quick Route Shortcuts */}
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-2.5 max-w-lg mx-auto">
          {[
            { label: "Visa Services", to: "/visa-services" },
            { label: "Air Ticketing", to: "/air-ticketing" },
            { label: "Umrah Packages", to: "/umrah" },
            { label: "Assessment", to: "/profile-assessment" },
          ].map((item) => (
            <Link
              key={item.to}
              to={item.to as any}
              className="px-3 py-2.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-accent/40 text-xs font-bold text-slate-200 transition-all text-center"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            to="/"
            className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-accent px-8 py-3.5 text-sm font-bold text-accent-foreground shadow-glow hover:shadow-elevated transition-all hover:-translate-y-0.5"
          >
            Return to Homepage
          </Link>
          <Link
            to="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-8 py-3.5 text-sm font-bold text-white hover:bg-white/10 transition-all"
          >
            Contact Support
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootComponent() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["TravelAgency", "LocalBusiness", "ProfessionalService"],
    name: COMPANY.name,
    alternateName: [
      "RS Travel and Tours",
      "RS Travels",
      "RS Travels PK",
      "RS Consultants",
      "RS Travel and Tours Islamabad",
      "RS Travel & Tours Pakistan",
      "RS Travel",
      "RS Tour and Travels",
      "Best Visa Consultant in Islamabad",
      "No 1 Travel Agency in Islamabad",
      "Top Travel Agency in Islamabad",
      "Best Travel Agency in Islamabad"
    ],
    description:
      "Pakistan's No.1 Travel Agency & World-Class Visa Consultant. IATA-accredited, 15+ years of excellence, high success rate. Expert in Schengen, USA, UK, Canada, Australia visas, cheap flights, Umrah packages & hotel bookings from Islamabad.",
    slogan: "Pakistan's No.1 Travel Agency — Your Gateway to the World",
    image: "https://www.rstravels.pk/og-image.jpg",
    logo: {
      "@type": "ImageObject",
      url: "https://www.rstravels.pk/logo.png"
    },
    "@id": "https://www.rstravels.pk/#localbusiness",
    url: "https://www.rstravels.pk",
    telephone: COMPANY.phone,
    email: COMPANY.email,
    priceRange: "$$",
    currenciesAccepted: "PKR, USD, EUR, GBP",
    paymentAccepted: "Cash, Bank Transfer, JazzCash, EasyPaisa, Credit Card",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Office no 6 Meznine floor Ratta Mansion Fazal-eHaq Road Blue Area",
      addressLocality: "Islamabad",
      addressRegion: "Islamabad Capital Territory",
      postalCode: "44000",
      addressCountry: "PK",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 33.7135,
      longitude: 73.0673,
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+92 51 2000147",
      contactType: "customer service",
      contactOption: "TollFree",
      areaServed: ["PK", "US", "GB", "AE", "SA", "CA", "AU"],
      availableLanguage: ["en", "ur"]
    },
    areaServed: [
      { "@type": "Country", name: "Pakistan" },
      { "@type": "AdministrativeArea", name: "Islamabad Capital Territory" },
      { "@type": "AdministrativeArea", name: "Punjab" },
      { "@type": "AdministrativeArea", name: "Sindh" },
      { "@type": "AdministrativeArea", name: "Khyber Pakhtunkhwa" },
      { "@type": "AdministrativeArea", name: "Balochistan" },
      { "@type": "AdministrativeArea", name: "Azad Jammu & Kashmir" },
      { "@type": "City", name: "Islamabad" },
      { "@type": "City", name: "Rawalpindi" },
      { "@type": "City", name: "Lahore" },
      { "@type": "City", name: "Karachi" },
      { "@type": "City", name: "Peshawar" },
      { "@type": "City", name: "Multan" },
      { "@type": "City", name: "Faisalabad" },
      { "@type": "City", name: "Sialkot" },
      { "@type": "City", name: "Gujranwala" },
      { "@type": "City", name: "Bahawalpur" },
      { "@type": "City", name: "Dubai" },
    ],
    knowsAbout: [
      "Schengen Visit & Family Reunification Visas",
      "UK Visitor & Family Reunification Visas",
      "USA B1/B2 Visitor Visa Appointments & Interview Prep",
      "Canada Visitor Visa & Refusal Appeals",
      "Australia Subclass 600 Visitor Visas",
      "MOFA & Apostille Document Attestation Pakistan",
      "Embassy & VFS Appointment Booking",
      "Instant Online E-Visa Processing (50+ Countries)",
      "IATA Air Ticketing Worldwide",
      "Umrah Packages & Hotel Bookings"
    ],
    sameAs: [
      COMPANY.socials.facebook,
      COMPANY.socials.instagram,
      COMPANY.socials.linkedin,
      COMPANY.socials.twitter,
      "https://www.rstravels.pk",
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      bestRating: "5",
      ratingCount: "2847",
      reviewCount: "1523",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Travel & Visa Services",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Schengen Visa Consultancy" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "USA B1/B2 & F1 Visa Processing" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "UK Standard Visitor Visa" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Canada TRV & Study Permit" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Australia Subclass 600 Visa" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "IATA Air Ticketing" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Umrah Packages 2026" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "International Hotel Bookings" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Travel Insurance" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Passport Services" } },
      ],
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "10:00",
      closes: "19:00",
    },
    foundingDate: "2009",
    numberOfEmployees: { "@type": "QuantitativeValue", value: "25+" },
  };

  return (
    <div className="flex min-h-screen flex-col w-full max-w-full overflow-x-hidden">
      <HeadContent />
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      <TopBar />
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
      <StickyMobileCTA />
    </div>
  );
}
