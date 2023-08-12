import React, { useEffect, useState } from "react";
import "./DevToPosts.css";
import { motion } from "framer-motion";
import { t } from "i18next";

interface DevToPost {
  title: string;
  link: string;
  content: string;
  pubDate: string;
}

const DevToPosts: React.FC = () => {
  const [posts, setPosts] = useState<DevToPost[]>([]);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

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
    <div className="dev-to-posts">
      <p className="lastBlogs">{t('Latest Posts')}</p>
      <div className="post-container">
        {posts.map((post, index) => (
          <div
            key={index}
            className={`post-card ${hoveredIndex !== null && hoveredIndex !== index ? "fade" : ""}`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <a
              className="post-link"
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="postShow">
              <div className="post-date">
  {new Date(post.pubDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: '2-digit'
  })}
</div>

                <p className="post-title">{post.title}</p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DevToPosts;
