import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

export default function NotFound() {
  return (
    <div className="container state-page">
      <p className="eyebrow accent">404 / A SMALL DETOUR</p>
      <div className="error-number" aria-hidden="true">
        4<span>0</span>4
      </div>
      <h1>This path leads somewhere else.</h1>
      <p>
        The page you’re looking for doesn’t exist. There’s still plenty to
        explore.
      </p>
      <div className="state-actions">
        <Link href="/" className="button button-primary">
          <ArrowLeft size={17} aria-hidden="true" />
          Back home
        </Link>
        <Link href="/projects" className="text-link">
          Explore the work <ArrowUpRight size={17} aria-hidden="true" />
        </Link>
      </div>
    </div>
  );
}
