import { NextPage } from "next";
import React from "react";
import { _getAllPosts } from "../../lib/getPosts";

const Posts: NextPage = ({ posts }: any) => {
  console.log(posts, " j");
  return <></>;
};

export const getStaticProps = async () => {
  const posts = await _getAllPosts();

  return {
    props: { posts },
  };
};

export default Posts;
