"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type MouseEvent,
} from "react";
import { Button } from "@/components/ui/Button";
import { media, nav, site } from "@/lib/site";

function activeHrefFromLocation(pathname: string, hash: string) {
  if (pathname === "/contact" || pathname.startsWith("/contact/")) {
    return "/contact";
  }

  if (pathname === "/areas" || pathname.startsWith("/areas/")) {
    return "/areas";
  }

  if (pathname !== "/") {
    return null;
  }

  const id = hash.replace(/^#/, "");
  if (id) {
    const match = nav.find((item) => item.href === `/#${id}`);
    if (match) {
      return match.href;
    }
  }

  return "/";
}

function isModifiedClick(event: MouseEvent<HTMLAnchorElement>) {
  return (
    event.metaKey ||
    event.ctrlKey ||
    event.shiftKey ||
    event.altKey ||
    event.button !== 0
  );
}

export function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [activeHref, setActiveHref] = useState<string | null>(() =>
    pathname === "/contact"
      ? "/contact"
      : pathname === "/areas" || pathname.startsWith("/areas/")
        ? "/areas"
        : pathname === "/"
          ? "/"
          : null,
  );
  const navRef = useRef<HTMLElement>(null);
  const itemRefs = useRef<Record<string, HTMLAnchorElement | null>>({});
  const [indicator, setIndicator] = useState({ y: 0, h: 0, on: false });

  const syncFromLocation = () => {
    setActiveHref(
      activeHrefFromLocation(window.location.pathname, window.location.hash),
    );
  };

  useEffect(() => {
    setOpen(false);
    syncFromLocation();
  }, [pathname]);

  useEffect(() => {
    window.addEventListener("hashchange", syncFromLocation);
    window.addEventListener("popstate", syncFromLocation);
    return () => {
      window.removeEventListener("hashchange", syncFromLocation);
      window.removeEventListener("popstate", syncFromLocation);
    };
  }, []);

  useEffect(() => {
    document.body.classList.toggle("nav-open", open);
    return () => document.body.classList.remove("nav-open");
  }, [open]);

  useLayoutEffect(() => {
    if (!activeHref) {
      setIndicator((current) => ({ ...current, on: false }));
      return;
    }

    const link = itemRefs.current[activeHref];
    if (!link || !navRef.current) {
      setIndicator((current) => ({ ...current, on: false }));
      return;
    }

    setIndicator({
      y: link.offsetTop,
      h: link.offsetHeight,
      on: true,
    });
  }, [activeHref, open]);

  const goTo = (href: string) => {
    setActiveHref(href);
    setOpen(false);

    if (href === "/") {
      if (pathname === "/") {
        window.history.pushState(null, "", "/");
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }
      router.push("/");
      return;
    }

    const hash = href.includes("#") ? href.slice(href.indexOf("#") + 1) : "";
    if (hash) {
      if (pathname === "/") {
        window.history.pushState(null, "", href);
        document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
        return;
      }
      router.push(href);
      return;
    }

    router.push(href);
  };

  const onNavClick = (
    event: MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    if (isModifiedClick(event)) {
      setOpen(false);
      return;
    }

    event.preventDefault();
    goTo(href);
  };

  return (
    <>
      <header className="mobile-bar">
        <Link href="/" className="site-logo" onClick={(event) => onNavClick(event, "/")}>
          <img src={media.logo} alt={site.name} width={56} height={56} />
        </Link>
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
        <Link
          href="/"
          className="site-logo sidebar__brand"
          onClick={(event) => onNavClick(event, "/")}
        >
          <img src={media.logo} alt="" width={72} height={72} />
          <span>
            <strong>{site.name}</strong>
            <em>NYC Notary</em>
          </span>
        </Link>

        <nav className="sidebar__nav" aria-label="Primary" ref={navRef}>
          <div
            className="sidebar__indicator"
            aria-hidden="true"
            style={{
              transform: `translateY(${indicator.y}px)`,
              height: indicator.h,
              opacity: indicator.on ? 1 : 0,
            }}
          />
          {nav.map((item) => {
            const active = activeHref === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                ref={(node) => {
                  itemRefs.current[item.href] = node;
                }}
                className={active ? "is-active" : undefined}
                aria-current={active ? "page" : undefined}
                onClick={(event) => onNavClick(event, item.href)}
              >
                {item.label}
              </Link>
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
