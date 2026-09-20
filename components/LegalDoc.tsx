import type { ReactNode } from "react";

type TocItem = {
  id: string;
  label: string;
};

type LegalDocProps = {
  kicker: string;
  title: string;
  effectiveDate: string;
  lede: ReactNode;
  keyPoints: ReactNode;
  toc: TocItem[];
  children: ReactNode;
};

export function LegalDoc({
  kicker,
  title,
  effectiveDate,
  lede,
  keyPoints,
  toc,
  children,
}: LegalDocProps) {
  return (
    <article className="legal">
      <p className="kicker">{kicker}</p>
      <h1 className="headline" id="legal-title">
        {title}
      </h1>
      <p className="meta">Effective {effectiveDate}</p>
      <div className="legal__lede reading">{lede}</div>

      <section className="legal__key" aria-labelledby="legal-key-points">
        <h2 id="legal-key-points">Key points</h2>
        {keyPoints}
      </section>

      <nav className="legal__toc" aria-labelledby="legal-toc-heading">
        <h2 className="title" id="legal-toc-heading">
          Contents
        </h2>
        <ol>
          {toc.map((item) => (
            <li key={item.id}>
              <a href={`#${item.id}`}>{item.label}</a>
            </li>
          ))}
        </ol>
      </nav>

      <div className="legal__body reading">{children}</div>
    </article>
  );
}
