import PostPreview from "./post-preview";
import type Post from "../interfaces/post";
import Link from "next/link";

type Props = {
  posts: Post[];
};

const MoreStories = ({ posts }: Props) => {
  return (
    <section>
      <div className="flex justify-between items-center">
        <h2 className="mb-8 text-5xl md:text-7xl font-bold tracking-tighter leading-tight">
          Latest Posts
        </h2>
        <Link href="/posts">View all posts</Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
        {posts.map((post) => (
          <PostPreview
            key={post.fields.slug}
            title={post.fields.title}
            coverImage={
              post.fields.coverImage
                ? "https://" + post.fields.coverImage?.fields.file.url
                : "/assets/images/blog_cover_placeholder.png"
            }
            date={post.sys.createdAt}
            author={post.fields.author}
            slug={post.fields.slug}
            excerpt={post.fields.excerpt}
          />
        ))}
      </div>
    </section>
  );
};

export default MoreStories;
