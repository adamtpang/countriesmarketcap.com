export type Country = {
  rank: number;
  name: string;
  code: string; // ISO 3166-1 alpha-2
  flag: string;
  marketCap: number; // Total national net wealth, USD billions
  gdp: number; // Nominal GDP, USD billions
  gdpGrowth: number; // YoY %, latest available
  debtToGdp: number; // Gross govt debt as % of GDP
  population: number; // Millions
  region: string;
};

// Methodology
// -----------
// "Market Cap" = estimated total national net wealth (household + corporate + government,
//   financial + non-financial assets net of liabilities). Sourced primarily from the
//   UBS Global Wealth Report 2024 (household wealth), grossed up using national balance
//   sheet ratios from the OECD, IMF, and national statistical agencies. For countries
//   without granular data, approximated using GDP × wealth-to-GDP multiplier (≈4–6x for
//   developed economies, ≈2–3x for emerging markets).
// GDP: IMF World Economic Outlook 2024 nominal estimates.
// Debt/GDP: IMF Fiscal Monitor 2024 (general government gross debt).
// Population: UN World Population Prospects 2024.
// Figures are approximations for ranking purposes — not financial advice.

const RAW: Omit<Country, "rank">[] = [
  { name: "United States", code: "US", flag: "🇺🇸", marketCap: 145800, gdp: 28781, gdpGrowth: 2.7, debtToGdp: 122.3, population: 336.0, region: "Americas" },
  { name: "China", code: "CN", flag: "🇨🇳", marketCap: 84700, gdp: 18532, gdpGrowth: 4.8, debtToGdp: 83.4, population: 1409.0, region: "Asia" },
  { name: "Japan", code: "JP", flag: "🇯🇵", marketCap: 25800, gdp: 4110, gdpGrowth: 0.7, debtToGdp: 252.4, population: 123.7, region: "Asia" },
  { name: "Germany", code: "DE", flag: "🇩🇪", marketCap: 21700, gdp: 4590, gdpGrowth: 0.2, debtToGdp: 63.6, population: 84.5, region: "Europe" },
  { name: "United Kingdom", code: "GB", flag: "🇬🇧", marketCap: 16100, gdp: 3495, gdpGrowth: 0.9, debtToGdp: 101.2, population: 68.4, region: "Europe" },
  { name: "France", code: "FR", flag: "🇫🇷", marketCap: 15400, gdp: 3130, gdpGrowth: 0.8, debtToGdp: 110.6, population: 65.5, region: "Europe" },
  { name: "India", code: "IN", flag: "🇮🇳", marketCap: 14900, gdp: 3937, gdpGrowth: 6.8, debtToGdp: 83.0, population: 1428.6, region: "Asia" },
  { name: "Canada", code: "CA", flag: "🇨🇦", marketCap: 13200, gdp: 2242, gdpGrowth: 1.2, debtToGdp: 104.7, population: 39.4, region: "Americas" },
  { name: "Italy", code: "IT", flag: "🇮🇹", marketCap: 12300, gdp: 2328, gdpGrowth: 0.7, debtToGdp: 137.3, population: 58.9, region: "Europe" },
  { name: "Australia", code: "AU", flag: "🇦🇺", marketCap: 10600, gdp: 1789, gdpGrowth: 1.4, debtToGdp: 49.6, population: 26.7, region: "Oceania" },
  { name: "South Korea", code: "KR", flag: "🇰🇷", marketCap: 8400, gdp: 1712, gdpGrowth: 2.5, debtToGdp: 55.2, population: 51.7, region: "Asia" },
  { name: "Spain", code: "ES", flag: "🇪🇸", marketCap: 7900, gdp: 1647, gdpGrowth: 2.4, debtToGdp: 105.1, population: 48.3, region: "Europe" },
  { name: "Netherlands", code: "NL", flag: "🇳🇱", marketCap: 6800, gdp: 1142, gdpGrowth: 0.6, debtToGdp: 47.0, population: 17.9, region: "Europe" },
  { name: "Switzerland", code: "CH", flag: "🇨🇭", marketCap: 6500, gdp: 938, gdpGrowth: 1.3, debtToGdp: 18.4, population: 8.8, region: "Europe" },
  { name: "Russia", code: "RU", flag: "🇷🇺", marketCap: 5400, gdp: 2056, gdpGrowth: 3.0, debtToGdp: 19.5, population: 144.4, region: "Europe" },
  { name: "Brazil", code: "BR", flag: "🇧🇷", marketCap: 5300, gdp: 2331, gdpGrowth: 2.1, debtToGdp: 87.6, population: 216.4, region: "Americas" },
  { name: "Taiwan", code: "TW", flag: "🇹🇼", marketCap: 4800, gdp: 800, gdpGrowth: 3.4, debtToGdp: 26.3, population: 23.6, region: "Asia" },
  { name: "Sweden", code: "SE", flag: "🇸🇪", marketCap: 4500, gdp: 609, gdpGrowth: 0.6, debtToGdp: 33.1, population: 10.6, region: "Europe" },
  { name: "Belgium", code: "BE", flag: "🇧🇪", marketCap: 3900, gdp: 663, gdpGrowth: 1.0, debtToGdp: 105.3, population: 11.8, region: "Europe" },
  { name: "Mexico", code: "MX", flag: "🇲🇽", marketCap: 3700, gdp: 1848, gdpGrowth: 2.2, debtToGdp: 53.0, population: 129.7, region: "Americas" },
  { name: "Hong Kong", code: "HK", flag: "🇭🇰", marketCap: 3500, gdp: 406, gdpGrowth: 3.0, debtToGdp: 6.7, population: 7.5, region: "Asia" },
  { name: "Singapore", code: "SG", flag: "🇸🇬", marketCap: 3400, gdp: 525, gdpGrowth: 2.4, debtToGdp: 175.2, population: 5.9, region: "Asia" },
  { name: "Saudi Arabia", code: "SA", flag: "🇸🇦", marketCap: 3200, gdp: 1100, gdpGrowth: 1.5, debtToGdp: 30.0, population: 36.4, region: "Asia" },
  { name: "Norway", code: "NO", flag: "🇳🇴", marketCap: 3100, gdp: 504, gdpGrowth: 0.8, debtToGdp: 43.9, population: 5.5, region: "Europe" },
  { name: "Indonesia", code: "ID", flag: "🇮🇩", marketCap: 2900, gdp: 1402, gdpGrowth: 5.1, debtToGdp: 39.3, population: 281.2, region: "Asia" },
  { name: "Denmark", code: "DK", flag: "🇩🇰", marketCap: 2700, gdp: 412, gdpGrowth: 1.9, debtToGdp: 29.7, population: 5.9, region: "Europe" },
  { name: "Austria", code: "AT", flag: "🇦🇹", marketCap: 2400, gdp: 530, gdpGrowth: 0.4, debtToGdp: 78.5, population: 9.1, region: "Europe" },
  { name: "United Arab Emirates", code: "AE", flag: "🇦🇪", marketCap: 2300, gdp: 545, gdpGrowth: 3.9, debtToGdp: 30.0, population: 9.5, region: "Asia" },
  { name: "Israel", code: "IL", flag: "🇮🇱", marketCap: 2200, gdp: 530, gdpGrowth: 1.6, debtToGdp: 65.0, population: 9.4, region: "Asia" },
  { name: "Ireland", code: "IE", flag: "🇮🇪", marketCap: 2100, gdp: 561, gdpGrowth: 2.5, debtToGdp: 42.7, population: 5.1, region: "Europe" },
  { name: "Turkey", code: "TR", flag: "🇹🇷", marketCap: 2000, gdp: 1344, gdpGrowth: 3.6, debtToGdp: 28.0, population: 85.3, region: "Asia" },
  { name: "Poland", code: "PL", flag: "🇵🇱", marketCap: 1900, gdp: 862, gdpGrowth: 2.9, debtToGdp: 50.5, population: 37.6, region: "Europe" },
  { name: "Finland", code: "FI", flag: "🇫🇮", marketCap: 1500, gdp: 305, gdpGrowth: 0.2, debtToGdp: 76.5, population: 5.6, region: "Europe" },
  { name: "Thailand", code: "TH", flag: "🇹🇭", marketCap: 1400, gdp: 545, gdpGrowth: 2.7, debtToGdp: 56.4, population: 71.7, region: "Asia" },
  { name: "Argentina", code: "AR", flag: "🇦🇷", marketCap: 1300, gdp: 633, gdpGrowth: -2.8, debtToGdp: 90.4, population: 45.8, region: "Americas" },
  { name: "South Africa", code: "ZA", flag: "🇿🇦", marketCap: 1200, gdp: 373, gdpGrowth: 1.1, debtToGdp: 75.3, population: 63.2, region: "Africa" },
  { name: "Malaysia", code: "MY", flag: "🇲🇾", marketCap: 1100, gdp: 439, gdpGrowth: 4.4, debtToGdp: 64.6, population: 34.8, region: "Asia" },
  { name: "New Zealand", code: "NZ", flag: "🇳🇿", marketCap: 1050, gdp: 256, gdpGrowth: 1.1, debtToGdp: 46.1, population: 5.2, region: "Oceania" },
  { name: "Philippines", code: "PH", flag: "🇵🇭", marketCap: 1000, gdp: 471, gdpGrowth: 5.6, debtToGdp: 57.1, population: 117.3, region: "Asia" },
  { name: "Portugal", code: "PT", flag: "🇵🇹", marketCap: 950, gdp: 287, gdpGrowth: 1.7, debtToGdp: 95.0, population: 10.3, region: "Europe" },
  { name: "Czech Republic", code: "CZ", flag: "🇨🇿", marketCap: 920, gdp: 343, gdpGrowth: 1.0, debtToGdp: 44.2, population: 10.5, region: "Europe" },
  { name: "Vietnam", code: "VN", flag: "🇻🇳", marketCap: 900, gdp: 466, gdpGrowth: 6.1, debtToGdp: 35.0, population: 100.3, region: "Asia" },
  { name: "Greece", code: "GR", flag: "🇬🇷", marketCap: 850, gdp: 252, gdpGrowth: 2.1, debtToGdp: 161.0, population: 10.4, region: "Europe" },
  { name: "Chile", code: "CL", flag: "🇨🇱", marketCap: 800, gdp: 336, gdpGrowth: 2.5, debtToGdp: 39.4, population: 19.6, region: "Americas" },
  { name: "Egypt", code: "EG", flag: "🇪🇬", marketCap: 750, gdp: 380, gdpGrowth: 3.0, debtToGdp: 88.5, population: 113.5, region: "Africa" },
  { name: "Hungary", code: "HU", flag: "🇭🇺", marketCap: 720, gdp: 230, gdpGrowth: 2.2, debtToGdp: 73.0, population: 9.7, region: "Europe" },
  { name: "Colombia", code: "CO", flag: "🇨🇴", marketCap: 700, gdp: 387, gdpGrowth: 1.6, debtToGdp: 55.7, population: 52.1, region: "Americas" },
  { name: "Pakistan", code: "PK", flag: "🇵🇰", marketCap: 680, gdp: 339, gdpGrowth: 2.4, debtToGdp: 71.0, population: 247.0, region: "Asia" },
  { name: "Qatar", code: "QA", flag: "🇶🇦", marketCap: 670, gdp: 213, gdpGrowth: 2.4, debtToGdp: 47.4, population: 2.7, region: "Asia" },
  { name: "Romania", code: "RO", flag: "🇷🇴", marketCap: 640, gdp: 380, gdpGrowth: 3.3, debtToGdp: 51.0, population: 19.0, region: "Europe" },
  { name: "Iran", code: "IR", flag: "🇮🇷", marketCap: 600, gdp: 414, gdpGrowth: 2.5, debtToGdp: 38.0, population: 89.2, region: "Asia" },
  { name: "Bangladesh", code: "BD", flag: "🇧🇩", marketCap: 590, gdp: 460, gdpGrowth: 5.7, debtToGdp: 38.3, population: 173.6, region: "Asia" },
  { name: "Nigeria", code: "NG", flag: "🇳🇬", marketCap: 580, gdp: 374, gdpGrowth: 3.1, debtToGdp: 46.0, population: 227.9, region: "Africa" },
  { name: "Peru", code: "PE", flag: "🇵🇪", marketCap: 530, gdp: 268, gdpGrowth: 2.7, debtToGdp: 33.5, population: 33.7, region: "Americas" },
  { name: "Kuwait", code: "KW", flag: "🇰🇼", marketCap: 510, gdp: 165, gdpGrowth: -1.4, debtToGdp: 3.0, population: 4.5, region: "Asia" },
  { name: "Ukraine", code: "UA", flag: "🇺🇦", marketCap: 480, gdp: 178, gdpGrowth: 3.0, debtToGdp: 92.1, population: 37.0, region: "Europe" },
  { name: "Kazakhstan", code: "KZ", flag: "🇰🇿", marketCap: 450, gdp: 263, gdpGrowth: 3.8, debtToGdp: 23.4, population: 20.0, region: "Asia" },
  { name: "Algeria", code: "DZ", flag: "🇩🇿", marketCap: 430, gdp: 260, gdpGrowth: 3.8, debtToGdp: 51.7, population: 46.0, region: "Africa" },
  { name: "Morocco", code: "MA", flag: "🇲🇦", marketCap: 410, gdp: 152, gdpGrowth: 3.1, debtToGdp: 69.7, population: 37.5, region: "Africa" },
  { name: "Slovakia", code: "SK", flag: "🇸🇰", marketCap: 380, gdp: 138, gdpGrowth: 1.6, debtToGdp: 57.6, population: 5.5, region: "Europe" },
  { name: "Luxembourg", code: "LU", flag: "🇱🇺", marketCap: 370, gdp: 89, gdpGrowth: 1.0, debtToGdp: 25.7, population: 0.66, region: "Europe" },
  { name: "Ecuador", code: "EC", flag: "🇪🇨", marketCap: 350, gdp: 121, gdpGrowth: 0.3, debtToGdp: 55.0, population: 18.2, region: "Americas" },
  { name: "Ethiopia", code: "ET", flag: "🇪🇹", marketCap: 320, gdp: 156, gdpGrowth: 6.1, debtToGdp: 39.3, population: 126.5, region: "Africa" },
  { name: "Dominican Republic", code: "DO", flag: "🇩🇴", marketCap: 310, gdp: 121, gdpGrowth: 5.1, debtToGdp: 56.5, population: 11.3, region: "Americas" },
  { name: "Sri Lanka", code: "LK", flag: "🇱🇰", marketCap: 290, gdp: 86, gdpGrowth: 3.0, debtToGdp: 116.0, population: 22.2, region: "Asia" },
  { name: "Bulgaria", code: "BG", flag: "🇧🇬", marketCap: 280, gdp: 110, gdpGrowth: 2.3, debtToGdp: 23.1, population: 6.5, region: "Europe" },
  { name: "Croatia", code: "HR", flag: "🇭🇷", marketCap: 270, gdp: 82, gdpGrowth: 3.0, debtToGdp: 61.8, population: 3.9, region: "Europe" },
  { name: "Oman", code: "OM", flag: "🇴🇲", marketCap: 260, gdp: 108, gdpGrowth: 1.2, debtToGdp: 36.5, population: 5.0, region: "Asia" },
  { name: "Kenya", code: "KE", flag: "🇰🇪", marketCap: 250, gdp: 113, gdpGrowth: 5.0, debtToGdp: 73.0, population: 55.3, region: "Africa" },
  { name: "Slovenia", code: "SI", flag: "🇸🇮", marketCap: 240, gdp: 70, gdpGrowth: 1.5, debtToGdp: 68.4, population: 2.1, region: "Europe" },
  { name: "Lithuania", code: "LT", flag: "🇱🇹", marketCap: 230, gdp: 80, gdpGrowth: 2.2, debtToGdp: 38.4, population: 2.7, region: "Europe" },
  { name: "Uruguay", code: "UY", flag: "🇺🇾", marketCap: 220, gdp: 79, gdpGrowth: 3.2, debtToGdp: 60.0, population: 3.4, region: "Americas" },
  { name: "Belarus", code: "BY", flag: "🇧🇾", marketCap: 210, gdp: 73, gdpGrowth: 3.8, debtToGdp: 41.0, population: 9.2, region: "Europe" },
  { name: "Serbia", code: "RS", flag: "🇷🇸", marketCap: 200, gdp: 75, gdpGrowth: 3.5, debtToGdp: 51.6, population: 6.6, region: "Europe" },
  { name: "Azerbaijan", code: "AZ", flag: "🇦🇿", marketCap: 195, gdp: 78, gdpGrowth: 2.3, debtToGdp: 21.1, population: 10.4, region: "Asia" },
  { name: "Costa Rica", code: "CR", flag: "🇨🇷", marketCap: 190, gdp: 87, gdpGrowth: 3.9, debtToGdp: 60.9, population: 5.2, region: "Americas" },
  { name: "Panama", code: "PA", flag: "🇵🇦", marketCap: 180, gdp: 90, gdpGrowth: 2.5, debtToGdp: 53.8, population: 4.5, region: "Americas" },
  { name: "Tanzania", code: "TZ", flag: "🇹🇿", marketCap: 170, gdp: 85, gdpGrowth: 5.4, debtToGdp: 47.3, population: 67.4, region: "Africa" },
  { name: "Ghana", code: "GH", flag: "🇬🇭", marketCap: 160, gdp: 76, gdpGrowth: 3.8, debtToGdp: 84.9, population: 34.1, region: "Africa" },
  { name: "Iceland", code: "IS", flag: "🇮🇸", marketCap: 155, gdp: 32, gdpGrowth: 1.9, debtToGdp: 60.9, population: 0.4, region: "Europe" },
  { name: "Bahrain", code: "BH", flag: "🇧🇭", marketCap: 150, gdp: 47, gdpGrowth: 3.0, debtToGdp: 121.0, population: 1.5, region: "Asia" },
  { name: "Estonia", code: "EE", flag: "🇪🇪", marketCap: 130, gdp: 41, gdpGrowth: 0.8, debtToGdp: 22.6, population: 1.3, region: "Europe" },
  { name: "Latvia", code: "LV", flag: "🇱🇻", marketCap: 120, gdp: 45, gdpGrowth: 1.0, debtToGdp: 44.5, population: 1.8, region: "Europe" },
  { name: "Cyprus", code: "CY", flag: "🇨🇾", marketCap: 110, gdp: 33, gdpGrowth: 2.8, debtToGdp: 73.6, population: 1.3, region: "Europe" },
  { name: "Malta", code: "MT", flag: "🇲🇹", marketCap: 100, gdp: 24, gdpGrowth: 4.1, debtToGdp: 50.3, population: 0.55, region: "Europe" },
];

export const COUNTRIES: Country[] = [...RAW]
  .sort((a, b) => b.marketCap - a.marketCap)
  .map((c, i) => ({ rank: i + 1, ...c }));

export const TOTALS = {
  marketCap: COUNTRIES.reduce((s, c) => s + c.marketCap, 0),
  gdp: COUNTRIES.reduce((s, c) => s + c.gdp, 0),
  population: COUNTRIES.reduce((s, c) => s + c.population, 0),
  countries: COUNTRIES.length,
};
