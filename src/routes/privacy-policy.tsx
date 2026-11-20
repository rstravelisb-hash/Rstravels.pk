import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ShieldCheck,
  Lock,
  Eye,
  FileText,
  Phone,
  Mail,
  MapPin,
  Server,
  UserCheck,
  Cookie,
  RefreshCw,
  Printer,
  ChevronRight,
  ExternalLink,
} from "lucide-react";
import { COMPANY } from "@/data/company";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | RS Travel and Tours Islamabad" },
      {
        name: "description",
        content:
          "Read the official Privacy Policy of RS Travel and Tours. Understand how we collect, safeguard, and process your personal data, passport files, and visa documentation in Islamabad.",
      },
      { name: "keywords", content: "privacy policy, rs travel privacy, data protection islamabad, visa documents security, client confidential policy" },
      { name: "robots", content: "index, follow, max-snippet:-1, max-image-preview:large" },
      { name: "author", content: "RS Travel and Tours" },
      { property: "og:title", content: "Privacy Policy | RS Travel and Tours Islamabad" },
      {
        property: "og:description",
        content: "Official privacy policy and client data protection practices of RS Travel and Tours Islamabad.",
      },
      { property: "og:url", content: "https://rstravel.pk/privacy-policy" },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_PK" },
      { property: "og:site_name", content: "RS Travel and Tours — Pakistan's No.1 Travel Agency" },
      { property: "og:image", content: "https://rstravel.pk/og-image.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "Privacy Policy - RS Travel and Tours" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Privacy Policy | RS Travel and Tours Islamabad" },
      { name: "twitter:description", content: "Client data protection and document handling privacy policy." },
      { name: "twitter:image", content: "https://rstravel.pk/og-image.jpg" },
    ],
    links: [{ rel: "canonical", href: "https://rstravel.pk/privacy-policy" }],
  }),
  component: PrivacyPolicyPage,
});

const SECTIONS = [
  { id: "collection", title: "1. Information We Collect", icon: FileText },
  { id: "purpose", title: "2. How We Use Your Data", icon: Eye },
  { id: "sharing", title: "3. Third-Party Sharing & Embassies", icon: ExternalLink },
  { id: "retention", title: "4. Document Retention & Deletion", icon: RefreshCw },
  { id: "cookies", title: "5. Cookies & Tracking Technologies", icon: Cookie },
  { id: "security", title: "6. Data Security & Encryption", icon: Lock },
  { id: "rights", title: "7. Your Legal Privacy Rights", icon: UserCheck },
  { id: "contact", title: "8. Data Protection Officer Contact", icon: Phone },
];

function PrivacyPolicyPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "PrivacyPolicy",
        "@id": "https://rstravel.pk/privacy-policy#webpage",
        url: "https://rstravel.pk/privacy-policy",
        name: "Privacy Policy | RS Travel and Tours",
        description: "Official Privacy Policy and data governance principles of RS Travel and Tours Islamabad.",
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
            name: "Privacy Policy",
            item: "https://rstravel.pk/privacy-policy",
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
          <ShieldCheck size={14} className="text-primary" /> Official Data Protection & Privacy Standard
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-foreground uppercase">
          Privacy Policy
        </h1>
        <p className="mt-4 text-sm md:text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          At <strong className="text-foreground">{COMPANY.name}</strong>, safeguarding your personal, passport, and financial documentation is our foremost commitment. This policy explains our stringent data handling protocols.
        </p>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs text-muted-foreground">
          <span className="inline-flex items-center gap-1.5 bg-muted/60 px-3 py-1 rounded-full border border-border">
            <RefreshCw size={12} className="text-primary" /> Last Updated: March 2026
          </span>
          <span className="inline-flex items-center gap-1.5 bg-muted/60 px-3 py-1 rounded-full border border-border">
            <Lock size={12} className="text-emerald-500" /> 256-Bit SSL Data Security
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
            <FileText size={14} /> Quick Table of Contents
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
          <section id="collection" className="space-y-4 scroll-mt-24">
            <h2 className="text-xl md:text-2xl font-bold flex items-center gap-3 text-foreground">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary text-sm font-black">1</span>
              Information We Collect
            </h2>
            <p className="text-sm text-muted-foreground">
              To provide authorized visa consultancy, flight bookings, Umrah packages, hotel reservations, and travel insurance, we collect only necessary and legally compliant information:
            </p>
            <div className="grid gap-3 sm:grid-cols-2 mt-3">
              <div className="p-4 rounded-2xl bg-muted/30 border border-border space-y-1">
                <h3 className="text-xs font-bold text-foreground flex items-center gap-1.5">
                  <UserCheck size={14} className="text-primary" /> Identity & Civil Data
                </h3>
                <p className="text-xs text-muted-foreground">
                  Full name, nationality, CNIC / National ID, date and place of birth, passport number, expiry date, marital status, and family tree details required by foreign embassies.
                </p>
              </div>
              <div className="p-4 rounded-2xl bg-muted/30 border border-border space-y-1">
                <h3 className="text-xs font-bold text-foreground flex items-center gap-1.5">
                  <FileText size={14} className="text-primary" /> Financial & Employment Records
                </h3>
                <p className="text-xs text-muted-foreground">
                  Official bank statements, account maintenance certificates, tax returns (FBR Active Taxpayer/NTN certificates), employment letters, salary slips, and company registration papers.
                </p>
              </div>
              <div className="p-4 rounded-2xl bg-muted/30 border border-border space-y-1">
                <h3 className="text-xs font-bold text-foreground flex items-center gap-1.5">
                  <Phone size={14} className="text-primary" /> Contact & Communication
                </h3>
                <p className="text-xs text-muted-foreground">
                  Active telephone numbers, WhatsApp contact, personal email address, residential address, emergency contact numbers, and office addresses.
                </p>
              </div>
              <div className="p-4 rounded-2xl bg-muted/30 border border-border space-y-1">
                <h3 className="text-xs font-bold text-foreground flex items-center gap-1.5">
                  <Server size={14} className="text-primary" /> Travel Itinerary Preferences
                </h3>
                <p className="text-xs text-muted-foreground">
                  Departure dates, destination countries, airline preferences, frequent flyer numbers, hotel room tiers, and travel medical conditions requiring special assistance.
                </p>
              </div>
            </div>
          </section>

          {/* Section 2 */}
          <section id="purpose" className="space-y-4 border-t border-border pt-10 scroll-mt-24">
            <h2 className="text-xl md:text-2xl font-bold flex items-center gap-3 text-foreground">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary text-sm font-black">2</span>
              How We Use Your Information
            </h2>
            <p className="text-sm text-muted-foreground">
              Your personal information is processed strictly for official travel and visa facilitation under contractual necessity and legitimate interest:
            </p>
            <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground ml-2">
              <li>Compiling and submitting verified visa dossiers to sovereign Embassies, High Commissions, and Consulates.</li>
              <li>Booking official biometric and document submission appointments via authorized visa centers (VFS Global, Gerry&apos;s Visa, TLScontact, BLS International).</li>
              <li>Issuing confirmed airline e-tickets through the official IATA Global Distribution Systems (Amadeus, Sabre, Galileo).</li>
              <li>Securing verifiable hotel reservations and issuing Schengen-compliant travel health insurance policies.</li>
              <li>Sending essential flight schedule changes, embassy updates, and visa collection notifications via WhatsApp, phone, or email.</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section id="sharing" className="space-y-4 border-t border-border pt-10 scroll-mt-24">
            <h2 className="text-xl md:text-2xl font-bold flex items-center gap-3 text-foreground">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary text-sm font-black">3</span>
              Third-Party Sharing & Embassies
            </h2>
            <p className="text-sm text-muted-foreground">
              We maintain an uncompromising privacy standard: <strong className="text-foreground">we never sell, rent, or trade your personal data</strong> to third-party advertisers or lead brokers. Information is shared solely with certified entities necessary to complete your travel requirements:
            </p>
            <div className="p-4 rounded-2xl bg-primary/5 border border-primary/20 space-y-2 text-xs text-muted-foreground">
              <p><strong className="text-foreground">Foreign Diplomatic Missions:</strong> Embassies, High Commissions, and Consulates (e.g. UK Visas and Immigration, US Embassy Islamabad, Schengen Consular Authorities).</p>
              <p><strong className="text-foreground">Authorized Commercial Partners:</strong> Commercial airlines for flight ticketing, international hotel booking distribution systems, and licensed insurance underwriters (e.g., Jubilee, Adamjee, Allianz).</p>
              <p><strong className="text-foreground">Regulatory & Law Enforcement:</strong> Strictly when compelled by valid legal summons under Pakistani law or international aviation security mandates.</p>
            </div>
          </section>

          {/* Section 4 */}
          <section id="retention" className="space-y-4 border-t border-border pt-10 scroll-mt-24">
            <h2 className="text-xl md:text-2xl font-bold flex items-center gap-3 text-foreground">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary text-sm font-black">4</span>
              Document Retention & Secure Data Purging
            </h2>
            <p className="text-sm text-muted-foreground">
              We do not retain sensitive financial records longer than required to fulfill your visa application:
            </p>
            <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground ml-2">
              <li><strong className="text-foreground">Financial & Bank Statements:</strong> Digital scans and physical working copies are permanently shredded and deleted from active servers upon confirmation of your visa decision.</li>
              <li><strong className="text-foreground">Passport Copies:</strong> Retained securely solely for client record continuity and rebooking travel services upon explicit client request.</li>
              <li><strong className="text-foreground">Tax Invoices & Accounting Records:</strong> Retained for the statutory duration required by the Federal Board of Revenue (FBR) Pakistan.</li>
            </ul>
          </section>

          {/* Section 5 */}
          <section id="cookies" className="space-y-4 border-t border-border pt-10 scroll-mt-24">
            <h2 className="text-xl md:text-2xl font-bold flex items-center gap-3 text-foreground">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary text-sm font-black">5</span>
              Cookies & Tracking Technologies
            </h2>
            <p className="text-sm text-muted-foreground">
              Our website uses cookies and local storage tokens to enhance security, facilitate navigation, and measure performance:
            </p>
            <div className="space-y-3 text-xs text-muted-foreground">
              <div className="p-3.5 rounded-xl bg-muted/40 border border-border">
                <span className="font-bold text-foreground">1. Strictly Essential Cookies:</span> Necessary for secure HTTPS browsing, CSRF prevention, remembering your cookie choices, and routing navigation. These cannot be disabled.
              </div>
              <div className="p-3.5 rounded-xl bg-muted/40 border border-border">
                <span className="font-bold text-foreground">2. Performance & Analytics Cookies:</span> Anonymously record visitor metrics, popular destination lookups, and load latency to help us enhance user experience.
              </div>
              <div className="p-3.5 rounded-xl bg-muted/40 border border-border">
                <span className="font-bold text-foreground">3. Managing Your Preferences:</span> You can review, update, or withdraw consent at any time using our on-site cookie manager.
              </div>
            </div>
            <div className="pt-2">
              <button
                type="button"
                onClick={() => {
                  if (typeof window !== "undefined" && window.__openCookieSettings) {
                    window.__openCookieSettings();
                  }
                }}
                className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-5 py-2 text-xs font-bold text-primary hover:bg-primary/20 transition-all cursor-pointer"
              >
                <Cookie size={14} /> Open Cookie Settings Manager
              </button>
            </div>
          </section>

          {/* Section 6 */}
          <section id="security" className="space-y-4 border-t border-border pt-10 scroll-mt-24">
            <h2 className="text-xl md:text-2xl font-bold flex items-center gap-3 text-foreground">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary text-sm font-black">6</span>
              Data Security & 256-Bit Encryption
            </h2>
            <p className="text-sm text-muted-foreground">
              We employ strict technical and organizational safeguards to prevent unauthorized access, loss, or disclosure:
            </p>
            <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground ml-2">
              <li>End-to-end HTTPS transmission with modern TLS 1.3 encryption and HSTS headers.</li>
              <li>Role-based access authorization: only accredited senior visa case handlers manage sensitive files.</li>
              <li>Multi-factor authentication (MFA) across all administrative portals and document repositories.</li>
              <li>Physical security: biometric office access control and locked archival storage at our Blue Area headquarters.</li>
            </ul>
          </section>

          {/* Section 7 */}
          <section id="rights" className="space-y-4 border-t border-border pt-10 scroll-mt-24">
            <h2 className="text-xl md:text-2xl font-bold flex items-center gap-3 text-foreground">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary text-sm font-black">7</span>
              Your Legal Privacy Rights
            </h2>
            <p className="text-sm text-muted-foreground">
              As a valued client, you hold fundamental rights over your personal data:
            </p>
            <div className="grid gap-3 sm:grid-cols-2 text-xs text-muted-foreground">
              <div className="p-3.5 rounded-xl bg-muted/40 border border-border">
                <strong className="text-foreground block mb-1">Right to Access & Copy:</strong> You may request a summary of the personal documentation on file with our visa desk.
              </div>
              <div className="p-3.5 rounded-xl bg-muted/40 border border-border">
                <strong className="text-foreground block mb-1">Right to Rectification:</strong> You may request prompt correction of outdated or inaccurate information.
              </div>
              <div className="p-3.5 rounded-xl bg-muted/40 border border-border">
                <strong className="text-foreground block mb-1">Right to Erasure (&quot;Be Forgotten&quot;):</strong> You may request deletion of your records once your visa processing contract concludes.
              </div>
              <div className="p-3.5 rounded-xl bg-muted/40 border border-border">
                <strong className="text-foreground block mb-1">Right to Withdraw Consent:</strong> You may revoke consent for optional marketing communications at any point without penalty.
              </div>
            </div>
          </section>

          {/* Section 8 */}
          <section id="contact" className="space-y-4 border-t border-border pt-10 scroll-mt-24">
            <h2 className="text-xl md:text-2xl font-bold flex items-center gap-3 text-foreground">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary text-sm font-black">8</span>
              Contact Our Data Protection Officer
            </h2>
            <p className="text-sm text-muted-foreground">
              For any questions, data subject requests, or privacy compliance inquiries, please contact our designated privacy desk:
            </p>
            <div className="p-6 rounded-2xl bg-muted/40 border border-border space-y-3 text-xs font-semibold text-muted-foreground">
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

        {/* Back Link */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/"
            className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-primary px-8 py-3.5 text-sm font-bold text-primary-foreground shadow-soft hover:shadow-elevated transition-all hover:-translate-y-0.5"
          >
            Return to Homepage
          </Link>
          <Link
            to="/terms"
            className="w-full sm:w-auto inline-flex items-center justify-center rounded-full border border-border bg-card px-8 py-3.5 text-sm font-bold text-foreground hover:bg-muted transition-all"
          >
            Review Terms & Conditions
          </Link>
        </div>
      </div>
    </div>
  );
}
