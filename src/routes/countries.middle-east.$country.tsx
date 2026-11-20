import { createFileRoute, notFound } from "@tanstack/react-router";
import { MIDDLE_EAST_COUNTRIES } from "@/data/regions/middle-east_countries";
import { PageHero } from "@/components/site/PageHero";
import { CheckCircle2, FileText, Globe2, ArrowRight } from "lucide-react";
import { ContactForm } from "@/components/site/ContactForm";
import { BreadcrumbSchema } from "@/components/site/BreadcrumbSchema";
import { EEATExpertiseSection } from "@/components/site/EEATExpertiseSection";
import { DestinationCrossLinks } from "@/components/site/InternalCrossLinks";
import React, { Suspense } from "react";
const BookingWidget = React.lazy(() => import("@/components/site/BookingWidget").then(m => ({ default: m.BookingWidget })));
import { COMPANY } from "@/data/company";

export const Route = createFileRoute("/countries/middle-east/$country")({
  loader: ({ params }) => {
    const country = MIDDLE_EAST_COUNTRIES.find((c) => c.slug === params.country);
    if (!country) throw notFound();
    return country;
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.title || `${loaderData?.name} Visa Consultant Islamabad`} | RS Travel & Tours` },
      { name: "description", content: loaderData?.description ? `${loaderData.description} RS Travel & Tours Blue Area Islamabad provides fast e-visa filings and OK-to-Board updates.` : "" },
      { name: "keywords", content: `${loaderData?.keywords || ""}, ${loaderData?.name || ""} visit visa pakistan, ${loaderData?.name || ""} visa requirements islamabad, apply ${loaderData?.name || ""} visa online pakistan, middle east visa consultant islamabad, blue area visa consultant` },
      { name: "robots", content: "index, follow, max-snippet:-1, max-image-preview:large" },
      { name: "author", content: "RS Travel and Tours" },
      { name: "geo.region", content: "PK-IS" },
      { name: "geo.placename", content: "Islamabad, Blue Area" },
      { name: "geo.position", content: "33.7135;73.0673" },
      { name: "ICBM", content: "33.7135, 73.0673" },
      { property: "og:title", content: `${loaderData?.name || "Middle East"} Visa Consultant Islamabad | RS Travel and Tours` },
      { property: "og:description", content: loaderData?.description || "" },
      { property: "og:url", content: `https://rstravel.pk/countries/middle-east/${loaderData?.slug || ""}` },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_PK" },
      { property: "og:site_name", content: "RS Travel and Tours — Pakistan's No.1 Travel Agency" },
      { property: "og:image", content: loaderData?.image || "" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: `${loaderData?.name || ""} Visa Consultant Islamabad | RS Travel and Tours` },
      { name: "twitter:description", content: loaderData?.description || "" },
      { name: "twitter:image", content: loaderData?.image || "" },
    ],
    links: [
      { rel: "canonical", href: `https://rstravel.pk/countries/middle-east/${loaderData?.slug || ""}` },
    ],
  }),
  component: MiddleEastCountryPage,
});

function MiddleEastCountryPage() {
  const country = Route.useLoaderData();

  const countryFaqs = [
    {
      q: `What is the processing turnaround for a ${country.name} visa from Islamabad?`,
      a: country.slug === "united-arab-emirates"
        ? "Standard UAE / Dubai tourist visas (30 or 60 days) are typically issued within 24 to 48 hours through our direct immigration agency portal. Express 12-hour processing is also available."
        : country.slug === "saudi-arabia"
        ? "Saudi tourist eVisas for eligible passport holders or GCC residents are processed within minutes to 24 hours. Full Umrah tourist visas with approved health insurance are issued within 2 to 3 business days."
        : country.slug === "bahrain"
        ? "Official Bahrain eVisas via the NPRA portal take 3 to 5 business days for approval for Pakistani nationals."
        : country.slug === "qatar"
        ? "Qatar Hayya A1 tourist entries and visas are processed within 24 to 72 hours, provided confirmed Discover Qatar hotel vouchers and return flights are submitted."
        : `Tourist visa applications for ${country.name} are generally processed within 3 to 7 working days with proper financial and hotel documentation.`,
    },
    {
      q: country.slug === "united-arab-emirates"
        ? "Do I need an OK to Board (OTB) clearance before flying to Dubai from Pakistan?"
        : country.slug === "saudi-arabia"
        ? "Can Pakistani tourists perform Umrah on a Saudi Tourist Visa?"
        : country.slug === "bahrain"
        ? "What are the bank statement requirements for a Bahrain eVisa from Pakistan?"
        : country.slug === "qatar"
        ? "Is a Discover Qatar hotel booking mandatory for entry?"
        : `What are the financial requirements for visiting ${country.name}?`,
      a: country.slug === "united-arab-emirates"
        ? "Yes. Airlines operating from Islamabad International Airport (including PIA, FlyDubai, Airblue, and Air Arabia) require an OK to Board (OTB) status updated in their reservation systems at least 24 hours before flight departure. Our agency coordinates this directly with airlines."
        : country.slug === "saudi-arabia"
        ? "Yes! A 1-year multiple-entry Saudi Tourist Visa permits visitors to perform Umrah throughout the kingdom (outside the designated Hajj season) without requiring a separate Umrah permit, bookable seamlessly on the Nusuk app."
        : country.slug === "bahrain"
        ? "Bahrain's NPRA requires an active 3-month bank statement with an Account Maintenance Certificate demonstrating a steady closing balance equivalent to at least 300 BHD (approx. PKR 220,000 to PKR 250,000+)."
        : country.slug === "qatar"
        ? "Yes. For Pakistani passport holders utilizing visa-free or tourist visa entry, immigration authorities require confirmed hotel bookings made strictly through the Discover Qatar platform for the full duration of stay."
        : `Applicants should present an active 3-to-6 month bank statement with an Account Maintenance Certificate proving adequate funds for accommodation and daily living expenses.`,
    },
    {
      q: `How does RS Travel and Tours assist with ${country.name} travel from Islamabad?`,
      a: `From our Blue Area office, we manage everything end-to-end: official visa portal submission, issuing genuine GDS flight reservations, hotel vouchers, airline OK-to-Board verifications, and Polio vaccination compliance.`,
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "TravelAgency",
        "@id": "https://rstravel.pk/#organization",
        name: "RS Travel and Tours",
        url: "https://rstravel.pk",
        telephone: COMPANY.phone,
        email: COMPANY.email,
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
      },
      {
        "@type": "Service",
        "@id": `https://rstravel.pk/countries/middle-east/${country.slug}#service`,
        name: `${country.name} Visa File Preparation & E-Visa Processing`,
        provider: { "@id": "https://rstravel.pk/#organization" },
        serviceType: `${country.name} Middle East Visa Consultancy`,
        areaServed: { "@type": "AdministrativeArea", name: "Pakistan" },
        description: country.description,
      },
      {
        "@type": "BreadcrumbList",
        "@id": `https://rstravel.pk/countries/middle-east/${country.slug}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://rstravel.pk" },
          { "@type": "ListItem", position: 2, name: "Countries", item: "https://rstravel.pk/countries" },
          { "@type": "ListItem", position: 3, name: `${country.name} Visa`, item: `https://rstravel.pk/countries/middle-east/${country.slug}` },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `https://rstravel.pk/countries/middle-east/${country.slug}#faq`,
        mainEntity: countryFaqs.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: { "@type": "Answer", text: faq.a },
        })),
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Countries", url: "/countries" },
          { name: "Middle East", url: "/countries" },
          { name: `${country.name} Visa`, url: `/countries/middle-east/${country.slug}` },
        ]}
      />
      <PageHero
        eyebrow="Middle East"
        title={`${country.name} Visit Visa Consultant Islamabad`}
        subtitle={`Fast-track digital visa filing, official sponsor verification, and airline OK-to-Board coordination for ${country.name} in Blue Area, Islamabad.`}
        backgroundImage={country.image}
      />

      <div className="-mt-20 relative z-50 container-px mx-auto max-w-7xl">
        <Suspense fallback={<div className="h-[200px] w-full animate-pulse rounded-3xl bg-white/5 backdrop-blur-md border border-white/10" />}><BookingWidget initialTab="visa" /></Suspense>
      </div>

      <section className="container-px mx-auto max-w-5xl py-20">
        <div className="space-y-6 text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl font-bold md:text-4xl">
            {country.name} Visa Services in Islamabad
          </h2>
          <p className="text-muted-foreground leading-relaxed text-lg">{country.intro}</p>
        </div>

        <div className="grid gap-12 lg:grid-cols-3 mb-20">
          <div className="lg:col-span-2 rounded-[2rem] border border-border bg-card p-8 shadow-soft">
            <div className="flex items-center gap-3 mb-8 border-b border-border pb-4">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/20 text-primary">
                <FileText size={20} />
              </span>
              <h2 className="text-2xl font-bold">Required Documents Checklist</h2>
            </div>
            <ul className="grid gap-4 sm:grid-cols-2">
              {country.docs.map((req: string, idx: number) => (
                <li key={idx} className="flex items-start gap-4">
                  <span className="mt-0.5 flex shrink-0 h-6 w-6 items-center justify-center rounded-full bg-accent/20 text-accent">
                    <CheckCircle2 size={14} />
                  </span>
                  <span className="text-muted-foreground leading-relaxed font-medium text-xs">
                    {req}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <div className="rounded-2xl border border-border bg-secondary/30 p-6 shadow-soft">
              <div className="flex items-center gap-3 mb-4">
                <Globe2 size={24} className="text-primary" />
                <h3 className="font-bold text-lg">Why Travel with Us?</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                {country.name} entry procedures are strict regarding document formats and flight status. We eliminate travel friction with direct airline systems and verified hotel vouchers.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-primary/5 p-6 shadow-soft border-primary/20">
              <h3 className="font-bold text-lg mb-4 text-primary-glow">Consultancy Benefits</h3>
              <ul className="space-y-3">
                {[
                  "Official government portal electronic filing",
                  "Direct airline OK-to-Board updates",
                  "Verifiable GDS flights & hotel vouchers",
                  "Umrah & Nusuk platform integration",
                ].map((tip, idx) => (
                  <li key={idx} className="text-sm text-muted-foreground flex gap-2 font-medium">
                    <span className="text-primary">•</span> {tip}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Deep Middle East Consular & E-Visa Processing Protocol */}
        <div className="mb-20 rounded-[2.5rem] border border-border bg-card p-8 md:p-12 shadow-soft">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-2xl font-bold md:text-3xl">
              {country.name} Visa Processing &amp; Travel Logistics from Islamabad
            </h2>
            <p className="mt-3 text-muted-foreground text-sm leading-relaxed">
              Fast-track digital portal filing, sponsor verification, and airline booking protocols for Pakistani tourists and business travelers visiting {country.name}.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="p-6 rounded-2xl bg-secondary/30 border border-border/50">
              <span className="text-xs font-bold text-primary uppercase tracking-wider block mb-1.5">1. Online Entry Issuance</span>
              <h3 className="font-bold text-base text-foreground mb-2">Direct Portal Submission</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Direct submission through official immigration systems with verified sponsor vouchers and immediate digital tracking.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-secondary/30 border border-border/50">
              <span className="text-xs font-bold text-primary uppercase tracking-wider block mb-1.5">2. Confirmed Flight &amp; Hotel Bookings</span>
              <h3 className="font-bold text-base text-foreground mb-2">OK to Board &amp; Travel Pass</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Direct airline OK-to-Board updates (PIA, Emirates, FlyDubai, Air Arabia) and luxury/budget hotel reservations near prime city centers.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-secondary/30 border border-border/50">
              <span className="text-xs font-bold text-primary uppercase tracking-wider block mb-1.5">3. Family &amp; Business Delegations</span>
              <h3 className="font-bold text-base text-foreground mb-2">Multi-Day &amp; Group Visas</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Single-entry and multiple-entry options tailored for family holidays, corporate conferences, and shopping festivals with zero hidden costs.
              </p>
            </div>
          </div>
        </div>

        {/* Dynamic Country-Specific FAQs */}
        <div className="mb-20 max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold md:text-3xl">Frequently Asked Questions — {country.name} Visa</h2>
            <p className="mt-2 text-sm text-muted-foreground">Authoritative guidance for Pakistani passport holders traveling to {country.name}.</p>
          </div>
          <div className="space-y-4">
            {countryFaqs.map((faq, idx) => (
              <div key={idx} className="rounded-2xl border border-border bg-card p-6 shadow-soft">
                <h3 className="text-base font-bold text-foreground mb-2 flex items-start gap-2">
                  <span className="text-primary font-bold">Q:</span> {faq.q}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed pl-6">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Cross-Service & Related Destinations Hub */}
        <DestinationCrossLinks
          countryName={country.name}
          countrySlug={country.slug}
        />

        {/* E-E-A-T Authority Module */}
        <EEATExpertiseSection
          countryName={country.name}
          serviceName={`${country.name} Middle East Tourist & Business Visa Filing`}
        />
      </section>

      <section className="bg-secondary/30 py-20 border-t border-border">
        <div className="container-px mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold md:text-4xl">
                Start Your {country.name} Journey Today
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Our experts handle Middle East visas with rapid turnaround and verified airline clearances. Contact us for instant processing.
              </p>
              <div className="pt-6 flex flex-wrap gap-4">
                <a
                  href={`https://wa.me/${COMPANY.whatsapp.replace(/\D/g, "")}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-bold text-white shadow-soft hover:-translate-y-0.5 transition-transform"
                >
                  WhatsApp Us
                </a>
                <a
                  href={`tel:${COMPANY.phone}`}
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-bold shadow-soft hover:-translate-y-0.5 transition-transform hover:border-primary"
                >
                  Call {COMPANY.phone}
                </a>
              </div>
            </div>
            <div className="bg-card rounded-[2rem] border border-border p-8 shadow-elevated relative overflow-hidden">
              <div className="absolute -top-32 -right-32 h-64 w-64 rounded-full bg-primary-glow/10 blur-3xl pointer-events-none" />
              <h3 className="text-2xl font-bold mb-2">Book a Free Assessment</h3>
              <p className="text-sm text-muted-foreground mb-6">
                Discuss your {country.name} visa application with our senior consultants.
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}