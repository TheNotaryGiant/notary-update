import { ServicePage } from "@/components/ServicePage";
import { pageMeta } from "@/lib/page-meta";

export const metadata = pageMeta({
  title: "Signature Witnessing in New York",
  description:
    "Signature witnessing and loan-signing appointments for lenders, title companies, attorneys, and real estate professionals across NYC and Nassau County.",
  path: "/signature-witnessing",
});

export default function Page() {
  return (
    <ServicePage
      kicker="Witnessing"
      title="Signature witnessing"
      body="Requirements vary by document. Contact us to confirm what is needed before your appointment, and do not sign in advance if the act requires signing in the notary’s presence."
    />
  );
}
