import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function Footer({ name }: { name: string }) {
  return (
    <footer className="site-footer container">
      <p>
        © {new Date().getFullYear()} {name}
        <span className="footer-dot">·</span>Built with care & Next.js.
      </p>
      <nav aria-label="Footer navigation">
        <Link href="/projects">All projects</Link>
        <Link href="/#contact">Contact</Link>
        <a href="#top">
          Back to top <ArrowUpRight size={14} aria-hidden="true" />
        </a>
      </nav>
    </footer>
  );
}
