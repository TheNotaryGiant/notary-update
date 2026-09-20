import { Button } from "@/components/ui/Button";

type ServicePageProps = {
  kicker: string;
  title: string;
  body: string;
};

export function ServicePage({ kicker, title, body }: ServicePageProps) {
  return (
    <div className="workspace-page">
      <header className="page-head">
        <div>
          <p className="kicker">{kicker}</p>
          <h1 className="headline">{title}</h1>
        </div>
        <Button intent="book">Book an Appointment</Button>
      </header>
      <section className="panel panel--wide">
        <p className="reading-lg">{body}</p>
        <div className="saas-hero__actions">
          <Button intent="book">Book an Appointment</Button>
          <Button intent="learn" href="/">
            Back to overview
          </Button>
        </div>
      </section>
    </div>
  );
}
