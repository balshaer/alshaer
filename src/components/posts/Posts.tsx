import { t } from "i18next";
import React, { useEffect, useState } from "react";
import PostsSkeleton from "../skeleton/PostsSkeleton";

interface Post {
  title: string;
  link: string;
  pubDate: string;
}

interface PostsProps {}

const Posts: React.FC<PostsProps> = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const rssFeedUrl = "https://dev.to/feed/baraa";
        const response = await fetch(
          `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(
            rssFeedUrl
          )}`
        );

        if (response.ok) {
          const data = await response.json();
          setPosts(data.items);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="Posts flex items-center flex-col justify-start">
      <div className="w-full flex  justify-start items-center py-4 text-[var(--headline)] text-2xl font-bold">
        <h1>{t("Posts.LatestPosts")}</h1>
      </div>

      <div className="dev-to-posts h-[300px] w-full flex  wf     ">
        {isLoading ? (
          <PostsSkeleton />
        ) : (
          <div className="post-container flex flex-col w-full   my-5 gap-5  ">
            {posts.map((post, index) => (
              <div
                key={index}
                className={`post-card  text-[var(--paragraph)] w-[100%] h-[45px] ${
                  hoveredIndex !== null && hoveredIndex !== index ? "fade" : ""
                }`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <a
                  className="post-link "
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="postShow flex justify-start w-full gap-8 text-base">
                    <div className="post-date  opacity-60">
                      {new Date(post.pubDate).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "2-digit",
                      })}
                    </div>
                    <p className="post-title w-[80%] ">{post.title}</p>
                  </div>
                </a>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Posts;
