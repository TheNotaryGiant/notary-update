import Link from "next/link";
import { cn } from "@/lib/cn";
import { site } from "@/lib/site";

/**
 * Four intents. Color, label, and destination must agree.
 *
 * book  — gold fill (10%). Starts a booking. Goes to the form.
 * call  — ivory fill (30%). Places a phone call. Always tel:.
 * learn — gold outline. Continues reading. Goes to a page.
 * quiet — no chrome. Wayfinding only. Never competes with book or call.
 */
export type ButtonIntent = "book" | "call" | "learn" | "quiet";
export type ButtonSize = "sm" | "md" | "lg";

type ButtonProps = {
  intent: ButtonIntent;
  size?: ButtonSize;
  href?: string;
  type?: "button" | "submit";
  className?: string;
  children: React.ReactNode;
};

const defaults: Record<ButtonIntent, string | undefined> = {
  book: "/contact#form",
  call: site.phoneTel,
  learn: undefined,
  quiet: undefined,
};

export function Button({
  intent,
  size = "md",
  href,
  type = "button",
  className,
  children,
}: ButtonProps) {
  const resolved = href ?? defaults[intent];
  const classes = cn("btn", `btn-${intent}`, `btn-${size}`, className);

  if (intent === "call" && resolved && !resolved.startsWith("tel:")) {
    throw new Error("call buttons must use a tel: href");
  }

  if (intent === "book" && resolved?.startsWith("tel:")) {
    throw new Error("book buttons start a booking, not a call");
  }

  if (intent === "learn" && !resolved) {
    throw new Error("learn buttons need a page href");
  }

  if (resolved) {
    const isHashOrTel =
      resolved.startsWith("tel:") ||
      resolved.startsWith("mailto:") ||
      resolved.includes("#");

    if (isHashOrTel) {
      return (
        <a className={classes} href={resolved}>
          {children}
        </a>
      );
    }

    return (
      <Link className={classes} href={resolved}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes}>
      {children}
    </button>
  );
}
