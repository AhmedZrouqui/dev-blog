import PostPreview from "./post-preview";
import type Post from "../interfaces/post";
import Link from "next/link";
import { debounce } from "lodash";
import { SyntheticEvent } from "react";

type Props = {
  posts: Post[];
  isBlogsPage?: boolean;
  searchQueryUpdate?: (v: string) => void;
};

const MoreStories = ({ posts, isBlogsPage, searchQueryUpdate }: Props) => {
  const handleSearchChange = debounce(function (e: SyntheticEvent) {
    searchQueryUpdate((e.target as HTMLInputElement).value as string);
  }, 500);

  return (
    <section>
      <div className="flex justify-between items-center border-b-[1px]">
        <h1 className="mb-8 text-3xl md:text-4xl font-medium tracking-tighter leading-tight">
          Blogs
        </h1>
        <input
          type={"text"}
          placeholder="Search blogs..."
          onChange={handleSearchChange}
          className="outline-none p-2 rounded-md bg-gray-100 "
        />
        <></>
      </div>

      <div className="">
        {posts.map((post) => (
          <PostPreview
            key={post?.fields?.slug}
            title={post?.fields?.title}
            coverImage={
              post.fields?.coverImage
                ? "https:" + post.fields.coverImage?.fields.file.url
                : "/assets/images/blog_cover_placeholder.png"
            }
            date={post.sys.createdAt}
            author={post.fields.author}
            slug={post.fields.slug}
            excerpt={post.fields.excerpt}
            tags={post.fields.tags}
            minutes={post.fields.minutes || "3"}
          />
        ))}
      </div>
    </section>
  );
};

export default MoreStories;
