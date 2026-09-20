import {
  Cormorant_Garamond,
  IBM_Plex_Sans,
  Libre_Baskerville,
} from "next/font/google";

/** Letterhead. Hero and section titles only. */
export const displayFont = Cormorant_Garamond({
  weight: ["600", "700"],
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
});

/**
 * Apparatus: nav, labels, buttons, kickers.
 * 400 = meta, 500 = wayfinding, 600 = actions.
 */
export const interfaceFont = IBM_Plex_Sans({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-plex",
  display: "swap",
});

/**
 * The document face — body, bios, FAQ, quotes.
 * 400 = copy, 700 = emphasis, italic = testimony.
 */
export const readingFont = Libre_Baskerville({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-baskerville",
  display: "swap",
});

export const fontVariables = `${displayFont.variable} ${interfaceFont.variable} ${readingFont.variable}`;
