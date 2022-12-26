import Avatar from "./avatar";
import DateFormatter from "./date-formatter";
import CoverImage from "./cover-image";
import PostTitle from "./post-title";
import type Author from "../interfaces/author";
import PostAvatar from "./postAvatar";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  author: Author;
};

const PostHeader = ({ title, coverImage, date, author }: Props) => {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="hidden md:block md:mb-12">
        <div>
          <PostAvatar
            name={author ? author?.fields.fullName : "Anonymous"}
            picture={
              author?.fields?.image ? "https:"+ author.fields.image.fields.file.url :
                "assets/images/default_profile_picture.png"
            }
          />
        </div>
      </div>
      <div className="mb-8 md:mb-16 sm:mx-0">
        <CoverImage title={title} src={coverImage} />
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="block md:hidden mb-6">
          <PostAvatar
            name={author ? author?.fields.fullName : "Anonymous"}
            picture={
              author?.fields?.image ? "https:"+ author.fields.image.fields.file.url :
                "assets/images/default_profile_picture.png"
            }
          />
        </div>
        <div className="mb-6 text-lg">
          <DateFormatter dateString={date} />
        </div>
      </div>
    </>
  );
};

export default PostHeader;
