import Link from 'next/link'
import Layout from '../components/Layout'

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1>Next intelifaz 👋</h1>
    <p>
      <Link href="/blog">
        <a>Blogs</a>
      </Link>
    </p>
  </Layout>
)

export default IndexPage
