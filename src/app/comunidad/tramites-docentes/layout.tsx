import { buildPageMetadata } from "@/data/seo";

export const metadata = buildPageMetadata("/comunidad/tramites-docentes");

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
