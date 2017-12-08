import React from 'react'
import { connect } from 'react-redux'
import ReadableAppBar from '../app-bar'
import {loadPost} from './actions'
import Post from './post'
import NotFound from '../not-found/page'

class PostView extends React.Component {

  componentDidMount () {
    if (!this.props.post || this.props.post !== this.props.match.params.post_id) {
      this.props.getPost(this.props.match.params.post_id)
    }
  }

  render () {
    const { post } = this.props
    return (
      <div>
        {post && post.id ? (
          <div>
            <ReadableAppBar title={post.title} />
            {post.deleted ? (
              <NotFound />
            ) : (
              <Post />
            )}
          </div>
        ) : (<ReadableAppBar title='Loading' />)}
      </div>
    )
  }
}

function mapStateToProps ({ posts }, {match}) {
  const {post} = posts
  return {post}
}

function mapDispatchToProps (dispatch) {
  return {
    getPost: data => dispatch(loadPost(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostView)
