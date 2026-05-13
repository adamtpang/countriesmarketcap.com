"use client";

import { useMemo, useState } from "react";
import type { Country } from "@/lib/countries";
import {
  fmtMoneyCompact,
  fmtPercent,
  fmtPopulation,
  fmtUsd,
  gdpPerCapita,
} from "@/lib/format";

type SortKey =
  | "rank"
  | "marketCap"
  | "gdp"
  | "gdpGrowth"
  | "debtToGdp"
  | "population"
  | "gdpPerCapita";

const NUMERIC_KEYS: SortKey[] = [
  "marketCap",
  "gdp",
  "gdpGrowth",
  "debtToGdp",
  "population",
  "gdpPerCapita",
];

export function CountryTable({ countries }: { countries: Country[] }) {
  const [sort, setSort] = useState<SortKey>("marketCap");
  const [dir, setDir] = useState<"asc" | "desc">("desc");
  const [query, setQuery] = useState("");

  const rows = useMemo(() => {
    const filtered = query
      ? countries.filter((c) =>
          c.name.toLowerCase().includes(query.toLowerCase()) ||
          c.code.toLowerCase().includes(query.toLowerCase()),
        )
      : countries;

    const getVal = (c: Country) => {
      if (sort === "gdpPerCapita") return gdpPerCapita(c.gdp, c.population);
      if (sort === "rank") return c.rank;
      return c[sort];
    };

    return [...filtered].sort((a, b) => {
      const av = getVal(a);
      const bv = getVal(b);
      return dir === "desc" ? bv - av : av - bv;
    });
  }, [countries, sort, dir, query]);

  function setSortKey(k: SortKey) {
    if (k === sort) {
      setDir(dir === "desc" ? "asc" : "desc");
    } else {
      setSort(k);
      setDir(NUMERIC_KEYS.includes(k) ? "desc" : "asc");
    }
  }

  function arrow(k: SortKey) {
    if (k !== sort) return <span className="text-muted/30">↕</span>;
    return <span className="text-accent">{dir === "desc" ? "▼" : "▲"}</span>;
  }

  return (
    <div>
      <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <input
          type="text"
          placeholder="Search countries..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full rounded-md border border-border bg-panel px-3 py-2 text-sm text-white placeholder:text-muted focus:border-accent focus:outline-none sm:w-72"
        />
        <div className="text-xs text-muted">
          Showing <span className="text-white">{rows.length}</span> of {countries.length} countries
        </div>
      </div>

      <div className="overflow-x-auto rounded-lg border border-border bg-panel">
        <table className="w-full min-w-[860px] text-left text-sm">
          <thead>
            <tr className="border-b border-border bg-panel text-xs uppercase tracking-wider text-muted">
              <Th onClick={() => setSortKey("rank")}>
                # {arrow("rank")}
              </Th>
              <th className="px-4 py-3 font-medium">Country</th>
              <Th onClick={() => setSortKey("marketCap")} className="text-right">
                Market Cap {arrow("marketCap")}
              </Th>
              <Th onClick={() => setSortKey("gdp")} className="text-right">
                GDP {arrow("gdp")}
              </Th>
              <Th onClick={() => setSortKey("gdpGrowth")} className="text-right">
                GDP Growth {arrow("gdpGrowth")}
              </Th>
              <Th onClick={() => setSortKey("gdpPerCapita")} className="text-right">
                GDP / Capita {arrow("gdpPerCapita")}
              </Th>
              <Th onClick={() => setSortKey("debtToGdp")} className="text-right">
                Debt / GDP {arrow("debtToGdp")}
              </Th>
              <Th onClick={() => setSortKey("population")} className="text-right">
                Population {arrow("population")}
              </Th>
            </tr>
          </thead>
          <tbody>
            {rows.map((c) => (
              <tr
                key={c.code}
                className="border-b border-border/60 transition-colors hover:bg-white/[0.02]"
              >
                <td className="px-4 py-3.5 text-muted tabular">{c.rank}</td>
                <td className="px-4 py-3.5">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl leading-none">{c.flag}</span>
                    <div>
                      <div className="font-medium text-white">{c.name}</div>
                      <div className="text-xs text-muted">{c.code} · {c.region}</div>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-3.5 text-right tabular font-medium">
                  {fmtMoneyCompact(c.marketCap)}
                </td>
                <td className="px-4 py-3.5 text-right tabular">
                  {fmtMoneyCompact(c.gdp)}
                </td>
                <td className={`px-4 py-3.5 text-right tabular ${c.gdpGrowth >= 0 ? "text-up" : "text-down"}`}>
                  {fmtPercent(c.gdpGrowth)}
                </td>
                <td className="px-4 py-3.5 text-right tabular">
                  {fmtUsd(gdpPerCapita(c.gdp, c.population))}
                </td>
                <td className={`px-4 py-3.5 text-right tabular ${c.debtToGdp >= 100 ? "text-down" : c.debtToGdp >= 60 ? "text-accent" : "text-up"}`}>
                  {c.debtToGdp.toFixed(0)}%
                </td>
                <td className="px-4 py-3.5 text-right tabular">
                  {fmtPopulation(c.population)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function Th({
  children,
  onClick,
  className = "",
}: {
  children: React.ReactNode;
  onClick: () => void;
  className?: string;
}) {
  return (
    <th
      onClick={onClick}
      className={`cursor-pointer select-none px-4 py-3 font-medium hover:text-white ${className}`}
    >
      {children}
    </th>
  );
}
