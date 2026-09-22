import { buildPageMetadata } from "@/data/seo";

export const metadata = buildPageMetadata("/comunidad/empleo-docente");

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
