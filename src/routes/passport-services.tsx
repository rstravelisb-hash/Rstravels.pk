import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { EEATExpertiseSection } from "@/components/site/EEATExpertiseSection";
import { ServiceCrossLinksHub } from "@/components/site/InternalCrossLinks";
import { BookUser, RefreshCcw, Flag, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/passport-services")({
  head: () => ({
    meta: [
      { title: "Passport Services in Islamabad | RS Travel & Tours" },
      {
        name: "description",
        content:
          "Fast Pakistani passport renewal, urgent token booking & new passport processing in Blue Area, Islamabad. Expert DGIP & travel assistance. Call 051-2000147.",
      },
      {
        name: "keywords",
        content:
          "passport services islamabad, fast passport renewal ISB, urgent passport fee pakistan 2026, dgip token appointment islamabad, passport agent blue area islamabad, apply for new passport pakistan, overseas pakistani passport renewal, fast track passport islamabad, executive passport office islamabad, best passport consultant islamabad, child passport application pakistan",
      },
      { name: "robots", content: "index, follow, max-snippet:-1, max-image-preview:large" },
      { name: "author", content: "RS Travel and Tours" },
      { name: "geo.region", content: "PK-IS" },
      { name: "geo.placename", content: "Islamabad" },
      { property: "og:title", content: "Passport Services in Islamabad (2026) — Urgent Renewal & Application" },
      {
        property: "og:description",
        content: "Urgent passport renewal, token assistance & USA passport processing in Blue Area, Islamabad.",
      },
      { property: "og:url", content: "https://rstravel.pk/passport-services" },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_PK" },
      { property: "og:site_name", content: "RS Travel and Tours — Pakistan's No.1 Travel Agency" },
      { property: "og:image", content: "https://rstravel.pk/og-image.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Passport Services Islamabad | Fast Processing & Renewals" },
      { name: "twitter:description", content: "Urgent passport renewal and new application consultancy in Islamabad Blue Area." },
      { name: "twitter:image", content: "https://rstravel.pk/og-image.jpg" },
    ],
    links: [
      { rel: "canonical", href: "https://rstravel.pk/passport-services" },
    ],
  }),
  component: PassportServices,
});

const PASSPORT_FAQS = [
  {
    q: "How does RS Travel and Tours assist with Pakistani passport renewal in Islamabad?",
    a: "We assist with fee voucher generation via the official DGIP e-Payment portal, document vetting (CNIC, old passport, FRC), fast-track and executive appointment scheduling at the Regional Passport Office G-10/4 or Executive Passport Office Blue Area Islamabad, and online tracking.",
  },
  {
    q: "What is the difference between normal, urgent, and fast-track passport issuance in Pakistan?",
    a: "Normal passport delivery typically takes 10 to 14 working days, Urgent issuance takes 4 to 7 working days, and Fast-Track service offers dispatch within 2 to 4 working days through the Directorate General of Immigration & Passports.",
  },
  {
    q: "What documents are required for child/minor passport applications in Pakistan?",
    a: "For children under 18: NADRA Child Registration Certificate (B-Form) or Smart Card, original CNICs of both parents, computerized marriage certificate (MRC) if applicable, and physical presence of the minor with both parents at the passport desk.",
  },
  {
    q: "Do you offer guidance for US passport renewal and CRBA in Islamabad?",
    a: "Yes. We provide complete dossier organization and DS-82 / DS-11 / CRBA form auditing for American citizens and minors applying through the American Citizen Services (ACS) unit at the US Embassy in Diplomatic Enclave, Islamabad.",
  },
];

function PassportServices() {
  const passportSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://rstravel.pk/passport-services#service",
        name: "Pakistani & Overseas Passport Services Islamabad",
        serviceType: "Passport Renewal & First-Time Application Assistance",
        description: "Urgent and executive passport application support, token assistance, fee payment vouchers, and document vetting in Blue Area, Islamabad for Pakistani and overseas citizens.",
        provider: {
          "@type": "TravelAgency",
          "@id": "https://rstravel.pk/#organization",
          name: "RS Travel and Tours",
          telephone: "+92 51 2000147",
          url: "https://rstravel.pk/",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Office no 6 Mezzanine floor Ratta Mansion Fazal-e-Haq Road Blue Area",
            addressLocality: "Islamabad",
            addressRegion: "Islamabad Capital Territory",
            postalCode: "44000",
            addressCountry: "PK",
          },
        },
        areaServed: "Islamabad, Rawalpindi, Pakistan",
      },
      {
        "@type": "FAQPage",
        "@id": "https://rstravel.pk/passport-services#faq",
        mainEntity: PASSPORT_FAQS.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: f.a,
          },
        })),
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json">{JSON.stringify(passportSchema)}</script>
      <PageHero
        eyebrow="Passport Services"
        title="Pakistani & US Passport Services in Islamabad"
        subtitle="From urgent renewals and DGIP fee payments to US consular passport files — trusted guidance in Blue Area."
      />

      <section className="container-px mx-auto max-w-7xl py-20 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {[
          {
            icon: BookUser,
            t: "First-Time Applications",
            d: "Complete document verification, e-challan fee voucher generation, and token assistance for new machine-readable and e-passports.",
          },
          {
            icon: RefreshCcw,
            t: "Urgent & Fast-Track Renewals",
            d: "Hassle-free 5-year and 10-year passport renewals with fast-track processing guidance across Islamabad & Rawalpindi centers.",
          },
          {
            icon: Flag,
            t: "USA Passport & CRBA Filing",
            d: "Specialized dossier preparation, ACS appointment scheduling, and fee payment assistance for US citizens in Pakistan.",
          },
        ].map((b, i) => (
          <Reveal key={b.t} delay={i * 0.05}>
            <div className="card-3d h-full rounded-2xl border border-border bg-card p-6 shadow-soft">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary-glow text-primary-foreground shadow-soft">
                <b.icon size={20} />
              </span>
              <h3 className="mt-5 text-lg font-bold">{b.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{b.d}</p>
            </div>
          </Reveal>
        ))}
      </section>

      {/* Deep Step-by-Step Guidance Content */}
      <section className="bg-secondary/20 py-20 border-t border-b border-border">
        <div className="container-px mx-auto max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold md:text-4xl">
              Complete Passport Assistance Protocols in Islamabad
            </h2>
            <p className="mt-4 text-muted-foreground text-lg">
              Avoid repeated office visits, rejected photos, or document discrepancies. Our Blue Area consultants ensure full compliance with official DGIP standards.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
              <span className="text-xs font-bold text-primary uppercase tracking-wider block mb-2">Step 1</span>
              <h3 className="text-lg font-bold text-foreground mb-3">Pre-Submission Document Audit</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Verification of CNIC/NICOP validity, name spelling consistency across educational records, NADRA FRC alignment, and profession credentials on tax files.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
              <span className="text-xs font-bold text-primary uppercase tracking-wider block mb-2">Step 2</span>
              <h3 className="text-lg font-bold text-foreground mb-3">Official Fee Payment & Token Generation</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Generating electronic challans via DGIP 1-Link integration for 36-page, 72-page, or 100-page booklets (Normal, Urgent, or Fast-Track 10-year validity).
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
              <span className="text-xs font-bold text-primary uppercase tracking-wider block mb-2">Step 3</span>
              <h3 className="text-lg font-bold text-foreground mb-3">Passport Collection & Visa Alignment</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Tracking your passport tracking ID online, collecting your booklet, and immediately transitioning to visa file preparation with 6+ months blank page validity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container-px mx-auto max-w-4xl py-20">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold md:text-3xl">Frequently Asked Questions — Passport Services</h2>
          <p className="mt-2 text-muted-foreground">Clear, transparent information regarding passport processing in Islamabad.</p>
        </div>
        <div className="space-y-4">
          {PASSPORT_FAQS.map((faq, i) => (
            <div key={i} className="rounded-2xl border border-border bg-card p-6 shadow-soft">
              <h3 className="text-base font-bold text-foreground mb-2 flex items-start gap-2">
                <span className="text-primary font-bold">Q:</span> {faq.q}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed pl-6">{faq.a}</p>
            </div>
          ))}
        </div>

        {/* Cross-Service Travel Solutions Silo */}
        <div className="mt-16">
          <ServiceCrossLinksHub currentService="/passport-services" />
        </div>

        {/* E-E-A-T Passport & Identity Authority */}
        <div className="mt-12">
          <EEATExpertiseSection
            countryName="Pakistan & USA"
            serviceName="Official Passport Processing, Renewals & Consular Documentation"
            consultantRole="Senior Document Verification & Consular Officer"
            lastUpdated="October 2026"
          />
        </div>
      </section>
    </>
  );
}
