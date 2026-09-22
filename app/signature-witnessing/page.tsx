import { ServicePage } from "@/components/ServicePage";
import { pageMeta } from "@/lib/page-meta";

export const metadata = pageMeta({
  title: "Signature Witnessing in New York",
  description:
    "Signature witnessing and loan-signing appointments in New York City and Nassau County for signers, lenders, title companies, attorneys, and real estate professionals.",
  path: "/signature-witnessing",
});

export default function Page() {
  return (
    <ServicePage
      kicker="Witnessing"
      title="Signature witnessing and loan signings"
      lede="Some documents must be signed in front of a notary, and some closing packages also need a signing agent who will walk the signer through the stack. We do both when the document and New York law allow it."
      sections={[
        {
          heading: "Sign in the notary’s presence",
          body: "Do not sign beforehand if the act requires the notary to witness the signature. Bring the complete package and a current government-issued photo ID. Every required signer has to appear. If you are unsure whether a witness, a notary, or both are required, ask before the appointment. Requirements depend on the document.",
        },
        {
          heading: "Loan signings",
          body: "Lenders, title companies, attorneys, and real estate professionals can book a loan signing in New York City or, when scheduled in advance, in Nassau County. We act as a signing agent, not as the closing attorney. We do not give legal advice about the loan, the deed, or the transaction.",
        },
        {
          heading: "How to book",
          body: "Tell us the address, the time window, the number of signers, and who is sending the package. We confirm the appointment before we travel. Same-day signings are often available in New York City and are not guaranteed. Hospital and building access depends on the facility.",
        },
      ]}
    />
  );
}