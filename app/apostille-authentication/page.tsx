import { ServicePage } from "@/components/ServicePage";
import { pageMeta } from "@/lib/page-meta";

export const metadata = pageMeta({
  title: "Apostille Assistance in New York",
  description:
    "Help preparing personal, business, and educational documents for apostille and authentication for use outside the United States. We coordinate; we do not issue apostilles.",
  path: "/apostille-authentication",
});

export default function Page() {
  return (
    <ServicePage
      kicker="International"
      title="Apostille & document authentication"
      body="We help clients prepare eligible personal, business, educational, and legal documents for apostille and authentication for use outside the United States."
    />
  );
}
