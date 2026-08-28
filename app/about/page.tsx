import type { Metadata } from "next";
import { InfoPage } from "@/components/InfoPage";

export const metadata: Metadata = {
  title: "About | Countries Market Cap",
  description:
    "How Countries Market Cap estimates and presents national wealth, GDP, debt, and population rankings.",
  alternates: { canonical: "https://countriesmarketcap.com/about" },
};

export default function AboutPage() {
  return (
    <InfoPage
      title="About Countries Market Cap"
      introduction="Countries Market Cap is an independent reference project operated by Adam Pang. It makes a country-level economic dataset easier to compare in one sortable table."
    >
      <section>
        <h2>What the rankings show</h2>
        <p>
          Countries Market Cap ranks 85 countries by estimated national net wealth and places that estimate beside nominal GDP, GDP growth, government debt as a share of GDP, GDP per capita, and population. The site is designed for broad comparisons and research orientation, not for investment, credit, tax, or policy decisions.
        </p>
      </section>
      <section>
        <h2>How the estimates are assembled</h2>
        <p>
          National net wealth starts with household wealth from the UBS Global Wealth Report 2024 and uses national balance-sheet ratios where available. Countries without granular balance-sheet data use an approximate GDP-to-wealth multiplier. Nominal GDP comes from the IMF World Economic Outlook 2024, government debt ratios from the IMF Fiscal Monitor 2024, and population from UN World Population Prospects 2024.
        </p>
        <p>
          These figures combine published data with stated estimates, so they should be read as directional rankings. Countries Market Cap is independent and is not an official publication of UBS, the IMF, the United Nations, or any government.
        </p>
      </section>
      <section>
        <h2>Corrections and transparency</h2>
        <p>
          The dataset and calculation code are available in the public project repository. If a figure, source description, or calculation appears wrong, use the Contact page to open a reproducible correction request with a public source.
        </p>
      </section>
    </InfoPage>
  );
}
