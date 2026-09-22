import { ServicePage } from "@/components/ServicePage";
import { pageMeta } from "@/lib/page-meta";

export const metadata = pageMeta({
  title: "Notary Services in New York",
  description:
    "Acknowledgments, oaths, and execution of eligible documents by commissioned New York notaries. Mobile appointments across NYC and Nassau County.",
  path: "/notary-services",
});

export default function Page() {
  return (
    <ServicePage
      kicker="Mobile"
      title="Notary services"
      body="The Notary Giant® provides professional notarial services built around accuracy, reliability, confidentiality, and attention to detail — for individual documents, real estate transactions, loan signings, and other eligible notarial matters."
    />
  );
}
