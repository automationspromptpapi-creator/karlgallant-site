import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Systems Blueprint | Karl Gallant",
  description:
    "Get a complete visual map of your operations and a prioritized roadmap showing you exactly what to automate first. $150 diagnostic that pays for itself.",
  openGraph: {
    title: "Systems Blueprint | Karl Gallant",
    description:
      "Finally see exactly where your business is bleeding time and money. Get a visual systems map and prioritized automation roadmap.",
    type: "website",
  },
};

export default function BlueprintLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
