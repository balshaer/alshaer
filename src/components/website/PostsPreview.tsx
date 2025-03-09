"use client";

import { Globe, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

import React from "react";
import { Skeleton } from "@/components/ui/skeleton";
import ReusableCard from "../common/ReusableCard";

export default function PostsPreview() {
  const direction = "en";

  const styles = {
    breadcrumbLink: "hover:text-[var(--paragraph)] hoverd",
    arrowIcon:
      "text-[var(--paragraph)] text-3xl hoverd hover:text-[var(--link-color)] cursor-pointer ml-[-16px] max-md:ml-[-8px]",
    linkStyle:
      "flex items-center justify-center gap-1 text-sm text-[var(--headline)] opacity-70 hoverd hover:opacity-100",
  };

  const isValidLink = (link: string | undefined) => {
    return link && link.trim() !== "" && link !== "#";
  };

  const [posts, setPosts] = React.useState<any[]>([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(
          "https://dev.to/api/articles?username=baraa"
        );
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      dir={direction}
      className="posts  flex min-h-[100vh] w-full flex-col gap-5 max-md:pb-0 max-md:pt-[50px]"
    >
      <div className="flex flex-col items-center justify-center gap-8 ">
        {loading
          ? Array(3)
              .fill(null)
              .map((_, index) => (
                <div key={index} className="w-full">
                  <Skeleton className="mb-4 h-48" />
                  <Skeleton className="mb-2 h-8" />
                  <Skeleton className="mb-2 h-6" />
                  <Skeleton className="h-10" />
                </div>
              ))
          : // Show posts once data is fetched
            posts.map((post: any) => (
              <ReusableCard
                key={post.id}
                id={post.id}
                title={post.title}
                description={post.description}
                skills={Array.isArray(post.tags) ? post.tags : []}
                websiteLink={post.url}
                githubLink={post.github_url}
                linkStyle={styles.linkStyle}
                className="pb-4 pt-2"
                dir={direction}
                coverImg={
                  post.cover_image ||
                  "https://images.prismic.io/loco-blogs/79328284-f97b-489f-924c-eb3b17e34b56_image2.png?auto=compress%2Cformat&rect=0%2C0%2C1999%2C1124&w=1920&fit=max"
                } // Passing image URL as 'img' prop
              >
                <div className="flex max-w-[60%] flex-wrap gap-2 max-md:mb-0 max-md:mt-4 max-md:max-w-full">
                  {Array.isArray(post.tags) && post.tags.length > 0 ? (
                    post.tags.map((tag: string, tagIndex: number) => (
                      <Badge key={tagIndex}>{tag}</Badge>
                    ))
                  ) : (
                    <span>No tags available</span>
                  )}
                </div>

                <div className="flex flex-wrap gap-4 max-md:mt-5">
                  {isValidLink(post.url) && (
                    <a
                      href={post.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.linkStyle}
                    >
                      <span>
                        <Globe className="h-4 w-4" />
                      </span>
                      <span>Visit Website</span>
                    </a>
                  )}

                  {isValidLink(post.github_url) && (
                    <a
                      href={post.github_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.linkStyle}
                    >
                      <span>
                        <Github className="h-4 w-4" />
                      </span>
                      <span>Visit Github</span>
                    </a>
                  )}
                </div>
              </ReusableCard>
            ))}
      </div>
    </motion.div>
  );
}
