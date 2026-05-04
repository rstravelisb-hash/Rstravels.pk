import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";

import { COMPANY } from "@/data/company";

export function ContactForm({ defaultSubject = "" }: { defaultSubject?: string }) {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    const message = `*New Enquiry from Website*
Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone}
Destination: ${data.country || "Not specified"}

*Message:*
${data.message}`;

    const whatsappUrl = `https://wa.me/${COMPANY.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
    setSent(true);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-border bg-card p-6 shadow-soft md:p-8"
    >
      <div className="grid gap-4 md:grid-cols-2">
        <Field label="Full Name" name="name" placeholder="Your name" required autoComplete="name" />
        <Field label="Email" name="email" type="email" placeholder="you@email.com" required autoComplete="email" />
        <Field label="Phone / WhatsApp" name="phone" placeholder="+92 ..." required autoComplete="tel" />
        <Field
          label="Destination Country"
          name="country"
          placeholder="e.g. Schengen, UK, Canada"
          defaultValue={defaultSubject}
          autoComplete="off"
        />
      </div>
      <div className="mt-4">
        <label htmlFor="message" className="block text-xs font-medium text-muted-foreground">
          Tell us about your travel plans
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          className="mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/15"
          placeholder="Visa type, travel dates, and any details you'd like to share..."
        />
      </div>
      <button
        type="submit"
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary to-primary-glow px-6 py-3 text-sm font-semibold text-primary-foreground shadow-soft transition hover:shadow-elevated hover:-translate-y-0.5 md:w-auto"
      >
        {sent ? (
          <>
            <CheckCircle2 size={16} /> Connecting to WhatsApp...
          </>
        ) : (
          <>
            <Send size={16} /> Send Enquiry
          </>
        )}
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
  defaultValue,
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  defaultValue?: string;
  autoComplete?: string;
}) {
  return (
    <label className="block">
      <span className="block text-xs font-medium text-muted-foreground">{label}</span>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        defaultValue={defaultValue}
        autoComplete={autoComplete}
        className="mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/15"
      />
    </label>
  );
}
