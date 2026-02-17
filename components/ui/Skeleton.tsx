interface SkeletonProps {
  className?: string;
  height?: string;
  width?: string;
  rounded?: string;
}

export function Skeleton({
  className = "",
  height = "h-4",
  width = "w-full",
  rounded = "rounded",
}: SkeletonProps) {
  return (
    <div
      className={`skeleton ${height} ${width} ${rounded} ${className}`}
      aria-hidden="true"
    />
  );
}

export function ProductCardSkeleton() {
  return (
    <div className="bg-white/5 rounded-2xl overflow-hidden border border-white/10">
      <Skeleton height="h-56" rounded="rounded-none" />
      <div className="p-6 space-y-3">
        <Skeleton height="h-6" width="w-2/3" />
        <Skeleton height="h-4" />
        <Skeleton height="h-4" width="w-4/5" />
        <Skeleton height="h-10" width="w-32" className="mt-4" rounded="rounded-lg" />
      </div>
    </div>
  );
}
