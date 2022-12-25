import { NextPage } from "next";
import Head from "next/head";
import React, { useCallback, useEffect, useState } from "react";
import Container from "../../components/container";
import Header from "../../components/header";
import Intro from "../../components/intro";
import Layout from "../../components/layout";
import MoreStories from "../../components/more-stories";
import { _getAllPosts } from "../../lib/getPosts";
import Post from "../../interfaces/post";

interface IProps {
  posts: Post[];
}

const Posts: NextPage = ({ posts }: IProps) => {
  const [blogs, setBlogs] = useState(posts ?? []);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchQueryUpdate = useCallback(
    (value: string) => {
      setSearchQuery(value);
    },
    [searchQuery]
  );

  useEffect(() => {
    if (searchQuery.length > 0) {
      setBlogs((prev) => {
        return posts.filter((post: Post) =>
          post.fields.title.toLowerCase().includes(searchQuery.toLowerCase())
        );
      });
    } else {
      setBlogs(posts);
    }
  }, [searchQuery]);

  return (
    <>
      <Layout>
        <Head>
          <title>Blogs - Ahmed Zrouqui | Dev Blog</title>
        </Head>

        <Container>
          <Header />
          {posts.length > 0 && (
            <MoreStories
              posts={blogs}
              isBlogsPage
              searchQueryUpdate={handleSearchQueryUpdate}
            />
          )}
        </Container>
      </Layout>
    </>
  );
};

export const getStaticProps = async ({ params }) => {
  const posts = await _getAllPosts();

  return {
    props: { posts },
    revalidate: 10,
  };
};

export default Posts;
