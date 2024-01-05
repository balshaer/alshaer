import { Skeleton } from "../ui/skeleton";

export default function ProjectsSkeleton() {
  return (
<>
<Skeleton className="w-[200px] h-[20px]" />
                  <Skeleton className="w-[100px] h-[16px]" />

                  <Skeleton className="text-xl font-semibold text-[var(--headline)] w-full h-[10px]" />
                  <Skeleton className="text-xl font-semibold text-[var(--headline)] w-full h-[10px]" />

<div className="flex flex-row flex-wrap items-start justify-start gap-3 w-full">

<Skeleton className="text-xl font-semibold text-[var(--headline)] w-15 h-[20px]" />
<Skeleton className="text-xl font-semibold text-[var(--headline)] w-15 h-[20px]" />
<Skeleton className="text-xl font-semibold text-[var(--headline)] w-10 h-[20px]" />
<Skeleton className="text-xl font-semibold text-[var(--headline)] w-12 h-[20px]" />
<Skeleton className="text-xl font-semibold text-[var(--headline)] w-16 h-[20px]" />


</div>


</>
  )
}
