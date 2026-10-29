export const metadata = {
  title: "Blog | The Notary Giant",
  description:
    "Insights from The Notary Giant, a New York notary service serving the five boroughs and Nassau County.",
};

export default function BlogPage() {
  return (
    <main>
      <h1>Blog</h1>
      <p>
        Insights from The Notary Giant, a New York notary service serving
        the five boroughs and Nassau County.
      </p>

      <section>
        <h2>What to bring to a notary appointment</h2>
        <p>
          Bring a valid, unexpired photo ID and the complete, unsigned
          document. Do not sign the document before the appointment — the
          notary must witness your signature.
        </p>
      </section>

      <section>
        <h2>Mobile notary services</h2>
        <p>
          A mobile notary can meet you at your home, office, or another
          convenient location, instead of you travelling to an office.
        </p>
      </section>

      <section>
        <h2>Apostille assistance</h2>
        <p>
          Apostille authentication certifies a document for use abroad.
          Ask us about the steps and timing for the document you need
          authenticated.
        </p>
      </section>

      <p>
        <a href="/contact">Contact us</a> to book a notary appointment.
      </p>
    </main>
  );
}
