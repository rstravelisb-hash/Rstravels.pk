import { createFileRoute, Link } from "@tanstack/react-router";
import { ShieldCheck, Lock, Eye, FileText, Phone, Mail, MapPin } from "lucide-react";
import { COMPANY } from "@/data/company";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | RS Travel and Tours Islamabad" },
      {
        name: "description",
        content:
          "Read the official Privacy Policy of RS Travel and Tours. Understand how we collect, protect, and handle your personal, passport, and visa documentation data.",
      },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: "Privacy Policy | RS Travel and Tours" },
      { property: "og:url", content: "https://www.rstravels.pk/privacy-policy" },
    ],
    links: [{ rel: "canonical", href: "https://www.rstravels.pk/privacy-policy" }],
  }),
  component: PrivacyPolicyPage,
});

function PrivacyPolicyPage() {
  return (
    <div className="bg-background min-h-screen py-16 md:py-24">
      {/* Header */}
      <div className="container-px mx-auto max-w-4xl text-center mb-16">
        <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs font-bold text-primary mb-4">
          <ShieldCheck size={14} /> Data Protection & Privacy
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-foreground uppercase">
          Privacy Policy
        </h1>
        <p className="mt-4 text-sm md:text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          At {COMPANY.name}, we prioritize the privacy and security of your personal, financial, and travel documentation. This policy outlines how your information is handled with strict confidentiality.
        </p>
        <p className="mt-2 text-xs font-semibold text-muted-foreground/80">
          Last Updated: March 2026
        </p>
      </div>

      {/* Content Container */}
      <div className="container-px mx-auto max-w-4xl">
        <div className="rounded-[2.5rem] border border-border bg-card p-8 md:p-14 shadow-soft space-y-10 text-foreground leading-relaxed">
          {/* Section 1 */}
          <section className="space-y-3">
            <h2 className="text-xl md:text-2xl font-bold flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-primary/10 text-primary text-sm font-black">1</span>
              Information We Collect
            </h2>
            <p className="text-sm text-muted-foreground">
              To provide authorized visa consultancy, flight bookings, hotel reservations, and travel insurance, we collect:
            </p>
            <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground ml-2">
              <li><strong className="text-foreground">Identity Information:</strong> Full name, passport number, CNIC, date of birth, nationality, and marital status.</li>
              <li><strong className="text-foreground">Contact Details:</strong> Phone number, WhatsApp, email address, and home/office address.</li>
              <li><strong className="text-foreground">Visa Documentation:</strong> Employment verification letters, bank statements, tax returns (NTN), travel history, and photograph specifications.</li>
              <li><strong className="text-foreground">Travel Preferences:</strong> Flight dates, preferred airlines, seat selection, and hotel room requirements.</li>
            </ul>
          </section>

          {/* Section 2 */}
          <section className="space-y-3 border-t border-border pt-8">
            <h2 className="text-xl md:text-2xl font-bold flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-primary/10 text-primary text-sm font-black">2</span>
              How We Use Your Information
            </h2>
            <p className="text-sm text-muted-foreground">
              Your data is used strictly for official travel and visa facilitation:
            </p>
            <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground ml-2">
              <li>Submitting online or physical visa applications to relevant embassies, consulates, and VFS/Gerry's visa application centers.</li>
              <li>Issuing confirmed airline tickets via the official IATA Global Distribution System (GDS).</li>
              <li>Securing hotel reservations and issuing verifiable travel medical insurance policies.</li>
              <li>Providing application status updates via WhatsApp, phone, or email.</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="space-y-3 border-t border-border pt-8">
            <h2 className="text-xl md:text-2xl font-bold flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-primary/10 text-primary text-sm font-black">3</span>
              Data Protection & Confidentiality
            </h2>
            <p className="text-sm text-muted-foreground">
              We uphold strict confidentiality standards. We <strong className="text-foreground">never sell, lease, or distribute</strong> your personal data or visa documents to third-party marketing companies. Information is shared only with accredited entities (e.g. Airlines, Embassies, Insurance Providers) essential to completing your requested travel bookings.
            </p>
          </section>

          {/* Section 4 */}
          <section className="space-y-3 border-t border-border pt-8">
            <h2 className="text-xl md:text-2xl font-bold flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-primary/10 text-primary text-sm font-black">4</span>
              Document Retention & Secure Deletion
            </h2>
            <p className="text-sm text-muted-foreground">
              Physical copies and digital scans of sensitive financial documents (such as bank statements or tax certificates) are securely deleted and shredded after visa file submission and decision retrieval, unless required by local law for record keeping.
            </p>
          </section>

          {/* Section 5 */}
          <section className="space-y-3 border-t border-border pt-8">
            <h2 className="text-xl md:text-2xl font-bold flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-primary/10 text-primary text-sm font-black">5</span>
              Contact Our Privacy Officer
            </h2>
            <p className="text-sm text-muted-foreground">
              If you have any questions regarding your data or wish to request data removal, please contact our Blue Area office:
            </p>
            <div className="mt-4 p-5 rounded-2xl bg-muted/40 border border-border space-y-2 text-xs font-semibold text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin size={14} className="text-primary" /> {COMPANY.address}
              </div>
              <div className="flex items-center gap-2">
                <Phone size={14} className="text-primary" /> {COMPANY.phone} / {COMPANY.mobile}
              </div>
              <div className="flex items-center gap-2">
                <Mail size={14} className="text-primary" /> {COMPANY.email}
              </div>
            </div>
          </section>
        </div>

        {/* Back Link */}
        <div className="mt-10 text-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-3.5 text-sm font-bold text-primary-foreground shadow-soft hover:shadow-elevated transition-all hover:-translate-y-0.5"
          >
            Return to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
}
