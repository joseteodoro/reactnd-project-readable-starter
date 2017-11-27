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
import {fetchPosts} from './actions'

// TODO move all post table content to inline-post
class PostList extends React.Component {

  componentWillMount () {
    const { params } = this.props.match

    if (params && params.category) {
      this.props.getCategoryPosts(params.category)
    } else {
      this.props.getPosts()
    }
  }

  render () {
    const { posts } = this.props
    return (
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
  }
}

function mapStateToProps ({ posts }) {
  const { items } = posts
  return { posts: items.sort((left, right) => right.voteScore - left.voteScore) }
}

function mapDispatchToProps (dispatch) {
  return {
    getPosts: data => dispatch(fetchPosts(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostList)
