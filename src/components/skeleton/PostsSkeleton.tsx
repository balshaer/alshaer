import { Skeleton } from "@/components/ui/skeleton";

export default function PostsSkeleton() {
  return (
<>

<div className="flex gap-3 mt-5">
      <Skeleton className="w-[50px] h-[20px]" />


      <div className="flex gap-2 flex-col">
        <Skeleton className="w-[500px] h-[20px]   max-md:w-[200px]" />
        <Skeleton className="w-[500px] h-[20px]   max-md:w-[200px]" />

      </div>
    </div>


    
    <div className="flex gap-3 mt-5">
      <Skeleton className="w-[50px] h-[20px]" />


      <div className="flex gap-2 flex-col">
        <Skeleton className="w-[500px] h-[20px]   max-md:w-[200px]" />
        <Skeleton className="w-[500px] h-[20px]   max-md:w-[200px]" />

      </div>
    </div>

    
</>

  );
}
