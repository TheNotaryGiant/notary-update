import { LegalDoc } from "@/components/LegalDoc";
import { pageMeta } from "@/lib/page-meta";
import { site } from "@/lib/site";

const effectiveDate = "September 21, 2026";

export const metadata = pageMeta({
  title: "Terms of Use",
  description: `Terms governing use of the ${site.name} website and engagement of New York notarial and related services.`,
  path: "/terms-of-use",
});

const toc = [
  { id: "agreement", label: "The agreement" },
  { id: "not-a-law-firm", label: "We are not a law firm" },
  { id: "services", label: "Services we provide" },
  { id: "website", label: "Use of this website" },
  { id: "appointments", label: "Appointments and cancellations" },
  { id: "fees", label: "Fees" },
  { id: "identification", label: "Identification and appearance" },
  { id: "electronic", label: "Electronic notarization" },
  { id: "apostille", label: "Apostille and authentication assistance" },
  { id: "loan-signing", label: "Loan signing and real-estate packages" },
  { id: "your-duties", label: "Your responsibilities" },
  { id: "refusal", label: "When we may refuse or stop" },
  { id: "confidentiality", label: "Confidentiality" },
  { id: "ip", label: "Intellectual property" },
  { id: "disclaimers", label: "Disclaimers" },
  { id: "liability", label: "Limitation of liability" },
  { id: "indemnity", label: "Responsibility for certain losses" },
  { id: "disputes", label: "Disputes and New York law" },
  { id: "changes", label: "Changes" },
  { id: "contact", label: "Contact" },
];

export default function TermsPage() {
  return (
    <LegalDoc
      kicker="Legal"
      title="Terms of Use"
      effectiveDate={effectiveDate}
      lede={
        <p>
          These Terms of Use (“Terms”) are a contract between you and{" "}
          {site.legalName}, doing business as {site.name} (“we,” “us,” or
          “our”). They govern your use of this website and your engagement of
          our New York notarial and related services. Please read them before
          you book or appear for an appointment.
        </p>
      }
      keyPoints={
        <ul>
          <li>
            We are a New York notary practice, not a law firm. We do not give
            legal advice, draft legal documents, or represent you in any legal
            matter.
          </li>
          <li>
            New York law caps the fee for a paper notarial act. Travel, waiting,
            printing, courier, and other convenience charges are separate and
            must be agreed before we perform the work.
          </li>
          <li>
            You must appear with acceptable identification and unsigned
            documents if the act requires signing in the notary’s presence.
          </li>
          <li>
            Electronic notarization, when offered, is performed only by a New
            York electronic notary who is physically in New York and is
            recorded as required by law.
          </li>
          <li>
            These Terms are governed by the laws of the State of New York.
            Mandatory consumer protections cannot be waived.
          </li>
        </ul>
      }
      toc={toc}
    >
      <h2 id="agreement">1. The agreement</h2>
      <p>
        By using this website, requesting an appointment, or receiving services
        from us, you agree to these Terms and to our{" "}
        <a href="/privacy-policy">Privacy Policy</a>. If you do not agree, do
        not use the website and do not book services.
      </p>
      <p>
        If you book on behalf of someone else (for example, a title company,
        lender, law office, hospital, or family member), you represent that you
        have authority to bind that person or organization, and that they will
        comply with these Terms.
      </p>
      <p>
        You must be at least 18 years old to use this website and to contract
        for services. A notarial act for a signer is governed by New York
        notary law, including rules about identity, awareness, and
        voluntariness, which may be stricter than this age requirement.
      </p>
      <p>
        These Terms, the Privacy Policy, and any written fee quote or
        appointment confirmation we send you are the entire agreement for
        website use and for the services described here. A later written
        confirmation controls if it conflicts with these Terms on scheduling,
        location, or price for that appointment.
      </p>

      <h2 id="not-a-law-firm">2. We are not a law firm</h2>
      <p>
        {site.name} is not a law firm. Commissioned notaries associated with us
        are not, by reason of that commission, attorneys licensed to practice
        law in New York or any other jurisdiction. We may not give legal advice
        about immigration or any other legal matter, may not draft or complete
        legal documents for you, and may not accept fees for legal advice.
      </p>
      <p>
        Nothing on this website, in an appointment, or in a notarial certificate
        is legal advice, a legal opinion, or a guarantee that a document is
        valid, enforceable, recordable, or sufficient for your purpose. If you
        need legal advice, consult a New York attorney admitted to practice.
      </p>
      <p>
        We do not advertise, and you should not understand us to have, any
        power or right that New York law does not give a notary public. See New
        York Executive Law Article 6, including sections 135, 135-b, 135-c, and
        136, and 19 NYCRR Part 182.
      </p>

      <h2 id="services">3. Services we provide</h2>
      <p>
        We provide commissioned New York notarial acts and related convenience
        services, which may include:
      </p>
      <ul>
        <li>
          In-person mobile notarization at homes, offices, hospitals, and other
          lawful locations in New York City and surrounding areas we agree to
          serve, currently including Nassau County when scheduled in advance.
        </li>
        <li>
          Electronic notarization when a registered New York electronic notary
          is available and the transaction is eligible under Executive Law
          § 135-c and 19 NYCRR Part 182.
        </li>
        <li>Signature witnessing when the document and applicable law allow it.</li>
        <li>
          Loan-signing and real-estate package coordination as a signing agent,
          not as closing counsel.
        </li>
        <li>
          Apostille and authentication assistance, which is courier and
          coordination help. We do not issue apostilles.
        </li>
      </ul>
      <p>
        We perform only notarial acts that New York law authorizes. We do not
        certify copies of original documents except where New York law
        specifically allows a notary to do so. We do not guarantee same-day
        service, hospital access, or acceptance of a notarized document by any
        third party, court, county clerk, or foreign authority.
      </p>
      <p>
        New York Executive Law § 135-c(8) prohibits requiring that notarial
        transactions be done exclusively by electronic notarization. If
        electronic notarization is unavailable or you prefer paper, we will
        discuss an in-person option when reasonably possible.
      </p>

      <h2 id="website">4. Use of this website</h2>
      <p>
        This website is an informational and booking channel. It is not a
        user-generated content platform and does not currently provide customer
        accounts. You may not:
      </p>
      <ul>
        <li>Use the site for any unlawful purpose.</li>
        <li>
          Attempt to probe, scan, reverse engineer, or disrupt the site or our
          systems.
        </li>
        <li>
          Scrape, harvest, or index the site with automated tools except for
          ordinary search-engine indexing of public pages.
        </li>
        <li>
          Impersonate us, a notary, a public official, or another person.
        </li>
        <li>
          Submit false appointment information, false identity information, or
          spam.
        </li>
      </ul>
      <p>
        The website may include links to third-party sites (for example, maps
        or social media). Those sites have their own terms. We are not
        responsible for them.
      </p>
      <p>
        We may suspend or limit website access if we reasonably believe these
        Terms are being violated or if needed to protect the site, our
        commission, or other people.
      </p>

      <h2 id="appointments">5. Appointments and cancellations</h2>
      <p>
        An appointment request is not confirmed until we accept it by phone,
        text, email, or other written message. We may decline or reschedule for
        reasons including availability, travel conditions, safety, incomplete
        information, or legal compliance.
      </p>
      <p>
        Posted hours on this website are ordinary business hours. Appointments
        outside those hours may be arranged when we agree, and may include a
        separately quoted after-hours convenience fee.
      </p>
      <p>
        Unless a confirmation says otherwise:
      </p>
      <ul>
        <li>
          Cancel or reschedule at least two hours before the appointment if we
          have not yet traveled. We will not charge a travel fee in that case.
        </li>
        <li>
          If we have already traveled, or if you are not present, lack required
          identification, or cannot complete the act for a reason on your side,
          you agree to pay the agreed travel or convenience fee. We will not
          charge a statutory notarial-act fee for an act we did not perform.
        </li>
        <li>
          Hospital, facility, and building access is controlled by that
          location. Waiting time beyond a reasonable window may be billed at
          the waiting rate we quoted, or we may need to reschedule.
        </li>
      </ul>
      <p>
        We may cancel for weather, illness, safety, technology failure, or
        other events beyond our reasonable control. If we cancel, we will
        refund any amount you prepaid for that appointment and help you
        reschedule.
      </p>

      <h2 id="fees">6. Fees</h2>
      <p>
        New York sets a maximum fee for the notarial act itself. As of the
        effective date of these Terms:
      </p>
      <ul>
        <li>
          Paper notarial acts (oath or affirmation, acknowledgment, or proof of
          execution) are limited to $2.00 per act, per person, under Executive
          Law § 136, unless a different amount is later set by statute.
        </li>
        <li>
          Electronic notarial acts may be charged up to the amount set by the
          Secretary of State, currently $25.00 per electronic notarial act,
          plus $2.00 for a certificate of authenticity when that separate act
          is performed.
        </li>
      </ul>
      <p>
        Those caps apply only to the official notarial act. They do not apply to
        separately disclosed, non-notarial charges that you agree to in
        advance, which may include travel, mileage, tolls, parking, waiting,
        after-hours or rush scheduling, printing, scanning, postage, courier,
        and apostille-assistance costs. We will itemize the notarial-act fee
        separately from convenience charges.
      </p>
      <p>
        Government apostille and authentication fees charged by the New York
        Department of State or another authenticating authority are set by that
        authority and are passed through at cost unless we tell you otherwise
        in writing.
      </p>
      <p>
        We currently accept Zelle, major credit or debit cards, and cash, as
        available for the appointment. Card payments may be processed by a
        third-party processor. You authorize us to charge the agreed amount.
        Chargebacks made in bad faith after we have performed the agreed
        services may be disputed. This paragraph does not limit any chargeback
        or billing right you have under New York or federal law.
      </p>
      <p>
        If a statute or regulation changes the allowed notarial fee, the new
        legal maximum applies automatically to acts performed after the change.
      </p>

      <h2 id="identification">7. Identification and appearance</h2>
      <p>
        For an in-person act, the signer must personally appear before the
        notary. Bring the complete, unsigned document if the act requires
        signing in the notary’s presence (including jurats). Do not sign
        beforehand unless we confirm that an acknowledgment of an already-signed
        document is appropriate.
      </p>
      <p>
        You must present satisfactory evidence of identity as required by New
        York law and 19 NYCRR Part 182. We typically require current
        government-issued photo identification. We may record the type of
        credential in our notarial journal. We may refuse the act if identity,
        awareness, or voluntariness is not satisfactorily established.
      </p>
      <p>
        You represent that the identification you present is genuine, that you
        are the person named in the document (or are authorized to sign in the
        capacity stated), and that you are signing knowingly and voluntarily.
      </p>

      <h2 id="electronic">8. Electronic notarization</h2>
      <p>
        Electronic notarization is available only when:
      </p>
      <ul>
        <li>
          The notary is commissioned in New York, registered with the Department
          of State as an electronic notary, and physically located in New York
          at the time of the act.
        </li>
        <li>
          The principal appears by compliant audio-video communication
          technology.
        </li>
        <li>
          Identity is verified by the methods New York law requires for
          electronic acts, which may include credential analysis and identity
          proofing through a technology provider.
        </li>
        <li>
          The session is recorded. New York requires the electronic notary to
          retain the audio-video recording, and notarial records, for at least
          ten years.
        </li>
      </ul>
      <p>
        By scheduling an electronic notarization, you consent to that recording
        and to the identity-proofing process. You must be able to appear on
        camera, present identification, and communicate with the notary. We may
        refuse the act if we are not satisfied that you are competent or that
        the signature is knowing and voluntary, as Executive Law § 135-c
        allows.
      </p>
      <p>
        Technology providers host the session and may process identification
        data under their own terms. We do not control third-party outages. If a
        session cannot be completed because of technology failure on our side or
        the platform’s side, we will reschedule or refund amounts prepaid for
        that electronic session.
      </p>

      <h2 id="apostille">9. Apostille and authentication assistance</h2>
      <p>
        An apostille or authentication is issued by a government authority, in
        New York typically the Department of State, not by a notary public. When
        we assist, we coordinate notarization (if needed), county-clerk
        authentications where required, filings, and courier or drop-off. We
        do not promise that a foreign country, embassy, employer, school, or
        agency will accept the document. Processing times are set by the
        issuing authority.
      </p>

      <h2 id="loan-signing">10. Loan signing and real-estate packages</h2>
      <p>
        When we act as a signing agent, we present documents prepared by others
        (for example, a lender, title company, or attorney), confirm identity,
        take acknowledgments or jurats as requested, and return the package as
        instructed. We do not explain legal rights, recommend whether you
        should sign, calculate figures, or correct substantive document errors
        except as the closing instructions expressly allow for notarial or
        clerical items.
      </p>
      <p>
        You should read every document and contact the lender, title company,
        or your own attorney with questions before you sign. We may pause or
        stop a signing if a signer appears confused, pressured, or unable to
        proceed, or if instructions conflict with New York notary law.
      </p>

      <h2 id="your-duties">11. Your responsibilities</h2>
      <p>You agree to:</p>
      <ul>
        <li>
          Provide complete, accurate booking information and the correct
          documents.
        </li>
        <li>
          Obtain any permission needed for us to enter a building, hospital, or
          facility.
        </li>
        <li>
          Not ask us to notarize if you know a signature is forged, a document
          is fraudulent, or a signer lacks awareness or is being coerced.
        </li>
        <li>
          Not ask us to give legal advice, choose a notarial certificate for a
          legal strategy, or backdate an act.
        </li>
        <li>Pay agreed fees when due.</li>
      </ul>

      <h2 id="refusal">12. When we may refuse or stop</h2>
      <p>
        A New York notary may refuse an act if not satisfied as to identity,
        competence, capacity, or that a signature is knowing and voluntary. We
        may also refuse or stop if the act is not authorized, the document is
        incomplete in a way that prevents a lawful notarization, the situation
        is unsafe, or proceeding would violate law or our commission. Refusal
        of an unlawful or improper request is not a breach of these Terms.
      </p>

      <h2 id="confidentiality">13. Confidentiality</h2>
      <p>
        We treat documents and personal information we see in the course of an
        appointment as confidential, subject to: (a) our{" "}
        <a href="/privacy-policy">Privacy Policy</a>; (b) New York journal and
        recording duties, including production to the Secretary of State and
        others as required; (c) lawful demands from courts, law enforcement, or
        regulators; and (d) disclosures needed to complete the transaction you
        requested (for example, returning a loan package to a title company).
      </p>

      <h2 id="ip">14. Intellectual property</h2>
      <p>
        {site.name} and the associated logo and website content are owned by us
        or our licensors. The Notary Giant® is a registered trademark. You may
        not copy or use our branding except as needed to identify a legitimate
        appointment with us. You retain ownership of documents you provide. We
        do not claim copyright in your legal papers.
      </p>
      <p>
        If you send us comments or suggestions about our operations, you grant
        us a royalty-free right to use that feedback to improve our services.
        This is not an assignment of your documents.
      </p>
      <p>
        If you believe material on this website infringes a copyright, send a
        notice that meets 17 U.S.C. § 512(c)(3) to {site.email}. This website
        does not host user-posted content, so most DMCA issues will not arise
        here.
      </p>

      <h2 id="disclaimers">15. Disclaimers</h2>
      <p>
        The website is provided as is and as available. We do not warrant that
        it will be uninterrupted, error-free, or free of harmful code. Website
        information (including service descriptions and hours) may change.
      </p>
      <p>
        For notarial services, we warrant that commissioned notaries associated
        with us will perform authorized notarial acts in accordance with New
        York law. We do not warrant the legal effect of your document, the
        accuracy of documents prepared by others, third-party acceptance,
        recording, or the outcome of any transaction.
      </p>
      <p>
        To the maximum extent New York law allows, we disclaim implied
        warranties of merchantability and fitness for a particular purpose. Some
        warranties cannot be disclaimed for consumers. Those remain.
      </p>

      <h2 id="liability">16. Limitation of liability</h2>
      <p>
        Nothing in these Terms limits liability that New York law does not
        allow us to limit. That includes, as applicable, our own fraud, willful
        misconduct, or gross negligence, and claims under General Business Law
        §§ 349 and 350 or other non-waivable consumer protections.
      </p>
      <p>
        Subject to the paragraph above:
      </p>
      <ul>
        <li>
          We are not liable for indirect, incidental, special, consequential, or
          lost-profit damages, or for the failure of a document to accomplish
          your intended legal or business result.
        </li>
        <li>
          For claims about the website alone, our total liability is limited to
          $100.
        </li>
        <li>
          For claims about an appointment or related service, our total
          liability is limited to the amount you paid us for that appointment.
        </li>
      </ul>
      <p>
        These limits allocate risk so that statutory notarial fees can remain
        low. They apply even if a remedy fails of its essential purpose, except
        where New York law says otherwise.
      </p>

      <h2 id="indemnity">17. Responsibility for certain losses</h2>
      <p>
        To the extent New York law allows, you will reimburse us for
        reasonably foreseeable losses, including reasonable attorneys’ fees,
        that we incur because you (a) provided false identification or false
        booking information, (b) requested a notarial act you knew was
        fraudulent, backdated, or otherwise unlawful, or (c) used the website
        in violation of section 4. This does not require you to pay for losses
        caused by our own negligence, gross negligence, or willful misconduct,
        and it does not apply to the extent a consumer-protection statute
        prohibits it.
      </p>

      <h2 id="disputes">18. Disputes and New York law</h2>
      <p>
        These Terms and any dispute arising out of the website or our services
        are governed by the laws of the State of New York, without regard to
        conflict-of-law rules that would choose another state’s law.
      </p>
      <p>
        Before filing a lawsuit, you agree to email {site.email} with a short
        description of the issue and to allow 30 days for a good-faith attempt
        to resolve it, except where delay would cause irreparable harm or where
        a statute requires faster action (including data-breach and certain
        consumer claims). This informal step does not limit your right to
        complain to the New York Department of State, the New York Attorney
        General, or any other government agency.
      </p>
      <p>
        You and we agree that the state courts located in New York County, New
        York, or the United States District Court for the Southern District of
        New York, are the exclusive venue for court proceedings, except that
        either party may bring a small-claims case in any New York small-claims
        court that has legal authority over the dispute. We do not require
        mandatory consumer arbitration.
      </p>
      <p>
        These Terms do not require you to waive a jury trial, a class action, or
        any remedy that New York law makes non-waivable. If a court finds a
        provision unenforceable, the rest of the Terms still apply, and the
        invalid provision will be modified only as much as needed to make it
        enforceable.
      </p>
      <p>
        A failure to enforce a provision is not a waiver. These Terms do not
        create rights for third parties except commissioned notaries and
        personnel performing services for {site.legalName}, who may rely on the
        disclaimers and limits that protect them.
      </p>

      <h2 id="changes">19. Changes</h2>
      <p>
        We may update these Terms. The effective date above will change when we
        do. For a material change, we will post the updated Terms on this page
        at least 30 days before they take effect, and we will email you if we
        have an email address for an upcoming or recent appointment. Changes do
        not apply retroactively to a completed appointment unless a law
        requires it. If you do not agree to a change, stop using the website
        and do not book new services.
      </p>

      <h2 id="contact">20. Contact</h2>
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
        Notary-commission complaints may be directed to the{" "}
        <a
          href="https://dos.ny.gov/notary-public"
          target="_blank"
          rel="noopener noreferrer"
        >
          New York Department of State
        </a>
        . Consumer complaints may also be directed to the{" "}
        <a href="https://ag.ny.gov/" target="_blank" rel="noopener noreferrer">
          New York Attorney General
        </a>
        . Using those agencies is in addition to, not instead of, your legal
        rights.
      </p>
    </LegalDoc>
  );
}
