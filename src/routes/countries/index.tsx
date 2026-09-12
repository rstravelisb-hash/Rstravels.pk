import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { CountryCard } from "@/components/site/CountryCard";
import { Reveal } from "@/components/site/Reveal";
import { ServiceCrossLinksHub } from "@/components/site/InternalCrossLinks";
import { EEATExpertiseSection } from "@/components/site/EEATExpertiseSection";
import React, { Suspense } from "react";
const BookingWidget = React.lazy(() => import("@/components/site/BookingWidget").then(m => ({ default: m.BookingWidget })));
import { DESTINATIONS } from "@/data/destinations";

export const Route = createFileRoute("/countries/")({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1.0" },
      { title: "50+ Visa Destinations Worldwide — Apply from Islamabad | Pakistan's #1 Visa Agency" },
      {
        name: "description",
        content:
          "RS Travel and Tours covers 50+ countries worldwide. Expert visa assistance for USA, UK, Canada, Australia, Schengen, Dubai, Turkey, Malaysia & more from Islamabad. Pakistan's #1 visa consultancy with 98% approval rate.",
      },
      {
        name: "keywords",
        content:
          "visa destinations from pakistan, all countries visa consultant islamabad, international tour packages from pakistan, schengen visa from pakistan, USA visa from islamabad, UK visa destinations ISB, canada immigration islamabad, australia visit visa ISB, dubai tour package from pakistan, turkey holiday package from islamabad, thailand tour from pakistan, malaysia package 2026, baku azerbaijan package, maldives honeymoon from pakistan, best outbound holiday packages islamabad, cheap international tours from pakistan, top visa destinations pakistan, europe visa consultancy blue area",
      },
      { name: "robots", content: "index, follow, max-snippet:-1, max-image-preview:large" },
      { name: "geo.region", content: "PK-IS" },
      { name: "geo.placename", content: "Islamabad" },
      { property: "og:title", content: "50+ Global Visa Destinations — RS Travel and Tours | Pakistan's #1" },
      {
        property: "og:description",
        content:
          "Expert visa consultancy for North America, Europe, Oceania, Asia, Middle East & Africa. 98% approval rate from Islamabad.",
      },
      { property: "og:image", content: "https://rstravel.pk/og-image.jpg" },
      { property: "og:url", content: "https://rstravel.pk/countries" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "50+ Visa Destinations | RS Travel and Tours Pakistan" },
      { name: "twitter:description", content: "USA, UK, Canada, Schengen, Australia & 50+ more. Apply from Islamabad." },
      { name: "twitter:image", content: "https://rstravel.pk/og-image.jpg" },
    ],
    links: [
      { rel: "canonical", href: "https://rstravel.pk/countries" },
    ],
  }),
  component: CountriesPage,
});

const DESTINATION_FAQS = [
  {
    q: "Which international visa categories does RS Travel and Tours assist with?",
    a: "We provide complete consular file preparation, biometric appointments, and interview coaching for Tourist/Visitor Visas (Subclass 600, B1/B2, Standard Visitor, Schengen Type C), Family Reunion/Spousal Visas, Business Delegations, and Conference Travel."
  },
  {
    q: "What is the average processing turnaround for European Schengen visas from Islamabad?",
    a: "Standard Schengen visa decisions typically take 15 to 30 calendar days following your biometric appointment at VFS Global / Gerry's Islamabad, depending on embassy workload and applicant documentation completeness."
  },
  {
    q: "Do you supply verified flight itineraries and hotel bookings for visa applications?",
    a: "Yes. As an IATA-accredited agency, we generate live verifiable flight reservations and hotel booking confirmations that adhere directly to embassy validation standards."
  }
];

function CountriesPage() {
  const collectionSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": "https://rstravel.pk/countries#webpage",
        "url": "https://rstravel.pk/countries",
        "name": "Global Visa Destinations & Country Guides | RS Travel and Tours",
        "description": "Directory of 50+ countries with visa file requirements, embassy procedures, and travel guidance from Islamabad.",
        "isPartOf": {
          "@type": "WebSite",
          "@id": "https://rstravel.pk/#website"
        },
        "about": {
          "@type": "TravelAgency",
          "@id": "https://rstravel.pk/#organization"
        },
        "mainEntity": {
          "@type": "ItemList",
          "itemListElement": DESTINATIONS.map((d, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": d.name,
            "url": `https://rstravel.pk/countries/${d.slug}`
          }))
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://rstravel.pk/countries#faq",
        "mainEntity": DESTINATION_FAQS.map(faq => ({
          "@type": "Question",
          "name": faq.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.a
          }
        }))
      }
    ]
  };

  return (
    <>
      <script type="application/ld+json">{JSON.stringify(collectionSchema)}</script>
      <PageHero
        eyebrow="Destinations"
        title="Visa support across every continent"
        subtitle="From iconic European capitals to vibrant Middle Eastern hubs and Oceania's natural wonders."
      />

      <div className="-mt-20 relative z-50 container-px mx-auto max-w-7xl">
        <Suspense fallback={<div className="h-[200px] w-full animate-pulse rounded-3xl bg-white/5 backdrop-blur-md border border-white/10" />}><BookingWidget initialTab="visa" /></Suspense>
      </div>

      <section className="container-px mx-auto max-w-7xl pt-20 pb-10">
        <div className="space-y-6 mb-10 text-center max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold md:text-3xl">Explore Our Global Destinations</h2>
          <p className="text-muted-foreground">
            Select a region or country to view detailed visa requirements, processing times, and
            required documentation.
          </p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {DESTINATIONS.map((c, i) => (
            <Reveal key={c.slug} delay={(i % 8) * 0.04}>
              <CountryCard
                slug={c.slug}
                name={c.name}
                short={c.shortDesc}
                image={c.image}
                accent="View Details"
              />
            </Reveal>
          ))}
        </div>
      </section>

      {/* SEO Long Form Content Section */}
      <section className="bg-secondary/20 py-20 border-t border-border mt-10">
        <div className="container-px mx-auto max-w-5xl space-y-16">
          <div className="space-y-6 text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Your Trusted Partner for Global Destinations in Islamabad
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Choosing the right destination requires the right guidance. As the top visa
              consultancy in Islamabad, RS Travel and Tours simplifies the application process for over
              50 countries. Our expertise spans across multiple continents, ensuring your travel
              dreams become a reality.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl border border-border bg-card p-8 shadow-soft">
              <h3 className="text-xl font-bold text-primary mb-3">Schengen & European Visas</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Applying for a <strong>Schengen visa from Pakistan</strong> requires precision. We
                cover all 29 Schengen member states, including popular destinations like France,
                Germany, Italy, and Spain. Whether you are aiming for a summer tour or a business
                conference, our Islamabad-based experts handle your flight reservations, hotel
                bookings, and travel insurance to meet strict embassy standards.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-8 shadow-soft">
              <h3 className="text-xl font-bold text-primary mb-3">The Americas (USA & Canada)</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Navigating the complex requirements for a <strong>USA visa from Islamabad</strong>{" "}
                (B1/B2, F1) or a Canadian study permit demands an experienced hand. We provide
                thorough DS-160 processing, interview coaching, and documentation review to maximize
                your chances of crossing the Atlantic successfully.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-8 shadow-soft">
              <h3 className="text-xl font-bold text-primary mb-3">
                Oceania (Australia & New Zealand)
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                From the bustling streets of Sydney to the landscapes of Auckland, securing an{" "}
                <strong>Australia visit visa ISB</strong> or an NZeTA is seamless with our support.
                We assist students, tourists, and skilled workers with precise documentation
                alignment for Oceanic immigration authorities.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-8 shadow-soft">
              <h3 className="text-xl font-bold text-primary mb-3">Middle East & Asia</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Looking for a reliable <strong>Dubai visit visa consultant in Islamabad</strong>? We
                offer rapid processing for UAE, Qatar, Bahrain, and Saudi Arabia. Additionally, we
                facilitate visas for top Asian destinations like Malaysia, Thailand, and Singapore,
                ensuring fast turnarounds for your holiday or business trip.
              </p>
            </div>
          </div>

          {/* Regional Visa Processing Breakdown */}
          <div className="rounded-2xl border border-border bg-card p-8 shadow-soft">
            <h3 className="text-xl font-bold text-primary mb-4">Complete Embassy & Consular Documentation Protocol</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              Every country enforces unique admissibility criteria for Pakistani passport holders. Our case officers ensure compliance with bank statement maintenance (minimum 6 months active balance), Nadra Family Registration Certificates (FRC), tax returns (NTN/FBR), cover letters explaining travel intent, and verifiable lodging vouchers.
            </p>
            <div className="grid sm:grid-cols-3 gap-6 text-xs text-muted-foreground">
              <div className="p-4 rounded-xl bg-background/60 border border-border/40">
                <strong className="text-foreground text-sm block mb-1.5 font-bold">Tier-1 Consular Files</strong>
                <p>Strict evaluation of socio-economic ties, property records, and employment verification for UK, US, and Canada.</p>
              </div>
              <div className="p-4 rounded-xl bg-background/60 border border-border/40">
                <strong className="text-foreground text-sm block mb-1.5 font-bold">Schengen VFS Submission</strong>
                <p>Compliant travel medical insurance (€30,000 cover), confirmed flight bookings, and country-specific biometric slots.</p>
              </div>
              <div className="p-4 rounded-xl bg-background/60 border border-border/40">
                <strong className="text-foreground text-sm block mb-1.5 font-bold">E-Visa Fast Processing</strong>
                <p>Instant digital issuance for Turkey, Dubai 30/60 days, Azerbaijan ASAN, Egypt, Tajikistan, and Southeast Asia.</p>
              </div>
            </div>
          </div>

          {/* Destination Hub FAQs */}
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-foreground">Frequently Asked Questions — International Destinations</h3>
              <p className="mt-2 text-sm text-muted-foreground">Key answers regarding visa processing times, requirements, and documentation.</p>
            </div>
            <div className="space-y-4">
              {DESTINATION_FAQS.map((faq, i) => (
                <div key={i} className="rounded-2xl border border-border/60 bg-card/60 p-6 backdrop-blur-sm shadow-soft">
                  <h4 className="text-base font-bold text-foreground mb-2 flex items-start gap-2">
                    <span className="text-primary font-black">Q:</span> {faq.q}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed pl-6">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Internal Cross Links */}
          <div className="pt-6">
            <ServiceCrossLinksHub currentService="Destinations" />
          </div>

          {/* E-E-A-T Section */}
          <div className="pt-6">
            <EEATExpertiseSection
              countryName="Worldwide Visa Destinations"
              serviceName="Global Visa Consultation & International Route Planning"
              consultantRole="Head of Global Visas & Foreign Embassy Liaison"
              lastUpdated="September 2026"
            />
          </div>
        </div>
      </section>
    </>
  );
}
