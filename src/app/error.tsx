"use client";

import Link from "next/link";
import { RotateCcw } from "lucide-react";

export default function ErrorPage({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="container state-page" role="alert">
      <p className="eyebrow accent">AN UNEXPECTED INTERRUPTION</p>
      <h1>A little debugging is in order.</h1>
      <p>
        Something went wrong while loading this page. Try again, or head back
        home.
      </p>
      <div className="state-actions">
        <button type="button" onClick={reset} className="button button-primary">
          Try again <RotateCcw size={17} aria-hidden="true" />
        </button>
        <Link href="/" className="text-link">
          Back home
        </Link>
      </div>
    </div>
  );
}
