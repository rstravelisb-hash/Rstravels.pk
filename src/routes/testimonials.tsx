import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { TestimonialCard } from "@/components/site/TestimonialCard";
import { Reveal } from "@/components/site/Reveal";
import { DestinationCrossLinks, ServiceCrossLinksHub } from "@/components/site/InternalCrossLinks";
import { EEATExpertiseSection } from "@/components/site/EEATExpertiseSection";
import { TESTIMONIALS } from "@/data/site";
import { ArrowRight, Star, Award, ShieldCheck } from "lucide-react";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Client Reviews & Success Stories — Pakistan's #1 Visa Agency | RS Travel and Tours" },
      {
        name: "description",
        content:
          "Read 1,500+ real client reviews and visa approval success stories. RS Travel and Tours Islamabad has a 98% approval rate for Schengen, USA, UK, Canada & Australia visas. Trusted by 20,000+ travelers.",
      },
      {
        name: "keywords",
        content: "rs travel and tours reviews, visa approval stories pakistan, best visa consultant reviews islamabad, travel agency testimonials pakistan, visa success stories islamabad, trusted visa agent reviews",
      },
      { name: "robots", content: "index, follow, max-snippet:-1, max-image-preview:large" },
      { name: "geo.region", content: "PK-IS" },
      { name: "geo.placename", content: "Islamabad" },
      { property: "og:title", content: "Client Reviews & Visa Success Stories — RS Travel and Tours" },
      { property: "og:description", content: "Real approval stories from 20,000+ happy travelers. 98% approval rate for Schengen, UK, USA, Canada." },
      { property: "og:image", content: "https://rstravel.pk/og-image.jpg" },
      { property: "og:url", content: "https://rstravel.pk/testimonials" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Client Reviews | RS Travel and Tours Islamabad" },
      { name: "twitter:description", content: "Real approval stories and 5-star ratings from over 20,000 satisfied travelers." },
      { name: "twitter:image", content: "https://rstravel.pk/og-image.jpg" },
    ],
    links: [
      { rel: "canonical", href: "https://rstravel.pk/testimonials" },
    ],
  }),
  component: TestimonialsPage,
});

function TestimonialsPage() {
  const reviewsJsonLd = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "name": "RS Travel and Tours",
    "url": "https://rstravel.pk",
    "image": "https://rstravel.pk/og-image.jpg",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "bestRating": "5",
      "worstRating": "1",
      "ratingCount": "1580",
      "reviewCount": "1580"
    },
    "review": TESTIMONIALS.slice(0, 8).map((t) => ({
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": t.name
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "reviewBody": t.quote
    }))
  };

  return (
    <>
      <script type="application/ld+json">{JSON.stringify(reviewsJsonLd)}</script>
      <PageHero
        eyebrow="Reviews & Approvals"
        title="What our clients say across Pakistan"
        subtitle="Real approval stories and 5-star experiences from 20,000+ travelers we've helped reach their global destinations."
      />

      {/* Trust Rating Summary Banner */}
      <section className="container-px mx-auto max-w-7xl -mt-8 mb-12 relative z-10">
        <div className="rounded-3xl border border-primary/20 bg-card/90 backdrop-blur-xl p-6 sm:p-8 shadow-xl flex flex-wrap items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-500/10 text-amber-500 border border-amber-500/20">
              <Star size={28} className="fill-amber-500" />
            </div>
            <div>
              <div className="flex items-center gap-1.5 text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} className="fill-amber-500" />
                ))}
                <span className="ml-2 font-black text-foreground text-lg">4.9 / 5.0</span>
              </div>
              <p className="text-xs text-muted-foreground font-semibold mt-0.5">Based on 1,580+ verified Google and client testimonials</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Link
              to="/profile-assessment"
              className="inline-flex items-center gap-2 rounded-2xl bg-primary px-6 py-3 text-sm font-bold text-primary-foreground shadow-glow hover:bg-primary/90 transition-all"
            >
              Assess Your Profile <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="container-px mx-auto max-w-7xl pb-20">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={(i % 6) * 0.05}>
              <TestimonialCard {...t} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* Companion Services Hub */}
      <section className="container-px mx-auto max-w-7xl pb-16">
        <ServiceCrossLinksHub currentService="/testimonials" />
      </section>

      {/* Popular Destinations Cross Links */}
      <section className="container-px mx-auto max-w-7xl pb-20">
        <DestinationCrossLinks countryName="Top Global Destinations" />
      </section>

      {/* E-E-A-T Section */}
      <section className="container-px mx-auto max-w-7xl pb-20">
        <EEATExpertiseSection
          countryName="Global Destinations"
          serviceName="Client Representation & Consular Visa Documentation"
          consultantRole="Head of Client Relations & Quality Assurance"
          lastUpdated="September 2026"
        />
      </section>
    </>
  );
}
