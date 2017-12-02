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
import PostSorting from './post-sort'
import {fetchPosts, fetchPostsByCategory} from './actions'

class PostList extends React.Component {

  loadPostsToComponent () {
    const { params } = this.props.match
    if (params && params.category && params.category) {
      this.props.getCategoryPosts(params.category)
    } else {
      this.props.getPosts()
    }
  }

  componentWillMount () {
    this.loadPostsToComponent()
  }

  render () {
    const { posts } = this.props
    return (
      <div>
        <ReadableAppBar key='title-bar' title={`${this.props.match.params.category || 'All'} posts`} />
        <PostSorting />
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
  const { items, sortedBy } = posts
  console.log(`sorting by ${sortedBy}`)
  return { sortedBy, posts: items.sort((left, right) => right[sortedBy] - left[sortedBy]) }
}

function mapDispatchToProps (dispatch) {
  return {
    getPosts: data => dispatch(fetchPosts(data)),
    getCategoryPosts: data => dispatch(fetchPostsByCategory(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostList)
