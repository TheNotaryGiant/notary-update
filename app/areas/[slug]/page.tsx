import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AreaPage } from "@/components/AreaPage";
import { JsonLd } from "@/components/JsonLd";
import { areaDescription, areaHeading, areaJsonLd, areaFaqs, areaPhoto } from "@/lib/area-copy";
import { areas, getArea } from "@/lib/areas";
import { pageMeta } from "@/lib/page-meta";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return areas.map((area) => ({ slug: area.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const area = getArea(slug);
  if (!area) {
    return {};
  }

  const image = areaPhoto(area);

  return pageMeta({
    title: areaHeading(area),
    description: areaDescription(area),
    path: `/areas/${area.slug}`,
    image,
  });
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const area = getArea(slug);
  if (!area) {
    notFound();
  }

  return (
    <>
      <JsonLd data={areaJsonLd(area, areaFaqs(area))} />
      <AreaPage area={area} />
    </>
  );
}
