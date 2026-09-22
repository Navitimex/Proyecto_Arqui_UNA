import { buildPageMetadata } from "@/data/seo";

export const metadata = buildPageMetadata("/investigacion/actividades");

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
