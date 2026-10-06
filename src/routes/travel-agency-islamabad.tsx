import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { EEATExpertiseSection } from "@/components/site/EEATExpertiseSection";
import { ServiceCrossLinksHub } from "@/components/site/InternalCrossLinks";
import { ContactForm } from "@/components/site/ContactForm";
import React, { Suspense } from "react";
const BookingWidget = React.lazy(() => import("@/components/site/BookingWidget").then(m => ({ default: m.BookingWidget })));
import {
  MapPin,
  Phone,
  Mail,
  Award,
  Clock4,
  ShieldCheck,
  Plane,
  Building2,
  Users,
  CheckCircle2,
  ArrowRight,
  Globe2,
  Star,
  Facebook,
} from "lucide-react";
import { COMPANY } from "@/data/company";

export const Route = createFileRoute("/travel-agency-islamabad")({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1.0" },
      { title: "Best Travel Agency in Islamabad (2026) — RS Travel & Tours Blue Area" },
      {
        name: "description",
        content:
          "RS Travel and Tours is the top-rated travel agency in Blue Area, Islamabad. IATA-authorized air ticketing, Umrah packages 2026, holiday tours, worldwide hotel bookings & travel insurance. Call 051-2000147.",
      },
      {
        name: "keywords",
        content:
          "travel agency islamabad, travel agency blue area islamabad, best travel agency in islamabad, top travel agents islamabad, iata travel agency islamabad, flight booking islamabad, umrah packages islamabad 2026, holiday tour packages pakistan, corporate travel agency islamabad, travel agency near me blue area",
      },
      { name: "robots", content: "index, follow, max-snippet:-1, max-image-preview:large" },
      { name: "author", content: "RS Travel and Tours" },
      { name: "geo.region", content: "PK-IS" },
      { name: "geo.placename", content: "Islamabad, Blue Area" },
      { name: "geo.position", content: "33.7135;73.0673" },
      { name: "ICBM", content: "33.7135, 73.0673" },
      {
        property: "og:title",
        content: "Best Travel Agency in Islamabad (2026) — RS Travel & Tours Blue Area",
      },
      {
        property: "og:description",
        content:
          "IATA-accredited travel agency in Blue Area, Islamabad. Cheap flights, VIP Umrah packages, hotel reservations & corporate travel management.",
      },
      { property: "og:url", content: "https://rstravel.pk/travel-agency-islamabad" },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_PK" },
      { property: "og:site_name", content: "RS Travel and Tours" },
      { property: "og:image", content: "https://rstravel.pk/og-image.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Travel Agency in Islamabad | RS Travel and Tours" },
      { name: "twitter:description", content: "Top IATA travel agency in Blue Area Islamabad. Flights, Umrah & holidays." },
      { name: "twitter:image", content: "https://rstravel.pk/og-image.jpg" },
    ],
    links: [{ rel: "canonical", href: "https://rstravel.pk/travel-agency-islamabad" }],
  }),
  component: TravelAgencyIslamabadPage,
});

const AGENCY_FAQS = [
  {
    q: "Why choose RS Travel and Tours as your travel agency in Islamabad?",
    a: "Operating since 2009 in Blue Area, Islamabad, RS Travel and Tours provides IATA-accredited ticketing, direct airline Global Distribution System (GDS) access, dedicated holiday planners, transparent pricing, and 24/7 client support.",
  },
  {
    q: "Where is your travel agency located in Islamabad?",
    a: "Our central office is at Office #6, Mezzanine Floor, Ratta Mansion, Fazal-e-Haq Road, Blue Area, Islamabad (44000) with convenient access from 7th Avenue and Metro Bus.",
  },
  {
    q: "Do you offer corporate travel management for companies in Islamabad & Rawalpindi?",
    a: "Yes. We manage corporate flight bookings, flexible invoicing, executive hotel reservations, and expedited visa facilitation for businesses across the Twin Cities.",
  },
  {
    q: "Can I book customized Umrah packages through your Islamabad desk?",
    a: "Yes. We organize tailor-made 5-star and economy Umrah packages, including direct flights from Islamabad (ISB), luxury hotel accommodation near the Haram, luxury transport, and e-visa issuance.",
  },
];

function TravelAgencyIslamabadPage() {
  const agencySchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["TravelAgency", "LocalBusiness"],
        "@id": "https://rstravel.pk/travel-agency-islamabad#agency",
        name: "RS Travel and Tours — Travel Agency Islamabad",
        url: "https://rstravel.pk/travel-agency-islamabad",
        telephone: COMPANY.phone,
        email: COMPANY.email,
        priceRange: "$$",
        image: "https://rstravel.pk/og-image.jpg",
        description:
          "Premier IATA-accredited travel agency located in Blue Area, Islamabad specializing in worldwide air ticketing, customized holiday tours, Umrah packages, and travel logistics.",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Office no 6 Mezzanine floor Ratta Mansion Fazal-e-Haq Road Blue Area",
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
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          opens: "10:00",
          closes: "19:00",
        },
      },
      {
        "@type": "FAQPage",
        "@id": "https://rstravel.pk/travel-agency-islamabad#faq",
        mainEntity: AGENCY_FAQS.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.a,
          },
        })),
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json">{JSON.stringify(agencySchema)}</script>
      <PageHero
        eyebrow="Islamabad Headquarters"
        title="Your Premier Travel Agency in Blue Area, Islamabad"
        subtitle="Since 2009, RS Travel and Tours has delivered world-class air ticketing, holiday packages, Umrah services, and corporate travel solutions."
      />

      <div className="-mt-16 md:-mt-24 relative z-10 container-px mx-auto max-w-7xl pb-12">
        <Suspense fallback={<div className="h-[200px] w-full animate-pulse rounded-3xl bg-white/5 backdrop-blur-md border border-white/10" />}>
          <BookingWidget initialTab="flight" />
        </Suspense>
      </div>

      {/* Trust Badges */}
      <section className="container-px mx-auto max-w-7xl py-12">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Award, title: "IATA Accredited", desc: "Direct ticketing on 300+ global airlines" },
            { icon: Clock4, title: "15+ Years Service", desc: "Trusted in Blue Area since 2009" },
            { icon: Users, title: "20,000+ Clients", desc: "Satisfied leisure & corporate travelers" },
            { icon: ShieldCheck, title: "Transparent Pricing", desc: "Zero hidden charges & instant PNRs" },
          ].map((item, idx) => (
            <Reveal key={item.title} delay={idx * 0.05}>
              <div className="rounded-2xl border border-border/60 bg-card p-6 shadow-soft">
                <item.icon className="text-primary mb-3" size={28} />
                <h3 className="font-bold text-lg">{item.title}</h3>
                <p className="text-xs text-muted-foreground mt-1">{item.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-secondary/30 py-20 border-y border-border/40">
        <div className="container-px mx-auto max-w-7xl space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-primary">Comprehensive Travel Services</span>
            <h2 className="text-3xl font-bold md:text-4xl">Full-Spectrum Travel Solutions from Islamabad</h2>
            <p className="text-muted-foreground text-sm">
              From individual holiday seekers to large corporate delegations, we provide customized travel logistics with round-the-clock support.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "IATA Air Ticketing",
                desc: "Instant flight reservations with special discounted fares on PIA, Emirates, Qatar Airways, Turkish Airlines, and Saudia.",
                link: "/air-ticketing",
                tag: "Best Fare Guarantee",
              },
              {
                title: "Umrah Packages 2026",
                desc: "5-Star executive and economical family Umrah groups with hotel bookings near Haram, luxury transport, and e-visas.",
                link: "/umrah",
                tag: "VIP & Economy",
              },
              {
                title: "Worldwide Holiday Tours",
                desc: "Custom holiday itineraries for Europe, Dubai, Turkey, Malaysia, Thailand, Baku, Maldives, and Central Asia.",
                link: "/countries",
                tag: "Tailor-Made Plans",
              },
              {
                title: "Hotel Booking & Vouchers",
                desc: "Confirmed hotel reservation vouchers worldwide, tailored to embassy requirements and personal budget.",
                link: "/hotel-booking",
                tag: "Verified Lodging",
              },
              {
                title: "Schengen Travel Insurance",
                desc: "Instant €30,000 to $100,000 embassy-compliant travel medical insurance issued within 10 minutes.",
                link: "/travel-insurance",
                tag: "Instant Policy",
              },
              {
                title: "Passport Advisory Desk",
                desc: "Fast Pakistani passport renewal, urgent token booking guidance, and US passport file preparation in Blue Area.",
                link: "/passport-services",
                tag: "Express Guidance",
              },
            ].map((s, i) => (
              <Reveal key={s.title} delay={i * 0.05}>
                <div className="h-full rounded-2xl border border-border/60 bg-card p-6 shadow-soft flex flex-col justify-between hover:border-primary/40 transition-colors">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-primary bg-primary/10 px-2.5 py-1 rounded-full">{s.tag}</span>
                    <h3 className="text-xl font-bold mt-4 mb-2">{s.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                  </div>
                  <Link to={s.link} className="mt-6 inline-flex items-center gap-1.5 text-sm font-bold text-primary hover:underline">
                    Explore Details <ArrowRight size={14} />
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Location & Contact */}
      <section className="container-px mx-auto max-w-7xl py-20">
        <div className="grid gap-12 lg:grid-cols-2 items-start">
          <div className="space-y-6">
            <span className="text-xs font-bold uppercase tracking-wider text-primary">Visit Our Blue Area Office</span>
            <h2 className="text-3xl font-bold">Conveniently Located in Islamabad's Commercial Heart</h2>
            <p className="text-muted-foreground leading-relaxed">
              Our office in Ratta Mansion Plaza, Fazal-e-Haq Road, Blue Area offers walk-in consultations with experienced ticketing officers and holiday consultants.
            </p>

            <ul className="space-y-4 text-sm text-foreground/90">
              <li className="flex gap-3 items-start">
                <MapPin className="text-primary mt-1 shrink-0" size={18} />
                <div>
                  <strong>Address:</strong> {COMPANY.address}
                </div>
              </li>
              <li className="flex gap-3 items-center">
                <Phone className="text-primary shrink-0" size={18} />
                <div>
                  <strong>Phone:</strong> <a href={`tel:${COMPANY.phone.replace(/\s/g, "")}`} className="hover:text-primary">{COMPANY.phone}</a> | <strong>WhatsApp:</strong> <a href={`https://wa.me/923445979486`} className="hover:text-primary">{COMPANY.whatsapp}</a>
                </div>
              </li>
              <li className="flex gap-3 items-center">
                <Mail className="text-primary shrink-0" size={18} />
                <div>
                  <strong>Email:</strong> <a href={`mailto:${COMPANY.email}`} className="hover:text-primary">{COMPANY.email}</a>
                </div>
              </li>
            </ul>

            <div className="overflow-hidden rounded-2xl border border-border h-64 mt-6">
              <iframe
                title="RS Travel and Tours Islamabad Office Location"
                src="https://maps.google.com/maps?q=Ratta%20Mansion%2C%20Fazal-e-Haq%20Road%2C%20Blue%20Area%2C%20Islamabad&t=&z=16&ie=UTF8&iwloc=&output=embed"
                loading="lazy"
                className="h-full w-full border-0"
              />
            </div>
          </div>

          <ContactForm />
        </div>

        {/* FAQs */}
        <div className="mt-20 max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold">Frequently Asked Questions — Travel Agency Islamabad</h3>
          </div>
          <div className="space-y-4">
            {AGENCY_FAQS.map((faq, i) => (
              <div key={i} className="rounded-2xl border border-border/60 bg-card p-6 shadow-soft">
                <h4 className="text-base font-bold text-foreground mb-2 flex items-start gap-2">
                  <span className="text-primary font-black">Q:</span> {faq.q}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed pl-6">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Internal Links Hub */}
        <div className="mt-16">
          <ServiceCrossLinksHub currentService="Travel Agency Islamabad" />
        </div>

        {/* E-E-A-T Section */}
        <div className="mt-16">
          <EEATExpertiseSection
            countryName="Pakistan & Worldwide"
            serviceName="IATA Flight Ticketing, Tour Packages & Umrah Operations"
            consultantRole="Head of Global Travel Operations & Ticketing Desk"
            lastUpdated="September 2026"
          />
        </div>
      </section>
    </>
  );
}
