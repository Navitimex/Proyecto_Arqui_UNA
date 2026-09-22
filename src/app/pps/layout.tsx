import { buildPageMetadata } from "@/data/seo";

export const metadata = buildPageMetadata("/pps");

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
