import fs from 'fs';
import path from 'path';

const DIST_DIR = path.resolve('dist');
const INDEX_HTML_PATH = path.join(DIST_DIR, 'index.html');
const SITE_URL = 'https://rstravel.pk';
const REGIONS_DIR = path.resolve('src/data/regions');

if (!fs.existsSync(INDEX_HTML_PATH)) {
  console.error("❌ Error: dist/index.html not found. Run 'vite build' first.");
  process.exit(1);
}

const baseTemplate = fs.readFileSync(INDEX_HTML_PATH, 'utf-8');

// Helper to escape HTML
function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// 1. Static Core Pages Meta & Content
const staticPages = {
  '/': {
    title: "RS Travel and Tours | #1 Visa Consultant & Travel Agency in Islamabad",
    description: "RS Travel and Tours is Pakistan's top visa consultant in Islamabad. Expert Schengen, UK, USA & Canada visas, cheap flights, Umrah packages & hotel booking.",
    h1: "Pakistan's #1 Visa Consultant & Travel Agency in Islamabad",
    summary: "Welcome to RS Travel and Tours — your premier travel partner in Blue Area, Islamabad. We specialize in global visa processing, air ticketing, Umrah packages, travel insurance, and hotel reservations with high success rates.",
    breadcrumbs: [{ name: "Home", url: "/" }]
  },
  '/about': {
    title: "About RS Travel and Tours Islamabad | #1 Visa & Travel Agency",
    description: "Learn about RS Travel and Tours, Pakistan's leading IATA-accredited travel agency and visa consultancy in Islamabad with 15+ years of excellence and 98% visa success rate.",
    h1: "About RS Travel and Tours — Excellence in Global Travel & Visa Consultancy",
    summary: "Founded with a commitment to transparency, precision, and customer satisfaction, RS Travel and Tours has grown into Pakistan's most trusted visa consultancy and travel management agency.",
    breadcrumbs: [{ name: "Home", url: "/" }, { name: "About Us", url: "/about" }]
  },
  '/visa-services': {
    title: "Visa Services Islamabad — Tourist, Visit & Business Visas | RS Travels",
    description: "Comprehensive visa consultancy services in Islamabad for UK, USA, Schengen, Canada, Australia, Gulf, and East Asia. Expert documentation, appointment booking & 98% visa success.",
    h1: "Worldwide Visa Consultancy & Processing Services",
    summary: "Navigate complex visa requirements with Pakistan's top visa experts. From biometric appointments and cover letters to financial documentation and embassy interview prep, we provide end-to-end guidance.",
    breadcrumbs: [{ name: "Home", url: "/" }, { name: "Visa Services", url: "/visa-services" }]
  },
  '/countries': {
    title: "Explore Visa Destinations — 100+ Countries | RS Travel & Tours Islamabad",
    description: "Browse visa requirements, processing times, and fees for 100+ countries worldwide including Schengen Europe, USA, UK, Canada, Australia, Middle East, and Asia.",
    h1: "Explore Visa Destinations & Global Requirements",
    summary: "Select your destination country to view comprehensive visa requirements, eligibility criteria, required documents, processing times, and expert application assistance.",
    breadcrumbs: [{ name: "Home", url: "/" }, { name: "Countries", url: "/countries" }]
  },
  '/air-ticketing': {
    title: "Air Ticketing Islamabad — Cheap Flight Bookings Worldwide | RS Travels",
    description: "Book cheap domestic and international flights from Pakistan with RS Travel and Tours Islamabad. Best airfares on PIA, Emirates, Qatar Airways, Saudia, Turkish Airlines & Fly Jinnah.",
    h1: "IATA Certified Air Ticketing & Cheap Flight Booking in Islamabad",
    summary: "Get unbeatable flight deals, flexible cancellation, group bookings, and 24/7 travel desk support on all major international and domestic airlines.",
    breadcrumbs: [{ name: "Home", url: "/" }, { name: "Air Ticketing", url: "/air-ticketing" }]
  },
  '/hotel-booking': {
    title: "Hotel Booking Worldwide — Luxury & Budget Accommodations | RS Travels",
    description: "Verified hotel bookings worldwide for visa applications and vacations. Best rates on luxury and budget hotels in Dubai, London, Istanbul, Paris, Makkah, and Madinah.",
    h1: "Worldwide Hotel Booking & Verified Accommodation for Visas",
    summary: "Secure verified hotel booking vouchers acceptable by all foreign embassies and consulates, alongside luxury stays and budget-friendly hotels across the globe.",
    breadcrumbs: [{ name: "Home", url: "/" }, { name: "Hotel Booking", url: "/hotel-booking" }]
  },
  '/travel-insurance': {
    title: "Travel Insurance Islamabad — Embassy Approved Policies | RS Travels",
    description: "Get instant embassy-approved travel health insurance for Schengen, UK, USA, and worldwide travel. Minimum €30,000 to $100,000 coverage starting from PKR 3,000.",
    h1: "Embassy-Approved International Travel Medical Insurance",
    summary: "Instant travel insurance policies from top-rated providers offering COVID-19 coverage, medical hospitalization, emergency evacuation, and baggage protection meeting all Schengen and international embassy standards.",
    breadcrumbs: [{ name: "Home", url: "/" }, { name: "Travel Insurance", url: "/travel-insurance" }]
  },
  '/passport-services': {
    title: "Passport Services Islamabad — Urgent Renewal & Token Help | RS Travels",
    description: "Complete assistance for Pakistani passport renewal, urgent passport processing, executive passport tokens, lost passport reissuance, and machine-readable passports.",
    h1: "Pakistani Passport Renewal & Fast-Track Application Assistance",
    summary: "Hassle-free support for Directorate General of Immigration & Passports token booking, urgent passport renewal, executive office appointments, and document verification.",
    breadcrumbs: [{ name: "Home", url: "/" }, { name: "Passport Services", url: "/passport-services" }]
  },
  '/profile-assessment': {
    title: "Free Visa Profile Assessment — Check Your Approval Chances | RS Travels",
    description: "Get a free visa profile assessment from senior visa consultants in Islamabad. Evaluate your travel history, financial ties, and eligibility for Schengen, USA, UK, and Canada visas.",
    h1: "Free Online Visa Profile Assessment & Eligibility Check",
    summary: "Submit your travel background, employment details, and financial profile to receive an objective, professional evaluation of your visa approval likelihood from our senior consultants.",
    breadcrumbs: [{ name: "Home", url: "/" }, { name: "Profile Assessment", url: "/profile-assessment" }]
  },
  '/consultation': {
    title: "Book Visa Consultation in Islamabad — RS Travel & Tours Blue Area",
    description: "Book an in-person or online one-on-one visa consultation with senior immigration and visa experts at RS Travel and Tours in Blue Area, Islamabad.",
    h1: "One-on-One Expert Visa & Travel Consultation",
    summary: "Meet our senior visa consultants to review refusal history, complex financial files, business sponsorship letters, and embassy interview preparation strategies.",
    breadcrumbs: [{ name: "Home", url: "/" }, { name: "Consultation", url: "/consultation" }]
  },
  '/umrah': {
    title: "Umrah Packages 2026 Islamabad — Economy & 5-Star Luxury | RS Travels",
    description: "Exclusive Umrah packages 2026 from Islamabad with luxury hotel accommodations near Haram in Makkah and Madinah, VIP transport, quick Umrah e-visas & direct flights.",
    h1: "Customized & Group Umrah Packages 2026 from Islamabad",
    summary: "Perform your spiritual journey with complete peace of mind. We provide 5-star and economy Umrah packages including direct flights, Nusuk visa issuance, verified luxury hotels, and private VIP ground transfers.",
    breadcrumbs: [{ name: "Home", url: "/" }, { name: "Umrah Packages", url: "/umrah" }]
  },
  '/pakistan-visa': {
    title: "Pakistan E-Visa & Overseas Travel Services | RS Travel & Tours",
    description: "Assistance for foreign nationals and overseas Pakistanis applying for Pakistan tourist e-visas, business e-visas, NICOP assistance, and inbound tours.",
    h1: "Pakistan Online E-Visa & Inbound Tourism Services",
    summary: "Comprehensive assistance for international tourists, diaspora visitors, and business delegations applying for the official Pakistan Online Visa System (POVS).",
    breadcrumbs: [{ name: "Home", url: "/" }, { name: "Pakistan Visa", url: "/pakistan-visa" }]
  },
  '/faq': {
    title: "Frequently Asked Questions (FAQ) — Visa & Travel Guidance | RS Travels",
    description: "Find answers to top questions about visa approval rates, required bank statements, Schengen appointment availability, flight cancellations, and Umrah packages.",
    h1: "Frequently Asked Questions & Visa Consultancy Insights",
    summary: "Clear answers to your most pressing questions about international travel, embassy requirements, processing timelines, and document checklists.",
    breadcrumbs: [{ name: "Home", url: "/" }, { name: "FAQ", url: "/faq" }]
  },
  '/testimonials': {
    title: "Client Testimonials & Visa Success Stories | RS Travel and Tours",
    description: "Read genuine reviews and success stories from clients who secured UK, USA, Schengen, and Canada visas through RS Travel and Tours Islamabad.",
    h1: "Client Reviews & Verified Visa Approval Success Stories",
    summary: "Discover how thousands of Pakistani travelers, families, and business executives secured their international visas with RS Travel and Tours.",
    breadcrumbs: [{ name: "Home", url: "/" }, { name: "Testimonials", url: "/testimonials" }]
  },
  '/contact': {
    title: "Contact RS Travel and Tours | Blue Area Islamabad Visa Office",
    description: "Visit RS Travel and Tours at Office No 6 Mezzanine Floor, Ratta Mansion, Fazal-e-Haq Road, Blue Area, Islamabad. Phone: +92 51 2000147 or WhatsApp for instant help.",
    h1: "Contact Our Islamabad Visa & Travel Headquarters",
    summary: "Get in touch with our team in Blue Area, Islamabad for visa inquiries, flight bookings, and travel consultation. Open Monday to Saturday, 10:00 AM to 7:00 PM.",
    breadcrumbs: [{ name: "Home", url: "/" }, { name: "Contact Us", url: "/contact" }]
  },
  '/privacy-policy': {
    title: "Privacy Policy | RS Travel and Tours Islamabad",
    description: "Read the Privacy Policy of RS Travel and Tours. Learn how we safeguard your personal data, passport information, and travel records with strict confidentiality.",
    h1: "Privacy Policy & Data Protection",
    summary: "Your privacy and document security are paramount. Learn how RS Travel and Tours collects, protects, and handles your personal information.",
    breadcrumbs: [{ name: "Home", url: "/" }, { name: "Privacy Policy", url: "/privacy-policy" }]
  },
  '/terms': {
    title: "Terms and Conditions | RS Travel and Tours Islamabad",
    description: "Terms and Conditions governing visa processing, flight bookings, Umrah packages, and consultancy services provided by RS Travel and Tours.",
    h1: "Terms of Service & Consultancy Agreement",
    summary: "Please review our service terms and policies regarding visa consultancy, payment processing, appointment bookings, and ticketing cancellations.",
    breadcrumbs: [{ name: "Home", url: "/" }, { name: "Terms & Conditions", url: "/terms" }]
  },
  '/thank-you': {
    title: "Thank You — RS Travel and Tours Islamabad",
    description: "Thank you for reaching out to RS Travel and Tours. Our senior visa consultant will contact you shortly to assist with your inquiry.",
    h1: "Thank You for Contacting RS Travel and Tours",
    summary: "Your message has been received by our senior visa desk in Islamabad. An expert travel consultant will review your details and contact you promptly.",
    breadcrumbs: [{ name: "Home", url: "/" }, { name: "Thank You", url: "/thank-you" }]
  }
};

const allPreRenderPages = new Map();

// Register static pages
Object.entries(staticPages).forEach(([route, data]) => {
  allPreRenderPages.set(route, {
    ...data,
    route,
    type: 'static',
    faqs: [
      { q: "Where is RS Travel and Tours office located in Islamabad?", a: "We are located at Office no 6, Mezzanine floor, Ratta Mansion, Fazal-e-Haq Road, Blue Area, Islamabad, Pakistan." },
      { q: "How can I book a visa consultation?", a: "You can book directly via our website, call us at +92 51 2000147, or message our official WhatsApp desk." },
      { q: "What is your visa approval success rate?", a: "RS Travel and Tours maintains an industry-leading 98% visa approval track record due to meticulous document preparation and embassy-compliant cover letters." }
    ]
  });
});

// 2. Read destinations.ts for pillar destination pages
try {
  const destPath = path.resolve('src/data/destinations.ts');
  if (fs.existsSync(destPath)) {
    const content = fs.readFileSync(destPath, 'utf-8');
    
    // Parse destination blocks
    const destMatch = content.match(/export const DESTINATIONS[\s\S]*?=\s*\[([\s\S]*?)\];/);
    if (destMatch) {
      const arrayCode = destMatch[1];
      const objectBlocks = arrayCode.split(/\{\s*slug:\s*"/g).slice(1);

      objectBlocks.forEach(block => {
        const slug = block.split('"')[0];
        const nameMatch = block.match(/name:\s*"([^"]+)"/);
        const name = nameMatch ? nameMatch[1] : slug.charAt(0).toUpperCase() + slug.slice(1);
        const seoTitleMatch = block.match(/seoTitle:\s*"([^"]+)"/);
        const seoDescMatch = block.match(/seoDescription:\s*"([^"]+)"/);
        const introMatch = block.match(/intro:\s*"([^"]+)"/);
        const keywordsMatch = block.match(/keywords:\s*"([^"]+)"/);

        const seoTitle = seoTitleMatch ? seoTitleMatch[1] : `${name} Visa Consultant in Islamabad | RS Travel and Tours`;
        const seoDescription = seoDescMatch ? seoDescMatch[1] : `Apply for ${name} visa from Pakistan with RS Travel and Tours Islamabad. Expert documentation, 98% visa approval rate & fast processing.`;
        const intro = introMatch ? introMatch[1] : `Complete visa processing and consultancy services for ${name} from Islamabad, Pakistan.`;
        const keywords = keywordsMatch ? keywordsMatch[1] : `${name} visa Pakistan, ${name} visa consultant Islamabad, apply ${name} visa`;

        const countryRoute = `/countries/${slug}`;
        allPreRenderPages.set(countryRoute, {
          route: countryRoute,
          title: seoTitle,
          description: seoDescription,
          keywords,
          h1: `${name} Visa Consultancy & Application Support Islamabad`,
          summary: intro,
          name,
          slug,
          type: 'destination',
          breadcrumbs: [{ name: "Home", url: "/" }, { name: "Countries", url: "/countries" }, { name, url: countryRoute }],
          docs: [
            "Original Passport (Valid for at least 6 months with previous travel history)",
            "CNIC / National Identity Card (Color copy on A4 paper)",
            "Recent biometric passport-size photographs with white background",
            "6-Month Bank Statement stamped & signed with Bank Account Maintenance Certificate",
            "Employment Letter / Salary Slips or Business Registration & NTN Tax Returns",
            "NADRA Family Registration Certificate (FRC) or Marriage Certificate (MRC)",
            "Confirmed Return Flight Reservation & Hotel Accommodation Voucher",
            "Comprehensive Travel Medical Insurance with embassy-approved minimum coverage"
          ],
          faqs: [
            { q: `How long does ${name} visa processing take from Pakistan?`, a: `Standard processing typically takes between 10 to 20 working days after embassy or biometric submission.` },
            { q: `What bank balance is recommended for a ${name} visa application?`, a: `We generally recommend maintaining a consistent, genuine closing balance covering your full trip expenses plus living costs.` },
            { q: `Can RS Travel and Tours book the ${name} embassy or VFS appointment?`, a: `Yes, our dedicated visa team monitors appointment slots 24/7 to secure the earliest available appointment for your biometrics.` }
          ]
        });

        // Add sub-visa types
        const visaTypes = [
          { typeSlug: 'visit-visa', typeName: 'Visit Visa' },
          { typeSlug: 'tourist-visa', typeName: 'Tourist Visa' },
          { typeSlug: 'business-visa', typeName: 'Business Visa' }
        ];

        visaTypes.forEach(({ typeSlug, typeName }) => {
          const visaRoute = `/countries/${slug}/visa/${typeSlug}`;
          allPreRenderPages.set(visaRoute, {
            route: visaRoute,
            title: `${name} ${typeName} Consultant in Islamabad | RS Travel and Tours`,
            description: `Apply for ${name} ${typeName} from Pakistan. Complete documentation assistance, appointment booking, and interview preparation in Blue Area Islamabad.`,
            keywords: `${name} ${typeName}, ${name} ${typeSlug} Pakistan, ${name} visa requirements, ${name} visa consultant Islamabad`,
            h1: `${name} ${typeName} Requirements & Application Process from Pakistan`,
            summary: `Looking to secure a ${typeName} for ${name}? RS Travel and Tours provides comprehensive visa file preparation, cover letter drafting, financial vetting, and appointment scheduling from Islamabad.`,
            name: `${name} ${typeName}`,
            slug,
            type: 'sub-visa',
            breadcrumbs: [
              { name: "Home", url: "/" },
              { name: "Countries", url: "/countries" },
              { name, url: countryRoute },
              { name: typeName, url: visaRoute }
            ],
            docs: [
              "Original Passport (valid for at least 6 months)",
              "Complete Visa Application Form with biometric photos",
              "Proof of Financial Sufficiency (Bank statement & Account Maintenance Certificate)",
              "Detailed Purpose of Visit Cover Letter and Day-by-Day Travel Itinerary",
              "Sponsorship/Invitation Letter (if visiting family, friends, or business partners)",
              "Verified Return Flight Reservation and Hotel Booking Voucher",
              "Travel Health Insurance compliant with consular guidelines"
            ],
            faqs: [
              { q: `What are the basic eligibility criteria for a ${name} ${typeName}?`, a: `Applicants must demonstrate genuine intent to visit, strong socio-economic ties to Pakistan, and sufficient financial resources.` },
              { q: `Does RS Travel and Tours assist with ${name} cover letters and travel itineraries?`, a: `Yes, our senior consultants write customized, embassy-standard cover letters tailored to your specific profile.` }
            ]
          });
        });
      });
    }
  }
} catch (e) {
  console.warn("Could not fully parse destinations.ts:", e.message);
}

// 3. Read all regional country files from src/data/regions
const regionFileMap = {
  'schengen-countries.ts': { slug: 'schengen', label: 'Schengen Europe' },
  'south-asia_countries.ts': { slug: 'south-asia', label: 'South Asia' },
  'central-asia_countries.ts': { slug: 'central-asia', label: 'Central Asia' },
  'north-africa_countries.ts': { slug: 'north-africa', label: 'North Africa' },
  'southern-africa_countries.ts': { slug: 'southern-africa', label: 'Southern Africa' },
  'middle-east_countries.ts': { slug: 'middle-east', label: 'Middle East' },
  'east-asia_countries.ts': { slug: 'east-asia', label: 'East Asia' },
  'americas-countries.ts': { slug: 'americas', label: 'Americas' },
  'europe-others_countries.ts': { slug: 'europe-others', label: 'Europe Others' },
  'south-america_countries.ts': { slug: 'south-america', label: 'South America' },
  'oceania-countries.ts': { slug: 'oceania', label: 'Oceania' }
};

Object.entries(regionFileMap).forEach(([file, regionMeta]) => {
  try {
    const filePath = path.join(REGIONS_DIR, file);
    if (fs.existsSync(filePath)) {
      const content = fs.readFileSync(filePath, 'utf-8');
      
      // Parse individual country objects
      const countryBlocks = content.split(/\{\s*slug:\s*"/g).slice(1);

      countryBlocks.forEach(block => {
        const slug = block.split('"')[0];
        const nameMatch = block.match(/name:\s*"([^"]+)"/);
        const name = nameMatch ? nameMatch[1] : slug.charAt(0).toUpperCase() + slug.slice(1);
        const titleMatch = block.match(/title:\s*"([^"]+)"/);
        const descMatch = block.match(/description:\s*"([^"]+)"/);
        const introMatch = block.match(/intro:\s*"([^"]+)"/);
        const keywordsMatch = block.match(/keywords:\s*"([^"]+)"/);

        const pageTitle = titleMatch ? `${titleMatch[1]} | RS Travel and Tours Islamabad` : `${name} Visa Consultant in Islamabad | RS Travel and Tours`;
        const pageDesc = descMatch ? `${descMatch[1]} RS Travel and Tours Islamabad — Pakistan's #1 visa consultancy. 98% approval rate, IATA-accredited.` : `Apply for ${name} visa from Pakistan with RS Travel and Tours Islamabad. Expert documentation and fast approvals.`;
        const intro = introMatch ? introMatch[1] : `Comprehensive visa guidance and appointment assistance for ${name} from Pakistan.`;
        const keywords = keywordsMatch ? keywordsMatch[1] : `${name} visa Pakistan, ${name} visa consultant Islamabad, apply ${name} visa`;

        const countryRoute = `/countries/${regionMeta.slug}/${slug}`;

        allPreRenderPages.set(countryRoute, {
          route: countryRoute,
          title: pageTitle,
          description: pageDesc,
          keywords,
          h1: `${name} Visa Consultant in Islamabad — ${regionMeta.label}`,
          summary: intro,
          name,
          slug,
          region: regionMeta.label,
          type: 'regional-country',
          breadcrumbs: [
            { name: "Home", url: "/" },
            { name: "Countries", url: "/countries" },
            { name: regionMeta.label, url: "/countries" },
            { name, url: countryRoute }
          ],
          docs: [
            "Valid Original Passport with at least 6 months remaining validity",
            "Complete Visa Application Form with biometric standard photographs",
            "Bank Statement (Last 6 months, verified and stamped) & Account Maintenance Letter",
            "Proof of Income / Employment Letter or Business Registration (NTN & Tax Returns)",
            "NADRA Family Registration Certificate (FRC)",
            "Hotel Booking Voucher & Return Flight Itinerary",
            "Travel Medical Insurance meeting consular regulations"
          ],
          faqs: [
            { q: `What is the success rate for ${name} visa applications with RS Travel?`, a: `We maintain an exceptional 98% success rate by verifying every document against the latest embassy checklists.` },
            { q: `Do I need to visit the embassy or Gerry's/VFS for ${name} biometrics?`, a: `Depending on the visa category, we guide you on biometric scheduling and provide comprehensive interview briefing.` },
            { q: `How do I start my ${name} visa application?`, a: `Contact our Blue Area Islamabad office via WhatsApp or phone (+92 51 2000147) for an immediate profile review.` }
          ]
        });
      });
    }
  } catch (err) {
    console.warn(`Could not read ${file}:`, err.message);
  }
});

console.log(`\n🚀 Starting Static HTML Prerendering for ${allPreRenderPages.size} URLs...`);

let generatedCount = 0;

allPreRenderPages.forEach((pageData, route) => {
  const canonicalUrl = `${SITE_URL}${route === '/' ? '' : route}`;
  
  // 1. Build JSON-LD Breadcrumb Schema
  const breadcrumbList = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": (pageData.breadcrumbs || []).map((b, idx) => ({
      "@type": "ListItem",
      "position": idx + 1,
      "name": b.name,
      "item": `${SITE_URL}${b.url}`
    }))
  };

  // 2. Build JSON-LD WebPage / Service Schema
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": ["WebPage", "Service"],
    "@id": `${canonicalUrl}#webpage`,
    "name": pageData.title,
    "description": pageData.description,
    "url": canonicalUrl,
    "provider": {
      "@type": "TravelAgency",
      "@id": `${SITE_URL}/#localbusiness`,
      "name": "RS Travel and Tours",
      "url": SITE_URL,
      "telephone": "+92 51 2000147",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Office no 6 Mezzanine floor Ratta Mansion Fazal-e-Haq Road Blue Area",
        "addressLocality": "Islamabad",
        "postalCode": "44000",
        "addressCountry": "PK"
      }
    }
  };

  // 3. Build JSON-LD FAQ Schema
  const faqSchema = pageData.faqs && pageData.faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": pageData.faqs.map(f => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": f.a
      }
    }))
  } : null;

  // 4. Generate Semantic Pre-rendered HTML Body for Googlebot
  const renderedHtmlBody = `
  <div class="ssr-pre-rendered-content" style="min-height: 100vh; background-color: #0a0f1d; color: #f8fafc; font-family: 'Plus Jakarta Sans', system-ui, sans-serif; line-height: 1.6;">
    
    <!-- Top Bar & Header -->
    <header style="border-bottom: 1px solid rgba(255,255,255,0.08); padding: 16px 24px; background-color: rgba(10,15,29,0.9); backdrop-filter: blur(12px);">
      <div style="max-width: 1200px; margin: 0 auto; display: flex; justify-content: space-between; align-items: center;">
        <a href="/" style="display: flex; align-items: center; gap: 12px; text-decoration: none; color: #fff;">
          <img src="/logo.avif" alt="RS Travel and Tours Logo" width="48" height="48" style="border-radius: 8px;" />
          <div>
            <span style="font-weight: 900; font-size: 1.25rem; letter-spacing: -0.02em; display: block; color: #fff;">RS TRAVEL &amp; TOURS</span>
            <span style="font-size: 0.7rem; color: #94a3b8; letter-spacing: 0.1em; text-transform: uppercase;">Pakistan's #1 Visa Consultancy</span>
          </div>
        </a>
        <nav style="display: flex; gap: 20px; font-size: 0.875rem; font-weight: 600;">
          <a href="/visa-services" style="color: #cbd5e1; text-decoration: none;">Visa Services</a>
          <a href="/countries" style="color: #cbd5e1; text-decoration: none;">Destinations</a>
          <a href="/air-ticketing" style="color: #cbd5e1; text-decoration: none;">Flights</a>
          <a href="/umrah" style="color: #cbd5e1; text-decoration: none;">Umrah</a>
          <a href="/contact" style="color: #f97316; text-decoration: none; font-weight: 700;">Contact Us</a>
        </nav>
      </div>
    </header>

    <!-- Main Content Container -->
    <main style="max-width: 1100px; margin: 0 auto; padding: 40px 24px 80px;">
      
      <!-- Breadcrumbs -->
      <nav aria-label="Breadcrumb" style="margin-bottom: 24px;">
        <ol style="display: flex; gap: 8px; list-style: none; padding: 0; margin: 0; font-size: 0.85rem; color: #94a3b8;">
          ${(pageData.breadcrumbs || []).map((b, i, arr) => `
            <li>
              ${i < arr.length - 1 ? `<a href="${b.url}" style="color: #94a3b8; text-decoration: none;">${escapeHtml(b.name)}</a> <span style="margin-left: 6px;">/</span>` : `<span style="color: #f97316; font-weight: 600;">${escapeHtml(b.name)}</span>`}
            </li>
          `).join('')}
        </ol>
      </nav>

      <!-- Hero Section -->
      <section style="margin-bottom: 48px;">
        <div style="display: inline-block; padding: 4px 12px; background: rgba(249,115,22,0.1); border: 1px solid rgba(249,115,22,0.3); border-radius: 9999px; font-size: 0.75rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.1em; color: #f97316; margin-bottom: 16px;">
          Verified Visa Consultancy Islamabad • 98% Approval Rate
        </div>
        <h1 style="font-size: 2.25rem; font-weight: 900; line-height: 1.2; margin-bottom: 20px; color: #ffffff; letter-spacing: -0.02em;">
          ${escapeHtml(pageData.h1 || pageData.title)}
        </h1>
        <p style="font-size: 1.125rem; color: #cbd5e1; max-width: 800px; line-height: 1.7; margin-bottom: 32px;">
          ${escapeHtml(pageData.summary || pageData.description)}
        </p>
        
        <div style="display: flex; flex-wrap: wrap; gap: 16px; align-items: center;">
          <a href="https://wa.me/923000000000?text=${encodeURIComponent(`Hello RS Travel, I want to inquire about ${pageData.h1 || pageData.title}`)}" style="display: inline-flex; align-items: center; justify-content: center; padding: 14px 28px; background-color: #f97316; color: #ffffff; font-weight: 700; border-radius: 9999px; text-decoration: none; font-size: 0.95rem; box-shadow: 0 10px 25px rgba(249,115,22,0.3);">
            WhatsApp Consultation Desk
          </a>
          <a href="tel:+92512000147" style="display: inline-flex; align-items: center; justify-content: center; padding: 14px 28px; background-color: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.15); color: #ffffff; font-weight: 700; border-radius: 9999px; text-decoration: none; font-size: 0.95rem;">
            Call +92 51 2000147
          </a>
        </div>
      </section>

      <!-- Required Documents Section (if available) -->
      ${pageData.docs && pageData.docs.length > 0 ? `
      <section style="background: rgba(15,23,42,0.6); border: 1px solid rgba(255,255,255,0.08); border-radius: 24px; padding: 32px; margin-bottom: 40px;">
        <h2 style="font-size: 1.5rem; font-weight: 800; color: #ffffff; margin-bottom: 16px;">
          Standard Visa Checklist &amp; Required Documents
        </h2>
        <p style="font-size: 0.95rem; color: #94a3b8; margin-bottom: 24px;">
          Ensure your application file is 100% compliant with embassy standards. Our Islamabad office assists in reviewing, translating, and organizing all necessary paperwork:
        </p>
        <ul style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 12px; list-style: none; padding: 0; margin: 0;">
          ${pageData.docs.map(doc => `
            <li style="display: flex; align-items: flex-start; gap: 10px; font-size: 0.925rem; color: #e2e8f0; background: rgba(255,255,255,0.03); padding: 12px 16px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.05);">
              <span style="color: #10b981; font-weight: 900;">✓</span>
              <span>${escapeHtml(doc)}</span>
            </li>
          `).join('')}
        </ul>
      </section>
      ` : ''}

      <!-- Why Choose RS Travel and Tours (EEAT Proof) -->
      <section style="background: linear-gradient(135deg, rgba(30,41,59,0.5) 0%, rgba(15,23,42,0.8) 100%); border: 1px solid rgba(249,115,22,0.2); border-radius: 24px; padding: 36px; margin-bottom: 40px;">
        <h2 style="font-size: 1.5rem; font-weight: 800; color: #ffffff; margin-bottom: 20px;">
          Why Choose RS Travel and Tours as Your Islamabad Visa Partner?
        </h2>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 20px;">
          <div style="padding: 16px; background: rgba(255,255,255,0.03); border-radius: 16px;">
            <h3 style="font-size: 1.05rem; font-weight: 700; color: #f97316; margin-bottom: 8px;">98% Success Rate</h3>
            <p style="font-size: 0.875rem; color: #94a3b8; margin: 0;">Rigorous document vetting and customized cover letters to prevent embassy objections.</p>
          </div>
          <div style="padding: 16px; background: rgba(255,255,255,0.03); border-radius: 16px;">
            <h3 style="font-size: 1.05rem; font-weight: 700; color: #f97316; margin-bottom: 8px;">IATA Accredited</h3>
            <p style="font-size: 0.875rem; color: #94a3b8; margin: 0;">Direct access to global airline booking engines, verified hotel vouchers, and travel insurance.</p>
          </div>
          <div style="padding: 16px; background: rgba(255,255,255,0.03); border-radius: 16px;">
            <h3 style="font-size: 1.05rem; font-weight: 700; color: #f97316; margin-bottom: 8px;">15+ Years Experience</h3>
            <p style="font-size: 0.875rem; color: #94a3b8; margin: 0;">Over a decade of trusted service from our prime Blue Area Islamabad headquarters.</p>
          </div>
          <div style="padding: 16px; background: rgba(255,255,255,0.03); border-radius: 16px;">
            <h3 style="font-size: 1.05rem; font-weight: 700; color: #f97316; margin-bottom: 8px;">Full Interview Prep</h3>
            <p style="font-size: 0.875rem; color: #94a3b8; margin: 0;">Comprehensive mock interview sessions for USA B1/B2, Schengen, and student visa applicants.</p>
          </div>
        </div>
      </section>

      <!-- FAQ Section -->
      ${pageData.faqs && pageData.faqs.length > 0 ? `
      <section style="margin-bottom: 48px;">
        <h2 style="font-size: 1.5rem; font-weight: 800; color: #ffffff; margin-bottom: 24px;">
          Frequently Asked Questions
        </h2>
        <div style="display: flex; flex-direction: column; gap: 16px;">
          ${pageData.faqs.map(f => `
            <div style="background: rgba(15,23,42,0.5); border: 1px solid rgba(255,255,255,0.08); border-radius: 16px; padding: 20px 24px;">
              <h3 style="font-size: 1.05rem; font-weight: 700; color: #ffffff; margin-bottom: 8px;">${escapeHtml(f.q)}</h3>
              <p style="font-size: 0.925rem; color: #94a3b8; margin: 0; line-height: 1.6;">${escapeHtml(f.a)}</p>
            </div>
          `).join('')}
        </div>
      </section>
      ` : ''}

      <!-- Bottom Appointment Call to Action -->
      <section style="background: linear-gradient(135deg, #f97316 0%, #ea580c 100%); border-radius: 24px; padding: 40px; text-align: center; color: #ffffff;">
        <h2 style="font-size: 1.75rem; font-weight: 900; margin-bottom: 12px;">Visit Our Islamabad Office Today</h2>
        <p style="font-size: 1.05rem; color: rgba(255,255,255,0.9); max-width: 600px; margin: 0 auto 24px;">
          Office no 6 Mezzanine floor Ratta Mansion Fazal-e-Haq Road Blue Area, Islamabad. Call <strong>+92 51 2000147</strong> or start your online application now.
        </p>
        <a href="/contact" style="display: inline-block; padding: 14px 32px; background-color: #0a0f1d; color: #ffffff; font-weight: 800; border-radius: 9999px; text-decoration: none; font-size: 0.95rem;">
          Get Free Consultation
        </a>
      </section>

    </main>

    <!-- Footer -->
    <footer style="border-top: 1px solid rgba(255,255,255,0.08); padding: 40px 24px; text-align: center; color: #64748b; font-size: 0.85rem;">
      <p style="margin-bottom: 8px;">&copy; ${new Date().getFullYear()} RS Travel and Tours. All Rights Reserved. IATA Accredited Travel Agency in Islamabad, Pakistan.</p>
      <p>Office no 6 Mezzanine floor Ratta Mansion Fazal-e-Haq Road Blue Area, Islamabad | Phone: +92 51 2000147</p>
    </footer>

  </div>
  `;

  // 5. Replace Metadata in <head>
  let html = baseTemplate;

  // Replace <title>
  html = html.replace(/<title>[\s\S]*?<\/title>/i, `<title>${escapeHtml(pageData.title)}</title>`);

  // Replace <meta name="description" ... />
  html = html.replace(/<meta\s+name=["']description["']\s+content=["'][\s\S]*?["']\s*\/?>/i, `<meta name="description" content="${escapeHtml(pageData.description)}" />`);

  // Replace or add <meta name="keywords" ... />
  if (pageData.keywords) {
    html = html.replace(/<meta\s+name=["']keywords["']\s+content=["'][\s\S]*?["']\s*\/?>/i, `<meta name="keywords" content="${escapeHtml(pageData.keywords)}" />`);
  }

  // Replace or add canonical URL
  if (html.includes('<link rel="canonical"')) {
    html = html.replace(/<link\s+rel=["']canonical["']\s+href=["'][^"']*["']\s*\/?>/i, `<link rel="canonical" href="${canonicalUrl}" />`);
  } else {
    html = html.replace('</head>', `  <link rel="canonical" href="${canonicalUrl}" />\n</head>`);
  }

  // Replace OpenGraph and Twitter Meta Tags
  html = html.replace(/<meta\s+property=["']og:title["']\s+content=["'][\s\S]*?["']\s*\/?>/i, `<meta property="og:title" content="${escapeHtml(pageData.title)}" />`);
  html = html.replace(/<meta\s+property=["']og:description["']\s+content=["'][\s\S]*?["']\s*\/?>/i, `<meta property="og:description" content="${escapeHtml(pageData.description)}" />`);
  html = html.replace(/<meta\s+property=["']og:url["']\s+content=["'][\s\S]*?["']\s*\/?>/i, `<meta property="og:url" content="${canonicalUrl}" />`);

  html = html.replace(/<meta\s+property=["']twitter:title["']\s+content=["'][\s\S]*?["']\s*\/?>/i, `<meta property="twitter:title" content="${escapeHtml(pageData.title)}" />`);
  html = html.replace(/<meta\s+property=["']twitter:description["']\s+content=["'][\s\S]*?["']\s*\/?>/i, `<meta property="twitter:description" content="${escapeHtml(pageData.description)}" />`);
  html = html.replace(/<meta\s+property=["']twitter:url["']\s+content=["'][\s\S]*?["']\s*\/?>/i, `<meta property="twitter:url" content="${canonicalUrl}" />`);

  // Inject Schemas into <head>
  const schemaScripts = `
  <!-- Pre-rendered JSON-LD Breadcrumb Schema -->
  <script type="application/ld+json">
    ${JSON.stringify(breadcrumbList, null, 2)}
  </script>
  <!-- Pre-rendered JSON-LD Service Schema -->
  <script type="application/ld+json">
    ${JSON.stringify(serviceSchema, null, 2)}
  </script>
  ${faqSchema ? `
  <!-- Pre-rendered JSON-LD FAQ Schema -->
  <script type="application/ld+json">
    ${JSON.stringify(faqSchema, null, 2)}
  </script>` : ''}
  `;
  html = html.replace('</head>', `${schemaScripts}\n</head>`);

  // Replace <div id="root">...</div> with pre-rendered HTML body
  html = html.replace(/<div\s+id=["']root["']>[\s\S]*?<\/div>/i, `<div id="root">${renderedHtmlBody}</div>`);

  // 6. Write file to dist directory
  let targetDir = DIST_DIR;
  if (route !== '/') {
    targetDir = path.join(DIST_DIR, ...route.split('/').filter(Boolean));
    fs.mkdirSync(targetDir, { recursive: true });
  }

  const targetFilePath = path.join(targetDir, 'index.html');
  fs.writeFileSync(targetFilePath, html, 'utf-8');
  generatedCount++;
});

// Sync critical SEO & LLM files from public to dist
const staticFilesToSync = ['robots.txt', 'sitemap.xml', 'llms.txt', 'llms-full.txt'];
staticFilesToSync.forEach(filename => {
  const src = path.resolve('public', filename);
  const dest = path.join(DIST_DIR, filename);
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, dest);
  }
});

console.log(`✅ Successfully pre-rendered ${generatedCount} static HTML pages in '${DIST_DIR}'!`);
console.log(`✅ Synced robots.txt, sitemap.xml, and llms.txt to '${DIST_DIR}'!`);
console.log(`🎉 Googlebot, Applebot, Bing, and AI search engines will now receive 100% complete pre-rendered HTML and LLM directives on the first byte!`);

