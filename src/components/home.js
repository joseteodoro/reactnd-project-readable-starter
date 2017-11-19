import React from 'react'
import {
  Table,
  TableBody,
  TableHeader
} from 'material-ui/Table'
import { connect } from 'react-redux'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentAdd from 'material-ui/svg-icons/content/add'
import InlinePost from './post/inline-post'
import InlinePostHeader from './post/inline-post-header'
import ReadableAppBar from './app-bar'

const style = {
  margin: 24
}

// TODO move all post table content to inline-post
const Home = ({posts}) => (
  <div>
    <ReadableAppBar title='All posts' />
    <FloatingActionButton style={style}>
      <ContentAdd />
    </FloatingActionButton>
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
