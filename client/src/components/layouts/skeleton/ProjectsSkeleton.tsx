import { Skeleton } from "@/core/components/ui/skeleton";

export default function ProjectsSkeleton() {
  return (
    <>
      <Skeleton className="w-[200px] h-[20px]" />
      <Skeleton className="w-[100px] h-[16px]" />

      <Skeleton className=" w-full h-[10px]" />
      <Skeleton className=" w-full h-[10px]" />

      <div className="flex gap-2">
        <Skeleton className=" w-[20px] h-[20px]" />
        <Skeleton className=" w-15 h-[20px]" />
        <Skeleton className=" w-10 h-[20px]" />
        <Skeleton className=" w-12 h-[20px]" />
        <Skeleton className=" w-16 h-[20px]" />
      </div>
    </>
  );
}
