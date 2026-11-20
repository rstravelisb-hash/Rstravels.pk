import { createFileRoute } from "@tanstack/react-router";
import { TermsPage } from "./terms";

export const Route = createFileRoute("/terms-and-conditions")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions | RS Travel and Tours Islamabad" },
      {
        name: "description",
        content:
          "Official Terms & Conditions of RS Travel and Tours. Understand our visa consultancy policies, IATA air ticketing rules, consular disclaimers, and fee terms in Islamabad.",
      },
      { name: "robots", content: "noindex, follow" },
      { property: "og:title", content: "Terms & Conditions | RS Travel and Tours Islamabad" },
      {
        property: "og:description",
        content: "Terms of service, refund rules, and consular disclaimer for RS Travel and Tours Islamabad.",
      },
      { property: "og:url", content: "https://rstravel.pk/terms-and-conditions" },
      { property: "og:image", content: "https://rstravel.pk/og-image.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Terms & Conditions | RS Travel and Tours Islamabad" },
      { name: "twitter:description", content: "Terms of service, refund rules, and consular disclaimer." },
      { name: "twitter:image", content: "https://rstravel.pk/og-image.jpg" },
    ],
    links: [{ rel: "canonical", href: "https://rstravel.pk/terms" }],
  }),
  component: TermsPage,
});
