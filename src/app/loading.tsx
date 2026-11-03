export default function Loading() {
  return (
    <div
      className="container loading-page"
      role="status"
      aria-label="Loading page"
    >
      <span className="eyebrow accent">GETTING THINGS READY</span>
      <div className="skeleton skeleton-title" />
      <div className="skeleton skeleton-subtitle" />
      <div className="skeleton skeleton-panel" />
      <span className="sr-only">Loading portfolio content…</span>
    </div>
  );
}
