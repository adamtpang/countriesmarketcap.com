import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const read = (path) => readFileSync(new URL(`../${path}`, import.meta.url), "utf8");

test("homepage exposes one canonical identity graph", () => {
  const layout = read("app/layout.tsx");
  assert.match(layout, /alternates:\s*\{ canonical: SITE_URL \}/);
  assert.match(layout, /"@type": "Organization"/);
  assert.match(layout, /"@type": "WebSite"/);
  assert.match(layout, /"@type": "Dataset"/);
  assert.match(layout, /type="application\/ld\+json"/);
});

test("all homepage controls use native semantics and accessible names", () => {
  const table = read("components/CountryTable.tsx");
  assert.match(table, /<label[^>]+htmlFor="country-search"/);
  assert.match(table, /id="country-search"/);
  assert.match(table, /<button/);
  assert.match(table, /type="button"/);
  assert.match(table, /aria-label=\{`Sort by/);
  assert.match(table, /aria-sort=/);
  assert.doesNotMatch(table, /<th\s+onClick=/);
});

test("production CSP is nonce-based and contains no wildcard or unsafe inline script source", () => {
  const proxy = read("proxy.ts");
  const scriptDirective = proxy.match(/script-src[^;]+;/)?.[0] ?? "";
  assert.match(scriptDirective, /'nonce-\$\{nonce\}'/);
  assert.match(scriptDirective, /'strict-dynamic'/);
  assert.doesNotMatch(scriptDirective, /\*/);
  assert.doesNotMatch(scriptDirective, /unsafe-inline/);
  assert.match(proxy, /object-src 'none'/);
  assert.match(proxy, /frame-ancestors 'none'/);
});

test("trust and agent discovery resources are substantive and linked", () => {
  const footer = read("components/SiteFooter.tsx");
  for (const path of ["about", "contact", "privacy"]) {
    assert.match(footer, new RegExp(`/${path}`));
    assert.ok(read(`app/${path}/page.tsx`).length > 1_000, `${path} page should be substantive`);
  }
  const llms = read("public/llms.txt");
  assert.ok(llms.length > 500);
  assert.match(llms, /Canonical site: https:\/\/countriesmarketcap\.com\//);
});

test("security response headers include MIME sniffing protection", () => {
  const config = read("next.config.js");
  assert.match(config, /X-Content-Type-Options/);
  assert.match(config, /nosniff/);
  assert.match(config, /Strict-Transport-Security/);
  assert.match(config, /max-age=63072000/);
});
