// Format USD billions value: 145800 -> "$145.80T", 28781 -> "$28.78T", 800 -> "$800.00B"
export function fmtMoney(billions: number): string {
  if (billions >= 1000) {
    return `$${(billions / 1000).toFixed(2)}T`;
  }
  if (billions >= 1) {
    return `$${billions.toFixed(2)}B`;
  }
  return `$${(billions * 1000).toFixed(0)}M`;
}

// 145800 -> "$145.80T" with extra precision when needed
export function fmtMoneyCompact(billions: number): string {
  if (billions >= 10000) return `$${(billions / 1000).toFixed(1)}T`;
  if (billions >= 1000) return `$${(billions / 1000).toFixed(2)}T`;
  if (billions >= 100) return `$${billions.toFixed(0)}B`;
  if (billions >= 10) return `$${billions.toFixed(1)}B`;
  return `$${billions.toFixed(2)}B`;
}

// 336.0 -> "336.0M", 1428.6 -> "1.43B"
export function fmtPopulation(millions: number): string {
  if (millions >= 1000) return `${(millions / 1000).toFixed(2)}B`;
  if (millions >= 1) return `${millions.toFixed(1)}M`;
  return `${(millions * 1000).toFixed(0)}K`;
}

export function fmtPercent(n: number, digits = 1): string {
  const sign = n > 0 ? "+" : "";
  return `${sign}${n.toFixed(digits)}%`;
}

// GDP-per-capita in USD: gdp (billions) * 1e9 / (population millions * 1e6) = gdp * 1000 / pop
export function gdpPerCapita(gdpBillions: number, popMillions: number): number {
  return Math.round((gdpBillions * 1000) / popMillions);
}

export function fmtUsd(n: number): string {
  if (n >= 1_000_000) return `$${(n / 1_000_000).toFixed(2)}M`;
  if (n >= 1_000) return `$${(n / 1000).toFixed(1)}K`;
  return `$${n.toFixed(0)}`;
}
