import { createFileRoute, notFound } from "@tanstack/react-router";
import { CENTRAL_ASIA_COUNTRIES } from "@/data/regions/central-asia_countries";
import { PageHero } from "@/components/site/PageHero";
import { CheckCircle2, FileText, Globe2, ArrowRight } from "lucide-react";
import { ContactForm } from "@/components/site/ContactForm";
import { BreadcrumbSchema } from "@/components/site/BreadcrumbSchema";
import { EEATExpertiseSection } from "@/components/site/EEATExpertiseSection";
import { DestinationCrossLinks } from "@/components/site/InternalCrossLinks";
import React, { Suspense } from "react";
const BookingWidget = React.lazy(() => import("@/components/site/BookingWidget").then(m => ({ default: m.BookingWidget })));
import { COMPANY } from "@/data/company";

export const Route = createFileRoute("/countries/central-asia/$country")({
  loader: ({ params }) => {
    const country = CENTRAL_ASIA_COUNTRIES.find((c) => c.slug === params.country);
    if (!country) throw notFound();
    return country;
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.title || `${loaderData?.name} Visa Consultant Islamabad`} | RS Travel & Tours` },
      { name: "description", content: loaderData?.description ? `${loaderData.description} RS Travel & Tours Blue Area Islamabad provides expert document audits, e-visa filing, and Anatolia file preparation.` : "" },
      { name: "keywords", content: `${loaderData?.keywords || ""}, ${loaderData?.name || ""} visit visa pakistan, ${loaderData?.name || ""} visa requirements islamabad, apply ${loaderData?.name || ""} visa online pakistan, central asia visa consultant islamabad, blue area visa consultant` },
      { name: "robots", content: "index, follow, max-snippet:-1, max-image-preview:large" },
      { name: "author", content: "RS Travel and Tours" },
      { name: "geo.region", content: "PK-IS" },
      { name: "geo.placename", content: "Islamabad, Blue Area" },
      { name: "geo.position", content: "33.7135;73.0673" },
      { name: "ICBM", content: "33.7135, 73.0673" },
      { property: "og:title", content: `${loaderData?.name || "Central Asia"} Visa Consultant Islamabad | RS Travel and Tours` },
      { property: "og:description", content: loaderData?.description || "" },
      { property: "og:url", content: `https://rstravel.pk/countries/central-asia/${loaderData?.slug || ""}` },
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
      { rel: "canonical", href: `https://rstravel.pk/countries/central-asia/${loaderData?.slug || ""}` },
    ],
  }),
  component: CentralAsiaCountryPage,
});

function CentralAsiaCountryPage() {
  const country = Route.useLoaderData();

  const countryFaqs = [
    {
      q: `What is the processing time and fee for a ${country.name} visa for Pakistani citizens?`,
      a: country.slug === "turkey"
        ? "For Turkey sticker visas submitted via Anatolia Travel Services in Islamabad, processing takes 15 to 20 working days with fees approx. PKR 45,000 to PKR 65,000 depending on service tier. Eligible e-Visa applicants (with valid US/UK/Schengen visas) receive approval within 24 hours at $50 USD."
        : country.slug === "azerbaijan"
        ? "Azerbaijan ASAN e-Visas take 3 working days for standard processing ($26 USD) or just 3 hours for urgent service ($61 USD). No physical embassy visit or original passport submission is required."
        : country.slug === "uzbekistan"
        ? "Uzbekistan e-Visas are processed within 3 working days via the official portal for $20 USD (single entry). A color passport bio scan and digital passport photo are required."
        : `Standard processing for ${country.name} takes 5 to 15 working days depending on electronic or consular submission. Official fees range between $50 and $80 USD.`,
    },
    {
      q: country.slug === "turkey"
        ? "Can Pakistani passport holders get a Turkey e-Visa online?"
        : country.slug === "azerbaijan"
        ? "Do I need a bank statement or embassy interview for an Azerbaijan visa?"
        : country.slug === "uzbekistan"
        ? "What is the hotel registration rule (emehmon) in Uzbekistan?"
        : `Is a bank statement mandatory for a ${country.name} visa from Pakistan?`,
      a: country.slug === "turkey"
        ? "Yes, but strictly under official conditions: Pakistani passport holders can obtain an official 30-day Turkey e-Visa only if they possess a valid supporting visa or residence permit from a Schengen country, the USA, the UK, or Ireland. E-visas of other nations are not accepted."
        : country.slug === "azerbaijan"
        ? "No bank statement, salary certificate, or physical interview is needed for the Azerbaijan ASAN tourist e-Visa. You only need a valid Pakistani passport with at least 6 months validity and a clear digital photograph."
        : country.slug === "uzbekistan"
        ? "Under Uzbek immigration law, tourists staying more than 3 days must obtain temporary registration (emehmon) slips from their registered hotels or guesthouses. Hotels provide these automatically upon check-in; retain them until border exit control."
        : `While e-visas may not require upfront bank statements, having a verifiable 6-month bank statement with an Account Maintenance Certificate is recommended for immigration clearance and smooth entry.`,
    },
    {
      q: `How does RS Travel and Tours assist with ${country.name} visa applications in Islamabad?`,
      a: `From our Blue Area, Islamabad office, we verify document specifications, file official electronic visa portal applications, issue verifiable GDS round-trip flight reservations and hotel bookings, and prepare comprehensive sticker visa dossiers for Anatolia or consular submission.`,
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
        "@id": `https://rstravel.pk/countries/central-asia/${country.slug}#service`,
        name: `${country.name} Visa File Preparation & Consular Advisory`,
        provider: { "@id": "https://rstravel.pk/#organization" },
        serviceType: `${country.name} Central Asia Visa Consultancy`,
        areaServed: { "@type": "AdministrativeArea", name: "Pakistan" },
        description: country.description,
      },
      {
        "@type": "BreadcrumbList",
        "@id": `https://rstravel.pk/countries/central-asia/${country.slug}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://rstravel.pk" },
          { "@type": "ListItem", position: 2, name: "Countries", item: "https://rstravel.pk/countries" },
          { "@type": "ListItem", position: 3, name: `${country.name} Visa`, item: `https://rstravel.pk/countries/central-asia/${country.slug}` },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `https://rstravel.pk/countries/central-asia/${country.slug}#faq`,
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
          { name: "Central Asia & Turkey", url: "/countries" },
          { name: `${country.name} Visa`, url: `/countries/central-asia/${country.slug}` },
        ]}
      />
      <PageHero
        eyebrow="Central Asia & Turkey"
        title={`${country.name} Visit Visa Consultant Islamabad`}
        subtitle={`Expert visa file preparation, official portal filings, and consular submission guidance for ${country.name} in Blue Area, Islamabad.`}
        backgroundImage={country.image}
      />

      <div className="-mt-20 relative z-50 container-px mx-auto max-w-7xl">
        <Suspense fallback={<div className="h-[200px] w-full animate-pulse rounded-3xl bg-white/5 backdrop-blur-md border border-white/10" />}><BookingWidget initialTab="visa" /></Suspense>
      </div>

      <section className="container-px mx-auto max-w-5xl py-20">
        {/* Intro */}
        <div className="space-y-6 text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl font-bold md:text-4xl">
            {country.name} Visa Services in Islamabad
          </h2>
          <p className="text-muted-foreground leading-relaxed text-lg">{country.intro}</p>
        </div>

        <div className="grid gap-12 lg:grid-cols-3 mb-20">
          {/* Main Requirements */}
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

          {/* Quick Info Sidebar */}
          <div className="space-y-6">
            <div className="rounded-2xl border border-border bg-secondary/30 p-6 shadow-soft">
              <div className="flex items-center gap-3 mb-4">
                <Globe2 size={24} className="text-primary" />
                <h3 className="font-bold text-lg">Travel Tip</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                {country.slug === "turkey"
                  ? "For Turkey sticker visas, we recommend starting the document preparation process at least 30 to 45 days before your intended travel date via Anatolia Travel Services in Islamabad."
                  : country.slug === "azerbaijan"
                  ? "Azerbaijan ASAN e-visas are processed directly online within 3 hours (urgent) to 3 business days (standard) for Pakistani passport holders."
                  : country.slug === "uzbekistan"
                  ? "Uzbekistan e-visas are typically processed in 3 business days. Ensure passport scan clarity and accurate hotel booking itineraries across Samarkand, Bukhara, and Tashkent."
                  : `For ${country.name}, ensure your passport is valid for at least 6 months and supporting documents meet consular requirements.`}
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-primary/5 p-6 shadow-soft border-primary/20">
              <h3 className="font-bold text-lg mb-4 text-primary-glow">Consultancy Benefits</h3>
              <ul className="space-y-3">
                {(country.slug === "azerbaijan"
                  ? [
                      "Official ASAN e-visa portal filing",
                      "Expedited 3-hour urgent processing assistance",
                      "Hotel & return flight itinerary reservation",
                      "Baku & Gabala customized tour planning",
                    ]
                  : country.slug === "turkey"
                  ? [
                      "Anatolia Travel Services complete dossier audit",
                      "Bank statement & tax return dossier verification",
                      "Official Turkish travel health insurance",
                      "E-visa processing for valid Schengen/US/UK visa holders",
                    ]
                  : country.slug === "uzbekistan"
                  ? [
                      "Official Uzbekistan e-portal filing assistance",
                      "Tashkent, Samarkand & Bukhara itinerary planning",
                      "Confirmed hotel voucher & ticket reservation",
                      "Document compliance & photo specification check",
                    ]
                  : [
                      "Official consular filing & e-visa assistance",
                      "Invitation letter & voucher support",
                      "Bank statement & financial ties verification",
                      "Complete travel itinerary & hotel reservations",
                    ]
                ).map((tip, idx) => (
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
              Applying for {country.name} requires careful coordination with official visa portals or designated visa application centers. Our Blue Area case officers manage every step.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="p-6 rounded-2xl bg-secondary/30 border border-border/50">
              <span className="text-xs font-bold text-primary uppercase tracking-wider block mb-1.5">1. Eligibility &amp; Document Audit</span>
              <h3 className="font-bold text-base text-foreground mb-2">Portal vs. Sticker Verification</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Checking whether you qualify for an instant eVisa or require an Anatolia / Embassy sticker dossier with bank statement and tax returns.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-secondary/30 border border-border/50">
              <span className="text-xs font-bold text-primary uppercase tracking-wider block mb-1.5">2. Mandatory Travel Logistics</span>
              <h3 className="font-bold text-base text-foreground mb-2">Live GDS Flights &amp; Hotel Vouchers</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Confirmed GDS flight reservations with live PNRs and central hotel booking vouchers matching your daily Silk Road / Anatolia itinerary.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-secondary/30 border border-border/50">
              <span className="text-xs font-bold text-primary uppercase tracking-wider block mb-1.5">3. Submission &amp; Delivery</span>
              <h3 className="font-bold text-base text-foreground mb-2">Govt Portal / Anatolia Filing</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Fast e-visa submission with official government fee payment, or Anatolia appointment booking with a pristine physical submission dossier.
              </p>
            </div>
          </div>
        </div>

        {/* Dynamic Country-Specific FAQs */}
        <div className="mb-20 max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold md:text-3xl">Frequently Asked Questions — {country.name} Visa</h2>
            <p className="mt-2 text-sm text-muted-foreground">Expert answers for Pakistani passport holders applying for {country.name}.</p>
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
                The Silk Road and Eurasian destinations have distinct consular requirements. Let our experienced visa consultants at Pakistan's premier agency guide you to a smooth approval.
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