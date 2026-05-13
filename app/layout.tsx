import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Countries Market Cap — National Wealth, GDP & Debt Rankings",
  description:
    "Countries ranked by total market cap (national net wealth), GDP, debt, and population. The CoinMarketCap of nation-states.",
  metadataBase: new URL("https://countriesmarketcap.com"),
  openGraph: {
    title: "Countries Market Cap",
    description:
      "Countries ranked by total market cap (national net wealth), GDP, debt, and population.",
    url: "https://countriesmarketcap.com",
    siteName: "Countries Market Cap",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-bg text-white antialiased">{children}</body>
    </html>
  );
}
