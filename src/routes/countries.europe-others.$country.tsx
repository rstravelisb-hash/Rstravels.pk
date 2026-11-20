import { createFileRoute, notFound } from "@tanstack/react-router";
import { EUROPE_OTHERS_COUNTRIES } from "@/data/regions/europe-others_countries";
import { PageHero } from "@/components/site/PageHero";
import { CheckCircle2, FileText, Globe2, ArrowRight } from "lucide-react";
import { ContactForm } from "@/components/site/ContactForm";
import { BreadcrumbSchema } from "@/components/site/BreadcrumbSchema";
import { EEATExpertiseSection } from "@/components/site/EEATExpertiseSection";
import { DestinationCrossLinks } from "@/components/site/InternalCrossLinks";
import React, { Suspense } from "react";
const BookingWidget = React.lazy(() => import("@/components/site/BookingWidget").then(m => ({ default: m.BookingWidget })));
import { COMPANY } from "@/data/company";

export const Route = createFileRoute("/countries/europe-others/$country")({
  loader: ({ params }) => {
    const country = EUROPE_OTHERS_COUNTRIES.find((c) => c.slug === params.country);
    if (!country) throw notFound();
    return country;
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.title || `${loaderData?.name} Visa Consultant Islamabad`} | RS Travel & Tours` },
      { name: "description", content: loaderData?.description ? `${loaderData.description} RS Travel & Tours Blue Area Islamabad provides expert AVATS portal filing and VFS dossier audits.` : "" },
      { name: "keywords", content: `${loaderData?.keywords || ""}, ${loaderData?.name || ""} visit visa pakistan, ${loaderData?.name || ""} visa requirements islamabad, apply ${loaderData?.name || ""} visa online pakistan, ireland visa consultant islamabad, blue area visa consultant` },
      { name: "robots", content: "index, follow, max-snippet:-1, max-image-preview:large" },
      { name: "author", content: "RS Travel and Tours" },
      { name: "geo.region", content: "PK-IS" },
      { name: "geo.placename", content: "Islamabad, Blue Area" },
      { name: "geo.position", content: "33.7135;73.0673" },
      { name: "ICBM", content: "33.7135, 73.0673" },
      { property: "og:title", content: `${loaderData?.name || "Europe"} Visa Consultant Islamabad | RS Travel and Tours` },
      { property: "og:description", content: loaderData?.description || "" },
      { property: "og:url", content: `https://rstravel.pk/countries/europe-others/${loaderData?.slug || ""}` },
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
      { rel: "canonical", href: `https://rstravel.pk/countries/europe-others/${loaderData?.slug || ""}` },
    ],
  }),
  component: EuropeOthersCountryPage,
});

function EuropeOthersCountryPage() {
  const country = Route.useLoaderData();

  const countryFaqs = [
    {
      q: `What is the processing time and visa fee for an Ireland visa from Pakistan?`,
      a: `Irish tourist visa applications submitted via VFS Global Islamabad undergo assessment by Immigration Service Delivery (ISD). Processing takes approximately 4 to 8 weeks. The official consular fee is €60 EUR for single entry and €100 EUR for multiple entry (plus VFS logistics charges).`,
    },
    {
      q: `Can I visit Ireland if I already hold a UK visa (BIVS)?`,
      a: `Under the British-Irish Visa Scheme (BIVS), Pakistani nationals who hold an eligible UK Standard Visitor Visa endorsed with "BIVS" can travel onward to Ireland without obtaining a separate Irish visa, provided they first clear immigration control in the United Kingdom.`,
    },
    {
      q: `What bank balance is required for an Irish visit visa from Pakistan?`,
      a: `Applicants must provide a 6-month original bank statement showing an unencumbered closing balance of PKR 1,800,000 to PKR 2,500,000, along with clear documentation explaining the origin of all substantial deposits, accompanied by an Account Maintenance Certificate.`,
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
        "@id": `https://rstravel.pk/countries/europe-others/${country.slug}#service`,
        name: `${country.name} Visa File Preparation & Consular Advisory`,
        provider: { "@id": "https://rstravel.pk/#organization" },
        serviceType: `${country.name} European Visa Consultancy`,
        areaServed: { "@type": "AdministrativeArea", name: "Pakistan" },
        description: country.description,
      },
      {
        "@type": "BreadcrumbList",
        "@id": `https://rstravel.pk/countries/europe-others/${country.slug}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://rstravel.pk" },
          { "@type": "ListItem", position: 2, name: "Countries", item: "https://rstravel.pk/countries" },
          { "@type": "ListItem", position: 3, name: `${country.name} Visa`, item: `https://rstravel.pk/countries/europe-others/${country.slug}` },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `https://rstravel.pk/countries/europe-others/${country.slug}#faq`,
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
          { name: "Non-Schengen Europe", url: "/countries" },
          { name: `${country.name} Visa`, url: `/countries/europe-others/${country.slug}` },
        ]}
      />
      <PageHero
        eyebrow="Non-Schengen Europe"
        title={`${country.name} Visit Visa Consultant Islamabad`}
        subtitle={`Expert AVATS portal filing, financial dossier audits, and VFS biometric appointment guidance for ${country.name} in Blue Area, Islamabad.`}
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
                Ireland is not part of the Schengen agreement. If you do not qualify for the BIVS scheme via a UK visa, you must submit an AVATS application and attend biometrics at VFS Global in Islamabad.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-primary/5 p-6 shadow-soft border-primary/20">
              <h3 className="font-bold text-lg mb-4 text-primary-glow">Consultancy Benefits</h3>
              <ul className="space-y-3">
                {[
                  "Official AVATS portal error-free registration",
                  "VFS Global Islamabad appointment scheduling",
                  "Line-by-line financial statement & tax audit",
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

        {/* Consular Submission Protocol */}
        <div className="mb-20 rounded-[2.5rem] border border-border bg-card p-8 md:p-12 shadow-soft">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-2xl font-bold md:text-3xl">
              {country.name} Visa Application Protocol (Islamabad / Rawalpindi)
            </h2>
            <p className="mt-3 text-muted-foreground text-sm leading-relaxed">
              Applying for an Irish visa from Pakistan requires strict compliance with Immigration Service Delivery (ISD) requirements. Our Blue Area case officers prepare your dossier to satisfy all admissibility benchmarks.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="p-6 rounded-2xl bg-secondary/30 border border-border/50">
              <span className="text-xs font-bold text-primary uppercase tracking-wider block mb-1.5">1. AVATS Online Submission</span>
              <h3 className="font-bold text-base text-foreground mb-2">Portal Registration &amp; Summary</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Complete and accurate entry on Ireland's official AVATS platform, generating the barcoded visa summary sheet.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-secondary/30 border border-border/50">
              <span className="text-xs font-bold text-primary uppercase tracking-wider block mb-1.5">2. Financial Origin of Funds</span>
              <h3 className="font-bold text-base text-foreground mb-2">6-Month Stamped Statement</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Verification of regular salary or business income, FBR tax returns, and written justifications for any lump-sum transactions.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-secondary/30 border border-border/50">
              <span className="text-xs font-bold text-primary uppercase tracking-wider block mb-1.5">3. VFS Islamabad Biometrics</span>
              <h3 className="font-bold text-base text-foreground mb-2">Dossier Submission &amp; Tracking</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Physical file assembly according to ISD checklists, appointment booking at VFS Islamabad, and live tracking through decision return.
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
                Irish visa assessments require meticulous proof of ties to Pakistan and clear financial provenance. Let our experienced visa consultants guide your file to a successful outcome.
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