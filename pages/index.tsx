import Container from '../components/container';
import MoreStories from '../components/more-stories';
import Layout from '../components/layout';
import { _getAllPosts } from '../lib/getPosts';
import Head from 'next/head';
import { CMS_NAME } from '../lib/constants';
import Post from '../interfaces/post';
import Script from 'next/script';
import Header from '../components/header';
import { useCallback, useEffect, useState } from 'react';

type Props = {
  posts: Post[];
};

export default function Index({ posts }: Props) {
  const [blogs, setBlogs] = useState(posts ?? []);
  const [searchQuery, setSearchQuery] = useState('');

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
          <title>AZ | Dev Blog</title>
          <meta property="og:site_name" content="Az Devblog" />
          <meta property="og:title" content="AZ | Dev Blog" />
          <meta
            name="keywords"
            content="HTML, CSS, JavaScript, React, Web Developer, Blog, Ahmed Zrouqui, Dev Blog, Front-end, Back-end, code tutorial, programming tips, software development, web development, web development, tech blog, coding advice, development resources, software engineering, tech news"
          />
          <meta
            name="description"
            content="Welcome to our dev blog, where you can find expert programming tips, code tutorials, and resources for all levels of software development. Whether you're a beginner looking to learn about new IT topics or an experienced developer looking for the latest tech news and insights."
          />
          <meta
            property="og:description"
            content="Welcome to our dev blog, where you can find expert programming tips, code tutorials, and resources for all levels of software development. Whether you're a beginner looking to learn about new IT topics or an experienced developer looking for the latest tech news and insights."
          />
          <meta name="author" content="Ahmed Zrouqui" />
        </Head>
        <Container>
          <Header />
          {/*heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )*/}
          {posts.length > 0 && (
            <MoreStories
              posts={blogs}
              searchQueryUpdate={handleSearchQueryUpdate}
            />
          )}
        </Container>
      </Layout>
    </>
  );
}

export const getStaticProps = async () => {
  const posts = await _getAllPosts();

  return {
    props: { posts },
    revalidate: 1,
  };
};
