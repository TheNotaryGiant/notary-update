import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Sidebar } from "@/components/Sidebar";
import { fontVariables } from "@/lib/fonts";
import { media } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "The Notary Giant® | Mobile Notary & Apostille Services NYC",
    template: "%s | The Notary Giant®",
  },
  description:
    "The Notary Giant® provides professional mobile notary, electronic notarization, loan signing and apostille assistance throughout NYC and surrounding areas.",
  icons: {
    icon: media.favicon,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${fontVariables} h-full antialiased`}>
      <body className="min-h-full site-shell">
        <Sidebar />
        <div className="workspace">
          <main id="main">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
