import React from 'react'
import {
  Table,
  TableBody,
  TableHeader
} from 'material-ui/Table'
import InlinePost from './inline-post'
import InlinePostHeader from './inline-post-header'


const defaultData = [{
    id: '8xf0y6ziyjabvozdd253nd',
    timestamp: 1467166872634,
    title: 'Udacity is the best place to learn React',
    body: 'Everyone says so after all.',
    author: 'thingtwo',
    category: 'react',
    voteScore: 6,
    deleted: false,
    commentCount: 2
  },{
    id: '6ni6ok3ym7mf1p33lnez',
    timestamp: 1468479767190,
    title: 'Learn Redux in 10 minutes!',
    body: 'Just kidding. It takes more than 10 minutes to learn technology.',
    author: 'thingone',
    category: 'redux',
    voteScore: -5,
    deleted: false,
    commentCount: 0
  }]

const Posts = (props) => (
  <Table>
    <TableHeader>
      <InlinePostHeader />
    </TableHeader>
    <TableBody>
      {defaultData.map((post) => {
        return <InlinePost post={post} />
      })}
    </TableBody>
  </Table>
)

export default Posts
