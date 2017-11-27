import React from 'react'
import { connect } from 'react-redux'
import {Card, CardText} from 'material-ui/Card'
import ReadableAppBar from '../app-bar'
import Comment from '../comment/comment'
import Commands from './post-commands'
import {loadPost} from './actions'

class Post extends React.Component {

  componentWillMount () {
    if (!this.props.post) {
      this.props.getPost(this.props.match.params.post_id)
    }
  }

  render () {
    const { post, comments } = this.props
    return (
      <div>
        {post && post.id ? (
          <div>
            <ReadableAppBar title={post.title} />
            <Card>
              <CardText>{post.body}</CardText>
            </Card>
            <Commands post={post} />
          </div>
        ) : (<ReadableAppBar title='Loading' />)}
        {comments ? (
          <div>
            {comments.map((comment) => {
              return <div key={comment.id}><Comment comment={comment} post={post} /></div>
            })}
          </div>
        ) : (
          <Card>
            <CardText>Loading comments</CardText>
          </Card>
        )}
      </div>
    )
  }
}

function mapStateToProps ({ posts }, {match}) {
  const {post, comments} = posts
  const res = {}
  if (post) {
    res.post = post
  }
  if (comments && comments.length) {
    res.comments = comments.sort((left, right) => right.voteScore - left.voteScore)
  } else {
    res.comments = []
  }
  return res
}

function mapDispatchToProps (dispatch) {
  return {
    getPost: data => dispatch(loadPost(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post)
