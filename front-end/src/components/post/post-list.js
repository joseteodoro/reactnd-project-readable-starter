import React from 'react'
import {
  Table,
  TableBody,
  TableHeader
} from 'material-ui/Table'
import { connect } from 'react-redux'
import InlinePost from './inline-post'
import InlinePostHeader from './inline-post-header'
import ReadableAppBar from '../app-bar'
import PostForm from './form'

// TODO move all post table content to inline-post
const PostList = ({posts}) => (
  <div>
    <ReadableAppBar title='All posts' />
    <PostForm />
    <Table>
      <TableHeader>
        <InlinePostHeader />
      </TableHeader>
      <TableBody>
        {posts.map((post) => {
          return <InlinePost key={post.id} post={post} />
        })}
      </TableBody>
    </Table>
  </div>
)

function mapStateToProps ({ posts }) {
  const { items } = posts
  return { posts: items.sort((left, right) => left.voteScore - right.voteScore) }
}

export default connect(
  mapStateToProps
)(PostList)
