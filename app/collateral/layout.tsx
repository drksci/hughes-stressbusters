import type { ReactNode } from "react";
import { DocsLayout } from "fumadocs-ui/layouts/docs";

const tree = {
  name: "Stress Busters",
  children: [
    { type: "page", name: "Overview", url: "/" },
    { type: "page", name: "Collateral", url: "/collateral" },
  ],
};

export default function CollateralLayout({ children }: { children: ReactNode }) {
  return <DocsLayout tree={tree as any} nav={{ title: "HUGHES / SB" }}>{children}</DocsLayout>;
}
