import type { Metadata } from "next";
import { site } from "@/lib/site";

export function pageMeta({
  title,
  description,
  path,
  image,
}: {
  title: string | { absolute: string };
  description: string;
  path: string;
  image?: string;
}): Metadata {
  const socialTitle =
    typeof title === "string" ? `${title} | ${site.name}` : title.absolute;

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: socialTitle,
      description,
      url: path,
      type: "website",
      ...(image ? { images: [{ url: image, alt: socialTitle }] } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      ...(image ? { images: [image] } : {}),
    },
  };
}
