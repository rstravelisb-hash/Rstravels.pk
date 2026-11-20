import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Scale,
  ShieldAlert,
  FileCheck,
  Plane,
  Building,
  HelpCircle,
  Phone,
  Mail,
  MapPin,
  RefreshCw,
  Printer,
  ChevronRight,
  AlertTriangle,
} from "lucide-react";
import { COMPANY } from "@/data/company";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions | RS Travel and Tours Islamabad" },
      {
        name: "description",
        content:
          "Official Terms & Conditions of RS Travel and Tours. Understand our visa consultancy policies, IATA air ticketing rules, consular disclaimers, and fee terms in Islamabad.",
      },
      { name: "keywords", content: "terms and conditions, rs travel terms, visa consultancy disclaimer, air ticketing rules pakistan, refund policy islamabad" },
      { name: "robots", content: "index, follow, max-snippet:-1, max-image-preview:large" },
      { name: "author", content: "RS Travel and Tours" },
      { property: "og:title", content: "Terms & Conditions | RS Travel and Tours Islamabad" },
      {
        property: "og:description",
        content: "Terms of service, refund rules, and consular disclaimer for RS Travel and Tours Islamabad.",
      },
      { property: "og:url", content: "https://rstravel.pk/terms" },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_PK" },
      { property: "og:site_name", content: "RS Travel and Tours — Pakistan's No.1 Travel Agency" },
      { property: "og:image", content: "https://rstravel.pk/og-image.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "Terms and Conditions - RS Travel and Tours" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Terms & Conditions | RS Travel and Tours Islamabad" },
      { name: "twitter:description", content: "Terms of service, refund rules, and consular disclaimer." },
      { name: "twitter:image", content: "https://rstravel.pk/og-image.jpg" },
    ],
    links: [
      { rel: "canonical", href: "https://rstravel.pk/terms" },
      { rel: "alternate", href: "https://rstravel.pk/terms-and-conditions" },
    ],
  }),
  component: TermsPage,
});

const SECTIONS = [
  { id: "scope", title: "1. Scope of Visa Consultancy", icon: FileCheck },
  { id: "disclaimer", title: "2. Consular Sovereign Authority & Outcome Disclaimer", icon: AlertTriangle },
  { id: "authenticity", title: "3. Document Authenticity & Client Obligations", icon: ShieldAlert },
  { id: "fees", title: "4. Fees, Embassy Charges & Refund Policy", icon: Scale },
  { id: "flights", title: "5. IATA Air Ticketing & Cancellations", icon: Plane },
  { id: "hotels-umrah", title: "6. Hotels, Umrah Packages & Travel Insurance", icon: Building },
  { id: "force-majeure", title: "7. Force Majeure & Limitation of Liability", icon: HelpCircle },
  { id: "jurisdiction", title: "8. Governing Law & Dispute Resolution", icon: Scale },
];

export function TermsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://rstravel.pk/terms#webpage",
        url: "https://rstravel.pk/terms",
        name: "Terms & Conditions | RS Travel and Tours",
        description: "Official legal terms, conditions of service, and consular disclaimers of RS Travel and Tours Islamabad.",
        publisher: {
          "@type": "TravelAgency",
          name: COMPANY.name,
          url: "https://rstravel.pk",
        },
        inLanguage: "en-PK",
        datePublished: "2024-01-01",
        dateModified: "2026-03-01",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://rstravel.pk",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Terms & Conditions",
            item: "https://rstravel.pk/terms",
          },
        ],
      },
    ],
  };

  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  return (
    <div className="bg-background min-h-screen py-12 md:py-20 text-foreground selection:bg-primary/20">
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>

      {/* Hero Header */}
      <div className="container-px mx-auto max-w-4xl text-center mb-12 md:mb-16">
        <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs font-bold text-primary mb-4 shadow-sm">
          <Scale size={14} className="text-primary" /> Service Agreement & Legal Terms
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-foreground uppercase">
          Terms & Conditions
        </h1>
        <p className="mt-4 text-sm md:text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Please carefully review these binding terms governing all visa consultancy services, IATA flight bookings, Umrah packages, hotel reservations, and travel insurance provided by <strong className="text-foreground">{COMPANY.name}</strong>.
        </p>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs text-muted-foreground">
          <span className="inline-flex items-center gap-1.5 bg-muted/60 px-3 py-1 rounded-full border border-border">
            <RefreshCw size={12} className="text-primary" /> Last Updated: March 2026
          </span>
          <span className="inline-flex items-center gap-1.5 bg-muted/60 px-3 py-1 rounded-full border border-border">
            <Scale size={12} className="text-amber-500" /> Jurisdiction: Islamabad, Pakistan
          </span>
          <button
            type="button"
            onClick={handlePrint}
            className="inline-flex items-center gap-1.5 bg-muted/80 hover:bg-muted px-3 py-1 rounded-full border border-border transition-colors text-foreground font-medium cursor-pointer"
          >
            <Printer size={12} /> Print / Save as PDF
          </button>
        </div>
      </div>

      <div className="container-px mx-auto max-w-4xl">
        {/* Table of Contents Quick Nav */}
        <div className="mb-10 rounded-3xl border border-border/80 bg-card/60 backdrop-blur-md p-6 shadow-soft">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary mb-3">
            <Scale size={14} /> Quick Table of Contents
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-medium">
            {SECTIONS.map((sec) => (
              <a
                key={sec.id}
                href={`#${sec.id}`}
                className="flex items-center justify-between p-2 rounded-xl hover:bg-muted/60 text-muted-foreground hover:text-foreground transition-all group"
              >
                <span className="flex items-center gap-2">
                  <sec.icon size={13} className="text-primary group-hover:scale-110 transition-transform" />
                  {sec.title}
                </span>
                <ChevronRight size={12} className="text-muted-foreground/40 group-hover:text-primary transition-colors" />
              </a>
            ))}
          </div>
        </div>

        {/* Content Card */}
        <div className="rounded-[2.5rem] border border-border bg-card p-6 sm:p-10 md:p-14 shadow-soft space-y-12 leading-relaxed">
          {/* Section 1 */}
          <section id="scope" className="space-y-4 scroll-mt-24">
            <h2 className="text-xl md:text-2xl font-bold flex items-center gap-3 text-foreground">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary text-sm font-black">1</span>
              Scope of Visa Consultancy Services
            </h2>
            <p className="text-sm text-muted-foreground">
              {COMPANY.name} is a licensed, accredited travel agency and immigration consultancy headquartered in Blue Area, Islamabad. Our visa consultancy services encompass:
            </p>
            <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground ml-2">
              <li>Comprehensive profile evaluation, eligibility review, and risk mitigation strategies.</li>
              <li>Compiling, organizing, and vetting all personal, employment, and financial documentation.</li>
              <li>Drafting professional bespoke cover letters, travel itineraries, and sponsor statements.</li>
              <li>Scheduling visa appointment slots at authorized visa application centers (e.g. VFS Global, Gerry&apos;s Visa, TLScontact).</li>
              <li>Embassy interview preparation, mock sessions, and consular guidance.</li>
            </ul>
          </section>

          {/* Section 2 */}
          <section id="disclaimer" className="space-y-4 border-t border-border pt-10 scroll-mt-24">
            <h2 className="text-xl md:text-2xl font-bold flex items-center gap-3 text-foreground">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary text-sm font-black">2</span>
              Consular Sovereign Authority & Outcome Disclaimer
            </h2>
            <div className="p-5 rounded-2xl bg-amber-500/10 border border-amber-500/25 space-y-3">
              <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400 font-bold text-sm">
                <AlertTriangle size={16} /> Important Consular Legal Disclaimer
              </div>
              <p className="text-xs text-amber-950 dark:text-amber-200 leading-relaxed font-medium">
                The sovereign authority to grant, delay, or refuse any visa or travel entry permit rests solely and exclusively with the consular officers of the respective foreign government Embassy, High Commission, or Immigration Department.
              </p>
              <p className="text-xs text-amber-950/80 dark:text-amber-300/80 leading-relaxed">
                While {COMPANY.name} maintains an exceptional visa success rate (~98%) through meticulous file preparation, <strong className="text-amber-950 dark:text-amber-100">no visa consultant, agency, or third-party can guarantee a 100% visa grant</strong> under international consular law. Any representation to the contrary by external parties is strictly false.
              </p>
            </div>
          </section>

          {/* Section 3 */}
          <section id="authenticity" className="space-y-4 border-t border-border pt-10 scroll-mt-24">
            <h2 className="text-xl md:text-2xl font-bold flex items-center gap-3 text-foreground">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary text-sm font-black">3</span>
              Document Authenticity & Client Obligations
            </h2>
            <p className="text-sm text-muted-foreground">
              By engaging our consultancy services, the client explicitly warrants and agrees to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground ml-2">
              <li><strong className="text-foreground">Genuine Documentation:</strong> Provide only authentic, verifiable documents (including original bank statements, official tax certificates, genuine employment letters, and educational credentials). Submission of fabricated documents constitutes an immediate breach of agreement and is strictly reported.</li>
              <li><strong className="text-foreground">Disclosure of Past Refusals:</strong> Accurately disclose all prior visa refusals, deportations, overstays, or criminal proceedings for any country during initial consultation. Concealment of refusals inevitably results in embassy bans.</li>
              <li><strong className="text-foreground">Passport Validity:</strong> Ensure personal passports possess a minimum of six (6) months validity remaining beyond the proposed travel date with adequate blank visa pages.</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section id="fees" className="space-y-4 border-t border-border pt-10 scroll-mt-24">
            <h2 className="text-xl md:text-2xl font-bold flex items-center gap-3 text-foreground">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary text-sm font-black">4</span>
              Fees, Embassy Charges & Refund Policy
            </h2>
            <div className="grid gap-3 sm:grid-cols-2 text-xs text-muted-foreground">
              <div className="p-4 rounded-2xl bg-muted/40 border border-border space-y-2">
                <h3 className="font-bold text-foreground flex items-center gap-1.5">
                  <Scale size={14} className="text-primary" /> Embassy & VFS Global Fees
                </h3>
                <p>
                  Government visa fees, biometrics fees, and VFS/Gerry&apos;s processing charges are levied directly by foreign diplomatic missions and their contracted processing centers. These fees are <strong className="text-foreground">strictly non-refundable</strong> under all circumstances once paid, regardless of whether a visa is approved, delayed, or refused.
                </p>
              </div>
              <div className="p-4 rounded-2xl bg-muted/40 border border-border space-y-2">
                <h3 className="font-bold text-foreground flex items-center gap-1.5">
                  <FileCheck size={14} className="text-primary" /> Agency Consultancy Fees
                </h3>
                <p>
                  Agency fees compensate the extensive professional labor of our legal consultants, document verification team, case officers, and cover letter specialists. Consultancy fees become earned and <strong className="text-foreground">non-refundable</strong> once file review commences or the appointment dossier is prepared.
                </p>
              </div>
            </div>
          </section>

          {/* Section 5 */}
          <section id="flights" className="space-y-4 border-t border-border pt-10 scroll-mt-24">
            <h2 className="text-xl md:text-2xl font-bold flex items-center gap-3 text-foreground">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary text-sm font-black">5</span>
              IATA Air Ticketing & Cancellations
            </h2>
            <p className="text-sm text-muted-foreground">
              As an accredited IATA agency, all issued airline flight tickets are subject to the International Air Transport Association standards and operating airline conditions of carriage:
            </p>
            <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground ml-2">
              <li>Airline ticket fares, date-change penalties, cancellation fees, and refund turnaround times are set exclusively by the issuing airline (e.g. PIA, Emirates, Qatar Airways, Saudia, Turkish Airlines).</li>
              <li>Non-refundable ticket categories cannot be refunded upon client cancellation. Where refundable fares apply, {COMPANY.name} deducts only nominal standard IATA administrative service charges.</li>
              <li>Flight schedule modifications, cancellations, or weather delays imposed by airlines remain the operational responsibility of the respective air carrier.</li>
            </ul>
          </section>

          {/* Section 6 */}
          <section id="hotels-umrah" className="space-y-4 border-t border-border pt-10 scroll-mt-24">
            <h2 className="text-xl md:text-2xl font-bold flex items-center gap-3 text-foreground">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary text-sm font-black">6</span>
              Hotels, Umrah Packages & Travel Insurance
            </h2>
            <div className="space-y-3 text-xs text-muted-foreground">
              <div className="p-3.5 rounded-xl bg-muted/30 border border-border">
                <strong className="text-foreground block mb-1">Hotel Reservations:</strong> Check-in/check-out policies, room tier allocations, and security deposits are dictated by individual hotel properties worldwide.
              </div>
              <div className="p-3.5 rounded-xl bg-muted/30 border border-border">
                <strong className="text-foreground block mb-1">Umrah Packages 2026:</strong> Pilgrims must adhere strictly to the regulations of the Saudi Ministry of Hajj and Umrah (Nusuk platform), group movement schedules, and visa exit deadlines.
              </div>
              <div className="p-3.5 rounded-xl bg-muted/30 border border-border">
                <strong className="text-foreground block mb-1">Travel Insurance:</strong> Insurance policies issued by {COMPANY.name} are underwritten by authorized international insurance corporations (Allianz, Jubilee, Adamjee). Policy claims must be filed directly with the underwriter&apos;s emergency assistance claims desk.
              </div>
            </div>
          </section>

          {/* Section 7 */}
          <section id="force-majeure" className="space-y-4 border-t border-border pt-10 scroll-mt-24">
            <h2 className="text-xl md:text-2xl font-bold flex items-center gap-3 text-foreground">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary text-sm font-black">7</span>
              Force Majeure & Limitation of Liability
            </h2>
            <p className="text-sm text-muted-foreground">
              {COMPANY.name} shall not be held liable or deemed in default for any failure or delay in performance resulting from circumstances beyond our reasonable control, including but not limited to: Acts of God, embassy operational strikes, unexpected geopolitical border closures, abrupt diplomatic changes in bilateral visa criteria, civil unrest, global health emergencies, or severe flight disruptions.
            </p>
          </section>

          {/* Section 8 */}
          <section id="jurisdiction" className="space-y-4 border-t border-border pt-10 scroll-mt-24">
            <h2 className="text-xl md:text-2xl font-bold flex items-center gap-3 text-foreground">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary text-sm font-black">8</span>
              Governing Law & Dispute Resolution
            </h2>
            <p className="text-sm text-muted-foreground">
              These Terms and Conditions shall be governed by, construed, and enforced in accordance with the laws of the Islamic Republic of Pakistan. Any dispute, controversy, or claim arising out of or relating to this agreement shall be subject to the exclusive jurisdiction of the competent courts in Islamabad, Pakistan.
            </p>
            <div className="mt-4 p-6 rounded-2xl bg-muted/40 border border-border space-y-3 text-xs font-semibold text-muted-foreground">
              <div className="flex items-center gap-3 text-foreground">
                <MapPin size={16} className="text-primary shrink-0" />
                <span>{COMPANY.address}</span>
              </div>
              <div className="flex items-center gap-3 text-foreground">
                <Phone size={16} className="text-primary shrink-0" />
                <span>{COMPANY.phone} / {COMPANY.mobile} (WhatsApp: {COMPANY.whatsapp})</span>
              </div>
              <div className="flex items-center gap-3 text-foreground">
                <Mail size={16} className="text-primary shrink-0" />
                <span>{COMPANY.email}</span>
              </div>
            </div>
          </section>
        </div>

        {/* Navigation Footnotes */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/"
            className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-primary px-8 py-3.5 text-sm font-bold text-primary-foreground shadow-soft hover:shadow-elevated transition-all hover:-translate-y-0.5"
          >
            Return to Homepage
          </Link>
          <Link
            to="/privacy-policy"
            className="w-full sm:w-auto inline-flex items-center justify-center rounded-full border border-border bg-card px-8 py-3.5 text-sm font-bold text-foreground hover:bg-muted transition-all"
          >
            Read Privacy Policy
          </Link>
        </div>
      </div>
    </div>
  );
}
