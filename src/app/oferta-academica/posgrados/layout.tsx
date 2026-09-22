import { buildPageMetadata } from "@/data/seo";

export const metadata = buildPageMetadata("/oferta-academica/posgrados");

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
