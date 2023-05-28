import { ReactNode } from 'react';

type Props = {
  children?: ReactNode;
};

const PostTitle = ({ children }: Props) => {
  return (
    <h1 className="text-5xl font-bold tracking-tighter text-accent-8 text-center leading-tight md:leading-none mb-6">
      {children}
    </h1>
  );
};

export default PostTitle;
