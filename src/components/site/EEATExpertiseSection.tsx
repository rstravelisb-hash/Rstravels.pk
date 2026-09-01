import { ShieldCheck, Award, CheckCircle2, UserCheck, Calendar, BookOpen, Clock, Building2 } from "lucide-react";
import { COMPANY } from "@/data/company";

interface EEATProps {
  countryName?: string;
  serviceName?: string;
  consultantRole?: string;
  lastUpdated?: string;
}

export function EEATExpertiseSection({
  countryName = "Global",
  serviceName = "Visa & Travel Consultancy",
  consultantRole = "Senior Visa & Immigration Strategist",
  lastUpdated = "March 2026",
}: EEATProps) {
  return (
    <div className="my-16 rounded-[2.5rem] border border-border bg-gradient-to-br from-card via-card/80 to-primary/5 p-8 md:p-12 shadow-soft">
      {/* Editorial & Authority Badge */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border/60 pb-6 mb-8">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary border border-primary/20">
            <UserCheck size={24} />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-black uppercase tracking-wider text-primary">Medically & Legally Verified Content</span>
              <span className="inline-flex items-center rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-bold text-emerald-600 dark:text-emerald-400">
                <CheckCircle2 size={10} className="mr-1" /> Verified 2026
              </span>
            </div>
            <h4 className="text-sm md:text-base font-bold text-foreground">
              Reviewed by {COMPANY.name} Editorial & Visa Compliance Desk
            </h4>
          </div>
        </div>

        <div className="flex items-center gap-4 text-xs font-semibold text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <Clock size={13} className="text-primary" /> Updated: {lastUpdated}
          </span>
          <span className="flex items-center gap-1.5">
            <Building2 size={13} className="text-primary" /> Blue Area, Islamabad
          </span>
        </div>
      </div>

      {/* 4 Pillars of EEAT */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-8">
        <div className="p-4 rounded-2xl bg-background/50 border border-border/50">
          <div className="flex items-center gap-2 text-primary font-bold text-sm mb-1.5">
            <Award size={16} /> Experience
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed">
            15+ years managing embassy submissions, case files & appeal briefs across Islamabad.
          </p>
        </div>

        <div className="p-4 rounded-2xl bg-background/50 border border-border/50">
          <div className="flex items-center gap-2 text-primary font-bold text-sm mb-1.5">
            <BookOpen size={16} /> Expertise
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed">
            IATA accredited agents and consular specialists trained in strict embassy rules.
          </p>
        </div>

        <div className="p-4 rounded-2xl bg-background/50 border border-border/50">
          <div className="flex items-center gap-2 text-primary font-bold text-sm mb-1.5">
            <ShieldCheck size={16} /> Authoritativeness
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed">
            20,000+ satisfied travelers, high success rate and recognized visa consultancy brand.
          </p>
        </div>

        <div className="p-4 rounded-2xl bg-background/50 border border-border/50">
          <div className="flex items-center gap-2 text-primary font-bold text-sm mb-1.5">
            <CheckCircle2 size={16} /> Trustworthiness
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Physical Blue Area office, transparent consular fees, and zero false promises.
          </p>
        </div>
      </div>

      {/* Deep Guidance Content */}
      <div className="prose prose-sm dark:prose-invert max-w-none text-muted-foreground leading-relaxed border-t border-border/60 pt-6">
        <h3 className="text-lg font-bold text-foreground mb-3">
          Essential Compliance Guidance for {countryName} Visa Applicants
        </h3>
        <p className="text-sm mb-3">
          Embassy immigration evaluation for <strong>{countryName}</strong> places primary importance on three critical pillars: verifiable socio-economic ties to Pakistan, sufficient and legitimate source of funds, and a coherent purpose of stay. All supporting records (including FBR Tax Returns, Bank Maintenance Certificates, Family Registration Certificates from NADRA, and Chamber of Commerce memberships) must adhere to official consular formatting standards.
        </p>
        <p className="text-xs text-muted-foreground/80 italic">
          Disclaimer: Immigration laws and consular document requirements are subject to periodic changes by respective foreign ministries. Our consultants review applicant dossiers against active embassy criteria at our Blue Area office.
        </p>
      </div>
    </div>
  );
}
