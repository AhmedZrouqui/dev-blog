import Avatar from './avatar';
import DateFormatter from './date-formatter';
import CoverImage from './cover-image';
import PostTitle from './post-title';
import type Author from '../interfaces/author';
import PostAvatar from './postAvatar';

type Props = {
  title: string;
  excerpt: string;
  coverImage: string;
  date: string;
  author: Author;
};

const PostHeader = ({ title, excerpt, coverImage, date, author }: Props) => {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="mb-1 text-accent-7 text-center text-sm">
        Published <DateFormatter dateString={date} />
      </div>
      <PostTitle>{title}</PostTitle>
      <div className="mb-6 text-accent-7 text-opacity-60 text-center max-w-3xl mx-auto">
        <p>{excerpt}</p>
      </div>
      <div className="mb-6 text-center text-accent-7 text-opacity-60 text-sm">
        <p>
          Written by{' '}
          <span className=" underline">{author?.fields.fullName}</span>
        </p>
      </div>
      <div className="mb-8 md:mb-16 sm:mx-0">
        <CoverImage title={title} src={coverImage} />
      </div>
    </div>
  );
};

export default PostHeader;
