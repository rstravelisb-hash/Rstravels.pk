import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { ContactForm } from "@/components/site/ContactForm";
import { EEATExpertiseSection } from "@/components/site/EEATExpertiseSection";
import { Phone, Mail, MapPin, MessageCircle, Clock, Facebook } from "lucide-react";
import { COMPANY } from "@/data/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact RS Travel and Tours Islamabad — Phone, WhatsApp & Office Location" },
      {
        name: "description",
        content:
          "Official contact details for RS Travel and Tours in Blue Area, Islamabad. Call 051-2000147, WhatsApp +92 344 5979486 or visit Office #6 Mezzanine Floor, Ratta Mansion.",
      },
      {
        name: "keywords",
        content:
          "RS Travel contact number, RS Travel Islamabad phone, RS Travel Blue Area office address, RS Travel WhatsApp number, visa consultant Islamabad contact number, RS Travel directions Blue Area",
      },
      { name: "robots", content: "index, follow, max-snippet:-1, max-image-preview:large" },
      { name: "geo.region", content: "PK-IS" },
      { name: "geo.placename", content: "Islamabad, Blue Area" },
      {
        property: "og:title",
        content: "RS Travel Contact Number & Travel Agency Islamabad | Blue Area Office",
      },
      {
        property: "og:description",
        content:
          "Visit RS Travel in Blue Area, Islamabad or call/WhatsApp for instant visa consultancy, flight bookings, and travel advisory.",
      },
      { property: "og:image", content: "https://rstravel.pk/og-image.jpg" },
      { property: "og:url", content: "https://rstravel.pk/contact" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Contact Pakistan's #1 Visa Agency | RS Travel and Tours" },
      { name: "twitter:description", content: "Blue Area, Islamabad. Phone, WhatsApp & walk-in consultations available." },
      { name: "twitter:image", content: "https://rstravel.pk/og-image.jpg" },
    ],
    links: [
      { rel: "canonical", href: "https://rstravel.pk/contact" },
    ],
  }),
  component: Contact,
});


const CONTACT_FAQS = [
  {
    q: "What is the RS Travel Islamabad contact number and WhatsApp?",
    a: "You can reach RS Travel directly at 051 2000147 (landline), 0302 5204291 (mobile), or WhatsApp at 0344 5979486 for instant visa and travel inquiry support.",
  },
  {
    q: "Where is RS Travel located in Blue Area, Islamabad?",
    a: "Our Islamabad office is located at Office No. 6, Mezzanine Floor, Ratta Mansion, Fazal-e-Haq Road, Blue Area, Islamabad, Pakistan with convenient parking and Metro access.",
  },
  {
    q: "Can I get an in-person visa assessment at the Islamabad office?",
    a: "Yes! Walk-in consultations are available Monday to Saturday from 10:00 AM to 7:00 PM. Our senior visa officers provide comprehensive document verification.",
  },
  {
    q: "Which visa and travel services are offered at RS Travel Islamabad?",
    a: "We provide full visa consultancy for Schengen, UK, USA, Canada, and Australia, plus worldwide ticketing, Umrah packages, and travel insurance.",
  },
];

function Contact() {
    const contactJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["TravelAgency", "LocalBusiness"],
        "@id": "https://rstravel.pk/contact#localbusiness",
        "name": "RS Travel and Tours",
        "alternateName": "RS Travel Islamabad",
        "url": "https://rstravel.pk/contact",
        "telephone": COMPANY.phone,
        "email": COMPANY.email,
        "priceRange": "$",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Office no 6 Mezzanine floor Ratta Mansion Fazal-e-Haq Road Blue Area",
          "addressLocality": "Islamabad",
          "addressRegion": "Islamabad Capital Territory",
          "postalCode": "44000",
          "addressCountry": "PK"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 33.7135,
          "longitude": 73.0673
        },
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          "opens": "10:00",
          "closes": "19:00"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://rstravel.pk/contact#faq",
        "mainEntity": CONTACT_FAQS.map((faq) => ({
          "@type": "Question",
          "name": faq.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.a
          }
        }))
      }
    ]
  };

  return (
    <>
      <script type="application/ld+json">{JSON.stringify(contactJsonLd)}</script>
      <PageHero
        eyebrow="RS Travel Islamabad Contact & Office"
        title="RS Travel Contact Number & Travel Agency Islamabad"
        subtitle="Visit our Blue Area office, call direct, or chat with our visa consultants on WhatsApp. Fast response within 1 business hour."
      />

      <section className="relative py-24 overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="container-px relative z-10 mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">

            {/* Contact Information Column */}
            <div className="space-y-6">
              {[
                {
                  icon: MapPin,
                  t: "RS Travel Address (Blue Area)",
                  d: COMPANY.address,
                  href: "https://www.google.com/maps/search/?api=1&query=Ratta+Mansion+Fazal+e+Haq+Road+Blue+Area+Islamabad"
                },
                {
                  icon: Phone,
                  t: "RS Travel Islamabad Contact Number",
                  d: `${COMPANY.phone} (Landline)`,
                  href: `tel:${COMPANY.phone.replace(/\s/g, "")}`,
                },
                {
                  icon: Phone,
                  t: "Mobile",
                  d: COMPANY.mobile,
                  href: `tel:${COMPANY.mobile.replace(/\s/g, "")}`,
                },
                { icon: Mail, t: "Email", d: COMPANY.email, href: `mailto:${COMPANY.email}` },
                { icon: Clock, t: "Hours", d: COMPANY.hours, href: null },
                {
                  icon: MessageCircle,
                  t: "RS Travel WhatsApp Desk",
                  d: `${COMPANY.whatsapp} (Instant Consultation)`,
                  href: `https://wa.me/${COMPANY.whatsapp.replace(/\D/g, "")}`,
                },
                {
                  icon: Facebook,
                  t: "Facebook",
                  d: "Follow us on Facebook",
                  href: COMPANY.socials.facebook,
                },
              ].map((b) => (
                <a
                  key={b.t}
                  href={b.href || "#"}
                  target={b.t === "Office" || b.t === "Facebook" || b.t === "WhatsApp" ? "_blank" : undefined}
                  rel={b.t === "Office" || b.t === "Facebook" || b.t === "WhatsApp" ? "noreferrer" : undefined}
                  className={`group relative flex items-center gap-5 rounded-[2rem] border border-border/40 bg-card/30 backdrop-blur-xl p-5 shadow-lg transition-all duration-300 hover:-translate-y-1.5 hover:bg-card/50 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10 overflow-hidden ${!b.href ? 'cursor-default' : 'cursor-pointer'}`}
                >
                  {/* Subtle hover gradient background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  <span className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-primary-glow text-primary-foreground shadow-md transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3">
                    <b.icon size={22} />
                  </span>

                  <div className="relative">
                    <p className="text-xs font-bold uppercase tracking-widest text-primary/80 mb-1">{b.t}</p>
                    <p className="text-sm md:text-base font-medium text-foreground/90 transition-colors duration-300 group-hover:text-foreground leading-relaxed">
                      {b.d}
                    </p>
                  </div>
                </a>
              ))}

              {/* Map Iframe with Glassmorphic Wrapper */}
              <div className="group relative overflow-hidden rounded-[2.5rem] border border-border/50 bg-card/30 p-2 shadow-xl backdrop-blur-md transition-all duration-500 hover:border-primary/30 mt-8">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="absolute top-5 right-5 z-20">
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Ratta+Mansion+Fazal-e-Haq+Road+Blue+Area+Islamabad"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full bg-background/90 px-3.5 py-1.5 text-xs font-bold text-foreground shadow-lg backdrop-blur-md hover:bg-primary hover:text-white transition-all border border-border/50"
                  >
                    <MapPin size={13} className="text-primary group-hover:text-white" /> Open in Maps ↗
                  </a>
                </div>
                <div className="overflow-hidden rounded-[2rem]">
                  <iframe
                    title="RS Travel and Tours office at Ratta Mansion, Blue Area, Islamabad"
                    src="https://maps.google.com/maps?q=Ratta%20Mansion%20Fazal%20e%20Haq%20Road%20Blue%20Area%20Islamabad&t=&z=16&ie=UTF8&iwloc=&output=embed"
                    loading="lazy"
                    className="h-[300px] w-full border-0 filter transition-all duration-500 group-hover:brightness-105"
                  />
                </div>
              </div>
            </div>

            {/* Form Column - Wrapped in Glassmorphism Container */}
            <div className="lg:sticky lg:top-28 h-fit">
              <div className="rounded-[2.5rem] border border-border/40 bg-card/40 backdrop-blur-2xl p-8 md:p-10 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 -mt-10 -mr-10 h-40 w-40 rounded-full bg-primary/10 blur-[50px] pointer-events-none" />

                <div className="mb-8 relative">
                  <h3 className="text-2xl font-bold tracking-tight mb-2">Send a Message</h3>
                  <p className="text-sm text-muted-foreground">Fill out the form below and our visa experts will get back to you promptly.</p>
                </div>

                <div className="relative z-10">
                  <ContactForm />
                </div>
              </div>
            </div>

          </div>

          
          {/* Contact FAQ Section */}
          <div className="mt-20">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
                Frequently Asked Questions
              </h2>
              <p className="text-sm text-muted-foreground mt-2">
                Quick answers about RS Travel Islamabad contact number, Blue Area location, and visa services.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 max-w-5xl mx-auto">
              {CONTACT_FAQS.map((faq, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-border/40 bg-card/30 p-6 backdrop-blur-md shadow-sm"
                >
                  <h3 className="text-base font-semibold text-foreground mb-2">{faq.q}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>

          {/* E-E-A-T Physical Office & Local Authority Verification */}
          <div className="mt-16">
            <EEATExpertiseSection
              countryName="Islamabad, Pakistan"
              serviceName="In-Person Consular File Assessment & Walk-in Office"
              consultantRole="Branch Manager & Senior Visa Intake Officer"
              lastUpdated="September 2026"
            />
          </div>
        </div>
      </section>
    </>
  );
}
