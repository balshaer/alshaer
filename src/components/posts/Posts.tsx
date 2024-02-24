import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { useTranslation } from "react-i18next";
import { HiNewspaper } from "react-icons/hi2";
import PostLoading from "../loading/PostLoading";

interface Post {
  title: string;
  link: string;
  pubDate: string;
  categories: string[];
}

const Posts: React.FC = () => {
  const { t } = useTranslation();
  const [posts, setPosts] = useState<Post[]>([]);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true);
      try {
        const rssFeedUrl = "https://dev.to/feed/baraa";
        const response = await fetch(
          `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(
            rssFeedUrl
          )}`
        );

        if (response.ok) {
          const data = await response.json();
          setPosts(
            data.items.map((item: any) => ({
              title: item.title,
              link: item.link,
              pubDate: item.pubDate,
              categories: item.categories,
            }))
          );
        }
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="Posts flex items-center flex-col justify-start w-full">
      <div className="text-[var(--headline)] flex items-center gap-2 text-base opacity-90 w-full">
        <span>
          <HiNewspaper />
        </span>

        <span>{t("Public.ExploreAll")}</span>
      </div>

      <div data-aos="fade-up" className="dev-to-posts h-full w-full flex">
        <div className="cards  max-md:w-full min-h-[100px] flex flex-col gap-5 py-5 w-full">
          {isLoading && <PostLoading />}

          {posts.map((post, index) => (
            <div
              dir="ltr"
              key={index}
              className={`post-card text-[var(--paragraph)]  h-[170px] max-md:h-max post  bg-[var(--card-background)] cursor-pointer hovered  p-4 w-full rounded-lg flex items-start justify-start ${
                hoveredIndex !== null && hoveredIndex !== index ? "fade" : ""
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <a
                className="post-link w-full"
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="postShow  flex flex-col justify-start w-full gap-8 text-base">
                  <div>
                    <div className="post-date opacity-60">
                      {new Date(post.pubDate).toLocaleDateString("English", {
                        year: "numeric",
                        month: "short",
                        day: "2-digit",
                      })}
                    </div>
                    <p className="post-title w-[80%]">{post.title}</p>
                  </div>

                  <div>
                    {post.categories.map((category, categoryIndex) => (
                      <Badge
                        key={categoryIndex}
                        className="m-[5px] cursor-text bg-[var(--badge-color)] text-[var(--badge-text)]"
                      >
                        {category.trim()}
                      </Badge>
                    ))}
                  </div>
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
