import { createFileRoute, notFound } from "@tanstack/react-router";
import { OCEANIA_COUNTRIES } from "@/data/regions/oceania-countries";
import { PageHero } from "@/components/site/PageHero";
import { CheckCircle2, FileText, Globe2, ArrowRight } from "lucide-react";
import { ContactForm } from "@/components/site/ContactForm";
import { BreadcrumbSchema } from "@/components/site/BreadcrumbSchema";
import { EEATExpertiseSection } from "@/components/site/EEATExpertiseSection";
import { DestinationCrossLinks } from "@/components/site/InternalCrossLinks";
import React, { Suspense } from "react";
const BookingWidget = React.lazy(() => import("@/components/site/BookingWidget").then(m => ({ default: m.BookingWidget })));
import { COMPANY } from "@/data/company";

export const Route = createFileRoute("/countries/oceania/$country")({
  loader: ({ params }) => {
    const country = OCEANIA_COUNTRIES.find((c) => c.slug === params.country);
    if (!country) throw notFound();
    return country;
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.title || `${loaderData?.name} Visa Consultant Islamabad`} | RS Travel & Tours` },
      { name: "description", content: loaderData?.description ? `${loaderData.description} RS Travel & Tours Blue Area Islamabad provides expert ImmiAccount filing and financial tie audits.` : "" },
      { name: "keywords", content: `${loaderData?.keywords || ""}, ${loaderData?.name || ""} visit visa pakistan, ${loaderData?.name || ""} visa requirements islamabad, apply ${loaderData?.name || ""} visa online pakistan, oceania visa consultant islamabad, blue area visa consultant` },
      { name: "robots", content: "index, follow, max-snippet:-1, max-image-preview:large" },
      { name: "author", content: "RS Travel and Tours" },
      { name: "geo.region", content: "PK-IS" },
      { name: "geo.placename", content: "Islamabad, Blue Area" },
      { name: "geo.position", content: "33.7135;73.0673" },
      { name: "ICBM", content: "33.7135, 73.0673" },
      { property: "og:title", content: `${loaderData?.name || "Oceania"} Visa Consultant Islamabad | RS Travel and Tours` },
      { property: "og:description", content: loaderData?.description || "" },
      { property: "og:url", content: `https://rstravel.pk/countries/oceania/${loaderData?.slug || ""}` },
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
      { rel: "canonical", href: `https://rstravel.pk/countries/oceania/${loaderData?.slug || ""}` },
    ],
  }),
  component: OceaniaCountryPage,
});

function OceaniaCountryPage() {
  const country = Route.useLoaderData();

  const countryFaqs = [
    {
      q: `What is the official visa fee and processing time for ${country.name} from Pakistan?`,
      a: country.slug === "australia"
        ? "For the Australia Subclass 600 Visitor Visa (Tourist stream), the official Department of Home Affairs application charge is AUD $250. Processing typically takes 20 to 35 business days following mandatory biometric enrolment at the Australian Biometric Collection Centre (Gerry's) in Islamabad."
        : country.slug === "new-zealand"
        ? "For New Zealand, the combined official fee is NZD $441 (comprising the base application fee NZD $300, immigration levy NZD $41, and mandatory International Visitor Conservation & Tourism Levy of NZD $100). Processing takes 4 to 8 weeks."
        : `Official processing for ${country.name} generally takes 3 to 5 weeks with consular fees between $100 and $250 USD.`,
    },
    {
      q: country.slug === "australia"
        ? "What bank statement and financial ties are required for an Australian Subclass 600 visa?"
        : country.slug === "new-zealand"
        ? "What are the bona fide visitor requirements for New Zealand from Pakistan?"
        : `What are the financial requirements for visiting ${country.name}?`,
      a: country.slug === "australia"
        ? "The Australian High Commission requires an active 6-month bank statement with an unencumbered closing balance of PKR 2,500,000 to PKR 3,500,000, supported by FBR Tax Returns (3 years), active tax filer status, proof of employment or business ownership, and family ties via NADRA FRC."
        : country.slug === "new-zealand"
        ? "Immigration New Zealand assesses genuine intent to return home based on stable domestic employment, verifiable tax returns, property assets in Pakistan, and funds of at least NZD $1,000 per month of planned stay (or NZD $400/month if accommodation is fully prepaid)."
        : `Applicants must present a verifiable 6-month bank statement with an Account Maintenance Certificate, active tax returns, and attested civil identity documents.`,
    },
    {
      q: `How does RS Travel and Tours assist with ${country.name} visa applications in Islamabad?`,
      a: `From our Blue Area office, our senior case officers manage end-to-end digital portal filings (ImmiAccount / INZ portal), assemble comprehensive evidentiary dossiers, draft persuasive statements of purpose, and coordinate biometric appointments in Islamabad.`,
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
        "@id": `https://rstravel.pk/countries/oceania/${country.slug}#service`,
        name: `${country.name} Visa File Preparation & Consular Advisory`,
        provider: { "@id": "https://rstravel.pk/#organization" },
        serviceType: `${country.name} Oceania Visa Consultancy`,
        areaServed: { "@type": "AdministrativeArea", name: "Pakistan" },
        description: country.description,
      },
      {
        "@type": "BreadcrumbList",
        "@id": `https://rstravel.pk/countries/oceania/${country.slug}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://rstravel.pk" },
          { "@type": "ListItem", position: 2, name: "Countries", item: "https://rstravel.pk/countries" },
          { "@type": "ListItem", position: 3, name: `${country.name} Visa`, item: `https://rstravel.pk/countries/oceania/${country.slug}` },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `https://rstravel.pk/countries/oceania/${country.slug}#faq`,
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
          { name: "Oceania", url: "/countries" },
          { name: `${country.name} Visa`, url: `/countries/oceania/${country.slug}` },
        ]}
      />
      <PageHero
        eyebrow="Oceania & Pacific"
        title={`${country.name} Visit Visa Consultant Islamabad`}
        subtitle={`Expert online visa portal filing, financial ties auditing, and biometric appointment scheduling for ${country.name} in Blue Area, Islamabad.`}
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
                <h3 className="font-bold text-lg">Travel Tip</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Oceanian immigration authorities emphasize verifiable proof of genuine temporary stay and clear origin of funds. Ensure all bank records and tax filings are completely reconciled.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-primary/5 p-6 shadow-soft border-primary/20">
              <h3 className="font-bold text-lg mb-4 text-primary-glow">Consultancy Benefits</h3>
              <ul className="space-y-3">
                {[
                  "Official ImmiAccount / INZ portal precision filing",
                  "Gerry's / VFS biometric appointment booking",
                  "GTE statement of purpose & cover letter drafting",
                  "Verifiable GDS return flights & hotel bookings",
                ].map((tip, idx) => (
                  <li key={idx} className="text-sm text-muted-foreground flex gap-2 font-medium">
                    <span className="text-primary">•</span> {tip}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Consular Submission Protocol */}
        <div className="mb-20 rounded-[2.5rem] border border-border bg-card p-8 md:p-12 shadow-soft">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-2xl font-bold md:text-3xl">
              {country.name} Visa Application Protocol (Islamabad / Rawalpindi)
            </h2>
            <p className="mt-3 text-muted-foreground text-sm leading-relaxed">
              Applying for {country.name} requires careful digital compilation and biometrics. Our Blue Area case officers oversee every technical requirement.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="p-6 rounded-2xl bg-secondary/30 border border-border/50">
              <span className="text-xs font-bold text-primary uppercase tracking-wider block mb-1.5">1. Financial Solvency &amp; Tax Audit</span>
              <h3 className="font-bold text-base text-foreground mb-2">6-Month Bank Statement</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Reconciliation of monthly salary credits or business revenues with FBR tax returns and an Account Maintenance Certificate.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-secondary/30 border border-border/50">
              <span className="text-xs font-bold text-primary uppercase tracking-wider block mb-1.5">2. Mandatory Travel Logistics</span>
              <h3 className="font-bold text-base text-foreground mb-2">GDS Flights &amp; Hotel Vouchers</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Confirmed GDS round-trip air tickets and central hotel bookings matching your detailed itinerary across Sydney, Melbourne, or Auckland.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-secondary/30 border border-border/50">
              <span className="text-xs font-bold text-primary uppercase tracking-wider block mb-1.5">3. Portal Filing &amp; Biometrics</span>
              <h3 className="font-bold text-base text-foreground mb-2">Gerry's / VFS Islamabad Appointment</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Direct submission through official government portals and scheduling biometric enrolment at Gerry's or VFS in Islamabad.
              </p>
            </div>
          </div>
        </div>

        {/* Dynamic Country-Specific FAQs */}
        <div className="mb-20 max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold md:text-3xl">Frequently Asked Questions — {country.name} Visa</h2>
            <p className="mt-2 text-sm text-muted-foreground">Expert consular answers for Pakistani passport holders applying for {country.name}.</p>
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
          serviceName={`${country.name} Tourist & Business Visa Filing`}
        />
      </section>

      {/* Trust & Contact Section */}
      <section className="bg-secondary/30 py-20 border-t border-border">
        <div className="container-px mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold md:text-4xl">
                Start Your {country.name} Journey Today
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Oceanian immigration assessment is stringent on ties and finances. Let our experienced visa consultants guide your file to maximize approval prospects.
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