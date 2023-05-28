import Avatar from './avatar';
import DateFormatter from './date-formatter';
import CoverImage from './cover-image';
import Link from 'next/link';
import type Author from '../interfaces/author';

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
  minutes,
}: Props) => {
  return (
    <div className="md:flex justify-between gap-3 w-[100%] items-center py-6 border-b-[1px] border-accent-1">
      <div className="mb-2 md:mb-0">
        <div className="flex items-center mb-3">
          <div className="text-gray-800 text-sm font-medium">
            <Avatar
              name={author?.fields?.fullName + ' -' ?? 'Anonymous'}
              picture={
                author?.fields?.image
                  ? 'https:' + author.fields.image.fields.file.url
                  : 'assets/images/default_profile_picture.png'
              }
            />
          </div>
          <div className="text-sm lg:text-md ml-1">
            <DateFormatter dateString={date} />.
          </div>
          <div className="flex items-center mx-2">
            <p className="text-accent-7 text-sm text-opacity-60">
              {minutes} minutes read.
            </p>
          </div>
        </div>
        <div className="max-w-[800px]">
          <h3 className="text-xl lg:text-3xl font-extrabold mb-2 leading-snug text-accent-8">
            <Link
              as={`/posts/${slug}`}
              href="/posts/[slug]"
              className="hover:underline"
            >
              {title}
            </Link>
          </h3>
          <div className="mb-3">
            <p className="leading-relaxed text-sm text-accent-7 text-opacity-60">
              {excerpt}
            </p>
          </div>
          <div className="flex gap-2">
            {tags &&
              tags
                .slice(0, 2)
                .map((tag: string) => (
                  <div className="bg-accent-2 text-gray-800 py-2 px-4 rounded-md text-xs cursor-pointer font-normal selection:bg-none">
                    {tag}
                  </div>
                ))}
            {tags && tags.length > 2 && (
              <div className=" bg-accent-2 text-gray-800 py-2 px-4 rounded-md text-xs cursor-pointer font-normal selection:bg-none">
                +{tags.length - 2}
              </div>
            )}
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
