type Author = {
  fields: {
    fullName: string;
    slug: string;
    image: {
      fields: {
        url: string;
        title: string;
        description: string;
      };
    }[];
  };
};

export default Author;
