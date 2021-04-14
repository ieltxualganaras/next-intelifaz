// import { GetStaticProps } from 'next'
import Link from 'next/link'

import { Blog } from '../../interfaces'
// import { sampleBlogData } from '../../utils/sample-data'
import Layout from '../../components/Layout'
import List from '../../components/List'
import { getAllBlogs } from '../../lib/graphcms/graphcms'

type Props = {
  blogs: Blog[]
}

const Ssr = ({ blogs }: Props) => {
  return(
  <Layout title="Blogs">
    <h1>Blogs </h1>
    <p>You are currently on: /blog</p>
    <List items={blogs} />
    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>
  </Layout>
)}

// export const getStaticProps: GetStaticProps = async () => {
//   // Example for including static props in a Next.js function component page.
//   // Don't forget to include the respective types for any props passed into
//   // the component.
//   const items: Blog[] = sampleBlogData
//   return { props: { items } }
// }


export async function getServerSideProps({ preview = false }) {
  const blogs = (await getAllBlogs(preview)) || []
  return {
    props: { blogs, preview },
  }
}

export default Ssr
