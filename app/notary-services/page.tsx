import { ServicePage } from "@/components/ServicePage";
import { pageMeta } from "@/lib/page-meta";

export const metadata = pageMeta({
  title: "New York Notary Services",
  description:
    "New York notary services from a commissioned notary who comes to you in New York City and Nassau County. Acknowledgments, oaths, loan signings, and apostille preparation.",
  path: "/notary-services",
});

export default function Page() {
  return (
    <ServicePage
      kicker="Services"
      title="New York notary services"
      lede="A commissioned New York notary comes to the signer. The Notary Giant™ provides acknowledgments, oaths, signature witnessing, and loan signings at homes, offices, hospitals, and closing tables in New York City and Nassau County."
      sections={[
        {
          heading: "What a New York notary can do",
          body: "A New York notary public can take acknowledgments, administer oaths and affirmations, and take proofs of execution when the document and the law allow it. Signers appear in person, with a current government-issued photo ID, and they sign in the notary’s presence when the act requires it. Electronic notarization is available only when a registered New York electronic notary can take the appointment and the document is eligible.",
        },
        {
          heading: "Where we meet",
          body: "We travel throughout Manhattan, Brooklyn, Queens, the Bronx, and Staten Island. Nassau County visits are scheduled in advance. You choose a lawful location. Hospitals, nursing homes, and secured buildings decide who may enter, so access is not guaranteed. We do not keep a branch office in each neighborhood.",
        },
        {
          heading: "What to bring",
          body: "Bring the complete document, unsigned if the act requires a signature in front of the notary, and acceptable photo identification. Every person who must sign or take an oath has to be present. Tell us the address, the number of signers, and the kind of document when you book so we can confirm that the appointment is one we can perform.",
        },
        {
          heading: "Fees",
          body: "New York law caps a paper notarial act at $2 per act, per person. An electronic notarial act may cost up to $25 when a registered electronic notary performs it. Travel, tolls, parking, waiting, printing, and rush scheduling are separate convenience charges, quoted before you book. We accept Zelle, major cards, and cash.",
        },
        {
          heading: "What these services do not include",
          body: "We are not a law firm and we do not give legal advice, including advice about immigration. We do not prepare legal documents for you, and we do not issue apostilles. Apostille assistance is coordination with the authority that actually issues the certificate. A third party, court, or foreign office decides whether to accept a notarized document.",
        },
      ]}
    />
  );
}
