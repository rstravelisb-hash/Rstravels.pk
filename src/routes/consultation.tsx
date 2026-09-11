import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { ContactForm } from "@/components/site/ContactForm";
import { EEATExpertiseSection } from "@/components/site/EEATExpertiseSection";
import { ServiceCrossLinksHub } from "@/components/site/InternalCrossLinks";
import { CheckCircle2, Clock, ShieldCheck, Award } from "lucide-react";
import { COMPANY } from "@/data/site";

export const Route = createFileRoute("/consultation")({
  head: () => ({
    meta: [
      { title: "Free Visa Consultation — Pakistan's #1 Visa Expert | RS Travel and Tours Islamabad" },
      {
        name: "description",
        content:
          "Book a free 15-minute visa consultation with Pakistan's best visa consultants. Get expert pathway analysis, document checklist & honest fee estimate. No obligation. RS Travel and Tours Blue Area, Islamabad.",
      },
      {
        name: "keywords",
        content:
          "free visa consultation islamabad, book visa appointment pakistan, visa documentation consultation blue area, visa file evaluation pakistan, free immigration advice islamabad, visa rejection appeal assessment, schengen visa file audit, uk visa refusal appeal help islamabad, bank statement assessment for visa, dummy ticket consultation, rs travel and tours consultation, visa pathway assessment pakistan",
      },
      { name: "robots", content: "index, follow, max-snippet:-1, max-image-preview:large" },
      { name: "geo.region", content: "PK-IS" },
      { name: "geo.placename", content: "Islamabad" },
      { property: "og:title", content: "Free Visa Consultation — Pakistan's #1 Visa Expert" },
      {
        property: "og:description",
        content: "15 minutes with a senior visa consultant — no obligation. Expert pathway & document checklist.",
      },
      { property: "og:image", content: "https://rstravel.pk/og-image.jpg" },
      { property: "og:url", content: "https://rstravel.pk/consultation" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Free Visa Consultation | RS Travel and Tours" },
      { name: "twitter:description", content: "15-minute 1-on-1 consular strategy session with senior visa experts." },
      { name: "twitter:image", content: "https://rstravel.pk/og-image.jpg" },
    ],
    links: [
      { rel: "canonical", href: "https://rstravel.pk/consultation" },
    ],
  }),
  component: Consultation,
});

function Consultation() {
  const consultationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Free Visa & Travel Consultation",
    "serviceType": "Visa & Immigration Advisory",
    "provider": {
      "@type": "TravelAgency",
      "name": "RS Travel and Tours",
      "url": "https://rstravel.pk",
      "telephone": COMPANY.phone,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Office no 6 Mezzanine floor Ratta Mansion Fazal-e-Haq Road Blue Area",
        "addressLocality": "Islamabad",
        "addressCountry": "PK"
      }
    },
    "description": "Complimentary 15-minute consular profile evaluation and document audit for Schengen, UK, USA, Canada, Australia and worldwide visas."
  };
  return (
    <>
      <script type="application/ld+json">{JSON.stringify(consultationJsonLd)}</script>
      <PageHero
        eyebrow="Free Consultation"
        title="15 minutes that changes your travel plans"
        subtitle="Tell us about your goal — we'll respond with a clear pathway, timeline and honest fee estimate."
      />
      <section className="container-px mx-auto max-w-7xl py-20 grid gap-10 lg:grid-cols-2 items-start">
        <div>
          <h2 className="text-2xl font-bold md:text-3xl">Why book a consultation?</h2>
          <ul className="mt-6 space-y-3 text-sm">
            {[
              "Personalized visa pathway recommendation",
              "Document checklist tailored to your case",
              "Realistic timeline & fee transparency",
              "Senior consultant — no junior reps",
              "100% obligation-free",
            ].map((it) => (
              <li key={it} className="flex gap-3">
                <CheckCircle2 className="text-primary mt-0.5" size={18} /> {it}
              </li>
            ))}
          </ul>
          <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-2 text-xs font-semibold text-accent-foreground">
            <Clock size={14} className="text-accent" /> Average response: under 1 business hour
          </div>
        </div>
        <ContactForm />
      </section>

      {/* Internal Linking Cross-Hub */}
      <section className="container-px mx-auto max-w-7xl pb-16">
        <ServiceCrossLinksHub currentService="Consultation" />
      </section>

      {/* E-E-A-T Authority Module */}
      <section className="container-px mx-auto max-w-7xl pb-20">
        <EEATExpertiseSection
          countryName="Global Destinations"
          serviceName="Consular Case Assessment & Strategy Planning"
          consultantRole="Senior Principal Immigration Consultant"
          lastUpdated="September 2026"
        />
      </section>
    </>
  );
}
