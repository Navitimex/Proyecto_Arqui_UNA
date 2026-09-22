import { buildPageMetadata } from "@/data/seo";

export const metadata = buildPageMetadata("/la-escuela/autoevaluacion");

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
