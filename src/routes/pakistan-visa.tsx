import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { ContactForm } from "@/components/site/ContactForm";
import React, { Suspense } from "react";
const BookingWidget = React.lazy(() => import("@/components/site/BookingWidget").then(m => ({ default: m.BookingWidget })));
import { ServiceCrossLinksHub } from "@/components/site/InternalCrossLinks";
import { EEATExpertiseSection } from "@/components/site/EEATExpertiseSection";
import { CheckCircle2, FileText, Globe2, ArrowRight } from "lucide-react";
import { COMPANY } from "@/data/site";

export const Route = createFileRoute("/pakistan-visa")({
  head: () => ({
    meta: [
      { title: "Pakistan Inbound E-Visa Consultant | RS Travel" },
      { name: "description", content: "Expert assistance for Pakistan inbound visa (E-Visa, tourist, business, work) at RS Travel and Tours Islamabad. 100% online, hassle-free processing." },
      { name: "keywords", content: "pakistan inbound visa, pakistan e-visa islamabad, pakistan tourist visa online, apply pakistan visa 2026, nadra pakistan visa portal, pakistan business visa invitation, foreign tourist visa pakistan, travel to pakistan visa consultancy, best visa agent pakistan, pakistan visa fees 2026" },
      { name: "robots", content: "index, follow, max-snippet:-1, max-image-preview:large" },
      { name: "author", content: "RS Travel and Tours" },
      { name: "geo.region", content: "PK-IS" },
      { name: "geo.placename", content: "Islamabad" },
      { property: "og:title", content: "Pakistan Inbound E-Visa Processing | RS Travel and Tours" },
      { property: "og:description", content: "Fast e-visa, business visa, and tourist visa services for traveling to Pakistan from anywhere globally." },
      { property: "og:url", content: "https://rstravel.pk/pakistan-visa" },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_PK" },
      { property: "og:site_name", content: "RS Travel and Tours — Pakistan's No.1 Travel Agency" },
      { property: "og:image", content: "https://rstravel.pk/og-image.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Pakistan Inbound E-Visa Processing | RS Travel and Tours" },
      { name: "twitter:description", content: "Fast e-visa, business visa, and tourist visa services for traveling to Pakistan." },
      { name: "twitter:image", content: "https://rstravel.pk/og-image.jpg" },
    ],
    links: [
      { rel: "canonical", href: "https://rstravel.pk/pakistan-visa" },
    ],
  }),
  component: PakistanVisaPage,
});

function PakistanVisaPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["WebPage", "Service"],
    name: "Pakistan Inbound Visa Consultancy — RS Travel and Tours",
    description: "Secure an inbound tourist, business, or e-visa for Pakistan smoothly.",
    url: "https://rstravel.pk/pakistan-visa",
    provider: {
      "@type": "TravelAgency",
      name: "RS Travel and Tours",
      url: "https://rstravel.pk",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Office no 6 Mezzanine floor Ratta Mansion Fazal-e-Haq Road Blue Area",
        addressLocality: "Islamabad",
        addressCountry: "PK",
      },
    },
    areaServed: { "@type": "Country", name: "Pakistan" },
    serviceType: "Inbound Pakistan Visa",
  };

  const pakistanDocs = [
    "Valid Passport Color Scan (Bio-data page, minimum 6-month validity)",
    "Recent Digital Photograph (White background, size 35x45mm, matte finish)",
    "Hotel Booking Confirmation or Invitation Letter (Sponsorship from host)",
    "Copy of Pakistani Host CNIC / Passport (If visiting family or friends)",
    "Copy of Parents' CNIC / Passport (For minors and applicants of Pakistani origin)",
    "SECP Registration Certificate or Chamber of Commerce Letter (For Business Visa)",
    "Evidence of legal residence in the country of application (For foreign applicants)",
    "Proof of Return Travel & Day-by-day Itinerary",
  ];

  return (
    <>
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      <PageHero
        eyebrow="Inbound Visa"
        title="Pakistan Visa Services"
        subtitle="Complete assistance for Tourist, Business, and E-Visas to Pakistan."
      />

      <div className="-mt-20 relative z-50 container-px mx-auto max-w-7xl">
        <Suspense fallback={<div className="h-[200px] w-full animate-pulse rounded-3xl bg-white/5 backdrop-blur-md border border-white/10" />}><BookingWidget initialTab="visa" /></Suspense>
      </div>

      <section className="container-px mx-auto max-w-5xl py-20">
        <div className="space-y-6 text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl font-bold md:text-4xl">
            Inbound Pakistan Visa Processing
          </h2>
          <p className="text-muted-foreground leading-relaxed text-lg">
            We provide fast, efficient end-to-end guidance for foreign nationals applying for Pakistan E-Visa, tourist visa, and business entry permits.
          </p>
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
              {pakistanDocs.map((req, idx) => (
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
                <h3 className="font-bold text-lg">Pakistan E-Visa Portal</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                The official Pakistan online visa system simplifies the process. We assemble your sponsor letters, hotel bookings, and required documentation for rapid approvals.
              </p>
            </div>
          </div>
        </div>

        {/* Detailed Inbound Visa Categories */}
        <div className="mt-16 rounded-[2.5rem] border border-border bg-card p-8 md:p-12 shadow-soft">
          <h2 className="text-2xl font-bold md:text-3xl text-center mb-8">
            Pakistan Inbound Visa Categories &amp; Eligibility
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="p-6 rounded-2xl bg-secondary/30 border border-border/50">
              <h3 className="font-bold text-lg text-primary mb-2">Tourist E-Visa (Single / Multiple)</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Available for citizens of 190+ countries. Valid for 30 to 90 days with rapid online issuance for sightseeing, Northern areas exploration, and family visits.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-secondary/30 border border-border/50">
              <h3 className="font-bold text-lg text-primary mb-2">Business Entry Visa (BV)</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Requires an official Invitation Letter from a Board of Investment (BOI) recognized company or Chamber of Commerce recommendation for commercial activities.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-secondary/30 border border-border/50">
              <h3 className="font-bold text-lg text-primary mb-2">Family &amp; Origin Visa (POC / NICOP)</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                For foreign spouses and individuals of Pakistani heritage. Assistance with NADRA POC cards and multi-entry family visit permits.
              </p>
            </div>
          </div>
        </div>

        {/* FAQs */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold md:text-3xl">Frequently Asked Questions — Pakistan Inbound Visa</h2>
            <p className="mt-2 text-muted-foreground text-sm">Essential guidance for travelers visiting Pakistan.</p>
          </div>
          <div className="space-y-4">
            {[
              { q: "How long does a Pakistan tourist e-visa take to process?", a: "Standard online processing via the NADRA Pakistan Visa Portal typically takes 7 to 10 working days, while urgent applications can be issued within 48 to 72 hours." },
              { q: "Can foreign nationals visit Northern Pakistan (Hunza, Skardu, Gilgit)?", a: "Yes. Most scenic destinations in Gilgit-Baltistan and Khyber Pakhtunkhwa are open to international tourists holding a valid Pakistan Tourist E-Visa with standard registration protocols." },
              { q: "Do I need an invitation letter to apply for a tourist visa to Pakistan?", a: "Foreign tourists can either provide a confirmed hotel booking voucher from an accredited travel agency like RS Travel and Tours or a sponsor letter from a Pakistani citizen." },
            ].map((faq, i) => (
              <div key={i} className="rounded-2xl border border-border bg-card p-6 shadow-soft">
                <h3 className="text-base font-bold text-foreground mb-2 flex items-start gap-2">
                  <span className="text-primary font-bold">Q:</span> {faq.q}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed pl-6">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Cross-Service Solutions Silo */}
        <div className="mt-16">
          <ServiceCrossLinksHub currentService="/pakistan-visa" />
        </div>

        {/* E-E-A-T Section */}
        <div className="mt-12">
          <EEATExpertiseSection
            countryName="Pakistan (Inbound)"
            serviceName="NADRA Online Visa Portal & Consular Inbound Processing"
            consultantRole="Senior Inbound Consular Protocol Officer"
            lastUpdated="October 2026"
          />
        </div>
      </section>

      <section className="bg-secondary/30 py-20 border-t border-border">
        <div className="container-px mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold md:text-4xl">
                Start Your Pakistan Visa Application
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Our team at RS Travel and Tours handles file compilation, sponsor documentation, and official visa portal submissions smoothly.
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
