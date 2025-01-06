import { cn } from "@/lib/utils";

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "animate-pulse rounded-[10px] bg-[var(--card-border-color)]",
        className,
      )}
      {...props}
    />
  );
}

export { Skeleton };
