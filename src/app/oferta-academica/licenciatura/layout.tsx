import { buildPageMetadata } from "@/data/seo";

export const metadata = buildPageMetadata("/oferta-academica/licenciatura");

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
