import type { Metadata } from "next";
import { InfoPage } from "@/components/InfoPage";

export const metadata: Metadata = {
  title: "Contact | Countries Market Cap",
  description:
    "How to report a data correction, source issue, accessibility problem, or technical bug in Countries Market Cap.",
  alternates: { canonical: "https://countriesmarketcap.com/contact" },
};

export default function ContactPage() {
  return (
    <InfoPage
      title="Contact"
      introduction="Countries Market Cap is operated by Adam Pang. Public, reproducible reports are the preferred contact path for this independent project."
    >
      <section>
        <h2>Report a data correction</h2>
        <p>
          Open an issue in the public repository and name the country, field, current value, proposed value, publication date, and source URL. A primary statistical publication is preferable to a screenshot or unsourced summary.
        </p>
        <p>
          <a href="https://github.com/adamtpang/countriesmarketcap.com/issues/new">
            Start a public correction or bug report
          </a>
        </p>
      </section>
      <section>
        <h2>Accessibility and technical issues</h2>
        <p>
          Use the same issue tracker for keyboard access, screen-reader labels, rendering problems, security concerns that are safe to disclose publicly, and broken calculations. Include the page URL, browser or assistive technology, expected behavior, and steps to reproduce.
        </p>
      </section>
      <section>
        <h2>Keep private information private</h2>
        <p>
          Repository issues are public. Do not post personal records, credentials, private financial information, unpublished vulnerability details, or anything else that should not be visible on the public internet.
        </p>
      </section>
    </InfoPage>
  );
}
