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
        } else {
          console.error("Error fetching dev.to posts");
        }
      } catch (error) {
        console.error("Error fetching dev.to posts", error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className={`Posts   text-[var(--headline)] `}>
      <p className="  text-[var(--headline)]">{t("Posts.LatestPosts")} </p>

      <div className="dev-to-posts">
        {isLoading ? (
          <div className="post-container flex flex-col gap-5 my-5 ">
            {posts.map((post, index) => (
              <div
                key={index}
                className={`post-card ${
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
                  <div className="postShow flex justify-between w-full">
                    <div className="post-date w-[20%]">
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
        ) : (
          <PostsSkeleton />
        )}
      </div>
    </div>
  );
};

export default Posts;
