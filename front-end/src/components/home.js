import React from 'react'
import {
  Table,
  TableBody,
  TableHeader
} from 'material-ui/Table'
import { connect } from 'react-redux'
import InlinePost from './post/inline-post'
import InlinePostHeader from './post/inline-post-header'
import ReadableAppBar from './app-bar'
import PostForm from './post/form'

// TODO move all post table content to inline-post
const Home = ({posts}) => (
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

function mapStateToProps ({ post }) {
  const posts = Object.keys(post)
    .map((id) => post[id])
    .sort((left, right) => left.voteScore - right.voteScore)
  return {
    posts
  }
}

export default connect(
  mapStateToProps
)(Home)
