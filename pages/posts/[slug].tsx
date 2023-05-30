import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import Container from '../../components/container';
import PostBody from '../../components/post-body';
import Header from '../../components/header';
import PostHeader from '../../components/post-header';
import Layout from '../../components/layout';
import PostTitle from '../../components/post-title';
import Head from 'next/head';
import AdSense from 'react-adsense';
import type PostType from '../../interfaces/post';
import { getBySlug, _getAllPosts } from '../../lib/getPosts';
import Script from 'next/script';

type Props = {
  post: PostType;
  morePosts: PostType[];
  preview?: boolean;
};

export default function Post({ post, preview }: Props) {
  const router = useRouter();
  if (!router.isFallback && !post?.fields.slug) {
    return <ErrorPage statusCode={404} />;
  }

  console.log('https:' + post.fields.coverImage?.fields.file.url);
  return (
    <Layout
      preview={preview}
      ogImage={'https://' + post.fields.coverImage?.fields.file.url}
    >
      <Container>
        <Header />
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article>
              <Head>
                <title>{post.fields.title}</title>
                <meta name="twitter:title" content={post.fields.title} />
                <meta
                  name="twitter:description"
                  content={post.fields?.seoDescription || post.fields?.excerpt}
                />
                <meta
                  name="twitter:image"
                  content={'https://' + post.fields.coverImage?.fields.file.url}
                />
                <meta
                  property="og:image"
                  content={'https://' + post.fields.coverImage?.fields.file.url}
                />
                <meta
                  property="og:image:secure_url"
                  content={'https://' + post.fields.coverImage?.fields.file.url}
                />
                <meta name="og:image:width" content="1200" />
                <meta name="og:image:height" content="630" />
                <meta
                  name="og:url"
                  content={'https://az-devblog.com/posts/' + post.fields?.slug}
                />
                <meta name="og:title" content={post.fields.title} />
                <meta name="og:type" content="article" />
                <meta
                  name="description"
                  content={post.fields?.seoDescription || post.fields?.excerpt}
                />
                <meta
                  property="og:description"
                  content={post.fields?.seoDescription || post.fields?.excerpt}
                />
                <meta
                  name="author"
                  content={post.fields.author.fields?.fullName}
                />
                {post.fields.seoTags && (
                  <meta
                    name="keywords"
                    content={post.fields.seoTags.join(',')}
                  />
                )}
              </Head>
              <PostHeader
                title={post.fields?.title}
                excerpt={post.fields.excerpt}
                coverImage={
                  post.fields.coverImage
                    ? 'https://' + post.fields.coverImage?.fields.file.url
                    : '/assets/images/blog_cover_placeholder.png'
                }
                date={post.sys.createdAt}
                author={post.fields?.author}
              />
              {/*<AdSense.Google
                client={process.env.NEXT_PUBLIC_GOOGLE_ADSENSE}
                slot="4018757202"
                style={{ display: 'block', textAlign: 'center', height: 250 }}
                layout="in-article"
                page_url={`https://az.devblog.com/blog/${post.fields.slug}`}
                format="fluid"
              />

              <Script>
                {`
                    (adsbygoogle = window.adsbygoogle || []).push({});
                    `}
              </Script>*/}

              <PostBody content={post?.fields?.content} />

              {/*<AdSense.Google
                client={process.env.NEXT_PUBLIC_GOOGLE_ADSENSE}
                slot="9036872489"
                style={{ display: 'block', textAlign: 'center', height: 250 }}
                layout="in-article"
                page_url={`https://az.devblog.com/blog/${post.fields.slug}`}
                format="fluid"
              />

              <Script>
                {`
                    (adsbygoogle = window.adsbygoogle || []).push({});
                    `}
            </Script>*/}
            </article>
          </>
        )}
      </Container>
    </Layout>
  );
}

type Params = {
  params: {
    slug: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const post = await getBySlug(params.slug);

  return {
    props: {
      post: post[0],
    },
    revalidate: 1,
  };
}

export async function getStaticPaths() {
  const posts = await _getAllPosts();

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: (post as PostType).fields.slug,
        },
      };
    }),
    fallback: 'blocking',
  };
}
