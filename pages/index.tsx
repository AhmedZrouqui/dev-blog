import Container from "../components/container";
import MoreStories from "../components/more-stories";
import HeroPost from "../components/hero-post";
import Intro from "../components/intro";
import Layout from "../components/layout";
import { _getAllPosts } from "../lib/getPosts";
import Head from "next/head";
import { CMS_NAME } from "../lib/constants";
import Post from "../interfaces/post";

type Props = {
  posts: Post[];
};

export default function Index({ posts }: Props) {
  return (
    <>
      <Layout>
        <Head>
          <title>Ahmed Zrouqui | Dev Blog</title>
          <meta name="keywords" content="HTML, CSS, JavaScript, React, Web Developer, Blog, Ahmed Zrouqui, Dev Blog, Front-end, Back-end" />
          <meta name="description" content="Ahmed Zrouqui Dev blog, I will be sharing my daily coding challenges and knowledge in this blog." />
          <meta property="og:description" content="Ahmed Zrouqui Dev blog, I will be sharing my daily coding challenges and knowledge in this blog." />
          <meta name="author" content="Ahmed Zrouqui" />
        </Head>
        <Container>
          <Intro />
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
          {posts.length > 0 && <MoreStories posts={posts} />}
        </Container>
      </Layout>
    </>
  );
}

export const getStaticProps = async () => {
  const posts = await _getAllPosts();

  return {
    props: { posts },
  };
};
