import React from 'react'
import { connect } from 'react-redux'
import {Card, CardText} from 'material-ui/Card'
import ReadableAppBar from '../app-bar'
import Comment from '../comment/comment'
import Commands from './post-commands'

const Post = ({post, comments}) => (
  <div>
    <ReadableAppBar title={post.title} />
    <Card>
      <CardText>{post.body}</CardText>
    </Card>
    <Commands post={post} />
    <div>
      {comments.map((comment) => {
        return <div key={comment.id}><Comment comment={comment} post={post} /></div>
      })}
    </div>
  </div>
)

function mapStateToProps ({ post, comment }, {match}) {
  const postId = match.params.post_id
  const loadedComments = Object.keys(comment)
    .map((id) => comment[id])
    .filter((comment) => comment.parentId === postId)
    .sort((left, right) => left.voteScore - right.voteScore)
  const loadedPost = post[postId]
  return {
    post: loadedPost, comments: loadedComments
  }
}

export default connect(
  mapStateToProps
)(Post)
