import type Author from "./author";

type PostType = {
  fields: {
    slug: string;
    title: string;
    date: string;
    coverImage: {
      fields: {
        file: {
          url: string;
        };
      };
    };
    author: Author;
    excerpt: string;
    ogImage: {
      fields: {
        url: string;
        description: string;
      };
    };
    content: string;
    tags: string[];
    seoTags: string[];
    minutes: string;
  };
  sys: {
    createdAt: string;
  };
};

export default PostType;
