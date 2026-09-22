import { LegalDoc } from "@/components/LegalDoc";
import { pageMeta } from "@/lib/page-meta";
import { site } from "@/lib/site";

const effectiveDate = "September 21, 2026";

export const metadata = pageMeta({
  title: "Privacy Policy",
  description: `How ${site.name} collects, uses, shares, and protects personal information under New York law, including the SHIELD Act.`,
  path: "/privacy-policy",
});

const toc = [
  { id: "who", label: "Who we are" },
  { id: "scope", label: "What this policy covers" },
  { id: "collect", label: "Information we collect" },
  { id: "use", label: "How we use information" },
  { id: "share", label: "How we share information" },
  { id: "sale", label: "We do not sell personal information" },
  { id: "retention", label: "How long we keep information" },
  { id: "security", label: "Security (New York SHIELD Act)" },
  { id: "breach", label: "Security-incident notice" },
  { id: "choices", label: "Your choices and requests" },
  { id: "children", label: "Children and teens" },
  { id: "cookies", label: "Cookies and similar technologies" },
  { id: "communications", label: "Calls, texts, and email" },
  { id: "biometric", label: "Biometric and identity-proofing data" },
  { id: "other-laws", label: "Other privacy laws" },
  { id: "changes", label: "Changes" },
  { id: "contact", label: "Contact and complaints" },
];

export default function PrivacyPage() {
  return (
    <LegalDoc
      kicker="Legal"
      title="Privacy Policy"
      effectiveDate={effectiveDate}
      lede={
        <p>
          This Privacy Policy explains how {site.legalName}, doing business as{" "}
          {site.name} (“we,” “us,” or “our”), collects, uses, shares, and
          protects personal information when you use this website or receive
          notarial and related services. It is written for New York residents
          and for anyone we serve in connection with New York notarial work.
        </p>
      }
      keyPoints={
        <ul>
          <li>
            We collect information to schedule appointments, verify identity,
            complete notarial acts, and run this website — not to sell your
            data.
          </li>
          <li>
            New York notaries must keep a journal of notarial acts, and
            electronic sessions must be recorded, for at least ten years. We
            cannot delete those legal records on request.
          </li>
          <li>
            We maintain reasonable safeguards for “private information” under
            New York’s SHIELD Act (General Business Law §§ 899-aa and 899-bb).
          </li>
          <li>
            This website is not directed to children. We do not sell personal
            information of anyone, including minors.
          </li>
          <li>
            Questions and requests:{" "}
            <a href={`mailto:${site.email}`}>{site.email}</a> or{" "}
            <a href={site.phoneTel}>{site.phoneDisplay}</a>.
          </li>
        </ul>
      }
      toc={toc}
    >
      <h2 id="who">1. Who we are</h2>
      <p>
        {site.legalName} operates this website and provides mobile, in-person,
        and (when available) electronic notarial services in New York, along
        with related convenience services such as loan-signing coordination and
        apostille assistance. Our contact details are in{" "}
        <a href="#contact">section 17</a>.
      </p>
      <p>
        Our <a href="/terms-of-use">Terms of Use</a> describe the services
        themselves. This policy describes information practices.
      </p>

      <h2 id="scope">2. What this policy covers</h2>
      <p>This policy covers personal information we collect:</p>
      <ul>
        <li>Through this website, phone, text, email, or booking messages.</li>
        <li>
          In person or electronically when we perform a notarial act or related
          service.
        </li>
        <li>
          From a third party you authorized (for example, a title company,
          lender, attorney, or family member who books for you).
        </li>
      </ul>
      <p>
        It does not cover other websites we link to, or a hospital, building, or
        technology vendor’s independent practices. Those parties have their own
        policies.
      </p>
      <p>
        We describe our actual practices. This website does not currently use
        advertising networks, does not currently run a customer-account system,
        and does not currently host public user posts. If that changes, we will
        update this policy before the new practice begins.
      </p>

      <h2 id="collect">3. Information we collect</h2>
      <h3>Website and booking</h3>
      <p>Depending on how you contact us, we may collect:</p>
      <ul>
        <li>
          Identifiers and contact data: name, phone number, email address,
          appointment address, and similar details you provide.
        </li>
        <li>
          Appointment details: date, time, location, document type, number of
          signers, and special-access notes (for example, hospital unit).
        </li>
        <li>
          Payment data: if you pay by card, the processor collects card number
          and related security data. We receive confirmation, the last digits,
          and the amount. We do not store full card numbers on this website. If
          you pay by Zelle or cash, we may receive the name and account
          identifier your bank shows.
        </li>
        <li>
          Communications: the content of calls, voicemails, texts, and emails
          you send us.
        </li>
        <li>
          Technical log data: IP address, browser type, pages viewed, dates and
          times, and referring URL, which the server may record to operate and
          secure the site.
        </li>
      </ul>

      <h3>Notarial and related services</h3>
      <p>New York law requires us to record notarial acts. We may collect:</p>
      <ul>
        <li>
          Name and address of each person for whom an act is performed.
        </li>
        <li>
          Date, approximate time, type of act, and number of acts.
        </li>
        <li>
          Type of identification credential presented (and, when the law
          requires it, related verification details). We view government ID to
          confirm identity. We do not copy or store ID numbers unless a
          specific engagement or legal duty requires it.
        </li>
        <li>Signature, notarial certificate, and seal information.</li>
        <li>
          For electronic notarization: audio-video recording of the session,
          identity-proofing and credential-analysis results from the technology
          provider, and identification of the communication technology used.
        </li>
        <li>
          Loan-package or apostille-assistance files you or your closing
          professional send us, which may include financial, real-estate, or
          other sensitive information needed to complete that job.
        </li>
      </ul>

      <h3>New York “private information”</h3>
      <p>
        New York’s SHIELD Act defines “private information” to include personal
        information combined with data such as a Social Security number,
        driver’s license or non-driver ID number, certain financial account
        numbers, biometric information used to identify a person, or an email
        or username plus a password. We do not request Social Security numbers
        or full financial account numbers for ordinary notarization. Those
        elements may appear in documents others send us (especially loan
        packages). We treat any such data as confidential and as private
        information under the SHIELD Act.
      </p>

      <h2 id="use">4. How we use information</h2>
      <p>We use personal information to:</p>
      <ul>
        <li>Schedule, confirm, travel to, and complete appointments.</li>
        <li>
          Verify identity and perform notarial acts as New York law requires.
        </li>
        <li>
          Keep the notarial journal and electronic recordings the law requires.
        </li>
        <li>Process payments and prevent fraud.</li>
        <li>
          Communicate with you, and with professionals you involved (title,
          lender, attorney, courier).
        </li>
        <li>Operate, secure, and improve this website.</li>
        <li>
          Comply with law, respond to the Department of State or other lawful
          requests, and protect our legal rights.
        </li>
      </ul>
      <p>
        We do not use notarial journal entries, ID images, or electronic
        session recordings for advertising.
      </p>

      <h2 id="share">5. How we share information</h2>
      <p>We share personal information only as needed for the purpose you would reasonably expect, or as the law requires:</p>
      <ul>
        <li>
          <strong>Service providers.</strong> Hosting, email, texting, payment
          processing, courier, and electronic-notarization technology vendors
          that process data for us. New York’s SHIELD Act requires us to select
          providers capable of maintaining appropriate safeguards and to
          require those safeguards by contract.
        </li>
        <li>
          <strong>Transaction parties you involved.</strong> Title companies,
          lenders, attorneys, courts, county clerks, the New York Department of
          State (for apostilles), and couriers, when needed to finish the job
          you requested.
        </li>
        <li>
          <strong>Legal and safety.</strong> The Secretary of State and others
          entitled to notarial records under 19 NYCRR § 182.9; courts; law
          enforcement; and regulators, when required or when we reasonably
          believe disclosure is necessary to prevent fraud or serious harm.
        </li>
        <li>
          <strong>Business transfer.</strong> If we merge, sell, or reorganize,
          information may transfer to the successor, who must continue to
          protect it under this policy or provide notice of changes.
        </li>
      </ul>
      <p>We do not share personal information with advertising networks.</p>

      <h2 id="sale">6. We do not sell personal information</h2>
      <p>
        We do not sell, rent, or lease personal information. We do not sell,
        lease, trade, or otherwise profit from biometric identifier
        information. New York City Administrative Code § 22-1202 prohibits
        profiting from biometric identifier information; we do not do so.
      </p>
      <p>
        We also do not share personal information for cross-context behavioral
        advertising.
      </p>

      <h2 id="retention">7. How long we keep information</h2>
      <p>
        We keep information only as long as needed for the purposes above, and
        as long as New York law requires:
      </p>
      <ul>
        <li>
          Notarial journal entries and related compliance records: at least ten
          years (19 NYCRR § 182.9).
        </li>
        <li>
          Electronic notarial audio-video recordings: at least ten years
          (Executive Law § 135-c and 19 NYCRR Part 182).
        </li>
        <li>
          Appointment, payment, and correspondence records: generally up to
          seven years, or longer if a dispute, audit, or legal hold requires
          it.
        </li>
        <li>
          Website server logs: a short period unless needed to investigate
          security or abuse.
        </li>
      </ul>
      <p>
        When information is no longer needed and is not legally required to be
        kept, we dispose of it so it cannot reasonably be read or reconstructed,
        as the SHIELD Act requires.
      </p>

      <h2 id="security">8. Security (New York SHIELD Act)</h2>
      <p>
        If we own or license computerized data that includes private
        information of a New York resident, we must develop, implement, and
        maintain reasonable administrative, technical, and physical safeguards
        for that information, including disposal (General Business Law
        § 899-bb). As a small professional practice, our program is scaled to
        our size, our activities, and the sensitivity of the information we
        handle. In practice that includes:
      </p>
      <ul>
        <li>Limiting access to appointment and notarial records.</li>
        <li>
          Using reputable providers for hosting, payment, and electronic
          notarization.
        </li>
        <li>
          Avoiding unnecessary copies of identification and full account
          numbers.
        </li>
        <li>
          Securing paper journals and electronic records against unauthorized
          access.
        </li>
        <li>Disposing of private information when it is no longer needed.</li>
      </ul>
      <p>
        No method of transmission or storage is perfectly secure. We cannot
        guarantee absolute security.
      </p>

      <h2 id="breach">9. Security-incident notice</h2>
      <p>
        If there is a breach of the security of the system involving private
        information of a New York resident, New York law requires notice to
        affected residents in the most expedient time possible and without
        unreasonable delay, and in any event within thirty days after discovery,
        subject to law-enforcement delay (General Business Law § 899-aa). Notice
        will include the contact information the statute requires, a description
        of the categories of information involved, and resources on identity
        theft. Larger incidents must also be reported to the New York Attorney
        General, the Department of State, and the Division of State Police as
        the statute provides.
      </p>

      <h2 id="choices">10. Your choices and requests</h2>
      <p>
        New York does not currently give a general statutory right to demand
        deletion of all personal information held by a private notary practice.
        You may still ask us to:
      </p>
      <ul>
        <li>Correct contact or booking information that is wrong.</li>
        <li>
          Stop marketing messages (we do not currently run a marketing list
          beyond appointment-related messages).
        </li>
        <li>
          Provide a copy of appointment correspondence we have about you, except
          where disclosure would violate another person’s privacy or a legal
          restriction.
        </li>
      </ul>
      <p>
        We cannot delete notarial journal entries or required electronic
        recordings while the ten-year retention duty applies, and we cannot
        alter a completed notarial record to make it untrue. If another privacy
        law gives you additional rights that apply to us, we will honor those
        rights.
      </p>
      <p>
        Send requests to {site.email}. We may need to verify your identity
        before responding. We will not discriminate against you for asking.
      </p>

      <h2 id="children">11. Children and teens</h2>
      <p>
        This website and our ordinary booking process are intended for adults.
        We do not knowingly collect personal information online from children
        under 13, and we do not direct the site to minors.
      </p>
      <p>
        New York’s Child Data Protection Act (General Business Law §§ 899-ee
        and following) restricts processing of personal data of “covered
        users” under 18. We do not have actual knowledge that website visitors
        are under 18. We do not sell minors’ personal data. We do not use
        minors’ data for advertising.
      </p>
      <p>
        If a parent or guardian lawfully books a notarial act involving a
        minor, we process only what is strictly necessary to perform the act
        and to comply with notary recordkeeping law. If we learn we collected
        a minor’s website data in error, we will delete it unless a law
        requires us to keep it. Parents or guardians may contact us at{" "}
        {site.email}.
      </p>

      <h2 id="cookies">12. Cookies and similar technologies</h2>
      <p>
        This website currently uses only cookies or similar technologies that
        are strictly necessary to operate and secure the pages (for example,
        to load the site). We do not currently use advertising cookies, social
        pixels, or analytics packages that profile visitors.
      </p>
      <p>
        You can block cookies in your browser. Blocking strictly necessary
        cookies may affect basic functions. If we later add optional analytics
        or advertising technologies, we will update this policy first and, where
        required, offer a choice. We will honor a legally recognized opt-out
        preference signal for non-essential selling or sharing if we ever
        engage in that activity. We do not currently sell or share data in that
        way.
      </p>

      <h2 id="communications">13. Calls, texts, and email</h2>
      <p>
        If you call, text, or email us, or give us your number or address to
        book an appointment, we will use that channel to confirm, coordinate,
        and follow up on the appointment. Federal law (including the Telephone
        Consumer Protection Act and CAN-SPAM Act) and New York law apply to
        marketing messages. We do not currently send advertising texts. If that
        changes, we will obtain any consent the law requires and honor opt-out
        requests. Appointment-related messages are not marketing.
      </p>
      <p>
        Our published number is {site.phoneDisplay}. New York’s Do Not Call
        rules do not stop us from returning a call you placed or confirming a
        job you requested.
      </p>

      <h2 id="biometric">14. Biometric and identity-proofing data</h2>
      <p>
        In-person notarization uses visual inspection of identification. That
        is not a biometric identification system, and we do not enroll
        fingerprints or face templates for in-person work.
      </p>
      <p>
        Electronic notarization uses audio-video communication and may use
        credential analysis and identity proofing. Those tools can involve a
        facial image, a scan of an identification card, and liveness or
        biometric comparison performed by the technology provider. The session
        is recorded. We use that information only to complete and document the
        notarial act, to meet New York recordkeeping rules, and to defend the
        validity of the act. We do not sell it.
      </p>
      <p>
        New York City’s biometric law is aimed at certain commercial
        establishments that collect biometric identifier information of
        customers. We do not operate a retail storefront that scans customers
        for entry. If we ever collect biometric identifier information in a
        setting that law covers, we will give the notice that law requires.
      </p>

      <h2 id="other-laws">15. Other privacy laws</h2>
      <p>
        We are a New York notary practice. We are not a HIPAA covered entity
        by reason of notarizing a health-related paper, and this policy is not
        a HIPAA Notice of Privacy Practices. We are not a bank. If a different
        privacy statute (for example, a state consumer privacy law) applies to
        a particular data set, we will comply with that statute. We do not
        currently operate a business that meets typical “large business”
        thresholds in those laws, and we do not create extra rights in this
        policy that those laws do not actually give.
      </p>

      <h2 id="changes">16. Changes</h2>
      <p>
        We may update this policy to reflect legal or operational changes. We
        will change the effective date at the top of this page. For a material
        change, we will post the update at least 30 days before it takes effect
        when reasonably possible, and we will email you if we have your address
        in connection with an upcoming or recent appointment. If we add a new
        practice that this policy does not already describe — such as
        advertising cookies — we will not start that practice until the updated
        policy is posted.
      </p>

      <h2 id="contact">17. Contact and complaints</h2>
      <p>
        Privacy questions, correction requests, and incident notices:
      </p>
      <p>
        {site.legalName}
        <br />
        Doing business as {site.name}
        <br />
        {site.location}
        <br />
        Phone:{" "}
        <a href={site.phoneTel}>{site.phoneDisplay}</a>
        <br />
        Email:{" "}
        <a href={`mailto:${site.email}`}>{site.email}</a>
      </p>
      <p>
        You may also contact the{" "}
        <a href="https://ag.ny.gov/" target="_blank" rel="noopener noreferrer">
          New York State Attorney General
        </a>{" "}
        or, for identity-theft resources after a breach, the Federal Trade
        Commission at{" "}
        <a
          href="https://www.identitytheft.gov/"
          target="_blank"
          rel="noopener noreferrer"
        >
          IdentityTheft.gov
        </a>
        . Notary-record and commission issues may be raised with the{" "}
        <a
          href="https://dos.ny.gov/notary-public"
          target="_blank"
          rel="noopener noreferrer"
        >
          New York Department of State
        </a>
        . Using a government agency does not require you to give up any private
        legal right.
      </p>
    </LegalDoc>
  );
}
