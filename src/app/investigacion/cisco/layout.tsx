import { buildPageMetadata } from "@/data/seo";

export const metadata = buildPageMetadata("/investigacion/cisco");

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
