import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { EEATExpertiseSection } from "@/components/site/EEATExpertiseSection";
import { ServiceCrossLinksHub } from "@/components/site/InternalCrossLinks";
import { ContactForm } from "@/components/site/ContactForm";
import React, { Suspense } from "react";
const BookingWidget = React.lazy(() => import("@/components/site/BookingWidget").then(m => ({ default: m.BookingWidget })));
import {
  Award,
  ShieldCheck,
  FileCheck2,
  Users,
  Building2,
  CheckCircle2,
  ArrowRight,
  HelpCircle,
  Clock4,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";
import { COMPANY } from "@/data/company";

export const Route = createFileRoute("/visa-consultant-islamabad")({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1.0" },
      { title: "Best Visa Consultant in Islamabad (2026) — 98% Approval | RS Travel & Tours" },
      {
        name: "description",
        content:
          "Looking for the best visa consultant in Islamabad? RS Travel and Tours provides expert file preparation for UK, USA, Schengen, Canada & Australia visas in Blue Area. Call 051-2000147.",
      },
      {
        name: "keywords",
        content:
          "visa consultant islamabad, visa consultant blue area, best visa consultant in islamabad, top visa agents islamabad, visit visa consultant islamabad, uk visa consultant islamabad, usa visa consultant islamabad, schengen visa consultant islamabad, canada visa consultant islamabad, australia visa consultant islamabad, visa rejection appeal consultant islamabad",
      },
      { name: "robots", content: "index, follow, max-snippet:-1, max-image-preview:large" },
      { name: "author", content: "RS Travel and Tours" },
      { name: "geo.region", content: "PK-IS" },
      { name: "geo.placename", content: "Islamabad, Blue Area" },
      { name: "geo.position", content: "33.7135;73.0673" },
      { name: "ICBM", content: "33.7135, 73.0673" },
      {
        property: "og:title",
        content: "Best Visa Consultant in Islamabad (2026) — 98% Approval Rate",
      },
      {
        property: "og:description",
        content:
          "Expert visa consultancy in Blue Area, Islamabad for Schengen, USA, UK, Canada & Australia. Document auditing, cover letters & interview prep.",
      },
      { property: "og:url", content: "https://rstravel.pk/visa-consultant-islamabad" },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_PK" },
      { property: "og:site_name", content: "RS Travel and Tours" },
      { property: "og:image", content: "https://rstravel.pk/og-image.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Best Visa Consultant in Islamabad | RS Travel and Tours" },
      { name: "twitter:description", content: "98% visa approval rate in Blue Area, Islamabad. UK, USA, Schengen, Canada & Australia." },
      { name: "twitter:image", content: "https://rstravel.pk/og-image.jpg" },
    ],
    links: [{ rel: "canonical", href: "https://rstravel.pk/visa-consultant-islamabad" }],
  }),
  component: VisaConsultantIslamabadPage,
});

const VISA_FAQS = [
  {
    q: "Why is RS Travel recognized as the best visa consultant in Islamabad?",
    a: "Located in Blue Area Islamabad for over 15 years, RS Travel and Tours has processed 20,000+ visa applications with a 98% approval rate across UK, US, Canada, Schengen, and Australia visitor categories through rigorous file auditing and interview preparation.",
  },
  {
    q: "How do you help applicants with previous visa rejections?",
    a: "Our senior consular strategists conduct forensic reviews of refusal letters (such as US Section 214(b) or UK Paragraph V 4.2), identify documentary gaps, restructure bank statement disclosures, and draft comprehensive legal appeal/representation letters.",
  },
  {
    q: "Which embassies and visa application centers (VAC) are near your Islamabad office?",
    a: "Our Blue Area office is located minutes from the Diplomatic Enclave (US Embassy, British High Commission) and VAC centers including Gerry's Visa Drop Box, VFS Global, and TLScontact.",
  },
  {
    q: "What documents are required for a tourist visa consultation in Islamabad?",
    a: "Please bring your original passport, CNIC, 6-month bank statement with account maintenance certificate, FBR tax returns (NTN), employment/business proofs, and NADRA Family Registration Certificate (FRC).",
  },
];

function VisaConsultantIslamabadPage() {
  const consultantSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Service", "LocalBusiness"],
        "@id": "https://rstravel.pk/visa-consultant-islamabad#service",
        name: "RS Travel and Tours — Visa Consultant Islamabad",
        url: "https://rstravel.pk/visa-consultant-islamabad",
        serviceType: "Visit & Tourist Visa File Preparation and Consular Advisory",
        telephone: COMPANY.phone,
        email: COMPANY.email,
        priceRange: "$$",
        image: "https://rstravel.pk/og-image.jpg",
        description:
          "Islamabad's leading visa consultancy located in Blue Area specializing in UK, USA, Schengen, Canada, and Australia visit visa file preparation and refusal recovery.",
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
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          opens: "10:00",
          closes: "19:00",
        },
      },
      {
        "@type": "FAQPage",
        "@id": "https://rstravel.pk/visa-consultant-islamabad#faq",
        mainEntity: VISA_FAQS.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.a,
          },
        })),
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json">{JSON.stringify(consultantSchema)}</script>
      <PageHero
        eyebrow="Consular File Strategists"
        title="Best Visa Consultant in Blue Area, Islamabad"
        subtitle="Meticulous file preparation, embassy appointment scheduling, and mock interview coaching with an industry-leading 98% approval rate."
      />

      <div className="-mt-16 md:-mt-24 relative z-10 container-px mx-auto max-w-7xl pb-12">
        <Suspense fallback={<div className="h-[200px] w-full animate-pulse rounded-3xl bg-white/5 backdrop-blur-md border border-white/10" />}>
          <BookingWidget initialTab="visa" />
        </Suspense>
      </div>

      {/* Trust Stats */}
      <section className="container-px mx-auto max-w-7xl py-12">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { n: "98%", l: "Approval Rate", d: "Across top tier-1 embassies" },
            { n: "15+", l: "Years in Blue Area", d: "Operating since 2009 in Islamabad" },
            { n: "20,000+", l: "Files Processed", d: "UK, USA, Schengen, Canada & Australia" },
            { n: "1-on-1", l: "Dedicated Case Officer", d: "Custom cover letters & audit" },
          ].map((s, idx) => (
            <Reveal key={s.l} delay={idx * 0.05}>
              <div className="rounded-2xl border border-border/60 bg-card p-6 shadow-soft text-center">
                <p className="text-4xl font-extrabold text-primary">{s.n}</p>
                <p className="font-bold text-foreground text-sm mt-1">{s.l}</p>
                <p className="text-xs text-muted-foreground mt-1">{s.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Visa Categories Breakdown */}
      <section className="bg-secondary/30 py-20 border-y border-border/40">
        <div className="container-px mx-auto max-w-7xl space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-primary">High-Demand Embassies</span>
            <h2 className="text-3xl font-bold md:text-4xl">Expert Visa Consultancy for Major Destinations</h2>
            <p className="text-muted-foreground text-sm">
              We eliminate guesswork with embassy-aligned document indexing, verified itineraries, and comprehensive profile strengthening.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                country: "United Kingdom (UK)",
                title: "UK Standard Visitor Visa",
                desc: "Expert guidance for UKVI rules, source of income validation, sponsor undertakings, and document uploads.",
                link: "/countries/uk",
              },
              {
                country: "United States (USA)",
                title: "USA B1/B2 Tourist & Business",
                desc: "Error-free DS-160 filing, expedited consular appointment tracking, and realistic mock interview coaching.",
                link: "/countries/usa",
              },
              {
                country: "European Union",
                title: "Schengen Visa (27 States)",
                desc: "Complete VFS/Gerry's file compilation for France, Germany, Italy, Spain, Switzerland, and Netherlands.",
                link: "/countries/schengen",
              },
              {
                country: "Canada",
                title: "Canada Visitor Visa (TRV)",
                desc: "GCKey online filing, purpose-of-travel statements, home ties reinforcement, and family visit dossiers.",
                link: "/countries/canada",
              },
              {
                country: "Australia",
                title: "Australia Subclass 600",
                desc: "ImmiAccount digital portal management, biometric appointment prep, and business visitor stream support.",
                link: "/countries/australia",
              },
              {
                country: "Refusal Appeal Desk",
                title: "Visa Rejection Review",
                desc: "Detailed legal analysis of refusal reasons, corrective document drafting, and strong re-application strategy.",
                link: "/profile-assessment",
              },
            ].map((v, i) => (
              <Reveal key={v.title} delay={i * 0.05}>
                <div className="h-full rounded-2xl border border-border/60 bg-card p-6 shadow-soft flex flex-col justify-between hover:border-primary/40 transition-colors">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-primary bg-primary/10 px-2.5 py-1 rounded-full">{v.country}</span>
                    <h3 className="text-xl font-bold mt-4 mb-2">{v.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
                  </div>
                  <Link to={v.link} className="mt-6 inline-flex items-center gap-1.5 text-sm font-bold text-primary hover:underline">
                    View Requirements <ArrowRight size={14} />
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation Section */}
      <section className="container-px mx-auto max-w-7xl py-20">
        <div className="grid gap-12 lg:grid-cols-2 items-start">
          <div className="space-y-6">
            <span className="text-xs font-bold uppercase tracking-wider text-primary">In-Person Document Verification</span>
            <h2 className="text-3xl font-bold">Book a 1-on-1 Visa Assessment in Blue Area</h2>
            <p className="text-muted-foreground leading-relaxed">
              Visit our office with your financial and personal documents. Our senior case officers will evaluate your admissibility, identify weak points, and chart your optimal filing strategy.
            </p>

            <ul className="space-y-4 text-sm text-foreground/90">
              <li className="flex gap-3 items-start">
                <MapPin className="text-primary mt-1 shrink-0" size={18} />
                <div>
                  <strong>Headquarters:</strong> {COMPANY.address}
                </div>
              </li>
              <li className="flex gap-3 items-center">
                <Phone className="text-primary shrink-0" size={18} />
                <div>
                  <strong>Consultancy Desk:</strong> <a href={`tel:${COMPANY.phone.replace(/\s/g, "")}`} className="hover:text-primary">{COMPANY.phone}</a> | <strong>Direct WhatsApp:</strong> <a href={`https://wa.me/923445979486`} className="hover:text-primary">{COMPANY.whatsapp}</a>
                </div>
              </li>
              <li className="flex gap-3 items-center">
                <Mail className="text-primary shrink-0" size={18} />
                <div>
                  <strong>Email Inquiries:</strong> <a href={`mailto:${COMPANY.email}`} className="hover:text-primary">{COMPANY.email}</a>
                </div>
              </li>
            </ul>

            <div className="overflow-hidden rounded-2xl border border-border h-64 mt-6">
              <iframe
                title="RS Travel Visa Consultancy Blue Area Islamabad"
                src="https://maps.google.com/maps?q=Ratta%20Mansion%2C%20Fazal-e-Haq%20Road%2C%20Blue%20Area%2C%20Islamabad&t=&z=16&ie=UTF8&iwloc=&output=embed"
                loading="lazy"
                className="h-full w-full border-0"
              />
            </div>
          </div>

          <ContactForm />
        </div>

        {/* FAQs */}
        <div className="mt-20 max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold">Frequently Asked Questions — Visa Consultant Islamabad</h3>
          </div>
          <div className="space-y-4">
            {VISA_FAQS.map((faq, i) => (
              <div key={i} className="rounded-2xl border border-border/60 bg-card p-6 shadow-soft">
                <h4 className="text-base font-bold text-foreground mb-2 flex items-start gap-2">
                  <span className="text-primary font-black">Q:</span> {faq.q}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed pl-6">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Internal Cross-Linking */}
        <div className="mt-16">
          <ServiceCrossLinksHub currentService="Visa Consultant Islamabad" />
        </div>

        {/* E-E-A-T Section */}
        <div className="mt-16">
          <EEATExpertiseSection
            countryName="Global Consular Services"
            serviceName="International Visit Visa Application & Embassy Representation"
            consultantRole="Chief Consular Case Strategist & File Auditor"
            lastUpdated="September 2026"
          />
        </div>
      </section>
    </>
  );
}
