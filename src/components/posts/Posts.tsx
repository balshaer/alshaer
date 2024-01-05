import { t } from "i18next";
import ParagraphComponent from "../text/ParagraphComponent";
import React, { useEffect, useState } from "react";

interface Post {
  title: string;
  link: string;
  pubDate: string;
}

interface PostsProps {}

const Posts: React.FC<PostsProps> = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const animate = "animate__animated animate__fadeIn animate__slow";
 
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
    <div className={`Posts text-sm text-[var(--headline)] ${animate}`}>
      
      <ParagraphComponent text={t("Posts.LatestPosts")} />

      <div className="dev-to-posts">
        <div className="post-container flex flex-col gap-10 my-5 ">
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
      </div>
    </div>
  );
};

export default Posts;
