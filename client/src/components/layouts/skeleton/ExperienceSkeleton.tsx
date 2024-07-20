import { Skeleton } from "@/core/components/ui/skeleton";

export default function ExperienceSkeleton() {
  const skeletonStyles = {
    width: "200px",
    height: "20px"
  };

  return (
    <>
      <Skeleton style={skeletonStyles} />
      <Skeleton style={{ width: "100px", height: "10px" }} />
      <Skeleton style={{ width: "100px", height: "10px" }} />
      <Skeleton style={{ width: "80px", height: "10px" }} />

      <div className="flex gap-2">
        {[...Array(4)].map((_, index) => (
          <Skeleton key={index} style={{ width: "30px", height: "20px" }} />
        ))}
      </div>
    </>
  );
}
