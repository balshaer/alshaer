import { Skeleton } from "@/components/ui/skeleton";

const PostSkeleton = () => {
  return (
    <div
      dir="ltr"
      className="post-card flex-col justify-between text-[var(--paragraph)] w-[100%] h-[150px] max-md:h-max max-md:gap-7 post border-[#323a4d] border max-w-3xl p-4 rounded-lg flex items-start"
    >
      <div className="flex gap-4 flex-col">
        <Skeleton className="w-[100px] h-[20px] rounded-full bg-[var(--skeleton-color)] " />
        <Skeleton className=" w-[400px] h-[20px] rounded-full bg-[var(--skeleton-color)] max-md:w-16 " />
      </div>

      <div className="flex gap-2">
        <Skeleton className="w-[50px] h-[20px] rounded-full bg-[var(--skeleton-color)] " />
        <Skeleton className="w-[70px] h-[20px] rounded-full bg-[var(--skeleton-color)] " />
        <Skeleton className="w-[70px] h-[20px] rounded-full bg-[var(--skeleton-color)] " />
        <Skeleton className="w-[50px] h-[20px] rounded-full bg-[var(--skeleton-color)] " />
      </div>
    </div>
  );
};

export default function PostLoading() {
  return (
    <div className="w-full h-full flex gap-4 flex-col">
      <PostSkeleton />
      <PostSkeleton />
      <PostSkeleton />
    </div>
  );
}
