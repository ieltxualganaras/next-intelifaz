import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import { getBlogBySlug, getAllBlogsWithSlug } from '../../lib/graphcms/graphcms';
import BlogTitle from '../../modules/blog/components/BlogTitle';
import Head from 'next/head'
import Layout from '../../components/Layout';

export default function Blog({ blog }:any) {
  const router = useRouter()
  if (!router.isFallback && !blog?.slug) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <Layout>
      {/* <Container>
        <Header /> */}
        {router.isFallback ? (
          <BlogTitle blogTitle={blog?.title || ''}>Loading…</BlogTitle>
        ) : (
          <>
            <article>
              <Head>
                <title>
                  {blog.title}
                </title>
                {/* <meta property="og:image" content={post.ogImage.url} /> */}
              </Head>
              <BlogTitle blogTitle={ blog.title } />
              {/* <BlogHeader
                title={post.title}
                coverImage={post.coverImage}
                date={post.date}
                author={post.author}
              />
              <BlogBody content={post.content} /> */}
            </article>
            {/* {morePosts.length > 0 && <MoreStories posts={morePosts} />} */}
          </>
        )}
      {/* </Container> */}
    </Layout>
  )
}

export async function getStaticProps({ params, preview = false }:any) {
  const data = await getBlogBySlug(params.slug, preview)
  // console.log(data);
  return {
    props: {
      preview,
      blog: data.blog,
      // morePosts: data.morePosts || [],
    },
  }
}

export async function getStaticPaths() {
  const blogs = await getAllBlogsWithSlug()
  // console.log(blogs);
  return {
    paths: blogs.map(({ slug }:any) => ({
      params: { slug },
    })),
    fallback: true,
  }
}