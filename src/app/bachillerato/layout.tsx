import { buildPageMetadata } from "@/data/seo";

export const metadata = buildPageMetadata("/bachillerato");

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
