import { createFileRoute, Link } from "@tanstack/react-router";
import { FileText, ShieldAlert, Scale, CheckCircle2, Phone, Mail, MapPin } from "lucide-react";
import { COMPANY } from "@/data/company";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions | RS Travel and Tours Islamabad" },
      {
        name: "description",
        content:
          "Read the official Terms and Conditions of RS Travel and Tours regarding visa consultancy services, IATA flight ticketing, refund policies, and client responsibilities.",
      },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: "Terms & Conditions | RS Travel and Tours" },
      { property: "og:url", content: "https://www.rstravels.pk/terms" },
    ],
    links: [{ rel: "canonical", href: "https://www.rstravels.pk/terms" }],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <div className="bg-background min-h-screen py-16 md:py-24">
      {/* Header */}
      <div className="container-px mx-auto max-w-4xl text-center mb-16">
        <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs font-bold text-primary mb-4">
          <Scale size={14} /> Service Terms & Legal Agreement
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-foreground uppercase">
          Terms & Conditions
        </h1>
        <p className="mt-4 text-sm md:text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Please review the following service terms and conditions governing all visa consultancy, air ticketing, Umrah packages, and travel reservations provided by {COMPANY.name}.
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
              Scope of Visa Consultancy Services
            </h2>
            <p className="text-sm text-muted-foreground">
              {COMPANY.name} provides professional advisory, documentation review, appointment scheduling, cover letter drafting, and visa application submission assistance.
            </p>
            <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-900 dark:text-amber-300 text-xs font-medium space-y-1">
              <strong className="block font-bold">Important Notice regarding Embassy Decisions:</strong>
              The final authority to grant or reject any visa rests solely with the respective foreign Embassy, Consulate, or High Commission. While {COMPANY.name} maintains an exceptional success rate (approx. 98%), no travel agency or consultant can legally guarantee visa issuance.
            </div>
          </section>

          {/* Section 2 */}
          <section className="space-y-3 border-t border-border pt-8">
            <h2 className="text-xl md:text-2xl font-bold flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-primary/10 text-primary text-sm font-black">2</span>
              Client Responsibilities & Document Accuracy
            </h2>
            <p className="text-sm text-muted-foreground">
              As a client, you agree to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground ml-2">
              <li>Provide genuine, accurate, and verifiable documents (including original bank statements, employment letters, tax records, and educational degrees).</li>
              <li>Disclose any past visa refusals, deportations, or criminal history accurately during the initial consultation.</li>
              <li>Ensure your passport holds a minimum validity of 6 months beyond the intended return date with adequate blank visa pages.</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="space-y-3 border-t border-border pt-8">
            <h2 className="text-xl md:text-2xl font-bold flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-primary/10 text-primary text-sm font-black">3</span>
              Air Ticketing & Flight Bookings
            </h2>
            <p className="text-sm text-muted-foreground">
              As an accredited IATA agency, all issued airline tickets are subject to the fare rules, baggage policies, cancellation charges, and date change terms of the respective operating airline. {COMPANY.name} will assist with reissue, date changes, or refunds in accordance with the airline's policy minus standard administrative fees.
            </p>
          </section>

          {/* Section 4 */}
          <section className="space-y-3 border-t border-border pt-8">
            <h2 className="text-xl md:text-2xl font-bold flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-primary/10 text-primary text-sm font-black">4</span>
              Fees, Embassy Charges & Refund Policy
            </h2>
            <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground ml-2">
              <li><strong className="text-foreground">Embassy / VFS Fees:</strong> Government and consular visa processing fees paid to foreign embassies or third-party visa centers (such as VFS Global or Gerry's) are strictly non-refundable regardless of the visa outcome.</li>
              <li><strong className="text-foreground">Agency Consultancy Fees:</strong> Consultancy fees cover document review, case preparation, and file building time, and become non-refundable once your visa application dossier is completed or submitted.</li>
            </ul>
          </section>

          {/* Section 5 */}
          <section className="space-y-3 border-t border-border pt-8">
            <h2 className="text-xl md:text-2xl font-bold flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-primary/10 text-primary text-sm font-black">5</span>
              Contact & Inquiries
            </h2>
            <p className="text-sm text-muted-foreground">
              For any questions regarding our terms and service agreements, please contact our Blue Area office:
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
