import { createFileRoute, Link } from "@tanstack/react-router";
import { Hero } from "@/components/site/Hero";
import { SectionHeader } from "@/components/site/SectionHeader";
import { ServiceCard } from "@/components/site/ServiceCard";
import { CountryCard } from "@/components/site/CountryCard";
import { TestimonialCard } from "@/components/site/TestimonialCard";
import { FAQAccordion } from "@/components/site/FAQAccordion";
import { ContactForm } from "@/components/site/ContactForm";
import { Reveal } from "@/components/site/Reveal";
import { DESTINATIONS } from "@/data/destinations";
import { COMPANY } from "@/data/company";
import { COUNTRIES } from "@/data/countries-data";
import { FAQS } from "@/data/faqs";
import { TESTIMONIALS } from "@/data/testimonials";
import { TRAVEL_SERVICES, VISA_SERVICES } from "@/data/services";
import {
  Plane,
  Hotel,
  ShieldCheck,
  BookUser,
  Globe2,
  GraduationCap,
  Briefcase,
  Users,
  Heart,
  Map,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Sparkles,
  Award,
  Clock4,
  ThumbsUp,
  FileCheck2,
  MessageSquare,
  Stamp,
  Facebook,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "RS Travel and Tours — Pakistan's No.1 Travel Agency & Best Visa Consultant 2026 | Islamabad" },
      {
        name: "description",
        content:
          "RS Travel and Tours is Pakistan's #1 travel agency & best visa consultant in Islamabad. IATA-accredited experts for Schengen, USA, UK, Canada & Australia visas. Cheap flights, Umrah packages, hotel bookings & travel insurance. 98% approval rate. Blue Area, Islamabad.",
      },
      {
        name: "keywords",
        content:
          "best travel agency in pakistan 2026, pakistan no 1 travel agency, top travel agency islamabad, #1 visa consultant pakistan, best visa agency islamabad blue area, top tour operator pakistan, cheap flights from pakistan, schengen visa consultant islamabad, uk visa agent islamabad, usa visa consultant pakistan, canada immigration consultant islamabad, corporate travel agency pakistan, reliable travel agents in pakistan, flight booking pakistan, hotel reservation islamabad, best travel and tours pakistan, top immigration consultant pakistan, IATA accredited travel agent islamabad, umrah packages from pakistan 2026, cheap umrah packages islamabad, travel insurance islamabad, passport services islamabad, world best travel agency, international visa consultant, visa success rate pakistan, affordable travel agency islamabad, online travel booking pakistan, multi city flights islamabad, business class deals pakistan, economy flights islamabad to london, islamabad to dubai cheap tickets, best visa approval rate pakistan, trusted visa consultant near me islamabad",
      },
      { name: "robots", content: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" },
      { name: "author", content: "RS Travel and Tours" },
      { name: "geo.region", content: "PK-IS" },
      { name: "geo.placename", content: "Islamabad, Pakistan" },
      { name: "geo.position", content: "33.7135;73.0673" },
      { name: "ICBM", content: "33.7135, 73.0673" },
      { name: "rating", content: "general" },
      { name: "revisit-after", content: "3 days" },
      { name: "language", content: "English" },
      { name: "coverage", content: "Worldwide" },
      { name: "distribution", content: "Global" },
      {
        property: "og:title",
        content: "RS Travel and Tours — Pakistan's No.1 Travel Agency & Best Visa Consultant 2026",
      },
      {
        property: "og:description",
        content:
          "IATA-accredited travel agency in Islamabad. Expert Schengen, USA, UK, Canada & Australia visa consultancy. Cheap flights, Umrah packages & hotel bookings. 98% approval rate.",
      },
      { property: "og:image", content: "https://rstravels.pk/src/assets/hero-travel.jpg" },
      { property: "og:url", content: "https://rstravels.pk/" },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_PK" },
      { property: "og:site_name", content: "RS Travel and Tours — Pakistan's No.1 Travel Agency" },
      {
        name: "twitter:card", content: "summary_large_image",
      },
      {
        name: "twitter:title",
        content: "RS Travel and Tours | Pakistan's #1 Travel Agency & Visa Consultant 2026",
      },
      {
        name: "twitter:description",
        content:
          "IATA-accredited. 98% visa approval rate. Schengen, UK, USA, Canada & Australia visas from Islamabad. Cheap flights & Umrah packages.",
      },
      { name: "twitter:image", content: "https://rstravels.pk/src/assets/hero-travel.jpg" },
    ],
    links: [
      { rel: "canonical", href: "https://rstravels.pk/" },
      { rel: "alternate", hrefLang: "en-PK", href: "https://rstravels.pk/" },
      { rel: "alternate", hrefLang: "en", href: "https://rstravels.pk/" },
      { rel: "alternate", hrefLang: "x-default", href: "https://rstravels.pk/" },
    ],
  }),
  component: Home,
});

const VISA_ICONS = [Plane, Heart, Users, Globe2, GraduationCap, Briefcase];
const TRAVEL_ICONS = [Plane, Hotel, ShieldCheck, BookUser];
const PROCESS = [
  {
    icon: MessageSquare,
    title: "Free Consultation",
    desc: "Tell us your travel goal and we'll map the right visa pathway.",
  },
  {
    icon: FileCheck2,
    title: "Document Prep",
    desc: "We curate, review and validate every required document.",
  },
  {
    icon: Stamp,
    title: "Application & Submission",
    desc: "Forms, appointments and submission handled end-to-end.",
  },
  {
    icon: ThumbsUp,
    title: "Approval & Travel",
    desc: "Receive your visa, then we handle tickets, hotels and insurance.",
  },
];

function Home() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    name: "RS Travel and Tours",
    url: "https://rstravels.pk/",
    logo: "https://rstravels.pk/logo.png",
    description: "Top Travel Agency & Visa Consultant in Pakistan.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Blue Area",
      addressLocality: "Islamabad",
      addressCountry: "PK",
    },
    telephone: COMPANY.phone,
    email: COMPANY.email,
  };

  return (
    <>
      <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>
      <script type="application/ld+json">{JSON.stringify(orgJsonLd)}</script>
      <Hero />

      {/* Visa Services */}
      <section className="container-px mx-auto max-w-7xl py-20 md:py-28">
        <SectionHeader
          eyebrow="Visa Services"
          title="Visas to anywhere you want to go"
          subtitle="Hand-crafted documentation, embassy expertise and dedicated case officers for every application."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {VISA_SERVICES.map((s: { title: string; desc: string }, i: number) => (
            <Reveal key={s.title} delay={i * 0.05}>
              <ServiceCard
                icon={VISA_ICONS[i % VISA_ICONS.length]}
                title={s.title}
                desc={s.desc}
                to="/visa-services"
              />
            </Reveal>
          ))}
        </div>
      </section>

      {/* Destinations */}
      <section className="relative overflow-hidden bg-secondary/40 py-20 md:py-28">
        <div className="absolute inset-0 mesh-bg opacity-40 pointer-events-none" />
        <div className="container-px relative mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Destinations"
            title="Iconic destinations, simplified"
            subtitle="From Schengen Europe to North America, Oceania, Middle East, and beyond."
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {DESTINATIONS.slice(0, 8).map((c, i) => (
              <Reveal key={c.slug} delay={i * 0.04}>
                <CountryCard
                  slug={c.slug}
                  name={c.name}
                  short={c.shortDesc}
                  image={c.image}
                  accent="View Details"
                />
              </Reveal>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              to="/countries"
              className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-background px-5 py-3 text-sm font-semibold text-primary shadow-soft transition hover:-translate-y-0.5"
            >
              Browse All Destinations <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="container-px mx-auto max-w-7xl py-20 md:py-28">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <SectionHeader
              center={false}
              eyebrow="Why Choose Us"
              title="A premium consultancy you can trust"
              subtitle="We combine deep embassy expertise with a personal, transparent process — so your application stands out."
            />
            <div className="grid gap-5 sm:grid-cols-2">
              {[
                {
                  icon: Award,
                  t: "98% Approval Rate",
                  d: "Proven track record across major embassies.",
                  color: "from-blue-500/20 to-blue-600/5",
                  iconColor: "text-blue-600"
                },
                { 
                  icon: Clock4, 
                  t: "Fast Turnaround", 
                  d: "Most files prepared within 48 hours.",
                  color: "from-amber-500/20 to-amber-600/5",
                  iconColor: "text-amber-600"
                },
                {
                  icon: ShieldCheck,
                  t: "Transparent Pricing",
                  d: "No surprises — clear upfront quotes.",
                  color: "from-emerald-500/20 to-emerald-600/5",
                  iconColor: "text-emerald-600"
                },
                {
                  icon: Sparkles,
                  t: "Personal Case Officer",
                  d: "Dedicated expert for every client.",
                  color: "from-purple-500/20 to-purple-600/5",
                  iconColor: "text-purple-600"
                },
              ].map((b) => (
                <div
                  key={b.t}
                  className="group relative rounded-3xl border border-border/50 bg-card p-6 transition-all duration-300 hover:shadow-elevated hover:border-primary/20 hover:-translate-y-1 overflow-hidden"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${b.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                  <span className={`relative inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary ${b.iconColor} shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                    <b.icon size={22} strokeWidth={2.5} />
                  </span>
                  <p className="relative mt-4 text-base font-black text-foreground tracking-tight">{b.t}</p>
                  <p className="relative mt-2 text-[13px] text-muted-foreground font-medium leading-relaxed">{b.d}</p>
                </div>
              ))}
            </div>
          </div>
          <Reveal>
            <div className="relative group">
              <div className="absolute -inset-8 rounded-[3rem] bg-gradient-to-br from-primary/10 via-accent/5 to-primary/10 blur-3xl opacity-50 group-hover:opacity-80 transition-opacity duration-700" />
              <div className="relative rounded-[2.5rem] border border-border/50 bg-card/80 backdrop-blur-xl p-8 sm:p-12 shadow-elevated overflow-hidden">
                <div className="absolute top-0 right-0 -mr-16 -mt-16 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
                
                <div className="flex items-center justify-between relative z-10">
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-primary/60">
                      Average Visa Approval
                    </p>
                    <p className="mt-2 text-6xl sm:text-7xl font-black gradient-text tracking-tighter">98%</p>
                  </div>
                  <div className="relative">
                    <div className="absolute inset-0 bg-accent blur-xl opacity-30 animate-pulse" />
                    <span className="relative inline-flex h-16 w-16 items-center justify-center rounded-[1.25rem] bg-gradient-to-br from-accent to-accent-glow text-accent-foreground shadow-glow group-hover:scale-110 transition-transform duration-500">
                      <Award size={32} strokeWidth={2.5} />
                    </span>
                  </div>
                </div>

                <div className="mt-10 grid grid-cols-3 gap-4 text-center relative z-10">
                  {[
                    { n: "15+", l: "Years Exp" },
                    { n: "20K+", l: "Travelers" },
                    { n: "50+", l: "Countries" },
                  ].map((s: { n: string; l: string }) => (
                    <div key={s.l} className="rounded-2xl bg-secondary/50 p-4 border border-border/50 hover:border-primary/20 transition-colors">
                      <p className="text-2xl font-black text-foreground">{s.n}</p>
                      <p className="mt-1 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">{s.l}</p>
                    </div>
                  ))}
                </div>

                <p className="mt-10 text-[15px] text-muted-foreground font-medium leading-relaxed relative z-10 border-t border-border/50 pt-8">
                  Backed by a meticulous review process and embassy-aligned documentation, our expert case
                  officers maximize approval chances for every single application.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Process */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary to-[oklch(0.32_0.16_258)] py-20 text-white md:py-28">
        <div className="absolute inset-0 mesh-bg opacity-25" />
        <div className="container-px relative mx-auto max-w-7xl">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider backdrop-blur">
              Our Process
            </span>
            <h2 className="mt-4 text-3xl font-bold md:text-4xl lg:text-5xl">
              From idea to boarding pass — in 4 steps
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {PROCESS.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.06}>
                <div className="relative h-full rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur card-3d">
                  <span className="absolute -top-4 left-6 inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-accent to-accent-glow text-sm font-bold text-accent-foreground shadow-glow">
                    0{i + 1}
                  </span>
                  <p.icon size={22} className="text-accent-glow" />
                  <h3 className="mt-4 text-lg font-bold">{p.title}</h3>
                  <p className="mt-2 text-sm text-white/75 leading-relaxed">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Travel Services */}
      <section className="container-px mx-auto max-w-7xl py-20 md:py-28">
        <SectionHeader
          eyebrow="Travel Services"
          title="Beyond visas — your complete travel partner"
          subtitle="One team for every travel need: tickets, hotels, insurance and passports."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {TRAVEL_SERVICES.map((s: { title: string; desc: string; to: string }, i: number) => (
            <Reveal key={s.title} delay={i * 0.05}>
              <ServiceCard icon={TRAVEL_ICONS[i]} title={s.title} desc={s.desc} to={s.to} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-secondary/40 py-20 md:py-28">
        <div className="container-px mx-auto max-w-7xl">
          <SectionHeader eyebrow="Testimonials" title="Loved by travelers across Pakistan" />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {TESTIMONIALS.slice(0, 6).map((t, i) => (
              <Reveal key={t.name} delay={i * 0.05}>
                <TestimonialCard {...t} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="container-px mx-auto max-w-7xl py-20 md:py-28">
        <SectionHeader eyebrow="FAQ" title="Quick answers to common questions" />
        <FAQAccordion items={FAQS.slice(0, 5)} />
      </section>

      {/* Contact */}
      <section className="container-px mx-auto max-w-7xl pb-20">
        <div className="grid items-start gap-10 lg:grid-cols-2">
          <div>
            <SectionHeader
              center={false}
              eyebrow="Contact"
              title="Let's plan your journey"
              subtitle="Drop us a message and our team will respond within 1 business hour."
            />
            <ul className="space-y-3 text-sm">
              <li className="flex gap-3">
                <MapPin className="text-primary mt-0.5" size={18} /> Blue Area, Islamabad, Pakistan
              </li>
              <li className="flex gap-3">
                <Phone className="text-primary mt-0.5" size={18} />{" "}
                <a className="hover:text-primary" href={`tel:${COMPANY.phone.replace(/\s/g, "")}`}>
                  {COMPANY.phone}
                </a>
              </li>
              <li className="flex gap-3">
                <Mail className="text-primary mt-0.5" size={18} />{" "}
                <a className="hover:text-primary" href={`mailto:${COMPANY.email}`}>
                  {COMPANY.email}
                </a>
              </li>
              <li className="flex gap-3">
                <Facebook className="text-primary mt-0.5" size={18} />{" "}
                <a
                  className="hover:text-primary"
                  href={COMPANY.socials.facebook}
                  target="_blank"
                  rel="noreferrer"
                >
                  Facebook Page
                </a>
              </li>
            </ul>
            <div className="mt-6 overflow-hidden rounded-2xl border border-border shadow-soft">
              <iframe
                title="Office location"
                src="https://www.google.com/maps?q=Blue%20Area%2C%20Islamabad&output=embed"
                loading="lazy"
                className="h-64 w-full"
              />
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
