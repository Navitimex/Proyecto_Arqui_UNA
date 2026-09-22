import { buildPageMetadata } from "@/data/seo";

export const metadata = buildPageMetadata("/la-escuela/historia");

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
