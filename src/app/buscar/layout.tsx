import { buildPageMetadata } from "@/data/seo";

export const metadata = buildPageMetadata("/buscar");

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
