import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { EEATExpertiseSection } from "@/components/site/EEATExpertiseSection";
import { ServiceCrossLinksHub } from "@/components/site/InternalCrossLinks";
import React, { Suspense } from "react";
const BookingWidget = React.lazy(() => import("@/components/site/BookingWidget").then(m => ({ default: m.BookingWidget })));
import { Hotel, Crown, Wallet, Globe2, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/hotel-booking")({
  head: () => ({
    meta: [
      { title: "Hotel Booking for Visa in Islamabad | RS Travel" },
      {
        name: "description",
        content:
          "Verified hotel bookings worldwide for visa applications and vacations. 100% embassy-approved hotel vouchers in Dubai, UK, Schengen & Makkah. Call 051-2000147.",
      },
      {
        name: "keywords",
        content:
          "best hotel booking agent islamabad, book hotel online pakistan, hotels in makkah near haram walking distance, haram view room makkah booking pkr, madinah hotel booking for umrah, jabal omar makkah hotel package, hilton suites makkah booking pakistan, clock tower fairmont makkah reservation, cheap hotel reservations for visa application ISB, schengen visa hotel booking islamabad, uk visa hotel reservation pakistan, dubai hotel booking from pakistan, international hotel reservations agent pakistan, luxury hotel booking islamabad, budget hotel booking pakistan, visa compliant hotel reservation letter, makkah clock tower hotel booking pkr, madinah shuttle service hotel umrah, 5 star makkah hotel near haram for umrah, europe hotel booking for schengen visa, turkey istanbul hotel booking islamabad, honeymoon hotel packages from islamabad",
      },
      { name: "robots", content: "index, follow, max-snippet:-1, max-image-preview:large" },
      { name: "author", content: "RS Travel and Tours" },
      { name: "geo.region", content: "PK-IS" },
      { name: "geo.placename", content: "Islamabad" },
      { property: "og:title", content: "Best Hotel Booking Agent Islamabad — Worldwide Reservations | RS Travel and Tours" },
      {
        property: "og:description",
        content: "Global hotel partners. Best rates for visa applications & holidays. Luxury to budget worldwide.",
      },
      { property: "og:url", content: "https://rstravel.pk/hotel-booking" },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_PK" },
      { property: "og:site_name", content: "RS Travel and Tours — Pakistan's No.1 Travel Agency" },
      { property: "og:image", content: "https://rstravel.pk/og-image.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Hotel Booking Agent Islamabad | RS Travel and Tours" },
      { name: "twitter:description", content: "Cheapest hotel reservations for visas & holidays from Islamabad." },
      { name: "twitter:image", content: "https://rstravel.pk/og-image.jpg" },
    ],
    links: [
      { rel: "canonical", href: "https://rstravel.pk/hotel-booking" },
    ],
  }),
  component: HotelBooking,
});

const HOTEL_FAQS = [
  {
    q: "Are your hotel bookings accepted by Schengen, UK, and US embassies?",
    a: "Yes. We issue 100% live, verifiable hotel vouchers generated directly through global B2B inventory with official confirmation numbers (PNR/Voucher ID) and hotel contact details that consular officers can inspect.",
  },
  {
    q: "Can I get refundable or pay-at-hotel reservations for visa applications?",
    a: "Yes, we specialize in flexible booking policies that allow date amendments or cancellations in case of visa processing delays or unexpected travel schedule adjustments.",
  },
  {
    q: "Do you provide hotel booking vouchers for Umrah in Makkah and Madinah?",
    a: "Yes, we hold direct contracting with top hotels in Makkah (Clock Tower, Jabal Omar, Ibrahim Khalil Road) and Madinah (Central Northern/Southern zones near the Prophet's Mosque) with confirmed proximity guarantees.",
  },
  {
    q: "How fast can I receive my hotel voucher in Islamabad?",
    a: "Instant issuance. We generate and deliver official hotel booking vouchers via WhatsApp and email within 15 to 30 minutes.",
  },
];

function HotelBooking() {
  const hotelSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://rstravel.pk/hotel-booking#service",
        name: "Worldwide Hotel Booking & Embassy Vouchers Islamabad",
        serviceType: "Hotel Reservation & Travel Lodging",
        description: "Embassy-verifiable hotel reservations and confirmed vouchers for Schengen, UK, US, and Canadian visa applications, as well as luxury stays in Makkah, Madinah, Dubai, and Europe.",
        provider: {
          "@type": "TravelAgency",
          "@id": "https://rstravel.pk/#organization",
          name: "RS Travel and Tours",
          telephone: "+92 51 2000147",
          url: "https://rstravel.pk/",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Office no 6 Mezzanine floor Ratta Mansion Fazal-e-Haq Road Blue Area",
            addressLocality: "Islamabad",
            addressRegion: "Islamabad Capital Territory",
            postalCode: "44000",
            addressCountry: "PK",
          },
        },
        areaServed: "Pakistan",
      },
      {
        "@type": "FAQPage",
        "@id": "https://rstravel.pk/hotel-booking#faq",
        mainEntity: HOTEL_FAQS.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: f.a,
          },
        })),
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json">{JSON.stringify(hotelSchema)}</script>
      <PageHero
        eyebrow="Hotels"
        title="Worldwide Hotel Bookings & Visa Vouchers in Islamabad"
        subtitle="Embassy-verifiable hotel reservations, 5-star luxury stays, and budget-friendly accommodations across 100+ countries."
      />

      {/* Integrated Booking Widget */}
      <div className="relative z-10 -mt-16 md:-mt-24 pb-12">
        <Reveal delay={0.2}>
          <Suspense fallback={<div className="h-[200px] w-full animate-pulse rounded-3xl bg-white/5 backdrop-blur-md border border-white/10" />}><BookingWidget initialTab="hotel" /></Suspense>
        </Reveal>
      </div>

      <section className="container-px mx-auto max-w-7xl py-20 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {[
          { icon: Crown, t: "Luxury & 5-Star Resorts", d: "Premium suites at Marriott, Hilton, Accor, and boutique luxury properties in London, Dubai, Paris, and Istanbul." },
          { icon: Hotel, t: "Embassy Verifiable Vouchers", d: "100% compliant hotel reservations required for Schengen, UK, US, and Canadian visa file submissions." },
          { icon: Wallet, t: "Smart Budget Accommodations", d: "Handpicked, verified city-center hotels with free Wi-Fi, breakfast, and flexible cancellation options." },
        ].map((b, i) => (
          <Reveal key={b.t} delay={i * 0.05}>
            <div className="card-3d h-full rounded-2xl border border-border bg-card p-6 shadow-soft">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary-glow text-primary-foreground shadow-soft">
                <b.icon size={20} />
              </span>
              <h3 className="mt-5 text-lg font-bold">{b.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{b.d}</p>
            </div>
          </Reveal>
        ))}
      </section>

      {/* Hotel Reservation Standards Breakdown */}
      <section className="bg-secondary/20 py-20 border-t border-b border-border">
        <div className="container-px mx-auto max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold md:text-4xl">
              Strict Embassy Compliance for Lodging Reservations
            </h2>
            <p className="mt-4 text-muted-foreground text-lg">
              Avoid fake booking traps or canceled vouchers during consular checks. RS Travel ensures your hotel reservation withstands embassy inspection.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
              <h3 className="text-lg font-bold text-foreground mb-3">Live Global Distribution System (GDS)</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Reservations are transmitted directly to the hotel management system with active booking confirmation numbers and authentic invoice vouchers.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
              <h3 className="text-lg font-bold text-foreground mb-3">Matched City & Itinerary Planning</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Hotel dates match your flight tickets, day-by-day travel plan, and cover letter exactly, preventing red flags from visa officers.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
              <h3 className="text-lg font-bold text-foreground mb-3">Flexible Modification Window</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Should your visa appointment or travel date move, our team adjusts your lodging booking without financial penalty.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="container-px mx-auto max-w-4xl py-20">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold md:text-3xl">Frequently Asked Questions — Hotel Bookings</h2>
          <p className="mt-2 text-muted-foreground">Key information on hotel reservations for visas and international travel.</p>
        </div>
        <div className="space-y-4">
          {HOTEL_FAQS.map((faq, i) => (
            <div key={i} className="rounded-2xl border border-border bg-card p-6 shadow-soft">
              <h3 className="text-base font-bold text-foreground mb-2 flex items-start gap-2">
                <span className="text-primary font-bold">Q:</span> {faq.q}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed pl-6">{faq.a}</p>
            </div>
          ))}
        </div>

        {/* Cross-Service Solutions Silo */}
        <div className="mt-16">
          <ServiceCrossLinksHub currentService="/hotel-booking" />
        </div>

        {/* E-E-A-T Hotel & Consular Voucher Section */}
        <div className="mt-12">
          <EEATExpertiseSection
            countryName="Global Hospitality"
            serviceName="Embassy Verifiable Hotel Reservations & B2B Vouchers"
            consultantRole="Senior Corporate Hospitality Coordinator"
            lastUpdated="October 2026"
          />
        </div>
      </section>
    </>
  );
}
