import { buildPageMetadata } from "@/data/seo";

export const metadata = buildPageMetadata("/investigacion/laboratorios/bases-datos");

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
