import * as React from 'react'
import ListItem from './ListItem'
import { Blog } from '../interfaces'

type Props = {
  items: Blog[]
}

const List = ({ items }: Props) => (
  <ul>
    {items.map((item: Blog) => (
      <li key={item.slug}>
        <ListItem data={item} />
      </li>
    ))}
  </ul>
)

export default List
