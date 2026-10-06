import { site } from "@/lib/site";
import { Button } from "@/components/ui/Button";

export function Footer() {
  return (
    <footer className="site-footer">
      <p className="meta">
        © {new Date().getFullYear()} {site.legalName}
      </p>
      <p className="meta">{site.location} · {site.hours}</p>
      <p className="site-footer__links">
        <Button intent="quiet" href="/areas" size="sm">
          Service Areas
        </Button>
        <Button intent="quiet" href="/newsroom" size="sm">
          Newsroom
        </Button>
        <Button intent="quiet" href="/privacy-policy" size="sm">
          Privacy Policy
        </Button>
        <Button intent="quiet" href="/terms-of-use" size="sm">
          Terms of Use
        </Button>
      </p>
      <p className="site-footer__disclaimer meta">
        {site.name} is not a law firm. Commissioned notaries associated with us
        are not attorneys licensed to practice law and may not give legal advice
        about immigration or any other legal matter or accept fees for legal
        advice.
      </p>
    </footer>
  );
}
