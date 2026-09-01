import { useState } from "react";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";

import { COMPANY } from "@/data/company";

export function ContactForm({ defaultSubject = "" }: { defaultSubject?: string }) {
  const [sent, setSent] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage(null);
    setFieldErrors({});

    const formData = new FormData(e.currentTarget);
    const name = (formData.get("name") as string)?.trim();
    const email = (formData.get("email") as string)?.trim();
    const phone = (formData.get("phone") as string)?.trim();
    const country = (formData.get("country") as string)?.trim();
    const messageText = (formData.get("message") as string)?.trim();

    const errors: Record<string, string> = {};

    if (!name || name.length < 2) {
      errors.name = "Please enter your full name (at least 2 characters).";
    }

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.email = "Please enter a valid email address.";
    }

    if (!phone || phone.replace(/\D/g, "").length < 7) {
      errors.phone = "Please enter a valid phone or WhatsApp number.";
    }

    if (!messageText || messageText.length < 5) {
      errors.message = "Please enter a message (at least 5 characters).";
    }

    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      setErrorMessage("Please fix the highlighted errors before submitting.");
      return;
    }

    try {
      const message = `*New Enquiry from Website*
Name: ${name}
Email: ${email}
Phone: ${phone}
Destination: ${country || "Not specified"}

*Message:*
${messageText}`;

      const whatsappUrl = `https://wa.me/${COMPANY.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, "_blank");
      setSent(true);
    } catch (err) {
      setErrorMessage("An unexpected error occurred while connecting. Please try calling directly.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-2xl border border-border bg-card p-6 shadow-soft md:p-8 relative"
    >
      {errorMessage && (
        <div className="mb-6 p-4 rounded-xl bg-destructive/10 border border-destructive/20 text-destructive flex items-center gap-3 text-sm font-semibold animate-shake">
          <AlertCircle size={18} className="shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      <div className="grid gap-4 md:grid-cols-2">
        <Field
          label="Full Name"
          name="name"
          placeholder="Your name"
          required
          autoComplete="name"
          error={fieldErrors.name}
        />
        <Field
          label="Email"
          name="email"
          type="email"
          placeholder="you@email.com"
          required
          autoComplete="email"
          error={fieldErrors.email}
        />
        <Field
          label="Phone / WhatsApp"
          name="phone"
          placeholder="+92 ..."
          required
          autoComplete="tel"
          error={fieldErrors.phone}
        />
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
          Tell us about your travel plans *
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          className={`mt-1.5 w-full rounded-xl border bg-background px-4 py-3 text-sm outline-none transition ${
            fieldErrors.message
              ? "border-destructive focus:ring-4 focus:ring-destructive/15"
              : "border-input focus:border-primary focus:ring-4 focus:ring-primary/15"
          }`}
          placeholder="Visa type, travel dates, and any details you'd like to share..."
        />
        {fieldErrors.message && (
          <p className="mt-1 text-xs font-semibold text-destructive flex items-center gap-1">
            <AlertCircle size={12} /> {fieldErrors.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary to-primary-glow px-6 py-3 text-sm font-semibold text-primary-foreground shadow-soft transition hover:shadow-elevated hover:-translate-y-0.5 md:w-auto active:scale-95"
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
  error,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  defaultValue?: string;
  autoComplete?: string;
  error?: string;
}) {
  return (
    <label className="block">
      <span className="block text-xs font-medium text-muted-foreground">
        {label} {required && <span className="text-destructive">*</span>}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        defaultValue={defaultValue}
        autoComplete={autoComplete}
        className={`mt-1.5 w-full rounded-xl border bg-background px-4 py-3 text-sm outline-none transition ${
          error
            ? "border-destructive focus:ring-4 focus:ring-destructive/15"
            : "border-input focus:border-primary focus:ring-4 focus:ring-primary/15"
        }`}
      />
      {error && (
        <p className="mt-1 text-xs font-semibold text-destructive flex items-center gap-1">
          <AlertCircle size={12} /> {error}
        </p>
      )}
    </label>
  );
}
