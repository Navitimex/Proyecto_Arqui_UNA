import { buildPageMetadata } from "@/data/seo";

export const metadata = buildPageMetadata("/comunidad/sobrepasos");

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
