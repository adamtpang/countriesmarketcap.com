import { COUNTRIES, TOTALS } from "@/lib/countries";
import { fmtMoneyCompact, fmtPopulation } from "@/lib/format";
import { CountryTable } from "@/components/CountryTable";

export default function Home() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <header className="mb-8 border-b border-border pb-6">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-2xl">
            🌍
          </div>
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Countries Market Cap
            </h1>
            <p className="text-sm text-muted">
              The CoinMarketCap of nation-states — ranked by national net wealth.
            </p>
          </div>
        </div>
      </header>

      <section className="mb-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
        <Stat label="Global Market Cap" value={fmtMoneyCompact(TOTALS.marketCap)} hint="National net wealth" />
        <Stat label="Global GDP" value={fmtMoneyCompact(TOTALS.gdp)} hint="Annual output" />
        <Stat label="World Population" value={fmtPopulation(TOTALS.population)} hint={`Across ${TOTALS.countries} countries`} />
        <Stat label="Wealth / GDP" value={`${(TOTALS.marketCap / TOTALS.gdp).toFixed(2)}x`} hint="Aggregate ratio" />
      </section>

      <CountryTable countries={COUNTRIES} />

      <section className="mt-12 rounded-lg border border-border bg-panel/40 p-5 text-sm text-muted">
        <h2 className="mb-2 text-base font-medium text-white">Methodology</h2>
        <p className="leading-relaxed">
          <strong className="text-white/90">Market Cap</strong> = estimated total
          national net wealth (household + corporate + government, financial and
          non-financial assets net of liabilities). Sourced from the UBS Global
          Wealth Report 2024 and grossed up using national balance-sheet ratios.
          For countries without granular data, approximated via
          GDP × wealth-to-GDP multiplier.
        </p>
        <p className="mt-2 leading-relaxed">
          <strong className="text-white/90">GDP</strong> is IMF World Economic
          Outlook 2024 (nominal, USD). <strong className="text-white/90">Debt/GDP</strong>{" "}
          is general government gross debt from the IMF Fiscal Monitor.
          Figures are approximations for ranking purposes — not financial advice.
        </p>
      </section>

      <footer className="mt-10 border-t border-border pt-6 text-center text-xs text-muted">
        countriesmarketcap.com · think of a country as a balance sheet
      </footer>
    </main>
  );
}

function Stat({
  label,
  value,
  hint,
}: {
  label: string;
  value: string;
  hint?: string;
}) {
  return (
    <div className="rounded-lg border border-border bg-panel px-4 py-3">
      <div className="text-xs uppercase tracking-wider text-muted">{label}</div>
      <div className="mt-1 text-xl font-semibold tabular text-white sm:text-2xl">{value}</div>
      {hint && <div className="mt-0.5 text-xs text-muted">{hint}</div>}
    </div>
  );
}
