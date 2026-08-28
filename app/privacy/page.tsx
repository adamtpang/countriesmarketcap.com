import type { Metadata } from "next";
import { InfoPage } from "@/components/InfoPage";

export const metadata: Metadata = {
  title: "Privacy | Countries Market Cap",
  description:
    "What Countries Market Cap collects, what its hosting provider processes, and what happens when visitors follow external links.",
  alternates: { canonical: "https://countriesmarketcap.com/privacy" },
};

export default function PrivacyPage() {
  return (
    <InfoPage
      title="Privacy policy"
      introduction="This policy describes the current public website at countriesmarketcap.com. It was last updated on August 28, 2026."
    >
      <section>
        <h2>Information collected by this site</h2>
        <p>
          Countries Market Cap does not provide user accounts, accept payments, run advertising, embed analytics trackers, or intentionally set application cookies. The country search runs in the visitor&apos;s browser and is not submitted to a Countries Market Cap server. The site has no contact form and does not collect the text visitors type into the search field.
        </p>
      </section>
      <section>
        <h2>Hosting and operational data</h2>
        <p>
          Vercel hosts and delivers the site. Like other web hosting providers, Vercel receives technical request data needed to serve and protect the website, which can include an IP address, requested URL, timestamp, referrer, and browser user-agent. Vercel processes that data under its own privacy and security practices; Countries Market Cap does not sell that request data.
        </p>
      </section>
      <section>
        <h2>External links and public reports</h2>
        <p>
          The Contact page links to GitHub, a separate service with its own privacy terms. If a visitor chooses to open a repository issue, GitHub receives the information the visitor submits and displays the issue publicly. Visitors should not include private or confidential information in a public report.
        </p>
      </section>
      <section>
        <h2>Policy changes and questions</h2>
        <p>
          This page will be updated if the site adds accounts, forms, analytics, advertising, payments, or another material data practice. Privacy questions or correction requests can be raised through the public, non-confidential path described on the Contact page.
        </p>
      </section>
    </InfoPage>
  );
}
