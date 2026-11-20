import { createFileRoute, notFound } from "@tanstack/react-router";
import { EAST_ASIA_COUNTRIES } from "@/data/regions/east-asia_countries";
import { PageHero } from "@/components/site/PageHero";
import { CheckCircle2, FileText, Globe2, ArrowRight } from "lucide-react";
import { ContactForm } from "@/components/site/ContactForm";
import { BreadcrumbSchema } from "@/components/site/BreadcrumbSchema";
import { EEATExpertiseSection } from "@/components/site/EEATExpertiseSection";
import { DestinationCrossLinks } from "@/components/site/InternalCrossLinks";
import React, { Suspense } from "react";
const BookingWidget = React.lazy(() => import("@/components/site/BookingWidget").then(m => ({ default: m.BookingWidget })));
import { COMPANY } from "@/data/company";

export const Route = createFileRoute("/countries/east-asia/$country")({
  loader: ({ params }) => {
    const country = EAST_ASIA_COUNTRIES.find((c) => c.slug === params.country);
    if (!country) throw notFound();
    return country;
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.title || "East Asia Visa Consultant Islamabad"} | RS Travel & Tours` },
      { name: "description", content: loaderData?.description ? `${loaderData.description} RS Travel & Tours Blue Area Islamabad provides expert document audits and consular filing.` : "" },
      { name: "keywords", content: `${loaderData?.keywords || ""}, best east asia visa consultant islamabad, top east asia visa agent pakistan, east asia visa success rate pakistan, east asia visa from pakistan 2026, rs travel and tours east asia visa, blue area visa consultant` },
      { name: "robots", content: "index, follow, max-snippet:-1, max-image-preview:large" },
      { name: "author", content: "RS Travel and Tours" },
      { name: "geo.region", content: "PK-IS" },
      { name: "geo.placename", content: "Islamabad, Blue Area" },
      { name: "geo.position", content: "33.7135;73.0673" },
      { name: "ICBM", content: "33.7135, 73.0673" },
      { property: "og:title", content: `${loaderData?.name || "East Asia"} Visa Consultant Islamabad | RS Travel and Tours` },
      { property: "og:description", content: loaderData?.description || "" },
      { property: "og:url", content: `https://rstravel.pk/countries/east-asia/${loaderData?.slug || ""}` },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_PK" },
      { property: "og:site_name", content: "RS Travel and Tours" },
      { property: "og:image", content: loaderData?.image || "" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: `${loaderData?.name || ""} Visa Consultant Islamabad | RS Travel and Tours` },
      { name: "twitter:description", content: loaderData?.description || "" },
      { name: "twitter:image", content: loaderData?.image || "" },
    ],
    links: [
      { rel: "canonical", href: `https://rstravel.pk/countries/east-asia/${loaderData?.slug || ""}` },
    ],
  }),
  component: EastAsiaCountryPage,
});

function EastAsiaCountryPage() {
  const country = Route.useLoaderData();

  const countryFaqs = [
    {
      q: `What is the processing time for a ${country.name} visit visa from Islamabad?`,
      a: country.slug === "japan"
        ? "Processing for a Japan Temporary Visitor visa takes 7 to 10 working days after physical submission at Gerry's Visa Drop Box Centre in Islamabad."
        : country.slug === "south-korea"
        ? "Processing for a South Korea C-3-9 tourist visa takes 14 to 21 working days through Gerry's Drop Box Centre in Islamabad."
        : country.slug === "china"
        ? "China visa applications submitted at the Chinese Visa Application Service Centre (CVASC) in Islamabad take 4 to 7 working days for standard processing."
        : `Standard processing for ${country.name} takes approximately 10 to 15 working days following file lodgment.`,
    },
    {
      q: `What bank balance is recommended for a ${country.name} tourist visa from Pakistan?`,
      a: country.slug === "japan"
        ? "An unencumbered closing balance between PKR 1,800,000 and PKR 3,200,000, supported by 6 months of steady transaction history and an Account Maintenance Certificate, is standard."
        : country.slug === "south-korea"
        ? "A closing balance between PKR 1,500,000 and PKR 2,800,000, corroborated by 2 years of FBR tax returns with Computerized Payment Receipts (CPRs), is recommended."
        : "An active 6-month bank statement with an unencumbered closing balance between PKR 1,500,000 and PKR 2,500,000, supported by official tax returns, is standard.",
    },
    {
      q: country.slug === "japan"
        ? "What is the Schedule of Stay (Taizai Nitteisho) required for Japan?"
        : country.slug === "south-korea"
        ? "Does the Embassy of the Republic of Korea issue physical visa stickers?"
        : country.slug === "china"
        ? "Do Pakistani business visitors need an official invitation letter for China?"
        : `Do I need to attend an in-person interview for ${country.name}?`,
      a: country.slug === "japan"
        ? "The Schedule of Stay (Taizai Nitteisho) is a mandatory day-by-day table specifying dates, planned activities, contact addresses, and verified hotel telephone numbers across each prefecture visited."
        : country.slug === "south-korea"
        ? "No. The Korean Embassy issues a paperless electronic Visa Grant Notice. Approved travelers download and print their official grant certificate directly from the official Korea Visa Portal (visa.go.kr)."
        : country.slug === "china"
        ? "Yes. Commercial business visa (M-category) applicants must provide an official invitation letter issued by a duly authorized Chinese trade partner or government authority."
        : `In most cases, visa applications for ${country.name} are adjudicated on paper files submitted through authorized drop box centers without an interview, though consulates reserve the right to call applicants if needed.`,
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
        "@id": `https://rstravel.pk/countries/east-asia/${country.slug}#service`,
        name: `${country.name} Visa Consultation & File Preparation`,
        provider: { "@id": "https://rstravel.pk/#organization" },
        serviceType: `${country.name} Tourist & Business Visa Filing`,
        areaServed: { "@type": "AdministrativeArea", name: "Pakistan" },
        description: country.description,
      },
      {
        "@type": "BreadcrumbList",
        "@id": `https://rstravel.pk/countries/east-asia/${country.slug}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://rstravel.pk" },
          { "@type": "ListItem", position: 2, name: "Countries", item: "https://rstravel.pk/countries" },
          { "@type": "ListItem", position: 3, name: `${country.name} Visa`, item: `https://rstravel.pk/countries/east-asia/${country.slug}` },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `https://rstravel.pk/countries/east-asia/${country.slug}#faq`,
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
          { name: "East Asia", url: "/countries" },
          { name: `${country.name} Visa`, url: `/countries/east-asia/${country.slug}` },
        ]}
      />
      <PageHero
        eyebrow="East Asia"
        title={`${country.name} Visit Visa Consultant Islamabad`}
        subtitle={`Expert visa documentation, financial auditing, and consular submission support for ${country.name} in Blue Area, Islamabad.`}
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
                {country.slug === "japan"
                  ? "A rejection from the Japanese embassy carries a mandatory 6-month reapplication ban. Ensure your Schedule of Stay (Taizai Nitteisho) is thoroughly audited before submission."
                  : country.slug === "south-korea"
                  ? "Ensure your FBR tax returns match your bank credits and include Computerized Payment Receipts (CPRs) for consular verification."
                  : `Ensure all supporting employment letters, tax returns, and NADRA certificates are fully indexed before submitting your ${country.name} file.`}
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-primary/5 p-6 shadow-soft border-primary/20">
              <h3 className="font-bold text-lg mb-4 text-primary-glow">Consultancy Benefits</h3>
              <ul className="space-y-3">
                {[
                  "Complete file indexing & checklist compliance",
                  "Line-by-line financial statement audit",
                  "Verifiable GDS return flight reservations",
                  "Confirmed CRS hotel vouchers",
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
              {country.name} Consular Submission Protocol (Islamabad / Rawalpindi)
            </h2>
            <p className="mt-3 text-muted-foreground text-sm leading-relaxed">
              East Asian consulates maintain rigorous document scrutiny. Our Blue Area case officers prepare your file to meet all official evidentiary standards.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="p-6 rounded-2xl bg-secondary/30 border border-border/50">
              <span className="text-xs font-bold text-primary uppercase tracking-wider block mb-1.5">1. Financial Solvency &amp; Tax Audit</span>
              <h3 className="font-bold text-base text-foreground mb-2">6-Month Stamped Statement</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Verification of regular account turnover, FBR active taxpayer declarations, and source substantiation for any large deposits.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-secondary/30 border border-border/50">
              <span className="text-xs font-bold text-primary uppercase tracking-wider block mb-1.5">2. Mandatory Travel Logistics</span>
              <h3 className="font-bold text-base text-foreground mb-2">Live GDS Flights &amp; Hotel Proofs</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Confirmed GDS flight itineraries with live airline PNRs and central hotel vouchers matching your daily itinerary.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-secondary/30 border border-border/50">
              <span className="text-xs font-bold text-primary uppercase tracking-wider block mb-1.5">3. Consular Filing &amp; Drop Box</span>
              <h3 className="font-bold text-base text-foreground mb-2">Authorized Submission Channels</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Organized submission via Gerry’s Drop Box Centre or consular visa application centers in Islamabad with real-time tracking.
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

      <section className="bg-secondary/30 py-20 border-t border-border">
        <div className="container-px mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold md:text-4xl">
                Start Your {country.name} Journey Today
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Connect with our East Asia visa experts for a comprehensive evaluation of your profile.
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
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
