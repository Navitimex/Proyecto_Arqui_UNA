import { buildPageMetadata } from "@/data/seo";

export const metadata = buildPageMetadata("/comunidad/bolsa-empleo");

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
