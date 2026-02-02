export function Skeleton({ className }: { className?: string }) {
  return (
    <div
      className={`animate-pulse bg-muted rounded-md ${className || ""}`.trim()}
      aria-busy="true"
      aria-label="Cargando..."
    />
  );
}
