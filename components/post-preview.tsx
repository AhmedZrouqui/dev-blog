import Avatar from "./avatar";
import DateFormatter from "./date-formatter";
import CoverImage from "./cover-image";
import Link from "next/link";
import type Author from "../interfaces/author";
import Image from "next/image"

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
  tags: string[];
  minutes: string;
};

const PostPreview = ({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
  tags,
  minutes
}: Props) => {
  return (
    <div className="md:flex justify-between gap-3 w-[100%] items-center py-6 border-b-[1px]">
      <div className="mb-2 md:mb-0">
        <div className="flex items-center mb-3">
          <div className="mr-2">
          <Avatar
            name={author?.fields?.fullName ?? "Anonymous"}
            picture={
              author?.fields?.image ? "https:"+ author.fields.image.fields.file.url :
              "assets/images/default_profile_picture.png"
            }
          />
          </div>
          
          &#x2022;
          <div className="text-sm lg:text-md mx-2">
          <DateFormatter dateString={date} />
          </div>
          &#x2022;
          <div className="flex items-center mx-2">
            <Image
              src={'/assets/images/clock.svg'}
              alt="read-time-svg"
              className="mr-2 w-4 h-4 stroke-slate-600"
              width={4}
              height={4}
            />
            <p className="text-gray-600">
              {minutes} minutes read.
            </p>
          </div>
        </div>
        <div className="max-w-[800px]">
          <h3 className="text-xl lg:text-4xl font-bold mb-3 leading-snug">
            <Link
              as={`/posts/${slug}`}
              href="/posts/[slug]"
              className="hover:underline"
            >
              {title}
            </Link>
          </h3>
          <div className="mb-3">
          <p className="text-md lg:text-lg leading-relaxed">{excerpt}</p>
          </div>
          <div className="flex gap-2">
            {
              tags &&
              tags.slice(0,2).map((tag: string) => <div className="bg-gray-200 py-2 px-4 rounded-md text-xs cursor-pointer text-[#333] selection:bg-none">
                {tag}
              </div>)
            }
            {
              tags && tags.length > 2 && (
                <div className="bg-gray-200 py-2 px-4 rounded-md text-xs cursor-pointer text-[#333] selection:bg-none">
                  +{tags.length - 2}
                </div>
              )
            }
          </div>
        </div>
      </div>
      <div className="">
        <CoverImage slug={slug} title={title} src={coverImage} />
      </div>
    </div>
  );
};

export default PostPreview;
