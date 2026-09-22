import { buildPageMetadata } from "@/data/seo";

export const metadata = buildPageMetadata("/la-escuela/acreditacion");

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
