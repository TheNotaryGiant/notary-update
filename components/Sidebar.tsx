"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { media, nav, site } from "@/lib/site";

export function Sidebar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.classList.toggle("nav-open", open);
    return () => document.body.classList.remove("nav-open");
  }, [open]);

  return (
    <>
      <header className="mobile-bar">
        <a href="/" className="site-logo">
          <img src={media.logo} alt={site.name} width={56} height={56} />
        </a>
        <button
          type="button"
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="site-sidebar"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </header>

      <div
        className="sidebar-backdrop"
        hidden={!open}
        onClick={() => setOpen(false)}
      />

      <aside id="site-sidebar" className="sidebar">
        <a href="/" className="site-logo sidebar__brand">
          <img src={media.logo} alt="" width={72} height={72} />
          <span>
            <strong>{site.name}</strong>
            <em>NYC Notary</em>
          </span>
        </a>

        <nav className="sidebar__nav" aria-label="Primary">
          {nav.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname === item.href || pathname.startsWith(`${item.href}/`);

            return (
              <a
                key={item.href}
                href={item.href}
                className={active ? "is-active" : undefined}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        <div className="sidebar__actions">
          <Button intent="book" className="btn-block">
            Book an Appointment
          </Button>
          <Button intent="call" className="btn-block">
            {site.phoneDisplay}
          </Button>
        </div>
      </aside>
    </>
  );
}
