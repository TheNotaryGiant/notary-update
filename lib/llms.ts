import { areaPath, areas, areaHubs, childrenOf } from "@/lib/areas";
import { pageUrl, site } from "@/lib/site";

function link(label: string, path: string, note: string) {
  return `- [${label}](${pageUrl(path)}): ${note}`;
}

export function llmsTxt() {
  const sections = areaHubs.map((hub) => {
    const children = childrenOf(hub.slug)
      .map((area) => link(area.name, areaPath(area), area.demand))
      .join("\n");

    return `## ${hub.name}\n\n${link(hub.name, areaPath(hub), hub.place)}\n${children}`;
  });

  return `# ${site.name}

> ${site.legalName} provides commissioned New York mobile notary, loan-signing, signature-witnessing, and apostille-assistance services in New York City and Nassau County.

${site.name} is not a law firm and does not give legal advice. Notaries travel to the signer. The firm does not issue apostilles; apostille help is coordination only. Nassau County visits are scheduled in advance. Service-area pages describe where a notary can meet you. They are not branch offices.

## Services

${link("Notary services", "/notary-services", "New York notary services: acknowledgments, oaths, and other eligible notarial acts.")}
${link("Apostille assistance", "/apostille-authentication", "Preparation and coordination for documents intended for use outside the United States.")}
${link("Signature witnessing", "/signature-witnessing", "Witnessing and loan-signing appointments for eligible documents.")}

## Company

${link("Overview", "/", "New York notary services for New York City and Nassau County.")}
${link("Service areas", "/areas", `Directory of ${areas.length} New York City and Nassau communities where a notary can meet you.`)}
${link("Contact", "/contact", `Book by form, or call ${site.phoneDisplay}.`)}
${link("Newsroom", "/newsroom", "Company announcements and press release publications.")}
${link("Privacy Policy", "/privacy-policy", "How personal information is collected and protected.")}
${link("Terms of Use", "/terms-of-use", "Terms for the website and for notarial engagements, including fees.")}

${sections.join("\n\n")}
`;
}
