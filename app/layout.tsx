import type { Metadata } from "next";
import { headers } from "next/headers";
import { SiteFooter } from "@/components/SiteFooter";
import "./globals.css";

const SITE_URL = "https://countriesmarketcap.com/";

export const metadata: Metadata = {
  title: "Countries Market Cap — National Wealth, GDP & Debt Rankings",
  description:
    "Countries ranked by total market cap (national net wealth), GDP, debt, and population. The CoinMarketCap of nation-states.",
  metadataBase: new URL("https://countriesmarketcap.com"),
  alternates: { canonical: SITE_URL },
  openGraph: {
    title: "Countries Market Cap",
    description:
      "Countries ranked by total market cap (national net wealth), GDP, debt, and population.",
    url: "https://countriesmarketcap.com",
    siteName: "Countries Market Cap",
    type: "website",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}#organization`,
      name: "Countries Market Cap",
      url: SITE_URL,
      logo: `${SITE_URL}icon.svg`,
      description:
        "An independent reference project for comparing national net wealth, GDP, debt-to-GDP, and population.",
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}#website`,
      name: "Countries Market Cap",
      url: SITE_URL,
      publisher: { "@id": `${SITE_URL}#organization` },
    },
    {
      "@type": "Dataset",
      "@id": `${SITE_URL}#dataset`,
      name: "Countries Market Cap Rankings",
      description:
        "Country rankings by estimated national net wealth, nominal GDP, GDP growth, debt-to-GDP, GDP per capita, and population.",
      url: SITE_URL,
      creator: { "@id": `${SITE_URL}#organization` },
      isAccessibleForFree: true,
    },
  ],
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const nonce = (await headers()).get("x-nonce") ?? undefined;

  return (
    <html lang="en">
      <body className="min-h-screen bg-bg text-white antialiased">
        <script
          nonce={nonce}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
