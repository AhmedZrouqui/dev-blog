import { NextPage } from "next";
import Head from "next/head";
import React, { useCallback, useState } from "react";
import Container from "../../components/container";
import Header from "../../components/header";
import Intro from "../../components/intro";
import Layout from "../../components/layout";
import MoreStories from "../../components/more-stories";
import { _getAllPosts } from "../../lib/getPosts";

const Posts: NextPage = ({ posts }: any) => {

  const [blogs, setBlogs] = useState(posts ?? []);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchQueryUpdate = useCallback(
    (value: string) => {
      setSearchQuery(value);
    }, [searchQuery]
  )

  return (
    <>
      <Layout>
        <Head>
          <title>Blogs - Ahmed Zrouqui | Dev Blog</title>
        </Head>
      
        <Container>
          <Header />
          {posts.length > 0 && <MoreStories posts={blogs} isBlogsPage searchQueryUpdate={handleSearchQueryUpdate} />}
        </Container>
      </Layout>
    </>);;
};

export const getStaticProps = async({params}) => {
  const posts = await _getAllPosts();
  console.log(params)

  return {
    props: { posts },
  };
};

export default Posts;
