import { ServicePage } from "@/components/ServicePage";
import { pageMeta } from "@/lib/page-meta";

export const metadata = pageMeta({
  title: "Apostille Assistance in New York",
  description:
    "Help preparing New York documents for apostille and authentication so they can be used outside the United States. We coordinate the process. We do not issue apostilles.",
  path: "/apostille-authentication",
});

export default function Page() {
  return (
    <ServicePage
      kicker="International"
      title="Apostille and document authentication"
      lede="We help clients prepare eligible personal, business, educational, and legal documents for apostille or authentication when the document is intended for use outside the United States."
      sections={[
        {
          heading: "What an apostille is",
          body: "An apostille is a certificate issued by a competent authority, not by a notary. For many New York documents, that authority is the New York Department of State. Our work is to help you understand the sequence, notarize what a notary is allowed to notarize, and coordinate the handoff. We do not issue the apostille, and we do not control how long the state takes.",
        },
        {
          heading: "What to have ready",
          body: "Bring the original document, or the copy the receiving country will accept, and government-issued photo identification for every signer. Do not sign a document early if a notary must witness the signature. The country where the document will be used may also require a translation or an extra authentication step. We will tell you if that step is outside what we can do.",
        },
        {
          heading: "Fees",
          body: "The notarial act is charged under the New York statutory cap. Government apostille and authentication fees are set by the issuing authority and passed through at cost unless we agree otherwise in writing. Courier, printing, and travel charges are quoted separately before you book.",
        },
      ]}
    />
  );
}
