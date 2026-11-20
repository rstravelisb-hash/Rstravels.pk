import { createFileRoute, notFound } from "@tanstack/react-router";
import { SCHENGEN_COUNTRIES } from "@/data/regions/schengen-countries";
import { PageHero } from "@/components/site/PageHero";
import { CheckCircle2, FileText, Globe2, ArrowRight } from "lucide-react";
import { ContactForm } from "@/components/site/ContactForm";
import { BreadcrumbSchema } from "@/components/site/BreadcrumbSchema";
import { EEATExpertiseSection } from "@/components/site/EEATExpertiseSection";
import { DestinationCrossLinks } from "@/components/site/InternalCrossLinks";
import React, { Suspense } from "react";
const BookingWidget = React.lazy(() => import("@/components/site/BookingWidget").then(m => ({ default: m.BookingWidget })));
import { COMPANY } from "@/data/company";

export const Route = createFileRoute("/countries/schengen/$country")({
  loader: ({ params }) => {
    const country = SCHENGEN_COUNTRIES.find((c) => c.slug === params.country);
    if (!country) throw notFound();
    return country;
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.title || `${loaderData?.name} Schengen Visa Consultant Islamabad`} | RS Travel & Tours` },
      { name: "description", content: loaderData?.description ? `${loaderData.description} RS Travel & Tours Blue Area Islamabad provides expert Schengen dossier audits and VFS appointments.` : "" },
      { name: "keywords", content: `${loaderData?.keywords || ""}, ${loaderData?.name || ""} schengen visa pakistan, ${loaderData?.name || ""} visa requirements islamabad, vfs appointment ${loaderData?.name || ""}, schengen visa consultant islamabad, blue area visa consultant` },
      { name: "robots", content: "index, follow, max-snippet:-1, max-image-preview:large" },
      { name: "author", content: "RS Travel and Tours" },
      { name: "geo.region", content: "PK-IS" },
      { name: "geo.placename", content: "Islamabad, Blue Area" },
      { name: "geo.position", content: "33.7135;73.0673" },
      { name: "ICBM", content: "33.7135, 73.0673" },
      { property: "og:title", content: `${loaderData?.name || "Schengen"} Visa Consultant Islamabad | RS Travel and Tours` },
      { property: "og:description", content: loaderData?.description || "" },
      { property: "og:url", content: `https://rstravel.pk/countries/schengen/${loaderData?.slug || ""}` },
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
      { rel: "canonical", href: `https://rstravel.pk/countries/schengen/${loaderData?.slug || ""}` },
    ],
  }),
  component: SchengenCountryPage,
});

function SchengenCountryPage() {
  const country = Route.useLoaderData();

  const countryFaqs = [
    {
      q: `What is the official consular fee and processing time for a ${country.name} Schengen visa from Islamabad?`,
      a: `Under revised EU Visa Code regulations, the standard Schengen Type C visa fee is €90 EUR for adults and €45 EUR for children aged 6 to 12 (payable in PKR at VAC exchange rates). Processing takes approximately 15 to 45 calendar days following biometric enrolment at VFS Global, Gerry's, or the Embassy in Islamabad.`,
    },
    {
      q: `What bank balance is recommended for a ${country.name} Schengen tourist visa from Pakistan?`,
      a: `Consulates typically look for an active 6-month bank statement demonstrating steady regular income and an unencumbered closing balance of PKR 1,800,000 to PKR 2,800,000 for an individual, accompanied by an Account Maintenance Certificate and FBR tax returns.`,
    },
    {
      q: `Can I travel to other European countries with my ${country.name} Schengen visa?`,
      a: `Yes. A valid Schengen visa issued by ${country.name} grants free movement across all 29 Schengen member states. You must ensure that ${country.name} is your main destination (where you spend the maximum number of nights) or your primary point of entry into the Schengen zone.`,
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
        "@id": `https://rstravel.pk/countries/schengen/${country.slug}#service`,
        name: `${country.name} Schengen Visa File Preparation & Consular Advisory`,
        provider: { "@id": "https://rstravel.pk/#organization" },
        serviceType: `${country.name} Schengen Visa Consultancy`,
        areaServed: { "@type": "AdministrativeArea", name: "Pakistan" },
        description: country.description,
      },
      {
        "@type": "BreadcrumbList",
        "@id": `https://rstravel.pk/countries/schengen/${country.slug}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://rstravel.pk" },
          { "@type": "ListItem", position: 2, name: "Countries", item: "https://rstravel.pk/countries" },
          { "@type": "ListItem", position: 3, name: "Schengen Visa", item: "https://rstravel.pk/countries/schengen" },
          { "@type": "ListItem", position: 4, name: `${country.name} Visa`, item: `https://rstravel.pk/countries/schengen/${country.slug}` },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `https://rstravel.pk/countries/schengen/${country.slug}#faq`,
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
          { name: "Schengen Visa", url: "/countries/schengen" },
          { name: `${country.name} Visa`, url: `/countries/schengen/${country.slug}` },
        ]}
      />
      <PageHero
        eyebrow="Schengen Area"
        title={`${country.name} Visit Visa Consultant Islamabad`}
        subtitle={`Expert ${country.name} Schengen visa consultancy, appointments, and file preparation in Blue Area, Islamabad.`}
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
                <h3 className="font-bold text-lg">Why {country.name}?</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Part of the 29-nation Schengen zone, {country.name} is a premier European gateway. We ensure your application satisfies the rigorous scrutiny of consular officers in Islamabad.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-primary/5 p-6 shadow-soft border-primary/20">
              <h3 className="font-bold text-lg mb-4 text-primary-glow">Consultancy Benefits</h3>
              <ul className="space-y-3">
                {[
                  "Official EU Visa Code compliance check",
                  "Early biometric appointment scheduling",
                  "€30,000 Schengen embassy-approved insurance",
                  "Verifiable GDS flights & hotel vouchers",
                ].map((tip, idx) => (
                  <li key={idx} className="text-sm text-muted-foreground flex gap-2 font-medium">
                    <span className="text-primary">•</span> {tip}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Deep Consular & Embassy Submission Protocol */}
        <div className="mb-20 rounded-[2.5rem] border border-border bg-card p-8 md:p-12 shadow-soft">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-2xl font-bold md:text-3xl">
              {country.name} Schengen Visa Application Protocol (Islamabad / Rawalpindi)
            </h2>
            <p className="mt-3 text-muted-foreground text-sm leading-relaxed">
              Applying for {country.name} from Pakistan requires strict alignment with the EU Visa Code (Regulation EC No 810/2009). Our Blue Area case officers prepare your dossier to satisfy all consular admissibility standards.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="p-6 rounded-2xl bg-secondary/30 border border-border/50">
              <span className="text-xs font-bold text-primary uppercase tracking-wider block mb-1.5">1. Financial Ties &amp; Bank Audit</span>
              <h3 className="font-bold text-base text-foreground mb-2">6-Month Stamped Statement</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Verification of source of income, tax deduction certificates (FBR NTN), salary slips, and maintaining steady funds without sudden unexplainable deposits.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-secondary/30 border border-border/50">
              <span className="text-xs font-bold text-primary uppercase tracking-wider block mb-1.5">2. Mandatory Logistics Dossier</span>
              <h3 className="font-bold text-base text-foreground mb-2">€30,000 Insurance &amp; Bookings</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Schengen-compliant travel medical insurance covering all 29 member states, verifiable flight reservations, and confirmed hotel vouchers matching your daily itinerary.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-secondary/30 border border-border/50">
              <span className="text-xs font-bold text-primary uppercase tracking-wider block mb-1.5">3. Consular Submission &amp; Biometrics</span>
              <h3 className="font-bold text-base text-foreground mb-2">VFS / Gerry's / Embassy Appointment</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Priority appointment booking for {country.name} in Islamabad, biometric file indexing, and cover letter drafting explaining your genuine intent to return to Pakistan.
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
          isSchengen={true}
        />

        {/* E-E-A-T Authority Module */}
        <EEATExpertiseSection
          countryName={country.name}
          serviceName={`${country.name} Schengen Tourist & Business Visa Filing`}
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
                The {country.name} consulate has strict documentation standards. Don't risk a refusal — let our experts at Pakistan's premier visa agency handle your application from start to finish.
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