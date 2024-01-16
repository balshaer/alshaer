import { Skeleton } from "@/components/ui/skeleton";

export default function ExperienceSkeleton() {
  return (
    <>
      <Skeleton className="w-[200px] h-[20px]" />
      <Skeleton className="w-[100px] h-[10px]" />
      <Skeleton className="w-[100px] h-[10px]" />
      <Skeleton className="w-[80px] h-[10px]" />

      <div className="flex gap-2">
        <Skeleton className="w-[30px] h-[20px]" />
        <Skeleton className="w-[30px] h-[20px]" />
        <Skeleton className="w-[30px] h-[20px]" />
        <Skeleton className="w-[30px] h-[20px]" />
      </div>
    </>
  );
}
