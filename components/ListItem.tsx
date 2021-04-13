import React from 'react'
import Link from 'next/link'

import { Blog } from '../interfaces'

type Props = {
  data: Blog
}

const ListItem = ({ data }: Props) => (
  <Link href="/blog/[slug]" as={`/blog/${data.slug}`}>
    <a>
      {data.title}
    </a>
  </Link>
)

export default ListItem
