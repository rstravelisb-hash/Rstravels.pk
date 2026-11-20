import { createFileRoute, notFound } from "@tanstack/react-router";
import { SOUTH_ASIA_COUNTRIES } from "@/data/regions/south-asia_countries";
import { PageHero } from "@/components/site/PageHero";
import { CheckCircle2, FileText, Globe2, ArrowRight } from "lucide-react";
import { ContactForm } from "@/components/site/ContactForm";
import { BreadcrumbSchema } from "@/components/site/BreadcrumbSchema";
import { EEATExpertiseSection } from "@/components/site/EEATExpertiseSection";
import { DestinationCrossLinks } from "@/components/site/InternalCrossLinks";
import React, { Suspense } from "react";
const BookingWidget = React.lazy(() => import("@/components/site/BookingWidget").then(m => ({ default: m.BookingWidget })));
import { COMPANY } from "@/data/company";

export const Route = createFileRoute("/countries/south-asia/$country")({
  loader: ({ params }) => {
    const country = SOUTH_ASIA_COUNTRIES.find((c) => c.slug === params.country);
    if (!country) throw notFound();
    return country;
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.title || `${loaderData?.name} Visa Consultant Islamabad`} | RS Travel & Tours` },
      { name: "description", content: loaderData?.description ? `${loaderData.description} RS Travel & Tours Blue Area Islamabad provides fast e-visa filings and Gerry's dossier preparation.` : "" },
      { name: "keywords", content: `${loaderData?.keywords || ""}, ${loaderData?.name || ""} visit visa pakistan, ${loaderData?.name || ""} visa requirements islamabad, apply ${loaderData?.name || ""} visa online pakistan, south asia visa consultant islamabad, blue area visa consultant` },
      { name: "robots", content: "index, follow, max-snippet:-1, max-image-preview:large" },
      { name: "author", content: "RS Travel and Tours" },
      { name: "geo.region", content: "PK-IS" },
      { name: "geo.placename", content: "Islamabad, Blue Area" },
      { name: "geo.position", content: "33.7135;73.0673" },
      { name: "ICBM", content: "33.7135, 73.0673" },
      { property: "og:title", content: `${loaderData?.name || "South Asia"} Visa Consultant Islamabad | RS Travel and Tours` },
      { property: "og:description", content: loaderData?.description || "" },
      { property: "og:url", content: `https://rstravel.pk/countries/south-asia/${loaderData?.slug || ""}` },
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
      { rel: "canonical", href: `https://rstravel.pk/countries/south-asia/${loaderData?.slug || ""}` },
    ],
  }),
  component: SouthAsiaCountryPage,
});

function SouthAsiaCountryPage() {
  const country = Route.useLoaderData();

  const countryFaqs = [
    {
      q: `What is the official visa fee and processing time for ${country.name} from Pakistan?`,
      a: country.slug === "sri-lanka"
        ? "Pakistani passport holders enjoy a concessionary SAARC tourist ETA fee of $20 USD (30-day double entry), processed within 24 to 48 hours. Transit under 48 hours is completely gratis ($0 USD)."
        : country.slug === "nepal"
        ? "Under SAARC reciprocal treaties, Pakistani nationals receive their first 30-day tourist visa to Nepal Gratis ($0 consular fee) once every calendar year. Processing at the Embassy in Islamabad takes 3 to 5 business days."
        : country.slug === "malaysia"
        ? "Malaysia eVisa official government fee is RM 105 (~PKR 6,500 to 7,500) plus processing. Turnaround is 2 to 3 working days. Mandatory MDAC card must be filed online within 3 days prior to flight arrival."
        : country.slug === "indonesia"
        ? "Indonesia Tourist eVisa (Index C1 / B211A) costs approx. IDR 1,500,000 (~$100 USD) for 60 days of validity, issued electronically in 3 to 5 business days."
        : country.slug === "thailand"
        ? "Thailand tourist sticker visa via Gerry's Islamabad takes 7 to 10 working days with consular and service charges around PKR 18,000 to PKR 22,000."
        : country.slug === "maldives"
        ? "Maldives grants a 30-day tourist visa-on-arrival free ($0 consular fee) to Pakistani passport holders. Mandatory IMUGA health declaration must be submitted within 96 hours of arrival."
        : `Electronic visa applications for ${country.name} take 3 to 5 business days with standard government fees ranging from $25 to $50 USD.`,
    },
    {
      q: country.slug === "thailand"
        ? "What bank statement balance is required for a Thailand visa from Islamabad?"
        : country.slug === "malaysia"
        ? "Do I need to submit an FRC for a Malaysian family visa?"
        : country.slug === "indonesia"
        ? "What are the financial solvency rules for a Bali tourist visa?"
        : country.slug === "vietnam"
        ? "Can Pakistani passport holders apply for a Vietnam eVisa online?"
        : `What are the mandatory documents for a ${country.name} visa?`,
      a: country.slug === "thailand"
        ? "The Royal Thai Embassy in Islamabad requires an original 6-month bank statement with an Account Maintenance Certificate demonstrating a minimum closing balance of PKR 250,000 for individuals (PKR 500,000 for families)."
        : country.slug === "malaysia"
        ? "Yes. For families traveling together to Malaysia, an official NADRA Family Registration Certificate (FRC) in 'By Birth' or 'By Marriage' format is mandatory alongside the marriage registration certificate (MRC)."
        : country.slug === "indonesia"
        ? "Indonesian immigration regulations require proof of financial solvency equivalent to at least $2,000 USD (approx. PKR 560,000+) reflected in an active 3-month bank statement."
        : country.slug === "vietnam"
        ? "Yes! Vietnam now includes Pakistani passport holders in its official National Web Portal eVisa system. Standard single-entry 30-day tourist e-visas cost $25 USD and are issued in 3 to 5 working days."
        : `Applicants require a passport valid for at least 6 months, verified round-trip flight reservations, hotel vouchers, an active bank statement with Account Maintenance Certificate, and Polio Yellow Card.`,
    },
    {
      q: `How does RS Travel and Tours assist with ${country.name} visa applications in Islamabad?`,
      a: `From our Blue Area office, our consultants verify your document compliance, complete error-free government portal applications, issue live GDS flight reservations and CRS hotel bookings, and submit physical dossiers through Gerry's or embassies in Islamabad.`,
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
        "@id": `https://rstravel.pk/countries/south-asia/${country.slug}#service`,
        name: `${country.name} Visa File Preparation & Advisory`,
        provider: { "@id": "https://rstravel.pk/#organization" },
        serviceType: `${country.name} South & Southeast Asia Visa Consultancy`,
        areaServed: { "@type": "AdministrativeArea", name: "Pakistan" },
        description: country.description,
      },
      {
        "@type": "BreadcrumbList",
        "@id": `https://rstravel.pk/countries/south-asia/${country.slug}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://rstravel.pk" },
          { "@type": "ListItem", position: 2, name: "Countries", item: "https://rstravel.pk/countries" },
          { "@type": "ListItem", position: 3, name: `${country.name} Visa`, item: `https://rstravel.pk/countries/south-asia/${country.slug}` },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `https://rstravel.pk/countries/south-asia/${country.slug}#faq`,
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
          { name: "South & Southeast Asia", url: "/countries" },
          { name: `${country.name} Visa`, url: `/countries/south-asia/${country.slug}` },
        ]}
      />
      <PageHero
        eyebrow="South & Southeast Asia"
        title={`${country.name} Visit Visa Consultant Islamabad`}
        subtitle={`Expert visa file preparation, official eVisa filings, and Gerry's submission assistance for ${country.name} in Blue Area, Islamabad.`}
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
                For {country.name}, we recommend applying at least 15 to 20 days in advance. We handle verifiable flight itineraries, hotel vouchers, and mandatory digital health declarations.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-primary/5 p-6 shadow-soft border-primary/20">
              <h3 className="font-bold text-lg mb-4 text-primary-glow">Consultancy Benefits</h3>
              <ul className="space-y-3">
                {[
                  "Official portal e-visa error-free submission",
                  "Gerry's Visa Drop Box physical file audit",
                  "Verifiable GDS return flights & hotel bookings",
                  "MDAC & IMUGA digital arrival assistance",
                ].map((tip, idx) => (
                  <li key={idx} className="text-sm text-muted-foreground flex gap-2 font-medium">
                    <span className="text-primary">•</span> {tip}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Deep South & Southeast Asia Processing Protocols */}
        <div className="mb-20 rounded-[2.5rem] border border-border bg-card p-8 md:p-12 shadow-soft">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-2xl font-bold md:text-3xl">
              {country.name} Visa Application &amp; Travel Protocol (Islamabad / Rawalpindi)
            </h2>
            <p className="mt-3 text-muted-foreground text-sm leading-relaxed">
              Complete consular document vetting, confirmed return tickets, and digital arrival passes for Pakistani vacationers and business delegates.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="p-6 rounded-2xl bg-secondary/30 border border-border/50">
              <span className="text-xs font-bold text-primary uppercase tracking-wider block mb-1.5">1. E-Visa &amp; Sticker Submissions</span>
              <h3 className="font-bold text-base text-foreground mb-2">Fast-Track Issuance</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Direct submission via official portals (Malaysia eVisa, Thailand e-Visa/Gerry's, Sri Lanka ETA, Indonesia C1) with zero filing errors.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-secondary/30 border border-border/50">
              <span className="text-xs font-bold text-primary uppercase tracking-wider block mb-1.5">2. Financial &amp; Civil Verification</span>
              <h3 className="font-bold text-base text-foreground mb-2">Bank Statement &amp; FRC Audit</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Ensuring bank balance meets country thresholds (minimum PKR 350,000–600,000) with account maintenance letters and NADRA FRCs for family applications.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-secondary/30 border border-border/50">
              <span className="text-xs font-bold text-primary uppercase tracking-wider block mb-1.5">3. Complete Travel Logistics</span>
              <h3 className="font-bold text-base text-foreground mb-2">Hotels, Flights &amp; Health Cards</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Confirmed flight tickets on direct carriers (PIA, Thai Airways, Batik Air, Airblue), luxury resort bookings, and Polio Yellow Card advisory.
              </p>
            </div>
          </div>
        </div>

        {/* Dynamic Country-Specific FAQs */}
        <div className="mb-20 max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold md:text-3xl">Frequently Asked Questions — {country.name} Visa</h2>
            <p className="mt-2 text-sm text-muted-foreground">Expert consular guidance for Pakistani tourists and executives visiting {country.name}.</p>
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
                Our experts at Pakistan's premier travel agency and consultancy are ready to handle your {country.name} visa application with speed and precision.
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